'use client';

import Image, { StaticImageData } from "next/image";
import margheritaImage from '../public/margherita.jpg';
// Then use: image: margheritaImage

// Define types for our pizza data
type Pizza = {
  id: number;
  name: string;
  price: number;
  image: StaticImageData | string; // Can be either imported image or path string
  description: string;
};

export default function Home() {
  // Pizza data with TypeScript types
  const pizzas: Pizza[] = [
    {
      id: 1,
      name: "Margherita",
      price: 299,
      image: "/margherita.jpg", // Replace with your actual image path
      description: "Classic delight with 100% real mozzarella cheese",
    },
    {
      id: 2,
      name: "Pepperoni",
      price: 399,
      image: "/margherita.jpg", // Replace with your actual image path
      description: "Pepperoni with extra cheese and herbs",
    },
    {
      id: 3,
      name: "Veg Supreme",
      price: 349,
      image: "/margherita.jpg", // Replace with your actual image path
      description: "Loaded with veggies and cheese",
    },
    {
      id: 4,
      name: "Chicken Dominator",
      price: 449,
      image: "/margherita.jpg", // Replace with your actual image path
      description: "Double chicken with spicy toppings",
    },
  ];

  const handleAddToCart = (pizzaId: number): void => {
    // Add your cart logic here
    console.log(`Added pizza ${pizzaId} to cart`);
    alert(`Added to cart!`);
  };

  return (
    <div>
      <nav className="px-4 sm:px-8 py-2">
        <ul className="flex -center items-center gap-8 text-sm sm:text-base font-medium">
          <li>
            <a
              className="flex hover:underline hover:underline-offset-4"
              href="/about"
            >
              About
            </a>
          </li>
          <li>
            <a
              className="hover:underline hover:underline-offset-4"
              href="/cart"
            >
              Cart
            </a>
          </li>
          <li>
            <a
              className="hover:underline hover:underline-offset-4"
              href="/menu"
            >
              Menu
            </a>
          </li>
          <li>
            <a
              className="hover:underline hover:underline-offset-4"
              href="/contact"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <div className=" gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <div className="text-2xl sm:text-6xl font-bold text-center sm:text-left">
            Bhook Lagi hai?
          </div>
          <div className="list-inside font-extrabold text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
            Order now
          </div>
        </main>

        {/* Pizza Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {pizzas.map((pizza: Pizza) => (
            <div
              key={pizza.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-40 w-full">
                <Image
                  src={pizza.image}
                  alt={pizza.name}
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full"
                />
              </div>
              <div className="p-4 text-black">
                <h3 className="text-xl font-bold mb-2">{pizza.name}</h3>
                <p className="k text-sm mb-4">
                  {pizza.description}
                </p>
                <div className="flex  justify-between items-center">
                  <span className="text-lg font-bold">₹{pizza.price}</span>
                  <button
                    onClick={() => handleAddToCart(pizza.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
