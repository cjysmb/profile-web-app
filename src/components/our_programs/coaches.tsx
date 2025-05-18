import { useState } from "react";
import { OurCoaches } from "../../data"
import { defaultTextClass, headerTextClass } from "../../styles/common"
import { HorizontalLine } from "../../views/Home"

export const Coaches = () => {
    const [activeCoach, setActiveCoach] = useState(1);
    
    const coachHeader = "text-[#5B7D7E] font-bold text-[24px]";
    const buttonClass = "bg-[#5B7D7E] shadow-2xl rounded-full text-white"
    return (
        <div className="relative w-full flex relative
        p-8
        2xl:px-40 pt-20 pb-10">
            <HorizontalLine />
            <div className="w-full flex flex-col items-center py-5">
                <div className={headerTextClass}>
                    {OurCoaches.title}
                </div>
                <div className="mt-10 w-full flex flex-col items-center">
                    {OurCoaches.coaches.map((coach, index) => (
                        activeCoach === index + 1 && (
                            <div className="flex justify-evenly items-center mt-5 w-[60%]" key={"coach"+index}>
                                <div className="bg-[#fff] w-[340px] rounded-[30px] shadow-2xl">
                                    <img src={coach.img} alt={coach.name} className="w-auto h-auto object-contain" />
                                </div>
                                <div className=" flex flex-col item-start">
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

                <div className="flex flex-row items-center mt-40 justify-around">
                    <button className={buttonClass} onClick={() => setActiveCoach(activeCoach-1)}>
                        1
                    </button>
                    <button className={buttonClass} onClick={() => setActiveCoach(activeCoach+1)}>
                        2
                    </button>
                </div>
                
            </div>
        </div>
    )
}