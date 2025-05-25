'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SkillCardProps {
  name: string;
  level: number;
  icon: ReactNode;
  index: number;
}

export default function SkillCard({ name, level, icon, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="flex items-center gap-3 mb-4">
        {icon}
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{name}</h3>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, delay: index * 0.1 }}
          className="bg-blue-600 h-2.5 rounded-full"
        />
      </div>
      <p className="text-right text-sm text-gray-600 dark:text-gray-400 mt-2">{level}%</p>
    </motion.div>
  );
}
