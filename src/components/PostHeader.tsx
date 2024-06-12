import Image from "next/image"
import Link from "next/link"

interface PostHeaderProps {
    title: string,
    name: string,
    profileImage?: string | null | undefined,
    subtitle?: string | null | undefined
}

export const PostHeader = ({ title, name, profileImage, subtitle }: PostHeaderProps) => {
    return (
        <div className="w-full text-slate-950 flex flex-col py-6 mx-4">
            <h1 className="text-2xl md:text-4xl mb-4 font-bold w-full text-slate-950">{title}</h1>
            {
                subtitle && <p>{subtitle}</p>
            }
            <div className="flex w-full justify-between">
                <div className="flex gap-2 items-center">
                    {
                        profileImage && <div className="overflow-hidden rounded-full flex h-8 w-8">
                            <Image src={profileImage} width={200} height={200} alt="" />
                        </div>
                    }
                    <Link href="/">{name}</Link>
                </div>
            </div>
        </div>
    )
}