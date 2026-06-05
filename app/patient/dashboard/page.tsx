"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

// Mock Data - In a real Supabase app, this comes from your database
const patientData = {
  name: "Hero User",
  level: 8,
  xp: 6340,
  xpToNext: 10000,
  streak: 7,
  currentWorld: "Castle Kingdom",
  campaignProgress: 45,
  nextBoss: "Iron Knight",
  daysLeft: 12
};

export default function PatientDashboard() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-ptpal-bg text-white p-4 md:p-8">
      {/* Header */}
      <header className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold">Welcome back, {patientData.name}</h1>
          <p className="text-slate-400 text-sm">Current Streak: <span className="text-orange-500 font-bold">{patientData.streak} Days 🔥</span></p>
        </div>
        <Link href="/patient/character">
           <div className="h-10 w-10 bg-purple-600 rounded-full flex items-center justify-center font-bold border-2 border-white cursor-pointer">
            L{patientData.level}
          </div>
        </Link>
      </header>

      {/* Main Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* XP Card */}
        <div className="bg-ptpal-card p-6 rounded-2xl border border-slate-700 relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-600 to-purple-400" />
          <div className="flex justify-between items-end mb-2">
            <h3 className="text-violet-400 font-bold">Experience</h3>
            <span className="text-xl font-bold">{patientData.xp}/{patientData.xpToNext}</span>
          </div>
          <div className="w-full bg-slate-700 h-4 rounded-full overflow-hidden mt-2">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${(patientData.xp / patientData.xpToNext) * 100}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-violet-600 to-purple-400"
            />
          </div>
          <p className="text-xs text-slate-400 mt-2 text-right">Level {patientData.level + 1} in 3 days</p>
        </div>

        {/* Boss Encounter Card */}
        <div className="bg-ptpal-card p-6 rounded-2xl border border-slate-700 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/10 rounded-full blur-3xl" />
          <div className="flex justify-between items-start">
            <h3 className="text-red-400 font-bold">Boss Encounter</h3>
            <span className="text-xs bg-red-900 text-red-200 px-2 py-1 rounded">Day 10</span>
          </div>
          <p className="text-2xl font-bold mt-2 text-slate-200">{patientData.nextBoss}</p>
          <p className="text-slate-400 text-sm">Appears in {patientData.daysLeft} days</p>
          <div className="mt-4 flex items-center gap-2">
             <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                <div className="h-full bg-red-600 w-[60%]" />
             </div>
             <span className="text-xs font-mono text-red-400">60%</span>
          </div>
        </div>

        {/* World Map Card */}
        <div className="bg-ptpal-card p-6 rounded-2xl border border-slate-700">
          <h3 className="text-emerald-400 font-bold mb-2">Current World</h3>
          <div className="text-3xl mb-2">🏰 {patientData.currentWorld}</div>
          <div className="w-full bg-slate-700 h-2 rounded-full mt-3">
            <div className="h-full bg-emerald-500 w-[45%] rounded-full" />
          </div>
          <p className="text-xs text-slate-400 mt-2">Campaign Progress: {patientData.campaignProgress}%</p>
        </div>
      </div>

      {/* Quick Actions / Daily Quests */}
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          Today&apos;s Quests <span className="text-xs bg-purple-900 text-purple-200 px-2 py-1 rounded-full">3/5 Complete</span>
        </h2>
        <div className="grid gap-4">
          {/* Quest Item 1 */}
          <div className="bg-slate-800/50 p-4 rounded-xl flex justify-between items-center cursor-pointer hover:bg-slate-800 transition-colors border border-slate-700">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-ptpal-success flex items-center justify-center text-xl">✓</div>
              <div>
                <p className="font-bold">Morning Check-in</p>
                <p className="text-xs text-slate-400">Answer daily questions</p>
              </div>
            </div>
            <div className="text-ptpal-gold font-bold">+100 XP</div>
          </div>

          {/* Quest Item 2 */}
          <div onClick={() => router.push('/patient/exercise/1')} className="bg-slate-800/50 p-4 rounded-xl flex justify-between items-center cursor-pointer hover:bg-slate-800 transition-colors border border-slate-700">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center">🏋️</div>
              <div>
                <p className="font-bold">Straight Leg Raise</p>
                <p className="text-xs text-slate-400">10 Reps • Rocket Launch</p>
              </div>
            </div>
            <div className="text-ptpal-gold font-bold">+300 XP</div>
          </div>

           {/* Quest Item 3 */}
           <div className="bg-slate-800/30 p-4 rounded-xl flex justify-between items-center border border-slate-700/50 opacity-50 cursor-not-allowed">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center">⏳</div>
              <div>
                <p className="font-bold">Bridge</p>
                <p className="text-xs text-slate-400">Locked (Complete previous)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Placeholder */}
      <div className="fixed bottom-0 left-0 w-full bg-slate-900 border-t border-slate-700 p-4 flex justify-around z-50 md:hidden">
         <Link href="/patient/dashboard" className="text-purple-400">🏠</Link>
         <Link href="/patient/map" className="text-slate-400">🗺️</Link>
         <Link href="/patient/avatar" className="text-slate-400">🦸</Link>
         <Link href="/patient/profile" className="text-slate-400">⚙️</Link>
      </div>
    </div>
  );
}
