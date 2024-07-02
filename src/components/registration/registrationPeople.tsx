"use client";
import Image from "next/image";
import ImgBg from "./assets/baseee.png";
import { useState } from "react";
import FormPeople from "./formPeople";
import FormOng from "./formOng";

export default function RegistrationPeople() {
  const [padrinho, setPadrinho] = useState<string>("");
  const [ong, setOng] = useState<string>("");
  const [disabledButton, setDisabledButton] = useState<string>("");

  const handlePadrinhoClick = () => {
    setPadrinho("padrinho");
    setOng("");
    setDisabledButton("padrinho");
  };

  const handleOngClick = () => {
    setOng("ong");
    setPadrinho("");
    setDisabledButton("ong");
  };

  return (
    <div id="cadastrar" className="">
      <div className="flex items-center justify-center overflow-hidden">
        <div className="flex gap-3 items-start justify-start absolute top-11 lg:top-8 lg:left-2">
          <button
            onClick={handlePadrinhoClick}
            disabled={disabledButton === "padrinho"}
            className={`${
              disabledButton === "padrinho"
                ? "bg-white text-primaryDarkeColor cursor-not-allowed"
                : "bg-primaryColor text-white hover:bg-white hover:text-primaryDarkeColor"
            } font-medium px-3 py-2 rounded-lg`}
          >
            Cadastrar Padrinho
          </button>
          <button
            onClick={handleOngClick}
            disabled={disabledButton === "ong"}
            className={`${
              disabledButton === "ong"
                ? "bg-white text-primaryDarkeColor cursor-not-allowed"
                : "bg-primaryColor text-white hover:bg-white hover:text-primaryDarkeColor"
            } font-medium px-3 py-2 rounded-lg`}
          >
            Cadastrar Ong
          </button>
        </div>

        <div className="hidden lg:block lg:w-1/2 h-full relative">
          <Image
            src={ImgBg}
            layout="fill"
            objectFit="cover"
            alt="Imagem de fundo_bg"
          />
        </div>
        {padrinho === "padrinho" && <FormPeople />}
        {ong === "ong" && <FormOng />}
      </div>
    </div>
  );
}
