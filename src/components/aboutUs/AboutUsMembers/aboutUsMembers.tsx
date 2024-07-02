"use client";
import Image from "next/image";
import logo from "../assets/logo.svg";
import { useState } from "react";
import { Instagram } from "lucide-react";
import Link from "next/link";


interface IAboutUsMembersProps {
  urlImage: string;
  name: string;
  age: number;
  city: string;
  course: string;
  description: string;
  skills: string[];
  instaName: string;
  url: string;
}

export default function AboutUsMembers({
  urlImage,
  name,
  age,
  city,
  course,
  description,
  skills,
  instaName,
  url
}: IAboutUsMembersProps) {
  const id = name;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="">
      <div className="">
        <div className="relative flex flex-col items-center justify-center overflow-hidden">
          {/* Modal trigger */}
          <div className="bg-[#ffb302] rounded-md relative group cursor-pointer">
            <div className="lg:w-[180px] lg:h-[300px] xl:w-[250px] xl:h-[400px] rounded-lg overflow-hidden">
              <div className="w-full lg:h-[180px] xl:h-[250px] relative">
                {/* Overlay */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                {/* Text on Hover */}
                <div className="absolute hidden group-hover:block top-24 mx-10">
                  {skills.map((skill) => (
                    <h3
                      key={skill}
                      className="text-xl font-extrabold text-white"
                    >
                      {skill}
                    </h3>
                  ))}
                </div>
                <Image
                  src={urlImage}
                  width={300}
                  height={200}
                  alt="Hudson Xavier"
                  className="lg:w-[200px] lg:h-[180px] xl:w-[300px] xl:h-[250px] bg-no-repeat object-cover"
                />
              </div>
              <div className="px-2 py-2">
                <h4 className="text-lg font-bold text-primaryColor">{name}</h4>
              </div>
            </div>
            <div>
              <div className="absolute left-0 top-72 inset-0 group-hover:flex group-hover:items-center group-hover:justify-center mx-auto hidden ease-in-out">
                <label
                  onClick={() => setIsOpen((value) => !value)}
                  className="cursor-pointer rounded-md bg-[#4a128c] px-4 py-2 text-gray-50 font-medium text-xl"
                >
                  Saiba mais
                </label>
              </div>
            </div>
          </div>

          {/* Hidden toggle */}
          <input
            type="checkbox"
            id={`tw-modal-${id}`}
            className="peer fixed appearance-none opacity-0"
          />
        </div>
      </div>
      {/* Modal */}
      <div
        id="teste"
        className={`
       w-screen h-screen fixed z-50 inset-0 flex items-center justify-center opacity-0 transition-all 
       duration-200 ease-in-out 
       ${isOpen ? "visible opacity-100" : "invisible opacity-0"}
       bg-black_op
    
        `}
      >
        {/* Modal box */}
        <div className="max-h-[calc(100vh - 5em)] h-auto max-w-lg overflow-y-auto rounded-md bg-white p-6 text-black shadow-2xl transition-transform duration-200 ease-in-out transform peer-checked:translate-y-0 peer-checked:scale-100">
          <h3 className="text-lg font-bold mb-3">
            <Image src={logo} width={200} height={100} alt="logo do site" />
          </h3>
          <div className="flex gap-3">
            <Image
              className="w-[150px] h-[100px] object-contain"
              src={urlImage}
              width={200}
              height={50}
              alt="Hudson"
            />
            <div>
              <div>
                <h3>
                  <b>Nome: </b> {name}
                </h3>
                <h3>
                  <b>Idade: </b>
                  {age}
                </h3>
                <h3>
                  <b>Cidade: </b> {city}
                </h3>
                <h3>
                  <b>Curso: </b> {course}
                </h3>
              </div>
            </div>
          </div>
          <div
            className="py-4 break-words"
            style={{ maxHeight: "500px", overflowY: "auto" }}
          >
            <div>
              <p>{description}</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <label
              onClick={() => setIsOpen((value) => !value)}
              htmlFor={`tw-modal-${id}`}
              className="cursor-pointer mt-4 inline-block rounded-md bg-red-500 px-4 py-2 text-white"
            >
              Fechar
            </label>
            <div className="group">
                <div className="flex items-center gap-2 group-hover:text-primaryColor">
                  <Link className="flex items-center mt-5" target="_blank" href={url}>
                    <Instagram />
                    <b>{instaName}</b>
                  </Link>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
