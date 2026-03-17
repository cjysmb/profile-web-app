import { useState, useCallback } from "react";
import { OurPrograms } from "../../data";
import { CommonHeader } from "../../layout/common";
import { HorizontalLine } from "../../views/Home";
import { ProgramCard } from "./ProgramCard";

export const buttonClass = (activeButton:number, buttonNumber: number, buttonShape: string, padding: string) => {
    return `font-bold border-[#5B7D7E]
        text-[16px]
        2xl:text-[20px]
        ${!buttonShape ? "border-x border-y-2" : "border-2"}
        ${activeButton === buttonNumber ? "bg-[#5B7D7E] text-white" : "bg-white text-[#5B7D7E]"}
        ${buttonShape}
        ${padding}
    `;
};

export const programHeaderText = "text-[#5B7D7E] font-bold text-[18px]";

export const Programs = () => {

    const [activeButton, setActiveButton] = useState(1);

    const handleButtonClick = useCallback((buttonNumber: number) => {
        setActiveButton(buttonNumber);
    }, []);

    const buttonProgramList = [
        {
            buttonText: "Stress Management",
            buttonShape: "rounded-l-[20px]",
            padding: "px-[8px] py-[12px] md:px-[12px] md:py-[16px]"
        },
        {
            buttonText: "Fitness Coaching",
            buttonShape: "",
            padding: "p-[12px] md:px-[12px] md:py-[16px]"
        },
        {
            buttonText: "Healthy Eating",
            buttonShape: "rounded-r-[20px]",
            padding: "p-[12px] md:px-[12px] md:py-[16px]"
        }
    ];

    return (
        <section className="w-full flex flex-col items-center relative
        px-[26px]
        py-8
        md:px-20
        xl:px-[120px]
        ">
            <HorizontalLine />
            <CommonHeader title={OurPrograms.title} />
            <div className="flex shadow-2xl mt-[20px] lg:mt-[32px] rounded-[20px]">
                {buttonProgramList.map((item, index) => (
                    <button key={index} className={buttonClass(activeButton, index + 1, item.buttonShape, item.padding)} onClick={() => handleButtonClick(index + 1)}>
                        {item.buttonText}
                    </button>
                ))}
            </div>
            <div className="bg-[#fff] rounded-[48px] shadow-2xl mt-[20px] md:mt-[41px]
                w-full
                py-[24px]
                px-[32px]
                md:px-[48px] md:py-[32px]
                border-[#5B7D7E]
                ">
                {OurPrograms.programs.map((program, index) => {
                    return (
                        index + 1 === activeButton && (
                            <ProgramCard key={`program-${index}`} program={program} />
                        )
                    )
                })}
            </div>
        </section>
    )
}