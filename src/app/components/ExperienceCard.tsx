'use client';

import { motion } from 'framer-motion';

interface ExperienceCardProps {
  company: string;
  position: string;
  period: string;
  location: string;
  project: string;
  description: string[];
}

export default function ExperienceCard({
  company,
  position,
  period,
  location,
  project,
  description,
}: ExperienceCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -5 }}
      className="card glass p-4 sm:p-6 relative overflow-hidden"
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
    >
      {/* Gradient Border */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-0 hover:opacity-10 transition-opacity duration-300" />

      <div className="relative z-10">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4 mb-3 sm:mb-4">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-gradient">{company}</h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">{position}</p>
          </div>
          <div className="text-left sm:text-right">
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">{period}</p>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">{location}</p>
          </div>
        </div>

        <div className="mb-3 sm:mb-4">
          <p className="text-sm sm:text-base font-medium text-blue-600 dark:text-blue-400">
            {project}
          </p>
        </div>

        <ul className="space-y-2">
          {description.map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 flex items-start"
            >
              <span className="text-blue-600 dark:text-blue-400 mr-2 flex-shrink-0">•</span>
              <span className="flex-grow">{item}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
