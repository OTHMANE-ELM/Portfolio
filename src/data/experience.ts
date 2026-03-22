export type Experience = {
  company: string;
  role: string;
  location?: string;
  start: string;
  end?: string;
  description: string[];
};

export const experience: Experience[] = [
  {
    company: "Complexe de Santé El Farabi",
    role: "Stagiaire en Service Informatique",
    location: "Béni Mellal",
    start: "2025-07",
    end: "2025-08",
    description: [
      "Configuration des routeurs et pare-feu (firewalls) pour sécuriser le réseau interne de l'établissement.",
      "Diagnostic et résolution des pannes réseau afin d'assurer la continuité des services informatiques.",
      "Maintenance et suivi technique des systèmes RIS et PACS Clinisys pour l'archivage des images médicales.",
      "Assistance technique aux utilisateurs et supervision du bon fonctionnement des infrastructures informatiques.",
      "Collaboration active avec l'équipe technique dans un environnement professionnel exigeant.",
    ],
  },
];
