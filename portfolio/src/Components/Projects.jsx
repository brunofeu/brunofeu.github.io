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
        <h3 className="text-violet-800 xl:text-black text-center xl:text-left text-xl xl:text-lg font-bold pt-8 pb-6 xl:py-10">Projetos</h3>
      </div>
      <div className="flex flex-col m-1 xl:flex-row xl:justify-around ">
        {Object.values(projects).map((project) => (<ProjectCard project={project}/>))}
      </div>
    </div>
  )
}

export default Projects
