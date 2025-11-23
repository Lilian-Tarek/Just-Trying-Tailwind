import React from 'react'

export default function Test({text}) {
  return (
    <div className="bg-slate-200 md:w-1/3 flex flex-col p-6 space-y-2 rounded-lg border border-slate-300 items-center w-full">
      <img src={text} className='w-16 rounded-full h-16 -mt-14'/>
      <h5 className='font-bold text-2xl mt-0'>User</h5>
      <p>
        Lorem ipsum rem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book. It has survived not only

      </p>
    </div>
  );
}
