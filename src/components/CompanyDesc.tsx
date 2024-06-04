const CompanyDescription = () => {
  return (
    <section className="h-80 flex items-center text-center mb-24 px-5 md:px-40 card-bg">
      <div className="flex flex-col gap-3 animate-fade-in
      ">
        <h1 className="font-bold text-5xl mb-4 ">About Our Company</h1>
        <p className="text-[#888] font-thin">
          Lorem ipsum dolor sit amet, <span className="text-white font-extralight">consectetur adipiscing elit.</span> Vivamus
          lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod
          malesuada.
        </p>
      </div>
    </section>
  );
};

export default CompanyDescription;
