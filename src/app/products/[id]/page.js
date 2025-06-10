// src/app/products/[id]/page.js

// This is now a Server Component. Notice there is no 'use client'.
import { allProducts } from '@/data/products';
import { notFound } from 'next/navigation';
import ProductDetailClient from '@/components/ProductDetailClient'; // Import the new client component

// This server-only function provides the list of pages to build
export async function generateStaticParams() {
  return allProducts.map((product) => ({
    id: product.id,
  }));
}

// This function fetches the data for a single product on the server
async function getProduct(id) {
    const product = allProducts.find(p => p.id === id);
    return product;
}

// The main page component
export default async function ProductPage({ params }) {
  const product = await getProduct(params.id);

  if (!product) {
    notFound();
  }

  // It renders the Client Component and passes the product data down to it
  return <ProductDetailClient product={product} />;
}
