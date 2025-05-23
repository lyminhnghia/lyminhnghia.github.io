'use client';

import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const floatingAnimation = {
  initial: { y: 0 },
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <section className="relative min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-mesh" />
      <div className="absolute inset-0 bg-grid-pattern" />
      
      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 right-20 w-32 h-32 opacity-20"
        variants={floatingAnimation}
        initial="initial"
        animate="animate"
      >
        <Image
          src="/icons/react.svg"
          alt="React"
          width={128}
          height={128}
          className="w-full h-full"
        />
      </motion.div>
      <motion.div
        className="absolute bottom-20 left-20 w-24 h-24 opacity-20"
        variants={floatingAnimation}
        initial="initial"
        animate="animate"
        style={{ animationDelay: "2s" }}
      >
        <Image
          src="/icons/nodejs.svg"
          alt="Node.js"
          width={96}
          height={96}
          className="w-full h-full"
        />
      </motion.div>

      {/* Main Content */}
      <motion.div
        initial="initial"
        animate="animate"
        variants={fadeInUp}
        className="relative text-center perspective-1000 z-10"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          transformStyle: "preserve-3d",
          rotateX: isHovered ? rotateX : 0,
          rotateY: isHovered ? rotateY : 0,
          transition: "transform 0.1s ease-out",
        }}
      >
        <motion.div
          className="absolute inset-0 -z-10 blur-3xl"
          animate={{
            background: [
              "radial-gradient(circle at 0% 0%, var(--gradient-start) 0%, transparent 50%)",
              "radial-gradient(circle at 100% 0%, var(--secondary) 0%, transparent 50%)",
              "radial-gradient(circle at 100% 100%, var(--accent) 0%, transparent 50%)",
              "radial-gradient(circle at 0% 100%, var(--primary) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        />

        <motion.h1 
          className="text-4xl sm:text-6xl font-bold mb-4 text-gradient"
          style={{
            transform: "translateZ(50px)",
            textShadow: "0 4px 8px rgba(0,0,0,0.1)",
          }}
        >
          NGHIA LY MINH
        </motion.h1>
        <motion.p 
          className="text-xl text-gray-600 dark:text-gray-300 mb-4"
          style={{ transform: "translateZ(30px)" }}
        >
          Software Engineer
        </motion.p>
        <motion.div 
          className="text-gray-600 dark:text-gray-300 mb-8 space-y-2 glass p-6 rounded-2xl"
          style={{ transform: "translateZ(20px)" }}
        >
          <p>Thuong Dinh ⋄ Thanh Xuan ⋄ Ha Noi ⋄ Vietnam</p>
          <p className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:physicalmeans@gmail.com"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              physicalmeans@gmail.com
            </a>
            <a
              href="https://linkedin.com/in/ly-minh-nghia"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              linkedin.com/in/ly-minh-nghia
            </a>
          </p>
        </motion.div>
        <motion.div
          className="flex gap-4 justify-center"
          style={{ transform: "translateZ(40px)" }}
        >
          <motion.a
            href="#contact"
            className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-full font-medium transition-all relative glow"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
              y: -5
            }}
            whileTap={{ scale: 0.95 }}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            <span style={{ transform: "translateZ(20px)" }}>Get in Touch</span>
          </motion.a>
          <motion.a
            href="#experience"
            className="inline-block border-2 border-blue-600 text-blue-600 dark:text-blue-400 px-8 py-3 rounded-full font-medium transition-all relative glass"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
              y: -5
            }}
            whileTap={{ scale: 0.95 }}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            <span style={{ transform: "translateZ(20px)" }}>View Experience</span>
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-6 h-10 border-2 border-blue-600 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-2 bg-blue-600 rounded-full mt-2"
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}
