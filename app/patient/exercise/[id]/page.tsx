"use client";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X, Volume2, Camera } from "lucide-react";
import Link from "next/link";

// Mock Data for the first exercise
const exerciseData = {
  name: "Straight Leg Raise",
  gameName: "Rocket Launch 🚀",
  description: "Raise your leg to power the rocket!",
  targetReps: 10,
  currentReps: 0,
  score: 0,
  rank: "B"
};

export default function ExercisePage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [isReady, setIsReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [reps, setReps] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [gameOver, setGameOver] = useState(false);
  
  // Video Refs
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isPlaying && !gameOver) {
      // Simulate rep detection
      const interval = setInterval(() => {
        setReps((prev) => {
          if (prev >= 10) {
            setGameOver(true);
            clearInterval(interval);
            return prev;
          }
          return prev + 1;
        });
        
        // Update Score and Feedback randomly
        const randomScore = Math.floor(Math.random() * 5) + 10;
        setScore(prev => prev + randomScore);
        
        const messages = ["Good!", "Perfect!", "Excellent!", "Great Form!"];
        setFeedback(messages[Math.floor(Math.random() * messages.length)]);
        
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [isPlaying, gameOver]);

  const startExercise = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "user" } });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setIsReady(true);
      }
    } catch (err) {
      console.error("Camera error", err);
      setIsReady(true); // Fallback if no camera
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col relative overflow-hidden">
      {/* Video Layer (Background) */}
      <div className="absolute inset-0 z-0 bg-black">
        <video 
          ref={videoRef}
          autoPlay 
          playsInline 
          muted 
          className="w-full h-full object-cover opacity-30 grayscale"
        />
        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      {/* Top HUD */}
      <header className="relative z-20 p-4 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent">
        <button onClick={() => router.back()} className="p-2 bg-slate-800/50 rounded-full backdrop-blur">
          <X size={20} />
        </button>
        
        <div className="text-center">
          <h1 className="text-sm font-bold text-purple-400">{exerciseData.gameName}</h1>
          <p className="text-xs text-slate-400">{exerciseData.name}</p>
        </div>

        <div className="flex gap-2">
          <button className="p-2 bg-slate-800/50 rounded-full backdrop-blur">
            <Volume2 size={20} />
          </button>
        </div>
      </header>

      {/* Main Game Area */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center p-4">
        
        {/* Score Display */}
        <div className="absolute top-20 left-4 right-4 flex justify-between items-start">
          <div className="bg-slate-900/60 backdrop-blur-md p-3 rounded-xl border border-slate-700 min-w-[100px]">
            <div className="text-xs text-slate-400">REPS</div>
            <div className="text-2xl font-bold">{reps} <span className="text-sm text-slate-500">/ {exerciseData.targetReps}</span></div>
          </div>
          <div className="bg-slate-900/60 backdrop-blur-md p-3 rounded-xl border border-slate-700 min-w-[100px] text-right">
            <div className="text-xs text-slate-400">SCORE</div>
            <div className="text-2xl font-bold text-yellow-400">{score}</div>
          </div>
        </div>

        {/* Feedback Overlay */}
        <AnimatePresence>
          {feedback && isPlaying && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="absolute top-1/3 text-3xl font-bold text-white drop-shadow-lg"
            >
              {feedback}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Game Character / Visual */}
        <div className="relative w-48 h-64 mb-8">
          {/* Rocket Visual */}
          <motion.div 
            animate={{ y: isPlaying ? -reps * 10 : 0 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="text-8xl absolute bottom-0 left-0 right-0 flex justify-center"
          >
            🚀
          </motion.div>
          {/* Stars passing by effect */}
          {isPlaying && (
            <div className="absolute inset-0 overflow-hidden rounded-full">
               {[...Array(5)].map((_, i) => (
                 <motion.div 
                   key={i}
                   initial={{ y: -50, opacity: 0 }}
                   animate={{ y: 300, opacity: [0, 1, 0] }}
                   transition={{ repeat: Infinity, duration: 1 + i * 0.5, delay: i * 0.2 }}
                   className="absolute w-1 h-1 bg-white rounded-full"
                   style={{ left: `${Math.random() * 100}%` }}
                 />
               ))}
            </div>
          )}
        </div>

        {/* Game Over Screen */}
        <AnimatePresence>
          {gameOver && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute inset-0 z-30 bg-slate-900/90 flex items-center justify-center backdrop-blur-md"
            >
              <div className="bg-slate-800 p-8 rounded-3xl border border-purple-500 text-center max-w-sm w-full shadow-2xl shadow-purple-900/50">
                <div className="text-6xl mb-4">🏆</div>
                <h2 className="text-3xl font-bold text-white mb-2">Quest Complete!</h2>
                <p className="text-slate-400 mb-6">You launched the rocket!</p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                   <div className="bg-slate-900 p-3 rounded-xl">
                      <div className="text-xs text-slate-500">Score</div>
                      <div className="text-xl font-bold text-yellow-400">{score}</div>
                   </div>
                   <div className="bg-slate-900 p-3 rounded-xl">
                      <div className="text-xs text-slate-500">Rank</div>
                      <div className="text-xl font-bold text-purple-400">S</div>
                   </div>
                </div>

                <div className="flex gap-4">
                   <button onClick={() => router.push('/patient/dashboard')} className="flex-1 bg-slate-700 hover:bg-slate-600 py-3 rounded-xl font-bold">
                      Exit
                   </button>
                   <button className="flex-1 bg-purple-600 hover:bg-purple-500 py-3 rounded-xl font-bold">
                      Replay
                   </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Bottom Controls */}
      <div className="relative z-10 p-6 bg-gradient-to-t from-black to-transparent">
        {!isPlaying ? (
          <button 
            onClick={() => {
              startExercise();
              setIsPlaying(true);
            }}
            className="w-full bg-purple-600 hover:bg-purple-500 text-white font-bold py-4 rounded-2xl text-xl shadow-lg shadow-purple-900/50 transform transition hover:scale-[1.02]"
          >
            Start Exercise
          </button>
        ) : !gameOver && (
          <div className="flex justify-center gap-4">
             <button className="bg-red-500/20 text-red-400 border border-red-500/50 px-6 py-3 rounded-xl">
                Stop
             </button>
          </div>
        )}
      </div>
    </div>
  );
}
