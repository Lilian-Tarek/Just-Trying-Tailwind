import React from 'react'

export default function Hero() {
  return (
    <div
      className="container mt-10 mx-auto flex flex-col-reverse md:flex-row gap-5 ">
      <div className="w-full md:w-1/2 text-center md:text-start">
        <h1 className="font-bold text-3xl md:text-5xl text-slate-900">
          Lorem ipsum dolor sit met
        </h1>
        <p className='my-5'>
          Lorem Lorem ipsum dolor sit metLorem ipsum dolor sit metLorem ipsum
          dolor sit met Lorem ipsum dolor sit met Lorem ipsum dolor sit met
          Lorem ipsum dolor sit met
        </p>
        <a
          href="#"
          className="bg-orange-500 hover:bg-slate-900 text-white py-1 px-3 rounded-full"
        >
          Call Me
        </a>
      </div>
      <div className="w-full md:w-1/2 ">
        <img
          src="/Images/undraw_learning_sketching_nd4f.svg"
          alt="main image"
        />
      </div>
    </div>
  );
}
