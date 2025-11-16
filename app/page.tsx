'use client';

import { motion } from 'framer-motion';
import localFont from 'next/font/local';
import dynamic from 'next/dynamic';
import ContactForm from '@/components/ContactForm';
import ScrollToContactButton from '@/components/ScrollToContactButton';
import AboutSection from '@/components/AboutSection';
import Process from '@/components/Process';

// Prevent SSR issues with Canvas
const StarrySky = dynamic(() => import('@/components/StarrySky'), {
  ssr: false,
});

const batman= localFont({ src: './fonts/batman.ttf'});

export default function LandingPage() {
  return (
    <>
    <section id='top' className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white pt-16">
      
      <div className="container mx-auto px-4 py-2">
        <div className="text-center">
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

           <AboutSection batman={batman} />
<ScrollToContactButton />

</div></div>
      
    </section>
    <Process />
    <ContactForm />
    </>
  );
}