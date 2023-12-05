import { products } from "@/data/products";
import Link from "next/link";
import { Category } from "@/data/productTypes";
import Image from "next/image";

export default function ProductNavigation() {
  const categories: Category[] = ["Shirts", "Shoes", "Pants"];

  const filterProducts = (category: Category) =>
    products.filter((product) => product.category === category);

  return (
    <div
      id="products"
      className="container mx-auto flex items-center justify-center "
    >
      <div className="grid grid-cols-1 space-y-4  self-center w-2/3 gap-4">
        {categories.map((category) => (
          <div
            key={category}
            className="flex flex-col justify-center items-center  mb-6 "
          >
            <div className=" px-8 py-4 rounded outline w-full ">
              {" "}
              <h2 className="text-2xl font-bold my-4 text-center">
                {category}
              </h2>
              <div className="flex flex-wrap justify-center items-center">
                {filterProducts(category).map((product) => (
                  <div key={product.id} className="m-2 ">
                    <div className="block p-4  rounded hover:shadow-lg">
                      <Image
                        src={product.image}
                        alt={product.name}
                        className=" h-1/3  object-contain"
                        width={1920}
                        height={1920}
                      />

                      
                      <div className="text-center font-bold my-4">
                        ${product.price}
                      </div>
                      <Link
                        className="block mx-auto my-2 text-center rounded-md bg-blue-600 px-4 py-3 transition text-lg font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        href={`/${product.id}`}
                      >
                        {" "}
                        Add To Cart
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
