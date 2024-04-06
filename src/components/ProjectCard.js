import React from "react";

const ProjectCard = ({ project }) => {
  const { title, description, imageUrl, demoLink } = project;

  return (
    <div className="project-card">
      <img src={imageUrl} alt={title} />
      <div className="project-details">
        <h3>{title}</h3>
        <p>{description}</p>
        {demoLink && (
          <a href={demoLink} target="_blank" rel="noopener noreferrer">
            Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
