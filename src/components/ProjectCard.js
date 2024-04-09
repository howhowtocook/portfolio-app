import React, { useState } from "react";

const ProjectCard = ({ project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === project.imageUrls.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? project.imageUrls.length - 1 : prevIndex - 1
    );
  };

  const currentImageUrl = project.imageUrls[currentImageIndex];

  return (
    <div className="project-card">
      <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
        <h3>{project.title}</h3>
      </a>
      <p>{project.description}</p>
      <div className="image-slider">
        {currentImageUrl && (
          <img src={currentImageUrl} alt={`Project ${currentImageIndex + 1}`} />
        )}
        <button onClick={prevImage}>&lt;</button>
        <button onClick={nextImage}>&gt;</button>
      </div>
    </div>
  );
};

export default ProjectCard;
