import { ConsultlyLogo } from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Salih Başak",
  initials: "SB",
  location: "Istanbul, Turkey",
  locationLink: "https://www.google.com/maps/place/Istanbul",
  about:
    "Detail-oriented Software Engineer dedicated to building high-quality products.",
  summary: (
    <>
      I’m an experienced software developer with 7+ years of hands-on experience
      in building scalable, robust, and high-performance systems. I’ve worked
      across various architectural styles including microservices, monolithic,
      and serverless infrastructures. My technology stack spans PHP (Symfony),
      TypeScript, Go, MySQL, MongoDB, Redis, Elasticsearch, Docker, RabbitMQ,
      AWS, GCP. I’m passionate about clean architecture, system design, and
      delivering reliable, maintainable solutions that drive real-world value.
      Over the years, I’ve built production-grade applications using TypeScript
      and NestJS, and I’m currently deepening my expertise in Go, exploring its
      simplicity and performance for backend development as part of my ongoing
      technical growth and personal interest.
    </>
  ),
  avatarUrl: "https://avatars.githubusercontent.com/u/41720222?v=4",
  personalWebsiteUrl: "https://salihb.dev",
  contact: {
    email: "salih@salihb.dev",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/salihbasakk",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/salihbasakk",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/salihbasakk",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Yildiz Technical University",
      degree: "Bachelor's Degree in Mathematical Engineering",
      start: "2014",
      end: "2019",
    },
  ],
  work: [
    {
      company: "Teknasyon",
      link: "https://teknasyon.com",
      badges: ["On-site", "PHP", "Symfony", "Golang", "RabbitMQ"],
      title: "Sr. Software Developer",
      logo: ConsultlyLogo,
      start: "2023",
      end: null,
      description: (
        <>
          Teknasyon is an innovative technology company providing global eSIM
          solutions. With a comprehensive eSIM infrastructure and digital
          services, Teknasyon delivers seamless, secure, and user-friendly
          mobile connectivity experiences to both individual consumers and
          enterprise clients. As a leading player in the telecom industry’s
          digital transformation, Teknasyon offers scalable platforms that
          accelerate adoption of eSIM technology. The company also supports
          emerging startups by providing cutting-edge solutions to help them
          scale globally.
          <ul className="list-inside list-disc">
            <li>
              Designing and developing scalable backend services for the eSIM
              platform to support dynamic provisioning, activation, and
              management of eSIM profiles.
            </li>
            <li>
              Building and maintaining robust API integrations with global
              telecom operators and SIM providers to enable seamless package
              retrieval, pricing updates, and subscription management.
            </li>
            <li>
              Implementing services with latest versions of Symfony and PHP to
              ensure modularity, high availability and efficient maintenance.
            </li>
            <li>
              Optimizing system performance and resource usage by leveraging
              FrankenPHP for asynchronous processing and real-time operations.
            </li>
            <li>
              Designing and optimizing complex database schemas and queries on
              MySQL and MongoDB to handle large-scale subscriber data securely
              and efficiently.
            </li>
            <li>
              Developing advanced caching strategies with Redis to reduce
              latency and improve response times in high-traffic environments.
            </li>
            <li>
              Creating and maintaining comprehensive OpenAPI (Swagger)
              documentation to streamline collaboration between frontend,
              backend, and third-party integrators.
            </li>
            <li>
              Implementing automated testing and continuous integration
              workflows using PHPUnit to ensure code quality and reliability in
              production.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "24 Saatte İş",
      link: "https://24saatteis.com",
      badges: ["On-site", "PHP", "Symfony", "Nest.js", "TypeScript"],
      title: "Software Developer",
      logo: ConsultlyLogo,
      start: "2021",
      end: "2023",
      description: (
        <>
          Bonded (24 Saatte İş) is a mobile application that connects employers
          and job seekers and its tech stack includes PHP, Symfony, TypeScript,
          NestJs, MySQL, MongoDB, Elasticsearch, React, React Native and AWS.
          <ul className="list-inside list-disc">
            <li>
              Migrating PHP (Symfony) to Typescript (NestJS) microservices
              architecture.
            </li>
            <li>
              Implementing an event-driven architecture through SQS integration.
            </li>
            <li>
              Devising intelligent algorithms for job posting-employee matching
              using Elasticsearch.
            </li>
            <li>
              Establishing JWT authentication for microservices across AWS API
              Gateway. Integrating third-party libraries for NestJS projects,
              such as Firebase, Twilio, WhatsApp, Stripe and Iyzico.
              Orchestrating TDD with Cucumber and Jest.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Wingie Enuygun Group",
      link: "https://enuygun.com",
      badges: ["On-site", "PHP", "Symfony", "MySQL", "RabbitMQ"],
      title: "Software Developer",
      logo: ConsultlyLogo,
      start: "2018",
      end: "2021",
      description: (
        <>
          <ul className="list-inside list-disc">
            <li>
              Active role as a software developer with main focus on PHP with
              Symfony, MySQL, Redis, Memcached, RabbitMQ, Varnish and
              Elasticsearch technology.
            </li>
            <li>
              Worked extensively on the design of various features for the bus
              tickets.
            </li>
            <li>
              Experience in performance improvements in receiving multiple
              provider results, development of new APIs for features or mobile
              application needs and payment gateway integrations.
            </li>
          </ul>
        </>
      ),
    },
  ],
  skills: [
    "PHP",
    "Symfony",
    "Nest.js",
    "TypeScript",
    "Golang",
    "MySQL",
    "MongoDB",
    "Elasticsearch",
    "RabbitMQ",
    "Redis",
    "Memcached",
    "Docker",
    "Kubernetes",
    "AWS",
    "GCP",
    "Grafana",
  ],
  projects: [],
} as const;
