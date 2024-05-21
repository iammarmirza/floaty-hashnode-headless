import Image from "next/image"
import { ArrowRightIcon } from "@heroicons/react/24/outline"

export const SingleProject = () => {
    return (
        <div className="w-full px-4 py-4 rounded-2xl border-2 shadow-sm hover:shadow-md group max-w-96">
            <div className="relative flex flex-col gap-3 w-full">
                <div className="flex w-full aspect-video border rounded-xl overflow-hidden">
                    <Image src={'/next.svg'} width={200} height={200} alt="Project Image" className="flex-1" />
                </div>
                <p className="text-slate-500">Web Design</p>
                <p className="font-semibold mb-6 text-xl">Thelist Framer Website</p>
                <button className="hidden absolute group-hover:block right-1 bottom-1">
                    <ArrowRightIcon className="h-6 w-6 text-slate-500" />
                </button>
            </div>
        </div>
    )
}