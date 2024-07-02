import Image from "next/image";
import ImgBg from "../../components/registration/assets/baseee.png";
import RegistrationPeople from "@/components/registration/registrationPeople";
import NavBar from "@/components/menu";

export default function CadastroPage(){
    return (
  <>
      <NavBar />
        <div
        //  style={{ backgroundImage: `url(${ImgBg.src}) ` }}
        className="bg-cover bg-center w-full  bg-no-repeat bg-secondaryColor relative mt-[110px] "
      >
        <Image src={ImgBg} alt="cadastro" className="max-lg:hidden" />
        <div className="container lg:absolute top-0 right-0">
          <RegistrationPeople />
        </div>
      </div>
  </>
    )
}