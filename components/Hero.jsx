import React from 'react'; 
import Image from 'next/image';

export default function VitaminsSection() {
  return (
    <div className="flex flex-col justify-center items-center bg-blue-100 w-full  lg:w-[95%] mx-auto p-6 mb-4 rounded-lg">
      <div className="flex justify-center items-center mb-6 lg:mb-12">
        <h1 className="text-slate-900 text-4xl lg:text-6xl font-bold">Essential Vitamins</h1>
      </div>
      <div className="flex flex-col lg:flex-row justify-between gap-6 w-[100%] lg:w-[80%]">
        
        {/* First Section */}
        <div className="p-6 rounded-lg flex flex-col w-full lg:w-1/3 lg:mt-24">
          <p className="text-xl lg:text-xl text-center lg:text-start font-medium text-gray-600 mb-4">Online Medical Supplies</p>
          <h2 className="text-2xl text-center lg:text-start lg:text-2xl font-bold text-slate-900 mb-5 lg:w-72">
            Get your vitamins & minerals
          </h2>
          <button className="bg-slate-900 text-white text-xl py-2 px-4 w-64 rounded-full flex items-center justify-center gap-2 ml-4 lg:ml-0">
          Explore
            <span className="bg-light-blue-100 p-2 rounded-full">🔍</span>
          </button>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/3 flex items-center justify-center">
          <Image
            src="/heroimg.webp"
            alt="Vitamins"
            width={600} 
            height={600} 
            className="rounded-lg"
          />
        </div>

        {/* Third Section */}
        <div className="p-6 rounded-lg w-full lg:w-1/3 lg:mt-12">
          <div className="flex items-start gap-4 mb-8">
            <span className="text-4xl bg-slate-900 text-white p-2 rounded-full">💊</span>
            <div>
              <h3 className="text-xl font-bold text-slate-900 w-48">Vitamin</h3>
              <p className="text-gray-600">
                Increased minerals and vitamins in your diet.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 mb-8">
            <span className="text-4xl bg-slate-900 text-white p-2 rounded-full">⚖️</span>
            <div>
              <h3 className="text-xl font-bold text-slate-900 w-48">Weight Loss</h3>
              <p className="text-gray-600">
                Find scientifically proven solutions.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 ">
            <span className="text-4xl bg-slate-900 text-white p-2 rounded-full">🥗</span>
            <div>
              <h3 className="text-xl font-bold text-slate-900 w-48">Functional Foods</h3>
              <p className="text-gray-600 text-md">
                From protein powders to baby formula.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
