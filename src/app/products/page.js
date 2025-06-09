import Image from "next/image";
import Link from 'next/link';

export default function ProductsPage() {
  return (
    <div className="bg-white">
      {/* Header and Navigation Bar */}
<header className="border-b border-gray-200">
  <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
    <Link href="/" className="text-2xl font-bold text-gray-800">
      Aurtho
    </Link>
    <div className="space-x-6">
      {/* "Home" has been replaced with "Offers" */}
      <Link href="/offers" className="text-gray-600 hover:text-gray-900">Offers</Link>
      <Link href="/products" className="text-gray-600 hover:text-gray-900">Products</Link>
      <Link href="/about" className="text-gray-600 hover:text-gray-900">About</Link>
      <Link href="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
    </div>
  </nav>
</header>

      <main>
        {/* Main Products Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-10">
              All Products
            </h1>
            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

              {/* Dummy Product 1 */}
              <div className="border border-gray-200 rounded-lg p-4 flex flex-col transition-shadow duration-300 hover:shadow-xl">
                <div className="relative w-full aspect-square rounded-md overflow-hidden mb-4">
                  <div className="w-full h-full bg-gray-200"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 text-left">Dummy Product One</h3>
                <div className="mt-auto flex justify-between items-end pt-4">
                  <div className="text-left">
                    <p className="text-sm text-gray-500 line-through">$40.00</p>
                    <p className="text-2xl font-bold text-teal-600">$34.99</p>
                  </div>
                  <button className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors duration-300 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart-plus" viewBox="0 0 16 16"><path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z"/><path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708z"/></svg>
                    <span>Add</span>
                  </button>
                </div>
              </div>

              {/* Dummy Product 2 */}
              <div className="border border-gray-200 rounded-lg p-4 flex flex-col transition-shadow duration-300 hover:shadow-xl">
                <div className="relative w-full aspect-square rounded-md overflow-hidden mb-4">
                  <div className="w-full h-full bg-gray-200"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 text-left">Dummy Product Two</h3>
                <div className="mt-auto flex justify-between items-end pt-4">
                    <p className="text-2xl font-bold text-teal-600">$49.99</p>
                  <button className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors duration-300 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart-plus" viewBox="0 0 16 16"><path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z"/><path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708z"/></svg>
                    <span>Add</span>
                  </button>
                </div>
              </div>

              {/* ... Repeat for products 3, 4, 5, 6 */}
              {/* Dummy Product 3 */}
              <div className="border border-gray-200 rounded-lg p-4 flex flex-col transition-shadow duration-300 hover:shadow-xl"><div className="relative w-full aspect-square rounded-md overflow-hidden mb-4"><div className="w-full h-full bg-gray-200"></div></div><h3 className="text-xl font-semibold text-gray-800 text-left">Dummy Product Three</h3><div className="mt-auto flex justify-between items-end pt-4"><p className="text-2xl font-bold text-teal-600">$19.99</p><button className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors duration-300 text-sm"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart-plus" viewBox="0 0 16 16"><path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z"/><path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708z"/></svg><span>Add</span></button></div></div>
              {/* Dummy Product 4 */}
              <div className="border border-gray-200 rounded-lg p-4 flex flex-col transition-shadow duration-300 hover:shadow-xl"><div className="relative w-full aspect-square rounded-md overflow-hidden mb-4"><div className="w-full h-full bg-gray-200"></div></div><h3 className="text-xl font-semibold text-gray-800 text-left">Dummy Product Four</h3><div className="mt-auto flex justify-between items-end pt-4"><div className="text-left"><p className="text-sm text-gray-500 line-through">$65.00</p><p className="text-2xl font-bold text-teal-600">$59.99</p></div><button className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors duration-300 text-sm"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart-plus" viewBox="0 0 16 16"><path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z"/><path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708z"/></svg><span>Add</span></button></div></div>
              {/* Dummy Product 5 */}
              <div className="border border-gray-200 rounded-lg p-4 flex flex-col transition-shadow duration-300 hover:shadow-xl"><div className="relative w-full aspect-square rounded-md overflow-hidden mb-4"><div className="w-full h-full bg-gray-200"></div></div><h3 className="text-xl font-semibold text-gray-800 text-left">Dummy Product Five</h3><div className="mt-auto flex justify-between items-end pt-4"><p className="text-2xl font-bold text-teal-600">$120.00</p><button className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors duration-300 text-sm"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart-plus" viewBox="0 0 16 16"><path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z"/><path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708z"/></svg><span>Add</span></button></div></div>
              {/* Dummy Product 6 */}
              <div className="border border-gray-200 rounded-lg p-4 flex flex-col transition-shadow duration-300 hover:shadow-xl"><div className="relative w-full aspect-square rounded-md overflow-hidden mb-4"><div className="w-full h-full bg-gray-200"></div></div><h3 className="text-xl font-semibold text-gray-800 text-left">Dummy Product Six</h3><div className="mt-auto flex justify-between items-end pt-4"><p className="text-2xl font-bold text-teal-600">$75.50</p><button className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors duration-300 text-sm"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart-plus" viewBox="0 0 16 16"><path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z"/><path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708z"/></svg><span>Add</span></button></div></div>

            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2025 Aurtho. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
