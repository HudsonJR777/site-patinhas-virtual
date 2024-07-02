"use client";
import CardsHelpMobile from "@/components/cardsAccordion";
import CardsHelp from "@/components/cardsHelp";
import CardsHero from "@/components/cardsHero";
import ImgBg from "../components/registration/assets/baseee.png";
import HelpAnimals from "@/components/helpAnimals";
import AboutUsMembers from "@/components/aboutUs/AboutUsMembers/aboutUsMembers";
import Hero from "@/components/hero";
import NavBar from "@/components/menu";

import CarroselAboutUs from "@/components/aboutUs/carroselAboutUs";
import Login from "@/components/login";
import RegistrationPeople from "@/components/registration/registrationPeople";
import { Accessibility } from "lucide-react";
import Acessibility from "@/components/acessibility";
import { skillsMembers } from "@/components/aboutUs/AboutUsMembers";

import AboutUsMembersMobile from "@/components/aboutUs/AboutUsMembers/aboutUsMembersMobile";
import AnimalsToBeSponsored from "@/components/AnimalsToBeSponsored";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const h1Style =
    "uppercase text-white font-bold text-[30px] xl2:text-[36px] xl4:text-[40px]";

  const [isOpenLogin, setIsOpenLogin] = useState(true);
  return (
    <main className="overflow-x-hidden relative">
      <NavBar />
      <div className="pt-8 z-0">
        <div className="w-full" id="home">
          <Hero />
        </div>
        <div id="ajudar">
          <div className="mt-[110px] hidden lg:flex w-full">
            <CardsHelp />
          </div>
          <div className="flex lg:hidden mt-[110px]">
            <CardsHelpMobile />
          </div>
        </div>
        <div
          id="nossos-animais"
          className="w-full mt-[110px] bg-secondaryColor"
        >
          <AnimalsToBeSponsored />
        </div>
        <div id="acessibilidade" className="mt-[-20px]">
          <Acessibility />
        </div>
        <div id="proposito" className="mt-[110px] w-full">
          <HelpAnimals />
        </div>
        {/* <AboutUs />  */}
        <div className="flex flex-col" id="sobre-nos">
          {/* <CarroselAboutUs />   */}
          <div className="hidden lg:flex flex-col relative gap-4 container justify-center  mt-[110px]">
            <div className="flex items-center justify-center flex-col py-8 ">
              <h1 className={h1Style}>Sobre Nós</h1>
              <p className="font-normal xl2:font-medium xl4:font-semibold xl4:text-[20px]">
                Entenda sobre a adoção virtual e como ajudar mesmo de longe.
              </p>
            </div>
            <div className="flex flex-wrap relative gap-4 justify-center">
              {skillsMembers.map((item) => {
                return (
                  <AboutUsMembers
                    age={item.age}
                    urlImage={item.urlImage}
                    city={item.city}
                    course={item.course}
                    description={item.description}
                    name={item.name}
                    skills={item.skills}
                    key={item.name}
                  />
                );
              })}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-center flex-col py-8 ">
              <h1 className={h1Style}>Sobre Nós</h1>
              <p className="font-normal xl2:font-medium xl4:font-semibold xl4:text-[20px]">
                Entenda sobre a adoção virtual e como ajudar mesmo de longe.
              </p>
            </div>

            <div className="flex lg:hidden relative gap-4 container flex-col">
              {skillsMembers.map((item) => {
                return (
                  <AboutUsMembersMobile
                    age={item.age}
                    urlImage={item.urlImage}
                    city={item.city}
                    course={item.course}
                    description={item.description}
                    name={item.name}
                    skills={item.skills}
                    key={item.name}
                  />
                );
              })}
            </div>
          </div>

          {/* <AboutUsMobile  />   */}
        </div>
      </div>
      {/* <div
            //  style={{ backgroundImage: `url(${ImgBg.src}) ` }}
            className="bg-cover bg-center w-full h-screen bg-no-repeat bg-secondaryColor relative mt-[110px] "
          >
            <Image src={ImgBg} alt="cadastro" className="max-lg:hidden" />
            <div className="container lg:absolute top-0 right-0">
              <RegistrationPeople />
            </div>
          </div> */}
    </main>
  );
}
