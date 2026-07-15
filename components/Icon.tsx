import { LucideIcon } from "lucide-react";

interface IIcon {
    icon: LucideIcon,
    size: number
    color: string
    className: string
    handlePress?: () => void
}

export default function Icons({
    icon: IconComonent,
    size = 24,
    color = "#FFFFFF",
    className,
    handlePress
}: IIcon) {
    return (
        <IconComonent 
            size={size} 
            color={color} 
            className={className}
            onClick={handlePress}
        />
    )
}