import { motion } from "motion/react";
import { User, Users, Code, Briefcase, Shield, Brain, UserPlus } from "lucide-react";

export default function TeamSlide() {
  return (
    <div className="w-full h-full flex flex-col px-24 py-8">
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col justify-center max-w-7xl mx-auto w-full space-y-6">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 style={{ fontFamily: "Sora, sans-serif", fontSize: "42px", fontWeight: 700, color: "#1A1A2E" }}>
            Built by practitioners, not theorists.
          </h1>
        </motion.div>

        {/* Grid: CEO Card on left, Next Hires on right */}
        <div className="grid grid-cols-[1.5fr_1fr] gap-8">
          {/* CEO Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <CEOCard />
          </motion.div>

          {/* Next Hires */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div
              className="p-8 rounded-xl bg-white border relative overflow-hidden h-full flex flex-col"
              style={{
                borderColor: "#D1E0D9",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.06)",
              }}
            >
              {/* Left accent bar */}
              <div
                className="absolute left-0 top-0 bottom-0 w-1"
                style={{ backgroundColor: "#16A34A" }}
              />

              <div className="flex-1 space-y-5 pl-6">
                {/* Icon */}
                <div style={{ color: "#16A34A" }}>
                  <Users className="w-8 h-8" />
                </div>

                {/* Title */}
                <div>
                  <p
                    className="font-mono uppercase tracking-wider mb-2"
                    style={{ fontSize: "11px", color: "#6B7280", letterSpacing: "0.1em" }}
                  >
                    NEXT HIRES
                  </p>
                  <h3
                    style={{ fontFamily: "Sora, sans-serif", fontSize: "24px", fontWeight: 700, color: "#1A1A2E" }}
                  >
                    Growing the Team
                  </h3>
                </div>

                {/* Hire List */}
                <div className="space-y-4">
                  <NextHireItem
                    icon={<Code className="w-5 h-5" />}
                    color="#0D9488"
                    label="Technical Co-founder / Lead Engineer"
                    tagline="Security+API integration depth"
                    delay={0.6}
                  />
                  <NextHireItem
                    icon={<Brain className="w-5 h-5" />}
                    color="#16A34A"
                    label="AI/ML Engineers"
                    delay={0.7}
                  />
                  <NextHireItem
                    icon={<Briefcase className="w-5 h-5" />}
                    color="#F59E0B"
                    label="Strategic Advisor"
                    tagline="CISO Network + enterprise sales credibility"
                    delay={0.8}
                  />
                  <NextHireItem
                    icon={<UserPlus className="w-5 h-5" />}
                    color="#8B5CF6"
                    label="Sales/Customer Experience Lead"
                    delay={0.9}
                  />
                  <NextHireItem
                    icon={<Shield className="w-5 h-5" />}
                    color="#EF4444"
                    label="Compliance Lead"
                    tagline="Healthcare regulatory expertise (HIPAA, EU AI Act)"
                    delay={1.0}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Quote - Fixed at bottom with margin */}
      <motion.div
        className="max-w-7xl mx-auto w-full mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <div
          className="px-8 py-5 rounded-xl relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(13, 148, 136, 0.08) 0%, rgba(22, 163, 74, 0.05) 100%)",
            border: "1px solid rgba(13, 148, 136, 0.15)",
            boxShadow: "0 4px 12px rgba(13, 148, 136, 0.1)",
          }}
        >
          <p
            className="text-center italic"
            style={{ fontFamily: "DM Sans, sans-serif", fontSize: "18px", color: "#4B5563" }}
          >
            <strong style={{ color: "#1A1A2E" }}>"The founder closest to the problem is best positioned to solve it."</strong>
          </p>

          {/* Subtle glow effect */}
          <div
            className="absolute inset-0 opacity-30 pointer-events-none"
            style={{
              background: "radial-gradient(circle at 50% 50%, rgba(13, 148, 136, 0.1) 0%, transparent 70%)",
            }}
          />
        </div>
      </motion.div>
    </div>
  );
}

function NextHireItem({
  icon,
  color,
  label,
  tagline,
  delay,
}: {
  icon: React.ReactNode;
  color: string;
  label: string;
  tagline?: string;
  delay: number;
}) {
  return (
    <motion.div
      className="flex items-start gap-4"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className="p-2 rounded-lg flex-shrink-0"
        style={{
          backgroundColor: `${color}20`,
          color,
        }}
      >
        {icon}
      </div>
      <div>
        <p
          style={{
            fontFamily: "DM Sans, sans-serif",
            fontSize: "14px",
            fontWeight: 600,
            color: "#1A1A2E",
            lineHeight: 1.6,
          }}
        >
          {label}
        </p>
        {tagline && (
          <p
            style={{
              fontFamily: "DM Sans, sans-serif",
              fontSize: "12px",
              color: "#6B7280",
              lineHeight: 1.5,
              marginTop: "2px",
            }}
          >
            {tagline}
          </p>
        )}
      </div>
    </motion.div>
  );
}

function CEOCard() {
  return (
    <div
      className="p-8 rounded-xl bg-white border relative overflow-hidden h-full flex flex-col"
      style={{
        borderColor: "#D1E0D9",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.06)",
      }}
    >
      {/* Left accent bar */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1"
        style={{ backgroundColor: "#0D9488" }}
      />

      <div className="flex-1 space-y-5 pl-6">
        {/* Icon */}
        <div style={{ color: "#0D9488" }}>
          <User className="w-8 h-8" />
        </div>

        {/* Title and Name */}
        <div>
          <p
            className="font-mono uppercase tracking-wider mb-2"
            style={{ fontSize: "11px", color: "#6B7280", letterSpacing: "0.1em" }}
          >
            FOUNDER & CEO/CHIEF PRODUCT STRATEGIST
          </p>
          <h3
            style={{ fontFamily: "Sora, sans-serif", fontSize: "28px", fontWeight: 700, color: "#1A1A2E" }}
          >
            Elle Shorter
          </h3>
        </div>

        {/* Structured Background */}
        <div className="space-y-4">
          {/* Background */}
          <div>
            <h4
              className="font-mono uppercase tracking-wider mb-2"
              style={{ fontSize: "10px", color: "#0D9488", letterSpacing: "0.1em", fontWeight: 600 }}
            >
              Background
            </h4>
            <div className="space-y-1.5">
              <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "13px", lineHeight: 1.5, color: "#4B5563" }}>
                Native of Georgia, based in Chicago 15+ years
              </p>
              <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "13px", lineHeight: 1.5, color: "#4B5563" }}>
                Lived abroad, avid globetrotter
              </p>
              <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "13px", lineHeight: 1.5, color: "#4B5563" }}>
                Dog mom to Capone, a 70lb blue-nosed Pitbull
              </p>
            </div>
          </div>

          {/* Current Role */}
          <div>
            <h4
              className="font-mono uppercase tracking-wider mb-2"
              style={{ fontSize: "10px", color: "#0D9488", letterSpacing: "0.1em", fontWeight: 600 }}
            >
              Current Role
            </h4>
            <div className="space-y-1.5">
              <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "13px", lineHeight: 1.5, color: "#4B5563" }}>
                Global IAM Product Leader, Cybersecurity at McDonald's Corporation
              </p>
              <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "13px", lineHeight: 1.5, color: "#4B5563" }}>
                Scope: 115+ global markets, 2.2M identities, 1.5M endpoints
              </p>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h4
              className="font-mono uppercase tracking-wider mb-2"
              style={{ fontSize: "10px", color: "#0D9488", letterSpacing: "0.1em", fontWeight: 600 }}
            >
              Experience
            </h4>
            <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "13px", lineHeight: 1.5, color: "#4B5563" }}>
              10+ years enterprise product leadership across Identity & Access Management, Privilege Management, Data Security & Analytics, Telematics, and BigLaw M&A
            </p>
            <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "13px", lineHeight: 1.5, color: "#4B5563", marginTop: "6px" }}>
              Track record shipping products and re-engineering processes at Fortune 500 brands including Kroger, Carrier, Kimberly-Clark, and Kirkland & Ellis
            </p>
          </div>

          {/* Why This Problem */}
          <div>
            <h4
              className="font-mono uppercase tracking-wider mb-2"
              style={{ fontSize: "10px", color: "#0D9488", letterSpacing: "0.1em", fontWeight: 600 }}
            >
              Why This Problem
            </h4>
            <p 
              style={{ 
                fontFamily: "DM Sans, sans-serif", 
                fontSize: "14px", 
                lineHeight: 1.6, 
                color: "#0F172A",
                fontWeight: 600,
                padding: "12px",
                background: "linear-gradient(135deg, rgba(13, 148, 136, 0.08) 0%, rgba(22, 163, 74, 0.06) 100%)",
                borderLeft: "3px solid #0D9488",
                borderRadius: "4px"
              }}
            >
              Observes over-privileging problem firsthand with human admins. Now building the solution for AI Agents
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}