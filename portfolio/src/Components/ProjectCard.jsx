import React from 'react'

function ProjectCard({project}) {
  return (
    <div>
        <a href={project[1]}>
          <img className="project-card " src={project[0]} alt="" />
        </a>
    </div>
  )
}

export default ProjectCard
