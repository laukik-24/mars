"use client";
// pages/auth.tsx
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import supabase from '../../../utils/client';

const AuthPage = () => {
  const [state, setState] = useState<'login' | 'signup'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null); // Added error state
  const router = useRouter();

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null); // Reset error on new submission

    try {
      let response;
      if (state === 'signup') {
        // Sign Up user
        response = await supabase.auth.signUp({
          email,
          password,
        });
        if (response.error) {
          throw new Error(response.error.message);
        }
        alert('Signup successful! Please check your email for verification.');
        setState('login'); // Switch to login after signup
      } else {
        // Log In user
        response = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (response.error) {
          throw new Error(response.error.message);
        }
        router.push('/dashboard'); // Redirect to dashboard after successful login
      }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl text-center">
        {state === 'login' ? 'Login' : 'Sign Up'}
      </h1>

      {error && (
        <div className="text-red-500 text-center mb-4">
          <p>{error}</p>
        </div>
      )}

      <form onSubmit={handleAuth} className="max-w-sm mx-auto">
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 mt-1 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 mt-1 border border-gray-300 rounded"
            required
          />
        </div>
        <button
          type="submit"
          className={`w-full py-2 px-4 bg-blue-500 text-white rounded ${
            loading ? 'opacity-50' : ''
          }`}
          disabled={loading}
        >
          {loading ? 'Processing...' : state === 'login' ? 'Login' : 'Sign Up'}
        </button>
      </form>

      <p className="text-center mt-4 text-sm text-gray-600">
        {state === 'login' ? "Don't have an account?" : 'Already have an account?'}
        <span
          className="text-blue-500 cursor-pointer"
          onClick={() => setState(state === 'login' ? 'signup' : 'login')}
        >
          {state === 'login' ? 'Sign Up' : 'Login'}
        </span>
      </p>
    </div>
  );
};

export default AuthPage;
