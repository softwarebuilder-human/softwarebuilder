'use client';

import { motion } from 'framer-motion';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Software Builder
          </h1>
            <p className="text-2xl text-gray-300 mb-8">
            Build your custom Software
            </p>
            <p className="text-4xl md:text-8xl text-gray-400 mb-8 animate-pulse">
            Coming Soon...
            </p>
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
            Get Started
          </button>
        </motion.div>
        
        
      </div>
    </div>
  );
}