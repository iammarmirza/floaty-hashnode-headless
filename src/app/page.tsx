import { AboutMe } from "@/components/AboutMe";
import { Blogs } from "@/components/Blogs";
import { ContactMe } from "@/components/ContactMe";
import { Container } from "@/components/Container";
import { Projects } from "@/components/Projects";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { PublicationDocument } from "@/gql/graphql";
import request from "graphql-request";
import getQueryClient from "@/utils/getQueryClient";

export default async function Home() {
  const queryClient = getQueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['PublicationInfo'],
    queryFn: async () =>
      request("https://gql.hashnode.com/",
        PublicationDocument,
        {
          host: "ammarmirza.hashnode.dev"
        }
      )
  })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Container>
        <AboutMe />
        <Projects />
        <Blogs />
        <ContactMe />
      </Container>
    </HydrationBoundary>

  );
}
