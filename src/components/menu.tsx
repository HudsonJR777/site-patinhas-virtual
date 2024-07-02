"use client";
import { useState } from "react";
import { AlignJustify, X } from "lucide-react"
import Logo from "../assets/Ativo 9PATINHA.svg"
import Image from "next/image";
import Link from "next/link";


export default function NavBar() {
    const [isClick, setisClick] = useState(false);
    const toggleNavBar = () : void => {
        setisClick(!isClick)
    }
    return (
        <div className="fixed top-0 left-0 z-50 w-full"> 
           <nav className="bg-[#4a128c] border-0 border-b-2 border-secondaryColor">
            <div className="container mx-auto px-4 py-2 sm:px-6 lg:px-8 xl4:max-w-[1600px] xl4:py-6 ">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <a href="/" className="">
                               <Image src={Logo} className="w-[200px] lg:w-[100px] lg:h-[100px] xl4:w-[250px] xl4:h-[200px]" width={200} height={100} alt="Logo do site"/>
                            </a>
                        </div>
                    </div>
                    <div className="hidden lg:block">
                        <div className="ml-4 flex items-center space-x-4">
                            <a href="/#home" className="text-secondaryColor hover:text-white rounded-lg p-2 xl4:text-[25px]">
                                Inicio
                            </a>
                            <a href="/#ajudar" className="text-secondaryColor hover:text-white rounded-lg p-2 xl4:text-[25px]">
                              Serviço
                            </a>
                            <a href="/#nossos-animais" className="text-secondaryColor hover:text-white rounded-lg p-2 xl4:text-[25px]">
                               Nossos animais
                            </a>
                            <a href="/#acessibilidade" className="text-secondaryColor hover:text-white rounded-lg p-2 xl4:text-[25px]">
                                App
                            </a>
                            <a href="/#proposito" className="text-secondaryColor hover:text-white rounded-lg p-2 xl4:text-[25px]">
                                Propósitos
                            </a>
                        
                            <a href="/#sobre-nos" className="text-secondaryColor hover:text-white rounded-lg p-2 xl4:text-[25px]">
                               Sobre nós
                            </a>
                            <Link href="/cadastrar" className="text-[#4a128c] font-bold text-lg bg-white rounded-xl py-2 px-6 hover:text-[#4a128c] hover:bg-[#ffb302]">Cadastrar</Link>
                            <Link href="/login" className="text-[#4a128c] font-bold text-lg bg-white rounded-xl py-2 px-6 hover:text-[#4a128c] hover:bg-[#ffb302]">Login</Link>
                        </div>
                    </div>
                    <div className="lg:hidden flex items-center">
                            <button 
                            onClick={toggleNavBar}
                            className="inline-flex items-center justify-center p-2 rounded-md text-white 
                            hover:text-white focus:outline-none focus:right-2 focus:ring-inset focus:ring-white
                            ">
                                {isClick ? (
                                      <X />
                                ): (
                                    <AlignJustify />
                                )}
                            </button>
                    </div>
                </div>
            </div>
                {isClick && (
                    <div className="lg:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex items-center flex-col h-screen hidde:scroll">
                            <a href="/#home" className="text-white hover:bg-white  hover:text-yellow-400 rounded-lg p-2">
                                Início
                            </a>
                            <a href="/#ajudar" className="text-white hover:bg-white hover:text-yellow-400 rounded-lg p-2">
                            Serviço
                            </a>
                            <a href="/#nossos-animais" className="text-white hover:bg-white hover:text-yellow-400 rounded-lg p-2">
                            Nossos animais
                            </a>
                            <a href="/#acessibilidade" className="text-white hover:bg-white hover:text-yellow-400 rounded-lg p-2">
                            App
                            </a>
                            <a href="/#proposito" className="text-white hover:bg-white hover:text-yellow-400 rounded-lg p-2">
                            Propósitos
                            </a>
                            <a href="/#sobre-nos" className="text-white hover:bg-white hover:text-yellow-400 rounded-lg p-2">
                            Sobre nós
                            </a>
                            <Link href="/cadastrar" className="bg-white text-primaryColor font-bold hover:bg-primaryColor hover:text-secondaryColor rounded-lg p-2">
                               Cadastrar
                            </Link>
                            <Link href="/login" className="bg-white text-primaryColor font-bold hover:bg-primaryColor hover:text-secondaryColor rounded-lg p-2">
                               Login
                            </Link>
                           
                        </div>
                    </div>
                )}
           </nav>
        </div>
    );
}