import Image from "next/image";
import NoteBook from "../../../public/notebook-pen 1.svg";
import Monitor from "../../../public/monitor 1.svg";
import Brush from "../../../public/brush 1.svg";
function OfferSection() {
  return (
    <div className="main-section ">
      <div className="main-grid ">
        {/* OfferCard Start 1 */}
        <div className="col-span-4 main-flex-col">
          <div className="main-card-sty">
            <div className="min-w-[389px] min-h-[75px] ">
              <h4 className="text-h4titile-size text-center font-bold">
                Online Workshops and Webinars
              </h4>
            </div>
            <Image src={NoteBook} alt="" />
            <div className="min-w-[373px] min-h-[109px]">
              <p className="text-base text-center text-web-text-gray">
                Offer live or pre-recorded online workshops and webinars on
                topics such as stress management, mindfulness, effective
                communication, or coping strategies for specific issues like
                anxiety or depression.
              </p>
            </div>
          </div>
        </div>
        {/* OfferCard End  1 */}

        {/* OfferCard Start 2 */}
        <div className="col-span-4 main-flex-col">
          <div className="main-card-sty">
            <div className="min-w-[389px] min-h-[75px] ">
              <h4 className="text-h4titile-size text-center font-bold">
                Virtual Support Groups
              </h4>
            </div>
            <Image src={Monitor} alt="" />
            <div className="min-w-[373px] min-h-[109px] py-4">
              <p className="text-base text-center text-web-text-gray ">
                Create virtual support groups for individuals experiencing
                similar challenges or going through similar life transitions,
                such as grief, parenting, or addiction recovery.
              </p>
            </div>
          </div>
        </div>
        {/* OfferCard End  2 */}

        {/* OfferCard Start 3 */}
        <div className="col-span-4 main-flex-col">
          <div className="main-card-sty">
            <div className="min-w-[389px] min-h-[75px] ">
              <h4 className="text-h4titile-size text-center font-bold">
                Self-Care Resources and Tools
              </h4>
            </div>
            <Image src={Brush} alt="" />
            <div className="min-w-[373px] min-h-[109px]">
              <p className="text-base text-center text-web-text-gray">
                Develop a dedicated section of the website with self-care
                resources and tools, including guided meditation sessions,
                relaxation exercises, journal prompts, and self-assessment
                quizzes.
              </p>
            </div>
          </div>
        </div>
        {/* OfferCard End  3 */}
      </div>
    </div>
  );
}

export default OfferSection;
