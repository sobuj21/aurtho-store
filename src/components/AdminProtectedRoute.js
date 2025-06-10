// src/components/AdminProtectedRoute.js
'use client';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function AdminProtectedRoute({ children }) {
  const { currentUser, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // Don't do anything while auth state is loading
    if (loading) {
      return;
    }

    // If there is no logged-in user, or if the user's ID does not match the admin ID, redirect them.
    if (!currentUser || currentUser.uid !== process.env.NEXT_PUBLIC_ADMIN_UID) {
      router.push('/admin'); // Redirect to the admin login page
    }
  }, [currentUser, loading, router]);

  // While loading or if the user is not the admin, show a loading message.
  if (loading || !currentUser || currentUser.uid !== process.env.NEXT_PUBLIC_ADMIN_UID) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-600">Loading or Access Denied...</p>
      </div>
    );
  }

  // If the checks pass, show the protected content (the dashboard).
  return children;
}