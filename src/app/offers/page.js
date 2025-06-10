// src/app/offers/page.js
import ProductCard from '@/components/ProductCard';
import { allProducts } from '@/data/products';

export default function OffersPage() {
  const saleProducts = allProducts.filter(p => p.onSale);

  return (
    <div className="bg-white">
      <main className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-10">
          Special Offers
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {saleProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
}