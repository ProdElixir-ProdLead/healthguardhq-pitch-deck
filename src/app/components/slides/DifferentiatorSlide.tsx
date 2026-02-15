import { motion } from "motion/react";
import { Zap, Users2, Link } from "lucide-react";

export default function DifferentiatorSlide() {
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
            Not another access control tool.
          </h1>
        </motion.div>

        {/* Differentiator Cards */}
        <div className="space-y-6">
          <DifferentiatorCard
            color="#F59E0B"
            icon={<Zap className="w-7 h-7" />}
            title="Intent-to-Action Drift Detection"
            description="Deterministic at policy boundary, confidence-scored for behavioral patterns, verified before agent acts"
            delay={0.2}
          />
          <DifferentiatorCard
            color="#16A34A"
            icon={<Users2 className="w-7 h-7" />}
            title="Owner-Routed Enforcement"
            description="Routes to human who owns the agent, not a dashboard or SIEM alert"
            delay={0.4}
          />
          <DifferentiatorCard
            color="#0D9488"
            icon={<Link className="w-7 h-7" />}
            title="Complete Accountability Chain"
            description="Human owner → business intent → authorized scope → agent action → drift detection → enforcement → compliance control"
            delay={0.6}
          />
        </div>

        {/* Bottom Callout */}
        <motion.div
          className="flex justify-center pt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div
            className="px-6 py-3 rounded-full backdrop-blur-xl border inline-block"
            style={{
              background: "rgba(13, 148, 136, 0.05)",
              borderColor: "rgba(13, 148, 136, 0.2)",
            }}
          >
            <p
              className="text-center italic"
              style={{ fontFamily: "DM Sans, sans-serif", fontSize: "15px", color: "#475569" }}
            >
              <strong style={{ color: "#0D9488" }}>"The regulator isn't asking if you have access control—</strong>
              <br />
              <strong style={{ color: "#1A1A2E" }}>they're asking if your agent is operating within its intended purpose."</strong>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function DifferentiatorCard({
  color,
  icon,
  title,
  description,
  delay,
}: {
  color: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}) {
  return (
    <motion.div
      className="relative p-8 rounded-xl bg-white border overflow-hidden"
      style={{
        borderColor: "#D1E0D9",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.06)",
      }}
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.6 }}
      whileHover={{ x: 4, boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)" }}
    >
      {/* Left color accent bar */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1"
        style={{ backgroundColor: color }}
      />

      <div className="flex items-start gap-6 pl-6">
        <div style={{ color }} className="flex-shrink-0 mt-1">
          {icon}
        </div>
        <div className="flex-1">
          <h3
            className="mb-3"
            style={{ fontFamily: "Sora, sans-serif", fontSize: "24px", fontWeight: 700, color: "#1A1A2E" }}
          >
            {title}
          </h3>
          <p
            style={{ fontFamily: "DM Sans, sans-serif", fontSize: "16px", lineHeight: 1.7, color: "#4B5563" }}
          >
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}