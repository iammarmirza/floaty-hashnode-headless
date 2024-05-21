import { InboxIcon, LinkIcon, RocketLaunchIcon, TrophyIcon } from "@heroicons/react/24/outline"

export const SocialLinks = () => {
    return (
        <div className="flex flex-row gap-4">
            <div className="p-2 rounded-full shadow-sm">
            <InboxIcon className="h-4 w-4 text-slate-500" />
            </div>
            <div className="p-2 rounded-full shadow-sm shadow-slate-100">
            <LinkIcon className="h-4 w-4 text-slate-500" />
            </div>
            <div className="p-2 rounded-full shadow-sm shadow-slate-100">
            <RocketLaunchIcon className="h-4 w-4 text-slate-500" />
            </div>
            <div className="p-2 rounded-full shadow-sm shadow-slate-100">
            <TrophyIcon className="h-4 w-4 text-slate-500" />
            </div>

        </div>
    )
}