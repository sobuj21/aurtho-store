// src/app/page.js
'use client'; 
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { allProducts } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import CategoryList from '@/components/CategoryList';
import ProductSlider from '@/components/ProductSlider';
import { db } from '@/lib/firebase';
import { collection, getDocs } from 'firebase/firestore';

export default function HomePage() {
  // In a real app, you would fetch products from Firestore here.
  // For now, we continue using the local data file.
  const [products, setProducts] = useState(allProducts);
  const [displayCount, setDisplayCount] = useState(8);

  const saleProducts = products.filter(p => p.onSale);
  const regularProducts = products.filter(p => !p.onSale);

  const loadMoreProducts = () => {
    setDisplayCount(prevCount => prevCount + 8);
  };

  // Simple shuffle function to randomize products
  const shuffleArray = (array) => {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
  };

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="hidden lg:block lg:col-span-1">
            <CategoryList />
          </div>
          <div className="lg:col-span-3 h-[450px]"> 
            <ProductSlider />
          </div>
        </div>
      </div>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-gray-800">Flash Sale</h2>
            <Link href="/offers" className="text-sm font-semibold text-teal-600 hover:underline">
              View More
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
            {shuffleArray(saleProducts).slice(0, 4).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">All Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {shuffleArray(regularProducts).slice(0, displayCount).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          {displayCount < regularProducts.length && (
            <div className="text-center mt-10">
              <button 
                onClick={loadMoreProducts}
                className="px-8 py-3 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
