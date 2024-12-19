import React from 'react';
import { FaFlask, FaLeaf, FaRegFlag, FaShippingFast, FaRecycle } from 'react-icons/fa';

export default function FeaturesSection() {
  return (
    <div className="w-[90%] lg:w-[70%] mx-auto bg-slate-900 p-8 rounded-2xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Feature 1 */}
      <div className="flex flex-col items-center text-center text-white">
        <span className="bg-white text-slate-900 text-5xl p-6 rounded-full mb-4">
          <FaFlask />
        </span> 
        <h2 className="text-2xl font-bold mb-2">Clinically Studied</h2>
        <p className='text-sm w-56'>All products that we have gone through lab and safety tests.</p>
        <hr className="lg:hidden w-[80%] mx-auto mt-8 border-t-1 border-slate-600" />
      </div>

      {/* Feature 2 */}
      <div className="flex flex-col items-center text-center text-white">
        <span className="bg-white text-slate-900 text-5xl p-6 rounded-full mb-4">
          <FaLeaf />
        </span> 
        <h2 className="text-2xl font-bold mb-2">Vegetarian Friendly</h2>
        <p className='text-sm w-56'>We have a wide range of vegetarian products that meet your needs.</p>
        <hr className="lg:hidden w-[80%] mx-auto mt-8 border-t-1 border-slate-600" />
      </div>

      {/* Feature 3 */}
      <div className="flex flex-col items-center text-center text-white">
        <span className="bg-white text-slate-900 text-5xl p-6 rounded-full mb-4">
          <FaRegFlag />
        </span> 
        <h2 className="text-2xl font-bold mb-2">Made in India</h2>
        <p className='text-sm w-56'>Shop local and explore health products that are made in India.</p>
        <hr className="lg:hidden w-[80%] mx-auto mt-8 border-t-1 border-slate-600" />
      </div>

      {/* Feature 4 */}
      <div className="flex flex-col items-center text-center text-white">
        <span className="bg-white text-slate-900 text-5xl p-6 rounded-full mb-4">
          <FaShippingFast />
        </span>
        <h2 className="text-2xl font-bold mb-2">Free Shipping</h2>
        <p className='text-sm w-56'>We deliver to your door with no extra costs for your orders.</p>
        <hr className="lg:hidden w-[80%] mx-auto mt-8 border-t-1 border-slate-600" />
      </div>

      {/* Feature 5 */}
      <div className="flex flex-col items-center text-center text-white">
        <span className="bg-white text-slate-900 text-5xl p-6 rounded-full mb-4">
          <FaRecycle />
        </span>
        <h2 className="text-2xl font-bold mb-2">No Risk</h2>
        <p className='text-sm w-56'>We ensure that all products are safe and within their due date.</p>
        <hr className="lg:hidden w-[80%] mx-auto mt-8 border-t-1 border-slate-600" />
      </div>

      {/* Feature 6 */}
      <div className="flex flex-col items-center text-center text-white ">
        <span className="bg-white text-slate-900 text-5xl p-6 rounded-full mb-4">
          <FaLeaf />
        </span> 
        <h2 className="text-2xl font-bold mb-2">GMO Free</h2>
        <p className='text-sm w-56'>Natural, no modified products and derivatives for those who need it.</p>
      </div>
    </div>
  );
}

