"use client"

import React, { useState } from "react";
import Link from "next/link";
import "@/app/globals.css";

/* eslint-disable */
export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="pt-3">
      <div className="flex flex-wrap items-center justify-between p-4 bg-neutral-800">
        <div className="w-auto lg:order-2 lg:text-center">
          <Link href="/">
            <img src="/Logo/vibrasf.png" alt="vibra" className="h-20 vibra" />
          </Link>
        </div>
        <div className="block lg:hidden">
          <button
            className="flex items-center px-3 py-2 text-neutral-200 border-0 border-indigo-200 rounded navbar-burger"
            onClick={toggleMenu}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <div className={`hidden w-full lg:order-1 lg:block lg:w-2/5 text-center`}>
          <Link href="/routes/about" className="block mt-4 mr-10 text-neutral-300 lg:inline-block lg:mt-0 hover:text-sky-500 font-roboto-condensed font-bold">
            QUIENES SOMOS
          </Link>
          <Link href="/routes/galeria" className="block mt-4 mr-10 text-neutral-300 lg:inline-block lg:mt-0 hover:text-sky-500 font-roboto-condensed font-bold">
            GALERIA
          </Link>
        </div>
        <div className={`hidden w-full lg:order-3 lg:block lg:w-2/5 text-center`}>
          <Link href="/routes/sponsor" className="block mt-4 mr-10 text-neutral-300 lg:inline-block lg:mt-0 hover:text-sky-500 font-roboto-condensed font-bold">
            SPONSORS
          </Link>
          <Link href="/routes/contact" className="block mt-4 mr-10 text-neutral-300 lg:inline-block lg:mt-0 hover:text-sky-500 roboto-condensed font-bold">
            CONTACTO
          </Link>
        </div>

        <div className={`w-full lg:hidden mt-4 text-center ${isMenuOpen ? 'navbar-menu open' : 'navbar-menu'}`}>
          <Link href="/routes/about" className="block mt-4 text-neutral-300 hover:text-sky-500" onClick={closeMenu}>¿QUIENES SOMOS?</Link>
          <Link href="/routes/galeria" className="block mt-4 text-neutral-300 hover:text-sky-500" onClick={closeMenu}>GALERIA</Link>
          <Link href="/routes/sponsor" className="block mt-4 text-neutral-300 hover:text-sky-500" onClick={closeMenu}>SPONSORS</Link>
          <Link href="/routes/contact" className="block mt-4 text-neutral-300 hover:text-sky-500" onClick={closeMenu}>CONTACTO</Link>
        </div>
      </div>
    </nav>
  );
}
