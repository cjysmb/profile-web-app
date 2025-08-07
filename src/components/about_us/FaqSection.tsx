import { useState } from "react";
import { HorizontalLine } from "../../views/Home";
import { AccordionItem } from "./faq/AccordionItem";
import { FAQItems } from "../../data";
import { titleClass } from "./FeedbackSection";

interface FAQItemProps {
    question: string;
    answerBold: string;
    answerText: string
}

export const FAQ = () => {
    const [activeId, setActiveId] = useState<number>(0);

    const handleToggle = (id: number) => {
      setActiveId(id);
    }

    const renderBoldText = (text: string) => {
        const parts = text.split(/(<b>.*?<\/b>)/g);
        return parts.map((part, i) => {
            if (part.startsWith("<b>") && part.endsWith("</b>")) {
            return (
                <span key={i} className="font-bold">
                {part.replace(/<\/?b>/g, "")}
                </span>
            );
            }
            return <span key={i}>{part}</span>;
        });
    }

    return (
        <section className="w-full snap-start relative
                flex flex-col items-center 
                px-[26px]
                pb-[50px]
                md:px-20 md:pb-[100px]
                xl:px-[120px]
                ">
                <HorizontalLine />
                <div className="w-full 2xl:w-3/4">
                    <div className="w-full flex justify-center lg:justify-start">
                        <div className={titleClass}>
                            FAQS
                        </div>
                    </div>
                    <div className="bg-[#fff] rounded-[48px] shadow-2xl">
                        {FAQItems.map((item: FAQItemProps, index) => {
                            const isLast = index === FAQItems.length - 1;
                            const newFormat = index === 4;
                            return (
                                <AccordionItem key={index} title={item.question} isActive={activeId === index} itemId={index} handleToggle={handleToggle} isLast={isLast}>
                                    {newFormat ? (
                                        <>
                                            <p className="mb-[8px] text-pretty">{renderBoldText(item.answerBold)}</p>
                                            <p className="text-pretty">{item.answerText}</p>
                                        </>
                                    ) : (
                                        <>
                                            <span className="font-bold mr-[2px] text-pretty">{item.answerBold}</span>
                                            <span className="font-normal text-pretty">{item.answerText}</span>
                                        </>
                                    )}
                                </AccordionItem>
                            );
                        })}
                    </div>
                </div>
        </section>
    );
}