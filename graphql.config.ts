import type { IGraphQLConfig } from 'graphql-config';

import 'dotenv/config';

const headers = {
  Authorization: `Bearer eyJraWQiOiI0NmVlOGIwNzg3ZDI0YWVmODJmYjA1YTU4ZGIyNDc5YzBkMmZmOWMzMzAxNDM2MjkyZmUwYzkzNDNhYTkxNzQ4IiwiYXBwIjoxLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJTdG9yZVBheSIsImlhdCI6MTc0NTkyODM5NywiZXhwIjoxNzQ4NTIwMzk3LCJqdGkiOiI1MzRhZTlhMi1kMWQ4LTQyMWItYjcwZS00ZmFjYWMxZjc3OTgiLCJzY29wZXMiOiJwdWJsaWMgYmFja29mZmljZSIsInVzZXIiOnsiaWQiOjEwMDEyOTcsImVtYWlsIjpudWxsLCJwaG9uZSI6bnVsbH19.cRBTE5nue7dkaeRWVsfqQiYtNp7Mblz8EoINi7AhEvZrSSluULTMO53LFqOs_kQ_1fYjXJp2iugtjBJ0dWqYF1_qzl4jhP6nSmd7-OPyJIayqGphur37RmTzDtPsTkk3Ke7qjcARe_Ehz4zMwCBX5DZEWJNxOYOn0eKZpBNVlt2Yo6Oaz5PTbAud5dI0RVtYYdSTgzd2sHfDcxHErPt-W78-Vr-sUM5K4N-uYfwiRTKevzK1RgOZhTyivzdTf5I6bz2CbwHnlcZhnMjeAhfUr-qly1gqbOOd2avNQEsWA6c54J-ueraI-qfYbw06WdBlDv-C3ta2qXzii7AZHrqjQA`,
};

const config: IGraphQLConfig = {
  schema: 'schema.graphql',
  extensions: {
    endpoints: {
      default: {
        url: `http://localhost:3000/graphql`,
        introspect: true,
        headers,
      },
      staging: {
        url: 'https://api.test.storepay.global/graphql',
        introspect: true,
        headers,
      },
      headers: {
        url: 'https://api.v4.storepay.mn/graphql',
        headers,
      },
    },
  },
};

export default config;
