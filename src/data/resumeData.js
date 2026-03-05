const resumeData = {
    identity: {
        name: "Brett Maverick Callaway",
        headline: "Software Engineer • Backend / Full-Stack",
    },

    contact: {
        phone: "602-299-6997",
        email: "brettmcallaway@gmail.com",
        linkedin: "https://linkedin.com/in/brett-maverick-callaway",
        github: "https://github.com/bmcallaway",
        location: "Phoenix, AZ",
    },

    experience: [
        {
            title: "Software Engineer",
            company: "Jenius Bank",
            location: "Scottsdale, AZ",
            dates: "Aug 2025 – Mar 2026",
            bullets: [
                "Designed, developed, and maintained scalable backend services and GraphQL APIs using Kotlin + Spring Boot (DGS).",
                "Integrated gRPC services with external financial platforms; managed protobuf evolution and backward compatibility.",
                "Supported production/UAT by diagnosing service failures, resolving config/secrets issues, improving auth reliability.",
                "Contributed to release management: cherry-picking fixes, resolving merge conflicts, validating deployment readiness.",
                "Collaborated across Agile SDLC with engineers, PM, and QA to ship secure, production-ready features.",
            ],
            chips: ["Kotlin", "Spring Boot", "GraphQL (DGS)", "gRPC", "Release Mgmt"],
        },
        {
            title: "Software Engineer Intern",
            company: "Axway Software",
            location: "Scottsdale, AZ",
            dates: "Jun 2025 – Aug 2025",
            bullets: [
                "Delivered production-ready fixes for Java-based CLI and developer tooling used by enterprise customers.",
                "Debugged and resolved defects across services, improving reliability and reducing regressions.",
                "Expanded unit/integration test coverage to strengthen release confidence.",
                "Resolved Docker image and dependency issues in GitLab CI/CD pipelines, improving build stability.",
                "Improved Kubernetes deployments by enforcing resource limits and optimizing pod scheduling.",
            ],
            chips: ["Java", "CI/CD", "Docker", "Kubernetes", "Testing"],
        },
    ],

    projects: [
        {
            name: "RPM Donation Lottery System",
            dates: "Aug 2024 – May 2025",
            tags: ["Java", "Spring", "JPA/Hibernate", "MySQL", "Stripe API"],
            bullets: [
                "Built a full-stack Java/Spring app enabling secure donation processing and lottery entry management.",
                "Designed controller + service layers following MVC principles using Spring, JPA, and Hibernate.",
                "Collaborated on schema changes to keep entities consistent with MySQL tables.",
                "Implemented secure workflows for payment processing, campaign entry, and transaction tracking.",
            ],
            links: [
                // optional later:
                // { label: "Repo", href: "https://github.com/..." },
                // { label: "Case Study", href: "https://..." },
            ],
        },
        {
            name: "Fincast",
            dates: "May 2024 – Present",
            tags: ["Dropwizard", "JavaScript", "HTML", "CSS", "JWT Auth"],
            bullets: [
                "Built a financial forecasting platform for income tracking, expense modeling, and scenario analysis.",
                "Designed and implemented REST APIs supporting financial data modeling and projections.",
                "Implemented JWT auth and resource-level authorization to secure user data.",
                "Built a lightweight web UI with authentication, session management, and dashboard views.",
            ],
            links: [],
        },
    ],

    skills: {
        Languages: ["Java", "Kotlin", "JavaScript", "SQL (MySQL)", "HTML/CSS"],
        Frameworks: ["Spring Boot", "DGS GraphQL", "Dropwizard", "JUnit"],
        Tools: [
            "Git",
            "GitLab CI/CD",
            "Azure",
            "Docker",
            "Kubernetes",
            "Jenkins",
            "IntelliJ",
            "VS Code",
            "Eclipse",
            "Jira",
            "Confluence",
            "Postman",
        ],
    },

    education: [
        {
            school: "Arizona State University",
            location: "Tempe, AZ",
            degree: "B.S. Software Engineering",
            dates: "Aug 2025",
        },
    ],
};

export default resumeData;