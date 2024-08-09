import {useNavigate } from "react-router-dom";
import AppBar from "../components/AppBar";
import Footer from "../components/Footer";

function Signup() {
    const Navigate=useNavigate();
    const token = localStorage.getItem('token')
    if(token){
        Navigate('/')
    }
    if(!token){
      Navigate('/login')
  }
  const handleGoogleLogin = () => {
    // Redirect to Google login URL
    window.location.href = "https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=https://reachinbox-vert.vercel.app/";
  };

    return(
        <div>
            <AppBar/>
        <div className="bg-black text-white w-screen h-screen flex flex-col justify-center items-center">
             
  <div className="bg-gray-800 px-8 py-10 space-y-10 rounded-md">
    <h1 className="text-lg font-bold text-center">Sign Up</h1>

    <div className="space-y-5">
      <div className="flex flex-col space-y-2">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" className="rounded-md p-2 text-black" />
      </div>
      <div className="flex flex-col space-y-2">
        <label htmlFor="pass">Password</label>
        <input type="password" id="pass" className="rounded-md p-2 text-black" />
      </div>
      <div className="flex flex-col space-y-2">
        <label htmlFor="repass">Re-Enter Password</label>
        <input type="password" id="repass" className="rounded-md p-2 text-black" />
      </div>
    </div>

    <div className="text-center">
      <button
      onClick={handleGoogleLogin}
        className="bg-gradient-to-r from-[#4B63DD] to-[#0524BFFC] mx-16 mt-5 px-6 text-sm py-3 rounded-md cursor-pointer"
      >
        Sign Up
      </button>
    </div>
  </div>
  </div>
  <Footer/>
  </div>


    );
}
export default Signup;
