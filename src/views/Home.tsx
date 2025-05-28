import { AboutUs } from "../components/about_us/aboutUs";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { OurProgram } from "../components/our_programs/ourProgram";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Horizontal from "../assets/icons/about/hr.svg";
import mHorizontal from "../assets/icons/about/mobileHr.svg";
import { ContactUs } from "../components/contactUs";

export const  HorizontalLine = () => {
    return (
        <div className="w-full flex justify-center items-center mb-[18px] md:mb-[60px]">
            <img src={Horizontal} alt="vector" className="w-[80%] h-full hidden md:block"/>
            <img src={mHorizontal} alt="vector" className="block md:hidden"/>
        </div>
    )
}

export const Home = () => {
    return (
        <div className="w-full snap-y snap-mandatory">
            <SpeedInsights />
            <Header />
            {/* WIP: mobile backround */}
            <div className={`bg-[url('/mobileBackground.png')] md:bg-[url('/background.svg')] bg-cover bg-no-repeat bg-center`}>
                <OurProgram />
                <AboutUs />
                <ContactUs />
                <Footer />
            </div>
            
        </div>
    )
}