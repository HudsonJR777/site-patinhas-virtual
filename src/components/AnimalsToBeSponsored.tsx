import Image from "next/image";

export default function AnimalsToBeSponsored() {
  const h1Style =
    "uppercase text-white font-bold text-[30px] xl2:text-[36px] xl4:text-[40px]";

  const animals = [
    "https://images.pexels.com/photos/208984/pexels-photo-208984.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/220938/pexels-photo-220938.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/46505/swiss-shepherd-dog-dog-pet-portrait-46505.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/691583/pexels-photo-691583.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/56733/pexels-photo-56733.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];

  return (
    <div className="bg-secondaryColor container py-[120px]">
      <div className="mb-40px" >
        <h1 className={`${h1Style} !text-primaryColor text-center w-full`}>Animais que precisam de um padrinho</h1>
        <p className="font-normal xl2:font-medium xl4:font-semibold text-center mx-auto text-primaryColor text-[20px]">
          Dôe você e seja um pai de pet virtual
        </p>
      </div>
      <div className="w-full flex flex-wrap gap-4 justify-center items-center mt-[60px]" >
      {animals.length > 0 &&
        animals.map((animal, index) => (
          <div key={index}>
            <Image 
            width={400}
            height={400}
            src={animal}
             alt="animal"
            className="w-[120px] md:w-[200px] md:h-[200px] h-[120px] object-cover"
            />
            {/* <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
              Quero apadrinhar
            </button> */}
          </div>
        ))}
      </div>
    </div>
  );
}
