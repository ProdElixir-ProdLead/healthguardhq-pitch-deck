import { motion } from "motion/react";
import { AlertOctagon, Shield } from "lucide-react";

export default function RegulatorySlide() {
  const daysUntilAugust = 168; // Feb 14 to Aug 2, 2026

  return (
    <div className="w-full h-full flex flex-col justify-center px-24 py-16">
      <div className="max-w-7xl mx-auto w-full space-y-12">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p
            className="font-mono uppercase tracking-wider mb-4"
            style={{ color: "#EF4444", fontSize: "11px", letterSpacing: "0.15em" }}
          >
            REGULATORY TAILWIND
          </p>
          <h1 style={{ fontFamily: "Sora, sans-serif", fontSize: "42px", fontWeight: 700, color: "#1A1A2E" }}>
            Dual compliance pressure creates urgency.
          </h1>
        </motion.div>

        {/* Countdown */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="text-center">
            <div
              className="font-mono"
              style={{ fontSize: "72px", fontWeight: 600, color: "#EF4444", lineHeight: 1 }}
            >
              {daysUntilAugust} DAYS
            </div>
            <p className="mt-2 text-gray-600" style={{ fontFamily: "DM Sans, sans-serif", fontSize: "14px" }}>
              Until EU AI Act enforcement begins
            </p>
          </div>
        </motion.div>

        {/* Regulation Cards */}
        <div className="grid grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <RegulationCard
              color="#EF4444"
              icon={<AlertOctagon className="w-8 h-8" />}
              title="EU AI Act"
              enforcement="August 2, 2026"
              items={[
                { label: "Penalties", value: "€35M or 7% global revenue" },
                { label: "Scope", value: "High-risk AI systems in healthcare" },
                { label: "Requirements", value: "Articles 9, 14, 15 — purpose limitation, oversight, accuracy" },
              ]}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <RegulationCard
              color="#0D9488"
              icon={<Shield className="w-8 h-8" />}
              title="HIPAA"
              enforcement="Active Enforcement"
              items={[
                { label: "Penalties", value: "$2.1M per category per year" },
                { label: "Scope", value: "PHI access controls" },
                { label: "Requirements", value: "Minimum necessary standard, breach notification, access logs" },
              ]}
            />
          </motion.div>
        </div>

        {/* Bottom Message */}
        <motion.div
          className="flex items-center justify-center pt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div
            className="px-6 py-3 rounded-full backdrop-blur-xl border inline-block"
            style={{
              background: "rgba(239, 68, 68, 0.05)",
              borderColor: "rgba(239, 68, 68, 0.2)",
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
              <strong style={{ color: "#EF4444" }}>No product on the market satisfies both for agentic AI.</strong>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function RegulationCard({
  color,
  icon,
  title,
  enforcement,
  items,
}: {
  color: string;
  icon: React.ReactNode;
  title: string;
  enforcement: string;
  items: { label: string; value: string }[];
}) {
  return (
    <div
      className="p-8 rounded-xl bg-white border relative overflow-hidden h-full"
      style={{
        borderColor: "#D1E0D9",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.06)",
      }}
    >
      {/* Top accent bar */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{ backgroundColor: color }}
      />

      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4">
          <div style={{ color }}>{icon}</div>
          <div>
            <h3
              style={{ fontFamily: "Sora, sans-serif", fontSize: "28px", fontWeight: 700, color: "#1A1A2E" }}
            >
              {title}
            </h3>
            <p
              className="font-mono mt-1"
              style={{ fontSize: "12px", color }}
            >
              {enforcement}
            </p>
          </div>
        </div>

        {/* Items */}
        <div className="space-y-4 pt-4">
          {items.map((item, idx) => (
            <div key={idx} className="border-l-2 pl-4" style={{ borderColor: color }}>
              <p
                className="font-mono uppercase tracking-wider mb-1"
                style={{ fontSize: "10px", color: "#6B7280" }}
              >
                {item.label}
              </p>
              <p
                style={{ fontFamily: "DM Sans, sans-serif", fontSize: "15px", color: "#1A1A2E", fontWeight: 500 }}
              >
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}