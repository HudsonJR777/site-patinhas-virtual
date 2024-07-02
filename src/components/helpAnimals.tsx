import { CircleCheck } from "lucide-react";

export default function HelpAnimals() {
     const infoPropositos = [
        {
            text: "O propósito de uma organização define sua razão de existir além do lucro, orientando suas ações e impacto na sociedade. É o núcleo que guia decisões estratégicas, cultiva a cultura corporativa e inspira colaboradores e stakeholders. Um propósito claro alinha todos os aspectos da empresa em direção a objetivos compartilhados, impulsionando inovação e sustentabilidade. Ele não apenas define metas, mas também promove conexões autênticas com clientes e comunidades, refletindo valores essenciais e contribuindo positivamente para um mundo melhor."
        },
        {
            text: "O propósito de uma organização define sua razão de existir além do lucro, orientando suas ações e impacto na sociedade. É o núcleo que guia decisões estratégicas, cultiva a cultura corporativa e inspira colaboradores e stakeholders. Um propósito claro alinha todos os aspectos da empresa em direção a objetivos compartilhados, impulsionando inovação e sustentabilidade. Ele não apenas define metas, mas também promove conexões autênticas com clientes e comunidades, refletindo valores essenciais e contribuindo positivamente para um mundo melhor."
         },
        
        {
            text: "O propósito de uma organização define sua razão de existir além do lucro, orientando suas ações e impacto na sociedade. É o núcleo que guia decisões estratégicas, cultiva a cultura corporativa e inspira colaboradores e stakeholders. Um propósito claro alinha todos os aspectos da empresa em direção a objetivos compartilhados, impulsionando inovação e sustentabilidade. Ele não apenas define metas, mas também promove conexões autênticas com clientes e comunidades, refletindo valores essenciais e contribuindo positivamente para um mundo melhor."
         },
        
        {
            text: "O propósito de uma organização define sua razão de existir além do lucro, orientando suas ações e impacto na sociedade. É o núcleo que guia decisões estratégicas, cultiva a cultura corporativa e inspira colaboradores e stakeholders. Um propósito claro alinha todos os aspectos da empresa em direção a objetivos compartilhados, impulsionando inovação e sustentabilidade. Ele não apenas define metas, mas também promove conexões autênticas com clientes e comunidades, refletindo valores essenciais e contribuindo positivamente para um mundo melhor."
        },
      
    ];

      const h1Style = "uppercase text-white font-bold text-[30px] xl2:text-[36px] xl4:text-[40px]"

    return (
        <div className="container ">
            <div className="">
                 <div className="w-full">
                    {/* <div className="flex flex-col">
                        <h1 className="uppercase text-[30px] font-semibold lg:text-[60px] lg:font-bold xl2:text-[70px] xl4:text-[75px]">Propósito</h1>
                         <p className="lg:text-[20px] xl2:text-[30px] xl4:text-[35px]">Perspectivas sobre nossa empresa e seu propósito de criação.</p>
                     </div> */}
                       <div className="flex items-center justify-center flex-col py-8 ">
                        <h1 className={h1Style}>Propósito</h1>
                        <p className="font-normal xl2:font-medium xl4:font-semibold text-center xl4:text-[20px]">Perspectivas sobre nossa empresa e seu propósito de criação.</p>
                    </div>
                    <div className="pt-[20px] flex flex-col gap-4 lg:grid lg:grid-cols-2 lg:gap-14 ">
                         {infoPropositos.map((item, index) => (
                             <div key={index} className="flex gap-4">
                                 <div className=" flex px-3 py-3 mx-auto rounded-xl ">
                                     <div className="flex px-1 lg:pb-4">
                                         <div className="bg-[#ffb302] w-4 h-4 lg:w-4 lg:h-4 xl:w-5 xl:h-5 rounded-full flex items-end justify-end lg:mt-[12px] lg:ml-5 xl:mt-[18px] xl:ml-5" />
                                     </div>
                                     <p className="ml-4 text-[11px] lg:px-6 lg:py-4 lg:text-[18px] xl4:text-[20px]">{item.text}</p>
                                 </div>
                             </div>
                         ))}
                     </div>
                 </div>
             </div>
         </div>
    );
}
