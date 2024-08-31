import { Button } from "@/components/ui/button";
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

// Image import
import GoogleIcon from '@/public/assets/images/google.png'
import LoginImage from '@/public/assets/images/login-image.png'

import Image from "next/image";
import Link from "next/link";


export default function page() {
  return (
    <main className="w-full h-screen grid sm:grid-cols-2 text-black">
      <div className="h-full p-10 flex flex-col items-center ">
        <h1 className="text-4xl font-semibold">Sign up</h1>
        <p className="text-center mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.?</p>
        <form className="sm:w-[70%] flex flex-col gap-4 mt-5">
          <div className="bg-secondary w-full h-[45px] rounded-md flex items-center gap-2 px-2">
            <FaUser className="text-main" />
            <input 
              type="text"
              placeholder="Username"
              className="bg-transparent outline-none w-full text-sm"
            />
          </div>
          <div className="bg-secondary w-full h-[45px] rounded-md flex items-center gap-2 px-2">
            <MdEmail className="text-main" />
            <input 
              type="email"
              placeholder="Email"
              className="bg-transparent outline-none w-full text-sm"
            />
          </div>
          <div className="bg-secondary w-full h-[45px] rounded-md flex items-center gap-2 px-2">
            <FaLock className="text-main" />
            <input 
              type="password"
              placeholder="Password"
              className="bg-transparent outline-none w-full text-sm"
            />
          </div>
          <div className="bg-secondary w-full h-[45px] rounded-md flex items-center gap-2 px-2">
            <FaLock className="text-main" />
            <input 
              type="password"
              placeholder="Confirm password"
              className="bg-transparent outline-none w-full text-sm"
            />
          </div>
            <Button className="bg-main w-full">Login</Button>
          <div className="relative w-full h-[1px] bg-black mt-6">
            <p className="absolute top-0 translate-y-[-50%] left-[50%] translate-x-[-50%] bg-white">Or</p>
          </div>
          <div className="w-full border h-[48px] rounded-md mt-6 flex items-center gap-3 justify-center cursor-pointer">
            <Image src={GoogleIcon} alt='google-icon' />
            <p>Sign up with google</p>
          </div>
          <p className="mt-4 text-sm text-center">Already have an account? <Link href='/' className="text-main">Sign In</Link></p>
        </form>
      </div>
      <div className="w-full h-full bg-secondary -order-1 sm:order-2">
        <Image src={LoginImage} alt='login-image' />
      </div>
    </main>
  );
}
