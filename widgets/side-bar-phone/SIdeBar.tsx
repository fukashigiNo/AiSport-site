import {Icon,  Title } from "@/components"
import { X } from "lucide-react"
import Link from "next/link"
import { FaWhatsapp, FaInstagram } from "react-icons/fa"

interface ISideBar {
  onClose: () => void
}

export default function SideBar({onClose}: ISideBar) {
    return (
      <div onClick={(e) => e.stopPropagation()}>
          <div
          className={`fixed top-0 right-0 h-full w-[280px] bg-[#212122] z-50 transform transition-transform duration-300`}
        >
        <div className="p-5 flex justify-end">
          <Icon
          icon={X} 
          size={28} 
          color="#FFFFFF"
          className=""
          handlePress={onClose}
          />
        </div>

        <div className="p-5 flex flex-col gap-5 text-[#FFFFFF]">
          <Link href="/about-aisport">Что такое AISPORT?</Link>
          <Link href="/about-us">Что нового?</Link>
          <Link href="/news">О компании</Link>
        </div>
        <div className="text-[12px] md:text-[16px] block sm:hidden p-5">
            <Title
              as="p"
              className=" text-[#7F7F7F]"
            >
              ПОДПИСАТЬСЯ
            </Title>
            <div className="text-[#FFFFFF] mt-6">
                <Title as="p" className="flex  mb-4">
                  <FaInstagram 
                    className="my-auto mr-3"
                    size={24}
                  />
                    INSTAGRAM
                  </Title>
                <Title as="p" className="flex">
                    <FaWhatsapp 
                      className="my-auto mr-3"
                      size={24}
                    />
                    WHATSAPP
                </Title>
              </div>
          </div>
      </div>
    </div>
    )
}