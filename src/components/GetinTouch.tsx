import React from "react";

const GetinTouch = () => {
  return (
    <div className="flex px-10 lg:px-20 border-y-[#333] border-[1px] border-x-0 mb-20 animate-fade-in">
      <div className="flex-auto flex flex-col items-center sm:items-start py-16">
        <div className="flex gap-2 items-center justify-start h-20 flex-col sm:flex-row sm:mb-5">
          <h1 className="text-2xl font-bold text-center sm:text-start">
            Get started in seconds
          </h1>
          <p className="text-md text-[#888] text-center">Know us more</p>
        </div>
        <div className="flex flex-wrap gap-2 mb-8 justify-center sm:justify-start mt-10 sm:mt-1">
          <span className="bg-[#9162c025] text-purple-700 px-3 text-sm rounded-xl">
            Starter
          </span>
          <span className="bg-[#449d5d25] text-green-700 px-3 text-sm rounded-xl">
            Ecommerce
          </span>
          <span className="bg-[#d1772425] text-orange-700 px-3 text-sm rounded-xl">
            Blog
          </span>
          <span className="bg-[#3b88e925] text-blue-700 px-3 text-sm rounded-xl">
            AI
          </span>
          <span className="bg-[#9162c025] text-purple-700 px-3 text-sm rounded-xl">
            Edge Functions
          </span>
          <span className="bg-[#449d5d25] text-green-700 px-3 text-sm rounded-xl">
            Edge Config
          </span>
        </div>
        <p className="max-w-2xl mb-8 text-[#888] text-center sm:text-start">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto
          cupiditate officiis quae? Eaque possimus iusto voluptatum soluta
          corrupti maiores voluptas. Animi velit ex voluptas libero voluptatem
          atque officia temporibus totam!
        </p>
        <button className="bg-white text-black px-6 py-3 rounded-lg">
          Dive into the real world &rarr;
        </button>
      </div>
      <div className="relative hidden sm:flex justify-center items-center">
        <div className="absolute transform rotate-12">
          <img
            src="https://via.placeholder.com/200"
            alt="Next.js Commerce"
            className="shadow-lg rounded-lg"
          />
        </div>
        <div className="absolute transform rotate-6">
          <img
            src="https://via.placeholder.com/200"
            alt="Image Gallery"
            className="shadow-lg rounded-lg"
          />
        </div>
        <div className="relative">
          <img
            src="https://via.placeholder.com/200"
            alt="Next.js Boilerplate"
            className="shadow-lg rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default GetinTouch;
