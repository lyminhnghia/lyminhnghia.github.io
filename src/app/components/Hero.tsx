'use client';

import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div initial="initial" animate="animate" variants={fadeInUp} className="text-center">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4">NGHIA LY MINH</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">Software Engineer</p>
        <div className="text-gray-600 dark:text-gray-300 mb-8 space-y-2">
          <p>Thuong Dinh ⋄ Thanh Xuan ⋄ Ha Noi ⋄ Vietnam</p>
          <p className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:physicalmeans@gmail.com"
              className="hover:text-blue-600 dark:hover:text-blue-400"
            >
              physicalmeans@gmail.com
            </a>
            <a
              href="https://linkedin.com/in/ly-minh-nghia"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 dark:hover:text-blue-400"
            >
              linkedin.com/in/ly-minh-nghia
            </a>
          </p>
        </div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex gap-4 justify-center"
        >
          <a
            href="#contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors"
          >
            Get in Touch
          </a>
          <a
            href="#experience"
            className="inline-block border border-blue-600 text-blue-600 dark:text-blue-400 px-8 py-3 rounded-full font-medium hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
          >
            View Experience
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
