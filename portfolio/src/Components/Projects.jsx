import React from 'react'
import ProjectCard from './ProjectCard'
import starwarsImg from '../images/starwars.png'
import recipeappImg from '../images/recipeapp.png'
import { Carousel } from 'react-bootstrap';

const projects = {
  starwars: [starwarsImg, 'https://github.com/brunofeu/starwars-planets-search', 'Pesquisa de planetas de StarWars', 'https://brunofeu.github.io/starwars-planets-search/'],
  recipeapp: [recipeappImg, 'https://github.com/brunofeu/recipes-app', 'App de Receitas', 'https://brunofeu.github.io/recipes-app/']
};

function Projects() {
  return (
    <div id='projects' className="projects-container">
      <h3 className="main-text-area">PROJETOS</h3>
      <div className="projects-cards-container">
        <Carousel controls={false} variant='dark' pause='hover'>
          {Object.values(projects).map((project) => (
            <Carousel.Item interval={5000} >
              <ProjectCard project={project}/>
            </Carousel.Item>
            ))}
        </Carousel>
      </div>
    </div>
  )
}

export default Projects
