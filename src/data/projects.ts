export type Project = {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  details: string;
  screenshots: string[];
};

export const projects: Project[] = [

  {
    title: "UDP-to-TCP File Transfer Protocol",
    description: "A reliable file transfer system over LAN using raw UDP sockets. Features CRC error checking and a sliding window protocol to guarantee ordered, lossless packet delivery.",
    technologies: ["C++", "UDP", "Sockets", "OOP"],
    details: "This project implements a custom file transfer protocol that leverages UDP for fast communication while ensuring reliability through error checking and a sliding window mechanism.",
    github: "https://github.com/Miguel-Cortes-Munoz/UDP-to-TCP",
    screenshots: [],
  },
  {
    title: "Car Dealership Database System",
    description: "Full-stack web application powered by a 3NF relational database. Supports high-volume CRUD operations and real-time inventory and transaction tracking.",
    technologies: ["PHP", "SQL", "HTML/CSS", "REST API"],
    details: "This project involves designing and implementing a comprehensive database system for a car dealership, handling inventory management, sales transactions, and customer information.",
    github: "https://github.com/Miguel-Cortes-Munoz/Car-Dealership-Database",
    screenshots: [],
  },
  {
    title: "Predicting Steam Game Reception",
    description: "Binary classifier trained on 40,000+ games with 507 engineered features (0.73 ROC-AUC). Surfaces data-driven insights for indie game developers using chi-square testing.",
    technologies: ["Python", "Machine Learning", "Scikit-Learn", "EDA"],
    details: "This project involves building a binary classifier to predict the reception of Steam games based on various features, using machine learning techniques and statistical analysis.",
    github: "https://github.com/Miguel-Cortes-Munoz/Steam-data/",
     screenshots: [],
  },
  {
    title: "P-Center Hospital Placement Optimizer",
    description: "Geospatial resource allocation model that solves the P-Center problem to minimize maximum travel distance to emergency facilities using Statistics Canada geographic data.",
    technologies: ["Python", "GeoPandas", "OSMnx", "Algorithms"],
    details: "This project implements a geospatial optimization model to determine the best locations for hospital placements, minimizing the maximum travel distance to emergency facilities.",
    github: "https://github.com/Miguel-Cortes-Munoz/P-Center-Hospital-Placements",
    screenshots: [],
  },

  
];
