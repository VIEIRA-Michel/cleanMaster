import React from "react";

const ReviewSection = () => {
  return (
    <section className="w-screen h-screen lg:h-[450px] shadow-md shadow-[#A4A7B0] border-[black] border-b" id="review">
      <div className="w-[90%] h-full bg-[white] mx-auto flex flex-row justify-between items-center relative">
        <div className="flex justify-center items-center">
          <i className="fa-solid fa-chevron-left cursor-pointer"></i>
        </div>
        <div className="w-[70%] h-full flex flex-col justify-center lg:justify-evenly items-center">
          <div className="flex justify-center items-center text-lg font-bold mb-6 lg:mb-0">
            <p className="w-full lg:w-[340px]">
              Cela sert d'exemple de satisfaction afin que les futures clients
              puissent voir les avis affichés
            </p>
          </div>
          <div className="mb-6 lg:mb-0">Anne Serif CA</div>
          <div className="w-[100px] flex justify-evenly items-center flex-row">
            <div>
              <i className="fa-sharp fa-solid fa-circle text-xs text-[#d8dce7] cursor-pointer"></i>
            </div>
            <div>
              <i className="fa-sharp fa-solid fa-circle text-xs text-[#d8dce7] cursor-pointer"></i>
            </div>
            <div>
              <i className="fa-sharp fa-solid fa-circle text-xs text-[#807D7D] cursor-pointer"></i>
            </div>
          </div>
        </div>
        <div>
          <i className="fa-solid fa-chevron-right cursor-pointer"></i>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
