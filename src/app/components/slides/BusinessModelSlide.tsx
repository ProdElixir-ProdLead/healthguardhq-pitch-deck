import { motion } from "motion/react";
import { Box, Plus, Wrench } from "lucide-react";

export default function BusinessModelSlide() {
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
            B2B SaaS with land-and-expand.
          </h1>
        </motion.div>

        {/* Pricing Tiers */}
        <div className="grid grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <PricingCard
              color="#0D9488"
              icon={<Box className="w-7 h-7" />}
              tier="Core Platform"
              price="$35K/year"
              description="Intent verification, drift detection, and enforcement for up to 25 agents"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <PricingCard
              color="#16A34A"
              icon={<Plus className="w-7 h-7" />}
              tier="Compliance Modules"
              price="Add-on"
              description="EU AI Act reporting, HIPAA audit trails, SOC 2 control mapping"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <PricingCard
              color="#F59E0B"
              icon={<Wrench className="w-7 h-7" />}
              tier="Implementation"
              price="Project-based"
              description="Integration support, custom policy design, agent profiling services"
            />
          </motion.div>
        </div>

        {/* Bottom Text */}
        <motion.div
          className="flex items-center justify-center pt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
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
              <strong style={{ color: "#1A1A2E" }}>Land with one department's agents.</strong> Expand as adoption scales.{" "}
              <strong style={{ color: "#0D9488" }}>Regulatory deadlines create urgency.</strong>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function PricingCard({
  color,
  icon,
  tier,
  price,
  description,
}: {
  color: string;
  icon: React.ReactNode;
  tier: string;
  price: string;
  description: string;
}) {
  return (
    <div
      className="p-8 rounded-xl bg-white border relative overflow-hidden h-full flex flex-col"
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

      <div className="flex-1 space-y-6">
        {/* Icon */}
        <div style={{ color }}>{icon}</div>

        {/* Tier Name */}
        <div>
          <h3
            style={{ fontFamily: "Sora, sans-serif", fontSize: "24px", fontWeight: 700, color: "#1A1A2E" }}
          >
            {tier}
          </h3>
          <p
            className="font-mono mt-2"
            style={{ fontSize: "20px", fontWeight: 600, color }}
          >
            {price}
          </p>
        </div>

        {/* Description */}
        <p
          style={{ fontFamily: "DM Sans, sans-serif", fontSize: "15px", lineHeight: 1.6, color: "#6B7280" }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}