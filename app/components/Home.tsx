"use client";

import React, { useState } from 'react';
import Navbar from './Navbar';
import Image from 'next/image';
import Features from './Features';
import Tech from "./Tech";
import Footer from './Footer';
import { motion } from "motion/react";

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
        <motion.button initial={{ y: 0, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: .3 }} onClick={() => toggleMenu()} className="md:hidden bg-neutral-500/30 absolute top-14 right-7 w-10 h-10 flex items-center justify-center rounded-xl transition-all duration-200 border border-neutral-500 group z-23" aria-label="Toggle menu">
            <div className="relative flex flex-col items-center justify-center w-5 h-5 overflow-hidden">
              <span className={`absolute w-5 h-[2px] bg-white/50 rounded-full transform transition-transform duration-300 ease-in-out ${isActive ? "rotate-45" : "-translate-y-1.5"}`}></span>
              <span className={`absolute w-5 h-[2px] bg-white/50 rounded-full transform transition-all duration-200 ease-in-out ${isActive ? "opacity-0" : "opacity-100"}`}></span>
              <span className={`absolute w-5 h-[2px] bg-white/50 rounded-full transform transition-transform duration-300 ease-in-out ${isActive ? "-rotate-45" : "translate-y-1.5"}`}></span>
            </div>
        </motion.button>
        <section className={isSidebarOpen ? 'hidden' : 'w-full mx-auto xl:mt-15 py-6 md:py-12 flex flex-col-reverse xl:flex-row 2xl:flex-row items-center justify-between gap-10'}>
          <div className='w-full xl:w-1/2 flex flex-col gap-y-3 max-sm:text-center sm:text-center lg:text-start xl:text-start'>
            <motion.h1 initial={{ y: 50, opacity: 0, backdropFilter: 'blur(15px)' }} animate={{ y: 0, opacity: 1, backdropFilter: 'blur(0px)' }} transition={{ duration: .5 }} className='font-bold text-5xl'>
              Mateja <span className='text-emerald-300'>Stoev</span>
            </motion.h1>
            <motion.h2 initial={{ y: 50, opacity: 0, backdropFilter: 'blur(15px)' }} animate={{ y: 0, opacity: 1, backdropFilter: 'blur(0px)' }} transition={{ duration: .5 }} className='text-2xl text-slate-300'>Full Stack Web Developer</motion.h2>
            <motion.p initial={{ y: 50, opacity: 0, backdropFilter: 'blur(15px)' }} animate={{ y: 0, opacity: 1, backdropFilter: 'blur(0px)' }} transition={{ duration: .5 }} className='text-slate-300/60 text-md'>Turning idea in web application. Over than 2 years of experience.</motion.p>
          </div>
          <motion.div initial={{ y: 50, opacity: 0, backdropFilter: 'blur(15px)' }} animate={{ y: 0, opacity: 1, backdropFilter: 'blur(0px)' }} transition={{ duration: .5 }} className='w-full xl:w-1/2 flex items-center relative'>
            <Image src={"/heroimg.webp"} priority alt='hero image' fetchPriority='high' width={280} height={280} className='rounded-full object-cover lg:float-right lg:absolute lg:right-0 lg:mt-35 xl:-mt-20 xl:float-right xl:absolute xl:right-0 max-sm:static max-sm:mx-auto sm:static sm:mx-auto'/>
          </motion.div>
        </section>
        <Features isSidebarOpen={isSidebarOpen}/>
        <Tech isSidebarOpen={isSidebarOpen}/>
        <Footer isSidebarOpen={isSidebarOpen}/>
    </main>
  )
}

export default HomePage;