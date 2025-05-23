'use client';

import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const experiences = [
  {
    title: 'Software Engineer',
    company: 'VinBigData',
    period: 'June 2022 - Present',
    location: 'Ha Noi, Vietnam',
    project: 'GenAI Call Center & Video Recording Systems',
    responsibilities: [
      'Led AI integration using SLM, LLMs and LangChain, improving user experience',
      'Scaled outbound call system with Kafka and K8s, increasing throughput by 20×',
      'Optimized system performance to handle 50+ concurrent users',
      'Designed scalable multi-tenant analytics system with modular architecture',
      'Implemented disaster recovery, boosting uptime to 99.98% while reducing costs by 60%',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Teko Vietnam',
    period: 'September 2021 - June 2022',
    location: 'Ha Noi, Vietnam',
    project: 'Teko Omni Channels (phongvu.vn, soibien.vn)',
    responsibilities: [
      'Developed responsive UI for mobile and web applications',
      'Optimized performance, reducing bundle size and improving PageSpeed scores',
      'Implemented BFF layer for streamlined service communication',
      'Established testing protocols achieving 70%+ coverage',
      'Reduced code duplication by 70% through refactoring',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'bGlobal JSC',
    period: 'June 2020 - September 2021',
    location: 'Ha Noi, Vietnam',
    project: 'Booking Platform (gboss.io)',
    responsibilities: [
      'Built high-performance reservation interface with Next.js',
      'Developed analytics dashboard for business owners',
      'Optimized SEO and page load speed with SSR',
      'Achieved Google PageSpeed score of 88',
      'Implemented cross-functional feature alignment',
    ],
  },
  {
    title: 'Software Engineer Intern',
    company: 'Mcredit - MB Bank',
    period: 'October 2019 - June 2020',
    location: 'Ha Noi, Vietnam',
    project: 'Interactive Reporting System',
    responsibilities: [
      'Created interactive reporting interface with React.js',
      'Implemented mobile-first responsive design',
      'Integrated data extraction pipeline, reducing processing time by 80%',
      'Implemented secure API communication with RBAC',
      'Collaborated with data engineers on reporting formats',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 opacity-50" />
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.h2
          initial="initial"
          whileInView="animate"
          variants={fadeInUp}
          className="text-3xl font-bold text-center mb-16"
        >
          Professional Experience
        </motion.h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-200 dark:bg-blue-800" />
          
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                <ExperienceCard
                  {...experience}
                  alignment={index % 2 === 0 ? 'left' : 'right'}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
