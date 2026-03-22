export type Certification = {
  title: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  skills?: string[];
  tags?: string[];
  image?: string;
  imageAlt?: string;
  score?: string;
  progression?: string;
  status?: "active" | "expired" | "revoked";
};

export const certifications: Certification[] = [
  {
    title: "Hibernate & JPA",
    issuer: "MLIAEdu — Plateforme de Certification Professionnelle",
    issueDate: "2026-03",
    credentialId: "28-081c2878-c616-471c-b02f-84389d907df",
    credentialUrl: "#",
    skills: ["Hibernate", "JPA", "Java", "ORM", "Persistance"],
    tags: ["JEE", "Java", "Backend"],
    image: "/certs/hibernate-jpa.svg",
    imageAlt: "Certification Hibernate & JPA — MLIAEdu",
    score: "84%",
    progression: "100%",
    status: "active",
  },
  {
    title: "Développement Front-End moderne avec React",
    issuer: "MLIAEdu — Plateforme de Certification Professionnelle",
    issueDate: "2026-03",
    credentialId: "28-081c2878-c616-471c-b02f-84389d907df",
    credentialUrl: "#",
    skills: ["React", "JavaScript", "HTML", "CSS", "Frontend"],
    tags: ["React", "JavaScript", "Frontend"],
    image: "/certs/react-frontend.svg",
    imageAlt: "Certification Front-End React — MLIAEdu",
    score: "90%",
    progression: "100%",
    status: "active",
  },
  {
    title: "Développement JakartaEE : Spring",
    issuer: "MLIAEdu — Plateforme de Certification Professionnelle",
    issueDate: "2026-03",
    credentialId: "28-081c2878-c616-471c-b02f-84389d907df",
    credentialUrl: "#",
    skills: ["Spring Boot", "Spring MVC", "JakartaEE", "Java", "REST API"],
    tags: ["JEE", "Spring", "Backend"],
    image: "/certs/spring-jakartaee.svg",
    imageAlt: "Certification JakartaEE Spring — MLIAEdu",
    score: "88%",
    progression: "100%",
    status: "active",
  },
];
