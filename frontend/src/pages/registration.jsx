import {Link} from "react-router-dom";
import logo from  "../../public/logo.png";
import login from  "../../public/login.png";
// import login from"../assets/login.png";
export default function Registration(){
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
         
         
         
         <div><p>
          <Link to="/login" >
          <button className="border border-gray-300 h-10 w-50 ml-9 t-white rounded-full  bg-[#6C0B14]">Sign up</button>
      </Link></p></div>
      <div className="text-center mr-10"><p>Have accout!{""}
          <Link to="/login" className="text-blue-500 underline">
        Go to Sign in
      </Link></p></div>


         </div>
        </div>
        </div> 
       
       </div>

    );
}