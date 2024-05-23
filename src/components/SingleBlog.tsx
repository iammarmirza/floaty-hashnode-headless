import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

export const SingleBlog = () => {
    return (
        <div className="w-full px-4 py-4 rounded-2xl border-2 shadow-sm sm:max-w-72 hover:shadow-md group md:max-w-80 lg:max-w-96 items-center">
            <div className="relative flex flex-col gap-3 w-full">
                <div className="flex w-full aspect-video border rounded-xl overflow-hidden">
                    <Image src={'/next.svg'} width={200} height={200} alt="Project Image" className="flex-1" />
                </div>
                <h3 className="font-semibold text-xl">Snakes and Ladders Game using Vanilla JS - A Tutorial</h3>
                <p className="text-slate-500 text-justify mb-6">Hey everyone, If you are trying to master Javascript, there is no better way to do it than making projects. The Snakes and Ladders game</p>
                <button className="hidden absolute group-hover:block right-1 bottom-1">
                    <FontAwesomeIcon icon={faArrowRight} size="lg"/>
                </button>
            </div>
        </div>
    )
}