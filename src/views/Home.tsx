import { AboutUs } from "../components/about_us/AboutUsSection";
import { Footer } from "../components/FooterComponent";
import { Header } from "../components/HeaderComponent";
import { OurProgram } from "../components/our_programs/OurProgramSection";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import { ContactUs } from "../components/ContactUsSection";
import { MobileHorizontalLine, PcHorizontalLine } from "../assets/icons/about";

export const  HorizontalLine = () => {
    return (
        <div className="w-full flex justify-center items-center mb-[18px] md:mb-[60px]">
            <img src={PcHorizontalLine} alt="vector" className="w-[80%] h-full hidden md:block"/>
            <img src={MobileHorizontalLine} alt="vector" className="block md:hidden"/>
        </div>
    )
}

export const Home = () => {
    return (
        <div className="w-full snap-y snap-mandatory">
            <SpeedInsights />
            <Analytics />
            <Header />
            <div className={`bg-[url('/mobile_background.png')] md:bg-[url('/background.svg')] bg-cover bg-no-repeat bg-center`}>
                <OurProgram />
                <AboutUs />
                <ContactUs />
                <Footer />
            </div>
            
        </div>
    )
}