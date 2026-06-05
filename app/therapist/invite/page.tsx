"use client";
import { useState } from "react";
import { Copy, CheckCircle, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function CreateInvite() {
  const [code, setCode] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);

  const generateCode = async () => {
    setLoading(true);
    // In production: Call Supabase Edge Function to create secure token
    setTimeout(() => {
      // Mocking the secure code generation
      const randomPart = () => Math.random().toString(36).substring(2, 6).toUpperCase();
      setCode(`PTPAL-${randomPart()}-${randomPart()}-${randomPart()}`);
      setLoading(false);
    }, 1000);
  };

  const copyToClipboard = () => {
    if (code) {
      navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-ptpal-bg text-white flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <h1 className="text-3xl font-bold mb-6">Generate Invite Code</h1>
        
        <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
          <p className="text-slate-400 mb-6">
            Generate a secure, one-time invite code for your patient to join PTPAL. 
            The code will expire in 48 hours.
          </p>

          {!code ? (
            <button 
              onClick={generateCode}
              disabled={loading}
              className="w-full bg-ptpal-accent hover:bg-violet-600 text-white font-bold py-4 px-6 rounded-xl transition-all disabled:opacity-50"
            >
              {loading ? "Generating Secure Code..." : "Generate New Code"}
            </button>
          ) : (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <div className="bg-slate-900 border-2 border-dashed border-slate-600 p-6 rounded-xl mb-6 relative">
                <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">Patient Invite Code</p>
                <p className="text-3xl font-mono font-bold text-ptpal-gold tracking-widest">{code}</p>
              </div>

              <div className="flex gap-4">
                <button 
                  onClick={copyToClipboard}
                  className="flex-1 bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2"
                >
                  {copied ? <CheckCircle size={20} /> : <Copy size={20} />}
                  {copied ? "Copied!" : "Copy Code"}
                </button>
                
                <button 
                  onClick={() => setCode(null)}
                  className="flex-1 bg-transparent border border-slate-600 hover:border-slate-400 text-white font-bold py-3 px-6 rounded-xl"
                >
                  Create Another
                </button>
              </div>

              <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-500">
                <Clock size={14} /> Expires in 48 hours
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
