"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    projectType: "Web",
    description: "",
    budget: "",
    timeline: "",
  });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setToast(null);

    try {
      const res = await fetch("/api/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setToast({ type: "success", message: "✅ Message sent successfully!" });
        setFormData({
          name: "",
          email: "",
          whatsapp: "",
          projectType: "Web",
          description: "",
          budget: "",
          timeline: "",
        });
      } else {
        setToast({ type: "error", message: "❌ Failed to send. Try again later." });
      }
    } catch (err) {
      console.error("Error sending form:", err);
      setToast({ type: "error", message: "⚠️ Something went wrong." });
    }

    setLoading(false);
    setTimeout(() => setToast(null), 4000); // auto-hide toast after 4s
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center p-6 relative z-50">
      {/* Toast Notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`fixed top-6 left-1/2 transform -translate-x-1/2 px-5 py-3 rounded-xl shadow-lg text-sm font-medium ${
              toast.type === "success"
                ? "bg-gradient-to-r from-green-600/30 to-emerald-600/30 text-green-400 border border-green-600"
                : "bg-gradient-to-r from-red-600/30 to-rose-600/30 text-red-400 border border-red-600"
            }`}
          >
            {toast.message}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="z-10 max-w-xl w-full bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-2xl shadow-2xl p-8 text-gray-100 border border-gray-700/50 backdrop-blur-sm"
      >
        <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text">
          Start Your Project
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700/50 focus:ring-2 focus:ring-blue-500/50 transition-all"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="whatsapp"
            placeholder="WhatsApp Number"
            className="w-full p-3 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700/50 focus:ring-2 focus:ring-blue-500/50 transition-all"
            value={formData.whatsapp}
            onChange={handleChange}
            required
          />

          <select
            name="projectType"
            className="w-full p-3 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700/50 focus:ring-2 focus:ring-blue-500/50 transition-all"
            value={formData.projectType}
            onChange={handleChange}
          >
            <option>Web</option>
            <option>Android App</option>
            <option>Other</option>
          </select>

          <input
            type="text"
            name="budget"
            placeholder="Estimated Budget (e.g., ₹25,000–₹1,00,000)"
            className="w-full p-3 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700/50 focus:ring-2 focus:ring-blue-500/50 transition-all"
            value={formData.budget}
            onChange={handleChange}
          />

          <input
            type="text"
            name="timeline"
            placeholder="Expected Timeline (e.g., 2 weeks, 1 month)"
            className="w-full p-3 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700/50 focus:ring-2 focus:ring-blue-500/50 transition-all"
            value={formData.timeline}
            onChange={handleChange}
          />

          <textarea
            name="description"
            placeholder="Write something about your project..."
            rows={4}
            className="w-full p-3 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700/50 focus:ring-2 focus:ring-blue-500/50 transition-all"
            value={formData.description}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-lg font-semibold transition-all ${
              loading
                ? "bg-gradient-to-r from-blue-800/70 to-blue-900/70 text-gray-300 cursor-not-allowed"
                : "bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white"
            }`}
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
      </motion.div>
    </div>
  );
}
