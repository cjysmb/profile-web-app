import { useState } from "react";
import { OurPrograms } from "../../data";
import { defaultTextClass } from "../../styles/common";
import Quote from "../../assets/icons/programs/quote.svg";
import { CommonHeader } from "../../layout/common";

export const buttonClass = (activeButton:number, buttonNumber: number, buttonShape: string) => {
    return `px-4 py-2 font-bold border-[#5B7D7E]
        text-[16px]
        2xl:text-[20px]
        ${!buttonShape ? "border-x border-y-2" : "border-2"}
        ${activeButton === buttonNumber ? "bg-[#5B7D7E] text-white" : "bg-white text-[#5B7D7E]"}
        ${buttonShape}
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
            buttonShape: "rounded-l-xl"
        },
        {
            buttonText: "Healthy Eating",
            buttonShape: "",
        },
        {
            buttonText: "Joyful Movement",
            buttonShape: "rounded-r-xl"
        }
    ];

    const defaultBoldText = "text-[#2D302D] font-bold text-[16px]";
    const programHeaderText = "text-[#5B7D7E] font-bold text-[18px]";
    const programDetailText = `${defaultBoldText} bg-[#EAF8F8] w-1/2 p-[12px]`;
    const programValueText = `${defaultTextClass} bg-[#E6ECE3] w-1/2 p-[12px]`;

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
                if (part.type === 'group') return "'";
                return part.value;
            })
            .join('');
    }

    return (
        <section className="w-full flex flex-col items-center relative
        px-[26px]
        py-8
        md:px-20
        xl:px-[120px]
        2xl:pb-40">
            <CommonHeader title={OurPrograms.title} />
            <div className="flex shadow-2xl mt-[20px] lg:mt-[32px]">
                {buttonProgramList.map((item, index) => (
                    <button key={index} className={buttonClass(activeButton, index + 1, item.buttonShape)} onClick={() => handleButtonClick(index + 1)}>
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
                            <div key={`program-${index}`} className="flex w-full
                            flex-col items-center
                            lg:flex-row lg:items-start">
                                <div className="w-[100px]">
                                    <img src={program.icon} alt={program.title} className="w-16 h-16" />
                                </div>
                                <div className="w-full">
                                    <div className="flex
                                    flex-col
                                    lg:flex-row lg:items-center">
                                        <div className="mt-4
                                        w-full
                                        lg:w-[60%]
                                        xl:w-[70%]">
                                            <div className="text-center lg:text-left">
                                                <span className={programHeaderText}>
                                                    {program.title}
                                                </span>
                                            </div>
                                            <ul className="space-y-3 mt-[12px] md:mt-[20px] list-none">
                                                {program.items.map((list, index) => (
                                                    <li className="flex items-center" key={`program-list-${index}`}>
                                                        <div className="mt-1 mr-4 w-2 h-2 bg-[#728C69] rounded-full shrink-0" />
                                                        <span className={defaultTextClass}>
                                                            {list}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="flex flex-col
                                        w-full
                                        mt-[16px]
                                        md:mt-[20px]
                                        lg:w-[40%]
                                        xl:w-[30%]">
                                            {program.details.map((detail, i) => (
                                                <div className="flex flex-row w-full" key={`program-detail-${i}`}>
                                                    <div className={`${programDetailText} ${i === 0 ? "rounded-tl-[16px]" : "rounded-bl-[16px]"} m-[1px]`}>
                                                        {detail.name}
                                                    </div>
                                                    <div className={`${programValueText} ${i === 0 ? "rounded-tr-[16px]" : "rounded-br-[16px]"} m-[1px]`}>
                                                        {typeof detail.value === "number" && typeof detail.value2 === "number" ? currencyFormat(detail.value) + " / " + currencyFormat(detail.value2): detail.value}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="relative mt-[16px] md:mt-[40px] py-7 px-6 w-full border border-[#CBCFCB] rounded-[11px]">
                                        <div className={defaultBoldText}>
                                            {program.testimonial.name}
                                        </div>
                                        <div className={`${defaultTextClass} w-full md:w-[70%] mt-2`}>
                                            {program.testimonial.statement}
                                        </div>
                                        <div className="block absolute right-0 top-0 w-[57px] md:w-auto rounded-tr-[48px]">
                                            <img src={Quote} alt="quotation" />
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