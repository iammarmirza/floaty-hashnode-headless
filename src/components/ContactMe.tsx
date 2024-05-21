import { ArrowRightIcon } from "@heroicons/react/24/outline"
import { SocialLinks } from "./SocialLinks"

export const ContactMe = () => {
    return (
        <div className="bg-white w-full shadow-lg rounded-3xl p-6 md:p-8 flex flex-col items-center gap-5 mb-20">
            <h2 className="text-2xl lg:text-3xl font-semibold">Have a Project Idea?</h2>
            <button className="flex text-md flex-row gap-2 items-center bg-slate-800 text-white px-4 py-2 rounded-3xl hover:gap-3 hover:opacity-75">
                Let's Connect
                <ArrowRightIcon className="h-6 w-6" />
            </button>
            <SocialLinks />
            <p className="text-slate-500 text-sm">Made by <a href="//twitter.com/iammarmirza" target="_blank">Ammar Mirza</a></p>
            <p className="text-slate-500 text-sm">Copyright 2024. All rights reserved.</p>
        </div>
    )
}