"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function CoverPage() {
  const [showStars, setShowStars] = useState<number[]>([]);
  
  // Trigger star burst periodically
  useEffect(() => {
    const interval = setInterval(() => {
      setShowStars(Array.from({ length: 5 }, (_, i) => i));
      setTimeout(() => setShowStars([]), 2000);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#0F172A] text-white">
      
      {/* ===================== BACKGROUND ===================== */}
      
      <div className="absolute inset-0 bg-[#0F172A]" />
      
      {/* Purple Gradient Lighting (Top Left) */}
      <div className="absolute top-[-10%] left-[-20%] w-[70%] h-[70%] bg-purple-900/30 rounded-full blur-[150px]" />
      
      {/* Blue Gradient Lighting (Bottom Right) */}
      <div className="absolute bottom-[-10%] right-[-20%] w-[70%] h-[70%] bg-indigo-900/20 rounded-full blur-[150px]" />
      
      {/* Faint Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      {/* Floating Particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/30 rounded-full"
          initial={{ opacity: Math.random() * 0.5 }}
          animate={{ 
            y: [0, -30, 0],
            opacity: [0.1, 0.6, 0.1] 
          }}
          transition={{ 
            duration: 4 + Math.random() * 3, 
            repeat: Infinity,
            delay: Math.random() * 3
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* ===================== CENTERED CONTENT ===================== */}
      
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-md px-6">
        
        {/* ===================== BRANDING ===================== */}
        
        <div className="text-center mb-8">
          <h1 className="text-5xl font-black tracking-tighter text-white mb-1">
            PTPAL
          </h1>
          <p className="text-sm font-medium tracking-[0.3em] text-purple-400 uppercase">
            Recovery Quest
          </p>
        </div>
        
        {/* ===================== HEADLINE ===================== */}
        
        <div className="text-center mb-4">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight text-white">
            Recover Faster.<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Play Every Day.
            </span>
          </h2>
        </div>
        
        {/* ===================== SUPPORTING TEXT ===================== */}
        
        <p className="text-center text-slate-400 text-sm leading-relaxed max-w-xs mb-8">
          Turn physical therapy into an adventure. Complete exercises, earn rewards, unlock milestones, and recover alongside Pace the Cheetah.
        </p>
        
        {/* ===================== CALL TO ACTION ===================== */}
        
        <Link href="/patient/join" className="w-full">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.96 }}
            className="w-full py-4 px-8 rounded-full font-bold text-lg text-white bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] shadow-lg shadow-purple-500/30 flex items-center justify-center gap-2"
          >
            Start My Recovery
            <span className="text-xl">🚀</span>
          </motion.button>
        </Link>
        
        {/* ===================== TRUST BADGE ===================== */}
        
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs text-slate-500">
          <span>🔒</span>
          <span>HIPAA-Conscious</span>
          <span>•</span>
          <span>Therapist Guided</span>
          <span>•</span>
          <span>Evidence Based</span>
        </div>
        
      </div>
    </main>
  );
}
