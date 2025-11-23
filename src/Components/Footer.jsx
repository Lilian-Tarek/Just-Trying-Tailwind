import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
export default function Footer() {
  return (
    <div className="bg-slate-900 ">
      <div className="flex container gap-5 text-white py-10  flex-col-reverse items-center md:flex-row  md:items-start">
        <div className="flex items-center flex-col  justify-center p-3">
          <div className='w-full'>
            <img alt="logo" src="/Images/logo-dark.png" className="h-16 w-full object-contain" />
          </div>
          <div className="flex icons gap-3 text-2xl my-5">
            <FaFacebookF />
            <FaFacebookMessenger />
            <FaTwitter />
            <FaWhatsapp />
          </div>
        </div>
        <div className="flex flex-col gap-5 font-medium items-center my-5 ">
          <div className="hover:text-slate-300">Home</div>
          <div className="hover:text-slate-300">About</div>
          <div className="hover:text-slate-300">Contact</div>
        </div>
        <div className="flex flex-col gap-5 font-medium items-center my-5 ">
          <div className="hover:text-slate-300">Home</div>
          <div className="hover:text-slate-300">About</div>
          <div className="hover:text-slate-300">Contact</div>
        </div>
        <div className="flex w-full my-7 text-center">
          <form className="w-full">
            <input
              placeholder="Subscribe to Newsletter"
              className="flex-1 w-full rounded-full bg-white border-none h-10 placeholder:text-slate-800 ps-2"
            />
            <button
              href="#"
              className="bg-orange-500 hover:bg-slate-900 text-white py-1 px-3 rounded-full my-5"
            >
              Call Me
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
