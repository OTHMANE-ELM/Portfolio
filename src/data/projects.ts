export type Project = {
  title: string;
  period?: string;
  tags: string[];
  summary: string;
  link?: string;
  repo?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    title: "Application Full Stack Gestion des Étudiants",
    period: "2024",
    tags: ["Spring Boot", "React", "MySQL", "JWT", "JPA/Hibernate"],
    summary:
      "Développement d'une API REST complète avec Spring Boot pour la gestion des étudiants, modules et notes. Interface utilisateur moderne et responsive en React avec gestion d'état et appels API dynamiques. Authentification JWT, persistance JPA/Hibernate et base de données relationnelle MySQL.",
    repo: "https://github.com/OTHMANE-ELM/Application-Full-Stack-de-gestion-des-Etudiants",
  },
  {
    title: "Site Web de Cours en Ligne",
    period: "2024",
    tags: ["Laravel", "MySQL", "Bootstrap"],
    summary:
      "Plateforme e-learning avec gestion des cours, inscriptions et rôles (admin, étudiant, professeur). Interface responsive Bootstrap, authentification sécurisée et base de données via migrations Laravel.",
    repo: "https://github.com/othmaneelmatlini",
  },
  {
    title: "Gestion Restaurant",
    period: "2023",
    tags: ["Java", "JDBC", "Java Swing", "MySQL"],
    summary:
      "Application desktop Java Swing avec gestion complète des commandes, menus, tables et employés. Persistance des données via JDBC et MySQL, avec gestion de versions Git/GitHub.",
    repo: "https://github.com/OTHMANE-ELM/Gestion-Restaurant",
  },
];
