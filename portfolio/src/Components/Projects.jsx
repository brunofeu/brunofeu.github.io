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
    <div id='projects' className="flex flex-col">
      <div>
        <h3 className="text-lg font-bold py-10">Projetos</h3>
      </div>
      <div className="flex justify-around">
        {Object.values(projects).map((project) => (<ProjectCard project={project}/>))}
      </div>
    </div>
  )
}

export default Projects
