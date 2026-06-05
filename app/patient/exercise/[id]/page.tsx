"use client";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import * as poseDetection from "@tensorflow-models/pose-detection";
import "@tensorflow/tfjs-backend-webgl";

export default function ExercisePage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [score, setScore] = useState(0);
  const [reps, setReps] = useState(0);
  const [feedback, setFeedback] = useState("Get Ready...");
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Simple Camera Setup
    async function setupCamera() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ 
          video: { width: 640, height: 480 } 
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.onloadedmetadata = () => {
            videoRef.current!.play();
            setIsCameraReady(true);
            detectPose();
          };
        }
      } catch (err) {
        console.error("Camera error:", err);
        setFeedback("Camera Error: Please allow camera access.");
      }
    }
    setupCamera();
  }, []);

  // Placeholder for Pose Detection Logic
  // In production, you run the MediaPipe model here
  async function detectPose() {
    if (!isCameraReady || !videoRef.current) return;

    // The actual AI detection happens in a loop here
    // For this demo, we simulate the game loop
    const interval = setInterval(() => {
      setReps((prev) => {
        const newReps = prev + 1;
        
        // Simulate scoring
        if (newReps % 3 === 0) {
            setFeedback("Perfect Form! +15 Damage 🔥");
            setScore((s) => s + 15);
        } else {
            setFeedback("Good Job! +10 Damage");
            setScore((s) => s + 10);
        }
        
        if (newReps >= 10) {
            clearInterval(interval);
            setFeedback("Quest Complete! Returning to dashboard...");
            setTimeout(() => router.push('/patient/dashboard'), 3000);
        }
        return newReps;
      });
    }, 2000);
  }

  return (
    <div className="min-h-screen bg-ptpal-bg text-white flex flex-col">
      {/* Top HUD */}
      <div className="p-4 flex justify-between items-center bg-slate-900 z-10">
        <h1 className="text-lg font-bold text-purple-400">ROCKET LAUNCH 🚀</h1>
        <div className="flex gap-4 text-sm">
            <div>Reps: <span className="font-mono text-xl">{reps}/10</span></div>
            <div>Score: <span className="font-mono text-xl text-yellow-400">{score}</span></div>
        </div>
      </div>

      {/* Main Game Area */}
      <div className="relative flex-grow flex flex-col items-center justify-center bg-black">
        
        {/* Video Element (Hidden usually, shown for debugging or side-by-side) */}
        <video 
            ref={videoRef} 
            className="absolute w-full h-full object-cover opacity-50"
            playsInline 
        />
        
        {/* Overlay Canvas for Game Graphics */}
        <canvas 
            ref={canvasRef} 
            className="absolute w-full h-full"
        />

        {/* Game Visuals Overlay - Example for Rocket Launch */}
        <div className="absolute bottom-20 w-full flex flex-col items-center">
             <motion.div 
                animate={{ y: -reps * 20 }} // Visual hook: Move rocket up based on reps
                className="text-6xl"
             >
                🚀
             </motion.div>
             <div className="mt-4 bg-slate-900/80 p-2 rounded-lg px-4 border border-purple-500">
                {feedback}
             </div>
        </div>

        {/* Camera Ready Status */}
        {!isCameraReady && (
            <div className="absolute inset-0 flex items-center justify-center bg-black z-20">
                <p className="animate-pulse">Initializing Camera...</p>
            </div>
        )}
      </div>
      
      {/* Control Bar */}
      <div className="p-4 bg-slate-900 flex justify-around">
        <button onClick={() => router.back()} className="text-slate-400">Exit</button>
        <button className="bg-red-600 px-6 py-2 rounded-full font-bold">STOP</button>
      </div>
    </div>
  );
}
