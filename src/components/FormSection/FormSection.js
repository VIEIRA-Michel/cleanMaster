import React from "react";
import Form from "../Form/Form";

const FormSection = () => {
  return (
    <div className="w-screen h-screen lg:h-[400px] flex lg:hidden justify-center items-center bg-[#D8DCE7] py-6">
      <div className="bg-[white] p-2  shadow-lg rounded-[10px]">
        <Form />
      </div>
    </div>
  );
};

export default FormSection;
