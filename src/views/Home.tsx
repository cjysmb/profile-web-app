import { About } from "../components/about"
import { Header } from "../components/header"


export const Home = () => {
    return (
        <div className="w-full snap-y snap-mandatory">
            <Header />
            <About />
        </div>
    )
}