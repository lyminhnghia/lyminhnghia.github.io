'use client';

import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const experiences = [
  {
    company: 'VinBigData',
    position: 'Software Engineer',
    period: 'June 2022 - Present',
    location: 'Hanoi, Vietnam',
    project: 'GenAI Call Center & Video Recording Systems',
    description: [
      'Integrated SLMs, LLMs, and LangChain to replace legacy NLU, improving UX significantly',
      'Re-architected outbound call system using Kafka and K8s, increasing concurrent call throughput by 20×',
      'Implemented hybrid deployment for AI models, improving uptime to 99.98% and cutting infrastructure costs by 60%',
      'Automated model deployment with CI/CD pipelines, reducing manual work by 90%',
    ],
  },
  {
    company: 'VinBigData',
    position: 'Software Engineer',
    period: 'August 2017 - June 2021',
    location: 'Hanoi, Vietnam',
    project: 'AI Voice Analytics & Data Platform',
    description: [
      'Built a scalable, multi-tenant offline voice analytics system with modular integrations',
      'Redesigned centralized storage for audio/video with S3-compatible sync and migration',
      'Refactored 20+ services for testability, increasing SonarCloud coverage to 55%+',
      'Engineered real-time health checks for faster incident response and proactive monitoring',
    ],
  },
  {
    company: 'Teko Vietnam',
    position: 'Software Engineer',
    period: 'September 2021 - June 2022',
    location: 'Hanoi, Vietnam',
    project: 'Omni-Channel E-commerce Platform',
    description: [
      'Optimized frontend performance using tree-shaking, Rollup, and Webpack, improving PageSpeed by 35%',
      'Built a BFF layer for efficient backend-frontend integration',
      'Established testing protocols with unit and snapshot tests, achieving 70%+ coverage',
    ],
  },
  {
    company: 'bGlobal JSC',
    position: 'Software Engineer',
    period: 'June 2020 - September 2021',
    location: 'Hanoi, Vietnam',
    project: 'Booking Platform (gboss.io)',
    description: [
      'Developed a high-performance reservation interface with Next.js, improving UX and conversions',
      'Created a real-time analytics dashboard for business owners using React',
      'Boosted SEO and load speed with SSR, dynamic routing, and code-splitting',
    ],
  },
  {
    company: 'Mcredit - MB Bank',
    position: 'Software Engineer Intern',
    period: 'October 2019 - June 2020',
    location: 'Hanoi, Vietnam',
    project: 'Financial Reporting Dashboard',
    description: [
      'Built an interactive reporting interface using React and Node.js',
      'Integrated bad debt pipeline with data warehouse, reducing manual processing time by 80%',
      'Ensured secure API communication with role-based access and audit logging',
    ],
  },
];


export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
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
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-gradient"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Professional Experience
        </motion.h2>

        <div className="relative">
          {/* Timeline Line - Hidden on mobile, visible on larger screens */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-600 to-blue-400" />

          <div className="space-y-6 sm:space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative"
              >
                {/* Timeline Dot - Hidden on mobile, visible on larger screens */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-600 z-10" />

                {/* Mobile Timeline Dot - Visible only on mobile */}
                <div className="md:hidden absolute left-0 top-6 w-3 h-3 rounded-full bg-blue-600 z-10" />

                {/* Mobile Timeline Line - Visible only on mobile */}
                <div className="md:hidden absolute left-[5px] top-6 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-blue-400" />

                {/* Desktop: Alternate between left and right */}
                <div
                  className={`md:w-5/12 pl-8 md:pl-0 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'
                  }`}
                >
                  <ExperienceCard
                    company={experience.company}
                    position={experience.position}
                    period={experience.period}
                    location={experience.location}
                    project={experience.project}
                    description={experience.description}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 right-20 w-24 h-24 sm:w-32 sm:h-32 opacity-10"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <svg viewBox="0 0 24 24" className="w-full h-full text-blue-600">
            <path fill="currentColor" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
