'use client'

import Link from "next/link"
import { NAVLINKS } from "@/utils/consts"
import { usePathname } from "next/navigation"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const Navbar = () => {
    const path = usePathname()
    return (
        <div className="w-full fixed z-20 bottom-5 flex justify-center">
            <div className="px-5 py-3 border rounded-full bg-slate-100 flex flex-row gap-3">
                {
                    NAVLINKS.map(navlink => (
                        <Link href={navlink.href} key={navlink.name} className={`p-3 rounded-full shadow-sm ${path === navlink.href ? 'bg-slate-300': 'bg-white'}`}>
                            <FontAwesomeIcon icon={navlink.icon} className="h-6 w-6"/>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}