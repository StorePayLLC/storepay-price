import { CodegenConfig } from '@graphql-codegen/cli';

import 'dotenv/config';

const config: CodegenConfig = {
  schema: 'schema.graphql',
  documents: ['src/**/*.gql'],
  config: {
    sort: false,
    maybeValue: 'T',
    withHooks: true,
    preResolveTypes: true,
    flattenGeneratedTypes: false,
    flattenGeneratedTypesIncludeFragments: false,
    disableDescriptions: true,
    useTypeImports: true,
    allowEnumStringTypes: true,
  },
  generates: {
    'src/gql/graphql.ts': { plugins: ['typescript'] },
    'src/': {
      preset: 'near-operation-file',
      presetConfig: {
        baseTypesPath: 'gql/graphql.ts',
        extension: '.generated.tsx',
      },
      plugins: ['typescript-operations', 'typescript-react-apollo'],
    },
  },
  hooks: {
    afterAllFileWrite: ['prettier --write'],
  },
  overwrite: true,
  ignoreNoDocuments: true,
};

export default config;
