import React from "react";
import ProjectCard from "./ProjectCard";
import "./PortfolioComponent.css";

const PortfolioComponent = ({ projects }) => {
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

export default PortfolioComponent;
