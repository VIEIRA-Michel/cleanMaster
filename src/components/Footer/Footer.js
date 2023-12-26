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
              <div className="underline">
                <a href="tel:+1800 123 4567 ">1800 123 4567</a>
              </div>
              <div className="underline">
                <a href="mailto: info@relume.io">info@relume.io</a>
              </div>
            </div>
            <div className="w-[50%] flex justify-start items-start text-2xl">
              <div className="w-full lg:w-[60%] flex flex-row items-start justify-between">
                <i className="fa-brands fa-facebook cursor-pointer"></i>
                <i className="fa-brands fa-instagram cursor-pointer"></i>
                <i className="fa-brands fa-x-twitter cursor-pointer"></i>
                <i className="fa-brands fa-linkedin cursor-pointer"></i>
              </div>
            </div>
          </div>
          <div className="w-[0%] lg:w-[35%] h-[80%] hidden lg:flex flex-row justify-evenly">
            <div className="flex flex-col justify-evenly items-start font-bold text-base">
              <a className="cursor-pointer hover:underline duration-300">
                Link One
              </a>
              <a className="cursor-pointer hover:underline duration-300">
                Link Two
              </a>
              <a className="cursor-pointer hover:underline duration-300">
                Link Three
              </a>
              <a className="cursor-pointer hover:underline duration-300">
                Link Four
              </a>
              <a className="cursor-pointer hover:underline duration-300">
                Link Five
              </a>
            </div>
            <div className="flex flex-col justify-evenly items-start font-bold">
              <a className="cursor-pointer hover:underline duration-300">
                Link Six
              </a>
              <a className="cursor-pointer hover:underline duration-300">
                Link Seven
              </a>
              <a className="cursor-pointer hover:underline duration-300">
                Link Eight
              </a>
              <a className="cursor-pointer hover:underline duration-300">
                Link Nine
              </a>
              <a className="cursor-pointer hover:underline duration-300">
                Link Ten
              </a>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col lg:flex-row justify-between items-center border-t-4 border-secondary pt-[20px]">
          <div>© 2023 Gadeo. All rights reserved.</div>
          <div className="w-[95%] lg:w-[60%] flex justify-evenly lg:justify-end items-center">
            <div className="w-[80%] lg:w-[40%] flex justify-between">
              <a className="cursor-pointer underline">Privacy Policy</a>
              <a className="cursor-pointer underline">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
