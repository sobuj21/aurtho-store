// src/components/ProductCard.js
'use client';
import Image from "next/image";
import Link from 'next/link';
import { useCart } from '@/contexts/CartContext';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  if (!product) {
    return null; 
  }

  const ImagePlaceholder = () => <div className="w-full h-full bg-gray-200"></div>;

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col transition-shadow duration-300 hover:shadow-xl">
      <Link href={`/products/${product.id}`} className="relative w-full aspect-square rounded-md overflow-hidden mb-4 block">
        {product.onSale && (
          <div className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
            SALE
          </div>
        )}
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
        ) : (
          <ImagePlaceholder />
        )}
      </Link>
      
      <h3 className="text-lg font-semibold text-gray-800 text-left">
        <Link href={`/products/${product.id}`}>{product.name}</Link>
      </h3>

      <div className="mt-auto flex justify-between items-end pt-4">
        <div className="text-left">
          {product.salePrice ? (
            <>
              <p className="text-sm text-gray-500 line-through">Tk {product.price.toFixed(2)}</p>
              <p className="text-xl font-bold text-red-600">Tk {product.salePrice.toFixed(2)}</p>
            </>
          ) : (
            <p className="text-xl font-bold text-teal-600">Tk {product.price.toFixed(2)}</p>
          )}
        </div>
        <button 
          onClick={() => addToCart(product)}
          className="flex items-center gap-2 px-3 py-2 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors duration-300 text-xs"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart-plus" viewBox="0 0 16 16"><path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z"/><path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708z"/></svg>
          <span>Add</span>
        </button>
      </div>
    </div>
  );
}