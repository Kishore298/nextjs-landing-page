import React from 'react';

const ImageGrid = () => {
  return (
    <div className="w-4/5 mx-auto">
      {/* Header Section */}
      <div className="text-center mb-8">
        <p className="text-xl font-semibold">Our Blog</p>
        <h2 className="text-3xl font-bold mt-2">Latest News</h2>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-4">
        {/* First Row */}
        <div className="flex flex-col gap-x-4 gap-y-4">
          <div className="relative rounded-lg overflow-hidden">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Iye0e8r8fgCXS3FGekVGxUmtfFjz8h-TbA&s"
              alt="Image 1"
              className="w-80 h-[400px] rounded-lg"
            />
            <p className="absolute top-0 left-0 bg-blue-900 text-white px-2 py-1">20 APR</p>
            <p className="absolute top-1/2 left-1/2 text-white font-bold transform -translate-x-1/2 -translate-y-1/2 text-center">The Covid-19 Epidemic in 2022 is back</p>
          </div>
          <div className="relative rounded-lg overflow-hidden">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ41F_oaVfoFYiIzjWtf6Zni9ByjvP8SzvMVQ&usqp=CAU"
              alt="Image 5"
              className="w-80 h-[200px] rounded-lg"
            />
            <p className="absolute top-0 left-0 bg-blue-900 text-white px-2 py-1">20 APR</p>
            <p className="absolute top-1/2 left-1/2 text-white font-bold transform -translate-x-1/2 -translate-y-1/2 text-center">The Covid-19 Epidemic in 2023 is back</p>
          </div>
        </div>

        {/* Second Row */}
        <div className="flex flex-col gap-x-4 gap-y-4">
          <div className="relative rounded-lg overflow-hidden">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Iye0e8r8fgCXS3FGekVGxUmtfFjz8h-TbA&s"
              alt="Image 2"
              className="w-80 h-[200px] rounded-lg"
            />
            <p className="absolute top-0 left-0 bg-blue-900 text-white px-2 py-1">20 APR</p>
            <p className="absolute top-1/2 left-1/2 text-white font-bold transform -translate-x-1/2 -translate-y-1/2 text-center">The Covid-19 Epidemic in 2022 is back</p>
          </div>
          <div className="relative rounded-lg overflow-hidden">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ41F_oaVfoFYiIzjWtf6Zni9ByjvP8SzvMVQ&usqp=CAU"
              alt="Image 6"
              className="w-80 h-[400px] rounded-lg"
            />
            <p className="absolute top-0 left-0 bg-blue-900 text-white px-2 py-1">20 APR</p>
            <p className="absolute top-1/2 left-1/2 text-white font-bold transform -translate-x-1/2 -translate-y-1/2 text-center">The Covid-19 Epidemic in 2023 is back</p>
          </div>
        </div>

        {/* Third Row */}
        <div className="flex flex-col gap-x-4 gap-y-4">
          <div className="relative rounded-lg overflow-hidden">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Iye0e8r8fgCXS3FGekVGxUmtfFjz8h-TbA&s"
              alt="Image 3"
              className="w-80 h-[400px] rounded-lg"
            />
            <p className="absolute top-0 left-0 bg-blue-900 text-white px-2 py-1">20 APR</p>
            <p className="absolute top-1/2 left-1/2 text-white font-bold transform -translate-x-1/2 -translate-y-1/2 text-center">The Covid-19 Epidemic in 2022 is back</p>
          </div>
          <div className="relative rounded-lg overflow-hidden">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ41F_oaVfoFYiIzjWtf6Zni9ByjvP8SzvMVQ&usqp=CAU"
              alt="Image 7"
              className="w-80 h-[200px] rounded-lg"
            />
            <p className="absolute top-0 left-0 bg-blue-900 text-white px-2 py-1">20 APR</p>
            <p className="absolute top-1/2 left-1/2 text-white font-bold transform -translate-x-1/2 -translate-y-1/2 text-center">The Covid-19 Epidemic in 2023 is back</p>
          </div>
        </div>

        {/* Fourth Row */}
        <div className="flex flex-col gap-x-4 gap-y-4">
          <div className="relative rounded-lg overflow-hidden">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Iye0e8r8fgCXS3FGekVGxUmtfFjz8h-TbA&s"
              alt="Image 4"
              className="w-80 h-[200px] rounded-lg"
            />
            <p className="absolute top-0 left-0 bg-blue-900 text-white px-2 py-1">20 APR</p>
            <p className="absolute top-1/2 left-1/2 text-white font-bold transform -translate-x-1/2 -translate-y-1/2 text-center">The Covid-19 Epidemic in 2022 is back</p>
          </div>
          <div className="relative rounded-lg overflow-hidden">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ41F_oaVfoFYiIzjWtf6Zni9ByjvP8SzvMVQ&usqp=CAU"
              alt="Image 8"
              className="w-80 h-[400px] rounded-lg"
            />
            <p className="absolute top-0 left-0 bg-blue-900 text-white px-2 py-1">20 APR</p>
            <p className="absolute top-1/2 left-1/2 text-white font-bold transform -translate-x-1/2 -translate-y-1/2 text-center">The Covid-19 Epidemic in 2023 is back</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGrid;
