import React from 'react'
import ProjectCard from './ProjectCard'
import starwarsImg from '../images/starwars.png'
import recipeappImg from '../images/recipeapp.png'

const projects = {
  starwars: [starwarsImg, 'https://github.com/brunofeu/starwars-planets-search'],
  recipeapp: [recipeappImg, 'https://github.com/brunofeu/recipes-app']
};

function Projects() {
  return (
    <div id='projects' className="projects-container">
      <h3 className="main-text-area">PROJETOS</h3>
      <div className="projects-cards-container">
        {Object.values(projects).map((project) => (<ProjectCard project={project}/>))}
      </div>
    </div>
  )
}

export default Projects
