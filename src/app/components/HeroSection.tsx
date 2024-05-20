import Image from "next/image";
import HeroImage from "../../../public/HeroImage.png";

function HeroSection() {
  return (
    <div className="main-section">
      <div className="main-grid">
        {/* Text Section Start */}
        <div className="col-span-5  main-flex-col">
          <h1 className="text-7xl font-bold">
            Discover Psychological Wellness
          </h1>
          <p className="text-para-size text-web-text-gray">
            Discover Your Strength, Heal Your Heart, and Transform Your Life:
            Your Path to Wellness Starts Here.
          </p>
          <button className="max-w-56 min-h-[71px] bg-web-bg-blue rounded-md text-white">
          Start Your Journey
          </button>
        </div>
        {/* Text Section End */}

        {/* Image Section Start */}
        <div className="col-span-7 flex items-center ">
          <Image src={HeroImage} alt="HeroImage" />
        </div>
        {/* Image Section END */}
      </div>
    </div>
  );
}

export default HeroSection;
