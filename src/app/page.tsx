import { AboutMe } from "@/components/AboutMe";
import { Blogs } from "@/components/Blogs";
import { ContactMe } from "@/components/ContactMe";
import { Container } from "@/components/Container";
import { Projects } from "@/components/Projects";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import getQueryClient from "@/utils/getQueryClient";
import { usePublicationQuery } from "../../generated/graphq";

export default async function Home() {
  const queryClient = getQueryClient()

  await queryClient.prefetchQuery({
    queryKey: usePublicationQuery.getKey({}),
    queryFn: usePublicationQuery.fetcher({
      host: "ammarmirza.hashnode.dev"
    })
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
