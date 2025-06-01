import { useState } from "react";
import { AboutUs } from "../../data";
import { buttonClass } from "../our_programs/programs";
import { CommonHeader } from "../../layout/common";
import { HorizontalLine } from "../../views/Home";

export const About = () => {

     const [activeButton, setActiveButton] = useState(1);
        
    const handleButtonClick = (buttonNumber: number) => {
        setActiveButton(buttonNumber);
    };

    const buttonAboutList = [
        {
            buttonText: "Coaching",
            buttonShape: "rounded-l-[20px]",
            padding: "px-[8px] py-[6.5px] md:px-[19px] md:py-[16px]"
        },
        {
            buttonText: "Logo",
            buttonShape: "",
            padding: "px-[12px] py-[6.5px] md:px-[41.5px] md:py-[16px]"
        },
        {
            buttonText: "Teamwork",
            buttonShape: "rounded-r-[20px]",
            padding: "px-[12px] py-[6.5px] md:px-[14.5px] md:py-[16px]"
        }
    ];

    // const descriptionTextClass = "mt-[20px] text-[#5B7D7E] font-bold text-balance text-center text-[20px] md:text-[32px] lg:text-[48px] w-full 2xl:w-[1080px] 2xl:text-pretty";
    const cardDefaultClass = "m-auto bg-white relative rounded-bl-[48px] rounded-tr-[48px] rounded-tl-[16px] rounded-br-[16px] shadow-lg"
    const cardTextClass = "text-[#2D302D] font-normal text-pretty text-[16px] mt-4";

    return (
        <section className="w-full snap-start relative
        flex flex-col items-center 
        px-[26px]
        md:px-20
        xl:px-[120px]
        ">
            <HorizontalLine />
            <CommonHeader title={AboutUs.title} />
            <div className="flex shadow-2xl mt-[26px] md:mt-[32px] rounded-[20px]">
                {buttonAboutList.map((item, index) => (
                    <button key={index} className={buttonClass(activeButton, index + 1, item.buttonShape, item.padding)} onClick={() => handleButtonClick(index + 1)}>
                        {item.buttonText}
                    </button>
                ))}
            </div>
            <div className="flex w-full mt-[50px] md:mt-[40px]
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