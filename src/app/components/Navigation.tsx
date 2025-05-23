'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const navItems = ['home', 'skills', 'experience', 'projects', 'contact'] as const;

export default function Navigation() {
  const [activeSection, setActiveSection] = useState<(typeof navItems)[number]>('home');

  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl font-bold"
          >
            Lý Minh Nghĩa
          </motion.div>
          <div className="hidden sm:flex space-x-8">
            {navItems.map(item => (
              <button
                key={item}
                onClick={() => setActiveSection(item)}
                className={`capitalize hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${
                  activeSection === item ? 'text-blue-600 dark:text-blue-400' : ''
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
