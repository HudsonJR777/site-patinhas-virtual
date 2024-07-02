import Image from "next/image";
import Cel from "../assets/celular.png";
import ApStore from "../assets/Ativo 1APPLE STORE.svg";
import Google from "../assets/googlePlay.svg";

export default function Accessibility() {
    return (
        <div className="bg-white py-[60px]">
            <div className="container">
                <div className="">
                    <div className="flex items-center gap-5 lg:items-center lg:justify-between lg:gap-10 mt-4">
                        <div className="flex flex-col gap-4 text-left lg:w-[400px]">
                            <div className="space-y-4">
                                <div className="">
                                    <h1 className="text-[12] lg:text-2xl text-black font-bold">Acessibilidade</h1>
                                    <p className="text-[10px] lg:text-xl text-slate-950 font-medium">
                                    Temos o prazer de anunciar o lançamento do nosso novo aplicativo, desenvolvido para trazer alegria e sentido à sua vida, conectando você com animais de estimação em busca de amor e carinho.
                                    </p>
                                </div>
                                <button className="uppercase text-primaryColor font-bold items-start border-[1px] border-t-0 border-l-0 border-r-0 border-b-primaryColor">
                                    Leia mais
                                </button>
                                <div className="flex-wrap items-center space-y-2 lg:flex lg:gap-4">
                                    <Image 
                                        className="lg:w-[150px] lg:h-[200px] cursor-pointer"
                                        src={ApStore}
                                        width={150}
                                        height={200}
                                        alt="Logo appStore"
                                    />
                                    <Image 
                                        className="lg:w-[150px] lg:h-[200px] cursor-pointer"
                                        src={Google}
                                        width={150}
                                        height={200}
                                        alt="Logo appStore"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex-shrink-0" >
                            <Image
                                className="w-[80px] sm:w-[180px] h-[400px] lg:w-[350px] lg:h-[650px] object-contain"
                                src={Cel}
                                width={350}
                                height={650}
                                alt="Imagem de um celular"
                            />
                        </div>
                    </div>
                    <div className="bg-white w-full h-full">Hudson</div>
                </div>
            </div>
        </div>
    );
}
