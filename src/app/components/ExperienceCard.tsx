'use client';

import { motion } from 'framer-motion';

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  location: string;
  project: string;
  responsibilities: string[];
  alignment: 'left' | 'right';
}

export default function ExperienceCard({
  title,
  company,
  period,
  location,
  project,
  responsibilities,
  alignment
}: ExperienceCardProps) {
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      x: alignment === 'left' ? -50 : 50 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`relative w-[calc(50%-2rem)] ${
        alignment === 'left' ? 'mr-auto' : 'ml-auto'
      }`}
    >
      {/* Timeline dot */}
      <div className={`absolute top-6 ${
        alignment === 'left' ? 'right-[-2.5rem]' : 'left-[-2.5rem]'
      } w-5 h-5 bg-blue-600 rounded-full border-4 border-white dark:border-gray-800`} />
      
      <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-t-lg" />
        
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-1">
          {title}
        </h3>
        <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">
          {company}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
          {period} • {location}
        </p>
        <p className="text-gray-600 dark:text-gray-300 font-medium mb-3 border-b border-gray-100 dark:border-gray-800 pb-2">
          {project}
        </p>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
          {responsibilities.map((responsibility, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-sm"
            >
              {responsibility}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
