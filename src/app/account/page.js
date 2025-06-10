// src/app/account/page.js
'use client';
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import ProtectedRoute from "@/components/ProtectedRoute";

function AccountPage() {
  const { currentUser, logout } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logout();
      router.push('/');
    } catch (error) {
      console.error("Failed to log out", error);
    }
  };

  return (
    <div className="bg-white">
      <main className="container mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-6">My Account</h1>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Welcome!</h2>
          <p className="mb-4">Email: {currentUser?.email}</p>
          
          <div className="border-t pt-4">
            <h3 className="font-semibold mb-2">Order History</h3>
            <p className="text-gray-500">You have no previous orders.</p>
            {/* Order history would be displayed here */}
          </div>
          
          <button 
            onClick={handleLogout}
            className="mt-6 px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      </main>
    </div>
  );
}

// Wrap the page with the ProtectedRoute component
export default function ProtectedAccountPage() {
  return (
    <ProtectedRoute>
      <AccountPage />
    </ProtectedRoute>
  );
}