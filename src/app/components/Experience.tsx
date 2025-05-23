'use client';

import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const experiences = [
  {
    company: "VinBigData",
    position: "Software Engineer",
    period: "June 2022 - Present",
    location: "Hanoi, Vietnam",
    project: "AI-Powered Healthcare Platform",
    description: [
      "Integrated AI technologies into existing systems, improving diagnostic accuracy by 30%",
      "Re-architected the system for better scalability, reducing response time by 40%",
      "Optimized database queries and implemented caching strategies, improving system performance by 50%",
      "Implemented CI/CD pipelines using GitHub Actions and Docker, reducing deployment time by 60%"
    ]
  },
  {
    company: "Teko Vietnam",
    position: "Software Engineer",
    period: "September 2021 - June 2022",
    location: "Ho Chi Minh City, Vietnam",
    project: "E-commerce Platform",
    description: [
      "Optimized frontend performance, reducing page load time by 45%",
      "Developed responsive UI components using React and TypeScript",
      "Established testing protocols and implemented unit tests, achieving 85% code coverage"
    ]
  },
  {
    company: "bGlobal JSC",
    position: "Frontend Developer",
    period: "June 2020 - September 2021",
    location: "Hanoi, Vietnam",
    project: "Hotel Management System",
    description: [
      "Developed a modern reservation interface using React and Material-UI",
      "Created an interactive management dashboard with real-time analytics",
      "Optimized SEO and implemented responsive design, increasing mobile traffic by 60%",
      "Collaborated with backend team to align API endpoints with frontend requirements"
    ]
  },
  {
    company: "Mcredit - MB Bank",
    position: "Frontend Developer",
    period: "October 2019 - June 2020",
    location: "Hanoi, Vietnam",
    project: "Financial Analytics Dashboard",
    description: [
      "Created an interactive reporting interface for financial data visualization",
      "Integrated data extraction pipelines with the frontend application",
      "Implemented real-time data updates using WebSocket technology"
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
      <div className="absolute inset-0 bg-grid-pattern" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="relative z-10"
      >
        <motion.h2 
          className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gradient"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Professional Experience
        </motion.h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-600 to-blue-400" />

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-600 z-10" />

                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
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
          className="absolute top-20 right-20 w-32 h-32 opacity-10"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <svg viewBox="0 0 24 24" className="w-full h-full text-blue-600">
            <path
              fill="currentColor"
              d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
