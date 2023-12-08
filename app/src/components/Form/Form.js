import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const Form = () => {
  const yupSchema = yup.object({
    name: yup
      .string()
      .required("Le champ est obligatoire")
      .min(2, "Trop court !"),
    cell: yup
      .number()
      .required("Le champ est obligatoire")
      .min(1000000000)
      .max(9999999999),
    mail: yup
      .string()
      .required("Le champ est obligatoire")
      .email("L'adresse mail n'est pas valide"),
    service: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    getValues,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      cell: "",
      mail: "",
      service: "",
      message: "",
      picture: "",
      size: "",
    },
    resolver: yupResolver(yupSchema),
    mode: "onSubmit",
  });

  function submit(values) {
    console.log(values);
  }

  return (
    <div className="w-[30%] hidden lg:block bg-[white] border border-[black] rounded-[10px] absolute top-[-10px] right-[30px]">
      <form
        onSubmit={handleSubmit(submit)}
        className="w-[80%] flex flex-col justify-center items-center m-auto mt-14 mb-5"
      >
        <div className="w-full flex mb-5">
          <h2 className="font-bold text-lg">Rendez-vous en ligne</h2>
        </div>
        <div className="w-full flex flex-column mb-3">
          <input
            {...register("name", {
              required: {
                value: true,
                message: "Le champ est obligatoire",
              },
              minLength: {
                value: 3,
                message: "Trop court !",
              },
            })}
            id="name"
            type="text"
            className="w-full border border-[black] py-2 px-4 bg-[#D8DCE7] placeholder-black text-xs font-medium"
            placeholder="Votre nom*"
          />
          {errors?.name && <p> {errors.name.message}</p>}
        </div>
        <div className="w-full flex flex-column mb-3">
          <input
            {...register("cell", {
              required: {
                value: true,
                message: "Le champ est obligatoire",
              },
              minLength: {
                value: 10,
                message: "Le numéro n'est pas valide",
              },
            })}
            id="cell"
            type="text"
            className="w-full border border-[black] py-2 px-4 bg-[#D8DCE7] placeholder-black text-xs font-medium"
            placeholder="Numéro de téléphone*"
          />
          {errors?.cell && <p> {errors.cell.message}</p>}
        </div>
        <div className="w-full flex flex-column mb-3">
          <input
            {...register("mail", {
              required: {
                value: true,
                message: "Le champ est obligatoire",
              },
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "L'adresse mail n'est pas valide",
              },
            })}
            id="mail"
            type="text"
            className="w-full border border-[black] py-2 px-4 bg-[#D8DCE7] placeholder-black text-xs font-medium"
            placeholder="Adresse courriel*"
          />
          {errors?.mail && <p> {errors.mail.message}</p>}
        </div>
        <div className="w-full flex flex-column mb-3">
          <input
            {...register("service", {
              required: {
                value: true,
                message: "Le champ est obligatoire",
              },
            })}
            id="service"
            type="text"
            className="w-full border border-[black] py-2 px-4 bg-[#D8DCE7] placeholder-black text-xs font-medium"
            placeholder="Type de service"
          />
          {errors?.service && <p> {errors.service.message}</p>}
        </div>
        <div className="w-full flex flex-column mb-3">
          <input
            {...register("msg", {
              required: {
                value: true,
                message: "Le champ est obligatoire",
              },
            })}
            id="msg"
            type="text"
            className="w-full h-[130px] border border-[black] py-2 px-4 bg-[#D8DCE7] placeholder-black text-xs font-medium"
            placeholder="Tapez un message..."
          />
          {errors?.msg && <p> {errors.msg.message}</p>}
        </div>
        <div className="w-full flex flex-column mb-3">
          <input
            {...register("picture", {
              required: {
                value: true,
                message: "Le champ est obligatoire",
              },
            })}
            id="picture"
            type="text"
            className="w-full border border-[black] py-2 px-4 bg-[#D8DCE7] placeholder-black text-xs font-medium"
            placeholder="Photo*"
          />
          {errors?.picture && <p> {errors.picture.message}</p>}
        </div>
        <div className="w-full flex flex-column">
          <input
            {...register("size", {
              required: {
                value: true,
                message: "Le champ est obligatoire",
              },
              valueAsNumber: true,
              onBlur(e) {
                console.log("blur size");
              },
              onChange(e) {
                console.log("onChange");
              },
            })}
            id="size"
            type="number"
            className="w-full border border-[black] py-2 px-4 bg-[#D8DCE7] placeholder-black text-xs font-medium"
            placeholder="Pieds carré*"
          />
          {errors?.size && <p> {errors.size.message}</p>}
        </div>
        <div className="w-full flex text-xs mb-5 text-left">
          Les infos fournis sont strictement confidentiel*
        </div>
        <div className="w-full">
          <button className="w-full py-2 px-4 border rounded-[5px]">
            Soumettre
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
