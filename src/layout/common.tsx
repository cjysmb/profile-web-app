import { headerTextClass } from "../styles/common";

interface CommonHeaderProps {
    title: string; 
    textSize?: string;
}

export const CommonHeader = ({title, textSize = "text-[24px] lg:text-[32px]"}: CommonHeaderProps) => {
    return (
        <div className="my-[32px]">
            <span className={`${headerTextClass} ${textSize}`}>
                {title}
            </span>
        </div>
    )
}