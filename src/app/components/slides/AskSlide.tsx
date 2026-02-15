import { motion } from "motion/react";
import { Rocket, Code, Users, TrendingUp, Target, Zap, Shield, Heart, Brain, Briefcase, UserPlus, Linkedin, Instagram, Mail } from "lucide-react";

export default function AskSlide() {
  const fundAllocation = [
    { category: "Product & Engineering", percent: "45%", color: "#0D9488", icon: <Code className="w-5 h-5" /> },
    { category: "Go-To-Market & Sales", percent: "30%", color: "#16A34A", icon: <Target className="w-5 h-5" /> },
    { category: "Compliance & Security", percent: "15%", color: "#F59E0B", icon: <Shield className="w-5 h-5" /> },
    { category: "Operations & Runway", percent: "10%", color: "#8B5CF6", icon: <TrendingUp className="w-5 h-5" /> },
  ];

  return (
    <div className="w-full h-full relative overflow-hidden bg-gradient-to-br from-[#0A0A14] via-[#1A1A2E] to-[#0D1B2A]">
      {/* Advanced Gradient Mesh */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute w-[700px] h-[700px] rounded-full blur-[140px]"
          style={{
            background: "radial-gradient(circle, rgba(13, 148, 136, 0.25) 0%, transparent 70%)",
            top: "20%",
            left: "10%",
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.25, 0.4, 0.25],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full blur-[100px]"
          style={{
            background: "radial-gradient(circle, rgba(22, 163, 74, 0.2) 0%, transparent 70%)",
            bottom: "10%",
            right: "15%",
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
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

      <div className="relative z-10 h-full flex flex-col justify-center px-24 py-12">
        <div className="max-w-7xl mx-auto w-full space-y-8">
          {/* Header */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="inline-block"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
              <div
                className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full backdrop-blur-xl border"
                style={{
                  background: "rgba(13, 148, 136, 0.1)",
                  borderColor: "rgba(13, 148, 136, 0.3)",
                  boxShadow: "0 8px 32px rgba(13, 148, 136, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                }}
              >
                <Heart className="w-4 h-4 text-[#0D9488]" />
                <span
                  className="font-mono uppercase tracking-wider"
                  style={{ color: "#0D9488", fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em" }}
                >
                  MORGAN DEBAUN HEALTH EQUITY INITIATIVE
                </span>
              </div>
            </motion.div>

            <div className="space-y-3">
              <h1
                className="text-white"
                style={{
                  fontFamily: "Sora, sans-serif",
                  fontSize: "56px",
                  fontWeight: 800,
                  lineHeight: 1.1,
                  textShadow: "0 0 60px rgba(13, 148, 136, 0.3)",
                }}
              >
                Seeking{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #0D9488 0%, #16A34A 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  $100K
                </span>
              </h1>
            </div>

            <p
              className="text-white/70 max-w-3xl"
              style={{
                fontFamily: "DM Sans, sans-serif",
                fontSize: "18px",
                lineHeight: 1.5,
              }}
            >
              Your investment accelerates our mission to <strong className="text-white">prevent AI-driven health disparities</strong> by ensuring every autonomous healthcare action is governed, traceable, and equitable.
            </p>
          </motion.div>

          {/* Main Grid - 2 columns balanced */}
          <div className="grid grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-5">
              {/* Fund Allocation */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.7 }}
              >
                <div
                  className="p-6 rounded-2xl backdrop-blur-2xl border relative overflow-hidden"
                  style={{
                    background: "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)",
                    borderColor: "rgba(255, 255, 255, 0.1)",
                    boxShadow: "0 20px 60px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                  }}
                >
                  <div className="space-y-5">
                    <h3
                      className="text-white"
                      style={{
                        fontFamily: "Sora, sans-serif",
                        fontSize: "22px",
                        fontWeight: 700,
                      }}
                    >
                      Fund Allocation
                    </h3>

                    <div className="space-y-3.5">
                      {fundAllocation.map((item, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.6 + idx * 0.1, duration: 0.5 }}
                        >
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div
                                  className="p-2 rounded"
                                  style={{
                                    backgroundColor: `${item.color}20`,
                                    color: item.color,
                                  }}
                                >
                                  {item.icon}
                                </div>
                                <p
                                  className="text-white"
                                  style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 600, fontSize: "15px" }}
                                >
                                  {item.category}
                                </p>
                              </div>
                              <p
                                className="font-mono text-2xl font-bold"
                                style={{ color: item.color }}
                              >
                                {item.percent}
                              </p>
                            </div>

                            {/* Progress Bar */}
                            <div className="relative w-full h-1.5 rounded-full bg-white/5 overflow-hidden">
                              <motion.div
                                className="absolute left-0 top-0 bottom-0 rounded-full"
                                style={{
                                  backgroundColor: item.color,
                                  boxShadow: `0 0 12px ${item.color}`,
                                }}
                                initial={{ width: 0 }}
                                animate={{ width: item.percent }}
                                transition={{ delay: 0.8 + idx * 0.1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                              />
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* 18-Month Milestones */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.7 }}
              >
                <div
                  className="p-6 rounded-2xl backdrop-blur-2xl border relative overflow-hidden"
                  style={{
                    background: "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)",
                    borderColor: "rgba(255, 255, 255, 0.1)",
                    boxShadow: "0 20px 60px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                  }}
                >
                  <h3
                    className="text-white mb-5"
                    style={{
                      fontFamily: "Sora, sans-serif",
                      fontSize: "22px",
                      fontWeight: 700,
                    }}
                  >
                    18-Month Targets
                  </h3>

                  <div className="space-y-3.5">
                    <MilestoneItem
                      icon={<Users className="w-5 h-5" />}
                      color="#0D9488"
                      label="50-75+ Midsize Customers, scaling to Enterprise"
                      delay={1.2}
                    />
                    <MilestoneItem
                      icon={<TrendingUp className="w-5 h-5" />}
                      color="#16A34A"
                      label="$1.5M+ ARR"
                      delay={1.3}
                    />
                    <MilestoneItem
                      icon={<Shield className="w-5 h-5" />}
                      color="#F59E0B"
                      label="EU AI Act Certified"
                      delay={1.4}
                    />
                    <MilestoneItem
                      icon={<Zap className="w-5 h-5" />}
                      color="#8B5CF6"
                      label="Fundraise-ready"
                      delay={1.5}
                    />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Your Impact */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
            >
              <div
                className="p-6 rounded-2xl backdrop-blur-2xl border relative overflow-hidden h-full flex flex-col"
                style={{
                  background: "linear-gradient(135deg, rgba(13, 148, 136, 0.1) 0%, rgba(22, 163, 74, 0.05) 100%)",
                  borderColor: "rgba(13, 148, 136, 0.3)",
                  boxShadow: "0 20px 60px rgba(13, 148, 136, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                }}
              >
                <div className="space-y-5">
                  <div className="flex items-center gap-3">
                    <Rocket className="w-6 h-6 text-[#0D9488]" />
                    <h3
                      className="text-white"
                      style={{
                        fontFamily: "Sora, sans-serif",
                        fontSize: "22px",
                        fontWeight: 700,
                      }}
                    >
                      Your Investment Drives:
                    </h3>
                  </div>

                  <div className="space-y-3.5">
                    <InvestmentItem
                      percent="50%"
                      color="#0D9488"
                      text="Engineering — contract engineer to build production-grade demo for design partner pilots"
                      delay={0.9}
                    />
                    <InvestmentItem
                      percent="30%"
                      color="#16A34A"
                      text="Validation — healthcare design partner engagement, user research, compliance mapping"
                      delay={1.0}
                    />
                    <InvestmentItem
                      percent="20%"
                      color="#F59E0B"
                      text="Operations — legal, infrastructure, domain expertise consultations"
                      delay={1.1}
                    />
                  </div>

                  {/* Contact Info - Prominent Section */}
                  <motion.div
                    className="mt-6 p-5 rounded-xl relative overflow-hidden"
                    style={{
                      background: "linear-gradient(135deg, rgba(13, 148, 136, 0.15) 0%, rgba(22, 163, 74, 0.1) 100%)",
                      border: "2px solid rgba(13, 148, 136, 0.4)",
                      boxShadow: "0 8px 24px rgba(13, 148, 136, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.3, duration: 0.6 }}
                  >
                    <div className="space-y-3 text-center">
                      <p
                        style={{
                          fontFamily: "Sora, sans-serif",
                          fontSize: "28px",
                          fontWeight: 800,
                          color: "#FFFFFF",
                          letterSpacing: "-0.01em",
                        }}
                      >
                        Health<span style={{ color: "#16A34A" }}>Guard</span>hq.tech
                      </p>
                      <p
                        className="font-mono"
                        style={{
                          color: "#A78BFA",
                          fontSize: "13px",
                          letterSpacing: "0.08em",
                          fontWeight: 600,
                        }}
                      >
                        Powered by ElixirID
                      </p>
                      <div
                        style={{
                          fontFamily: "DM Sans, sans-serif",
                          fontSize: "16px",
                          color: "#FFFFFF",
                          fontWeight: 600,
                        }}
                      >
                        <p style={{ marginBottom: "2px" }}>Elle Shorter</p>
                        <p style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.8)" }}>Founder & Chief Product Strategist</p>
                        
                        {/* LinkedIn */}
                        <div className="flex items-center justify-center gap-2 mt-3">
                          <Linkedin className="w-4 h-4" style={{ color: "#8B5CF6" }} />
                          <p
                            className="font-mono"
                            style={{
                              color: "#8B5CF6",
                              fontSize: "13px",
                              fontWeight: 500,
                              letterSpacing: "0.08em",
                            }}
                          >
                            www.linkedin.com/in/ellev8
                          </p>
                        </div>
                        
                        {/* Instagram */}
                        <div className="flex items-center justify-center gap-2 mt-1">
                          <Instagram className="w-4 h-4" style={{ color: "#8B5CF6" }} />
                          <p
                            className="font-mono"
                            style={{
                              color: "#8B5CF6",
                              fontSize: "13px",
                              fontWeight: 500,
                              letterSpacing: "0.08em",
                            }}
                          >
                            @the_product_elixir
                          </p>
                        </div>
                      </div>
                      
                      {/* Email Addresses */}
                      <div className="space-y-2 mt-4">
                        <div className="flex items-center justify-center gap-2">
                          <Mail className="w-4 h-4" style={{ color: "#FFFFFF" }} />
                          <p
                            style={{
                              fontFamily: "DM Sans, sans-serif",
                              fontSize: "15px",
                              color: "#FFFFFF",
                              fontWeight: 600,
                            }}
                          >
                            elleshorter0324@gmail.com
                          </p>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                          <Mail className="w-4 h-4" style={{ color: "#FFFFFF" }} />
                          <p
                            style={{
                              fontFamily: "DM Sans, sans-serif",
                              fontSize: "15px",
                              color: "#FFFFFF",
                              fontWeight: 600,
                            }}
                          >
                            connect@productelixir-ai.tech
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Animated glow for contact box */}
                    <motion.div
                      className="absolute inset-0 rounded-xl pointer-events-none"
                      style={{
                        background: "radial-gradient(circle at 50% 50%, rgba(13, 148, 136, 0.2) 0%, transparent 70%)",
                      }}
                      animate={{
                        opacity: [0.4, 0.7, 0.4],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </motion.div>
                </div>

                {/* Animated glow */}
                <motion.div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  style={{
                    background: "radial-gradient(circle at 50% 50%, rgba(13, 148, 136, 0.15) 0%, transparent 70%)",
                  }}
                  animate={{
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </motion.div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            className="text-center pt-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.7 }}
          >
            <div
              className="inline-block px-10 py-5 rounded-2xl backdrop-blur-2xl border relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(13, 148, 136, 0.15) 0%, rgba(22, 163, 74, 0.1) 100%)",
                borderColor: "rgba(13, 148, 136, 0.3)",
                boxShadow: "0 20px 60px rgba(13, 148, 136, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
              }}
            >
              <p
                className="text-white mb-2"
                style={{
                  fontFamily: "DM Sans, sans-serif",
                  fontSize: "18px",
                  fontWeight: 600,
                }}
              >
                Every AI agent needs authorization. Every authorization needs governance.
              </p>
              <p
                className="font-mono text-[#0D9488] text-sm"
                style={{ letterSpacing: "0.08em" }}
              >
                Let's build equitable healthcare AI together.
              </p>

              {/* Animated glow */}
              <motion.div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: "radial-gradient(circle at 50% 50%, rgba(13, 148, 136, 0.2) 0%, transparent 70%)",
                }}
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function InvestmentItem({ percent, color, text, delay }: { percent: string; color: string; text: string; delay: number }) {
  return (
    <motion.div
      className="flex items-start gap-3"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.5 }}
    >
      <div
        className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
        style={{
          backgroundColor: color,
          boxShadow: `0 0 8px ${color}`,
        }}
      />
      <p
        className="text-white/90"
        style={{
          fontFamily: "DM Sans, sans-serif",
          fontSize: "15px",
          lineHeight: 1.6,
        }}
      >
        {percent} — {text}
      </p>
    </motion.div>
  );
}

function MilestoneItem({
  icon,
  color,
  label,
  delay,
}: {
  icon: React.ReactNode;
  color: string;
  label: string;
  delay: number;
}) {
  return (
    <motion.div
      className="flex items-center gap-4"
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
      <p
        className="text-white"
        style={{
          fontFamily: "DM Sans, sans-serif",
          fontSize: "15px",
          fontWeight: 600,
        }}
      >
        {label}
      </p>
    </motion.div>
  );
}