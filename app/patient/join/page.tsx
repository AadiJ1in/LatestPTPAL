"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function PatientJoin() {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleJoin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Simulate validation
    // In real app: Verify code against Supabase 'invites' table
    setTimeout(() => {
      if (code.trim() === "") {
        setError("Please enter a valid invite code.");
        setLoading(false);
        return;
      }
      
      // Success flow - Redirect to registration or dashboard
      // If user exists, go to login. If new, go to register.
      router.push('/patient/register'); // Assuming registration flow
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-ptpal-bg flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md bg-slate-800 border border-slate-700 p-8 rounded-2xl shadow-2xl"
      >
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-ptpal-accent rounded-full flex items-center justify-center text-3xl mx-auto mb-4">🔗</div>
          <h1 className="text-2xl font-bold text-white">Join PTPAL</h1>
          <p className="text-slate-400 mt-2">Enter your therapist's invite code to begin recovery.</p>
        </div>

        <form onSubmit={handleJoin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Invite Code</label>
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value.toUpperCase())}
              placeholder="PTPAL-XXXX-XXXX-XXXX"
              className="w-full bg-slate-900 border border-slate-600 text-white text-center text-xl font-mono tracking-widest p-4 rounded-lg focus:outline-none focus:border-ptpal-accent uppercase"
            />
          </div>

          {error && (
            <p className="text-red-400 text-sm text-center bg-red-900/20 p-2 rounded">{error}</p>
          )}

          <button 
            type="submit"
            disabled={loading}
            className="w-full bg-ptpal-accent hover:bg-violet-600 text-white font-bold py-3 px-6 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Verifying..." : "Join Now"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-xs text-slate-500">
            Don't have a code? Ask your physical therapist for one.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
