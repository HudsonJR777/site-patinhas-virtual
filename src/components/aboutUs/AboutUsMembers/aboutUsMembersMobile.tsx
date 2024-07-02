import { ChevronRight, Instagram } from "lucide-react";
import Image from "next/image";
import logo from "../assets/logo.svg";
import { useId } from "react";
import Link from "next/link";

interface IAboutUsMembersMobileProps {
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

export default function AboutUsMembersMobile({
  urlImage,
  name,
  age,
  city,
  course,
  description,
  skills,
  instaName,
  url,
}: IAboutUsMembersMobileProps) {
  const id = useId();
  return (
    <div className="w-full overflow-x-hidden">
      <div className="w-full">
        <div className="relative flex flex-col items-center justify-center overflow-hidden  ">
          {/* Modal trigger */}
          <div className="bg-[#ffb302] rounded-md w-full flex mx-auto z-10 max-w-md">
            <div className="rounded-lg flex gap-4  w-full">
              <div className="flex-shrink-0">
                <Image
                  src={urlImage}
                  width={150}
                  height={150}
                  alt="Hudson Xavier"
                  className="w-[90px] h-full lg:w-[200px] bg-no-repeat object-cover"
                />
              </div>
              <div className="flex flex-col gap-4 relative w-full">
                <div className="flex flex-col gap-2 py-4">
                  <h4 className="text-lg font-bold text-primaryColor">
                    {name}
                  </h4>
                  <h5 className="text-sm font-bold text-primaryColor flex gap-2 flex-col">
                    {skills.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </h5>
                </div>
                <div className="flex items-end justify-end  bottom-0 right-0 mb-4 mr-4">
                  <label
                    htmlFor={`tw-modal-${id}`}
                    className="rounded-md flex items-center justify-center text-primaryColor font-medium text-xl"
                  >
                    <div className="flex items-center justify-center">
                      Saiba mais
                      <ChevronRight className="mt-1" />
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Hidden toggle */}
          <input
            type="checkbox"
            id={`tw-modal-${id}`}
            className="peer fixed appearance-none opacity-0"
          />

          {/* Modal */}
          <div className="invisible fixed inset-0 flex items-center justify-center bg-slate-700/30 opacity-0 transition-all duration-200 ease-in-out peer-checked:visible peer-checked:opacity-100 z-50">
            {/* Modal box */}
            <div
              className="max-h-[calc(100vh - 2em)] h-full w-[350px] overflow-y-auto rounded-md bg-white p-6 text-black shadow-2xl
             transition-transform duration-200 ease-in-out transform"
            >
              <h3 className="text-lg font-bold">
                <Image src={logo} width={200} height={200} alt="logo do site" />
              </h3>
              <div className="flex gap-3 flex-col items-center mt-3">
                <Image src={urlImage} width={90} height={90} alt="Hudson" />
                <div className="flex flex-col items-start justify-start w-full">
                  <div>
                    <h3>
                      <b>Nome: </b>
                      {name}
                    </h3>
                    <h3>
                      <b>Idade: </b>
                      {age}
                    </h3>
                    <h3>
                      <b>Cidade: </b>
                      {city}
                    </h3>
                    <h3>
                      <b>Curso: </b>
                      {course}
                    </h3>
                  </div>
                </div>
              </div>
              <div
                className="py-4 break-words"
                style={{ maxHeight: "500px", overflowY: "auto" }}
              >
                <div>
                  <div>
                    <p>{description}</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <label
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
      </div>
    </div>
  );
}
