import { useState } from "react";
import Coaching from "../assets/icons/header/coaching.png";
import Check from "../assets/icons/header/check.png";
import Model from "../assets/images/header/model.png";
import { Mission, Vision } from "../data";

export const Header = () => {
    const [activeButton, setActiveButton] = useState(1);

    const handleButtonClick = (buttonNumber: number) => {
        setActiveButton(buttonNumber);
    };

    const buttonClass = (buttonNumber: number) => {
        return `px-4 py-2 border-2 font-bold text-[20px] border-[#5B7D7E]
        ${activeButton === buttonNumber ? "bg-[#5B7D7E] text-white" : "bg-white text-[#5B7D7E]"}
        ${buttonNumber === 1 ? "rounded-l-xl" : "rounded-r-xl"}
        `;
    }

    const headerClass = "text-[#5B7D7E] font-bold text-[24px] md:text-[24px] lg:text-[28px] 2xl:text-[32px]";
    const textClass = "text[#2D302D] font-normal text-balance w-[3/4] text-[16px] sm:text-[18px] md:text-[20px]";

    return (
        <div className="
            flex flex-col
            text-black h-screen bg-[#F2F2F2]
            md:flex-row ">
            {/* Left Section */}
            <div className="w-full flex flex-col items-start
            p-8
            sm:px-8 sm:py-8
            md:px-16
            lg:px-24 lg:py-10
            xl:w-1/2 xl:px-32
            2xl:px-40 2xl:py-12">
                {/* header icon */}
                <div className="flex items-start">
                    <a href="/">
                        <img src={Coaching} alt="Logo" />
                    </a>
                </div>
                {/* mission vision button */}
                <div className="flex my-20">
                    <button onClick={() => handleButtonClick(1)} className={buttonClass(1)}>
                        Mission
                    </button>
                    <button onClick={() => handleButtonClick(2)} className={buttonClass(2)}>
                        Vision
                    </button>
                </div>
                {/* mission vision content div */}
                {activeButton === 1 ? (
                        // mission content
                        <div>
                            <h2 className={headerClass}>{Mission.title}</h2>
                            <ul className="space-y-3 mt-8 list-none">
                            {Mission.items.map((item, index) => (
                                <li className="flex items-center" key={"mission" + index}>
                                    <img src={Check} alt="check" className="mr-4" />
                                    <span className={textClass}>
                                        {item}
                                    </span>
                                </li>
                            ))}
                            </ul>
                        </div>
                    ) : (
                        // vision content
                        <div>
                            <h2 className={headerClass}>{Vision.title}</h2>
                            <p className={textClass}>{Vision.description}</p>
                        </div>
                    )}
            </div>
            {/* WIP */}
            <div className="w-hull h-full hidden lg:block">
                <img src={Model} alt="Model" className="h-full" />
            </div>
        </div>
    );
}