// src/app/layout.js
import { Inter } from "next/font/google";
import "./globals.css";
import Link from 'next/link';
import CategoryList from "@/components/CategoryList";
import ProductSlider from "@/components/ProductSlider";

const inter = Inter({ subsets: ["latin"] });

// This is your new site-wide title and description for SEO
export const metadata = {
  title: "Aurtho - Your Online Shopping Destination",
  description: "Discover a wide range of fashion, electronics, home goods, and more at Aurtho.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-gray-100">
          {/* Header and Navigation Bar */}
          <header className="bg-white border-b border-gray-200 sticky top-0 z-20">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
              <Link href="/" className="text-2xl font-bold text-gray-800">
                Aurtho
              </Link>
              <div className="hidden md:flex space-x-6">
                <Link href="/offers" className="text-gray-600 hover:text-teal-600">Offers</Link>
                <Link href="/products" className="text-gray-600 hover:text-teal-600">Products</Link>
                <Link href="/about" className="text-gray-600 hover:text-teal-600">About</Link>
                <Link href="/contact" className="text-gray-600 hover:text-teal-600">Contact</Link>
              </div>
            </nav>
          </header>

          {/* New Main Content Area with Categories and Slider */}
          <div className="container mx-auto px-6 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Categories Section (Left Column) */}
              <div className="hidden lg:block lg:col-span-1">
                <CategoryList />
              </div>

              {/* Slider Section (Right Column) */}
              <div className="lg:col-span-3 h-96">
                <ProductSlider />
              </div>
            </div>
          </div>
          
          {/* The rest of your page content will be rendered here */}
          {children}

          {/* Footer */}
          <footer className="bg-gray-800 text-white py-8 mt-16">
            <div className="container mx-auto px-6 text-center">
              <p>&copy; 2025 Aurtho. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
