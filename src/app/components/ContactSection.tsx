import React from "react";

function ContactSection() {
  return (
    <div className="main-section mt-8 ">
      <div className="max-w-full flex justify-center items-center h-[601px]">
        <div className=" min-w-[643px] min-h-[511px] rounded-[34px] bg-[#FAFAFA] shadow px-[63px] ">
          <h1 className="text-4xl font-extrabold text-center mt-3">
            Connect: Begin Your Journey
          </h1>
          <div className="flex flex-col   mt-10">
            <label htmlFor="">Name</label>
            <div className="flex space-x-[40px]">
              <input
                type="text"
                name=""
                id=""
                placeholder="First Name"
                className="min-w-[261px] min-h-[40px] p-3 bg-[#FFFFFF] border-[#E5E8F0] rounded-[4px]"
              />
              <input
                type="text"
                name=""
                id=""
                placeholder="Last Name"
                className="min-w-[261px] min-h-[40px] p-3 bg-[#FFFFFF] border-[#E5E8F0] rounded-[4px]"
              />
            </div>

            <div className="flex flex-col mt-[40px]">
              <label htmlFor="">Email</label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Email"
                className="min-w-[522px] min-h-[40px] p-3 bg-[#FFFFFF] border-[#E5E8F0] rounded-[4px]"
              />
            </div>

            <div className="flex flex-col mt-[40px]">
              <label htmlFor="">Phone Number</label>
              <input
                type="number"
                name=""
                id=""
                placeholder="Phone"
                className="min-w-[522px] min-h-[40px] p-3 bg-[#FFFFFF] border-[#E5E8F0] rounded-[4px]"
              />
            </div>

            <div className="flex flex-col mt-[40px]">
              <button className="min-w-[522px] min-h-[49px] bg-web-bg-blue rounded-md text-white">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
