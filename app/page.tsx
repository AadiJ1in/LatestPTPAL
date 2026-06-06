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
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleStart = () => {
    // Add custom click feedback here
    window.location.href = "/patient/join";
  };

  return (
    <main className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#0F172A] text-white">
      
      {/* ===================== BACKGROUND ===================== */}
      
      {/* Deep Navy Base */}
      <div className="absolute inset-0 bg-[#0F172A]" />
      
      {/* Purple Gradient Lighting (Top Left) */}
      <div className="absolute top-[-20%] left-[-20%] w-[80%] h-[80%] bg-purple-900/30 rounded-full blur-[120px]" />
      
      {/* Blue Gradient Lighting (Bottom Right) */}
      <div className="absolute bottom-[-20%] right-[-20%] w-[80%] h-[80%] bg-indigo-900/20 rounded-full blur-[120px]" />
      
      {/* Faint Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      {/* Stars Background */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/20 rounded-full"
          initial={{ opacity: Math.random() * 0.5 }}
          animate={{ 
            y: [0, -20, 0],
            opacity: [0.2, 0.8, 0.2] 
          }}
          transition={{ 
            duration: 3 + Math.random() * 2, 
            repeat: Infinity,
            delay: Math.random() * 2
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* ===================== CONTENT ===================== */}
      
      <div className="relative z-10 flex flex-col items-center w-full max-w-md px-6 pt-20 pb-8">
        
        {/* ===================== MASCOT AREA ===================== */}
        
        <div className="relative w-full h-[45vh] flex items-center justify-center mb-8">
          
          {/* Glow Behind Cheetah */}
          <motion.div 
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute w-64 h-64 bg-purple-600/20 rounded-full blur-3xl"
          />
          
          {/* THE CHEETAH MASCOT */}
          {/* Note: Replace this src with your actual Cheetah image/png with transparent background */}
          <motion.div
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 2, 0, -2, 0]
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="relative w-56 h-56"
          >
            {/* Placeholder Cheetah - use an image here */}
            <img 
              src="https://cdn.dribbble.com/users/4803203/screenshots/15699809/media/4f5cb11bc30747e7c0c9d6c9287f2b3c.png?resize=400x300&vertical=center" 
              alt="Pace the Cheetah"
              className="w-full h-full object-contain drop-shadow-2xl"
            />
            
            {/* Blink Overlay (Optional for image) */}
            <motion.div 
              className="absolute top-[35%] left-[42%] w-[16%] h-[4%] bg-[#0F172A]/0"
              animate={{ scaleY: [1, 0.1, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            
            {/* Sparkles appearing around Cheetah */}
            <AnimatePresence>
              {[...Array(5)].map((_, i) => (
                showStars[i] !== undefined && (
                  <motion.div
                    key={i}
                    initial={{ opacity: 1, x: 0, y: 0, scale: 0 }}
                    animate={{ opacity: 0, y: -60, x: (i - 2) * 20, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5 }}
                    className="absolute text-2xl"
                    style={{ 
                      left: '50%', 
                      top: '40%', 
                      transform: `translateX(${(i - 2) * 30}px)` 
                    }}
                  >
                    ✨
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
        
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
            whileTap={{ scale: 0.95 }}
            onClick={handleStart}
            className="w-full py-4 px-8 rounded-full font-bold text-lg text-white btn-glow flex items-center justify-center gap-2"
          >
            Start My Recovery
            <span className="text-xl">🚀</span>
          </motion.button>
        </Link>
        
        {/* ===================== TRUST BADGE ===================== */}
        
        <div className="mt-12 flex items-center justify-center gap-2 text-xs text-slate-500">
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
