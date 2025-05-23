"use client";

import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const experiences = [
  {
    title: "Software Engineer",
    company: "VinBigData",
    period: "June 2022 - Present",
    location: "Ha Noi, Vietnam",
    project: "GenAI Call Center & Video Recording Systems",
    responsibilities: [
      "Spearheaded integration of Small Language Models (SLM), Large Language Models (LLMs) and LangChain, replacing legacy NLU, resulting in significant improvements to user experience",
      "Re-architected outbound call system by replacing Celery with Kafka, enabling horizontal scaling in Kubernetes (K8s) and increasing concurrent call throughput by 20×",
      "Optimized system performance to scale from 10 to 50+ concurrent users without additional infrastructure by enhancing load distribution",
      "Designed a horizontally scalable, multi-tenant offline voice analytics system with modular integration support",
      "Developed extensible user and tenant management APIs, ensuring efficient data synchronization and seamless platform expansion",
      "Rebuilt a centralized storage system for audio, video, and documents with S3-compatible migration and synchronization, enhancing data resilience",
      "Implemented disaster recovery and high availability for AI models, boosting uptime from 98% to 99.98%, while cutting infrastructure costs by 60% using hybrid deployments",
      "Automated model deployment with CI/CD pipelines, reducing manual effort by 90% and accelerating release cycles",
      "Refactored 20+ services to support unit testing, improving maintainability and increasing SonarCloud test coverage to 55%+",
      "Engineered real-time, end-user perspective health checks, enabling proactive issue detection and faster incident response"
    ]
  },
  {
    title: "Software Engineer",
    company: "Teko Vietnam",
    period: "September 2021 - June 2022",
    location: "Ha Noi, Vietnam",
    project: "Teko Omni Channels (phongvu.vn, soibien.vn, ...)",
    responsibilities: [
      "Embedded a WebView within the mobile application and crafted a responsive UI, ensuring a seamless user experience across devices",
      "Led performance optimization initiatives by eliminating dead code via tree-shaking, reducing React bundle size using Rollup and Webpack",
      "Achieved a 35% improvement in Google PageSpeed score on desktop and 20% on mobile, and reduced code duplication by 70%",
      "Designed and implemented a Backend-for-Frontend (BFF) layer to streamline communication between backend services and frontend UI",
      "Established frontend testing protocols using unit tests and snapshot tests, achieving 70%+ test coverage"
    ]
  },
  {
    title: "Software Engineer",
    company: "bGlobal JSC",
    period: "June 2020 - September 2021",
    location: "Ha Noi, Vietnam",
    project: "Booking Platform (gboss.io)",
    responsibilities: [
      "Engineered a high-performance reservation interface for end-users using Next.js, focusing on UX optimization and streamlined booking flow",
      "Developed a comprehensive management and analytics dashboard with React.js for store managers and business owners",
      "Optimized SEO and page load speed by implementing server-side rendering (SSR), dynamic routing, and code-splitting",
      "Achieved a Google PageSpeed score of 88, leading to a top search index position and increased organic traffic",
      "Collaborated with cross-functional teams to ensure feature alignment and data integrity across interfaces"
    ]
  },
  {
    title: "Software Engineer Intern",
    company: "Mcredit - MB Bank",
    period: "October 2019 - June 2020",
    location: "Ha Noi, Vietnam",
    project: "Interactive Reporting System",
    responsibilities: [
      "Developed an interactive reporting interface using React.js, integrated with Node.js backend services",
      "Implemented a mobile-first, responsive design for field staff accessibility",
      "Integrated the bad debt data extraction pipeline with the data warehouse, reducing manual processing time by 80%",
      "Ensured secure API communication with input validation, role-based access control, and audit logging",
      "Collaborated with data engineers and product stakeholders to align on data structure and reporting formats"
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial="initial"
          whileInView="animate"
          variants={fadeInUp}
          className="text-3xl font-bold text-center mb-12"
        >
          Professional Experience
        </motion.h2>
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              title={experience.title}
              company={experience.company}
              period={experience.period}
              responsibilities={experience.responsibilities}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 