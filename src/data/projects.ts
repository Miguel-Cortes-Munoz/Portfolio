export type Project = {
  title: string;
  description: string;
  technologies: string[];
  github: string;
};

export const projects: Project[] = [
  {
    title: "UDP File Transfer Protocol",
    description: "A reliable file transfer protocol built using UDP.",
    technologies: ["C++", "UDP", "Sockets"],
    github: "https://github.com/",
  },
  {
    title: "Facility Location",
    description: "A p-center optimization project using geographic data.",
    technologies: ["Python", "GeoPandas", "OSMnx"],
    github: "https://github.com/",
  },
];
