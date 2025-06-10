// src/components/Header.js
'use client';
import { useState } from 'react';
import Link from 'next/link';
import SearchBar from './SearchBar';
import { useAuth } from '@/contexts/AuthContext';
import { useCart } from '@/contexts/CartContext';
import AuthModal from './AuthModal';
import CartFlyout from './CartFlyout';

export default function Header() {
  const { currentUser } = useAuth();
  const { cartItems } = useCart();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const cartItemCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  return (
    <>
      <header className="bg-white border-b border-gray-200 sticky top-0 z-30 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-3">
            <div className="flex items-center gap-4">
              <button className="lg:hidden p-1" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16"><path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/></svg>
              </button>
              <Link href="/" className="text-3xl font-bold text-gray-800 flex-shrink-0">Aurtho</Link>
            </div>
            <div className="hidden md:block w-full max-w-xl mx-4">
              <SearchBar />
            </div>
            <div className="flex items-center space-x-4">
              {currentUser ? (
                <Link href="/account" className="text-sm font-bold text-gray-700 hover:text-teal-600">My Account</Link>
              ) : (
                <button onClick={() => setShowAuthModal(true)} className="text-sm font-bold text-gray-700 hover:text-teal-600">Login / Signup</button>
              )}
              <button onClick={() => setShowCart(true)} className="relative p-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16"><path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/></svg>
                {cartItemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">{cartItemCount}</span>
                )}
              </button>
            </div>
          </div>
          <nav className="hidden lg:flex justify-center items-center py-2 space-x-8 text-sm font-bold border-t border-gray-100">
            <Link href="/offers" className="text-gray-600 hover:text-teal-600 transition-colors">Offers</Link>
            <Link href="/products" className="text-gray-600 hover:text-teal-600 transition-colors">Products</Link>
            <Link href="/about" className="text-gray-600 hover:text-teal-600 transition-colors">About</Link>
            <Link href="/contact" className="text-gray-600 hover:text-teal-600 transition-colors">Contact</Link>
          </nav>
        </div>
      </header>
      
      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity lg:hidden ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsMenuOpen(false)}>
        <div className={`fixed top-0 left-0 h-full w-72 bg-white shadow-xl transition-transform transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`} onClick={(e) => e.stopPropagation()}>
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="font-bold text-gray-900">Menu</h2>
            <button onClick={() => setIsMenuOpen(false)} className="text-2xl">&times;</button>
          </div>
          <div className="p-4"><SearchBar /></div>
          <nav className="flex flex-col p-4 space-y-2">
            <Link href="/offers" onClick={() => setIsMenuOpen(false)} className="p-2 rounded hover:bg-gray-100 text-gray-900">Offers</Link>
            <Link href="/products" onClick={() => setIsMenuOpen(false)} className="p-2 rounded hover:bg-gray-100 text-gray-900">Products</Link>
            <Link href="/about" onClick={() => setIsMenuOpen(false)} className="p-2 rounded hover:bg-gray-100 text-gray-900">About</Link>
            <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="p-2 rounded hover:bg-gray-100 text-gray-900">Contact</Link>
          </nav>
        </div>
      </div>
      
      {showAuthModal && <AuthModal closeModal={() => setShowAuthModal(false)} />}
      {showCart && <CartFlyout closeCart={() => setShowCart(false)} />}
    </>
  );
}