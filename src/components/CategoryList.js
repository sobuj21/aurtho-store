// src/components/CategoryList.js
import Link from 'next/link';

const categories = [
  "Women's & Girls' Fashion",
  "Men's & Boys' Fashion",
  "Electronic Accessories",
  "TV & Home Appliances",
  "Electronics Device",
  "Mother & Baby",
  "Automotive & Motorbike",
  "Sports & Outdoors",
  "Home & Lifestyle",
  "Groceries",
  "Health & Beauty",
  "Watches, Bags, Jewelry",
];

export default function CategoryList() {
  return (
    <div className="bg-white p-4 rounded-lg shadow w-full h-full">
      <h3 className="font-extrabold text-lg mb-2 text-black">Categories</h3>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>
            <Link href="#" className="block text-sm text-gray-700 hover:text-teal-600 hover:bg-gray-100 p-2 rounded">
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}