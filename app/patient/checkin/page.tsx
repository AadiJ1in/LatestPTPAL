"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function DailyCheckIn() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<Record<string, number>>({});

  const updateAnswer = (question: string, value: number) => {
    setAnswers({ ...answers, [question]: value });
  };

  const questions = [
    { id: "pain", label: "Pain Level", min: "No Pain", max: "Severe" },
    { id: "energy", label: "Energy Level", min: "Exhausted", max: "Energized" },
    { id: "difficulty", label: "Exercise Difficulty", min: "Too Easy", max: "Too Hard" },
    { id: "sleep", label: "Sleep Quality", min: "Insomnia", max: "Restful" },
    { id: "confidence", label: "Recovery Confidence", min: "Doubtful", max: "Certain" },
  ];

  const submitCheckIn = () => {
    console.log("Submitting:", answers);
    // Save to Supabase here
    router.push('/patient/dashboard');
  };

  if (step === 1) {
    return (
      <div className="min-h-screen bg-ptpal-bg flex items-center justify-center p-4">
        <div className="w-full max-w-md text-center">
          <h1 className="text-4xl font-bold text-ptpal-gold mb-4">Daily Check-in</h1>
          <p className="text-slate-400 mb-8">Answer a few quick questions to tune your recovery difficulty.</p>
          <button 
            onClick={() => setStep(2)}
            className="w-full bg-ptpal-accent hover:bg-violet-600 text-white font-bold py-4 rounded-xl text-xl"
          >
            Start Check-in
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-ptpal-bg flex items-center justify-center p-4">
      <div className="w-full max-w-lg">
        {/* Progress Bar */}
        <div className="w-full bg-slate-800 h-2 rounded-full mb-8">
          <div className="bg-ptpal-gold h-2 rounded-full transition-all" style={{ width: `${(Object.keys(answers).length / questions.length) * 100}%` }} />
        </div>

        {questions.map((q, idx) => (
          <div key={q.id} className={Object.keys(answers).includes(q.id) ? "block" : "hidden"}>
             <h2 className="text-2xl font-bold text-white mb-8 text-center">{q.label}</h2>
             <input 
               type="range" 
               min="1"
               max="10"
               className="w-full h-4 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-ptpal-accent"
               onChange={(e) => updateAnswer(q.id, parseInt(e.target.value))}
             />
             <div className="flex justify-between text-sm text-slate-400 mt-2">
                <span>{q.min}</span>
                <span>{q.max}</span>
             </div>
          </div>
        ))}

        {Object.keys(answers).length === questions.length && (
          <button 
            onClick={submitCheckIn}
            className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 rounded-xl mt-8"
          >
            Complete Check-in
          </button>
        )}
      </div>
    </div>
  );
}
