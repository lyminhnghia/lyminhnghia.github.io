"use client";

import { motion } from "framer-motion";

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  location: string;
  project: string;
  responsibilities: string[];
}

export default function ExperienceCard({ 
  title, 
  company, 
  period, 
  location,
  project,
  responsibilities 
}: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      className="relative pl-8 border-l-2 border-blue-600"
    >
      <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-600 rounded-full" />
      <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-1">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-1">{company}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{period} • {location}</p>
        <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">Project: {project}</p>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
          {responsibilities.map((responsibility, index) => (
            <li key={index} className="text-sm">{responsibility}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
} 