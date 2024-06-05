'use client';

import Footer from "@/components/Footer";
import CompanyDescription from "../components/CompanyDesc";
import ProductList from "../components/ProductList";
import GetinTouch from "@/components/GetinTouch";
import Testimonials from "@/components/Testimonial";

const Home = () => {
  const handleButtonClick = () => {
    const element = document.getElementById('get-in-touch');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div>
      <main>
        <CompanyDescription handleButtonClick={handleButtonClick}/>
        <div id="get-in-touch">
        <GetinTouch/>
        </div>
        <ProductList />
        <Testimonials/>
        <Footer />
      </main>
    </div>
  );
};

export default Home;
