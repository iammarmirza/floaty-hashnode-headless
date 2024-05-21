import { Container } from "@/components/Container"
import { SingleProject } from "@/components/SingleProject"
import { ContactMe } from "@/components/ContactMe"
export default function Project () {
    return (
        <Container>
            <div className="bg-white rounded-3xl px-5 py-5 flex-col flex gap-5 items-center">
                <h1 className="text-3xl md:text-4xl font-semibold text-slate-800">Projects</h1>
                <div className="flex flex-wrap justify-center gap-5 w-full">
                    <SingleProject />
                    <SingleProject />
                </div>
            </div>
            <ContactMe />
        </Container>
    )
}