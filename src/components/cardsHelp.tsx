export default function CardsHelp() {
    const infoCards = [
        {
            text: "Se você deseja fazer a diferença na vida de um animal de estimação, mas tem uma agenda movimentada ou vive uma vida nômade, nossa opção de adoção virtual oferece flexibilidade e compromisso."
        },
        {
            text: "Se você está interessado em aprender mais sobre o cuidado e o bem-estar dos animais de estimação, nossa opção de adoção virtual pode proporcionar uma experiência educativa enriquecedora."
        },
        {
            text: "Se você está procurando maneiras de retribuir à comunidade e fazer uma diferença tangível na vida dos animais, nossa opção de adoção virtual oferece uma oportunidade gratificante. Ao se tornar um padrinho ou madrinha, você está contribuindo para o bem-estar de um cãozinho necessitado em sua comunidade."
        },
        {
            text: "Se você está procurando maneiras de apoiar uma causa sem fins lucrativos que se dedica ao bem-estar animal, nossa opção de adoção virtual é uma maneira significativa de contribuir. Ao apadrinhar um cãozinho, você está fornecendo apoio financeiro vital para nossa instituição, permitindo-nos continuar nosso importante trabalho em prol dos animais."
        }
    ]

    const cardStyle = "flex flex-col lg:w-[250px] lg:h-[280px] xl:w-[300px] xl:h-[340px] xl2:w-[330px] xl2:h-[380px] xl4:w-[370px] xl4:h-[420px] my-auto w-full";
    // const cardStyle = "flex flex-col lg:w-[250px] lg:h-[240px] xl:w-[300px] xl:h-[300px] xl2:w-[330px] xl2:h-[340px] xl4:w-[370px] xl4:h-[380px] my-auto w-full";
    const paragraphStyle = "lg:text-[12px] lg:font-normal xl:text-[15px] xl:font-medium xl2:text-[16px] xl2:font-medium xl4:text-[20px]";
    const containerStyle = "flex items-center justify-center gap-4 "
    const h1Style = "uppercase text-white font-bold text-[30px] xl2:text-[36px] xl4:text-[40px]"

    return (
        <div className="w-full">
            <div className="container w-full flex justify-center">
                <div className="flex items-center justify-center flex-col w-full  ">
                    <div className="flex items-center justify-center flex-col py-8 ">
                        <h1 className={h1Style}>Porque Ajudar?</h1>
                        <p className="font-normal xl2:font-medium xl4:font-semibold xl4:text-[20px]">Entenda sobre a adoção virtual e como ajudar mesmo de longe.</p>
                    </div>
                    <div className={containerStyle}>
                        {
                            infoCards.map((item) => (
                                <div  key={item.text} className={`${cardStyle} bg-[#4a128c] shadow-black shadow-lg`}>
                                    <div className="bg-[#ffb302] lg:w-4 lg:h-4 xl:w-5 xl:h-5 rounded-full flex items-start justify-start lg:mt-[12px] lg:ml-5 xl:mt-[18px] xl:ml-5"/>
                                    <div className="m-4">
                                        <p className={paragraphStyle}>{item.text}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}