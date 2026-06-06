"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Bell, Home, Map, User, Settings, Zap, Heart, Target, Trophy, Flame } from "lucide-react";
import Link from "next/link";

// Mock Data
const user = {
  name: "Hero",
  level: 8,
  xp: 6340,
  xpNeeded: 10000,
  world: "Castle Kingdom",
  hp: 850,
  maxHp: 1000,
  streak: 7,
  nextBoss: "Iron Knight",
  bossDay: 10
};

const quests = [
  { id: 1, title: "Morning Check-in", xp: 100, completed: true, icon: "📝" },
  { id: 2, title: "Straight Leg Raise", xp: 300, completed: false, icon: "🦵", type: "game" },
  { id: 3, title: "Bridge", xp: 250, completed: false, icon: "🌉", type: "game" },
  { id: 4, title: "Clamshell", xp: 200, completed: false, icon: "🐚", type: "game" },
];

export default function PatientDashboard() {
  const router = useRouter();
  const xpPercent = Math.round((user.xp / user.xpNeeded) * 100);

  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans pb-20">
      {/* Top Bar */}
      <header className="bg-slate-900/80 backdrop-blur-md border-b border-slate-800 p-4 sticky top-0 z-50">
        <div className="max-w-md mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
             <span className="text-xl font-bold">🏥</span>
             <span className="font-bold text-lg tracking-tight">PTPAL</span>
          </div>
          <button className="p-2 text-slate-400 hover:text-white relative">
            <Bell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
        </div>
      </header>

      <main className="max-w-md mx-auto p-4 space-y-6">
        {/* Profile Card */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-6 border border-slate-700 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/20 rounded-full blur-3xl -mr-10 -mt-10"></div>
          
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-6">
               <div>
                 <h1 className="text-2xl font-bold">Hello, {user.name}</h1>
                 <p className="text-slate-400 text-sm">{user.world} • Day 12</p>
               </div>
               <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 p-1">
                  <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center text-2xl font-bold">
                    {user.level}
                  </div>
               </div>
            </div>

            {/* XP Bar */}
            <div className="mb-2">
              <div className="flex justify-between text-xs text-slate-400 mb-1">
                <span>Level {user.level}</span>
                <span>{user.xp}/{user.xpNeeded} XP</span>
              </div>
              <div className="h-3 w-full bg-slate-800 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${xpPercent}%` }}
                  className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                />
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4 mt-6">
               <div className="bg-slate-800/50 p-3 rounded-2xl text-center border border-slate-700">
                  <Flame className="w-5 h-5 text-orange-500 mx-auto mb-1" />
                  <div className="text-lg font-bold">{user.streak}</div>
                  <div className="text-[10px] text-slate-400 uppercase">Streak</div>
               </div>
               <div className="bg-slate-800/50 p-3 rounded-2xl text-center border border-slate-700">
                  <Heart className="w-5 h-5 text-red-500 mx-auto mb-1" />
                  <div className="text-lg font-bold">{user.hp}/{user.maxHp}</div>
                  <div className="text-[10px] text-slate-400 uppercase">HP</div>
               </div>
               <div className="bg-slate-800/50 p-3 rounded-2xl text-center border border-slate-700">
                  <Trophy className="w-5 h-5 text-yellow-500 mx-auto mb-1" />
                  <div className="text-lg font-bold">{user.bossDay}</div>
                  <div className="text-[10px] text-slate-400 uppercase">Boss</div>
               </div>
            </div>
          </div>
        </div>

        {/* Today's Quests Section */}
        <div>
          <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
            Today's Quests <span className="text-xs bg-slate-800 text-slate-400 px-2 py-1 rounded-full">3/4 Done</span>
          </h2>
          
          <div className="space-y-3">
            {quests.map((quest) => (
              <div 
                key={quest.id}
                onClick={() => !quest.completed && quest.type === 'game' && router.push('/patient/exercise/1')}
                className={`
                  p-4 rounded-2xl flex items-center gap-4 transition-all
                  ${quest.completed 
                    ? 'bg-slate-800/30 border border-slate-800 opacity-60' 
                    : 'bg-slate-800 border border-slate-700 hover:border-purple-500 hover:scale-[1.02] cursor-pointer'}
                `}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${quest.completed ? 'bg-slate-700 text-slate-500' : 'bg-purple-600 text-white'}`}>
                  {quest.completed ? '✓' : quest.icon}
                </div>
                <div className="flex-1">
                   <h3 className={`font-bold ${quest.completed ? 'line-through text-slate-500' : 'text-white'}`}>{quest.title}</h3>
                   <p className="text-xs text-slate-400">+{quest.xp} XP</p>
                </div>
                {!quest.completed && (
                   <button className="bg-slate-700 hover:bg-slate-600 text-white p-2 rounded-lg">
                      ▶
                   </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Bottom Mobile Nav */}
      <nav className="fixed bottom-0 w-full bg-slate-900/90 backdrop-blur-md border-t border-slate-800 p-3 flex justify-around z-50">
        <Link href="/patient/dashboard" className="text-purple-400 p-2"><Home size={24} /></Link>
        <Link href="/patient/map" className="text-slate-400 p-2"><Map size={24} /></Link>
        <Link href="/patient/dashboard" className="text-slate-400 p-2"><Target size={24} /></Link>
<nav className="fixed bottom-0 w-full bg-slate-900/90 backdrop-blur-md border-t border-slate-800 p-3 flex justify-around z-50">
  <Link href="/patient/dashboard" className="text-purple-400 p-2 flex flex-col items-center">
    <Home size={24} />
    <span className="text-[10px] mt-1">Home</span>
  </Link>
  <Link href="/patient/map" className="text-slate-400 p-2 flex flex-col items-center hover:text-white transition-colors">
    <Map size={24} />
    <span className="text-[10px] mt-1">Map</span>
  </Link>
  <Link href="/patient/dashboard" className="text-slate-400 p-2 flex flex-col items-center hover:text-white transition-colors">
    <User size={24} />
    <span className="text-[10px] mt-1">Profile</span>
  </Link>
  <Link href="/patient/dashboard" className="text-slate-400 p-2 flex flex-col items-center hover:text-white transition-colors">
    <Settings size={24} />
    <span className="text-[10px] mt-1">Settings</span>
  </Link>
</nav>
