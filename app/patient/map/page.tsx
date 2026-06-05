"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const WORLDS = [
  { id: "castle", name: "Castle Kingdom", color: "border-red-500", bg: "bg-red-500/20", icon: "🏰", boss: "Dragon Emperor", status: "unlocked", day: 30 },
  { id: "forest", name: "Mystic Forest", color: "border-green-500", bg: "bg-green-500/20", icon: "🌲", boss: "Forest Titan", status: "locked", day: 0 },
  { id: "sky", name: "Sky Isles", color: "border-blue-500", bg: "bg-blue-500/20", icon: "☁️", boss: "Sky Dragon", status: "locked", day: 0 },
  { id: "cyber", name: "Cyber City", color: "border-purple-500", bg: "bg-purple-500/20", icon: "🏙️", boss: "Quantum Titan", status: "locked", day: 0 },
  { id: "mountain", name: "Mountain Realm", color: "border-slate-500", bg: "bg-slate-500/20", icon: "🏔️", boss: "Ancient Mammoth", status: "locked", day: 0 },
];

export default function WorldMap() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-slate-900 p-4 relative overflow-hidden">
      <header className="flex justify-between items-center mb-8 text-white">
         <button onClick={() => router.back()} className="text-slate-400 hover:text-white">← Back</button>
         <h1 className="text-xl font-bold">Adventure Map</h1>
         <div className="w-8"></div>
      </header>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Path Progression Line */}
        <div className="hidden md:block absolute left-1/2 top-20 bottom-20 w-1 bg-slate-700 -translate-x-1/2 z-0" />

        <div className="space-y-12 relative z-10">
          {WORLDS.map((world, index) => (
            <motion.div
              key={world.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative flex ${index % 2 === 0 ? 'justify-end' : 'justify-start'} md:justify-center`}
            >
              <div 
                className={`
                  w-full md:w-96 p-6 rounded-2xl border-2 backdrop-blur-md cursor-pointer
                  ${world.status === 'unlocked' ? world.color + ' ' + world.bg : 'border-slate-700 bg-slate-800/50 opacity-50 cursor-not-allowed'}
                  hover:scale-105 transition-transform
                `}
              >
                <div className="flex items-center gap-4">
                   <div className="text-4xl">{world.icon}</div>
                   <div className="flex-1">
                      <h3 className="text-xl font-bold text-white">{world.name}</h3>
                      <p className="text-sm text-slate-400">
                        {world.status === 'unlocked' ? `Current Boss: ${world.boss}` : 'Locked'}
                      </p>
                   </div>
                   {world.status === 'unlocked' && (
                      <div className="bg-white/10 px-3 py-1 rounded-full text-xs font-bold text-emerald-400">
                         Active
                      </div>
                   )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
