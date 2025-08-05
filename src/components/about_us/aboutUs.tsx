import { About } from "./about"
import { FAQ } from "./faq";
import { Feedback } from "./feedback";

export const AboutUs = () => {
    return (
        <div className="relative w-full min-h-screen
        py-[50px]
        lg:py-[100px]">
            <About />
            <FAQ />
            <Feedback />
        </div>
    )
}