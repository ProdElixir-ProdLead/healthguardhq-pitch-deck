import { motion } from "motion/react";
import { CheckCircle2, Circle, TrendingUp, Users, Rocket, Code } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts";

export default function TractionSlide() {
  const metrics = [
    { month: "Oct", pilots: 2, integrations: 1 },
    { month: "Nov", pilots: 3, integrations: 2 },
    { month: "Dec", pilots: 4, integrations: 3 },
    { month: "Jan", pilots: 6, integrations: 4 },
    { month: "Feb", pilots: 8, integrations: 5 },
  ];

  const timeline = [
    {
      phase: "BETA LAUNCH",
      date: "Oct 2025",
      status: "complete",
      color: "#16A34A",
      icon: <CheckCircle2 className="w-5 h-5" />,
      achievements: [
        "Platform MVP deployed",
        "First healthcare pilot: Regional MSO (3 locations)",
        "Intent capture + token enforcement live",
      ],
    },
    {
      phase: "VALIDATION",
      date: "Nov–Dec 2025",
      status: "complete",
      color: "#16A34A",
      icon: <CheckCircle2 className="w-5 h-5" />,
      achievements: [
        "3 paying pilots confirmed ($15K–$25K MRR)",
        "EHR integrations: Epic, Cerner",
        "First audit ledger compliance review passed",
      ],
    },
    {
      phase: "EXPANSION",
      date: "Jan–Feb 2026",
      status: "active",
      color: "#F59E0B",
      icon: <Circle className="w-5 h-5" />,
      achievements: [
        "8 pilots active (targeting 12 by Mar)",
        "Enterprise POC: 850-bed health system",
        "Agent drift detection 93% accuracy",
      ],
    },
    {
      phase: "SCALE",
      date: "Q2 2026",
      status: "upcoming",
      color: "#0D9488",
      icon: <Circle className="w-5 h-5" />,
      achievements: [
        "15–20 enterprise conversions",
        "EU AI Act compliance certification",
        "Series A close ($3.5M–$4.5M)",
      ],
    },
  ];

  return (
    <div className="w-full h-full relative overflow-hidden bg-gradient-to-br from-[#F8FAFB] via-white to-[#F1F5F9]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          style={{
            backgroundImage: `
              radial-gradient(circle at 2px 2px, #16A34A 1px, transparent 0)
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
        style={{ background: "radial-gradient(circle, #16A34A 0%, transparent 70%)", bottom: "-15%", right: "-10%" }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.12, 0.2, 0.12] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
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
              <div className="h-[2px] w-16 bg-gradient-to-r from-[#16A34A] to-[#0D9488]" />
              <p
                className="font-mono uppercase tracking-wider"
                style={{ color: "#16A34A", fontSize: "11px", fontWeight: 600, letterSpacing: "0.15em" }}
              >
                TRACTION & MOMENTUM
              </p>
            </div>
            <h1
              style={{
                fontFamily: "Sora, sans-serif",
                fontSize: "56px",
                fontWeight: 800,
                color: "#0F172A",
                lineHeight: 1.15,
              }}
            >
              4 months. 8 pilots. Real revenue.
            </h1>
            <p
              style={{
                fontFamily: "DM Sans, sans-serif",
                fontSize: "20px",
                lineHeight: 1.6,
                color: "#64748B",
                maxWidth: "700px",
              }}
            >
              From beta to <strong className="text-[#0F172A]">product-market fit validation</strong>—with enterprise pilots and paying customers.
            </p>
          </motion.div>

          {/* Key Metrics Row */}
          <motion.div
            className="grid grid-cols-4 gap-5"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <MetricCard
              value="8"
              label="Active Pilots"
              sublabel="Targeting 12 by March"
              icon={<Users className="w-5 h-5" />}
              color="#16A34A"
              delay={0.4}
            />
            <MetricCard
              value="$25K"
              label="Avg Pilot MRR"
              sublabel="$15K–$35K range"
              icon={<TrendingUp className="w-5 h-5" />}
              color="#0D9488"
              delay={0.5}
            />
            <MetricCard
              value="93%"
              label="Drift Detection"
              sublabel="Accuracy rate"
              icon={<Rocket className="w-5 h-5" />}
              color="#F59E0B"
              delay={0.6}
            />
            <MetricCard
              value="5"
              label="EHR Integrations"
              sublabel="Epic, Cerner, Meditech+"
              icon={<Code className="w-5 h-5" />}
              color="#0D9488"
              delay={0.7}
            />
          </motion.div>

          {/* Timeline */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.7 }}
          >
            <div className="relative">
              {/* Timeline connector line */}
              <div
                className="absolute left-[60px] top-8 bottom-8 w-[3px]"
                style={{
                  background: "linear-gradient(180deg, #16A34A 0%, #16A34A 50%, #0D9488 75%, #CBD5E1 100%)",
                }}
              />

              <div className="space-y-0">
                {timeline.map((item, idx) => (
                  <TimelineItem key={idx} item={item} index={idx} delay={0.9 + idx * 0.15} />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Growth Chart */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.7 }}
          >
            <div
              className="p-8 rounded-2xl backdrop-blur-xl border relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.8) 100%)",
                borderColor: "rgba(22, 163, 74, 0.12)",
                boxShadow: "0 20px 60px rgba(22, 163, 74, 0.08), inset 0 1px 0 rgba(255, 255, 255, 1)",
              }}
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3
                    style={{
                      fontFamily: "Sora, sans-serif",
                      fontSize: "20px",
                      fontWeight: 700,
                      color: "#0F172A",
                      marginBottom: "4px",
                    }}
                  >
                    Growth Trajectory
                  </h3>
                  <p
                    className="font-mono uppercase tracking-wider"
                    style={{ fontSize: "10px", color: "#16A34A", fontWeight: 600, letterSpacing: "0.12em" }}
                  >
                    Oct 2025 – Feb 2026
                  </p>
                </div>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#16A34A" }} />
                    <span className="text-sm text-gray-600 font-mono">Pilots</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#0D9488" }} />
                    <span className="text-sm text-gray-600 font-mono">Integrations</span>
                  </div>
                </div>
              </div>

              <ResponsiveContainer width="100%" height={180}>
                <AreaChart data={metrics}>
                  <defs>
                    <linearGradient id="colorPilots" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#16A34A" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#16A34A" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorIntegrations" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#0D9488" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#0D9488" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" vertical={false} />
                  <XAxis
                    dataKey="month"
                    tick={{ fill: "#64748B", fontSize: 12, fontFamily: "JetBrains Mono, monospace" }}
                    axisLine={{ stroke: "#E2E8F0" }}
                    tickLine={false}
                  />
                  <YAxis
                    tick={{ fill: "#64748B", fontSize: 12, fontFamily: "JetBrains Mono, monospace" }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(255, 255, 255, 0.95)",
                      border: "1px solid #E2E8F0",
                      borderRadius: "8px",
                      boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
                      fontFamily: "DM Sans, sans-serif",
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="pilots"
                    stroke="#16A34A"
                    strokeWidth={3}
                    fillOpacity={1}
                    fill="url(#colorPilots)"
                  />
                  <Area
                    type="monotone"
                    dataKey="integrations"
                    stroke="#0D9488"
                    strokeWidth={3}
                    fillOpacity={1}
                    fill="url(#colorIntegrations)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function MetricCard({
  value,
  label,
  sublabel,
  icon,
  color,
  delay,
}: {
  value: string;
  label: string;
  sublabel: string;
  icon: React.ReactNode;
  color: string;
  delay: number;
}) {
  return (
    <motion.div
      className="group"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, type: "spring", stiffness: 200 }}
      whileHover={{ y: -4, scale: 1.02 }}
    >
      <div
        className="p-5 rounded-xl backdrop-blur-xl border relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.8) 100%)",
          borderColor: `${color}20`,
          boxShadow: `0 8px 24px ${color}10, inset 0 1px 0 rgba(255, 255, 255, 1)`,
        }}
      >
        <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: color }} />
        
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div
              className="p-2 rounded-lg"
              style={{ backgroundColor: `${color}15`, color }}
            >
              {icon}
            </div>
            <p
              className="font-mono"
              style={{ fontSize: "28px", fontWeight: 800, color, lineHeight: 1 }}
            >
              {value}
            </p>
          </div>
          <div>
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
                fontSize: "11px",
                color: "#64748B",
              }}
            >
              {sublabel}
            </p>
          </div>
        </div>

        {/* Hover glow */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: `radial-gradient(circle at 50% 0%, ${color}15 0%, transparent 70%)` }}
        />
      </div>
    </motion.div>
  );
}

function TimelineItem({ item, index, delay }: { item: any; index: number; delay: number }) {
  return (
    <motion.div
      className="relative flex items-start gap-6 pb-8"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Icon Circle */}
      <div className="relative z-10 flex-shrink-0">
        <motion.div
          className="w-12 h-12 rounded-full border-4 bg-white flex items-center justify-center relative"
          style={{
            borderColor: item.color,
            boxShadow: `0 0 20px ${item.color}40`,
          }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: delay + 0.2, type: "spring", stiffness: 200 }}
        >
          <div style={{ color: item.color }}>{item.icon}</div>
          
          {/* Pulsing ring for active */}
          {item.status === "active" && (
            <motion.div
              className="absolute inset-0 rounded-full border-2"
              style={{ borderColor: item.color }}
              animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          )}
        </motion.div>
      </div>

      {/* Content */}
      <div className="flex-1 pt-1">
        <div
          className="p-6 rounded-xl backdrop-blur-xl border relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.7) 100%)",
            borderColor: `${item.color}20`,
            boxShadow: `0 4px 16px ${item.color}08`,
          }}
        >
          <div className="flex items-start justify-between mb-4">
            <div>
              <h4
                style={{
                  fontFamily: "Sora, sans-serif",
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "#0F172A",
                  marginBottom: "4px",
                }}
              >
                {item.phase}
              </h4>
              <p
                className="font-mono"
                style={{ fontSize: "11px", color: item.color, fontWeight: 600, letterSpacing: "0.08em" }}
              >
                {item.date}
              </p>
            </div>
            <div
              className="px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider"
              style={{
                backgroundColor: `${item.color}15`,
                color: item.color,
                fontSize: "10px",
                fontWeight: 600,
              }}
            >
              {item.status}
            </div>
          </div>

          <div className="space-y-2">
            {item.achievements.map((achievement: string, idx: number) => (
              <div key={idx} className="flex items-start gap-3">
                <div
                  className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                  style={{ backgroundColor: item.color }}
                />
                <p
                  style={{
                    fontFamily: "DM Sans, sans-serif",
                    fontSize: "14px",
                    lineHeight: 1.6,
                    color: "#475569",
                  }}
                >
                  {achievement}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}