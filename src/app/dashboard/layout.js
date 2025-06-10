// src/app/dashboard/layout.js
import Link from 'next/link';
import ProtectedRoute from '@/components/ProtectedRoute'; // We reuse the same protection

function AdminLayout({ children }) {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white flex flex-col">
        <div className="p-4 text-2xl font-bold border-b border-gray-700">
          Aurtho Admin
        </div>
        <nav className="flex-grow p-4 space-y-2">
          <Link href="/dashboard" className="block py-2 px-4 rounded hover:bg-gray-700">Dashboard</Link>
          <Link href="/dashboard/orders" className="block py-2 px-4 rounded hover:bg-gray-700">Orders</Link>
          <Link href="/dashboard/products" className="block py-2 px-4 rounded hover:bg-gray-700">Products</Link>
          <Link href="#" className="block py-2 px-4 rounded hover:bg-gray-700">Customers</Link>
        </nav>
        <div className="p-4 border-t border-gray-700">
          <Link href="/" className="block text-sm text-center text-gray-400 hover:text-white">Back to Site</Link>
        </div>
      </div>
      {/* Main Content */}
      <div className="flex-1 p-8 overflow-y-auto">
        {children}
      </div>
    </div>
  );
}

// Protect the entire admin dashboard section
export default function ProtectedAdminLayout({ children }) {
  return (
    <ProtectedRoute>
      <AdminLayout>{children}</AdminLayout>
    </ProtectedRoute>
  );
}