"use client"

import { Title, NewsCard } from "@/components"

export default function News () {
    return (
        <div className="p-10">
            <Title as="h1" className="text-[24px] text-[#FFFFFF] font-semibold">Что нового</Title>
            <div className="py-8 gap-3 flex justify-around flex-wrap ">
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            </div>
            <div className="border-t  border-t-[#7F7F7F] w-[95%] mx-auto">
                
            </div>
        </div>
    )
}