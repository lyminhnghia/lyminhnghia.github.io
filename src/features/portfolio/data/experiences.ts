import type { Experience } from "../types/experiences"

export const EXPERIENCES: Experience[] = [
  {
    id: "bluebelt-group",
    companyName: "BlueBelt Group",
    companyWebsite: "https://bluebelt.group",
    isCurrentEmployer: true,
    positions: [
      {
        id: "1",
        title: "Senior Software Engineer",
        employmentPeriod: {
          start: "06.2025",
        },
        employmentType: "Full-time",
        icon: "code",
        description:
          "- Led development of a virtual assistant for real estate, integrating conversational AI to automate property inquiries and customer engagement.\n- Delivered the Airnix AI Trainer with lip-synced avatars and real-time dialogue capabilities, bringing the product to production within 2 months.\n- Implemented camera-based posture analysis and AI-driven feedback to enhance user engagement and learning experience.\n- Evaluated and integrated LiveKit for online recording and practice rooms, improving real-time streaming and interaction quality.",
        skills: [
          "Golang",
          "Python",
          "LLM",
          "LiveKit",
          "Computer Vision",
          "Real-time Systems",
        ],
        isExpanded: true,
      },
    ],
  },
  {
    id: "vinbigdata",
    companyName: "VinBigData",
    companyWebsite: "https://vinbigdata.com",
    positions: [
      {
        id: "1",
        title: "Software Engineer",
        employmentPeriod: {
          start: "06.2022",
          end: "06.2025",
        },
        employmentType: "Full-time",
        icon: "code",
        description:
          "- Spearheaded integration of SLMs, LLMs, and LangChain to replace legacy NLU components and improve user experience.\n- Re-architected outbound calling by replacing Celery with Kafka, enabling horizontal scaling on Kubernetes and increasing concurrent throughput by 20x.\n- Optimized GenAI call center capacity from 5 to 30+ concurrent users without additional infrastructure.\n- Designed a horizontally scalable multi-tenant offline voice analytics system with modular integration support.\n- Developed extensible user and tenant management APIs for synchronization and platform scalability.\n- Rebuilt centralized storage for audio, video, and documents with S3-compatible migration and synchronization.\n- Implemented disaster recovery and high availability strategies, improving uptime from 98% to 99.98% and reducing infrastructure cost by 60% through hybrid deployment.\n- Automated model deployment via CI/CD pipelines, reducing manual intervention by 90% and accelerating release cycles.\n- Refactored over 20 services for unit testing and raised SonarCloud test coverage to 55%+.\n- Engineered real-time, end-user perspective health checks for proactive issue detection and faster incident response.",
        skills: [
          "Python",
          "Golang",
          "Kafka",
          "Kubernetes",
          "LangChain",
          "AWS",
          "CI/CD",
          "SonarCloud",
        ],
      },
    ],
  },
  {
    id: "teko-vietnam",
    companyName: "Teko Vietnam",
    companyWebsite: "https://teko.vn",
    positions: [
      {
        id: "1",
        title: "Software Engineer",
        employmentPeriod: {
          start: "09.2021",
          end: "06.2022",
        },
        employmentType: "Full-time",
        icon: "code",
        description:
          "- Designed and developed scalable backend services for Teko Omni Channel platforms (phongvu.vn, soibien.vn, vnshop.vn, and others).\n- Architected and implemented a Backend-for-Frontend layer using Go, reducing latency and accelerating feature delivery.\n- Led backend performance optimization with caching and payload reduction, achieving a 35% performance improvement.\n- Established backend testing protocols with 90%+ code coverage through unit and integration tests.\n- Collaborated across microservices architecture to ensure secure, scalable, and efficient inter-service communication.",
        skills: [
          "Golang",
          "Microservices",
          "Caching",
          "REST APIs",
          "Testing",
          "Performance Tuning",
        ],
      },
    ],
  },
  {
    id: "bglobal-jsc",
    companyName: "bGlobal JSC",
    companyWebsite: "https://gboss.io",
    positions: [
      {
        id: "1",
        title: "Software Engineer",
        employmentPeriod: {
          start: "06.2020",
          end: "09.2021",
        },
        employmentType: "Full-time",
        icon: "code",
        description:
          "- Engineered backend systems for the SaaS booking platform gboss.io using Python (Flask), PostgreSQL, and AWS.\n- Developed and maintained RESTful APIs for low-latency, high-concurrency reservation processing.\n- Enhanced database performance through query optimization, indexing, and asynchronous jobs with Celery + Redis.\n- Designed centralized logging and monitoring with Elasticsearch and Kibana to improve observability and resilience.\n- Integrated external services such as payment gateways and notification systems via secure backend middleware.\n- Contributed to DevOps pipelines by containerizing services with Docker and supporting deployments on AWS EC2.",
        skills: [
          "Python",
          "Flask",
          "PostgreSQL",
          "Redis",
          "Elasticsearch",
          "Docker",
          "AWS",
        ],
      },
    ],
  },
  {
    id: "mcredit-mb-bank",
    companyName: "Mcredit - MB Bank",
    companyWebsite: "https://www.mcredit.com.vn",
    positions: [
      {
        id: "1",
        title: "Software Engineer Intern (Part-time)",
        employmentPeriod: {
          start: "10.2019",
          end: "06.2020",
        },
        employmentType: "Internship",
        icon: "code",
        description:
          "- Developed internal reporting APIs and tools using Python (Flask), integrating with a financial data warehouse.\n- Built and optimized ETL pipelines, reducing manual processing effort by 80% for the debt management team.\n- Implemented secure API communication with RBAC and audit logging to meet financial security requirements.\n- Supported backend integration with web dashboards for real-time visualization and responsive access.\n- Collaborated with data and product teams to optimize schemas and reporting logic for better operational efficiency.",
        skills: [
          "Python",
          "Flask",
          "ETL",
          "RBAC",
          "Data Warehousing",
          "API Development",
        ],
      },
    ],
  },
  {
    id: "vnu-uet",
    companyName: "VNU University of Engineering and Technology",
    companyWebsite: "https://uet.vnu.edu.vn",
    positions: [
      {
        id: "1",
        title: "Bachelor of Information Technology",
        employmentPeriod: {
          start: "08.2017",
          end: "06.2021",
        },
        icon: "education",
        description:
          "- Education in software engineering, computer science fundamentals, and practical system development.",
        isExpanded: true,
      },
    ],
  },
]
