import Login from "@/components/login";
import NavBar from "@/components/menu";
export default function LoginPage(){
    return(
       <>
        <NavBar />
        <div className="mt-[120px]" >
        <Login />
        </div>
       </>
    )
}