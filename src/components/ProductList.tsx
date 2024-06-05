"use client";

import { useEffect, useState } from "react";
import Product from "./Product";
import DownArrow from "./../assets/down-arrow.png";
import Image from "next/image";

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
  const [productsShow, setProductsShow] = useState<IProduct[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productRes = await fetch(
          "https://www.giovankov.com/api/product.json"
        );
        const productsData = await productRes.json();

        const imageRes = await fetch(
          "https://www.giovankov.com/api/image.json"
        );
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

        const filteredProduct = combinedData.filter(
          (val: IProduct) => parseInt(val.id) < 9
        );

        setProducts(combinedData);
        setProductsShow(filteredProduct);
      } catch (error) {
        console.error("Failed to fetch products", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className="px-10 lg:px-20 relative">
      <h1 className="text-2xl font-bold text-center sm:text-start mb-10 flex justify-center sm:justify-start">
        Meet our Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {productsShow.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            name={product.name}
            image={product.image}
          />
        ))}
      </div>
      <div
        className={`bg-bottom-to-top-gradient absolute flex justify-center items-end h-[150px] bottom-[-40px] text-xs w-[-webkit-fill-available] ${
          productsShow.length === products.length && "hidden"
        }`}
      >
        <div className="flex justify-center items-center mt-10">
          <Image
            src={DownArrow}
            alt="down-arrow"
            height={20}
            width={20}
            className="animate-bounce mt-10 cursor-pointer"
            onClick={() => setProductsShow(products)}
          />
        </div>
      </div>
    </section>
  );
};

export default ProductList;
