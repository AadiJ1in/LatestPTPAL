"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function TherapistLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In real app: Supabase Auth signInWithPassword
    router.push('/therapist/dashboard');
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-slate-800 p-8 rounded-2xl border border-slate-700">
        <h1 className="text-2xl font-bold text-white mb-6 text-center">Provider Login</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm text-slate-400 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 text-white p-3 rounded-lg focus:outline-none focus:border-ptpal-gold"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-slate-400 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 text-white p-3 rounded-lg focus:outline-none focus:border-ptpal-gold"
              required
            />
          </div>
          <button type="submit" className="w-full bg-ptpal-gold hover:bg-yellow-500 text-black font-bold py-3 rounded-lg mt-4">
            Login
          </button>
        </form>
        <p className="text-center text-sm text-slate-500 mt-4">
          <a href="#" className="hover:text-white">Forgot Password?</a>
        </p>
      </div>
    </div>
  );
}
