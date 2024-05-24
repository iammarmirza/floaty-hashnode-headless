import { Container } from "@/components/Container"
import Image from "next/image"

export default function BlogContent () {
    return(
        <Container>
            <div className="rounded-3xl w-full min-h-screen bg-white p-6 shadow-md">
                <div className="w-full aspect-video border rounded-xl flex">
                    <Image src={'/vercel.svg'} alt="Blog Cover Image" width={1000} height={1000} className="flex-1"/>
                </div>
            </div>
        </Container>
    )
}