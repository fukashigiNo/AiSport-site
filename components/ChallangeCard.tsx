import Title from "./Title"

export default function ChallangeCard() {
    return (
        <div className="flex flex-shrink-0 flex-col justify-end bg-[#313133] w-[215px] h-[320px] rounded-[24px] p-4 mt-6">
            <Title as="p" className="text-[#FFFFFF] text-[20px] font-semibold tracking-[2%]">БЁРПИ</Title>
            <Title as="p" className="text-[#7F7F7F] text-[8px]">
                Взрывное упражнение для развития
                <br />всего тела.
            </Title>
        </div>
    )
}