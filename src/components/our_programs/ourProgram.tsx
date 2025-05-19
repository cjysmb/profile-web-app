import { Programs } from "./programs";
import LeftVector from "../../assets/icons/programs/vector_left.svg";
import RightVector from "../../assets/icons/programs/vector_right.svg";
import { Coaches } from "./coaches";

export const OurProgram = () => {
  return (
    <div className="relative w-full min-h-screen bg-[#F5F6FA]
    xl:py-20
    2xl:py-[100px]">
      <div className="absolute -left-50 top-0 rounded-full bg-gradient-to-b from-[#618280]/15 to-[#E1EEDA]/15 blur-2xl z-0
      w-[300px] h-[300px]
      2xl:w-[750px] 2xl:h-[800px]" />
      <div className="absolute bottom-0 right-0 top-1/2 rounded-full bg-gradient-to-b from-[#728C69]/30 to-[#E1EEDA]/30 blur-2xl z-0
      w-[300px] h-[300px]
      2xl:w-[600px] 2xl:h-[700px]" />
      <div className="absolute left-0 top-0">
        <img src={LeftVector} alt="vector_left" />
      </div>
      <div className="absolute right-0 bottom-0">
        <img src={RightVector} alt="vector_right" />
      </div>
      <Programs />
      <Coaches />
    </div>
  );
}