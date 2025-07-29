import { useState } from "react";
import { OurPrograms } from "../../data";
import { defaultTextClass } from "../../styles/common";
import Quote from "../../assets/icons/programs/quote.svg";
import { CommonHeader } from "../../layout/common";
import { HorizontalLine } from "../../views/Home";
import { DetailsProps, ProgramItemProps, ProgramProps } from "./types";

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

export const Programs = () => {

    const [activeButton, setActiveButton] = useState(1);
    
    const handleButtonClick = (buttonNumber: number) => {
        setActiveButton(buttonNumber);
    };

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

    const defaultBoldText = "text-[#2D302D] font-bold text-[16px]";
    const programHeaderText = "text-[#5B7D7E] font-bold text-[18px]";

    const currencyFormat = (value: number) => {
        const currency = Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'PHP',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).formatToParts(value);

        return currency
            .map((part) => {
                if (part.type === 'currency') return 'PHP ';
                if (part.type === 'group') return ",";
                return part.value;
            })
            .join('');
    }

    const isDetailValueNumber = (value: unknown ): boolean => {
        return typeof value === "number";
    }

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
                {OurPrograms.programs.map((program:ProgramProps, index:number) => {
                    return (
                        index + 1 === activeButton && (
                            <div key={`program-${index}`} className="flex w-full
                            flex-col items-center
                            lg:flex-row lg:items-start">
                                <div className="lg:w-[100px]">
                                    <img src={program.icon} alt={program.title} className="w-16 h-16" />
                                </div>
                                <div className="w-full">
                                    <div className="flex
                                    flex-col
                                    lg:flex-row lg:items-center">
                                        <div className="mt-4
                                        w-full
                                        xl:w-[60%]
                                        2xl:w-[70%]">
                                            <div className="text-center lg:text-left">
                                                <span className={programHeaderText}>
                                                    {program.title}
                                                </span>
                                            </div>
                                            <ul className="space-y-3 mt-[12px] md:mt-[20px] list-none">
                                                {program.items.map((list: ProgramItemProps, index: number) => (
                                                    list.subItem.length > 0 ? (
                                                        <li className="w-full" key={`program-list-${index}`}>
                                                            <div className="flex items-start">
                                                                <div className="mt-2 mr-4 w-2 h-2 bg-[#728C69] rounded-full shrink-0" />
                                                                <span className={defaultTextClass}>
                                                                    {list.mainItem}
                                                                </span>
                                                            </div>
                                                            <ul className="mt-[12px] ml-[24px] list-none">
                                                            {list.subItem.map((subItem, subIndex) => (
                                                                <li className="flex items-start" key={`program-sub-list-${index}-${subIndex}`}>
                                                                    <div className="mt-2 mr-4 w-2 h-2 bg-[#728C69] rounded-full shrink-0" />
                                                                    <span className={defaultTextClass}>
                                                                        {subItem}
                                                                    </span>
                                                                </li>
                                                            ))}
                                                            </ul>
                                                        </li>
                                                    ) : (
                                                        <li className="flex items-start" key={`program-list-${index}`}>
                                                            <div className="mt-2 mr-4 w-2 h-2 bg-[#728C69] rounded-full shrink-0" />
                                                            <span className={defaultTextClass}>
                                                                {list.mainItem}
                                                            </span>
                                                        </li>
                                                    )
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="flex flex-col
                                        w-full
                                        mt-[16px]
                                        md:mt-[20px]
                                        xl:w-[40%]
                                        rounded-[16px]
                                        border border-[#EAF8F8] bg-[#EAF8F8] p-[12px]">
                                            {program.details.map((detail: DetailsProps, i: number) => (
                                                <div className='flex flex-row' key={`program-detail-${i}`}>
                                                    <div className={`${defaultTextClass} py-[4px] w-1/2`}>
                                                        {detail.name}
                                                    </div>
                                                    <div className={`${isDetailValueNumber(detail.value) ? defaultBoldText : defaultTextClass} md:p-0 sm:p-[12px] mt-[2px] text-right w-1/2`}>
                                                        {isDetailValueNumber(detail.value) ? currencyFormat(detail.value as number) 
                                                        : detail.value}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="relative mt-[16px] md:mt-[40px] py-7 px-6 w-full border border-[#CBCFCB] rounded-[11px]">
                                        <div className={defaultBoldText}>
                                            {program.testimonial.name}
                                        </div>
                                        <div className={`${defaultTextClass} w-full md:w-[60%] mt-2`}>
                                            {program.testimonial.statement}
                                        </div>
                                        <div className="block absolute right-0 top-0 w-[57px] md:w-auto">
                                            <img src={Quote} alt="quotation" className="rounded-tr-[11px]" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    )
                })}
            </div>
        </section>
    )
}