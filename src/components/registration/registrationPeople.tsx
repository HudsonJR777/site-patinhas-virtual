import { X } from "lucide-react";
import Image from "next/image";
import ImgBg from "./assets/baseee.png";

export default function RegistrationPeople() {
    return (
        <div className="">
            <div className="flex items-center justify-center overflow-hidden">
                
                <div className="hidden lg:block lg:w-1/2 h-full relative">
                    <Image 
                        src={ImgBg}
                        layout="fill"
                        objectFit="cover"
                        alt="Imagem de fundo_bg"
                    />
                </div>
                <div className="border-2 border-white flex flex-col m-6 space-y-8 bg-[#4a128c] shadow-2xl text-black text-lg rounded-2xl lg:flex lg:flex-1 lg:items-center lg:justify-center w-full lg:max-w-[680px] lg:w-1/2">
                    <div className="w-full">
                        <div className="bg-[#ffb302] flex items-center justify-between w-full py-5 rounded-t-xl border-b-4 border-black px-4">
                            <span className="mb-3 text-4xl text-center font-bold  mx-auto text-primaryColor">Cadastro</span>
                            <div className="flex items-center justify-center bg-black text-white rounded-full w-8 h-8">
                                <button><X className="w-6 h-6" /></button>
                            </div>
                        </div>
                        <div className="p-8 md:p-14">
                            <div className="py-4">
                                <span className="mb-2 text-lg text-white font-bold"></span>
                                <input 
                                    type="text"
                                    name="email"
                                    id="email"
                                    placeholder="Nome"
                                    className="w-full p-2 border border-gray-300 rounded-full placeholder:font-semibold placeholder-text-slate-400"
                                />
                            </div>
                            <div className="py-4">
                                <span className="mb-2 text-lg text-white font-bold"></span>
                                <input
                                    type="text"
                                    name="text"
                                    id="pass"
                                    placeholder="Sobrenome"
                                    className="w-full p-2 border border-gray-300 rounded-full placeholder:font-semibold placeholder-text-slate-400"
                                />
                            </div>
                            <div className="py-4">
                                <span className="mb-2 text-lg text-white font-bold"></span>
                                <input
                                    type="text"
                                    name="email"
                                    id="pass"
                                    placeholder="Email"
                                    className="w-full p-2 border border-gray-300 rounded-full placeholder:font-semibold placeholder-text-slate-400"
                                />
                            </div>
                            <div className="py-4">
                                <span className="mb-2 text-lg text-white font-bold"></span>
                                <input
                                    type="text"
                                    name="email"
                                    id="pass"
                                    placeholder="Usuário"
                                    className="w-full p-2 border border-gray-300 rounded-full placeholder:font-semibold placeholder-text-slate-400"
                                />
                            </div>
                            <div className="py-4">
                                <span className="mb-2 text-lg text-white font-bold"></span>
                                <input
                                    type="password"
                                    name="pass"
                                    id="pass"
                                    placeholder="Senha"
                                    className="w-full p-2 border border-gray-300 rounded-full placeholder:font-semibold placeholder-text-slate-400"
                                />
                            </div>
                            <div className="py-4">
                                <span className="mb-2 text-lg text-white font-bold"></span>
                                <input
                                    type="password"
                                    name="pass"
                                    id="pass"
                                    placeholder="Confirmar senha"
                                    className="w-full p-2 border border-gray-300 rounded-full placeholder:font-semibold placeholder-text-slate-400"
                                />
                            </div>
                            <div className="flex flex-col lg:flex lg:flex-col items-center justify-center gap-3 py-4 w-full">
                                <div className="flex items-center justify-center lg:justify-start">
                                    <input
                                        type="checkbox"
                                        name="ch"
                                        id="ch"
                                        className="mr-2"
                                    />
                                    <p className="text-sm lg:text-lg text-white font-semibold">Eu aceito todos <span className="text-sm lg:text-lg text-[#ffb302] font-bold">termos e condições</span></p>
                                </div>
                                <button 
                                    className="w-[150px] items-center rounded-full bg-[#ffb302] text-white p-2 text-lg font-semibold hover:bg-white hover:text-[#4a128c] border hover:border-[#4a128c]">
                                    Entrar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
