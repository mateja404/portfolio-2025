"use client";

import React, { useState } from 'react';
import Navbar from './Navbar';
import { HeroParallax } from '@/components/ui/hero-parallax';
import DownloadResume from './DownloadResume';
import Timeline from './TimelineAbout';
import Footer from './Footer';

export const products = [
  {
    title: "Mateja Stoev portfolio",
    link: "https://mateja.studiozid.rs",
    thumbnail:
      "https://i.ibb.co/p6PsqzvX/mateja1.png",
  },
  {
    title: "Studio Zid",
    link: "https://studiozid.rs",
    thumbnail:
      "https://i.ibb.co/6RNMvktw/studiozid1.png",
  },
  {
    title: "Precizna Poljoprivreda",
    link: "https://preciznapoljoprivreda.com",
    thumbnail:
      "https://i.ibb.co/tpZYR1tS/image.png",
  },
  {
    title: "Studio Zid",
    link: "https://studiozid.rs",
    thumbnail:
      "https://i.ibb.co/rRkrWk6X/image.png",
  },
  {
    title: "Precizna Poljoprivreda",
    link: "https://preciznapoljoprivreda.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editrix.png",
  },
  {
    title: "Mateja Stoev portfolio",
    link: "https://mateja.studiozid.rs",
    thumbnail:
      "https://i.ibb.co/p6PsqzvX/mateja1.png",
  },
 
  {
    title: "Precizna Poljoprivreda",
    link: "https://preciznapoljoprivreda.com",
    thumbnail:
      "https://i.ibb.co/rRkrWk6X/image.png",
  },
  {
    title: "Studio Zid",
    link: "https://studiozid.rs",
    thumbnail:
      "https://i.ibb.co/6RNMvktw/studiozid1.png",
  },
  {
    title: "Mateja Stoev portfolio",
    link: "https://mateja.studiozid.rs",
    thumbnail:
      "https://i.ibb.co/p6PsqzvX/mateja1.png",
  }
];

const AboutPage = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
    const [isActive, setIsActive] = useState<boolean>(false);

    function toggleMenu() {
      setIsActive(prevState => !prevState);
      setIsSidebarOpen(prevState => !prevState);
    }
  return (
    <div className='w-full relative bg-transparent max-w-5xl z-20 mx-auto min-h-screen px-7 py-7 flex flex-col'>
      <Navbar isSidebarOpen={isSidebarOpen}/>
      <div>
        <button onClick={() => toggleMenu()} className="md:hidden bg-neutral-500/30 absolute top-14 right-7 w-10 h-10 flex items-center justify-center rounded-xl transition-all duration-200 border border-neutral-500 group z-23" aria-label="Toggle menu">
            <div className="relative flex flex-col items-center justify-center w-5 h-5 overflow-hidden">
              <span className={`absolute w-5 h-[2px] bg-white/50 rounded-full transform transition-transform duration-300 ease-in-out ${isActive ? "rotate-45" : "-translate-y-1.5"}`}></span>
              <span className={`absolute w-5 h-[2px] bg-white/50 rounded-full transform transition-all duration-200 ease-in-out ${isActive ? "opacity-0" : "opacity-100"}`}></span>
              <span className={`absolute w-5 h-[2px] bg-white/50 rounded-full transform transition-transform duration-300 ease-in-out ${isActive ? "-rotate-45" : "translate-y-1.5"}`}></span>
            </div>
        </button>
      </div>
      <div className={isSidebarOpen ? 'hidden' : 'flex flex-1 mt-10 max-sm:mb-250 max-lg:mb-220 lg:mb-130 xl:mb-140 flex-col gap-0'}>
        <HeroParallax products={products}/>
        <DownloadResume/>
        <div className='mt-50'>
            <Timeline/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default AboutPage;