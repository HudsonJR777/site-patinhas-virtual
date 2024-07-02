import Image from "next/image";
import Google from "../assets/google.svg";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Login() {
  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-14 ">
      <div className="flex items-center justify-center ">
        <div className="flex flex-col m-6  bg-white shadow-2xl text-black text-lg rounded-2xl lg:flex-row  w-full lg:max-w-[680px]">
          <div className="flex flex-col justify-center p-8 md:p-14 w-full lg:w-full">
            <h1 className="mb-3 text-4xl font-bold text-primaryColor flex justify-between">Bem vindo de volta  <Link href="/"><ArrowLeft /> </Link></h1>
            <span className="font-semibold text-gray-400 mb-8">Bem-vindo de volta! Por favor, insira seus dados</span>
            <div className="py-4">
              <span className="mb-2 text-lg text-black font-bold">Email</span>
              <input 
                type="text"
                name="email"
                id="email"
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-black"
              />
            </div>
            <div className="py-4">
              <span className="mb-2 text-lg text-black font-bold">Senha</span>
              <input
                type="password"
                name="pass"
                id="pass"
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-800"
              />
            </div>
            <div className="flex flex-col lg:flex-row justify-between py-4 w-full">
              <div className="mr-24 flex items-center justify-center w-full">
                <input
                  type="checkbox"
                  name="ch"
                  id="ch"
                  className="mr-2"
                />
                <span className="text-lg text-slate-950 w-full">Lembrar por 30 dias</span>
              </div>
              <span className="font-bold text-lg text-slate-950">Esqueceu a senha</span>
            </div>
            <button 
              className="w-full bg-primaryColor text-white p-2 text-lg font-semibold rounded-lg mb-6 hover:bg-secondaryColor hover:text-black border hover:border-black">
              Entrar
            </button>
            <button className="w-full border border-gray-950 text-lg font-semibold text-black p-2 rounded-lg mb-6 hover:bg-black hover:text-white">
              <Image 
                src={Google}
                width={24}
                height={24}
                alt="imagem do Google"
                className="inline mr-2"
              />
              Entrar com o Google
            </button>
            <div className="text-center text-slate-950 text-lg flex flex-col lg:flex-row justify-between w-full">
              Não tem uma conta?
              <span className="font-bold text-black text-lg">Cadastre-se gratuitamente</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
