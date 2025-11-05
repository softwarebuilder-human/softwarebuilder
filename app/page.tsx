'use client';

import { motion } from 'framer-motion';
import localFont from 'next/font/local';
import dynamic from 'next/dynamic';

// Prevent SSR issues with Canvas
const StarrySky = dynamic(() => import('@/components/StarrySky'), {
  ssr: false,
});

const batman= localFont({ src: './fonts/batman.ttf'});

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
          <h1
        className={`
          ${batman.className}
          text-5xl md:text-7xl font-bold mb-4
          bg-clip-text text-transparent
          bg-gradient-to-r from-purple-600 to-green-600
        `}
      >
        Software Builder
      </h1>
      <p className="text-xl md:text-2xl text-amber-200 mb-8 animate-pulse">
   Let’s Build Your App !
      </p>

           <p className="text-white text-lg md:text-xl leading-relaxed max-w-2xl mx-auto sm:p-2 text-justify">
  💡 Have an idea for your business, but not sure how to make software for it?
  Don’t worry — <strong className='bg-clip-text text-transparent
          bg-gradient-to-r from-purple-600 to-green-600'>Software Builder</strong> makes it simple.<br /><br />
  🧑‍💻 Just tell us what you need, and we’ll help you create software that fits your work perfectly. 
  Whether it’s a Website&nbsp;🌐, Mobile&nbsp;app&nbsp;📱, or Desktop&nbsp;🖥️ software — we build it all for you!<br /><br />
  😌 No confusing terms, no extra headache — only easy steps and clear results.
</p>
<div className="mt-8">
  <p className="mt-4 text-4xl text-yellow-400 animate-bounce font-semibold">
    Coming Soon!
  </p>
  {/*
    <a 
      href="/form" 
      className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold py-3 px-8 rounded-full transition duration-300 ease-in-out shadow-md hover:shadow-lg"
    >
      💡 I Want to Build Something
    </a>
  */}
</div>


        </motion.div>
        
        
        
      </div>
    </div>
  );
}