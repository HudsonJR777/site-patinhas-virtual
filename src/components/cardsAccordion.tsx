"use client";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function CardsHelpMobile() {
    const [activeAccordion, setActiveAccordion] = useState(null);

    const toggleAccordion = (index: any) => {
        setActiveAccordion(activeAccordion === index ? null : index);
    };

    const isAccordionOpen = (index: any) => {
        return activeAccordion === index;
    };

    return (
        <div className="container">
            <div className="">
                <div className="w-full overflow-hidden">
                    <div className="flex items-start flex-col  text-left">
                        <h1 className="text-[30px] font-extrabold text-center w-full">Porque Ajudar?</h1>
                        <p className="font-normal text-sm w-[320px] mx-auto text-center ">Entenda sobre a adoção virtual e como ajudar mesmo de longe.</p>
                    </div>
                    <div className="flex flex-col items-center mt-[10px] w-full">
                        
                        <div key={1} className="relative w-full shadow-black shadow-md m-[15px]">
                           
                            <input
                                type="checkbox"
                                id={`products-checkbox1`}
                                className="absolute peer opacity-0"
                                checked={isAccordionOpen(1)}
                                onChange={() => toggleAccordion(1)}
                            />
                            
                            <label
                                htmlFor={`products-checkbox1`}
                                className="flex items-center font-bold tracking-[1px] px-4 h-[50px] text-[11px] w-full cursor-pointer"
                            >
                                Adote virtualmente: flexibilidade que salva.
                            </label>
                            
                            <div className="absolute top-0 mt-4 right-[10px] transform duration-200">
                                <ChevronDown className={`w-4 h-4 ${isAccordionOpen(1) ? 'rotate-180' : ''}`} onClick={() => toggleAccordion(1)} />
                            </div>
                            
                            <div className={`max-h-0 overflow-hidden ${isAccordionOpen(1) ? 'max-h-full' : ''} duration-300`}>
                                <p className="p-4 text-sm">
                                    Se você deseja fazer a diferença na vida de um animal
                                    de estimação, mas tem uma agenda movimentada ou vive
                                    uma vida nômade, nossa opção de adoção virtual oferece
                                    flexibilidade e compromisso.
                                </p>
                            </div>
                        </div>
                        
                        <div key={2} className="relative w-full shadow-black shadow-md m-[15px]">
                           
                            <input
                                type="checkbox"
                                id={`products-checkbox2`}
                                className="absolute peer opacity-0"
                                checked={isAccordionOpen(2)}
                                onChange={() => toggleAccordion(2)}
                            />
                           
                            <label
                                htmlFor={`products-checkbox2`}
                                className="flex items-center font-bold tracking-[1px] px-4 h-[50px] text-[11px] w-full cursor-pointer"
                            >
                                Adoção virtual: aprenda e cuide de pets!
                            </label>
                           
                            <div className="absolute top-0 mt-4 right-[10px] transform duration-200">
                                <ChevronDown className={`w-4 h-4 ${isAccordionOpen(2) ? 'rotate-180' : ''}`} onClick={() => toggleAccordion(2)} />
                            </div>
                           
                            <div className={`max-h-0 overflow-hidden ${isAccordionOpen(2) ? 'max-h-full' : ''} duration-300`}>
                                <p className="p-4 text-sm">
                                    Se você está interessado em aprender mais sobre o cuidado
                                    e o bem-estar dos animais de estimação, nossa opção de adoção 
                                    virtual pode proporcionar uma experiência educativa enriquecedora.
                                </p>
                            </div>
                        </div>
                        
                        <div key={3} className="relative w-full shadow-black shadow-md m-[15px]">
                            
                            <input
                                type="checkbox"
                                id={`products-checkbox3`}
                                className="absolute peer opacity-0"
                                checked={isAccordionOpen(3)}
                                onChange={() => toggleAccordion(3)}
                            />
                            
                            <label
                                htmlFor={`products-checkbox3`}
                                className="flex items-center font-bold tracking-[1px] px-4 h-[50px] text-[11px] w-full cursor-pointer"
                            >
                                Adoção virtual: faça a diferença e transforme vidas!
                            </label>
                            
                            <div className="absolute top-0 mt-4 right-[10px] transform duration-200">
                                <ChevronDown className={`w-4 h-4 ${isAccordionOpen(3) ? 'rotate-180' : ''}`} onClick={() => toggleAccordion(3)} />
                            </div>
                            
                            <div className={`max-h-0 overflow-hidden ${isAccordionOpen(3) ? 'max-h-full' : ''} duration-300`}>
                                <p className="p-4 text-sm">
                                    Se você está procurando maneiras de retribuir à comunidade
                                    e fazer uma diferença tangível na vida dos animais, nossa
                                    opção de adoção virtual oferece uma oportunidade gratificante.
                                    Ao se tornar um padrinho ou madrinha, você está contribuindo para
                                    o bem-estar de um cãozinho necessitado em sua comunidade.
                                </p>
                            </div>
                        </div>
                        
                        <div key={4} className="relative  w-full shadow-black shadow-md m-[15px]">
                            
                            <input
                                type="checkbox"
                                id={`products-checkbox4`}
                                className="absolute peer opacity-0"
                                checked={isAccordionOpen(4)}
                                onChange={() => toggleAccordion(4)}
                            />
                            
                            <label
                                htmlFor={`products-checkbox4`}
                                className="flex items-center font-bold tracking-[1px] px-4 h-[50px] text-[11px] w-full cursor-pointer"
                            >
                                Apoie o bem-estar animal: adote virtualmente!
                            </label>
                            
                            <div className="absolute top-0 mt-4 right-[10px] transform duration-200">
                                <ChevronDown className={`w-4 h-4 ${isAccordionOpen(4) ? 'rotate-180' : ''}`} onClick={() => toggleAccordion(4)} />
                            </div>
                            
                            <div className={`max-h-0 overflow-hidden ${isAccordionOpen(4) ? 'max-h-full' : ''} duration-300`}>
                                <p className="p-4 text-sm">
                                    Se você está procurando maneiras de apoiar uma causa
                                    sem fins lucrativos que se dedica ao bem-estar animal,
                                    nossa opção de adoção virtual é uma maneira significativa
                                    de contribuir. Ao apadrinhar um cãozinho, você está fornecendo
                                    apoio financeiro vital para nossa instituição, permitindo-nos
                                    continuar nosso importante trabalho em prol dos animais.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
