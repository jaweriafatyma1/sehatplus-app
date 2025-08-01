import { Link } from "react-router-dom";
import logo from "../../public/logo.png";
import login from "../../public/login.png";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const inputs = form.querySelectorAll("input");

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

    navigate("/premium");
  };

  return (
  <div>
    <div className="h-24"></div>
    <div className="flex min-h-screen items-center justify-center font-poppins bg-gray-50 py-10">
      <div className="w-1/2 hidden md:block">
        <img
          src={login}
          alt="Login Illustration"
          className="ml-52 mt-10 h-120 w-90 object-cover"
        />
      </div>

      <div className="w-full max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
        <div className="flex justify-center mb-6">
          <img src={logo} className="w-32 h-auto rounded" alt="Logo" />
        </div>

        <form onSubmit={handleSubmit}>
          <h1 className="text-center text-2xl font-black mb-6">
            Welcome to Login Page
          </h1>

          <div className="space-y-4">
            <input
              required
              type="text"
              placeholder="Enter contact number"
              className="focus:outline-[#6C0B14] border h-10 w-full border-[#6C0B14] rounded px-3"
            />
            <input
              required
              type="password"
              placeholder="Enter password"
              className="focus:outline-[#6C0B14] border h-10 w-full border-[#6C0B14] rounded px-3"
            />
          </div>

          <div className="flex flex-col items-center justify-between gap-4 mt-6">
            <button
              type="submit"
              className="border hover:bg-[#58595B] border-gray-300 h-10 w-48 text-white rounded-full bg-[#6C0B14]"
            >
              Login
            </button>

            <div className="text-sm mt-2">
              <p>
                Don't have an account? {" "}
                <Link to="/register" className="text-blue-500 underline">
                  Go to Registration
                </Link>
              </p>
            </div>

            <div className="mt-8" />
          </div>
        </form>
      </div>
    </div>
   <Footer />
    </div>
  );
}
