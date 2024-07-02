import { ChevronRight } from "lucide-react";
import Image from "next/image";
import logo from "../assets/logo.svg";
import { useId } from "react";

interface IAboutUsMembersMobileProps {
  urlImage: string;
  name: string;
  age: number;
  city: string;
  course: string;
  description: string;
  skills: string[];
}

export default function AboutUsMembersMobile({
  urlImage,
  name,
  age,
  city,
  course,
  description,
  skills,
}: IAboutUsMembersMobileProps) {
  const id = useId();
  return (
    <div className="w-full max-w-full overflow-x-hidden my-4 px-4">
      <div className="w-full">
        <div className="relative flex flex-col items-center justify-center overflow-hidden py-6 sm:py-12 ">
          {/* Modal trigger */}
          <div className="bg-[#ffb302] rounded-md w-full flex mx-auto z-10 max-w-md">
            <div className="rounded-lg flex gap-4 p-4 w-full">
              <div className="flex-shrink-0">
                <Image
                  src={urlImage}
                  width={150}
                  height={150}
                  alt="Hudson Xavier"
                  className="w-[150px] h-[150px] lg:w-[200px] bg-no-repeat object-contain"
                />
              </div>
              <div className="flex flex-col gap-4 relative w-full">
                <div className="flex flex-col gap-2">
                  <h4 className="text-lg font-bold">{name}</h4>
                  <h5 className="text-sm font-bold">{skills}</h5>
                </div>
                <div className="flex items-end justify-end absolute bottom-0 right-0 mb-4 mr-4">
                  <label
                    htmlFor={`tw-modal-${id}`}
                    className="rounded-md flex items-center justify-center text-gray-50 font-medium text-xl"
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
              <label
                htmlFor={`tw-modal-${id}`}
                className="cursor-pointer mt-4 inline-block rounded-md bg-red-500 px-4 py-2 text-white"
              >
                Fechar
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
