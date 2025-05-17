import { Programs } from "./programs";

export const OurProgram = () => {
  return (
    <div className="relative w-full min-h-screen bg-[#F5F6FA]
    xl:py-20
    2xl:py-[100px]">
      <div className="absolute w-[673px] h-[800px] rounded-full bg-[#728C69]/15 blur-2xl z-0" />

      <Programs />
    </div>
  );
}