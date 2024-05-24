import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'https://gql.hashnode.com/',
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
      }
    },
  }
};

export default config;