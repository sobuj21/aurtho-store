// src/components/ProductSlider.js
'use client'; 
import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { allProducts } from '../data/products';

export default function ProductSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderProducts = allProducts.filter(p => p.image);

  const goToNext = useCallback(() => {
    if (sliderProducts.length === 0) return;
    const isLastSlide = currentIndex === sliderProducts.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, sliderProducts.length]);

  useEffect(() => {
    if (sliderProducts.length > 0) {
      const timer = setTimeout(goToNext, 5000); 
      return () => clearTimeout(timer); 
    }
  }, [goToNext, sliderProducts.length]);

  const goToPrevious = () => {
    if (sliderProducts.length === 0) return;
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? sliderProducts.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  if (sliderProducts.length === 0) {
    return (
      <div className="relative w-full h-full rounded-lg bg-gray-200 flex items-center justify-center">
        <p className="text-gray-500">No Product Images to Display</p>
      </div>
    );
  }

  const currentProduct = sliderProducts[currentIndex];

  if (!currentProduct) {
     return (
      <div className="relative w-full h-full rounded-lg bg-gray-200 flex items-center justify-center">
        <p className="text-gray-500">Loading Products...</p>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg">
      <div className="w-full h-full">
        <Image
          src={currentProduct.image}
          alt={currentProduct.name}
          fill
          className="object-cover transition-all duration-700 ease-in-out"
          key={currentIndex}
        />
      </div>
      
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-8 text-white">
        <h2 className="text-4xl font-bold">{currentProduct.name}</h2>
        <p className="text-xl mt-2">Special Price: ${currentProduct.salePrice || currentProduct.price}</p>
      </div>

      <div
        className="absolute top-1/2 left-4 -translate-y-1/2 cursor-pointer bg-black bg-opacity-50 rounded-full p-2 text-white hover:bg-opacity-75 transition-opacity"
        onClick={goToPrevious}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16"><path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/></svg>
      </div>
      <div
        className="absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer bg-black bg-opacity-50 rounded-full p-2 text-white hover:bg-opacity-75 transition-opacity"
        onClick={goToNext}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16"><path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/></svg>
      </div>
    </div>
  );
}
