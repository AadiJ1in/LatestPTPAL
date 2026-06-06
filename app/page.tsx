"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CoverPage() {
  return (
    <div className="min-h-screen w-full bg-[#0F172A] flex flex-col items-center justify-center">
      
      {/* BACKGROUND */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-900/15 rounded-full blur-[120px]" />
        
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/30 rounded-full"
            animate={{ y: [0, -40, 0], opacity: [0.1, 0.5, 0.1] }}
            transition={{ duration: 5 + Math.random() * 4, repeat: Infinity, delay: Math.random() * 4 }}
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
            }}
          />
        ))}
      </div>

      {/* CENTERED CONTENT */}
      <main className="relative z-10 flex flex-col items-center justify-center px-6 py-12 w-full">
        
        {/* LOGO */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h1 className="text-4xl font-black text-white tracking-tight">PTPAL</h1>
        </motion.div>

        {/* MASCOT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-64 h-64 md:w-80 md:h-80 mb-10 relative"
        >
          <div className="absolute inset-0 bg-purple-600/20 rounded-full blur-3xl" />
          <img src="/cheetah.png" alt="Pace the Cheetah" className="w-full h-full object-contain" />
        </motion.div>

        {/* HEADLINE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mb-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            LEVEL UP YOUR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              RECOVERY
            </span>
          </h2>
        </motion.div>

        {/* SUBHEADLINE */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-slate-400 text-lg text-center mb-10 max-w-md"
        >
          Complete physical therapy exercises, earn rewards, and recover alongside Pace the Cheetah.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col items-center gap-4 w-full"
        >
          <Link href="/patient/join" className="w-full max-w-sm">
            <button className="w-full py-4 px-8 rounded-full font-bold text-lg text-slate-900 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 shadow-lg shadow-amber-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              Start My Recovery
            </button>
          </Link>
          
          <button className="py-3 px-8 rounded-full font-medium text-slate-300 border border-slate-600 hover:border-slate-400 transition-colors"
          >
            Watch Demo
          </button>
        </motion.div>

      </main>
    </div>
  );
}
