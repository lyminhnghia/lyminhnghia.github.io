"use client";

import { motion } from "framer-motion";

interface SkillCardProps {
  name: string;
  level: number;
  icon: string;
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
      <div className="flex items-center mb-4">
        <span className="text-2xl mr-3">{icon}</span>
        <h3 className="text-xl font-semibold">{name}</h3>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, delay: index * 0.1 }}
          className="bg-blue-600 h-2.5 rounded-full"
        />
      </div>
      <div className="mt-2 text-right text-sm text-gray-600 dark:text-gray-400">
        {level}%
      </div>
    </motion.div>
  );
} 