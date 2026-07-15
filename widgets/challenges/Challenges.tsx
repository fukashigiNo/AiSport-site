import { Title, ChallangeCard } from "@/components"


export default function Challenges () {
    return (
        <div className="p-10">
            <Title as="h1" className="text-[#FFFFFF] text-[24px] font-semibold w-[358px] tracking-[8%]">
                ТРЕНИРОВКИ, <br />
                КОТОРЫЕ МОТИВИРУЮТ
            </Title>
            <div 
            className="flex overflow-x-auto space-x-4 
            [-ms-overflow-style:none] [scrollbar-width:none] 
            [&::-webkit-scrollbar]:hidden"
            >
                <ChallangeCard />
                <ChallangeCard />
                <ChallangeCard />
                <ChallangeCard />
                <ChallangeCard />
                <ChallangeCard />
                <ChallangeCard />
                <ChallangeCard />
                <ChallangeCard />
                <ChallangeCard />
            </div>
        </div>
    )
}