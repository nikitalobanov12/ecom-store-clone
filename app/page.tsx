import Cart from "@/components/Cart";
import Product from "@/components/Product";
import Hero from "@/components/hero";

const products: Product[] = [
  {
    id: "1",
    name: "Shirt",
    price: 20,
    quantity: 1,
  },
  {
    id: "2",
    name: "Pants",
    price: 40,
    quantity: 2,
  },
  {
    id: "3",
    name: "Shoes",
    price: 60,
    quantity: 4,
  },
];

export default function Home() {
  return (
    <>
      {" "}
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="flex flex-col gap-8">
          <h1 className="text-3xl">E-Commerce Cart System</h1>
          <div className="grid grid-cols-3 gap-4">
            {products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
          <Cart />
        </div>
      </main>
    </>
  );
}
