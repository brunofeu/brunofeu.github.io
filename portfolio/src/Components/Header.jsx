import React from 'react'

function Header() {
  return (
    <header className="pt-10 pb-5 z-40 border-b-2">
      <div className="flex justify-between m-auto w-2/3 max-w-4xl items-center">
      <h1 className="text-5xl text-violet-800">
        Bruno Feu
      </h1>
      <nav className="space-x-10">
        <a className=" hover:underline hover:decoration-2 hover:decoration-indigo-400" href="#top">Home</a>
        <a className=" hover:underline hover:decoration-2 hover:decoration-indigo-400" href="#about">Sobre Mim</a>
        <a className=" hover:underline hover:decoration-2 hover:decoration-indigo-400" href="#projects">Projetos</a>
        <a className=" hover:underline hover:decoration-2 hover:decoration-indigo-400" href="#contato">Contato</a>
      </nav>
      </div>
    </header>
  )
}

export default Header
