"use client";

import React, { useState } from 'react';
import Navbar from './Navbar';
import Image from 'next/image';
import Features from './Features';
import Tech from "./Tech";
import Footer from './Footer';

const HomePage = () => {
  const [isActive, setIsActive] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  function toggleMenu() {
    setIsActive(prevState => !prevState);
    setIsSidebarOpen(prevState => !prevState);
  }
  return (
    <main className='relative z-20 w-full max-w-5xl mx-auto px-7 py-7'>
        <Navbar isActive={isActive} isSidebarOpen={isSidebarOpen} />
        <button onClick={() => toggleMenu()} className="md:hidden bg-neutral-500/30 absolute top-14 right-7 w-10 h-10 flex items-center justify-center rounded-xl transition-all duration-200 border border-neutral-500 group z-23" aria-label="Toggle menu">
            <div className="relative flex flex-col items-center justify-center w-5 h-5 overflow-hidden">
              <span className={`absolute w-5 h-[2px] bg-white/50 rounded-full transform transition-transform duration-300 ease-in-out ${isActive ? "rotate-45" : "-translate-y-1.5"}`}></span>
              <span className={`absolute w-5 h-[2px] bg-white/50 rounded-full transform transition-all duration-200 ease-in-out ${isActive ? "opacity-0" : "opacity-100"}`}></span>
              <span className={`absolute w-5 h-[2px] bg-white/50 rounded-full transform transition-transform duration-300 ease-in-out ${isActive ? "-rotate-45" : "translate-y-1.5"}`}></span>
            </div>
        </button>
        <section className={isSidebarOpen ? 'hidden' : 'w-full mx-auto xl:mt-15 py-6 md:py-12 flex flex-col-reverse xl:flex-row 2xl:flex-row items-center justify-between gap-10'}>
          <div className='w-full xl:w-1/2 flex flex-col gap-y-3 max-sm:text-center sm:text-center lg:text-start xl:text-start'>
            <h1 className='font-bold text-5xl'>
              Mateja <span className='text-emerald-300'>Stoev</span>
            </h1>
            <h2 className='text-2xl text-slate-300'>Full Stack Web Developer</h2>
            <p className='text-slate-300/60 text-md'>Turning idea in web application. Over than 2 years of experience.</p>
          </div>
          <div className='w-full xl:w-1/2 flex items-center relative'>
            <Image src={"/heroimg.webp"} priority alt='hero image' fetchPriority='high' width={280} height={280} className='rounded-full object-cover lg:float-right lg:absolute lg:right-0 lg:mt-35 xl:-mt-20 xl:float-right xl:absolute xl:right-0 max-sm:static max-sm:mx-auto sm:static sm:mx-auto'/>
          </div>
        </section>
        <Features isSidebarOpen={isSidebarOpen}/>
        <Tech isSidebarOpen={isSidebarOpen}/>
        <Footer isSidebarOpen={isSidebarOpen}/>
    </main>
  )
}

export default HomePage;