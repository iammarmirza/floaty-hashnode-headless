import { Container } from "@/components/Container"
import { SingleProject } from "@/components/SingleProject"
import { ContactMe } from "@/components/ContactMe"
import { PROJECTS } from "@/utils/constants"
export default function Project() {
    return (
        <Container>
            <div className="bg-white rounded-3xl px-5 py-5 flex-col flex gap-5">
                <h1 className="text-3xl md:text-4xl font-semibold text-slate- w-full text-center">Projects</h1>
                <div className="w-full gap-5 flex flex-col mx-auto sm:flex-row sm:justify-center md:gap-8">
                    {
                        PROJECTS.slice(0, 2).map(project => (
                            <SingleProject project={project} key={project.name} />
                        ))
                    }
                </div>
            </div>
            <ContactMe />
        </Container>
    )
}