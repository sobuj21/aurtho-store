// src/components/CartFlyout.js
'use client';
import { useCart } from '@/contexts/CartContext';
import Image from 'next/image';
import Link from 'next/link';

export default function CartFlyout({ closeCart }) {
  const { cartItems, updateQuantity, removeFromCart, cartTotal } = useCart();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={closeCart}>
      <div 
        className="fixed top-0 right-0 h-full w-full max-w-sm bg-white shadow-xl flex flex-col"
        onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside the panel
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">Shopping Cart</h2>
          <button onClick={closeCart} className="text-gray-500 hover:text-gray-800 text-2xl">&times;</button>
        </div>

        {cartItems.length === 0 ? (
          <div className="flex-grow flex flex-col justify-center items-center">
            <p className="text-gray-500">Your cart is empty.</p>
            <button onClick={closeCart} className="mt-4 px-6 py-2 bg-gray-800 text-white rounded">
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-grow overflow-y-auto p-4">
              {cartItems.map(item => (
                <div key={item.id} className="flex items-center mb-4">
                  <div className="w-20 h-20 bg-gray-200 rounded mr-4">
                    {item.image && <Image src={item.image} alt={item.name} width={80} height={80} className="object-cover rounded" />}
                  </div>
                  <div className="flex-grow">
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-gray-600">Tk {item.salePrice || item.price}</p>
                    <div className="flex items-center mt-2">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="border px-2 rounded">-</button>
                      <input 
                        type="number"
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                        className="w-12 text-center border-t border-b"
                      />
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="border px-2 rounded">+</button>
                    </div>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className="ml-4 text-red-500 hover:text-red-700 text-sm">Remove</button>
                </div>
              ))}
            </div>
            <div className="p-4 border-t">
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>Tk {cartTotal.toFixed(2)}</span>
              </div>
              <Link href="/cart">
                <button onClick={closeCart} className="w-full mt-4 p-3 bg-teal-600 text-white rounded hover:bg-teal-700">
                  View Cart & Checkout
                </button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}