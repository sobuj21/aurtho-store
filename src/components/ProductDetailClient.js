// src/components/ProductDetailClient.js
'use client';

import Image from 'next/image';
import { useCart } from '@/contexts/CartContext';

export default function ProductDetailClient({ product }) {
  const { addToCart } = useCart();

  // This component receives the product data as a "prop"
  return (
    <div className="bg-white">
      <main className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="relative aspect-square">
            {product.image ? (
              <Image src={product.image} alt={product.name} fill className="object-cover rounded-lg"/>
            ) : (
              <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">No Image</span>
              </div>
            )}
          </div>
          {/* Product Details */}
          <div>
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-gray-600 mb-6">{product.description}</p>
            <div className="mb-6">
              {product.salePrice ? (
                <div className="flex items-center gap-4">
                  <p className="text-4xl font-bold text-red-600">Tk {product.salePrice.toFixed(2)}</p>
                  <p className="text-2xl text-gray-500 line-through">Tk {product.price.toFixed(2)}</p>
                </div>
              ) : (
                <p className="text-4xl font-bold text-teal-600">Tk {product.price.toFixed(2)}</p>
              )}
            </div>
            <button 
              onClick={() => addToCart(product)}
              className="w-full p-4 bg-gray-800 text-white font-bold rounded-lg hover:bg-gray-700 transition-colors"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
