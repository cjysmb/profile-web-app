import { Programs } from "./programs";
import LeftVector from "../../assets/icons/programs/vector_left.svg";

export const OurProgram = () => {
  return (
    <div className="relative w-full min-h-screen bg-[#F5F6FA]
    xl:py-20
    2xl:py-[100px]">
      <div className="absolute left-0 top-0 w-[750px] h-[800px] rounded-full bg-gradient-to-b from-[#618280]/15 to-[#E1EEDA]/15 blur-2xl z-0" />
      <div className="absolute left-0 top-0">
        <img src={LeftVector} alt="vector_left" />
      </div>
      <Programs />
    </div>
  );
}