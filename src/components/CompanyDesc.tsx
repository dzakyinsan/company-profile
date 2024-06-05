'use client';

import Image from "next/image";
import DownArrow from './../assets/down-arrow.png';
import aa from './../assets/aa.gif';

const CompanyDescription = ({handleButtonClick}: any) => {
  return (
    <section className="h-[80vh] flex items-center text-center mb-12 px-10 md:px-40 xl:px-60 card-bg">
      <div className="flex flex-col gap-3 animate-fade-in
      ">
        <h1 className="font-bold text-5xl mb-4 ">About Our Company</h1>
        <p className="text-[#888] font-thin">
          Lorem ipsum dolor sit amet, <span className="text-white font-extralight">consectetur adipiscing elit.</span> Vivamus
          lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod
          malesuada. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint magnam assumenda neque corporis? Labore, nam asperiores numquam laborum, ut eaque accusantium similique voluptas unde nihil veniam aspernatur. 
        </p>
        <div className="flex justify-center items-center">
          <Image src={DownArrow} alt='down-arrow' height={20} width={20} className="animate-bounce mt-10 cursor-pointer" onClick={handleButtonClick}/>
        </div>
      </div>
    </section>
  );
};

export default CompanyDescription;
