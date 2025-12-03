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
    currency: "INR",
    timeline: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.whatsapp.trim()) newErrors.whatsapp = "WhatsApp number is required";
    if (!formData.projectType) newErrors.projectType = "Please select a project type";
    if (!formData.description.trim()) newErrors.description = "Project description is required";
    if (!formData.budget.trim()) {
      newErrors.budget = "Budget is required";
    } else if (isNaN(Number(formData.budget)) || Number(formData.budget) <= 0) {
      newErrors.budget = "Please enter a valid budget amount";
    }
    if (!formData.timeline) newErrors.timeline = "Please select a timeline";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      setToast({ type: "error", message: "Please fill in all required fields correctly." });
      return;
    }

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
          name: "",
          email: "",
          whatsapp: "",
          projectType: "",
          description: "",
          budget: "",
          currency: "INR",
          timeline: "",
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

  const formFields = [
    { label: "Full Name", name: "name", type: "text", placeholder: "Elon Musk" },
    { label: "Email", name: "email", type: "email", placeholder: "elon@example.com" },
    { label: "WhatsApp Number", name: "whatsapp", type: "tel", placeholder: "+91 99671 23456" },
  ];

  const selectFields = [
    {
      label: "Project Type",
      name: "projectType",
      options: [
        { value: "", label: "Select a project type" },
        { value: "website", label: "Website" },
        { value: "web-app", label: "Web Application" },
        { value: "mobile-app", label: "Mobile App" },
        { value: "saas", label: "SaaS Platform" },
        { value: "mvp", label: "MVP Development" },
        { value: "other", label: "Other" },
      ],
    },
    {
      label: "Timeline",
      name: "timeline",
      options: [
        { value: "", label: "Select a timeline" },
        { value: "1-3-months", label: "1-3 months" },
        { value: "3-6-months", label: "3-6 months" },
        { value: "6-12-months", label: "6-12 months" },
        { value: "ongoing", label: "Ongoing/Not sure" },
      ],
    },
  ];

  return (
    <>
      {/* Contact Form Section */}
      <section id="contact-form" className="py-32 lg:py-40 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        <div className="max-w-4xl mx-auto px-6">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.7 }}
            className="mb-16 md:mb-20 text-center"
          >
            <div className="inline-block mb-4 px-4 py-2 bg-purple-100 border border-purple-300/30 rounded-full">
              <span className="text-purple-700 text-sm font-semibold tracking-wide">GET IN TOUCH</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
              Let's Build Your Next Project
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Tell us about your goals and vision. We'll respond within 2 hours with initial insights and next steps.
            </p>
          </motion.div>

          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200"
          >
            <div className="p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Text Input Fields */}
                <div className="grid md:grid-cols-2 gap-8">
                  {formFields.map((field) => (
                    <div key={field.name}>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        {field.label} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type={field.type}
                        name={field.name}
                        placeholder={field.placeholder}
                        value={formData[field.name as keyof typeof formData]}
                        onChange={handleChange}
                        className={`w-full px-5 py-3 rounded-lg border transition-all duration-200 focus:outline-none ${
                          errors[field.name]
                            ? "border-red-500 focus:border-red-600 focus:ring-2 focus:ring-red-200"
                            : "border-gray-300 focus:border-purple-600 focus:ring-2 focus:ring-purple-100"
                        } text-gray-900 placeholder-gray-500`}
                      />
                      {errors[field.name] && (
                        <p className="text-red-500 text-sm mt-2 font-medium">{errors[field.name]}</p>
                      )}
                    </div>
                  ))}
                </div>

                {/* Select Fields */}
                <div className="grid md:grid-cols-2 gap-8">
                  {selectFields.map((field) => (
                    <div key={field.name}>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        {field.label} <span className="text-red-500">*</span>
                      </label>
                      <select
                        name={field.name}
                        value={formData[field.name as keyof typeof formData]}
                        onChange={handleChange}
                        className={`w-full px-5 py-3 rounded-lg border transition-all duration-200 focus:outline-none ${
                          errors[field.name]
                            ? "border-red-500 focus:border-red-600 focus:ring-2 focus:ring-red-200"
                            : "border-gray-300 focus:border-purple-600 focus:ring-2 focus:ring-purple-100"
                        } text-gray-900`}
                      >
                        {field.options.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                      {errors[field.name] && (
                        <p className="text-red-500 text-sm mt-2 font-medium">{errors[field.name]}</p>
                      )}
                    </div>
                  ))}
                </div>

                {/* Budget and Currency Fields */}
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Budget <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      name="budget"
                      placeholder="Enter budget amount"
                      value={formData.budget}
                      onChange={handleChange}
                      min="0"
                      step="1000"
                      className={`w-full px-5 py-3 rounded-lg border transition-all duration-200 focus:outline-none ${
                        errors.budget
                          ? "border-red-500 focus:border-red-600 focus:ring-2 focus:ring-red-200"
                          : "border-gray-300 focus:border-purple-600 focus:ring-2 focus:ring-purple-100"
                      } text-gray-900 placeholder-gray-500`}
                    />
                    {errors.budget && (
                      <p className="text-red-500 text-sm mt-2 font-medium">{errors.budget}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Currency <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="currency"
                      value={formData.currency}
                      onChange={handleChange}
                      className="w-full px-5 py-3 rounded-lg border border-gray-300 focus:border-purple-600 focus:ring-2 focus:ring-purple-100 transition-all duration-200 focus:outline-none text-gray-900"
                    >
                      <option value="USD">USD ($)</option>
                      <option value="INR">INR (₹)</option>
                    </select>
                  </div>
                </div>

                {/* Textarea */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Project Description <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="description"
                    rows={5}
                    placeholder="Tell us about your project, goals, challenges, and any specific requirements..."
                    value={formData.description}
                    onChange={handleChange}
                    className={`w-full px-5 py-3 rounded-lg border transition-all duration-200 focus:outline-none resize-none ${
                      errors.description
                        ? "border-red-500 focus:border-red-600 focus:ring-2 focus:ring-red-200"
                        : "border-gray-300 focus:border-purple-600 focus:ring-2 focus:ring-purple-100"
                    } text-gray-900 placeholder-gray-500`}
                  />
                  {errors.description && (
                    <p className="text-red-500 text-sm mt-2 font-medium">{errors.description}</p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold text-lg rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-200 hover:shadow-2xl hover:shadow-purple-900/50 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? "Sending..." : "Send Project Details"}
                  </button>
                </div>

                {/* Form Note */}
                <p className="text-center text-sm text-gray-600">
                  We respect your privacy. Your information will only be used to discuss your project.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Toast Notifications */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
          >
            <div
              className={`px-8 py-4 rounded-lg shadow-2xl font-semibold text-white flex items-center gap-3 ${
                toast.type === "success" ? "bg-emerald-600" : "bg-rose-600"
              }`}
            >
              <span>{toast.type === "success" ? "✓" : "✕"}</span>
              {toast.message}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}