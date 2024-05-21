import Image from "next/image"
import { ArrowRightIcon } from "@heroicons/react/24/outline"

export const SingleBlog = () => {
    return (
        <div className="w-full px-4 py-4 rounded-2xl border-2 shadow-sm hover:shadow-md group max-w-96">
            <div className="relative flex flex-col gap-3 w-full">
                <div className="flex w-full aspect-video border rounded-xl overflow-hidden">
                    <Image src={'/next.svg'} width={200} height={200} alt="Project Image" className="flex-1" />
                </div>
                <h3 className="font-semibold text-xl">Snakes and Ladders Game using Vanilla JS - A Tutorial</h3>
                <p className="text-slate-500 text-justify mb-6">Hey everyone, If you are trying to master Javascript, there is no better way to do it than making projects. The Snakes and Ladders game</p>
                <button className="hidden absolute group-hover:block right-1 bottom-1">
                    <ArrowRightIcon className="h-6 w-6 text-slate-500" />
                </button>
            </div>
        </div>
    )
}