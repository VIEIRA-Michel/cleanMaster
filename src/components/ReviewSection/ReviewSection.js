import React from "react";

const ReviewSection = () => {
  return (
    <section
      className="w-full h-[55vh] lg:h-[450px] bg-primary lg:shadow-md lg:shadow-[#A4A7B0]"
      id="review"
    >
      <div className="w-full h-full bg-primary">
        <div className="h-[90%] lg:h-full bg-[white] max-lg:rounded-br-[80px] max-lg:shadow-custom">
          <div className="w-[85%] lg:w-[95%] h-[95%] mx-auto flex flex-row justify-between items-center relative">
            <div className="w-[5%] flex justify-center items-center">
              <i className="fa-solid fa-chevron-left text-secondary text-3xl cursor-pointer"></i>
            </div>
            <div className="w-[85%] h-full flex flex-col justify-evenly items-center">
              <div className="w-full flex justify-center items-center font-bold">
                <p className="w-full text-lg lg:text-3xl">
                  Cela sert d'exemple de satisfaction afin que les futures
                  clients puissent voir les avis affichés
                </p>
              </div>
              <div className="text-md lg:text-2xl">Anne Serif CA</div>
              <div className="w-[100px] flex justify-evenly items-center flex-row">
                <div>
                  <i className="fa-sharp fa-solid fa-circle text-md lg:text-xl text-[#7c748f] cursor-pointer"></i>
                </div>
                <div>
                  <i className="fa-sharp fa-solid fa-circle text-md lg:text-xl text-[#7c748f] cursor-pointer"></i>
                </div>
                <div>
                  <i className="fa-sharp fa-solid fa-circle text-md lg:text-xl text-secondary cursor-pointer"></i>
                </div>
              </div>
            </div>
            <div className="w-[5%] flex justify-center items-center">
              <i className="fa-solid fa-chevron-right text-secondary text-3xl cursor-pointer"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
