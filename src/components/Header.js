// src/components/Header.js
import Link from 'next/link';
import SearchBar from './SearchBar';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-30 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          <Link href="/" className="text-3xl font-bold text-gray-800 flex-shrink-0">
            Aurtho
          </Link>
          <div className="hidden md:block w-full max-w-xl mx-4">
            <SearchBar />
          </div>
          <div className="flex items-center space-x-4">
            {/* Future icons go here */}
          </div>
        </div>
        <nav className="hidden md:flex justify-center items-center py-2 space-x-8 text-sm font-medium border-t border-gray-100">
          <Link href="/offers" className="text-gray-600 hover:text-teal-600 transition-colors">Offers</Link>
          <Link href="/products" className="text-gray-600 hover:text-teal-600 transition-colors">Products</Link>
          <Link href="/about" className="text-gray-600 hover:text-teal-600 transition-colors">About</Link>
          <Link href="/contact" className="text-gray-600 hover:text-teal-600 transition-colors">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
