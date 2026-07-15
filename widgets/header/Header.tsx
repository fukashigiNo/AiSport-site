"use client"
import Image from "next/image"
import Link from "next/link"
import Icons from "@/components/Icon"
import { Menu} from "lucide-react"
import { useState } from "react"
import { SideBar } from "../side-bar-phone"


export default function Header() {
   const [isOpen, setOpen] = useState<boolean>(false)
    return(
        <div className="sticky top-0 z-50 flex justify-between backdrop-blur-xs px-5 sm:px-10 py-5 sm:py-10">
            <Image
                src="/logo.svg"
                alt="logo"
                width={239}
                height={34}
                className="w-[160px] sm:w-[209px] h-auto"
            />

            <div>
                <Icons 
                    icon={Menu}
                    size={32}
                    color="#FFFF"
                    className="md:hidden"
                    handlePress={() => setOpen(true)}
                />
                <div className="text-white text-[12px] hidden md:flex">
                    <Link href={"/about-aisport"} className="mx-6">Что такое AISPORT?</Link>
                    <Link href={"/about-us"} className="mx-6">О компании</Link>
                    <Link href={"/news"} className="mx-6">Что нового?</Link>
                </div>
            </div>


            {isOpen && (
                <div 
                  className="fixed inset-0 bg-black/40 z-40"
                  onClick={() => setOpen(false)}
                  > 
                  <SideBar onClose={() => setOpen(false)} />
                </div>
            )}

        </div>
    )
}
