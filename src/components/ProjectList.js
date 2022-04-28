import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({projects}) {
  console.log(projects);
  const renderprojects = projects.map((object) =>{
   return <ProjectItem key={object.id} name = {object.name} about = {object.about} technologies={object.technologies} />

   
   //         <key> {object.id}</key>
     //        <h3> {object.name}</h3>
       //       <p>{object.about}</p>
         //     <span> {object.children} </span>
           //</div>

  })

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {renderprojects}
      </div>
    </div>
  );
}

export default ProjectList;
