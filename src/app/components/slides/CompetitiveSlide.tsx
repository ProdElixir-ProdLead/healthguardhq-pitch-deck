import { motion } from "motion/react";
import { Check, Minus } from "lucide-react";

export default function CompetitiveSlide() {
  const competitors = [
    {
      name: "Oasis",
      intentVerification: "partial",
      ownerRouted: false,
      driftDetection: false,
      auditChain: "partial",
    },
    {
      name: "Descope",
      intentVerification: false,
      ownerRouted: false,
      driftDetection: false,
      auditChain: false,
    },
    {
      name: "Microsoft Entra",
      intentVerification: false,
      ownerRouted: false,
      driftDetection: false,
      auditChain: "partial",
    },
    {
      name: "Okta",
      intentVerification: false,
      ownerRouted: false,
      driftDetection: false,
      auditChain: "partial",
    },
    {
      name: "Zenity",
      intentVerification: "partial",
      ownerRouted: false,
      driftDetection: false,
      auditChain: false,
    },
    {
      name: "Healthguardhq",
      intentVerification: true,
      ownerRouted: true,
      driftDetection: true,
      auditChain: true,
      isUs: true,
    },
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
            Nobody answers the regulator's question.
          </h1>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          className="overflow-hidden rounded-xl border bg-white"
          style={{
            borderColor: "#D1E0D9",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.06)",
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <table className="w-full">
            <thead>
              <tr className="border-b" style={{ borderColor: "#D1E0D9" }}>
                <th
                  className="text-left p-4"
                  style={{ fontFamily: "Sora, sans-serif", fontSize: "14px", fontWeight: 600, color: "#1A1A2E" }}
                >
                  Solution
                </th>
                <th
                  className="text-center p-4"
                  style={{ fontFamily: "Sora, sans-serif", fontSize: "13px", fontWeight: 600, color: "#1A1A2E" }}
                >
                  Intent Verification
                </th>
                <th
                  className="text-center p-4"
                  style={{ fontFamily: "Sora, sans-serif", fontSize: "13px", fontWeight: 600, color: "#1A1A2E" }}
                >
                  Owner-Routed
                  <br />
                  Enforcement
                </th>
                <th
                  className="text-center p-4"
                  style={{ fontFamily: "Sora, sans-serif", fontSize: "13px", fontWeight: 600, color: "#1A1A2E" }}
                >
                  Drift Detection
                </th>
                <th
                  className="text-center p-4"
                  style={{ fontFamily: "Sora, sans-serif", fontSize: "13px", fontWeight: 600, color: "#1A1A2E" }}
                >
                  Full Audit Chain
                </th>
              </tr>
            </thead>
            <tbody>
              {competitors.map((competitor, idx) => (
                <motion.tr
                  key={competitor.name}
                  className={`border-b ${competitor.isUs ? "bg-[rgba(13,148,136,0.05)]" : ""}`}
                  style={{ borderColor: "#D1E0D9" }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                >
                  <td
                    className="p-4"
                    style={{
                      fontFamily: "DM Sans, sans-serif",
                      fontSize: "15px",
                      fontWeight: competitor.isUs ? 600 : 500,
                      color: competitor.isUs ? "#0D9488" : "#1A1A2E",
                    }}
                  >
                    {competitor.name}
                  </td>
                  <td className="text-center p-4">
                    <StatusCell value={competitor.intentVerification} />
                  </td>
                  <td className="text-center p-4">
                    <StatusCell value={competitor.ownerRouted} />
                  </td>
                  <td className="text-center p-4">
                    <StatusCell value={competitor.driftDetection} />
                  </td>
                  <td className="text-center p-4">
                    <StatusCell value={competitor.auditChain} />
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Bottom Quote */}
        <motion.div
          className="px-8 py-4 rounded-xl border bg-white"
          style={{
            borderColor: "#0D9488",
            backgroundColor: "rgba(13, 148, 136, 0.05)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <p
            className="text-center"
            style={{ fontFamily: "DM Sans, sans-serif", fontSize: "16px", color: "#1A1A2E", lineHeight: 1.6 }}
          >
            <span className="font-semibold text-[#0D9488]">Oasis tells you what your agent IS doing.</span>{" "}
            Healthguardhq verifies it's operating within its intended purpose—<strong>before it acts</strong>.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

function StatusCell({ value }: { value: boolean | string }) {
  if (value === true) {
    return (
      <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#16A34A]">
        <Check className="w-4 h-4 text-white" />
      </div>
    );
  } else if (value === "partial") {
    return (
      <div className="inline-flex items-center justify-center">
        <span className="font-mono text-xs text-[#F59E0B] font-semibold">Partial</span>
      </div>
    );
  } else {
    return (
      <div className="inline-flex items-center justify-center">
        <Minus className="w-5 h-5 text-gray-300" />
      </div>
    );
  }
}