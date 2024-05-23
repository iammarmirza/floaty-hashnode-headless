'use client'
import { AboutMe } from "@/components/AboutMe";
import { Blogs } from "@/components/Blogs";
import { ContactMe } from "@/components/ContactMe";
import { Container } from "@/components/Container";
import { Projects } from "@/components/Projects";

export default function Home() {
  
  return (
    <Container>
      <AboutMe />
      <Projects />
      <Blogs />
      <ContactMe />
    </Container>
  );
}
