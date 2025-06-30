"use client"

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Navbar = ({ isSidebarOpen }: any) => {
    const router = useRouter();
    return (
        <nav className='w-full bg-transparent h-[100px] mx-auto flex items-center'>
            <div className='w-[40px] h-[40px] rounded-md bg-white flex items-center justify-center z-23 cursor-pointer' onClick={() => router.push("/")}><p className='text-2xl text-black font-bold cursor-pointer' onClick={() => router.push("/")}>M</p></div>
            <div className='hidden justify-center items-center w-[90%] h-full md:flex lg:flex xl:flex 2xl:flex'>
                <ul className='flex flex-row gap-x-2'>
                    <li className='pt-[10px] pb-[10px] pl-[15px] pr-[15px] rounded-xl text-sm hover:bg-zinc-900 hover:cursor-pointer'><Link href={"/projects"}>Projects</Link></li>
                    <li className='pt-[10px] pb-[10px] pl-[15px] pr-[15px] rounded-xl text-sm hover:bg-zinc-900 hover:cursor-pointer'><Link href={"/about"}>About me</Link></li>
                </ul>
                <button className='pt-[7px] pb-[7px] pl-[12px] pr-[12px] absolute right-10 cursor-pointer hover:bg-foreground bg-white text-sm font-medium rounded-lg text-black' onClick={() => router.push("/contact")}>Get in touch</button>
            </div>
            <div className={isSidebarOpen ? "w-screen h-screen bg-black absolute inset-0 z-22 flex items-center justify-center mx-auto" : "hidden"}>
                <div className='flex justify-center items-center w-[90%] h-full'>
                    <ul className='flex flex-col gap-x-2 items-center'>
                        <li className='pt-[10px] pb-[10px] pl-[15px] pr-[15px] rounded-xl text-xl hover:bg-zinc-900 hover:cursor-pointer tracking-tight'><Link href={"/projects"}>Projects</Link></li>
                        <li className='pt-[10px] pb-[10px] pl-[15px] pr-[15px] rounded-xl text-xl hover:bg-zinc-900 hover:cursor-pointer tracking-tight'><Link href={"/about"}>About me</Link></li>
                    </ul>
                </div>
                <button className='pt-[7px] pb-[7px] pl-[12px] pr-[12px] absolute bottom-30 bg-white text-sm font-medium rounded-lg text-black' onClick={() => router.push("/contact")}>Get in touch</button>
            </div>
        </nav>
    )
}

export default Navbar;