import Title  from "./Title"
import Icons from "./Icon"
import { Zap } from "lucide-react"

export default function NewsCards() {
    return (
        <div className="w-[265px] mt-4" onClick={() => {}}>
            <div className="w-[265px] h-[200px] bg-[#313133] rounded-[12px]">
            </div>
            <div className="mt-2">
                <Title as="p" className="flex items-center text-[#B5EF3B] text-[12px] gap-1 ">
                    <Icons icon={Zap} size={10} color="#B5EF3B" className="" />
                    Челлендж
                </Title>
                <Title as="p" className="text-[#FFFFFF] text-[12px] font-medium mt-2">
                    Стартовал глобальный челлендж 
                    по подтягиваниям: проверь свою силу!
                </Title>
                <Title as="p" className="text-[#7F7F7F] text-[8px] mt-2">
                    В мире фитнеса набирает обороты новый челлендж
                    — подтягивания на максимум! Участникам предстоит 
                    зафиксировать лучшее количество чистых подтягиваний 
                    за один подход и сравнить результат с другими.
                </Title>
            </div>
        </div>
    )
}