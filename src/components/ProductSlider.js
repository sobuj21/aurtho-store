// src/components/ProductSlider.js
'use client'; 

// We need to import 'useCallback' to fix a code quality warning
import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { allProducts } from '../data/products';

export default function ProductSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Filter for products that have an image to show in the slider
  const sliderProducts = allProducts.filter(p => p.image);

  // This function is now wrapped in useCallback to prevent re-creating it on every render
  const goToNext = useCallback(() => {
    if (sliderProducts.length === 0) return; // Don't do anything if no images
    const isLastSlide = currentIndex === sliderProducts.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, sliderProducts.length]);

  const goToPrevious = () => {
    if (sliderProducts.length === 0) return;
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? sliderProducts.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const timer = setTimeout(goToNext, 5000); 
    return () => clearTimeout(timer); 
  }, [goToNext]); // The dependency is now correctly set

  // THE MAIN FIX IS HERE:
  // We get the current product and check if it exists before trying to use it.
  const currentProduct = sliderProducts[currentIndex];

  if (!currentProduct) {
    // If no product is found (e.g., during build or if there are no images),
    // show a safe placeholder instead of crashing.
    return (
      <div className="relative w-full h-full rounded-lg bg-gray-200 flex items-center justify-center">
        <p className="text-gray-500">Loading Products...</p>
      </div>
    );
  }

  // If a product exists, render the slider
  return (
    <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg">
      {/* Slide Image */}
      <div className="w-full h-full">
        <Image
          src={currentProduct.image}
          alt={currentProduct.name}
          fill
          className="object-cover transition-all duration-700 ease-in-out"
          key={currentIndex}
        />
      </div>
      
      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-8 text-white">
        <h2 className="text-4xl font-bold">{currentProduct.name}</h2>
        <p className="text-xl mt-2">Special Price: ${currentProduct.salePrice || currentProduct.price}</p>
      </div>

      {/* Navigation Arrows */}
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
