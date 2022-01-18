import React from 'react'
import ProjectCard from './ProjectCard'
import projects from '../base/projects'
import { Carousel } from 'react-bootstrap';

function Projects() {
    
  return (
    <div id='projects' className="projects-container">
      <h3 className="projects-title">PROJETOS</h3>
      <div className="projects-cards-container">
        <Carousel className="carousel" controls={true} variant='dark' pause='hover'>
          {projects.map((project) => (
            <Carousel.Item interval={3800} >
              <ProjectCard project={project}/>
            </Carousel.Item>
            ))}
        </Carousel>
        
        <div className="project-list">
          {projects.map((project) => (
            <ProjectCard project={project}/>
          ))} 
        </div>
      
      </div>
    </div>
  )
}

export default Projects
