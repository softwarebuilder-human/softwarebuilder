// components/TechnologiesMention.tsx
export default function TechnologiesMention() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Technology shouldn’t be a limitation
        </h2>
        <p className="mt-6 text-xl leading-relaxed text-gray-700">
          We’re deliberately stack-agnostic and choose the best tools for your specific goals — whether that’s speed to market, long-term scalability, or team familiarity.
        </p>

        <p className="mt-10 text-lg text-gray-600 leading-relaxed">
          We regularly build with{' '}
          <a href="https://react.dev" target="_blank" rel="noopener" className="font-medium text-purple-600 hover:underline">
            React
          </a>
          ,{' '}
          <a href="https://nextjs.org" target="_blank" rel="noopener" className="font-medium text-purple-600 hover:underline">
            Next.js
          </a>
          ,{' '}
          <a href="https://typescriptlang.org" target="_blank" rel="noopener" className="font-medium text-purple-600 hover:underline">
            TypeScript
          </a>
          ,{' '}
          <a href="https://tailwindcss.com" target="_blank" rel="noopener" className="font-medium text-purple-600 hover:underline">
            Tailwind CSS
          </a>
          ,{' '}
          <a href="https://nodejs.org" target="_blank" rel="noopener" className="font-medium text-purple-600 hover:underline">
            Node.js
          </a>
          ,{' '}
          <a href="https://www.python.org" target="_blank" rel="noopener" className="font-medium text-purple-600 hover:underline">
            Python
          </a>
          {' '}& Django,{' '}
          <a href="https://reactnative.dev" target="_blank" rel="noopener" className="font-medium text-purple-600 hover:underline">
            React Native
          </a>
          ,{' '}
          <a href="https://flutter.dev" target="_blank" rel="noopener" className="font-medium text-purple-600 hover:underline">
            Flutter
          </a>
          ,{' '}
          <a href="https://postgresql.org" target="_blank" rel="noopener" className="font-medium text-purple-600 hover:underline">
            PostgreSQL
          </a>
          ,{' '}
          <a href="https://supabase.com" target="_blank" rel="noopener" className="font-medium text-purple-600 hover:underline">
            Supabase
          </a>
          , and deploy on{' '}
          <a href="https://vercel.com" target="_blank" rel="noopener" className="font-medium text-purple-600 hover:underline">
            Vercel
          </a>
          ,{' '}
          <a href="https://aws.amazon.com" target="_blank" rel="noopener" className="font-medium text-purple-600 hover:underline">
            AWS
          </a>
          , or{' '}
          <a href="https://render.com" target="_blank" rel="noopener" className="font-medium text-purple-600 hover:underline">
            Render
          </a>
          .
        </p>

        <p className="mt-8 text-lg text-gray-600">
          If your team already loves something else — we’ll use that too.
        </p>
      </div>
    </section>
  );
}