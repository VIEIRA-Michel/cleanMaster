import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-[450px] flex justify-center items-center">
      <div className="w-[80%] h-[70%] flex flex-col justify-center items-center">
        <div className="w-full h-full flex flex-row justify-between">
          <div className="w-full lg:w-[45%] flex flex-col justify-evenly">
            <div className="flex flex-col justify-evenly items-start">
              <div className="text-xl font-bold">Address:</div>
              <div className="text-sm">
                Level 1, 12 Sample St, Sydney NSW 2000
              </div>
            </div>
            <div className="flex flex-col justify-evenly items-start">
              <div className="text-xl font-bold">Contact:</div>
              <div className="underline">1800 123 4567 </div>
              <div className="underline">info@relume.io</div>
            </div>
            <div className="w-[50%] flex justify-start items-start text-2xl">
              <div className="w-[60%] flex flex-row items-start justify-between">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-x-twitter"></i>
                <i class="fa-brands fa-linkedin"></i>
              </div>
            </div>
          </div>
          <div className="w-[0%] lg:w-[35%] h-[80%] hidden lg:flex flex-row justify-evenly">
            <div className="flex flex-col justify-evenly items-start font-bold text-base">
              <a>Link One</a>
              <a>Link Two</a>
              <a>Link Three</a>
              <a>Link Four</a>
              <a>Link Five</a>
            </div>
            <div className="flex flex-col justify-evenly items-start font-bold">
              <a>Link Six</a>
              <a>Link Seven</a>
              <a>Link Eight</a>
              <a>Link Nine</a>
              <a>Link Ten</a>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col lg:flex-row justify-between items-center border-t-4 border-[secondary]">
          <div>© 2023 Gadeo. All rights reserved.</div>
          <div className="w-[95%] lg:w-[60%] flex justify-evenly lg:justify-end items-center">
            <div className="w-[80%] lg:w-[40%] flex justify-between">
              <a className="underline">Privacy Policy</a>
              <a className="underline">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
