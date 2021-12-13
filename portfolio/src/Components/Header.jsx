import React from 'react'

function Header() {
  return (
    <header className="py-10 bg-gradient-to-b from-indigo-500 to-slate-100 fixed top-0 left-0 w-screen z-40">
      <div className="flex justify-between m-auto w-2/3 max-w-4xl items-center">
      <h1 className="text-4xl text-violet-800">
        Bruno Feu
      </h1>
      <nav className="space-x-10">
        <a className=" text-white hover:underline hover:decoration-2 hover:decoration-white" href="#top">Home</a>
        <a className=" text-white hover:underline hover:decoration-2 hover:decoration-white" href="#outrasHabilidades">Sobre Mim</a>
        <a className=" text-white hover:underline hover:decoration-2 hover:decoration-white" href="#links">Projetos</a>
        <a className=" text-white hover:underline hover:decoration-2 hover:decoration-white" href="#contato">Contato</a>
      </nav>
      </div>
    </header>
  )
}

export default Header
