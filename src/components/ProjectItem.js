import React from 'react';

function ProjectItem({ name, about, technologies }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>{about}</p>
      <div>
        {technologies.map((tech, index) => (
          <span key={index}>{tech}</span>
        ))}
      </div>
    </div>
  );
}

export default ProjectItem;
