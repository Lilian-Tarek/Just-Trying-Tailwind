import React from 'react'
import Test from './Test';
export default function Testimonials() {
   const images = [
     "/Images/review-2.jpg",
     "/Images/review-3.jpg",
     "/Images/review-4.jpg"
   ];
  return (
    <div className="my-15 ">
      <h1 className="text-center m-auto my-15 text-5xl font-bold text-slate-900">
        Testimonials
      </h1>
      <div className="flex gap-10 flex-col md:flex-row container">
        {images.map((e) => (
          <Test text={e} />
        ))}
      </div>
    </div>
  );
}
