import React from 'react'
import github_logo from '../images/github-brands.svg'
import url_logo from '../images/url.svg'

function ProjectCard({project}) {
  return (
    <div className="project-card ">
        <a href={project[3]} target="_blank" rel="noreferrer" >
          <img  src={project[0]} alt="" />
        </a>
        <div className="project-card-description">
          <h5>{project[2]}</h5>
          <a className='card-btn-redirect' href={project[1]} target="_blank" rel="noreferrer" >
            <img src={github_logo} alt="github-logo" />
          </a>
          <a className='card-btn-redirect' href={project[3]} target="_blank" rel="noreferrer" >
            <img src={url_logo} alt="www-logo" />
          </a>
        </div>
    </div>
  )
}

export default ProjectCard
