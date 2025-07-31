import { headerTextClass } from "../styles/common";

interface CommonHeaderProps {
    title: string; 
    textSize?: string;
    textAlign?: string;
}

export const CommonHeader = ({title, textSize = "text-[24px] lg:text-[32px]", textAlign}: CommonHeaderProps) => {
    return (
        <div className={`my-[32px] ${textAlign}`}>
            <span className={`${headerTextClass} ${textSize}`}>
                {title}
            </span>
        </div>
    )
}