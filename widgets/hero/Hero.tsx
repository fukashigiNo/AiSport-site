"use client"
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { Title} from "@/components";

export default function Hero() {
  const targetRef = useRef<HTMLDivElement>(null)

  const handleScroll = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  }
  return (
    <div className="bg-[#212122]">
      <div className="relative bg-[#212122] h-screen flex justify-center items-start">
        <Image 
          src={"/background.png"}
          alt="background"
          width={300}
          height={300}
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
        />
        <div className="absolute z-10 flex flex-col top-1/4 items-center gap-4 h-full ml-10">
          <Title as="p" className="text-[#7F7F7F] text-[12px]">
            Прокачай себя
          </Title>
          <Title as="p" className="text-[#FFFFFF] text-[24px] font-semibold w-[474px] text-center" > 
            Онлайн-челленджи и домашние
            тренировки в игровой форме.
          </Title>
          <Title as="p" className="text-[#FFFFFF] text-[12px] font-medium w-[265px] text-center">
            Развивай техники, делись и соревнуйся
            с друзьями, побеждай себя.
          </Title>

          <Link 
          href={"/"} 
          className="text-[#B6F075] text-[20px] font-semibold"
          onClick={handleScroll}
          >
            Начать
          </Link>
        </div>
      </div>
    </div>
  );
}
