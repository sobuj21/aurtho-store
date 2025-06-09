import Image from "next/image";
import Link from 'next/link';

// This is the main component for our homepage
export default function HomePage() {
  return (
    <div className="bg-white">
      {/* Header and Navigation Bar */}
      <header className="border-b border-gray-200">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-gray-800">
            Aurtho
          </Link>
          <div className="space-x-6">
            <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Products</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Contact</a>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="bg-gray-50">
          <div className="container mx-auto px-6 py-20 text-center">
            <h1 className="text-5xl font-extrabold text-gray-900">
              Welcome to Aurtho
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Your one-stop shop for unique and amazing products.
            </p>
            <button className="mt-8 px-8 py-3 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700">
              Shop Now
            </button>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
              Featured Products
            </h2>
            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

              {/* Product 1 - NEW & MODERN DESIGN */}
              <div className="border border-gray-200 rounded-lg p-4 flex flex-col transition-shadow duration-300 hover:shadow-xl">
                {/* Image Frame */}
                <div className="relative w-full aspect-square rounded-md overflow-hidden mb-4">
                  <Image
                    src="/aurtho-store/product1.jpeg"
                    alt="A beautiful Clock"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Product Info */}
                <h3 className="text-xl font-semibold text-gray-800 text-left">Clasic Clock</h3>
                {/* Price and Button Container */}
                <div className="mt-auto flex justify-between items-end pt-4">
                  {/* Price Section with Sale */}
                  <div className="text-left">
                    <p className="text-sm text-gray-500 line-through">$25.00</p>
                    <p className="text-2xl font-bold text-teal-600">
                      $19.99
                    </p>
                  </div>
                  {/* Add to Cart Button with Icon */}
                  <button className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors duration-300 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart-plus" viewBox="0 0 16 16">
                      <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z"/>
                      <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708z"/>
                    </svg>
                    <span>Add</span>
                  </button>
                </div>
              </div>

              {/* Product 2 - NEW & MODERN DESIGN */}
              <div className="border border-gray-200 rounded-lg p-4 flex flex-col transition-shadow duration-300 hover:shadow-xl">
                {/* Image Frame */}
                <div className="relative w-full aspect-square rounded-md overflow-hidden mb-4">
                  <Image
                    src="/aurtho-store/product2.webp"
                    alt="Crocodile Pattern Purses"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Product Info */}
                <h3 className="text-xl font-semibold text-gray-800 text-left">Crocodile Pattern Purses</h3>
                {/* Price and Button Container */}
                <div className="mt-auto flex justify-between items-end pt-4">
                  {/* Price Section with Sale */}
                  <div className="text-left">
                    <p className="text-sm text-gray-500 line-through">$30.00</p>
                    <p className="text-2xl font-bold text-teal-600">
                      $24.99
                    </p>
                  </div>
                  {/* Add to Cart Button with Icon */}
                  <button className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors duration-300 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart-plus" viewBox="0 0 16 16">
                      <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z"/>
                      <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708z"/>
                    </svg>
                    <span>Add</span>
                  </button>
                </div>
              </div>

              {/* Product 3 - NEW & MODERN DESIGN */}
              <div className="border border-gray-200 rounded-lg p-4 flex flex-col transition-shadow duration-300 hover:shadow-xl">
                {/* Image Frame */}
                <div className="relative w-full aspect-square rounded-md overflow-hidden mb-4">
                  <Image
                    src="/aurtho-store/product3.jpg"
                    alt="Engagement Ring"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Product Info */}
                <h3 className="text-xl font-semibold text-gray-800 text-left">Engagement Ring</h3>
                {/* Price and Button Container */}
                <div className="mt-auto flex justify-between items-end pt-4">
                  {/* Price Section with Sale */}
                  <div className="text-left">
                    <p className="text-sm text-gray-500 line-through">$39.99</p>
                    <p className="text-2xl font-bold text-teal-600">
                      $29.99
                    </p>
                  </div>
                  {/* Add to Cart Button with Icon */}
                  <button className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors duration-300 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart-plus" viewBox="0 0 16 16">
                      <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z"/>
                      <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708z"/>
                    </svg>
                    <span>Add</span>
                  </button>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2025 Aurtho. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
