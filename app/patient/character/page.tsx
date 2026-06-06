"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";

const CLASSES = [
  { 
    id: "warrior", 
    name: "Warrior", 
    theme: "Castle Kingdom", 
    focus: "Strength",
    desc: "Masters of might. Perfect for heavy rehab focusing on building raw power.",
    color: "from-red-500 to-orange-600",
    icon: "⚔️"
  },
  { 
    id: "ranger", 
    name: "Ranger", 
    theme: "Mystic Forest", 
    focus: "Mobility",
    desc: "Agile navigators. Ideal for balance training and dynamic movement.",
    color: "from-green-500 to-emerald-700",
    icon: "🏹"
  },
  { 
    id: "mage", 
    name: "Mage", 
    theme: "Sky Isles", 
    focus: "Flexibility",
    desc: "Arcane scholars. Masters of flexibility and range of motion.",
    color: "from-blue-500 to-cyan-600",
    icon: "🔮"
  },
  { 
    id: "engineer", 
    name: "Engineer", 
    theme: "Cyber City", 
    focus: "Balance",
    desc: "Tech-savvy stabilizers. Best for proprioception and stability drills.",
    color: "from-purple-500 to-violet-700",
    icon: "⚙️"
  },
  { 
    id: "guardian", 
    name: "Guardian", 
    theme: "Mountain Realm", 
    focus: "Endurance",
    desc: "Unyielding protectors. Built for high-repetition endurance and recovery.",
    color: "from-slate-500 to-slate-700",
    icon: "🛡️"
  }
];

export default function CharacterCreation() {
  const router = useRouter();
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-ptpal-bg text-white p-8 flex flex-col items-center">
      <div className="max-w-5xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-2">Choose Your Hero</h1>
          <p className="text-slate-400">Select the class that matches your recovery goals</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {CLASSES.map((charClass) => (
            <motion.div
              key={charClass.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelected(charClass.id)}
              className={`
                relative p-6 rounded-2xl border-2 cursor-pointer transition-all
                ${selected === charClass.id 
                  ? 'border-ptpal-gold bg-slate-800 shadow-[0_0_20px_rgba(245,158,11,0.3)]' 
                  : 'border-slate-700 bg-slate-800/50 hover:border-slate-500'}
              `}
            >
              <div className={`text-6xl mb-4 bg-gradient-to-br ${charClass.color} w-20 h-20 rounded-full flex items-center justify-center mx-auto`}>
                {charClass.icon}
              </div>
              <h3 className="text-xl font-bold text-center mb-1">{charClass.name}</h3>
              <p className="text-center text-sm text-ptpal-gold mb-4 font-medium">{charClass.theme}</p>
              <p className="text-sm text-center text-slate-400 mb-4">{charClass.desc}</p>
              <div className="text-center">
                  <span className="text-xs bg-slate-700 px-2 py-1 rounded text-slate-300">
                    Focus: {charClass.focus}
                </span>
            </div>
            </motion.div>
          ))}
        </div>

        {selected && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-10 text-center"
          >
            <p className="text-xl text-ptpal-gold mb-4 font-bold">Hero Selected!</p>
            <button 
              onClick={() => router.push('/patient/dashboard')}
              className="bg-ptpal-gold hover:bg-yellow-500 text-black font-bold py-3 px-12 rounded-xl text-lg transition-transform hover:scale-105"
            >
              Enter the Realm
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
