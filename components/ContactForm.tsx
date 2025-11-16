"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    projectType: "",
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

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
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
        setToast({ type: "success", message: "Request Sent ✔️, We will Contact You soon !" });
        setFormData({ name: "", email: "", whatsapp: "", projectType: "", description: "", budget: "", timeline: "" });
      } else {
        setToast({ type: "error", message: "❌ Failed to send. Try again later." });
      }
    } catch (err) {
      setToast({ type: "error", message: "⚠️ Something went wrong." });
    }

    setLoading(false);
    setTimeout(() => setToast(null), 4000);
  };

  return (
    <div id='contact-form' className="min-h-screen bg-black pt-25 flex items-center justify-center p-6 relative text-white">
      {/* Toast */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="z-50 fixed inset-0 flex items-center justify-center backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`px-6 py-4 rounded-2xl shadow-2xl text-lg font-semibold border neon-shadow
                ${(toast as { type: "success" | "error"; message: string }).type === "success" ? "bg-green-500 text-black border-green-400" : "bg-red-500 text-black border-red-400"}`}
            >
              {(toast as { type: "success" | "error"; message: string }).message}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="max-w-xl w-full bg-black/60 border border-purple-500/40 rounded-2xl p-6 shadow-purple-xl backdrop-blur-md"
      >
        <h2 className="text-3xl font-bold mb-6 text-purple-400 drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]">
          We Will Contact You After This 👇🏻
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4 text-white">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-black/40 border border-purple-500/40 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 neon-glow"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-black/40 border border-purple-500/40 placeholder-gray-400 focus:ring-purple-500 neon-glow"
          />

          <input
            type="tel"
            name="whatsapp"
            placeholder="WhatsApp Number (Optional)"
            value={formData.whatsapp}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-black/40 border border-purple-500/40 placeholder-gray-400 focus:ring-purple-500 neon-glow"
          />

          <div>
            <label className="block text-lg font-medium text-purple-300 mb-1">Type of App</label>
            <select
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-black/40 border border-purple-500/40 text-white focus:ring-purple-500 neon-glow"
            >
              <option value="" disabled>Select Type</option>
              <option value="Website">Website</option>
              <option value="Android App">Android App</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <input
            type="text"
            name="budget"
            placeholder="Estimated Budget (₹10,000)"
            value={formData.budget}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-black/40 border border-purple-500/40 placeholder-gray-400 focus:ring-purple-500 neon-glow"
          />

          <input
            type="text"
            name="timeline"
            placeholder="Expected Time (e.g., 2 weeks)"
            value={formData.timeline}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-black/40 border border-purple-500/40 placeholder-gray-400 focus:ring-purple-500 neon-glow"
          />

          <textarea
            name="description"
            rows={4}
            placeholder="Tell us something about your project..."
            value={formData.description}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-black/40 border border-purple-500/40 placeholder-gray-400 focus:ring-purple-500 neon-glow"
          />

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-lg font-semibold shadow-xl neon-button transition-all text-black
              ${loading ? "bg-purple-900 cursor-not-allowed" : "bg-purple-500 hover:bg-purple-400"}`}
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
      </motion.div>
    </div>
  );
}

/* Tailwind custom utilities (add in globals.css if needed)
.neon-glow { box-shadow: 0 0 10px rgba(168, 85, 247, 0.5); }
.neon-button { box-shadow: 0 0 15px rgba(168, 85, 247, 0.8); }
.shadow-purple-xl { box-shadow: 0 0 20px rgba(168, 85, 247, 0.4); } */
