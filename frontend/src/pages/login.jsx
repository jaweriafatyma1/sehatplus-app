
import logo from "../../public/logo.png";
import login from "../../public/login.png";
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Login(){
   const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent auto reload
    const form = e.target;
    const inputs = form.querySelectorAll("input");

    // Optional: you can check if all fields are filled
    let allFilled = true;
    inputs.forEach((input) => {
      if (!input.value.trim()) {
        allFilled = false;
        input.classList.add("border-red-500");
      } else {
        input.classList.remove("border-red-500");
      }
    });

    if (!allFilled) {
      alert("Please fill out all required fields.");
      return;
    }

    // ✅ form is valid, now navigate
    navigate("/premium");
  };
    return(
<div className=" flex ">
         <div className="w-1/2 hidden md:block">
        <img
          src= {login}
          alt="Login Illustration"
          className="ml-52 mt-10 h-120 w-90  object-cover"
        />
      </div>
     <form onSubmit={handleSubmit}>
       
        <div  className=" font-poppins ">
         <div className="w-92 h-130 m-auto mt-10 ">
         {/* <div className="bg-rose-100 w-79 h-40 m-auto p-auto rounded-b-full">
             <div className="bg-gradient-to-r from-rose-300 w-60 h-30 m-auto p-auto rounded-b-full"> */}
         
         
         <div className="flex justify-center"><img src={logo}  className="w-50 h-auto rounded"/></div>
        {/* </div>
        </div> */}
        <div className="p-5">
         <h1 className="text-center text-20xl font-black" >Welcome to Login Page</h1>
        
         <div className="input m-6">
            <input required type="digits" placeholder="enter contact number" className="focus:outline-[#6C0B14] border h-8 w-67 border-[#6C0B14] rounded px-3"/>
         </div>
        
         <div className="input m-6 ">
            <input required type="password" placeholder="enter password" className="focus:outline-[#6C0B14] border w-67 h-8 border-[#6C0B14] rounded px-3"/>
         </div>

         </div>
         <div className="items-center justify-between pl-8  gap-4">
          <div><p>
          <Link to="/premium">
          <button className="border ml-10 border-gray-300 h-10 w-50 text-white rounded-full  bg-[#6C0B14]">Login</button>
      </Link></p></div>
         </div>
         <div className="text-center mt-4"><p>don't have accout!{""}
          <Link to="/register" className="text-blue-500 underline">
        Go to Registration
      </Link></p></div>
        </div>
        </div>
        </form> 
        </div>
    );
}

