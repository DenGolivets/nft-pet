import Image from "next/image";
import React from "react";
import { MdOutlineMailOutline } from "react-icons/md";

const Contact = () => {
  return (
    <div className="w-full h-full">
      <div className="containerMain w-full h-full">
        <div className="px-[30px] md:px-0">
          <div className="md:bg-[#3B3B3B] md:py-[60px] md:px-[120px] md:rounded-[20px]">
            <div className="flex flex-col md:flex-row w-full md:justify-between">
              <Image
                src="/ContactCosmo.jpg"
                alt="contact"
                width={425}
                height={310}
                className="object-cover rounded-[20px]"
              />
              <div className="flex flex-col py-[19px]">
                <h1 className="text-[38px] font-semibold leading-[120%]">
                  Join Our Weekly
                </h1>
                <h1 className="text-[38px] font-semibold leading-[120%] mb-2.5">
                  Digest
                </h1>
                <p className="text-[22px] leading-[160%] max-w-[425px] mb-10">
                  Get exclusive promotions & updates straight to your inbox.
                </p>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Enter your email here"
                    className="w-full bg-white rounded-[20px] py-[19px] text-[#2B2B2B]
                  px-[20px] outline-none placeholder:text-[#2B2B2B] leading-[140%]"
                  />
                  <button
                    className="mt-[30px] md:mt-0 flex rounded-[20px] bg-secondary py-[19px] px-[50px] font-workSans 
                    font-semibold items-center justify-center gap-3 hover:border-2 hover:border-secondary
                    hover:bg-transparent transition-all duration-300 border-2 border-secondary 
                    w-full md:w-auto md:h-full group md:absolute md:bottom-0 md:right-0"
                  >
                    <MdOutlineMailOutline
                      size={20}
                      className="text-white group-hover:text-secondary"
                    />
                    <p className="text-white group-hover:text-secondary font-semibold">
                      Subscribe
                    </p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
