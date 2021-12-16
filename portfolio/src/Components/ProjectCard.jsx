import React from 'react'

function ProjectCard({project}) {
  return (
    <div>
        <a href={project[1]}>
          <img className="brightness-90 rounded-xl h-80 hover:brightness-100 drop-shadow-lg" src={project[0]} alt="" />
        </a>
    </div>
  )
}

export default ProjectCard
