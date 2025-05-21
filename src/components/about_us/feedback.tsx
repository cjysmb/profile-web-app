import { Testimonials } from "../../data";
import Star from "../../assets/icons/about/star.svg";

export const Feedback = () => {
    const titleClass = `ml-[36px] rounded-tl-[48px] rounded-tr-[48px] uppercase text-white font-bold bg-[#A9BDA1]
    px-[24px] py-[8px]  w-[250px] text-[16px] text-center
    md:px-[48px] py-[16px] md:w-[300px] md:text-[20px] md:w-[280px]
    `;
    const  nameClass = "text-[#2D302D] text-left font-semibold text-[16px] leading-[20px]";
    const statementClass = "text-[#2D302D] text-left text-pretty w-full italic mt-2 font-normal text-[16px] leading-[20px]";

    return (
        <section className="w-full flex flex-col items-center
        relative
        z-10
        px-[12px]
        pt-10
        md:px-4
        xl:px-32
        2xl:px-40 2xl:pt-[100px]
        ">
            <div className="w-full 2xl:w-3/4">
                <div className={titleClass}>
                    {Testimonials.title}
                </div>
                <div className="bg-[#fff] rounded-[48px] shadow-2xl
                p-6
                lg:px-16
                xl:px-20
                2xl:px-24
                "
                >
                    {Testimonials.clients.map((client, index) => (
                        index <= 4 && (
                            <div key={index} className="flex space-between my-4 border border-[#CBCFCB] rounded-[11px]
                                flex-col-reverse
                                items-start
                                p-5
                                lg:flex-row lg:items-center lg:px-10 lg:py-8">
                                <div className="w-full lg:w-3/4">
                                    <div className={nameClass}>
                                        {client.name}
                                    </div>
                                    <div className={statementClass}>
                                        {client.statement}
                                    </div>
                                </div>
                                <div className="flex
                                items-start mb-4 w-full
                                lg:justify-center lg:items-center lg:w-1/4">
                                    {[...Array(client.star)].map((_, i) => (
                                        <span key={i} className="mr-2">
                                            <img src={Star} alt="star" className="w-6 h-6" />
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )
                    ))}
                </div>
            </div>
        </section>
    )
}