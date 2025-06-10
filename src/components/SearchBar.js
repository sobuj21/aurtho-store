// src/components/SearchBar.js
'use client'; 
import { useState } from 'react';
import { allProducts } from '../data/products';
import Image from 'next/image';
import Link from 'next/link';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setQuery(searchTerm);

    if (searchTerm.length > 2) {
      const filteredResults = allProducts.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setResults(filteredResults);
    } else {
      setResults([]);
    }
  };

  return (
    <div className="relative w-full">
      <div className="flex items-center bg-white rounded-full shadow-md overflow-hidden">
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="Search for anything..."
          className="w-full px-5 py-2 text-gray-700 focus:outline-none"
        />
        <button className="px-4 text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/></svg>
        </button>
      </div>
      
      {results.length > 0 && (
        <div className="absolute top-full mt-2 w-full bg-white rounded-lg shadow-xl z-30 overflow-hidden">
          <ul>
            {results.map(product => (
              <li key={product.id} className="border-b last:border-b-0">
                <Link href="#" className="flex items-center p-3 hover:bg-gray-100 transition-colors">
                  <div className="w-12 h-12 bg-gray-200 rounded-md flex-shrink-0 mr-4">
                    {product.image && <Image src={product.image} alt={product.name} width={48} height={48} className="object-cover rounded-md" />}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{product.name}</p>
                    <p className="text-sm text-teal-600">${product.salePrice || product.price}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}