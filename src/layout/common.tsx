import { headerTextClass } from "../styles/common";

interface CommonHeaderProps {
    title: string; 
}

export const CommonHeader = ({title}: CommonHeaderProps) => {
    return (
        <div className="my-[32px]">
            <span className={headerTextClass}>
                {title}
            </span>
        </div>
    )
}