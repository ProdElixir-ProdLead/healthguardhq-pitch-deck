import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function TitleSlide() {
  return (
    <div className="w-full h-full relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0A0A14 0%, #1A1A2E 50%, #0D1B2A 100%)" }}>
      {/* Advanced Gradient Mesh Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute w-[800px] h-[800px] rounded-full blur-[120px]"
          style={{
            background: "radial-gradient(circle, rgba(13, 148, 136, 0.3) 0%, transparent 70%)",
            top: "10%",
            left: "15%",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full blur-[100px]"
          style={{
            background: "radial-gradient(circle, rgba(22, 163, 74, 0.2) 0%, transparent 70%)",
            bottom: "15%",
            right: "20%",
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          style={{
            backgroundImage: `
              linear-gradient(rgba(13, 148, 136, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(13, 148, 136, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
            width: "100%",
            height: "100%",
          }}
        />
      </div>

      <div className="relative z-10 h-full grid grid-cols-[48%_52%] items-center px-20 gap-12">
        {/* Left Side - Text */}
        <motion.div
          className="space-y-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Beta Badge with Glassmorphism */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <div
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-mono backdrop-blur-xl border"
              style={{
                background: "rgba(13, 148, 136, 0.1)",
                borderColor: "rgba(13, 148, 136, 0.3)",
                boxShadow: "0 8px 32px rgba(13, 148, 136, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
              }}
            >
              <div
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ backgroundColor: "#0D9488", boxShadow: "0 0 8px #0D9488" }}
              />
              <span style={{ color: "#0D9488", fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em" }}>
                BETA LIVE
              </span>
            </div>
          </motion.div>

          {/* Logo with Glow Effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h1
              style={{
                fontFamily: "Sora, sans-serif",
                fontSize: "80px",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                color: "#FFFFFF",
                textShadow: "0 0 80px rgba(13, 148, 136, 0.4)",
              }}
            >
              Health<span style={{ color: "#16A34A" }}>Guard</span>hq
            </h1>
            <p
              className="font-mono mt-2"
              style={{
                color: "#8B5CF6",
                fontSize: "13px",
                fontWeight: 500,
                letterSpacing: "0.08em",
              }}
            >
              powered by ElixirID
            </p>
          </motion.div>

          {/* Headline with Gradient Text */}
          <motion.div
            className="space-y-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <h2
              className="text-white leading-tight"
              style={{
                fontFamily: "Sora, sans-serif",
                fontSize: "42px",
                fontWeight: 700,
                lineHeight: 1.3,
              }}
            >
              Every AI agent must be{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #0D9488 0%, #16A34A 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                human-led
              </span>
              .<br />
              Every action needs{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #0D9488 0%, #16A34A 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                authorization
              </span>
              .
            </h2>
          </motion.div>

          {/* Subheadline */}
          <motion.p
            style={{
              fontFamily: "DM Sans, sans-serif",
              fontSize: "20px",
              lineHeight: 1.6,
              color: "rgba(255, 255, 255, 0.7)",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            The governance layer for autonomous healthcare AI—ensuring every agent action traces back to verified human intent.
          </motion.p>

          {/* Footer Info in Glassmorphism Card */}
          <motion.div
            className="pt-4 inline-block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <div
              className="px-6 py-4 rounded-xl backdrop-blur-xl border"
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                borderColor: "rgba(255, 255, 255, 0.1)",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
              }}
            >
              <div className="space-y-2 font-mono text-sm">
                <p style={{ color: "#0D9488", fontWeight: 600 }}>Morgan DeBaun Health Equity Investment Initiative</p>
                <div className="flex items-center gap-4 text-gray-400 text-xs">
                  <span>February 2026</span>
                  <div className="w-1 h-1 rounded-full bg-gray-600" />
                  <span>CONFIDENTIAL</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side - Enhanced Node Graph */}
        <motion.div
          className="flex items-center justify-center h-full"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <EnhancedNodeGraph />
        </motion.div>
      </div>
    </div>
  );
}

function EnhancedNodeGraph() {
  const [activeConnection, setActiveConnection] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveConnection((prev) => (prev + 1) % 9);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const agents = [
    { id: "Claims-Bot-7", color: "#0D9488", delay: 0.8 },
    { id: "RX-Agent-3", color: "#14B8A6", delay: 0.9 },
    { id: "Export-Agent-9", color: "#2DD4BF", delay: 1.0 },
  ];

  const outcomes = [
    { label: "APPROVED", color: "#16A34A", count: "2.4K" },
    { label: "ESCALATED", color: "#F59E0B", count: "147" },
    { label: "BLOCKED", color: "#EF4444", count: "89" },
  ];

  return (
    <div className="relative w-full h-[600px] flex items-center justify-center">
      {/* Agents on the left with Glassmorphism */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 space-y-8">
        {agents.map((agent, idx) => (
          <motion.div
            key={agent.id}
            className="group relative"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: agent.delay, type: "spring" }}
          >
            <div
              className="px-6 py-4 rounded-xl border backdrop-blur-xl relative overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${agent.color}15 0%, ${agent.color}05 100%)`,
                borderColor: `${agent.color}40`,
                boxShadow: `0 8px 32px ${agent.color}20, inset 0 1px 0 rgba(255, 255, 255, 0.1)`,
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{
                    backgroundColor: agent.color,
                    boxShadow: `0 0 12px ${agent.color}`,
                  }}
                />
                <span
                  className="font-mono"
                  style={{
                    fontSize: "13px",
                    fontWeight: 600,
                    color: agent.color,
                    letterSpacing: "0.02em",
                  }}
                >
                  {agent.id}
                </span>
              </div>
              {/* Hover Glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
                style={{
                  background: `radial-gradient(circle at center, ${agent.color}30 0%, transparent 70%)`,
                  pointerEvents: "none",
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Central Hub - Premium Glassmorphism */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
        >
          {/* Outer Glow Ring */}
          <motion.div
            className="absolute inset-0 rounded-full blur-xl"
            style={{
              background: "radial-gradient(circle, rgba(13, 148, 136, 0.6) 0%, transparent 70%)",
              transform: "scale(1.5)",
            }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1.5, 1.7, 1.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Main Hub */}
          <div
            className="relative w-32 h-32 rounded-full flex items-center justify-center border-2 backdrop-blur-2xl"
            style={{
              background: "linear-gradient(135deg, rgba(13, 148, 136, 0.2) 0%, rgba(26, 26, 46, 0.9) 100%)",
              borderColor: "#0D9488",
              boxShadow: "0 0 60px rgba(13, 148, 136, 0.5), inset 0 2px 0 rgba(255, 255, 255, 0.1)",
            }}
          >
            <div className="text-center">
              <div
                className="font-mono"
                style={{
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "#0D9488",
                  letterSpacing: "0.05em",
                }}
              >
                AUTHZ
              </div>
              <div className="font-mono text-[10px] text-gray-400 mt-1">ENGINE</div>
            </div>
          </div>

          {/* Rotating Ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-dashed"
            style={{ borderColor: "rgba(13, 148, 136, 0.3)" }}
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
      </div>

      {/* Outcomes on the right with Enhanced Styling */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 space-y-6">
        {outcomes.map((outcome, idx) => (
          <motion.div
            key={outcome.label}
            className="group"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4 + idx * 0.15, type: "spring" }}
          >
            <div
              className="px-6 py-4 rounded-xl border backdrop-blur-xl relative overflow-hidden min-w-[180px]"
              style={{
                background: `linear-gradient(135deg, ${outcome.color}10 0%, rgba(26, 26, 46, 0.8) 100%)`,
                borderColor: `${outcome.color}40`,
                boxShadow: `0 8px 32px ${outcome.color}15`,
              }}
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <motion.div
                    className="w-3 h-3 rounded-full"
                    style={{
                      backgroundColor: outcome.color,
                      boxShadow: `0 0 12px ${outcome.color}`,
                    }}
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [1, 0.7, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: idx * 0.3,
                    }}
                  />
                  <span
                    className="font-mono"
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      color: outcome.color,
                      letterSpacing: "0.05em",
                    }}
                  >
                    {outcome.label}
                  </span>
                </div>
                <span
                  className="font-mono"
                  style={{
                    fontSize: "16px",
                    fontWeight: 700,
                    color: outcome.color,
                  }}
                >
                  {outcome.count}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Enhanced Connection Lines with Animation */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ filter: "drop-shadow(0 0 4px rgba(13, 148, 136, 0.5))" }}>
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0D9488" stopOpacity="0" />
            <stop offset="50%" stopColor="#0D9488" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#0D9488" stopOpacity="0" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Left to center lines */}
        {[120, 300, 480].map((y, idx) => (
          <motion.line
            key={`left-${idx}`}
            x1="200"
            y1={y}
            x2="290"
            y2="300"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            filter="url(#glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: [0, 1, 1, 0],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: idx * 0.5,
              times: [0, 0.3, 0.7, 1],
            }}
          />
        ))}

        {/* Center to right lines */}
        {outcomes.map((outcome, idx) => (
          <motion.line
            key={`right-${idx}`}
            x1="360"
            y1="300"
            x2="500"
            y2={120 + idx * 180}
            stroke={outcome.color}
            strokeWidth="2"
            filter="url(#glow)"
            opacity="0.6"
            initial={{ pathLength: 0 }}
            animate={{
              pathLength: [0, 1, 1, 0],
              opacity: [0, 0.8, 0.8, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: 1.5 + idx * 0.5,
              times: [0, 0.3, 0.7, 1],
            }}
          />
        ))}
      </svg>

      {/* Particle Effects */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 rounded-full"
          style={{
            backgroundColor: i % 2 === 0 ? "#0D9488" : "#16A34A",
            boxShadow: `0 0 8px ${i % 2 === 0 ? "#0D9488" : "#16A34A"}`,
            left: `${20 + Math.random() * 60}%`,
            top: `${20 + Math.random() * 60}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
}