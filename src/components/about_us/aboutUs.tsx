import { About } from "./about"
import { Feedback } from "./feedback";
import VectorBG  from "../../assets/icons/about/vectorbg.svg";
import { HorizontalLine } from "../../views/Home";

export const AboutUs = () => {
    return (
        <div className="relative w-full min-h-screen bg-[#F5F6FA]
        px-4
        pb-20
        xl:py-20
        2xl:pt-[100px] 2xl:pb-[154px]">
            <HorizontalLine />
            <div className="absolute left-1/2 top-1/2  transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-b from-[#728C69]/20 to-[#E1EEDA]/20 blur-2xl z-0 
            w-[300px] h-[300px]
            2xl:w-[750px] 2xl:h-[800px] 2xl:-mt-80 "/>
            <div className="absolute left-1/2 bottom-1/2 transform -translate-x-1/2  rounded-full bg-gradient-to-b from-[#728C69]/20 to-[#E1EEDA]/20 blur-2xl z-0 
            w-[300px] h-[300px] -mb-150
            2xl:w-[750px] 2xl:h-[700px] 2xl:-mb-185 "/>
            <div className="absolute bottom-0 right-0 z-0">
                <img src={VectorBG} alt="vector" />
            </div>
            <About />
            <Feedback />
        </div>
    )
}