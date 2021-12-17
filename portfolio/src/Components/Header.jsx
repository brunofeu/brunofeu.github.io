import React from 'react'

function Header() {
  return (
    <header className="pt-6 md:pt-10 pb-5 z-40 border-b-2">
      <div className="flex justify-between m-auto w-full md:w-11/12 xl:w-10/12 xl:max-w-4xl items-center">
      <h1 className="text-3xl md:text-4xl xl:text-5xl text-violet-800">
        Bruno Feu
      </h1>
      <nav className=" dark:text-white flex space-x-3 md:space-x-10">
        <a className=" hidden md:block hover:underline hover:decoration-2 hover:decoration-indigo-400" href="#top">Home</a>
        <a className=" hover:underline hover:decoration-2 hover:decoration-indigo-400" href="#about">Sobre Mim</a>
        <a className=" hover:underline hover:decoration-2 hover:decoration-indigo-400" href="#projects">Projetos</a>
        <a className=" hover:underline hover:decoration-2 hover:decoration-indigo-400" href="#contato">Contato</a>
      </nav>
      </div>
    </header>
  )
}

export default Header
