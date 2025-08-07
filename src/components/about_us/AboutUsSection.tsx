import { About } from "./AboutSection"
import { FAQ } from "./FaqSection";
import { Feedback } from "./FeedbackSection";

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