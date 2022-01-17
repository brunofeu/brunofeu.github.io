import React from 'react'
import github_logo from '../images/github-brands.svg'
import browser_logo from '../images/browser.svg'

function ProjectCard({project}) {
  const { image, githubURL, description, demoURL } = project;

  return (
    <div className="project-card ">
        <a href={demoURL} target="_blank" rel="noreferrer" >
          <img  src={image} alt="" />
        </a>
        <div className="project-card-description">
          <h5>{description}</h5>
          <a className='card-btn-redirect' href={githubURL} target="_blank" rel="noreferrer" >
            <img src={github_logo} alt="github-logo" />
          </a>
          <a className='card-btn-redirect' href={demoURL} target="_blank" rel="noreferrer" >
            <img src={browser_logo} alt="www-logo" />
          </a>
        </div>
    </div>
  )
}

export default ProjectCard
