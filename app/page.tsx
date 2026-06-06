"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Shield, User, Activity, Star } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]" />
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>

      <div className="z-10 text-center max-w-5xl px-6">
        {/* Logo Area */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 flex justify-center"
        >
          <div className="flex items-center gap-3 bg-slate-800/50 px-6 py-3 rounded-full border border-slate-700 backdrop-blur-md">
            <span className="text-2xl">🏥</span>
            <span className="text-xl font-bold tracking-widest text-white">PTPAL</span>
          </div>
        </motion.div>

        {/* Hero Text */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight"
        >
          Recovery is an <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400">
            Adventure
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-2xl text-slate-400 mb-12 max-w-2xl mx-auto font-light"
        >
          Turn your physical therapy into an RPG. Earn XP, defeat bosses, and unlock your full potential.
        </motion.p>

        {/* Main Actions */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-16">
          {/* Patient Button */}
          <Link href="/patient/join" className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative flex items-center gap-4 bg-slate-900 hover:bg-slate-800 p-8 rounded-2xl border border-slate-700 transition-all transform group-hover:-translate-y-1">
              <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center text-3xl border border-purple-500/50">
                🦸
              </div>
              <div className="text-left">
                 <h3 className="text-2xl font-bold text-white">Start Recovery</h3>
                 <p className="text-slate-400 text-sm">Join with invite code</p>
              </div>
            </div>
          </Link>

          {/* Therapist Button */}
          <Link href="/therapist/login" className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative flex items-center gap-4 bg-slate-900 hover:bg-slate-800 p-8 rounded-2xl border border-slate-700 transition-all transform group-hover:-translate-y-1">
              <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center text-3xl border border-yellow-500/50">
                👨‍⚕️
              </div>
              <div className="text-left">
                 <h3 className="text-2xl font-bold text-white">Provider Portal</h3>
                 <p className="text-slate-400 text-sm">Manage patients</p>
              </div>
            </div>
          </Link>
        </div>

        {/* Features Strip */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          {[
            { icon: "🎮", title: "Gamified" },
            { icon: "🤖", title: "AI Tracking" },
            { icon: "🛡️", title: "HIPAA Secure" },
            { icon: "🏆", title: "Leaderboards" }
          ].map((f, i) => (
            <div key={i} className="bg-slate-800/30 border border-slate-700/50 p-4 rounded-xl flex flex-col items-center gap-2">
              <span className="text-2xl">{f.icon}</span>
              <span className="text-slate-300 font-medium">{f.title}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
