// src/app/admin/page.js
'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';

export default function AdminLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { login, currentUser, logout } = useAuth();

  // This will watch for a successful login and redirect the admin
  useEffect(() => {
    if (currentUser && currentUser.uid === process.env.NEXT_PUBLIC_ADMIN_UID) {
      router.push('/dashboard');
    }
  }, [currentUser, router]);

  const handleAdminLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Attempt to log in using the real Firebase authentication
      const userCredential = await login(email, password);
      
      // After login, check if the user is the admin.
      if (userCredential.user.uid !== process.env.NEXT_PUBLIC_ADMIN_UID) {
        setError('This is not an admin account.');
        await logout(); // Log out the non-admin user immediately
      }
      // If it IS the admin, the useEffect hook above will handle the redirect.
    } catch (err) {
      setError('Invalid credentials or login failed.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-900">Aurtho Admin Login</h1>
        {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
        <form onSubmit={handleAdminLogin}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Admin Email</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full p-2 border rounded text-gray-900"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input 
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
              className="mt-1 w-full p-2 border rounded text-gray-900"
              required
            />
          </div>
          <button type="submit" disabled={loading} className="w-full bg-gray-800 text-white p-3 rounded hover:bg-gray-700 disabled:bg-gray-400 font-bold">
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
}