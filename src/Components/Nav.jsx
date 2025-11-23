import React from 'react'
import { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <div className="nav container  mx-auto p-6">
      <div className="flex items-center justify-between ">
        <img src="/Images/logo-light.png" alt="tailwind logo" width="200px" />

        <div className="md:flex items-center space-x-6 hidden ">
          <a href="#" className="text-slate-700 hover:text-yellow-500">
            Prtfolio
          </a>
          <a href="#" className="text-slate-700 hover:text-yellow-500">
            About
          </a>
          <a href="#" className="text-slate-700 hover:text-yellow-500">
            Contact
          </a>
          <a href="#" className="text-slate-700 hover:text-yellow-500">
            Social
          </a>
          <a
            href="#"
            className="bg-orange-500 hover:bg-slate-900 text-white py-1 px-3 rounded-full"
          >
            Call Me
          </a>
        </div>
        <div className='relative md:hidden'>
          <button className="md:hidden" onClick={() => {setOpen(!open)}}>
            <RxHamburgerMenu className="text-2xl" />
          </button>
          <div className={`${open?"absolute":"hidden"} md:hidden absolute flex flex-col bg-orange-400 text-white rounded-3xl py-3 w-70 px-3
          right-1/2 top-8 gap-2
          `}>
            <a href="#" className=" hover:text-yellow-500">
              Prtfolio
            </a>
            <a href="#" className=" hover:text-yellow-500">
              About
            </a>
            <a href="#" className=" hover:text-yellow-500">
              Contact
            </a>
            <a href="#" className=" hover:text-yellow-500">
              Social
            </a>
            <button
              href="#"
              className="bg-slate-800  text-white py-1 px-10 rounded-full w-full"
            >
              Call Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
