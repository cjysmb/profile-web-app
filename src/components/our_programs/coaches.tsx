import { useState } from "react";
import { OurCoaches } from "../../data"
import { defaultTextClass } from "../../styles/common"
import Left from "../../assets/icons/programs/left.svg";
import Right from "../../assets/icons/programs/right.svg";
import { CommonHeader } from "../../layout/common";

export const Coaches = () => {
    const [activeCoach, setActiveCoach] = useState(1);
    
    const coachHeader = "text-[#5B7D7E] font-bold text-[24px]";
    const buttonClass = "bg-[#5B7D7E] shadow-2xl rounded-full text-white p-2 disabled:opacity-50 disabled:cursor-not-allowed"

    const coachesLength = OurCoaches.coaches.length;

    return (
        <div className="relative w-full flex relative
        px-[26px]
        xl:px-[120px]
        2xl:pb-40
        ">
            <div className="w-full flex flex-col items-center py-5">
                <CommonHeader title={coachesLength > 1 ? OurCoaches.title2 : OurCoaches.title} />
                <div className="w-full flex flex-col items-center md:mt-[27px]">
                    {OurCoaches.coaches.map((coach, index) => (
                        activeCoach === index + 1 && (
                            <div className="flex justify-evenly items-center mt-5
                            w-full
                            flex-col
                            lg:w-[90%] lg:flex-row
                            xl:w-[70%]
                            2xl:w-[920px]" key={"coach"+index}>
                                <div className="bg-[#fff] rounded-full shadow-2xl relative w-[200px] h-[200px]">
                                    <img src={coach.img} alt={coach.name} className="rounded-full shadow-2xl relative w-[200px] h-[200px]" />
                                </div>
                                <div className="flex flex-col item-start
                                w-full
                                md:w-auto
                                ml-4 mt-10
                                lg:ml-0 lg:mt-0">
                                    <div className={coachHeader}>
                                        {coach.name}
                                    </div>
                                    <div className="mt-4">
                                        <div className="text-[#728C69] font-bold text-[16px]">
                                            Personal Information
                                        </div>
                                        <ul>
                                            {coach.information.map((info, index) => (
                                                <li className="flex items-center mt-4" key={`coach-info-${index}`}>
                                                    <div className="mt-1 mr-4 w-2 h-2 bg-[#728C69] rounded-full shrink-0" />
                                                    <span className={defaultTextClass}>
                                                        {info}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )
                    ))}
                </div>

                {coachesLength > 1 && (
                    <div className="flex flex-row items-center mt-10 justify-around w-[100px]">
                        <button className={buttonClass} onClick={() => setActiveCoach(activeCoach-1)} disabled={activeCoach === 1}>
                            <img src={Left} alt="left-icon" />
                        </button>
                        <button className={buttonClass} onClick={() => setActiveCoach(activeCoach+1)} disabled={activeCoach === OurCoaches.coaches.length}>
                            <img src={Right} alt="right-icon" />
                        </button>
                    </div>
                )}
                
            </div>
        </div>
    )
}