import Image from "next/image";

// This is the main component for our homepage
export default function HomePage() {
  return (
    <div className="bg-white">
      {/* Header and Navigation Bar */}
      <header className="border-b border-gray-200">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-800">
            Aurtho
          </div>
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

              {/* Product 1 */}
              <div className="border border-gray-200 rounded-lg p-4 text-center">
                <div className="w-full h-64 bg-gray-200 rounded-md mb-4 flex items-center justify-center">
                  <span className="text-gray-500">Product Image</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Product Name 1</h3>
                <p className="text-gray-600 mt-2">$19.99</p>
                <button className="mt-4 px-6 py-2 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700 text-sm">
                  Add to Cart
                </button>
              </div>

              {/* Product 2 */}
              <div className="border border-gray-200 rounded-lg p-4 text-center">
                <div className="w-full h-64 bg-gray-200 rounded-md mb-4 flex items-center justify-center">
                  <span className="text-gray-500">Product Image</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Product Name 2</h3>
                <p className="text-gray-600 mt-2">$24.99</p>
                <button className="mt-4 px-6 py-2 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700 text-sm">
                  Add to Cart
                </button>
              </div>

              {/* Product 3 */}
              <div className="border border-gray-200 rounded-lg p-4 text-center">
                <div className="w-full h-64 bg-gray-200 rounded-md mb-4 flex items-center justify-center">
                  <span className="text-gray-500">Product Image</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Product Name 3</h3>
                <p className="text-gray-600 mt-2">$29.99</p>
                <button className="mt-4 px-6 py-2 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700 text-sm">
                  Add to Cart
                </button>
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