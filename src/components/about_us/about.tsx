import { useState } from "react";
import { AboutUs } from "../../data";
import { headerTextClass } from "../../styles/common";
import { buttonClass } from "../our_programs/programs";

export const About = () => {

     const [activeButton, setActiveButton] = useState(1);
        
    const handleButtonClick = (buttonNumber: number) => {
        setActiveButton(buttonNumber);
    };

    const buttonAboutList = [
        {
            buttonText: "Coaching",
            buttonShape: "rounded-l-xl"
        },
        {
            buttonText: "Logo",
            buttonShape: "",
        },
        {
            buttonText: "Teamwork",
            buttonShape: "rounded-r-xl"
        }
    ];

    // const descriptionTextClass = "mt-[20px] text-[#5B7D7E] font-bold text-balance text-center text-[20px] md:text-[32px] lg:text-[48px] w-full 2xl:w-[1080px] 2xl:text-pretty";
    const cardDefaultClass = "m-auto bg-white relative rounded-bl-[48px] rounded-tr-[48px] rounded-tl-[16px] rounded-br-[16px] shadow-lg"
    const cardTextClass = "text-[#2D302D] font-normal text-pretty text-[16px] mt-4";

    return (
        <section className="w-full snap-start relative
        flex flex-col items-center 
        px-[12px]
        py-10
        md:px-14
        2xl:px-40">
            <span className={headerTextClass}>
                {AboutUs.title}
            </span>
            <div className="flex shadow-2xl mt-10">
                {buttonAboutList.map((item, index) => (
                    <button key={index} className={buttonClass(activeButton, index + 1, item.buttonShape)} onClick={() => handleButtonClick(index + 1)}>
                        {item.buttonText}
                    </button>
                ))}
            </div>
            <div className="flex w-full mt-10
            flex-col
            md:flex-wrap
            lg:flex-row
            2xl:flex-wrap">
            {AboutUs.items.map((item, index) => {
                return (
                    index + 1 === activeButton && (
                        <div key={index} className={`${cardDefaultClass} 
                            flex flex-col items-center justify-center
                            w-full
                            p-[32px]
                            mt-1
                            lg:mt-8 lg:w-[70%] lg:flex-row lg:justify-around lg:items-center
                            `}>
                                <div className="
                                lg:w-[20%]
                                xl:w-[15%]
                                2xl:w-[120px]">
                                    <img src={item.icon} alt={"icon"+index} />
                                </div>
                                <div className="w-full">
                                    <p className={cardTextClass}>
                                        {item.description}
                                    </p>
                                    <p className={`${cardTextClass} mt-10`}>
                                        {item.description1}
                                    </p>
                                </div>
                        </div>
                    )
                )
            })}
            </div>
        </section>
    );
}