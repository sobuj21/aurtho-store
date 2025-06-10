// src/app/cart/page.js
'use client';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart, cartTotal, clearCart } = useCart();
  const { currentUser } = useAuth();
  const router = useRouter();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    // In a real app, you would save the order to Firebase here
    console.log("Order placed with items:", cartItems);
    console.log("Total:", cartTotal);
    
    setShowSuccessMessage(true);
    clearCart();
    
    setTimeout(() => {
      setShowSuccessMessage(false);
      router.push('/');
    }, 3000);
  };
  
  return (
    <div className="bg-white">
      <main className="container mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-center mb-8">Your Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <div className="text-center">
            <p className="text-gray-600">Your cart is empty.</p>
            <Link href="/products" className="mt-4 inline-block px-6 py-2 bg-gray-800 text-white rounded">
              Shop Now
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow">
              {cartItems.map(item => (
                <div key={item.id} className="flex items-center border-b py-4 last:border-b-0">
                  <div className="w-24 h-24 bg-gray-200 rounded mr-6">
                    {item.image && <Image src={item.image} alt={item.name} width={96} height={96} className="object-cover rounded" />}
                  </div>
                  <div className="flex-grow">
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-gray-600">Tk {item.salePrice || item.price}</p>
                    <div className="flex items-center mt-2">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="border px-3 py-1 rounded">-</button>
                      <input 
                        type="number"
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                        className="w-16 text-center border-t border-b py-1"
                      />
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="border px-3 py-1 rounded">+</button>
                    </div>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className="ml-4 text-red-500 hover:text-red-700">Remove</button>
                </div>
              ))}
            </div>
            {/* Checkout Form */}
            <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                <div className="flex justify-between mb-2">
                  <span>Subtotal</span>
                  <span>Tk {cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-4">
                  <span>Shipping</span>
                  <span>Tk 60.00</span>
                </div>
                <div className="flex justify-between font-bold text-lg border-t pt-4">
                  <span>Total</span>
                  <span>Tk {(cartTotal + 60).toFixed(2)}</span>
                </div>
                <form onSubmit={handlePlaceOrder} className="mt-6">
                  <h3 className="font-semibold mb-2">Shipping Address</h3>
                  <input type="text" placeholder="Full Name" className="w-full p-2 border rounded mb-2 text-gray-900" required />
                  <input type="text" placeholder="Contact Number" className="w-full p-2 border rounded mb-2 text-gray-900" required />
                  <textarea placeholder="Full Address (e.g., House, Road, Area, Thana)" className="w-full p-2 border rounded mb-2 text-gray-900" rows="3" required></textarea>
                  <select className="w-full p-2 border rounded mb-4 bg-white text-gray-900">
                    <option>Dhaka</option>
                    <option>Chittagong</option>
                    <option>Khulna</option>
                    <option>Rajshahi</option>
                    <option>Sylhet</option>
                    <option>Barisal</option>
                    <option>Rangpur</option>
                    <option>Mymensingh</option>
                  </select>
                  <div className="p-4 bg-gray-100 rounded">
                    <p className="font-semibold">Payment Method: Cash on Delivery</p>
                  </div>
                  <button type="submit" className="w-full mt-6 p-3 bg-teal-600 text-white rounded hover:bg-teal-700 font-bold">
                    Place Order
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
        {showSuccessMessage && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg text-center">
              <h2 className="text-2xl font-bold text-green-600 mb-4">Thank You!</h2>
              <p>Your order has been placed successfully.</p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
