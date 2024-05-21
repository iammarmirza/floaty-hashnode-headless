'use client'
import Image from "next/image"
import { SocialLinks } from "./SocialLinks"
import { ArrowRightIcon } from "@heroicons/react/20/solid"
import { usePathname } from "next/navigation"
import Link from "next/link"

export const AboutMe = () => {
    const path = usePathname()
    return (
        <div className="bg-white w-full shadow-md rounded-3xl p-6 flex flex-col md:flex-row gap-7 items-center">
            <div className="w-full md:w-52 aspect-square overflow-hidden flex border-2 rounded-xl">
                <Image src='/vercel.svg' alt="profile pic" width={200} height={200} className="flex-1" />
            </div>
            <div className="flex-1 flex flex-col justify-between">
                <div className="flex flex-row justify-between w-full items-center mb-4">
                    <div className="hidden md:block bg-green-200 text-green-700 py-1 px-3 text-sm rounded-2xl">&#8226; Available for work</div>
                    <div className="block md:hidden bg-green-200 text-green-700 py-1 px-3 text-sm rounded-2xl">&#8226; Available</div>
                    <SocialLinks />
                </div>
                <div className="flex flex-col md:w-[400px] gap-2 mb-4">
                    <p className="font-semibold text-2xl md:text-4xl text-slate-800">{
                        path === '/' ? 'Hi There! I am Natalie!' : 'Get to Know Me'
                    }</p>
                    <p className="text-slate-500">I'm a passionate web designer dedicated to crafting stunning and user-friendly online experiences.</p>
                </div>
                <div className="w-full flex flex-col md:flex-row md:justify-between md:items-center gap-3">
                    <p className="text-slate-500 text-sm">London, United Kingdom</p>
                    {
                        path === '/' && <Link href='/about' className="rounded-full shadow-sm shadow-slate-100 text-sm px-3 py-2 flex flex-row gap-2 items-center hover:gap-3 hover:bg-slate-600 hover:text-white self-center">
                            More about Me
                            <ArrowRightIcon className="h-4 w-4" />
                        </Link>
                    }
                </div>
            </div>
        </div>

    )
}