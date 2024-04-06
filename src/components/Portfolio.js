import React from "react";
import ProjectCard from "../components/ProjectCard";

const Portfolio = () => {
  // Sample project data (replace with your actual project data)
  const projects = [
    {
      id: 1,
      title: "Data Analysis Dashboard",
      description:
        "A web dashboard for visualizing and analyzing data using charts and graphs.",
      imageUrl: "/images/project1.jpg",
      demoLink: "https://example.com/demo",
    },
    {
      id: 2,
      title: "E-commerce Website",
      description:
        "An e-commerce website with features for browsing products, adding to cart, and checkout.",
      imageUrl: "/images/project2.jpg",
      demoLink: "https://example.com/demo",
    },
    // Add more projects as needed
  ];

  return (
    <div className="portfolio">
      <h2>Portfolio</h2>
      <div className="project-list">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
