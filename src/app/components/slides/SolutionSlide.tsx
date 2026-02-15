import { motion } from "motion/react";
import { Target, UserCheck, Activity, Lock, FileText } from "lucide-react";

export default function SolutionSlide() {
  const stages = [
    { number: "01", name: "Intent Capture", color: "#0D9488", icon: <Target className="w-5 h-5" /> },
    { number: "02", name: "Agent Profiling", color: "#0D9488", icon: <UserCheck className="w-5 h-5" /> },
    { number: "03", name: "Drift Detection", color: "#F59E0B", icon: <Activity className="w-5 h-5" /> },
    { number: "04", name: "Token Enforcement", color: "#16A34A", icon: <Lock className="w-5 h-5" /> },
    { number: "05", name: "Audit Ledger", color: "#EF4444", icon: <FileText className="w-5 h-5" /> },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center px-24 py-16">
      <div className="max-w-7xl mx-auto w-full space-y-12">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 style={{ fontFamily: "Sora, sans-serif", fontSize: "42px", fontWeight: 700, color: "#1A1A2E" }}>
            An entitlement engine for AI agents.
          </h1>
          <p
            className="mt-4"
            style={{ fontFamily: "DM Sans, sans-serif", fontSize: "18px", color: "#4B5563" }}
          >
            A complete lifecycle from human intent to verified agent action.
          </p>
        </motion.div>

        {/* 5-Stage Flow */}
        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="grid grid-cols-5 gap-4">
            {stages.map((stage, idx) => (
              <motion.div
                key={stage.number}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + idx * 0.15 }}
              >
                <StageCard stage={stage} index={idx} isLast={idx === stages.length - 1} />
              </motion.div>
            ))}
          </div>

          {/* Connecting Arrows */}
          <svg className="absolute top-1/2 left-0 w-full h-8 pointer-events-none -translate-y-1/2">
            {[0, 1, 2, 3].map((idx) => (
              <motion.g key={idx}>
                <motion.line
                  x1={`${(idx + 1) * 20 - 2}%`}
                  y1="16"
                  x2={`${(idx + 1) * 20 + 2}%`}
                  y2="16"
                  stroke="#0D9488"
                  strokeWidth="2"
                  opacity="0.3"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.8 + idx * 0.2, duration: 0.5 }}
                />
                <motion.polygon
                  points={`${(idx + 1) * 20 + 2},16 ${(idx + 1) * 20},13 ${(idx + 1) * 20},19`}
                  fill="#0D9488"
                  opacity="0.3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.3 }}
                  transition={{ delay: 0.8 + idx * 0.2 + 0.5 }}
                />
              </motion.g>
            ))}
          </svg>
        </motion.div>

        {/* Bottom Text */}
        <motion.div
          className="flex items-center justify-center pt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <div
            className="px-6 py-3 rounded-full backdrop-blur-xl border inline-block"
            style={{
              background: "rgba(13, 148, 136, 0.05)",
              borderColor: "rgba(13, 148, 136, 0.2)",
            }}
          >
            <p
              className="text-center"
              style={{
                fontFamily: "DM Sans, sans-serif",
                fontSize: "15px",
                color: "#475569",
              }}
            >
              <strong style={{ color: "#0D9488" }}>Every decision traces back to a human owner.</strong> Every action verified before execution.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function StageCard({ stage, index, isLast }: { stage: any; index: number; isLast: boolean }) {
  return (
    <div className="relative h-full">
      <div
        className="p-6 rounded-xl border bg-white relative overflow-hidden flex flex-col"
        style={{
          borderColor: "#D1E0D9",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.06)",
          minHeight: "200px",
          height: "100%",
        }}
      >
        {/* Top accent bar */}
        <div
          className="absolute top-0 left-0 right-0 h-1"
          style={{ backgroundColor: stage.color }}
        />

        <div className="space-y-4 flex-1 flex flex-col">
          {/* Icon */}
          <div style={{ color: stage.color }}>{stage.icon}</div>

          {/* Number */}
          <div
            className="font-mono"
            style={{ fontSize: "32px", fontWeight: 600, color: stage.color, lineHeight: 1 }}
          >
            {stage.number}
          </div>

          {/* Stage Name */}
          <p
            className="flex-1"
            style={{
              fontFamily: "Sora, sans-serif",
              fontSize: "16px",
              fontWeight: 600,
              color: "#1A1A2E",
              lineHeight: 1.4,
            }}
          >
            {stage.name}
          </p>
        </div>
      </div>
    </div>
  );
}