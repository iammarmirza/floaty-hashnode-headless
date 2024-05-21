import Link from "next/link"
import { SingleProject } from "./SingleProject"
import { ArrowRightIcon } from "@heroicons/react/24/outline"

export const Projects = () => {
    return (
        <div className="bg-white w-full shadow-lg rounded-3xl p-6 md:p-8 flex flex-col items-start">
            <div className="w-full flex flex-row justify-between items-center mb-6">
                <h2 className="text-2xl md:text-3xl font-semibold text-slate-800">Projects</h2>
                <Link
                    href={'/project'}
                    className="hidden md:flex text-sm flex-row items-center gap-2 rounded-full shadow-sm px-4 py-2 hover:bg-slate-600 hover:text-white hover:gap-3">
                    All Projects <ArrowRightIcon className='h-4 w-4' />
                </Link>
            </div>
            <div className="w-full gap-5 flex flex-col md:flex-row md:justify-center md:gap-8">
                <SingleProject />
                <SingleProject />
                <Link
                    href={'/project'}
                    className="flex text-sm md:hidden flex-row items-center gap-2 rounded-full shadow-sm px-4 py-2 hover:bg-slate-600 hover:text-white hover:gap-3 self-center">
                    All Projects <ArrowRightIcon className='h-4 w-4' />
                </Link>
            </div>
        </div>
    )
}