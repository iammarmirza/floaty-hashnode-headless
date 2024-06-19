# Floaty Hashnode Headless

Floaty is a portfolio template inspired by Hashnode Headless cooked in NextJs 14.

## How to deploy

The recommended approach is deploying to Vercel. If you don't have an account already, you can sign up for a free plan.

* Fork this repo
* Create a new project on Vercel and connect this repo
* Choose Next.js as framework preset (just above Root Directory setting).
* Set the following environment variables

``` 
NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT=https://gql.hashnode.com/
NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST=ammarmirza.hashnode.dev --> Change this to your Hashnode blog URL i.e. handle.hashnode.dev
```
Once this is deployed, just visit Vercel's auto generated domain to ensure it loads fine. You can always point `NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST` to a different domain such as `engineering.hashnode.com` 


### Running Locally
* Clone the repo in your local database. 
* Copy `.env.example` to `.env.local`
* Install dependencies by running `yarn`
* Run the command `yarn dev`

Visit https://localhost:3000!
