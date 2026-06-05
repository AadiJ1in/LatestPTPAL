"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-ptpal-bg text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600 rounded-full blur-[120px]" />
      </div>

      <div className="z-10 text-center max-w-4xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-emerald-400">
              PTPAL
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 font-light">
            Physical Therapy Adherence <span className="text-ptpal-gold font-bold">Gamified</span>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {/* Patient Portal Card */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-ptpal-card border border-slate-700 p-8 rounded-2xl shadow-2xl cursor-pointer hover:border-ptpal-accent transition-all"
          >
            <h2 className="text-3xl font-bold mb-2 text-ptpal-accent">Patient Portal</h2>
            <p className="text-slate-400 mb-6">Recover your world. Earn XP. Defeat bosses.</p>
            <Link href="/patient/join">
              <button className="w-full bg-ptpal-accent hover:bg-violet-600 text-white font-bold py-3 px-6 rounded-xl transition-all">
                Join Recovery Quest
              </button>
            </Link>
          </motion.div>

          {/* Therapist Portal Card */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-ptpal-card border border-slate-700 p-8 rounded-2xl shadow-2xl cursor-pointer hover:border-ptpal-gold transition-all"
          >
            <h2 className="text-3xl font-bold mb-2 text-ptpal-gold">Therapist Portal</h2>
            <p className="text-slate-400 mb-6">Manage patients, view analytics, assign roadmaps.</p>
            <Link href="/therapist/login">
              <button className="w-full bg-ptpal-gold hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-xl transition-all">
                Provider Login
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Security Badge */}
        <div className="mt-12 flex items-center justify-center gap-2 text-slate-500 text-sm">
          <span className="bg-slate-800 px-2 py-1 rounded border border-slate-700">HIPAA-Conscious</span>
          <span className="bg-slate-800 px-2 py-1 rounded border border-slate-700">AES-256</span>
          <span className="bg-slate-800 px-2 py-1 rounded border border-slate-700">TLS 1.3</span>
        </div>
      </div>
    </main>
  );
}
