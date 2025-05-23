'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'React.js', level: 90, icon: '/icons/react.svg', darkIcon: '/icons/react.svg' },
      { name: 'Next.js', level: 85, icon: '/icons/nextjs.svg', darkIcon: '/icons/nextjs.svg' },
      {
        name: 'TypeScript',
        level: 88,
        icon: '/icons/typescript.svg',
        darkIcon: '/icons/typescript.svg',
      },
      {
        name: 'JavaScript',
        level: 92,
        icon: '/icons/javascript.svg',
        darkIcon: '/icons/javascript.svg',
      },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Python', level: 85, icon: '/icons/python.svg', darkIcon: '/icons/python.svg' },
      { name: 'FastAPI', level: 80, icon: '/icons/fastapi.svg', darkIcon: '/icons/fastapi.svg' },
      { name: 'Node.js', level: 88, icon: '/icons/nodejs.svg', darkIcon: '/icons/nodejs.svg' },
      { name: 'Express.js', level: 85, icon: '/icons/express.svg', darkIcon: '/icons/express.svg' },
    ],
  },
  {
    category: 'Database & DevOps',
    items: [
      { name: 'MongoDB', level: 82, icon: '/icons/mongodb.svg', darkIcon: '/icons/mongodb.svg' },
      {
        name: 'PostgreSQL',
        level: 80,
        icon: '/icons/postgresql.svg',
        darkIcon: '/icons/postgresql.svg',
      },
      { name: 'Docker', level: 75, icon: '/icons/docker.svg', darkIcon: '/icons/docker.svg' },
      { name: 'AWS', level: 70, icon: '/icons/aws.svg', darkIcon: '/icons/aws.svg' },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
      <div className="absolute inset-0 bg-grid-pattern" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
        className="relative z-10"
      >
        <motion.h2
          variants={itemVariants}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-gradient"
        >
          Technical Expertise
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {skills.map(category => (
            <motion.div
              key={category.category}
              variants={itemVariants}
              className="card glass p-4 sm:p-6"
              style={{
                transformStyle: 'preserve-3d',
                perspective: '1000px',
              }}
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-center text-gradient">
                {category.category}
              </h3>
              <div className="space-y-4 sm:space-y-6">
                {category.items.map(skill => (
                  <motion.div
                    key={skill.name}
                    className="relative"
                    whileHover={{ scale: 1.02 }}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <div className="flex items-center mb-2">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 mr-2 sm:mr-3 relative flex-shrink-0">
                        <Image
                          src={skill.icon}
                          alt={skill.name}
                          width={32}
                          height={32}
                          className="w-full h-full dark:invert dark:brightness-200"
                          onError={e => {
                            const target = e.target as HTMLImageElement;
                            target.src = '/icons/responsive.svg';
                          }}
                        />
                      </div>
                      <div className="flex-grow min-w-0">
                        <span className="text-sm sm:text-base font-medium truncate block">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-xs sm:text-sm text-gray-500 ml-2 flex-shrink-0">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 sm:h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-600 to-blue-400"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
