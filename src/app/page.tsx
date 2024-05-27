import { AboutMe } from "@/components/AboutMe";
import { Blogs } from "@/components/Blogs";
import { ContactMe } from "@/components/ContactMe";
import { Container } from "@/components/Container";
import { Projects } from "@/components/Projects";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import getQueryClient from "@/utils/getQueryClient";
import { usePublicationQuery } from "../../generated/graphq";
const host = process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST as string

export default async function Home() {
  const queryClient = getQueryClient()

  await queryClient.prefetchQuery({
    queryKey: usePublicationQuery.getKey({
      host
    }),
    queryFn: usePublicationQuery.fetcher({
      host
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
