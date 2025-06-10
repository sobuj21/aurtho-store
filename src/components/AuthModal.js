// src/components/AuthModal.js
'use client';
import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';

export default function AuthModal({ closeModal }) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const { signup, login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    try {
      if (isLogin) {
        await login(email, password);
        setMessage('Logged in successfully!');
        setTimeout(closeModal, 1000);
      } else {
        await signup(email, password);
        setMessage('Account created! Please log in.');
        setIsLogin(true); // Switch to login view after signup
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md relative">
        <button onClick={closeModal} className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl">&times;</button>
        <h2 className="text-2xl font-bold mb-6 text-center">{isLogin ? 'Login to Aurtho' : 'Create an Account'}</h2>
        
        {error && <p className="bg-red-100 text-red-700 p-3 rounded mb-4 text-sm">{error}</p>}
        {message && <p className="bg-green-100 text-green-700 p-3 rounded mb-4 text-sm">{message}</p>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email Address</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border rounded text-gray-900" 
              required 
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border rounded text-gray-900" 
              required 
            />
          </div>
          <button type="submit" className="w-full bg-gray-800 text-white p-3 rounded hover:bg-gray-700">
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>

        <p className="text-center text-sm mt-4">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button onClick={() => setIsLogin(!isLogin)} className="text-teal-600 hover:underline ml-1">
            {isLogin ? 'Sign Up' : 'Log In'}
          </button>
        </p>

        <div className="text-center text-gray-500 text-xs my-4">OR</div>

        {/* Placeholder Social Login Buttons */}
        <div className="flex flex-col space-y-2">
          <button className="w-full bg-blue-600 text-white p-3 rounded">Login with Facebook</button>
          <button className="w-full bg-red-500 text-white p-3 rounded">Login with Google</button>
        </div>
      </div>
    </div>
  );
}