// app/page.tsx
import AboutSection from '@/components/AboutSection';
import Process from '@/components/Process';
import ContactForm from '@/components/ContactForm';
import TechnologiesMention from '@/components/TechnologiesMention';

export default function LandingPage() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-screen bg-white flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-tight">
            We Build Software<br />
            <span className="text-purple-600">That Drives Growth</span>
          </h1>
          <p className="mt-8 text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
            Custom web & mobile applications for startups and enterprises that need to move fast and scale confidently.
          </p>
          <div className="mt-12">
            <a
              href="#contact-form"
              className="inline-block px-10 py-5 bg-purple-600 text-white font-semibold text-lg rounded-xl hover:bg-purple-700 transition-shadow hover:shadow-lg"
            >
              Discuss Your Project →
            </a>
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