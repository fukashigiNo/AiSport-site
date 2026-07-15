
interface ITItle {
    className: string,
    as: "h1" | "p" | "span" | "h2" | "h3"
    children: React.ReactNode
}

export default function Title({
    className,
    as,
    children
}:ITItle) {
    const Tag = as
    return(
        <Tag 
        className={className}
        >
            {children}
        </Tag>
    )
}