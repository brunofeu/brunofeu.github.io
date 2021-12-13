import React from 'react'

function Header() {
  return (
    <header className=" flex justify-between py-5 m-auto items-center mb-10">
      <h1 className="text-4xl">
        Bruno Feu
      </h1>
      <nav className="space-x-10">
        <a className="" href="#habilidades">Home</a>
        <a className="" href="#outrasHabilidades">Sobre Mim</a>
        <a className="" href="#links">Projetos</a>
      </nav>
    </header>
  )
}

export default Header
