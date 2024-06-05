"use client";

const CompanyDescription = ({ handleButtonClick }: any) => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;
  return (
    <div className="animate-fade-in card-bg">
      <header className="border-b border-gray-700">
        <div className="container mx-auto py-4 flex justify-between items-center">
          <div className="text-sm">
            <span className="ml-2">{formattedDate}</span>
          </div>
          <button className="border border-gray-600 px-4 py-2 rounded hover:bg-gray-800 transition">
            Watch the Keynote
          </button>
        </div>
      </header>

      <main className="flex flex-col items-center justify-center text-center min-h-screen px-10 md:px-40 xl:px-48">
        <h1 className="text-5xl md:text-6xl font-bold">The Company Profile</h1>
        <p className="text-lg md:text-xl text-gray-400 mt-4 mb-8">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde,
          laudantium ab. Laudantium in cum perspiciatis sequi vitae excepturi,
          suscipit voluptas dignissimos veritatis commodi ex cumque a eius?
          Minima, totam officia.
        </p>
        <div className="flex space-x-4">
          <button className="bg-white text-black font-semibold px-6 py-3 rounded hover:bg-gray-300 transition" onClick={handleButtonClick}>
            Get Started
          </button>
          <button className="border border-gray-600 px-6 py-3 rounded hover:bg-gray-800 transition">
            Learn More
          </button>
        </div>

      </main>
    </div>
  );
  {
  }
};

export default CompanyDescription;
