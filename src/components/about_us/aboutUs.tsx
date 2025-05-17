import { About } from "./about"
import { Feedback } from "./feedback";
import VectorBG  from "../../assets/icons/about/vectorbg.svg";

export const AboutUs = () => {
    // bg-gradient-to-b from-[#E1EEDA] to-[#ffffff] overflow-hidden
    return (
        <div className="relative w-full min-h-screen bg-[#F5F6FA]
        xl:py-20
        2xl:pt-[100px] 2xl:pb-[154px]">
            {/* <div className="absolute top-[-50px] left-[-100px] w-[600px] h-[600px] rounded-full bg-[#728C69]/10 blur-3xl z-0" /> */}
            <div className="absolute left-1/2 top-1/2 -mt-100 transform -translate-x-1/2 -translate-y-1/2 w-[673px] h-[800px] rounded-full bg-[#728C69]/15 blur-2xl z-0" />
            {/* <div className="absolute top-[-100px] right-[620px] w-[673px] h-[800px] rounded-full bg-[#728C69]/15 blur-2xl z-0" /> */}
            <div className="absolute bottom-0 right-0 z-0">
                <img src={VectorBG} alt="vector" />
            </div>
            <About />
            <Feedback />
        </div>
    )
}