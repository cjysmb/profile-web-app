import { AboutUs } from "../data";

export const About = () => {
    const headerTextClass = "text-[#728C69] font-bold text-[16px] sm:text-[18px] uppercase";
    const descriptionTextClass = "mt-[20px] text-[#5B7D7E] font-bold text-balance text-center text-[20px] md:text-[32px] lg:text-[48px] w-full 2xl:w-[1080px] 2xl:text-pretty";
    const cardDefaultClass = "m-auto bg-white relative rounded-bl-[48px] rounded-tr-[48px] rounded-tl-[16px] rounded-br-[16px] shadow-lg"
    const cardHeaderClass ="text-[#5B7D7E] font-bold text-[16px] sm:text-[18px]";
    const cardTextClass = "text-[#2D302D] font-normal text-pretty text-[16px] mt-4";
    const cardDefaultIconClass = "w-16 h-16 absolute";

    return (
        <section className="w-full bg-[#F5F6FA] snap-start
        flex flex-col items-center 
        p-8
        2xl:px-40 2xl:py-[120px]">
            <span className={headerTextClass}>
                {AboutUs.title}
            </span>
            <span className={descriptionTextClass}>
                {AboutUs.description}
            </span>
            <div className="flex w-full mt-10
            flex-col
            md:flex-wrap
            lg:flex-row
            2xl:flex-wrap">
            {AboutUs.items.map((item, index) => (
                <div key={index} className={`${cardDefaultClass} 
                px-[32px] py-[70px]
                w-full
                mt-8
                lg:w-[450px]
                2xl:w-[500px]
                `}>
                    <img src={item.icon} alt={item.title} className={`${cardDefaultIconClass} top-0 left-0`} />
                    <h2 className={cardHeaderClass}>{item.title}</h2>
                    <p className={cardTextClass}>{item.description}</p>
                    <img src={item.icon2} alt={item.title} className={`${cardDefaultIconClass} bottom-0 right-0`} />
                </div>
            ))}
            </div>
        </section>
    );
}