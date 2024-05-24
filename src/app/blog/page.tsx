import { ContactMe } from "@/components/ContactMe"
import { Container } from "@/components/Container"
import { SingleBlog } from "@/components/SingleBlog"
export default function Blog () {
    return (
        <Container>
            <div className="bg-white rounded-3xl px-5 py-5 flex-col flex gap-5 items-center">
                <h1 className="text-3xl md:text-4xl font-semibold text-slate-800">Blogs</h1>
                <div className="flex flex-wrap justify-center gap-5 w-full">
                    
                </div>
            </div>
            <ContactMe />
        </Container>
    )
}