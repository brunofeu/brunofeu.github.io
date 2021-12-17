import React from 'react'

function ProjectCard({project}) {
  return (
    <div className=" flex justify-center items-center">
        <a href={project[1]}>
          <img className="xl:brightness-90 justify-center m-1 rounded-xl max-h-80 h-2/3 hover:brightness-100 drop-shadow-lg" src={project[0]} alt="" />
        </a>
    </div>
  )
}

export default ProjectCard
