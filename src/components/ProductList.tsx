"use client";

import { useEffect, useState } from "react";
import Product from "./Product";

interface IProduct {
  id: string;
  name: string;
  image: string;
}

interface IImage {
  id: string[];
  image: string;
}

const ProductList = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productRes = await fetch("https://www.giovankov.com/api/product.json");
        const productsData = await productRes.json();

        const imageRes = await fetch("https://www.giovankov.com/api/image.json");
        const imagesData = await imageRes.json();

        const combinedData = productsData.data.map((product: IProduct) => {
          let productImage = "";
          imagesData.data.forEach((imageGroup: IImage) => {
            if (imageGroup.id.includes(product.id)) {
              productImage = imageGroup.image;
            }
          });
          return {
            ...product,
            image: productImage,
          };
        });


        setProducts(combinedData);
      } catch (error) {
        console.error("Failed to fetch products", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className="px-10 lg:px-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            name={product.name}
            image={product.image}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
