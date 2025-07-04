"use client";

import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Image from "next/image";
import mateja1 from "../../public/mateja1.webp";
import foodie from "../../public/foodie.webp";
import studiozid from "../../public/studiozid2.png";
import precizna from "../../public/precizna.webp";

const ProjectsPage = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
    const [isActive, setIsActive] = useState<boolean>(false);

    function toggleMenu() {
        setIsActive(prevState => !prevState);
        setIsSidebarOpen(prevState => !prevState);
    }
  return (
    <div className='flex flex-1 flex-col w-full min-h-screen max-sm:px-0 px-7 bg-transparent py-7 max-w-5xl max-sm:max-w-8xl mx-auto z-20 relative'>
      <div className="px-7">
        <Navbar isSidebarOpen={isSidebarOpen}/>
      </div>
      <div>
        <button onClick={() => toggleMenu()} className="md:hidden bg-neutral-500/30 absolute top-14 right-7 w-10 h-10 flex items-center justify-center rounded-xl transition-all duration-200 border border-neutral-500 group z-23" aria-label="Toggle menu">
            <div className="relative flex flex-col items-center justify-center w-5 h-5 overflow-hidden">
              <span className={`absolute w-5 h-[2px] bg-white/50 rounded-full transform transition-transform duration-300 ease-in-out ${isActive ? "rotate-45" : "-translate-y-1.5"}`}></span>
              <span className={`absolute w-5 h-[2px] bg-white/50 rounded-full transform transition-all duration-200 ease-in-out ${isActive ? "opacity-0" : "opacity-100"}`}></span>
              <span className={`absolute w-5 h-[2px] bg-white/50 rounded-full transform transition-transform duration-300 ease-in-out ${isActive ? "-rotate-45" : "translate-y-1.5"}`}></span>
            </div>
        </button>
      </div>
      <div className={isSidebarOpen ? 'hidden' : 'w-full h-[550px] flex flex-1 mt-10 max-sm:mb-250 max-lg:mb-220 lg:mb-130 xl:mb-140 flex-col gap-y-5'}>
        <div className="w-full h-full  flex flex-col gap-y-5">
            <h1 className="text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-white via-emerald-300 to-white">My Showcase</h1>
            <p className="text-lg text-slate-300 text-center">Take a look at my portfolio of responsive websites and web apps — designed for performance, usability, and unique brand experiences.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-6 w-full mt-30 px-4">
            <div className="w-[100%] h-[500px] rounded-lg relative bg-gradient-to-br from-emerald-500/60 to-black border border-emerald-500/20 hover:border-emerald-500/80 transition-all duration-300">
                <span className="pt-[5px] pb-[5px] pl-[20px] pr-[20px] rounded-full bg-gradient-to-r from bg-emerald-400/80 to-green-400 absolute left-5 top-5 z-20 flex">
                    <p className="text-white text-sm semi-semi-bo5">Nextjs</p>
                </span>
                <div className="absolute top-0 w-full h-[60%] bg-blue-500 rounded-t-lg">
                    <Image src={mateja1} alt="first project" width={1920} height={1080} className="w-full h-full object-cover rounded-t-lg" />
                </div>
                <div className="absolute bottom-0 flex flex-col gap-y-2 w-full h-[40%] bg-transparent pt-[15px] pl-[20px] pr-[10px]">
                    <h3 className="text-2xl font-semibold">Mateja Stoev portfolio</h3>
                    <p className="text-slate-300 text-[0.8rem]">A sleek and immersive portfolio crafted with a dark aesthetic and emerald highlights — designed to spotlight web projects through a minimalist yet impactful visual experience.</p>
                    <div className="relative w-full h-[30%] mx-auto">
                        <div className="absolute bottom-0 flex flex-row pb-3 gap-x-3">
                        <span className="pt-[5px] pb-[5px] pl-[20px] pr-[20px] rounded-full bg-gradient-to-r from bg-emerald-400/80 to-green-400 z-20 flex">
                            <p className="text-white text-sm semi-semi-bo5">Nextjs</p>
                        </span>
                        <span className="pt-[5px] pb-[5px] pl-[20px] pr-[20px] rounded-full bg-gradient-to-r from bg-emerald-400/80 to-green-400 z-20 flex">
                            <p className="text-white text-sm semi-semi-bo5">Tailwind</p>
                        </span>
                        <span className="pt-[5px] pb-[5px] pl-[20px] pr-[20px] rounded-full bg-gradient-to-r from bg-emerald-400/80 to-green-400 z-20 flex">
                            <p className="text-white text-sm semi-semi-bo5">React</p>
                        </span>
                    </div>
                    </div>
                </div>
            </div>
            <div className="w-full max-sm:h-[550px] h-[500px] rounded-lg relative bg-gradient-to-br from-emerald-500/60 to-black border border-emerald-500/20 hover:border-emerald-500/80 transition-all duration-300">
                <span className="pt-[5px] pb-[5px] pl-[20px] pr-[20px] rounded-full bg-gradient-to-r from bg-emerald-400/80 to-green-400 absolute left-5 top-5 z-20 flex">
                    <p className="text-white text-sm semi-semi-bo5">Nextjs</p>
                </span>
                <div className="absolute top-0 w-full h-[60%] bg-blue-500 rounded-t-lg">
                    <Image src={studiozid} alt="first project" width={608} height={300} className="w-full h-full object-cover rounded-t-lg" />
                </div>
                <div className="absolute bottom-0 flex flex-col gap-y-2 w-full h-[40%] bg-transparent pt-[15px] pl-[20px] pr-[10px]">
                    <h3 className="text-2xl font-semibold">Studio Zid</h3>
                    <p className="text-slate-300 text-[0.8rem]">A clean and functional website built for a painting service studio — developed with Next.js and integrated backend for Google-based login and client reviews, combining simplicity with user-focused utility.</p>
                    <div className="relative w-full h-[30%] mx-auto">
                        <div className="absolute bottom-0 flex flex-row pb-3 gap-x-3">
                        <span className="pt-[5px] pb-[5px] pl-[20px] pr-[20px] rounded-full bg-gradient-to-r from bg-emerald-400/80 to-green-400 z-20 flex">
                            <p className="text-white text-sm semi-semi-bo5">Nextjs</p>
                        </span>
                        <span className="pt-[5px] pb-[5px] pl-[20px] pr-[20px] rounded-full bg-gradient-to-r from bg-emerald-400/80 to-green-400 z-20 flex">
                            <p className="text-white text-sm semi-semi-bo5">Tailwind</p>
                        </span>
                        <span className="pt-[5px] pb-[5px] pl-[20px] pr-[20px] rounded-full bg-gradient-to-r from bg-emerald-400/80 to-green-400 z-20 flex">
                            <p className="text-white text-sm semi-semi-bo5">React</p>
                        </span>
                    </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-[500px] rounded-lg relative bg-gradient-to-br from-emerald-500/60 to-black border border-emerald-500/20 hover:border-emerald-500/80 transition-all duration-300">
                <span className="pt-[5px] pb-[5px] pl-[20px] pr-[20px] rounded-full bg-gradient-to-r from bg-emerald-400/80 to-green-400 absolute left-5 top-5 z-20 flex">
                    <p className="text-white text-sm semi-semi-bo5">React</p>
                </span>
                <div className="absolute top-0 w-full h-[60%] bg-blue-500 rounded-t-lg">
                    <Image src={precizna} alt="first project" width={597} height={300} className="w-full h-full object-cover rounded-t-lg" />
                </div>
                <div className="absolute bottom-0 flex flex-col gap-y-2 w-full h-[40%] bg-transparent pt-[15px] pl-[20px] pr-[10px]">
                    <h3 className="text-2xl font-semibold">Precizna Poljoprivreda</h3>
                    <p className="text-slate-300 text-[0.8rem]">A bright and user-friendly platform for precision agriculture — featuring an interactive map, real-time data visualization, and an intuitive admin panel for streamlined land and crop management.</p>
                    <div className="relative w-full h-[30%] mx-auto">
                        <div className="absolute bottom-0 flex flex-row pb-3 gap-x-3">
                            <span className="pt-[5px] pb-[5px] pl-[20px] pr-[20px] rounded-full bg-gradient-to-r from bg-emerald-400/80 to-green-400 z-20 flex">
                                <p className="text-white text-sm semi-semi-bo5">React</p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-[500px] rounded-lg relative bg-gradient-to-br from-emerald-500/60 to-black border border-emerald-500/20 hover:border-emerald-500/80 transition-all duration-300">
                <span className="pt-[5px] pb-[5px] pl-[20px] pr-[20px] rounded-full bg-gradient-to-r from bg-emerald-400/80 to-green-400 absolute left-5 top-5 z-20 flex">
                    <p className="text-white text-sm semi-semi-bo5">Nextjs</p>
                </span>
                <div className="absolute top-0 w-full h-[60%] bg-blue-500 rounded-t-lg">
                    <Image src={foodie} width={601} height={300} alt="first project" className="h-full object-cover rounded-t-lg" />
                </div>
                <div className="absolute bottom-0 flex flex-col gap-y-2 w-full h-[40%] bg-transparent pt-[15px] pl-[20px] pr-[10px]">
                    <h3 className="text-2xl font-semibold">Foodieland</h3>
                    <p className="text-slate-300 text-[0.8rem]">A fresh and inviting recipe website inspired by a Figma design — built to showcase diverse culinary content through a clean layout, vibrant imagery, and an intuitive browsing experience.</p>
                    <div className="relative w-full h-[30%] mx-auto">
                        <div className="absolute bottom-0 flex flex-row pb-3 gap-x-3">
                        <span className="pt-[5px] pb-[5px] pl-[20px] pr-[20px] rounded-full bg-gradient-to-r from bg-emerald-400/80 to-green-400 z-20 flex">
                            <p className="text-white text-sm semi-semi-bo5">Nextjs</p>
                        </span>
                        <span className="pt-[5px] pb-[5px] pl-[20px] pr-[20px] rounded-full bg-gradient-to-r from bg-emerald-400/80 to-green-400 z-20 flex">
                            <p className="text-white text-sm semi-semi-bo5">React</p>
                        </span>
                        <span className="pt-[5px] pb-[5px] pl-[20px] pr-[20px] rounded-full bg-gradient-to-r from bg-emerald-400/80 to-green-400 z-20 flex">
                            <p className="text-white text-sm semi-semi-bo5">Tailwind</p>
                        </span>
                    </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default ProjectsPage;