import { AboutUs } from "../components/about_us/aboutUs";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { OurProgram } from "../components/our_programs/ourProgram";


export const Home = () => {
    return (
        <div className="w-full snap-y snap-mandatory">
            <Header />
            <OurProgram />
            <AboutUs />
            <Footer />
        </div>
    )
}