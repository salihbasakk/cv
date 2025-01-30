import {
  ConsultlyLogo,
} from "@/images/logos";
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
      I am a backend-focused Software Engineer with 7 years of experience,
      specializing in high-performance PHP applications, scalable Golang services,
      and real-time collaboration systems. Experienced in technical architecture design.
      Throughout my career, I have excelled in various architectural approaches including
      microservices, monolith and serverless. I possess an extensive skill set that spans
      diverse programming languages and frameworks such as
      PHP, Symfony, TypeScript and NestJS along with expertise in technologies like
      MySQL, MongoDB, Redis, Docker, Elasticsearch, RabbitMQ and more.

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
          Teknasyon stands out as a premier mobile app developer and
          infrastructure/content provider. Apart from successfully delivering
          products in both B2B and B2C realms, Teknasyon also provides support
          to burgeoning startups on their path to global expansion.
          <ul className="list-inside list-disc">
            <li>
              Backend development of the eSIM mobile application using Symfony 6
              and PHP 8.2.
            </li>
            <li>
              Backend development of the eSIMCore project, which facilitates
              communication with other SIM service providers for package
              information, pricing and additional information utilizing Symfony
              6 and PHP 8.2.
            </li>
            <li>
              Performance enhancements via OPCache, JIT and FrankenPHP. Database
              design and query optimization.
            </li>
            <li>
              Achieving rapid response times through Redis caching. Creation of
              openAPI (swagger) documentation. Testing with PHPUnit.
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
          Bonded (24 Saatte İş) is a mobile application that connects employers and job seekers
          and its tech stack includes PHP, Symfony, TypeScript, NestJs, MySQL,
          MongoDB, Elasticsearch, React, React Native and AWS.
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
