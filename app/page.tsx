"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CoverPage() {
  return (
    <main className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#0F172A] text-white">
      
      {/* ===================== BACKGROUND ===================== */}
      
      {/* Deep Navy Base */}
      <div className="absolute inset-0 bg-[#0F172A]" />
      
      {/* Purple Gradient Glow (Top) */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[120px]" />
      
      {/* Blue Gradient Glow (Bottom) */}
      <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-900/15 rounded-full blur-[120px]" />
      
      {/* Floating Particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-purple-400/30 rounded-full"
          animate={{ 
            y: [0, -40, 0],
            opacity: [0.1, 0.5, 0.1] 
          }}
          transition={{ 
            duration: 5 + Math.random() * 4, 
            repeat: Infinity,
            delay: Math.random() * 4
          }}
          style={{
            left: `${10 + Math.random() * 80}%`,
            top: `${10 + Math.random() * 80}%`,
          }}
        />
      ))}

      {/* ===================== CENTERED HERO CONTENT ===================== */}
      
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-2xl px-6 py-12">
        
        {/* 1. Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-black tracking-tight text-white">
            PTPAL
          </h1>
        </motion.div>

        {/* 2. Mascot (Placeholder - Replace with /cheetah.png) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-64 h-64 md:w-80 md:h-80 mb-10"
        >
          {/* Glow Behind */}
          <div className="absolute inset-0 bg-purple-600/20 rounded-full blur-3xl transform scale-75" />
          
          {/* Cheetah Image - Replace src with your image */}
          <img 
            src="/cheetah.png" 
            alt="Pace the Cheetah"
            className="w-full h-full object-contain drop-shadow-2xl"
          />
        </motion.div>

        {/* 3. Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mb-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white">
            LEVEL UP YOUR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              RECOVERY
            </span>
          </h2>
        </motion.div>

        {/* 4. Subheadline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-slate-400 text-lg md:text-xl mb-10 max-w-md leading-relaxed"
        >
          Complete physical therapy exercises, earn rewards, and recover alongside Pace the Cheetah.
        </motion.p>

        {/* 5. Primary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col items-center gap-4 w-full"
        >
          <Link href="/patient/join" className="w-full max-w-sm">
            <button className="w-full py-4 px-8 rounded-full font-bold text-lg text-slate-900 bg-gradient-to-r from-[#FBBF24] via-[#F59E0B] to-[#D97706] shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              Start My Recovery
            </button>
          </Link>
          
          {/* 6. Secondary CTA */}
          <button className="py-3 px-8 rounded-full font-medium text-slate-300 border border-slate-600 hover:border-slate-400 hover:text-white transition-colors duration-200"
          >
            Watch Demo
          </button>
        </motion.div>

      </div>
    </main>
  );
}
