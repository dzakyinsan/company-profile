import Image from "next/image";
import NoImage from "./../assets/broken-image.jpeg";
import { useState } from "react";

interface ProductProps {
  id: string;
  name: string;
  image: string;
}

const Product = ({ id, name, image }: ProductProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <article className="group card-bg border-[1px] border-[#333] rounded-xl shadow-md h-40 overflow-hidden hover:cursor-pointer">
      <div className="overflow-hidden p-2 relative">
        <div className="absolute top-4 left-5 z-10 text-xs px-[4px] py-[2px] opacity-50 rounded-sm bg-gray-600 text-white">
          {id}
        </div>
        {image ? (
          <img
            src={image}
            alt={name}
            className="h-10 w-full object-cover grayscale-[90%] group-hover:h-32 group-hover:grayscale-0 transition-all duration-3000 rounded-lg"
            onClick={() => setIsModalOpen(true)}
          />
        ) : (
          <Image
            src={NoImage}
            height={100}
            width={100}
            alt="no-image"
            className="h-10 w-full object-cover grayscale-[90%] group-hover:h-32 group-hover:grayscale-0 transition-all duration-3000 rounded-lg"
          />
        )}

        <span className="hidden group-hover:block text-[10px] font-light text-slate-500 pl-1 pt-1 mb-1">
          {"see more ->"}
        </span>
      </div>
      <div className="px-4 group-hover:h-0 transition-all duration-300 flex flex-col justify-between h-[55%]">
        <div>
          <h2 className="text-md font-medium pb-1 truncate">{name}</h2>
          <p className="text-[10px] font-light text-[#888]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
          </p>
        </div>
        <div className="flex justify-start items-center text-[8px] leading-none gap-1">
          <span className="text-white px-2 py-1 rounded-xl bg-green-900">
            category 1
          </span>
          <span className="text-white px-2 py-1 rounded-xl bg-sky-800">
            category 2
          </span>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-30" onClick={() => setIsModalOpen(false)}>
          <div className="bg-white rounded shadow-lg max-w-lg mx-auto relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="text-gray-500 hover:text-gray-800 absolute top-0 right-0 mt-2 mr-2"
            >
              &times;
            </button>
            <img
              src={image}
              alt={image}
              className="max-w-full h-auto"
            />
          </div>
        </div>
      )}
    </article>
  );
};

export default Product;
