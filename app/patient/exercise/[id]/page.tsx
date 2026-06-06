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
  const detectorRef = useRef<any>(null);

  useEffect(() => {
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
            initAI();
          };
        }
      } catch (err) {
        console.error("Camera error:", err);
        setFeedback("Camera Error");
      }
    }
    setupCamera();
  }, []);

  async function initAI() {
    // Initialize MediaPipe
    const model = poseDetection.SupportedModels.MoveNet;
    const detector = await poseDetection.createDetector(model, {
      modelType: poseDetection.movenet.modelType.SINGLEPOSE_THUNDER
    });
    detectorRef.current = detector;
    startGameLoop();
  }

  async function startGameLoop() {
    if (!detectorRef.current || !videoRef.current || !canvasRef.current) return;

    // Simple Loop for Demo
    const interval = setInterval(async () => {
      const poses = await detectorRef.current.estimatePoses(videoRef.current!);
      
      // Logic: Check if person is detected
      if (poses.length > 0 && poses[0].keypoints.length > 0) {
        setReps((prev) => {
          const newReps = prev + 1;
          setFeedback("Nice Form! +10 XP");
          setScore((s) => s + 10);
          return newReps;
        });
      }

      if (reps >= 10) {
        clearInterval(interval);
        setFeedback("Quest Complete!");
        setTimeout(() => router.push('/patient/dashboard'), 2000);
      }
    }, 2000);
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col">
      {/* HUD */}
      <div className="p-4 bg-slate-800 flex justify-between items-center">
        <h1 className="text-lg font-bold text-purple-400">ROCKET LAUNCH</h1>
        <div className="flex gap-4">
            <div>Reps: <span className="font-mono text-xl">{reps}/10</span></div>
            <div>Score: <span className="font-mono text-xl text-yellow-400">{score}</span></div>
        </div>
      </div>

      {/* Game Area */}
      <div className="relative flex-grow bg-black flex items-center justify-center">
        <video ref={videoRef} className="absolute w-full h-full object-cover opacity-50" playsInline />
        <canvas ref={canvasRef} className="absolute w-full h-full" />
        
        {/* Game Overlay */}
        <div className="absolute bottom-20 flex flex-col items-center">
             <div className="text-6xl animate-bounce">🚀</div>
             <div className="mt-4 bg-black/50 px-4 py-2 rounded border border-purple-500">
                {feedback}
             </div>
        </div>
      </div>
      
      <div className="p-4 bg-slate-800 text-center">
        <button onClick={() => router.back()} className="text-slate-400">Exit Exercise</button>
      </div>
    </div>
  );
}
