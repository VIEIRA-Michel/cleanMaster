import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import * as LR from "@uploadcare/blocks";

const Form = () => {
  LR.registerBlocks(LR);
  const [state, handleSubmit] = useForm("mnqealqk");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-[80%] flex flex-col justify-center items-center m-auto mt-14 mb-5"
      >
        <div className="w-full flex mb-5">
          <h2 className="font-bold text-lg">Rendez-vous en ligne</h2>
        </div>
        <div className="w-full flex flex-column mb-3">
          <input
            id="name"
            name="name"
            type="text"
            className="w-full border border-[black] py-2 px-4 bg-[#D8DCE7] placeholder-black text-xs font-medium rounded-[5px]"
            placeholder="Votre nom*"
          />
        </div>
        <div className="w-full flex flex-column mb-3">
          <input
            id="cell"
            name="cell"
            type="text"
            className="w-full border border-[black] py-2 px-4 bg-[#D8DCE7] placeholder-black text-xs font-medium rounded-[5px]"
            placeholder="Numéro de téléphone*"
          />
        </div>
        <div className="w-full flex flex-column mb-3">
          <input
            id="email"
            name="email"
            type="text"
            className="w-full border border-[black] py-2 px-4 bg-[#D8DCE7] placeholder-black text-xs font-medium rounded-[5px]"
            placeholder="Adresse courriel*"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div className="w-full flex flex-column mb-3">
          <input
            id="service"
            name="service"
            type="text"
            className="w-full border border-[black] py-2 px-4 bg-[#D8DCE7] placeholder-black text-xs font-medium rounded-[5px]"
            placeholder="Type de service"
          />
        </div>
        <div className="w-full flex flex-column mb-3">
          <textarea
            id="message"
            name="message"
            type="text"
            className="w-full h-[130px] border border-[black] py-2 px-4 bg-[#D8DCE7] placeholder-black text-xs font-medium rounded-[5px]"
            placeholder="Tapez un message..."
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <div className="w-full flex flex-column mb-3">
          <lr-config ctx-name="my-uploader" pubkey="" />
          <lr-file-uploader-regular
            css-src="https://cdn.jsdelivr.net/npm/@uploadcare/blocks@0.30.0/web/lr-file-uploader-regular.min.css"
            ctx-name="my-uploader"
          />
        </div>
        <div className="w-full flex flex-column">
          <input
            id="size"
            name="size"
            type="number"
            className="w-full border border-[black] py-2 px-4 bg-[#D8DCE7] placeholder-black text-xs font-medium rounded-[5px]"
            placeholder="Pieds carré*"
          />
        </div>
        <div className="w-full flex text-xs mb-5 text-left">
          Les infos fournis sont strictement confidentiel*
        </div>
        <div className="w-full">
          <button
            type="submit"
            className="w-full py-2 px-4 border rounded-[5px] hover:bg-secondary hover:text-[white] duration-300"
            disabled={state.submitting}
          >
            Soumettre
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
