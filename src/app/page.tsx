'use client'

import { AboutMe } from "@/components/AboutMe";
import { Blogs } from "@/components/Blogs";
import { ContactMe } from "@/components/ContactMe";
import { Container } from "@/components/Container";
import { Projects } from "@/components/Projects";
import { useQuery } from "@tanstack/react-query";
import request from "graphql-request";

const query = `query Publication($host: String) {
  publication(host: $host) {
    id
    displayTitle
    url
    author{
      id
      username
      name
      bio {
        text
      }
    }
  }
}
`
export default function Home() {
  const {data} = useQuery({
    queryKey: ['articles'],
    queryFn: async () => 
      request(
        'https://gql.hashnode.com/',
        query,
        {
          host: "ammarmirza.hashnode.dev"
        }
      )
  })
  return (
    <Container>
      <div>{JSON.stringify(data)}</div>
      <AboutMe />
      <Projects />
      <Blogs />
      <ContactMe />
    </Container>
  );
}
