import Link from "next/link"
import { SingleProject } from "./SingleProject"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { PROJECTS } from "@/utils/constants"

export const Projects = () => {
    return (
        <div className="bg-white w-full shadow-lg rounded-3xl p-6 flex flex-col">
            <div className="w-full flex flex-row justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold text-slate-800">Projects</h2>
                <Link
                    href={'/project'}
                    className="hidden md:flex text-sm flex-row items-center gap-2 rounded-full px-3 py-1 hover:bg-slate-600 hover:text-white hover:gap-3">
                    All Projects <FontAwesomeIcon icon={faArrowRight} />
                </Link>
            </div>
            <div className="w-full gap-5 flex flex-col mx-auto sm:flex-row sm:justify-center md:gap-8">
               {
                PROJECTS.slice(0, 2).map(project => (
                    <SingleProject project={project} key={project.name}/>
                ))
               }
            </div>
            <Link
                href={'/project'}
                className="flex mt-6 text-sm sm:text-base md:hidden flex-row items-center gap-2 rounded-full shadow-sm px-4 py-2 hover:bg-slate-600 hover:text-white hover:gap-3 self-center">
                All Projects <FontAwesomeIcon icon={faArrowRight} />
            </Link>
        </div>
    )
}