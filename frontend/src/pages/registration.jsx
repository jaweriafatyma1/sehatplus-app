import {Link} from "react-router-dom";
import logo from  "../../public/logo.png";
import login from  "../../public/login.png";
// import login from"../assets/login.png";
import { useNavigate } from "react-router-dom";
export default function Registration(){
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
    navigate("/login");
  };

  
    return(
      <div className="flex ">
         <div className="w-1/2 hidden md:block">
        <img
          src= {login}
          alt="Login Illustration"
          className="ml-52 mt-10 h-120 w-90  object-cover"
        />
      </div>
     
      
        <div  className="  font-poppins ">
         <div className=" w-92 h-130 m-auto ">
         {/* <div className="bg-rose-100 w-79 h-40 m-auto p-auto rounded-b-full"> */}
             {/* <div className="bg-gradient-to-r from-rose-300 w-60 h-30 m-auto p-auto rounded-b-full"> */}
         
         
         <div className="flex justify-center"><img src={logo}  className="w-50 h-auto rounded"/></div>
        {/* </div> */}
        {/* </div> */}
        
         <form onSubmit={handleSubmit}>
            <div >
         <h1 className="text-center text-2xl font-black" >Welcome to Registration Page</h1>
         <div className="input m-3 ml-10 ">
            <input type="text" placeholder="enter name" className=" focus:outline-[#6C0B14] border h-8 w-67 border-[#6C0B14] rounded px-3 "/>
         </div>
         <div className="input m-3 ml-10">
            <input type="digits" placeholder="enter contact number" className="focus:outline-[#6C0B14] border h-8 w-67 border-[#6C0B14] rounded px-3"/>
         </div>
         <div className="input m-3 ml-10">
            <input type="string" placeholder="enter CNIC" className="focus:outline-[#6C0B14] border w-67 h-8 border-[#6C0B14] rounded px-3"/>
         </div>
         <div className="input m-3 ml-10">
            <input type="email" placeholder="enter email" className="focus:outline-[#6C0B14] border w-67 h-8 border-[#6C0B14] rounded px-3 "/>
         </div>
         <div className="input m-3 ml-10">
            <input type="password" placeholder="enter password" className="focus:outline-[#6C0B14] border w-67 h-8 border-[#6C0B14] rounded px-3"/>
         </div>
         </div>
         <div className="items-center justify-between pl-8 gap-4">
         
         
         <div className="text-center text-sm mr-10"><p>Have accout!{""}
          <Link to="/login" className="text-blue-500 underline">
        Go to Sign in
      </Link></p></div>
      <div>
        
          <button type="submit" className="border ml-10 hover:bg-[#58595B] border-gray-300 h-10 w-50 text-white rounded-full bg-[#6C0B14]">sign up</button>
      </div>
         
      

         
         </div>
         </form>
        </div>
        
        </div> 
       
       </div>

    );
}