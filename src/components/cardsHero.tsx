export default function CardsHero() {
    const infoCards = [
        {
           title: "Instruções",
           paragraph: "Como anunciar os animaizinhos da sua ong conosco!",
           buttonText: "Inscreva-se",
           buttonText2: "Saiba mais",
        },
        {
            title: "Parceiros",
            paragraph: "Quer ser nosso parceiro e patrocinar essa causa?",
            buttonText: "Inscreva-se",
            buttonText2: "Saiba mais",
        },
        {
            title: "Campanha",
            paragraph: "Aceitamos todo tipo de doação, seja você caridoso e ajude!",
            buttonText: "Inscreva-se",
            buttonText2: "Saiba mais",
        }
    ];

    const isMiddleCard = (index: number) => {
        return index === 1;
    };

    return (
        <div className="container ">
        <div className="">
        <div className="">
            <div className="flex flex-col lg:flex-row gap-4 justify-center ">
                {infoCards.map((item, index) => (
                    <div
                        key={index}
                        className={`flex flex-col gap-4 w-full lg:w-[300px] px-8 py-10 shadow-black shadow-xl ${
                            isMiddleCard(index) ? "bg-white" : "bg-[#ffb302]"
                        }`}
                    >
                        <h2 className={`uppercase font-extrabold text-xl ${isMiddleCard(index) ? "text-black" : "text-primaryColor"}`}>
                            {item.title}
                        </h2>
                        <p className={`font-medium ${isMiddleCard(index) ? "text-black" : "text-primaryColor"}`}>
                            {item.paragraph}
                        </p>
                        <div className="flex gap-4">
                            <button className={`uppercase font-semibold rounded-lg py-1 px-2 hover:bg-opacity-40 ${
                                isMiddleCard(index) ? "text-black bg-[#ffb302]" : "text-black bg-white"
                            }`}>
                                {item.buttonText}
                            </button>
                            <button className={`font-medium hover:text-lg ${isMiddleCard(index) ? "text-black" : "text-primaryColor"}`}>
                                {item.buttonText2}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </div>
      </div>
    );
}
