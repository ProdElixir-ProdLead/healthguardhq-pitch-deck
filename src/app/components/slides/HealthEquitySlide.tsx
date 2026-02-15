import { motion } from "motion/react";
import { AlertCircle, Shield, TrendingDown } from "lucide-react";

export default function HealthEquitySlide() {
  const impactAreas = [
    {
      title: "Mishandled Claims",
      stat: "3×",
      description: "higher denial rates for Medicaid patients",
      detail: "When AI agents operate outside intended parameters, broken authorization flows delay care for vulnerable populations.",
      color: "#EF4444",
      icon: <AlertCircle className="w-6 h-6" />,
    },
    {
      title: "Unauthorized Access",
      stat: "10K",
      description: "records accessed when only 10 needed",
      detail: "HIPAA violations erode trust in communities already skeptical of healthcare systems. The damage compounds legally, ethically, and socially.",
      color: "#F59E0B",
      icon: <Shield className="w-6 h-6" />,
    },
    {
      title: "Algorithmic Bias",
      stat: "840×",
      description: "faster bias amplification",
      detail: "If an agent inherits over-privileged access or drifts from purpose, it doesn't just make mistakes. It scales them across entire patient populations.",
      color: "#DC2626",
      icon: <TrendingDown className="w-6 h-6" />,
    },
  ];

  return (
    <div className="w-full h-full relative overflow-hidden bg-gradient-to-br from-[#F8FAFB] via-white to-[#FEF3F2]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          style={{
            backgroundImage: `
              radial-gradient(circle at 2px 2px, #EF4444 1px, transparent 0)
            `,
            backgroundSize: "48px 48px",
            width: "100%",
            height: "100%",
          }}
        />
      </div>

      {/* Floating Gradient */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full blur-[120px] opacity-15"
        style={{ background: "radial-gradient(circle, #EF4444 0%, transparent 70%)", top: "-15%", left: "50%" }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.12, 0.18, 0.12] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 h-full flex flex-col justify-center px-24 py-16">
        <div className="max-w-7xl mx-auto w-full space-y-10">
          {/* Header */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3">
              <div className="h-[2px] w-16 bg-gradient-to-r from-[#EF4444] to-[#F59E0B]" />
              <p
                className="font-mono uppercase tracking-wider"
                style={{ color: "#EF4444", fontSize: "11px", fontWeight: 600, letterSpacing: "0.15em" }}
              >
                WHY IT MATTERS
              </p>
            </div>
            <h1
              style={{
                fontFamily: "Sora, sans-serif",
                fontSize: "52px",
                fontWeight: 800,
                color: "#0F172A",
                lineHeight: 1.15,
              }}
            >
              Ungoverned AI widens{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #EF4444 0%, #DC2626 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                health disparities
              </span>
              .
            </h1>
            <p
              style={{
                fontFamily: "DM Sans, sans-serif",
                fontSize: "20px",
                lineHeight: 1.65,
                color: "#64748B",
                maxWidth: "900px",
              }}
            >
              When AI agents over-privilege themselves in healthcare, downstream harm falls hardest on{" "}
              <strong className="text-[#0F172A]">communities already facing trust deficits</strong> with healthcare systems.
            </p>
          </motion.div>

          {/* 3-Column Impact Cards */}
          <motion.div
            className="grid grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            {impactAreas.map((area, idx) => (
              <ImpactCard key={idx} area={area} delay={0.4 + idx * 0.15} />
            ))}
          </motion.div>

          {/* Bottom Callout */}
          <motion.div
            className="flex justify-center pt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
          >
            <div
              className="px-8 py-4 rounded-full backdrop-blur-xl border inline-block"
              style={{
                background: "rgba(13, 148, 136, 0.08)",
                borderColor: "rgba(13, 148, 136, 0.25)",
                boxShadow: "0 8px 24px rgba(13, 148, 136, 0.1)",
              }}
            >
              <p
                style={{
                  fontFamily: "DM Sans, sans-serif",
                  fontSize: "17px",
                  fontWeight: 600,
                  color: "#0D9488",
                }}
              >
                Technology should close gaps, not widen them.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function ImpactCard({ area, delay }: { area: any; delay: number }) {
  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 40, rotateX: 10 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, scale: 1.02 }}
      style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
    >
      {/* Glow on hover */}
      <div
        className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
        style={{ background: `${area.color}20` }}
      />

      <div
        className="relative p-7 rounded-2xl border backdrop-blur-xl overflow-hidden h-full flex flex-col"
        style={{
          background: "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.8) 100%)",
          borderColor: `${area.color}20`,
          boxShadow: `0 12px 40px ${area.color}08, inset 0 1px 0 rgba(255, 255, 255, 1)`,
        }}
      >
        {/* Left color accent */}
        <div className="absolute left-0 top-0 bottom-0 w-1" style={{ backgroundColor: area.color }} />

        {/* Animated gradient on hover */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{
            background: `radial-gradient(circle at 50% 0%, ${area.color}08 0%, transparent 70%)`,
          }}
        />

        <div className="relative space-y-5 flex-1 flex flex-col">
          {/* Icon */}
          <div
            className="p-3 rounded-lg inline-flex w-fit"
            style={{
              backgroundColor: `${area.color}15`,
              color: area.color,
            }}
          >
            {area.icon}
          </div>

          {/* Title */}
          <h3
            style={{
              fontFamily: "Sora, sans-serif",
              fontSize: "20px",
              fontWeight: 700,
              color: "#0F172A",
            }}
          >
            {area.title}
          </h3>

          {/* Stat */}
          <div className="space-y-1">
            <div className="flex items-baseline gap-2">
              <span
                className="font-mono"
                style={{
                  fontSize: "42px",
                  fontWeight: 800,
                  color: area.color,
                  lineHeight: 1,
                }}
              >
                {area.stat}
              </span>
            </div>
            <p
              style={{
                fontFamily: "DM Sans, sans-serif",
                fontSize: "13px",
                color: area.color,
                fontWeight: 600,
              }}
            >
              {area.description}
            </p>
          </div>

          {/* Description */}
          <p
            className="flex-1"
            style={{
              fontFamily: "DM Sans, sans-serif",
              fontSize: "14px",
              lineHeight: 1.65,
              color: "#475569",
            }}
          >
            {area.detail}
          </p>
        </div>

        {/* Shimmer effect */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100"
          style={{
            background: "linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.8) 50%, transparent 100%)",
          }}
          animate={{
            x: ["-100%", "200%"],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 3,
          }}
        />
      </div>
    </motion.div>
  );
}