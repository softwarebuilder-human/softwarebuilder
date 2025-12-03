// app/page.tsx
import AboutSection from '@/components/AboutSection';
import Process from '@/components/Process';
import ContactForm from '@/components/ContactForm';
import TechnologiesMention from '@/components/TechnologiesMention';

export default function LandingPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-24 min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-6 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6 px-4 py-2 bg-purple-500/20 border border-purple-400/30 rounded-full">
            <span className="text-purple-300 text-sm font-semibold tracking-wide">Software Builder</span>
          </div>

          <h1 className="text-5xl md:text-8xl font-black text-white leading-tight tracking-tight">
            Software Built for<br />
            <span className=" bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Scale & Impact</span>
          </h1>

          <p className="mt-8 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light text-center">
            We partner with ambitious startups and established enterprises to deliver custom web and mobile applications that accelerate growth, enhance operations, and drive competitive advantage.
          </p>

          <div className=" mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact-form"
              className="inline-block px-10 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold text-lg rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all hover:shadow-2xl hover:shadow-purple-900/50"
            >
              Start Your Project
            </a>
            <a
              href="#about"
              className="inline-block px-10 py-4 bg-white/10 text-white font-semibold text-lg rounded-lg border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all"
            >
              Learn More
            </a>
          </div>

          <div className="mt-16 pt-12 border-t border-white/10">
            <p className="text-gray-400 text-sm uppercase tracking-widest font-semibold mb-8">Trusted by forward-thinking companies</p>
            <div className="flex justify-center items-center gap-8 opacity-60">
             {/* <div className="w-32 h-12 bg-white/5 rounded-lg flex items-center justify-center text-white/40 font-semibold">Startup Co</div>
              <div className="w-32 h-12 bg-white/5 rounded-lg flex items-center justify-center text-white/40 font-semibold">Enterprise Inc</div>
              <div className="w-32 h-12 bg-white/5 rounded-lg flex items-center justify-center text-white/40 font-semibold">Tech Leader</div>*/}
            </div>
          </div>
        </div>
      </section>

      <AboutSection />
      <Process />
      <TechnologiesMention />
      <ContactForm />
    </>
  );
}