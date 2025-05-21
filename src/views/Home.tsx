import { AboutUs } from "../components/about_us/aboutUs";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { OurProgram } from "../components/our_programs/ourProgram";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Horizontal from "../assets/icons/about/hr.svg";
import { ContactUs } from "../components/contactUs";

export const HorizontalLine = () => {
    return (
        <div className="absolute left-1/2 top-0 -translate-x-1/2 transform z-0">
            <img src={Horizontal} alt="vector" />
        </div>
    )
}

export const Home = () => {
    return (
        <div className="w-full snap-y snap-mandatory">

            <SpeedInsights />
            <Header />
            <OurProgram />
            <AboutUs />
            <ContactUs />
            <Footer />
        </div>
    )
}