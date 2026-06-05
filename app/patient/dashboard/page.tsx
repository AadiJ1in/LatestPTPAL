"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";

// Mock Data
const patientData = {
  name: "Hero User",
  level: 8,
  xp: 6340,
  xpToNext: 10000,
  streak: 7,
  currentWorld: "Castle Kingdom",
  campaignProgress: 45, // Percent
  hp: 850,
  maxHp: 1000,
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
        <div className="h-10 w-10 bg-purple-600 rounded-full flex items-center justify-center font-bold">
          L{patientData.level}
        </div>
      </header>

      {/* Main Stats Card */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* XP Card */}
        <div className="bg-ptpal-card p-6 rounded-2xl border border-slate-700">
          <div className="flex justify-between items-end mb-2">
            <h3 className="text-violet-400 font-bold">Experience</h3>
            <span className="text-xl font-bold">{patientData.xp} / {patientData.xpToNext} XP</span>
          </div>
          <div className="w-full bg-slate-700 h-4 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${(patientData.xp / patientData.xpToNext) * 100}%` }}
              className="h-full bg-gradient-to-r from-violet-600 to-purple-400"
            />
          </div>
        </div>

        {/* Health/Boss Card */}
        <div className="bg-ptpal-card p-6 rounded-2xl border border-slate-700 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-20 h-20 bg-red-500/10 rounded-full blur-xl" />
          <h3 className="text-red-400 font-bold mb-2">Boss Encounter</h3>
          <p className="text-2xl font-bold mb-1">{patientData.nextBoss}</p>
          <p className="text-slate-400 text-sm">Appears in {patientData.daysLeft} days</p>
          {/* Boss HP Bar */}
          <div className="mt-4 w-full bg-slate-800 h-2 rounded-full">
            <div className="h-full bg-red-600 w-[85%]" />
          </div>
        </div>

        {/* World Progress */}
        <div className="bg-ptpal-card p-6 rounded-2xl border border-slate-700">
          <h3 className="
