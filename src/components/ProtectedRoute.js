// src/components/ProtectedRoute.js
'use client';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function ProtectedRoute({ children }) {
  const { currentUser } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!currentUser) {
      router.push('/'); // Redirect to homepage if not logged in
    }
  }, [currentUser, router]);

  if (!currentUser) {
    return (
      <div className="text-center py-20">
        <p>You must be logged in to view this page. Redirecting...</p>
      </div>
    );
  }

  return children;
}