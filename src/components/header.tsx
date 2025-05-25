import { useState } from "react";
import Logo from "../assets/icons/header/logo.svg";
import Check from "../assets/icons/header/check.png";
import PcHeader from "../assets/icons/header/model.svg";
import MobileHeader from "../assets/icons/header/headerBg.svg";
import { Mission, Vision } from "../data";
import { headerTextClass } from "../styles/common";

export const Header = () => {
    const [activeButton, setActiveButton] = useState(1);

    const handleButtonClick = (buttonNumber: number) => {
        setActiveButton(buttonNumber);
    };

    const buttonClass = (buttonNumber: number) => {
        return `px-4 py-2 border-2 font-bold text-[20px] border-[#5B7D7E]
        ${activeButton === buttonNumber ? "bg-[#5B7D7E] text-white" : "bg-white text-[#5B7D7E]"}
        ${buttonNumber === 1 ? "rounded-l-[20px]" : "rounded-r-[20px]"}
        `;
    }

    const textClass = "text[#2D302D] font-normal w-full text-[16px] sm:text-[18px] md:text-[20px]";
    const buttonList = ['Mission', 'Vision'];

    return (
        <section className="
            snap-start
            flex flex-col
            text-black h-[80%]
            bg-white
            md:flex-row
            ">
            {/* Left Section */}
            <div className="w-full flex flex-col items-start relative
            p-[20px]
            md:pb-20 md:px-20
            xl:w-1/2 xl:pl-[120px] xl:pb-10
            ">
                {/* header icon */}
                <div className="flex items-start">
                    <a href="/">
                        <img src={Logo} alt="Logo" />
                    </a>
                </div>
                {/* mission vision button */}
                <div className="flex shadow-2xl
                mt-[32px]
                md:mt-[71px]">
                    {buttonList.map((button, index) => (
                        <button key={index} onClick={() => handleButtonClick(index + 1)} className={buttonClass(index + 1)}>
                            {button}
                        </button>
                    ))}
                </div>
                {/* mission vision content div */}
                {activeButton === 1 ? (
                        // mission content
                        <div className="w-full">
                            <h2 className={headerTextClass}>{Mission.title}</h2>
                            <ul className="space-y-3 mt-8 list-none">
                            {Mission.items.map((item, index) => (
                                <li className="flex items-center mt-[16px]" key={"mission" + index}>
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
                            <h2 className={headerTextClass}>{Vision.title}</h2>
                            <p className={textClass}>{Vision.description}</p>
                        </div>
                    )}

                <div className="block lg:hidden absolute top-0 right-0">
                    <img src={MobileHeader} alt="mobileHeader" />
                </div>
            </div>
            {/* WIP */}
            <div className="hidden lg:block
            ">
                <img src={PcHeader} alt="Model" className="w-full h-full object-cover" />
            </div>
        </section>
    );
}