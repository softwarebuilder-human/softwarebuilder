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
          projectType: "",
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white flex items-center justify-center p-6 relative ">
      {/* Toast Notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`z-50 fixed top-0 left-1/2 transform -translate-x-1/2 px-5 py-3 rounded-xl shadow-lg text-sm font-medium ${
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
        className="z-10 max-w-xl w-full bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl shadow-2xl p-4 text-gray-100 border border-gray-700/50 backdrop-blur-sm"
      >
        <h2 className="text-3xl font-bold mb-6 text-justify text-white text-shadow-sm text-shadow-green-500">
          We Will Contact You After This 👇🏻
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4 text-black">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            className="text-black w-full p-3 rounded-lg bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
            className="text-black w-full p-3 rounded-lg bg-blue-100 focus:ring-2 focus:ring-blue-500/50 transition-all"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="whatsapp"
            placeholder="WhatsApp Number (Optional)"
            className="text-black w-full p-3 rounded-lg bg-blue-100 border border-gray-700/50 focus:ring-2 focus:ring-blue-500/50 transition-all"
            value={formData.whatsapp}
            onChange={handleChange}
          />

          <div className="mb-4">
  <label
    htmlFor="projectType"
    className="block text-xl font-medium text-white mb-1"
  >
    Type of App
  </label>
  <select
    id="projectType"
    name="projectType"
    className="w-full p-3 rounded-lg bg-blue-100 focus:ring-2 focus:ring-blue-500/50 transition-all"
    value={formData.projectType}
    onChange={handleChange}
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
            placeholder="Estimated Budget (eg., ₹10,000 )"
            className="text-black w-full p-3 rounded-lg bg-blue-100 border border-gray-700/50 focus:ring-2 focus:ring-blue-500/50 transition-all"
            value={formData.budget}
            onChange={handleChange}
          />

          <input
            type="text"
            name="timeline"
            placeholder="Expected Time (e.g., 2 weeks)"
            className="text-black w-full p-3 rounded-lg bg-blue-100 border border-gray-700/50 focus:ring-2 focus:ring-blue-500/50 transition-all"
            value={formData.timeline}
            onChange={handleChange}
          />

          <textarea
            name="description"
            placeholder="Tell us something about your project..."
            rows={4}
            className="text-black w-full p-3 rounded-lg bg-blue-100 border border-gray-700/50 focus:ring-2 focus:ring-blue-500/50 transition-all"
            value={formData.description}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            disabled={loading}
            className={` w-full py-3 rounded-lg font-semibold transition-all ${
              loading
                ? "bg-green-900 text-white cursor-not-allowed"
                : "bg-green-500 text-white cursor-pointer"
            }`}
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
      </motion.div>
    </div>
  );
}
