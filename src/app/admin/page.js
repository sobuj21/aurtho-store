// src/app/admin/page.js
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';

export default function AdminLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  const { login } = useAuth();

  const handleAdminLogin = async (e) => {
    e.preventDefault();
    setError('');

    // This is a simple, non-secure check. In a real app, this should be a server-side check for an admin role.
    if (email === 'admin' && password === 'Eakramahmad@8601#') {
      try {
        // We log in with a dummy account to establish an auth session.
        // In a real app, you would have a dedicated admin account in Firebase.
        await login('admin@aurtho.com', 'AdminPassword123'); // Use a fake or real Firebase account for session
        router.push('/dashboard');
      } catch (err) {
        // This catch block handles cases where the dummy Firebase login fails.
        // For this prototype, we'll force a redirect anyway for demonstration.
        console.warn("Dummy admin login failed, but redirecting for prototype purposes.", err);
        router.push('/dashboard');
      }
    } else {
      setError('Invalid admin credentials.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold text-center mb-6">Aurtho Admin Login</h1>
        {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
        <form onSubmit={handleAdminLogin}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <input 
              type="text" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full p-2 border rounded text-gray-900"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input 
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
              className="mt-1 w-full p-2 border rounded text-gray-900"
            />
          </div>
          <button type="submit" className="w-full bg-gray-800 text-white p-3 rounded hover:bg-gray-700">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}