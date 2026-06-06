"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CoverPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0F172A" }}>
      
      {/* Background Effects */}
      <div style={{
        position: "fixed",
        top: "-20%",
        left: "50%",
        transform: "translateX(-50%)",
        width: "600px",
        height: "600px",
        backgroundColor: "rgba(139, 92, 246, 0.15)",
        borderRadius: "50%",
        filter: "blur(100px)",
        pointerEvents: "none",
      }} />
      
      <div style={{
        position: "fixed",
        bottom: "-20%",
        left: "50%",
        transform: "translateX(-50%)",
        width: "600px",
        height: "600px",
        backgroundColor: "rgba(99, 102, 241, 0.1)",
        borderRadius: "50%",
        filter: "blur(100px)",
        pointerEvents: "none",
      }} />

      {/* Centered Wrapper */}
      <div className="w-full px-8 flex justify-center items-center min-h-screen">
        
        {/* Content Container - Shifted toward center */}
        <div className="w-full flex justify-center items-center min-h-screen">

  <main
    className="max-w-2xl text-center flex flex-col items-center"
    style={{
      paddingTop: "3rem",
      paddingBottom: "3rem"
    }}
  >
            
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{
    marginBottom: "2rem",
    display: "flex",
    justifyContent: "center"
  }}
>
            
              <h1 style={{ fontSize: "2.5rem", fontWeight: 900, color: "white", letterSpacing: "-0.02em" }}>
                PTPAL
              </h1>
            </motion.div>

            {/* Mascot Placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
  width: "320px",
  height: "320px",
  marginBottom: "2rem",
  position: "relative",
  marginLeft: "auto",
  marginRight: "auto"
}}
            >
              <div style={{
                position: "absolute",
                inset: 0,
                backgroundColor: "rgba(139, 92, 246, 0.2)",
                borderRadius: "50%",
                filter: "blur(60px)"
              }} />
              <img 
                src="/cheetah.png" 
                alt="Pace the Cheetah" 
                style={{ width: "100%", height: "100%", objectFit: "contain" }} 
              />
            </motion.div>

            {/* Headline */}
            <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.4 }}
  style={{
    marginBottom: "1rem",
    width: "100%",
    textAlign: "center"
  }}
>
              <h2 style={{ fontSize: "2.5rem", fontWeight: 700, color: "white", lineHeight: 1.1 }}>
                LEVEL UP YOUR <br />
                <span style={{ 
                  background: "linear-gradient(to right, #a78bfa, #f472b6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}>
                  RECOVERY
                </span>
              </h2>
            </motion.div>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              style={{
  color: "#94a3b8",
  fontSize: "1.125rem",
  marginBottom: "2.5rem",
  maxWidth: "600px",
  textAlign: "center",
  marginLeft: "auto",
  marginRight: "auto"
}}
            >
              Complete physical therapy exercises, earn rewards, and recover alongside Pace the Cheetah.
            </motion.p>

            {/* Buttons */}
            <motion.div
  style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link href="/patient/join">
                <button 
                  style={{
                    padding: "1rem 2rem",
                    borderRadius: "9999px",
                    fontWeight: 700,
                    fontSize: "1.125rem",
                    background: "linear-gradient(to right, #fbbf24, #f59e0b)",
                    color: "#0f172a",
                    border: "none",
                    cursor: "pointer",
                    boxShadow: "0 10px 25px -5px rgba(251, 191, 36, 0.4)"
                  }}
                >
                  Start My Recovery
                </button>
              </Link>
              
              <button 
                style={{
                  display: "block",
                  marginTop: "1rem",
                  padding: "0.75rem 2rem",
                  borderRadius: "9999px",
                  fontWeight: 500,
                  background: "transparent",
                  color: "#cbd5e1",
                  border: "1px solid #475569",
                  cursor: "pointer"
                }}
              >
                Watch Demo
              </button>
            </motion.div>

          </main>
          
        </div>
      </div>
      
    </div>
  );
}
