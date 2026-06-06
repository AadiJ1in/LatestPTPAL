"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { Shield, Zap, Wind, Mountain, Cpu } from "lucide-react";

const CLASSES = [
  { 
    id: "warrior", 
    name: "Warrior", 
    theme: "Castle Kingdom", 
    focus: "Strength",
    desc: "Masters of might. Perfect for building raw power and endurance.",
    color: "from-red-500 to-orange-600",
    icon: "⚔️",
    stats: { str: 10, mob: 5, blk: 7 }
  },
  { 
    id: "ranger", 
    name: "Ranger", 
    theme: "Mystic Forest", 
    focus: "Mobility",
    desc: "Agile navigators. Ideal for balance and dynamic movement.",
    color: "from-green-500 to-emerald-700",
    icon: "🏹",
    stats: { str: 5, mob: 10, blk: 6 }
  },
  { 
    id: "mage", 
    name: "Mage", 
    theme: "Sky Isles", 
    focus: "Flexibility",
    desc: "Arcane scholars. Masters of flexibility and range of motion.",
    color: "from-blue-500 to-cyan-600",
    icon: "🔮",
    stats: { str: 4, mob: 8, blk: 5 }
  },
  { 
    id: "engineer", 
    name: "Engineer", 
    theme: "Cyber City", 
    focus: "Balance",
    desc: "Tech-savvy stabilizers. Best for proprioception drills.",
    color: "from-purple-500 to-violet-700",
    icon: "⚙️",
    stats: { str: 6, mob: 6, blk: 10 }
  },
  { 
    id: "guardian", 
    name: "Guardian", 
    theme: "Mountain Realm", 
    focus: "Endurance",
    desc: "Unyielding protectors. Built for recovery and longevity.",
    color: "from-slate-500 to-slate-700",
    icon: "🛡️",
    stats: { str: 8, mob: 4, blk: 8 }
  }
];

export default function CharacterCreation() {
  const router = useRouter();
  const [selected, setSelected] = useState<string | null>(null);
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center p-4">
      <header className="w-full max-w-md mt-8 mb-4">
        <h1 className="text-3xl font-bold text-center">Choose Your Hero</h1>
        <p className="text-slate-400 text-center mt-2">Select the class that matches your goals</p>
        
        {/* Stepper */}
        <div className="flex justify-center gap-2 mt-6">
           <div className={`w-8 h-1 rounded-full ${step >= 1 ? 'bg-purple-500' : 'bg-slate-700'}`} />
           <div className={`w-8 h-1 rounded-full ${step >= 2 ? 'bg-purple-500' : 'bg-slate-700'}`} />
        </div>
      </header>

      <div className="flex-1 w-full max-w-md overflow-y-auto pb-24">
        <div className="grid gap-4">
          {CLASSES.map((char) => (
            <motion.div
              key={char.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelected(char.id)}
              className={`
                relative p-5 rounded-2xl border-2 cursor-pointer transition-all overflow-hidden
                ${selected === char.id 
                  ? 'border-purple-500 shadow-[0_0_20px_rgba(139,92,246,0.4)] bg-slate-800' 
                  : 'border-slate-700 bg-slate-800/50 hover:border-slate-500'}
              `}
            >
              {/* Background Gradient */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${char.color} opacity-20 blur-3xl rounded-full -mr-10 -mt-10`} />
              
              <div className="relative z-10 flex items-center gap-4">
                 <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${char.color} flex items-center justify-center text-3xl shadow-lg`}>
                    {char.icon}
                 </div>
                 <div className="flex-1">
                    <h3 className="text-lg font-bold flex items-center gap-2">
                      {char.name}
                      {selected === char.id && <span className="text-purple-400">✓</span>}
                    </h3>
                    <p className="text-xs text-purple-400">{char.theme} • {char.focus}</p>
                    <p className="text-xs text-slate-400 mt-1">{char.desc}</p>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Action */}
      <div className="fixed bottom-0 w-full p-4 bg-slate-900 border-t border-slate-800">
        <button 
          disabled={!selected}
          onClick={() => router.push('/patient/dashboard')}
          className={`
            w-full py-4 rounded-2xl font-bold text-lg transition-all
            ${selected 
              ? 'bg-purple-600 hover:bg-purple-500 text-white shadow-lg shadow-purple-900/50' 
              : 'bg-slate-800 text-slate-500 cursor-not-allowed'}
          `}
        >
          Confirm Selection
        </button>
      </div>
    </div>
  );
}
