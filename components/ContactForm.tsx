// components/ContactForm.tsx
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
        setToast({ type: "success", message: "Message sent successfully. We'll be in touch soon!" });
        setFormData({
          name: "", email: "", whatsapp: "", projectType: "",
          description: "", budget: "", timeline: "",
        });
      } else {
        setToast({ type: "error", message: "Something went wrong. Please try again." });
      }
    } catch (err) {
      setToast({ type: "error", message: "Failed to send. Check your connection." });
    }

    setLoading(false);
    setTimeout(() => setToast(null), 5000);
  };

  return (
    <>
      {/* Full-screen section */}
      <section id="contact-form" className="pt-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Let’s Build Your Next Project
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Tell us about your goals. We reply within 2 hours.
            </p>
          </div>

          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-7">
                <div className="grid md:grid-cols-2 gap-7">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:border-purple-600 focus:outline-none transition-all duration-200 text-gray-900 placeholder-gray-500"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Business email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:border-purple-600 focus:outline-none transition-all duration-200 text-gray-900 placeholder-gray-500"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-7">
                  <input
                    type="tel"
                    name="whatsapp"
                    placeholder="WhatsApp (optional)"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:border-purple-600 focus:outline-none transition-all duration-200 text-gray-900 placeholder-gray-500"
                  />
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:border-purple-600 focus:outline-none transition-all duration-200 text-gray-900"
                  >
                    <option value="" disabled>Select project type</option>
                    <option value="Website">Website</option>
                    <option value="Web App">Web Application</option>
                    <option value="Mobile App">Mobile App</option>
                    <option value="SaaS Platform">SaaS Platform</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-7">
                  <input
                    type="text"
                    name="budget"
                    placeholder="Budget range (e.g. $50k–$100k)"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:border-purple-600 focus:outline-none transition-all duration-200 text-gray-900 placeholder-gray-500"
                  />
                  <input
                    type="text"
                    name="timeline"
                    placeholder="Expected timeline (e.g. 3 months)"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:border-purple-600 focus:outline-none transition-all duration-200 text-gray-900 placeholder-gray-500"
                  />
                </div>

                <textarea
                  name="description"
                  rows={5}
                  placeholder="Tell us about your project, goals, and challenges..."
                  value={formData.description}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:border-purple-600 focus:outline-none transition-all duration-200 text-gray-900 placeholder-gray-500 resize-none"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-5 bg-purple-600 text-white font-semibold text-lg rounded-xl hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-600/30 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Clean Toast Notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
          >
            <div
              className={`px-8 py-4 rounded-full shadow-2xl font-medium text-white ${
                toast.type === "success" ? "bg-emerald-600" : "bg-rose-600"
              }`}
            >
              {toast.message}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}