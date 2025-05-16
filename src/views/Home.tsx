import { About } from "../components/about"
import { Feedback } from "../components/feedback"
import { Header } from "../components/header"


export const Home = () => {
    return (
        <div className="w-full snap-y snap-mandatory">
            <Header />
            <About />
            <Feedback />
        </div>
    )
}