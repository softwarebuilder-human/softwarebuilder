'use client';

import { motion } from 'framer-motion';
import localFont from 'next/font/local';
import dynamic from 'next/dynamic';
import ContactForm from '@/components/ContactForm';

// Prevent SSR issues with Canvas
const StarrySky = dynamic(() => import('@/components/StarrySky'), {
  ssr: false,
});

const batman= localFont({ src: './fonts/batman.ttf'});

export default function LandingPage() {
  return (
    <>
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
  💰 And we keep it <span className='text-green-400'>Super Affordable</span>, so small businesses and individuals can bring their ideas to life without spending too much.<br /><br />
  
  😌 No confusing terms, no extra headache — only easy steps and clear results.
</p>



        </motion.div>
        
        
        
      </div>
    </div>
    <section id='contactform'>
      <ContactForm />
    </section>
    </>
  );
}