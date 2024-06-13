import { AboutMe } from '@/components/AboutMe';
import { Blogs } from '@/components/Blogs';
import { ContactMe } from '@/components/ContactMe';
import { Container } from '@/components/Container';
import { Projects } from '@/components/Projects';

export default async function Home() {
  return (
    <Container>
      <AboutMe />
      <Blogs />
      <Projects />
      <ContactMe />
    </Container>
  );
}
