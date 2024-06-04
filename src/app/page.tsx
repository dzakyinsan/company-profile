import Footer from '@/components/Footer';
import CompanyDescription from '../components/CompanyDesc';
import ProductList from '../components/ProductList';

const Home = () => {
  return (
    <div>
      <main>
        <CompanyDescription />
        <ProductList />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
