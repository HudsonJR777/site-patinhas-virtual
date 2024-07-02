import bgHero from "../assets/basee.png";
import Logo2 from "../assets/Ativo 8PATINHA.svg"
import Image from "next/image";
import CardsHero from "./cardsHero";
import CardsHelp from "./cardsHelp";

export default function Hero() {
  return (
    <div className="relative z-0 mt-[49px] md:mt-[50px]">
      <div
        style={{ backgroundImage: `url(${bgHero.src}) ` }}
        className="bg-cover bg-center w-full h-[580px] pt-8"
      >
        <div className="flex items-end justify-end gap-20  flex-col container">
            <h1 className="text-3xl max-lg:text-right font-extrabold text-primaryColor">Conheça o nosso projeto:</h1>
            <Image 
            className=" -mt-14 bg-cover bg-no-repeat"
            src={Logo2} width={250} height={100} alt="Logo do site"/>
        </div>
      </div>
      <div className="-mt-[110px]" >
      <CardsHero />
      </div>
    
    </div>
  );
}
