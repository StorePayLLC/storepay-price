// /** @type {import('@lingui/conf').LinguiConfig} */
import { LinguiConfig } from '@lingui/conf';

import { availableLocales } from './src/config/internalization';

const config: LinguiConfig = {
  locales: availableLocales as unknown as string[],
  sourceLocale: 'en',
  format: 'po',
  compileNamespace: 'ts',
  catalogs: [
    {
      path: 'src/translations/messages/{locale}',
      include: ['<rootDir>'],
      exclude: ['**/.next/**', '**/*.d.ts', '**/*.generated.ts', '**/node_modules/**'],
    },
  ],
};

export default config;
