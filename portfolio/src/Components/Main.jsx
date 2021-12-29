import React from 'react'

import About from './About'
import Projects from './Projects'

function Main() {
  return (
    <main className="main-container">
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
