import React from "react";
import RenTech from "./RenTech.js"

function ProjectItem({ name, about, technologies }) {
  
  
  return (
    <div className="project-item">
      <rentech tech={"yep"}/>
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
      </div>
      {technologies.map((object)=>{
   return <RenTech tech={object}/>
  })}
      
    </div>
  );
}

export default ProjectItem;
