import React from "react";

const ReviewSection = () => {
  return (
    <div className="w-screen h-[300px] shadow-md shadow-[#A4A7B0] border-[black] border-b">
      <div className="w-[90%] h-full bg-[white] mx-auto flex flex-row justify-between items-center relative">
        <div className="flex justify-center items-center">
          <i class="fa-solid fa-chevron-left"></i>
        </div>
        <div className="w-[70%] h-full flex flex-col justify-evenly items-center">
          <div className="flex justify-center items-center text-lg font-bold">
            <p className="w-[340px]">
              Cela sert d'exemple de satisfaction afin que les futures clients
              puissent voir les avis affichés
            </p>
          </div>
          <div>Anne Serif CA</div>
          <div className="w-[100px] flex justify-evenly items-center flex-row">
            <div>
              <i class="fa-sharp fa-solid fa-circle text-xs text-[#d8dce7]"></i>
            </div>
            <div>
              <i class="fa-sharp fa-solid fa-circle text-xs text-[#d8dce7]"></i>
            </div>
            <div>
              <i class="fa-sharp fa-solid fa-circle text-xs text-[#807D7D]"></i>
            </div>
          </div>
        </div>
        <div>
          <i class="fa-solid fa-chevron-right"></i>
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
