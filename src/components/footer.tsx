import { Instagram } from '../assets/icons/footer';
import Logo from '../assets/icons/footer/logo.svg';
import { FooterInfo } from '../data';

interface FooterInfoType {
    icon: string;
    type: string;
    title: string;
}

const textClass = "text-white font-normal text-[16px] md:text-[18px]"

const onClickLocation = () => {
    window.open("https://maps.app.goo.gl/YF7jzhTgBmTqnBRK8", "_blank");
}

export const Footer = () => {
    return (
        <section className="w-full flex-row justify-center lg:flex md:justify-between items-center bg-[#728C69] p-8 md:px-[120px] py-[65px] relative">
            <div className="w-full">
                <a onClick={() => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                });
            }}
                className="cursor-pointer flex justify-center md:justify-start">
                    <img src={Logo} alt="Footer Image" />
                </a>
            </div>
            <div className="w-full mt-[40px] md:mt-0">
            {FooterInfo.map((info: FooterInfoType, index: number) => (
                <div key={info.type+index} className="mt-[16px] flex justify-start">
                    <img src={info.icon} alt={info.type + "-icon"} className="mr-[12px] md:mr-[16px]" />
                    {info.type === "location" ? (
                        <span
                            onClick={onClickLocation}
                            className={textClass + " cursor-pointer"}
                        >
                            {info.title}
                        </span>
                    ) : (
                        <span className={textClass}>
                            {info.title}
                        </span>
                    )}
                </div>
            ))}
                <div className="mt-[26px]">
                    <h6 className="font-bold text-[18px] text-white">Follow us</h6>
                    <div className="flex justify-start">
                        <img src={Instagram} alt={ "instagram-icon"} className="mr-[12px] md:mr-[16px]" />
                        <span className={textClass}>
                            <a className="text-white" href="https://www.instagram.com/compassionate.coaches/" target="_blank" rel="noopener noreferrer">
                                @compassionate.coaches
                            </a>
                        </span>
                    </div>
                   
                </div>
            </div>  
        </section>
    )
}