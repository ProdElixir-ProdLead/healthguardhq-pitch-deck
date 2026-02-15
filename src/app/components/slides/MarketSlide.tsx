import { motion } from "motion/react";
import { TrendingUp, Building2, DollarSign, Target, Globe, Zap } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Sector } from "recharts";
import { useState } from "react";

export default function MarketSlide() {
  const [activeIndex, setActiveIndex] = useState(0);

  const marketData = [
    { name: "SOM", value: 35, color: "#F59E0B", label: "$20–50M", desc: "Y1-3 Target" },
    { name: "SAM", value: 150, color: "#16A34A", label: "$1–2B", desc: "Serviceable" },
    { name: "TAM", value: 1000, color: "#0D9488", label: "$8–12B", desc: "Total Market" },
  ];

  return (
    <div className="w-full h-full relative overflow-hidden bg-gradient-to-br from-[#F8FAFB] via-white to-[#EFF6FF]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          style={{
            backgroundImage: `
              linear-gradient(rgba(13, 148, 136, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(13, 148, 136, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            width: "100%",
            height: "100%",
          }}
        />
      </div>

      {/* Floating Gradient Orb */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full blur-[120px] opacity-20"
        style={{ background: "radial-gradient(circle, #0D9488 0%, transparent 70%)", top: "-15%", left: "-10%" }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 h-full flex flex-col justify-center px-24 py-16">
        <div className="max-w-7xl mx-auto w-full space-y-12">
          {/* Header */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3">
              <div className="h-[2px] w-16 bg-gradient-to-r from-[#0D9488] to-[#16A34A]" />
              <p
                className="font-mono uppercase tracking-wider"
                style={{ color: "#0D9488", fontSize: "11px", fontWeight: 600, letterSpacing: "0.15em" }}
              >
                MARKET OPPORTUNITY
              </p>
            </div>
            <div className="flex items-baseline gap-4">
              <h1
                style={{
                  fontFamily: "Sora, sans-serif",
                  fontSize: "56px",
                  fontWeight: 800,
                  color: "#0F172A",
                  lineHeight: 1.15,
                }}
              >
                $8–12B
              </h1>
              <span
                style={{
                  fontFamily: "DM Sans, sans-serif",
                  fontSize: "24px",
                  color: "#64748B",
                }}
              >
                addressable market
              </span>
            </div>
            <p
              style={{
                fontFamily: "DM Sans, sans-serif",
                fontSize: "20px",
                lineHeight: 1.6,
                color: "#64748B",
                maxWidth: "700px",
              }}
            >
              Healthcare AI governance at the intersection of <strong className="text-[#0F172A]">IAM, compliance, and AI safety</strong>.
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-[45%_55%] gap-12 items-center">
            {/* Left: TAM/SAM/SOM Visualization */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div
                className="p-10 rounded-2xl backdrop-blur-xl border relative overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.8) 100%)",
                  borderColor: "rgba(13, 148, 136, 0.12)",
                  boxShadow: "0 20px 60px rgba(13, 148, 136, 0.1), inset 0 1px 0 rgba(255, 255, 255, 1)",
                }}
              >
                {/* Concentric Circles Visualization as SVG */}
                <div className="relative w-full aspect-square flex items-center justify-center">
                  <svg width="100%" height="100%" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid meet">
                    {/* TAM - Outer Circle */}
                    <motion.circle
                      cx="200"
                      cy="200"
                      r="190"
                      fill="rgba(13, 148, 136, 0.05)"
                      stroke="#0D9488"
                      strokeWidth="4"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
                      style={{ transformOrigin: "center" }}
                    />
                    
                    {/* SAM - Middle Circle */}
                    <motion.circle
                      cx="200"
                      cy="200"
                      r="129"
                      fill="rgba(22, 163, 74, 0.08)"
                      stroke="#16A34A"
                      strokeWidth="4"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
                      style={{ transformOrigin: "center" }}
                    />
                    
                    {/* SOM - Inner Circle */}
                    <motion.circle
                      cx="200"
                      cy="200"
                      r="68"
                      fill="rgba(245, 158, 11, 0.1)"
                      stroke="#F59E0B"
                      strokeWidth="4"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 1.0, type: "spring", stiffness: 100 }}
                      style={{ transformOrigin: "center" }}
                    />
                    
                    {/* Center Pulsing Dot */}
                    <motion.circle
                      cx="200"
                      cy="200"
                      r="8"
                      fill="#F59E0B"
                      filter="drop-shadow(0 0 10px rgba(245, 158, 11, 0.6))"
                      animate={{
                        r: [8, 12, 8],
                        opacity: [1, 0.6, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    
                    {/* TAM Label */}
                    <text x="200" y="50" textAnchor="middle" fill="#0D9488" fontSize="12" fontFamily="JetBrains Mono, monospace" fontWeight="400" letterSpacing="0.1em">TAM</text>
                    <text x="200" y="80" textAnchor="middle" fill="#0D9488" fontSize="30" fontFamily="JetBrains Mono, monospace" fontWeight="700">$8–12B</text>
                    <text x="200" y="100" textAnchor="middle" fill="#64748B" fontSize="11" fontFamily="JetBrains Mono, monospace">Total Market</text>
                    
                    {/* SAM Label */}
                    <text x="200" y="110" textAnchor="middle" fill="#16A34A" fontSize="12" fontFamily="JetBrains Mono, monospace" fontWeight="400" letterSpacing="0.1em">SAM</text>
                    <text x="200" y="135" textAnchor="middle" fill="#16A34A" fontSize="24" fontFamily="JetBrains Mono, monospace" fontWeight="700">$1–2B</text>
                    <text x="200" y="152" textAnchor="middle" fill="#64748B" fontSize="11" fontFamily="JetBrains Mono, monospace">Serviceable</text>
                    
                    {/* SOM Label */}
                    <text x="200" y="175" textAnchor="middle" fill="#F59E0B" fontSize="12" fontFamily="JetBrains Mono, monospace" fontWeight="400" letterSpacing="0.1em">SOM</text>
                    <text x="200" y="200" textAnchor="middle" fill="#F59E0B" fontSize="20" fontFamily="JetBrains Mono, monospace" fontWeight="700">$20–50M</text>
                    <text x="200" y="215" textAnchor="middle" fill="#64748B" fontSize="10" fontFamily="JetBrains Mono, monospace">Y1-3 Target</text>
                  </svg>
                </div>

                {/* Rotating Ring */}
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background: "conic-gradient(from 0deg, rgba(13, 148, 136, 0.15) 0%, transparent 50%, rgba(22, 163, 74, 0.15) 100%)",
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                />
              </div>
            </motion.div>

            {/* Right: Market Breakdown */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              <MarketBreakdownCard
                icon={<Target className="w-6 h-6" />}
                color="#0D9488"
                title="TAM: $8–12B"
                subtitle="Healthcare AI + IAM Convergence"
                points={[
                  "Enterprise IAM for healthcare: $4.2B (2026)",
                  "AI governance tools: $2.8B",
                  "Healthcare compliance software: $3.1B",
                ]}
                delay={0.7}
              />

              <MarketBreakdownCard
                icon={<Building2 className="w-6 h-6" />}
                color="#16A34A"
                title="SAM: $1–2B"
                subtitle="U.S. Healthcare AI Governance"
                points={[
                  "6,000+ hospitals deploying AI agents",
                  "2,400+ health systems with EHR integrations",
                  "Focus: Organizations with >$500M revenue",
                ]}
                delay={0.85}
              />

              <MarketBreakdownCard
                icon={<Zap className="w-6 h-6" />}
                color="#F59E0B"
                title="SOM: $20–50M"
                subtitle="Years 1–3 Beachhead"
                points={[
                  "50–120 enterprise customers",
                  "Avg $150K–$420K ACV",
                  "Start: Health systems + top-tier MSOs",
                ]}
                delay={1.0}
              />
            </motion.div>
          </div>

          {/* Market Signals Bottom Section */}
          <motion.div
            className="grid grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.7 }}
          >
            <MarketSignalCard
              icon={<TrendingUp className="w-6 h-6" />}
              value="46%"
              label="Healthcare AI Investment Growth"
              subtext="2024–2025 YoY increase"
              color="#0D9488"
              delay={1.3}
            />
            <MarketSignalCard
              icon={<DollarSign className="w-6 h-6" />}
              value="$75M"
              label="Oasis Security Raised"
              subtext="For enterprise AI governance"
              color="#16A34A"
              delay={1.45}
            />
            <MarketSignalCard
              icon={<Globe className="w-6 h-6" />}
              value="6,000+"
              label="Hospitals with AI Agents"
              subtext="In clinical workflows today"
              color="#F59E0B"
              delay={1.6}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function MarketBreakdownCard({
  icon,
  color,
  title,
  subtitle,
  points,
  delay,
}: {
  icon: React.ReactNode;
  color: string;
  title: string;
  subtitle: string;
  points: string[];
  delay: number;
}) {
  return (
    <motion.div
      className="group"
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className="p-6 rounded-xl backdrop-blur-xl border relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.7) 100%)",
          borderColor: `${color}20`,
          boxShadow: `0 8px 24px ${color}10, inset 0 1px 0 rgba(255, 255, 255, 1)`,
        }}
      >
        {/* Side accent */}
        <div className="absolute left-0 top-0 bottom-0 w-1" style={{ backgroundColor: color }} />

        <div className="pl-4 space-y-3">
          <div className="flex items-start gap-3">
            <div className="mt-1" style={{ color }}>{icon}</div>
            <div className="flex-1">
              <h3
                style={{
                  fontFamily: "Sora, sans-serif",
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "#0F172A",
                  marginBottom: "4px",
                }}
              >
                {title}
              </h3>
              <p
                className="font-mono uppercase tracking-wider"
                style={{
                  fontSize: "10px",
                  color,
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                }}
              >
                {subtitle}
              </p>
            </div>
          </div>

          <div className="space-y-2 pl-9">
            {points.map((point, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <div
                  className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                  style={{ backgroundColor: color, opacity: 0.6 }}
                />
                <p
                  style={{
                    fontFamily: "DM Sans, sans-serif",
                    fontSize: "14px",
                    lineHeight: 1.6,
                    color: "#475569",
                  }}
                >
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function MarketSignalCard({
  icon,
  value,
  label,
  subtext,
  color,
  delay,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
  subtext: string;
  color: string;
  delay: number;
}) {
  return (
    <motion.div
      className="group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      whileHover={{ y: -4 }}
    >
      <div
        className="p-6 rounded-xl backdrop-blur-xl border relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.8) 100%)",
          borderColor: "rgba(15, 23, 42, 0.08)",
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.06), inset 0 1px 0 rgba(255, 255, 255, 1)",
        }}
      >
        <div className="flex items-start gap-4">
          <div
            className="p-2.5 rounded-lg"
            style={{
              backgroundColor: `${color}15`,
              color,
            }}
          >
            {icon}
          </div>
          <div className="flex-1">
            <p
              className="font-mono mb-1"
              style={{
                fontSize: "32px",
                fontWeight: 800,
                color,
                lineHeight: 1,
              }}
            >
              {value}
            </p>
            <p
              style={{
                fontFamily: "DM Sans, sans-serif",
                fontSize: "14px",
                fontWeight: 600,
                color: "#0F172A",
                marginBottom: "2px",
              }}
            >
              {label}
            </p>
            <p
              style={{
                fontFamily: "DM Sans, sans-serif",
                fontSize: "12px",
                color: "#64748B",
              }}
            >
              {subtext}
            </p>
          </div>
        </div>

        {/* Hover glow */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at 50% 0%, ${color}10 0%, transparent 70%)`,
          }}
        />
      </div>
    </motion.div>
  );
}