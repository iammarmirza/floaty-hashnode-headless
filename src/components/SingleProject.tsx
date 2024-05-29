import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faArrowRightArrowLeft, faArrowRightRotate, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

interface SingleProjectProps {
    project: {
        name: string,
        url: string,
        demoLink?: string,
        imageUrl?: string
    }
}
export const SingleProject = (props: SingleProjectProps) => {
    const { project } = props
    return (
        <div className="w-full px-4 py-4 rounded-2xl border border-zinc-100 hover:border-zinc-200 sm:max-w-72 md:max-w-80 lg:max-w-96 items-center">
            <div className="flex flex-col gap-3 w-full">
                {
                    project.imageUrl && <div className="flex w-full aspect-video border rounded-xl overflow-hidden">
                        <Image src={project.imageUrl} width={2000} height={2000} alt="Project Image" className="flex-1" />
                    </div>
                }
                <p className="font-semibold text-xl">{project.name}</p>
                <div className="flex flex-row gap-2 w-full items-center text-xs">
                    <a href={`//${project.url}`} target="_blank" className="flex gap-2 items-center rounded-full px-2 py-1 hover:bg-slate-600 hover:text-white">
                        <FontAwesomeIcon icon={faGithub} />
                        Source Code
                    </a>
                    {
                        project.demoLink && <a href={`//${project.demoLink}`} target='_blank' className="flex gap-2 items-center rounded-full px-2 py-1 hover:bg-slate-600 hover:text-white">
                        Live Demo
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                    }
                </div>
            </div>
        </div>
    )
}