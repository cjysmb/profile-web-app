import { AboutUs } from "../components/about_us/aboutUs";
import { Footer } from "../components/footer";
import { Header } from "../components/header";


export const Home = () => {
    return (
        <div className="w-full snap-y snap-mandatory">
            <Header />
            <AboutUs />
            <Footer />
        </div>
    )
}