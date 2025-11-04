import { motion } from 'framer-motion';

interface Feature {
  title: string;
  description?: string;
}

interface FeaturesGridProps {
  features: Feature[];
  className?: string;
}

export default function FeaturesGrid({ 
  features = [
    { title: 'Customizable', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { title: 'Scalable', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { title: 'Reliable', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' }
  ],
  className = ''
}: FeaturesGridProps) {
  return (
    <div className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 ${className}`}>
      {features.map((feature) => (
        <motion.div
          key={feature.title}
          whileHover={{ scale: 1.05 }}
          className="bg-gray-800 bg-opacity-50 p-6 rounded-lg"
        >
          <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
          <p className="text-gray-400">
            {feature.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
}