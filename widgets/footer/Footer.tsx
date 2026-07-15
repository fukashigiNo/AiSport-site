import Image from "next/image"
import { Title } from "@/components"
import Link from "next/link"
import { FaWhatsapp, FaInstagram } from "react-icons/fa"


export default function Footer() {
    return (
        <div className="py-5">
            <div className="border-t border-t-[#7F7F7F] w-[90%] mx-auto py-5" />
            <div className="flex justify-around w-full md:w-[80%]">
                    <div >
                        <Image 
                        src={"/logo.svg"}
                        width={239}
                        height={34}
                        alt="Logo"
                        className="w-[100px] md:w-[209px]"
                    />
                    <div className="text-[#7F7F7F] text-[12px] md:text-[12px] mt-8">
                        <Title as="p" className="mb-3">© 2026 AISPORT</Title>
                        <Title as="p" className="mb-3">Все права защищены</Title>
                        <Title as="p" className="">Политика конфидецальности</Title>
                    </div>
                    </div>
                    <div>
                        <Title 
                        as="p"
                        className="text-[#7F7F7F] hidden md:block"
                        >
                            МЕНЮ
                        </Title>  
                        <div className="flex flex-col text-[#FFFFFF] hidden md:flex mt-8  gap-3 text-[12px]">
                            <Link href={"/about-aisport"}>Что такое AISPORT?</Link>
                            <Link href={"/news"}>Что нового?</Link>
                            <Link href={"/about-us"}>О компании</Link>
                        </div>
                    </div>
                    <div className="text-[12px] md:text-[16px] hidden sm:block">
                        <Title
                        as="p"
                        className=" text-[#7F7F7F]"
                        >
                            ПОДПИСАТЬСЯ
                        </Title>
                        <div className="text-[#FFFFFF] mt-8">
                            <Title as="p" className="flex mb-3 text-[12px]">
                                <FaInstagram
                                className="my-auto mr-3"
                                size={24}
                                />
                                INSTAGRAM
                            </Title>
                            <Title as="p" className="flex text-[12px]">
                                <FaWhatsapp 
                                className="my-auto mr-3"
                                size={24}
                                />
                                WHATSAPP
                            </Title>
                        </div>
                    </div>
                    <div className="text-[12px] md:text-[16px]">
                        <Title
                        as="p"
                        className=" text-[#7F7F7F]"
                        >
                            С ЧЕГО НАЧАТЬ?
                            
                        </Title> 
                        <div>
                            <Image 
                            src={"/Badges.png"}
                            alt="Appstore "
                            width={100}
                            height={100}
                            className="mt-8"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}