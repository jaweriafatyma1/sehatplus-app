import {Link} from "react-router-dom";
import logo from  "../../public/logo.png";
// import login1 from  "../../public/images/login1.jpg";
// import login from"../assets/login.png";
export default function Registration(){
    return(
      <div className=" bg-rose-100">
         {/* <div className="w-1/2 hidden md:block">
        <img
          src= {login1}
          alt="Login Illustration"
          className="ml-52 mt-10 h-130 w-96  object-cover"
        />
      </div> */}
     
      
        <div  className="  font-poppins ">
         <div className=" w-92 h-130 m-auto mt-10 ">
         {/* <div className="bg-rose-100 w-79 h-40 m-auto p-auto rounded-b-full"> */}
             {/* <div className="bg-gradient-to-r from-rose-300 w-60 h-30 m-auto p-auto rounded-b-full"> */}
         
         
         <div className="flex justify-center"><img src={logo}  className="w-50 h-auto rounded"/></div>
        {/* </div> */}
        {/* </div> */}
        <div >
         <h1 className="text-center text-2xl font-black" >Welcome to Registration Page</h1>
         <div className="input m-3 ml-10 ">
            <input type="text" placeholder="enter name" className="focus:outline-[#6C0B14] border h-8 w-67 border-[#6C0B14] rounded px-3 "/>
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
         <div className="flex items-center justify-between pl-6  gap-4">
         <button className="border border-gray-300 h-8 w-35 text-white rounded-full  bg-[#6C0B14]">Sign up</button>
         
         
         <div><p>
          <Link to="/login" >
        <button className="border  border-gray-300 mr-4 h-8 w-35 text-[#6C0B14] rounded-full bg-white">Login</button>
      </Link></p></div>

         </div>
        </div>
        </div> 
       
       </div>

    );
}