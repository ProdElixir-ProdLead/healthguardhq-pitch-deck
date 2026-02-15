import { motion } from "motion/react";
import { AlertTriangle, TrendingUp, Users, Shield, Activity, Database } from "lucide-react";

export default function ProblemSlide() {
  return (
    <div className="w-full h-full relative overflow-hidden bg-gradient-to-br from-[#F8FAFB] via-white to-[#F1F5F9]">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          style={{
            backgroundImage: `
              radial-gradient(circle at 2px 2px, #0D9488 1px, transparent 0)
            `,
            backgroundSize: "48px 48px",
            width: "100%",
            height: "100%",
          }}
        />
      </div>

      {/* Floating Gradient Orbs */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full blur-[100px] opacity-20"
        style={{ background: "radial-gradient(circle, #EF4444 0%, transparent 70%)", top: "-10%", right: "10%" }}
        animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 h-full flex flex-col justify-center px-24 py-12">
        <div className="max-w-7xl mx-auto w-full space-y-8">
          {/* Header Section */}
          <motion.div
            className="space-y-3"
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
                THE PROBLEM
              </p>
            </div>
            <h1
              style={{
                fontFamily: "Sora, sans-serif",
                fontSize: "48px",
                fontWeight: 800,
                color: "#0F172A",
                lineHeight: 1.15,
              }}
            >
              AI agents in healthcare are{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #EF4444 0%, #DC2626 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                ungoverned
              </span>
              .
            </h1>
            <p
              style={{
                fontFamily: "DM Sans, sans-serif",
                fontSize: "18px",
                lineHeight: 1.6,
                color: "#64748B",
                maxWidth: "800px",
              }}
            >
              Moving 840× faster than humans, with the same over-privileged access, and <strong className="text-[#0F172A]">zero accountability</strong>.
            </p>
          </motion.div>

          {/* Critical Stats Grid */}
          <motion.div
            className="grid grid-cols-3 gap-5"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <PremiumStatCard
              stat="840×"
              statColor="#EF4444"
              label="SPEED MULTIPLIER"
              description="Faster than human admins, but with the same over-privileged access patterns"
              icon={<AlertTriangle className="w-6 h-6" />}
              glowColor="rgba(239, 68, 68, 0.15)"
              delay={0.4}
            />
            <PremiumStatCard
              stat="1M+"
              statColor="#F59E0B"
              label="RECORDS AT RISK"
              description="Patient records accessible to single agents in major EHR deployments"
              icon={<Database className="w-6 h-6" />}
              glowColor="rgba(245, 158, 11, 0.15)"
              delay={0.55}
            />
            <PremiumStatCard
              stat="<1%"
              statColor="#0D9488"
              label="CAN PROVE INTENT"
              description="Healthcare orgs that can demonstrate agent intent alignment with human authorization"
              icon={<Shield className="w-6 h-6" />}
              glowColor="rgba(13, 148, 136, 0.15)"
              delay={0.7}
            />
          </motion.div>

          {/* Real-World Impact Section */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.7 }}
          >
            <div
              className="p-7 rounded-2xl backdrop-blur-xl border relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.6) 100%)",
                borderColor: "rgba(15, 23, 42, 0.08)",
                boxShadow: "0 20px 60px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.9)",
              }}
            >
              {/* Top accent gradient */}
              <div
                className="absolute top-0 left-0 right-0 h-1"
                style={{ background: "linear-gradient(90deg, #EF4444 0%, #F59E0B 50%, #EF4444 100%)" }}
              />

              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <Activity className="w-5 h-5 text-[#EF4444]" />
                  <h3
                    style={{
                      fontFamily: "Sora, sans-serif",
                      fontSize: "20px",
                      fontWeight: 700,
                      color: "#0F172A",
                    }}
                  >
                    Real-World Impact
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2.5">
                    <div className="flex items-start gap-3">
                      <div
                        className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0"
                        style={{ backgroundColor: "#EF4444", boxShadow: "0 0 8px #EF4444" }}
                      />
                      <p
                        style={{
                          fontFamily: "DM Sans, sans-serif",
                          fontSize: "14px",
                          lineHeight: 1.6,
                          color: "#334155",
                        }}
                      >
                        Healthcare AI agents process <strong className="text-[#0F172A]">claims, access patient records, interact with EHR systems</strong>, and handle prior authorizations
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div
                        className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0"
                        style={{ backgroundColor: "#F59E0B", boxShadow: "0 0 8px #F59E0B" }}
                      />
                      <p
                        style={{
                          fontFamily: "DM Sans, sans-serif",
                          fontSize: "14px",
                          lineHeight: 1.6,
                          color: "#334155",
                        }}
                      >
                        They operate with <strong className="text-[#0F172A]">broad permissions across multiple systems</strong>, the same pattern that led to human admin breaches
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2.5">
                    <div className="flex items-start gap-3">
                      <div
                        className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0"
                        style={{ backgroundColor: "#DC2626", boxShadow: "0 0 8px #DC2626" }}
                      />
                      <p
                        style={{
                          fontFamily: "DM Sans, sans-serif",
                          fontSize: "14px",
                          lineHeight: 1.6,
                          color: "#334155",
                        }}
                      >
                        <strong className="text-[#0F172A]">No audit trail</strong> linking agent actions back to verified human intent or authorization
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div
                        className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0"
                        style={{ backgroundColor: "#B91C1C", boxShadow: "0 0 8px #B91C1C" }}
                      />
                      <p
                        style={{
                          fontFamily: "DM Sans, sans-serif",
                          fontSize: "14px",
                          lineHeight: 1.6,
                          color: "#334155",
                        }}
                      >
                        Organizations face <strong className="text-[#0F172A]">regulatory exposure</strong> under HIPAA, EU AI Act, and emerging AI governance frameworks
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Subtle inner glow */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                  background: "radial-gradient(circle at 50% 0%, rgba(239, 68, 68, 0.05) 0%, transparent 60%)",
                }}
              />
            </div>
          </motion.div>

          {/* Bottom Quote */}
          <motion.div
            className="flex items-center justify-center pt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <div
              className="px-6 py-3 rounded-full backdrop-blur-xl border inline-block"
              style={{
                background: "rgba(239, 68, 68, 0.05)",
                borderColor: "rgba(239, 68, 68, 0.2)",
              }}
            >
              <p
                className="italic text-center"
                style={{
                  fontFamily: "DM Sans, sans-serif",
                  fontSize: "15px",
                  color: "#475569",
                }}
              >
                <strong style={{ color: "#EF4444" }}>"We solved over-privileging for humans."</strong> Now we're repeating the mistake with AI.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function PremiumStatCard({
  stat,
  statColor,
  label,
  description,
  icon,
  glowColor,
  delay,
}: {
  stat: string;
  statColor: string;
  label: string;
  description: string;
  icon: React.ReactNode;
  glowColor: string;
  delay: number;
}) {
  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 40, rotateX: 10 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
      style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
    >
      {/* Glow effect on hover */}
      <div
        className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
        style={{ background: glowColor }}
      />

      <div
        className="relative p-6 rounded-2xl border backdrop-blur-xl overflow-hidden h-full flex flex-col"
        style={{
          background: "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.8) 100%)",
          borderColor: "rgba(15, 23, 42, 0.08)",
          boxShadow: "0 12px 40px rgba(0, 0, 0, 0.06), inset 0 1px 0 rgba(255, 255, 255, 1)",
        }}
      >
        {/* Top color bar */}
        <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: statColor }} />

        {/* Animated background gradient */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{
            background: `radial-gradient(circle at 50% 0%, ${statColor}08 0%, transparent 70%)`,
          }}
        />

        <div className="relative space-y-4 flex-1 flex flex-col">
          {/* Icon and Label */}
          <div className="flex items-center justify-between">
            <div style={{ color: statColor }}>{icon}</div>
            <p
              className="font-mono uppercase tracking-wider"
              style={{
                fontSize: "9px",
                color: statColor,
                fontWeight: 600,
                letterSpacing: "0.12em",
              }}
            >
              {label}
            </p>
          </div>

          {/* Stat */}
          <motion.div
            className="font-mono"
            style={{
              fontSize: "52px",
              fontWeight: 800,
              lineHeight: 0.9,
              color: statColor,
              textShadow: `0 0 40px ${statColor}30`,
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            {stat}
          </motion.div>

          {/* Description */}
          <p
            className="flex-1"
            style={{
              fontFamily: "DM Sans, sans-serif",
              fontSize: "13px",
              lineHeight: 1.6,
              color: "#475569",
            }}
          >
            {description}
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