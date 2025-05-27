"use client"; // si tu es dans Next.js App Router

import { useState } from "react";
import { Gem, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 bg-stone-950 shadow-md px-4 py-2">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          {/* Logo */}
          <a
            href="#Home"
            className="flex items-center font-bold text-3xl md:text-xl"
          >
            <Gem className="mr-2 text-accent" />
            SS<span className="text-accent">DevApp</span>
          </a>

          {/* Menu Desktop */}
          <ul className="hidden md:flex space-x-4">
            <li>
              <a href="#Home" className="btn hover:bg-accent btn-sm btn-ghost">
                Accueil
              </a>
            </li>
            <li>
              <a href="#About" className="btn hover:bg-accent btn-sm btn-ghost">
                À propos
              </a>
            </li>
            <li>
              <a href="#Experiences" className="btn hover:bg-accent btn-sm btn-ghost">
                Expériences
              </a>
            </li>
            <li>
              <a href="#Projects" className="btn hover:bg-accent btn-sm btn-ghost">
                Porfolio
              </a>
            </li>
          </ul>

          {/* Menu Mobile Toggle */}
          <button
            className="md:hidden text-accent"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Menu Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden fixed top-16 left-0 w-full bg-stone-950 z-40 shadow-md px-4 py-2">
          <ul className="flex flex-col space-y-2">
            <li>
              <a href="#Home" className="btn hover:bg-accent btn-sm btn-ghost" onClick={() => setIsOpen(false)}>
                Accueil
              </a>
            </li>
            <li>
              <a href="#About" className="btn hover:bg-accent btn-sm btn-ghost" onClick={() => setIsOpen(false)}>
                À propos
              </a>
            </li>
            <li>
              <a href="#Experiences" className="btn hover:bg-accent btn-sm btn-ghost" onClick={() => setIsOpen(false)}>
                Expériences
              </a>
            </li>
            <li>
              <a href="#Projects" className="btn hover:bg-accent btn-sm btn-ghost" onClick={() => setIsOpen(false)}>
                Portfolio
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
