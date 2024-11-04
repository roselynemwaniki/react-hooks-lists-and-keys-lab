import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from './About';
import ProjectList from "./ProjectList";


function App() {
  const projects = [
    { id: 1, name: "Project 1", about: "Description 1", technologies: ["HTML", "CSS", "JavaScript"] },
    { id: 2, name: "Project 2", about: "Description 2", technologies: ["React", "Redux", "Node.js"] },
    { id: 3, name: "Project 3", about: "Description 3", technologies: ["Ruby", "Rails", "PostgreSQL"] },
  ];
  const links = {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
  };

  return (
    <div>
      <NavBar />
      <Home />
      <About links={links}/>
      <ProjectList projects={projects} />
    </div>
  );
}

export default App;