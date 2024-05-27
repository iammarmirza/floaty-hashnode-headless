require("dotenv").config();
import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT,
  documents: ['src/**/*.graphql'],
  generates: {
    './generated/graphq.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-query'],
      config: {
        fetcher: {
          func: "../src/utils/reactQueryFetcher#fetchData"
        },
        exposeDocument: true,
        exposeQueryKeys: true,
        exposeFetcher: true,
        exposeMutationKeys: true,
        addInfiniteQuery: true,
        reactQueryVersion: 5
      }
    },
  }
};

export default config;