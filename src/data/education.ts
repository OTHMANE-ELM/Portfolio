export type Education = {
  school: string;
  degree: string;
  field?: string;
  location?: string;
  start: string;
  end?: string;
  gpa?: string;
  courses?: string[];
  highlights?: string[];
};

export const education: Education[] = [
  {
    school: "Faculté des Sciences et Techniques Guéliz",
    degree: "Licence",
    field: "Systèmes Informatiques Répartis (SIR)",
    location: "Marrakech",
    start: "2022",
    end: "2025",
    courses: [
      "Conception de systèmes distribués",
      "Programmation orientée objet",
      "Développement web full stack (Spring Boot, React, Laravel)",
      "Gestion de bases de données",
    ],
    highlights: ["En cours — stage PFE recherché"],
  },
  {
    school: "Faculté des Sciences et Techniques Guéliz",
    degree: "DEUST MIPC",
    field: "Mathématiques, Informatique, Physique et Chimie",
    location: "Marrakech",
    start: "2023-09",
    end: "2025-06",
    courses: [
      "Mathématiques",
      "Informatique",
      "Physique",
      "Chimie",
    ],
    highlights: ["Introduction aux algorithmes et à la programmation"],
  },
];
