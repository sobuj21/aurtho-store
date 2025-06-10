// src/app/products/page.js
import ProductCard from '@/components/ProductCard';
import { allProducts } from '@/data/products';

export default function ProductsPage() {
  return (
    <div className="bg-white">
      <main className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-10">
          All Products
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {allProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
}