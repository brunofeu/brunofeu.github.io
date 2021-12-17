import React from 'react'
import profileImage from '../images/IMG_9726.jpg'
import About from './About'
import Projects from './Projects'

function Main() {
  return (
    <main className="xl:w-2/3 xl:max-w-4xl xl:m-auto xl:mt-10">
    <section className="flex flex-col xl:flex-row pb-10 xl:pb-20 w-full xl:justify-between items-center">
      <div className="border-4 rounded-full border-indigo-400 my-10">
        <img src={profileImage} alt="profile" className="rounded-full border-2 h-72 w-72 xl:h-60 xl:w-60" />
      </div>
      <div className=" flex flex-col xl:w-1/2 h-40 justify-around m-auto">
        <h1 className="text-3xl text-center text-indigo-400 drop-shadow-lg">Olá, 👋 Eu sou o Bruno</h1>
        <p className="text-center p-2">
          Estudante de Desenvolvimento Web na Trybe,
          Engenheiro e <strong>apaixonado por tecnologia</strong>.
        </p>
      </div>
    </section>
    <About/>
    {/* <div className="habilidades-list">
      <h3 id="habilidades">Habilidades</h3>
        <ol>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Redux</li>
          <li>Context API</li>
        </ol>
    </div> */}
    <Projects/>
  </main>
  )
}

export default Main
