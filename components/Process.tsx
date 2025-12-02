// components/Process.tsx
export default function Process() {
  const steps = [
    { title: "Discovery & Strategy", desc: "Deep dive into your goals, users, and success metrics." },
    { title: "Design & Prototype", desc: "Pixel-perfect UI and interactive prototypes." },
    { title: "Development", desc: "Weekly demos, clean code, full transparency." },
    { title: "Launch & Scale", desc: "Seamless deployment + ongoing support." },
  ];

  return (
    <section className="py-32 bg-white" id="process">
      <div className="max-w-6xl mx-auto px-6 ">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900">Our Process</h2>
        <p className="mt-4 text-xl text-center text-gray-600 max-w-2xl mx-auto">
          Transparent, iterative, and built for speed without sacrificing quality.
        </p>

        <div className="mt-20 grid md:grid-cols-4 gap-12">
          {steps.map((step, i) => (
            <div key={i} className="text-center">
              <div className="text-7xl font-black text-purple-600/10 leading-none">
                {(i + 1).toString().padStart(2, '0')}
              </div>
              <h3 className="mt-8 text-xl font-semibold text-gray-900">{step.title}</h3>
              <p className="mt-4 text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}