// src/app/products/[id]/page.js
'use client';
import { allProducts } from '@/data/products';
import Image from 'next/image';
import { useCart } from '@/contexts/CartContext';
import { notFound } from 'next/navigation';

export default function ProductDetailPage({ params }) {
  const { addToCart } = useCart();
  const product = allProducts.find(p => p.id === params.id);

  if (!product) {
    return notFound();
  }

  return (
    <div className="bg-white">
      <main className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="relative aspect-square">
            {product.image ? (
              <Image src={product.image} alt={product.name} fill className="object-cover rounded-lg"/>
            ) : (
              <div className="w-full h-full bg-gray-200 rounded-lg"></div>
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
              className="w-full p-4 bg-gray-800 text-white font-bold rounded-lg hover:bg-gray-700"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
