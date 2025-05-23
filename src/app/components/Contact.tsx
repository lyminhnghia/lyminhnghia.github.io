'use client';

import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={fadeInUp}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-8">Let&apos;s Connect</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be
            part of your vision. Feel free to reach out through any of the following channels.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="mailto:physicalmeans@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors"
            >
              Email Me
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/ly-minh-nghia"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block border border-blue-600 text-blue-600 dark:text-blue-400 px-8 py-3 rounded-full font-medium hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
            >
              Connect on LinkedIn
            </motion.a>
            <motion.a
              href="tel:+84913098197"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block border border-blue-600 text-blue-600 dark:text-blue-400 px-8 py-3 rounded-full font-medium hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
            >
              Call Me
            </motion.a>
          </div>
          <p className="mt-8 text-gray-500 dark:text-gray-400">
            Based in Thuong Dinh, Thanh Xuan, Ha Noi, Vietnam
          </p>
        </motion.div>
      </div>
    </section>
  );
}
