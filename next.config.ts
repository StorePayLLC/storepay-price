import { NextConfig } from 'next';

const { DuplicateReporterPlugin } = require('duplicate-dependencies-webpack-plugin');

const ANALYZE = process.env.ANALYZE;

const nextConfig: NextConfig = {
  logging: { fetches: { fullUrl: true, hmrRefreshes: true } },
  reactStrictMode: false,
  experimental: {
    swcPlugins: [['@lingui/swc-plugin', {}]],
    turbo: {
      rules: {
        '*.svg': { loaders: ['@svgr/webpack'], as: '*.js' },
        '*.po': {
          loaders: ['@lingui/loader'],
          as: '*.js',
        },
      },
    },
  },
  sassOptions: {
    silenceDeprecations: ['legacy-js-api'],
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storepay-backend.s3.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
    ],
  },
  eslint: {
    dirs: ['src/app', 'src/components', 'src/config', 'src/lib'],
    ignoreDuringBuilds: false,
  },
  modularizeImports: {
    lodash: {
      transform: 'lodash/{{member}}',
      preventFullImport: true,
    },
    '@ant-design/icons': {
      transform: '@ant-design/icons/lib/icons/{{member}}',
      preventFullImport: true,
    },
    // antd: {
    //   transform: 'antd/lib/{{ kebabCase member }}',
    //   preventFullImport: true,
    // },
  },
  webpack: (config, { webpack }) => {
    config.resolve.extensions =
      process.env.NODE_ENV === 'production'
        ? ['.prod.tsx', '.prod.ts', '.tsx', '.ts', '.js', '.jsx', '.json', '.wasm']
        : ['.dev.tsx', '.dev.ts', '.tsx', '.ts', '.js', '.jsx', '.json', '.wasm'];

    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule: { test: RegExp }) => rule.test?.test?.('.svg'));

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        // issuer: /\.[jt]sx?$/,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader',
      },
    );

    config.module.rules.push({ test: /\.po/, use: ['@lingui/loader'] });

    config.plugins.push(new webpack.DefinePlugin({ 'globalThis.__DEV__': false }));

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i;
    if (ANALYZE) {
      config.plugins.push(new DuplicateReporterPlugin());
    }

    return config;
  },
  // transpilePackages: ['antd'],
  compress: true,
  poweredByHeader: false,
  // productionBrowserSourceMaps: false,

  async redirects() {
    return [
      { source: '/auth', destination: '/auth/login', permanent: true },
      { source: '/login', destination: '/auth/login', permanent: true },
    ];
  },
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(nextConfig);
