import Image from "next/image";
import DotedSection from "../../../public/DotedSection.svg";
import { Card } from "../Types";

function ServiceCard({ BgImage, Title, dis }: Card) {
  return (
    <div className="max-w-[377px] min-h-[567]  flex flex-col items-center  ">
      <div className="max-w-[377px] min-h-[232px] relative ">
        <Image src={DotedSection} alt="Doted Section" />
        <div
          className={`absolute top-0 left-0 right-0  max-w-[377px] min-h-[232px] rounded-tr-[161px]  bg-cover ${BgImage}`}
        >
          <div className="w-full  min-h-[232px] rounded-tr-[161px]  relative">
            <div className="w-full bg-[#141212] min-h-[232px] rounded-tr-[161px] opacity-[0.48] absolute" />
            <div className="text-white absolute  w-full rounded-tr-[161px] min-h-[232px]">
              <div className="flex justify-center items-center min-h-[232px]">
                <h1 className="text-4xl font-extrabold text-center">{Title}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="min-w-full px-6 shadow-[0_1px_25px_-15px_rgba(0,0,0,0.3)] flex flex-col space-y-[52px]  ">
        <div className="min-w-full max-h-[175px] items-center justify-center mt-[30px]">
          <p className="text-base text-web-text-gray text-center">{dis}</p>
        </div>
        <button className="min-w-[299px] min-h-[59px] bg-web-bg-blue flex items-center justify-center rounded-md text-white">
          Book an appointment
        </button>
      </div>
    </div>
  );
}

export default ServiceCard;
