"use client";

import { motion } from "framer-motion";
import SkillCard from "./SkillCard";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const skills = [
  // Frontend Skills
  { name: "React.js", level: 95, icon: "⚛️", category: "Frontend" },
  { name: "Next.js", level: 92, icon: "▲", category: "Frontend" },
  { name: "TypeScript", level: 90, icon: "📘", category: "Frontend" },
  { name: "JavaScript", level: 95, icon: "📜", category: "Frontend" },
  { name: "UI/UX Design", level: 88, icon: "✨", category: "Frontend" },
  { name: "Responsive Design", level: 92, icon: "📱", category: "Frontend" },
  
  // Backend Skills
  { name: "Python", level: 90, icon: "🐍", category: "Backend" },
  { name: "FastAPI", level: 88, icon: "🚀", category: "Backend" },
  { name: "Node.js", level: 92, icon: "🟢", category: "Backend" },
  { name: "NestJS", level: 85, icon: "🪺", category: "Backend" },
  { name: "Express.js", level: 90, icon: "🚂", category: "Backend" },
  { name: "RESTful APIs", level: 95, icon: "🌐", category: "Backend" },
  
  // Database & DevOps
  { name: "MongoDB", level: 90, icon: "🍃", category: "Database" },
  { name: "PostgreSQL", level: 85, icon: "🐘", category: "Database" },
  { name: "MySQL", level: 88, icon: "🐬", category: "Database" },
  { name: "Redis", level: 85, icon: "🔴", category: "Database" },
  { name: "Docker", level: 90, icon: "🐳", category: "DevOps" },
  { name: "Kubernetes", level: 85, icon: "☸️", category: "DevOps" },
  { name: "AWS", level: 82, icon: "☁️", category: "DevOps" },
  { name: "CI/CD", level: 88, icon: "🔄", category: "DevOps" },
  { name: "Kafka", level: 85, icon: "📨", category: "DevOps" },
  { name: "RabbitMQ", level: 83, icon: "🐰", category: "DevOps" },
  { name: "Elasticsearch", level: 80, icon: "🔍", category: "DevOps" },
  { name: "Kong Gateway", level: 82, icon: "🚪", category: "DevOps" },
];

const categories = ["Frontend", "Backend", "Database", "DevOps"] as const;

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial="initial"
          whileInView="animate"
          variants={fadeInUp}
          className="text-3xl font-bold text-center mb-12"
        >
          Technical Expertise
        </motion.h2>
        
        {categories.map((category) => (
          <div key={category} className="mb-12">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-2xl font-semibold mb-6 text-center"
            >
              {category}
            </motion.h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills
                .filter((skill) => skill.category === category)
                .map((skill, index) => (
                  <SkillCard
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    icon={skill.icon}
                    index={index}
                  />
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 