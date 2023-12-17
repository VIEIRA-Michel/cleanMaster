import React from "react";
import Form from "../Form/Form";

const FormSection = () => {
  return (
    <section
      className="w-full h-screen lg:h-[400px] flex lg:hidden justify-center items-center bg-secondary py-6"
      id="contact"
    >
      <div className="w-[75%] bg-[white] p-2  shadow-lg rounded-[10px]">
        <Form />
      </div>
    </section>
  );
};

export default FormSection;
