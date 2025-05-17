import { AboutUs } from "../components/about_us/aboutUs";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { OurProgram } from "../components/our_programs/ourProgram";
import { SpeedInsights } from "@vercel/speed-insights/react";

export const Home = () => {
    return (
        <div className="w-full snap-y snap-mandatory">

            <SpeedInsights />
            <Header />
            <OurProgram />
            <AboutUs />
            <Footer />
        </div>
    )
}