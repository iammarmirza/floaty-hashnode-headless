import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

export const SingleProject = () => {
    return (
        <div className="w-full px-4 py-4 rounded-2xl border border-zinc-100 hover:shadow-md group sm:max-w-72 md:max-w-80 lg:max-w-96 items-center">
            <div className="relative flex flex-col gap-3 w-full">
                <div className="flex w-full aspect-video border rounded-xl overflow-hidden">
                    <Image src={'/next.svg'} width={200} height={200} alt="Project Image" className="flex-1" />
                </div>
                <p className="text-slate-500">Web Design</p>
                <p className="font-semibold mb-6 text-xl">Thelist Framer Website</p>
                <button className="hidden absolute group-hover:block right-1 bottom-1">
                    <FontAwesomeIcon icon={faArrowRight} size="lg" />
                </button>
            </div>
        </div>
    )
}