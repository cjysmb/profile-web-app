import { Programs } from "./programs";
import { Coaches } from "./coaches";

export const OurProgram = () => {
  return (
    <div className="relative w-full min-h-screen
    py-[50px]
    lg:py-[100px]">
      <Programs />
      <Coaches />
    </div>
  );
}