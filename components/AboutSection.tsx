// components/AboutSection.tsx
"use client";
import { motion } from "framer-motion";

const paragraphs = [
	"You have ambitious goals. We deliver the software that makes them reality.",
	"From high-traffic web platforms to native mobile apps and complex backend systems — we build production-grade products that scale with your business.",
	"We partner with funded startups, scale-ups, and enterprises who need a reliable technical co-founder, not just another vendor.",
];

export default function AboutSection() {
	return (
		<section
			id="about"
			className="py-32 lg:py-40 bg-gradient-to-b from-white to-slate-50 overflow-hidden"
		>
			<div className="max-w-5xl mx-auto px-6">
				{/* Section header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: false, amount: 0.4 }}
					transition={{ duration: 0.7 }}
					className="mb-16 md:mb-20"
				>
					<div className="inline-block mb-4 px-4 py-2 bg-purple-100 border border-purple-300/30 rounded-full">
						<span className="text-purple-700 text-sm font-semibold tracking-wide">
							ABOUT US
						</span>
					</div>
					<h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
						Who We Are
					</h2>
					<p className="mt-4 text-lg text-gray-600">
						Partnering with ambitious companies to build world-class software
					</p>
				</motion.div>

				{/* Content sections */}
				<div className="space-y-12 md:space-y-16">
					{paragraphs.map((text, i) => (
						<motion.div
							key={i}
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: false, amount: 0.5 }}
							transition={{
								duration: 0.8,
								delay: i * 0.2,
								ease: "easeOut",
							}}
							className="border-l-4 border-purple-500 pl-8 py-2"
						>
							<p className="text-xl md:text-2xl lg:text-3xl leading-relaxed text-gray-800 font-medium">
								{text}
							</p>
						</motion.div>
					))}
				</div>

				{/* Value propositions */}
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: false, amount: 0.5 }}
					transition={{ delay: 0.6, duration: 0.8 }}
					className="mt-20 grid md:grid-cols-3 gap-8"
				>
					<div className="p-8 bg-white rounded-lg border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all">
						<div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
							<span className="text-purple-600 font-bold text-xl">01</span>
						</div>
						<h3 className="text-lg font-semibold text-gray-900 mb-2">
							Technical Excellence
						</h3>
						<p className="text-gray-600">
							Production-grade architecture and best practices at every layer
						</p>
					</div>

					<div className="p-8 bg-white rounded-lg border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all">
						<div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
							<span className="text-purple-600 font-bold text-xl">02</span>
						</div>
						<h3 className="text-lg font-semibold text-gray-900 mb-2">
							Strategic Partnership
						</h3>
						<p className="text-gray-600">
							We act as your technical co-founder, not just a vendor
						</p>
					</div>

					<div className="p-8 bg-white rounded-lg border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all">
						<div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
							<span className="text-purple-600 font-bold text-xl">03</span>
						</div>
						<h3 className="text-lg font-semibold text-gray-900 mb-2">
							Scalable Solutions
						</h3>
						<p className="text-gray-600">
							Software that grows with your business and market demands
						</p>
					</div>
				</motion.div>

				{/* CTA */}
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: false, amount: 0.8 }}
					transition={{ delay: 0.8, duration: 0.8 }}
					className="mt-20 text-center"
				>
					<a
						href="#contact-form"
						className="inline-block px-10 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold text-lg rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all hover:shadow-2xl hover:shadow-purple-900/50"
					>
						Let's talk about your project →
					</a>
				</motion.div>
			</div>
		</section>
	);
}