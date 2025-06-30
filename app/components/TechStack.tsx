import React from 'react';
import Image from 'next/image';
import reacticon from "../../public/React.png";
import typescripticon from "../../public/ts-logo-128.png";
import javascripticon from "../../public/javascript.png";
import htmlicon from "../../public/html.png";
import cssicon from "../../public/css.png";
import tailwindicon from "../../public/tailwind.svg";
import nextjsicon from "../../public/nextjs.svg";
import nodejsicon from "../../public/nodejs.svg";
import expressicon from "../../public/Express.svg";

const TechStack = () => {
  return (
    <section className="mt-7 xl:mb-20 xl:mt-30 w-full h-[800px] xl:h-[600px] mx-auto flex flex-col gap-y-5">
        <h1 className='border-b-1 semi-bold border-slate-500 text-slate-500 text-md'>TECH STACK</h1>
        <h3 className='mt-7 semi-semi-bold'>Frontend</h3>
        <div className="w-full h-1/3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-x-3 relative">
            <div className='max-sm:w-full sm:w-full md:w-[250px] lg:w-[230px] xl:w-[200px] h-[55px] bg-emerald-800/70 rounded-md relative items-center flex pl-3 gap-x-3'>
              <div className='w-[35px] h-[35px] flex items-center justify-center bg-react rounded-lg'>
                <Image src={reacticon} alt='react icon' width={20} height={20} />
              </div>
              <p className='semi-semi-bold text-slate-300'>React</p>
            </div>
            <div className='max-sm:w-full sm:w-full md:w-[250px] lg:w-[230px] xl:w-[200px] h-[55px] bg-emerald-800/70 rounded-md relative items-center flex pl-3 gap-x-3'>
              <div className='w-[35px] h-[35px] flex items-center justify-center bg-react rounded-lg'>
                <Image src={typescripticon} alt='react icon' width={20} height={20} />
              </div>
              <p className='semi-semi-bold text-slate-300'>Typescript</p>
            </div>
            <div className='max-sm:w-full sm:w-full md:w-[250px] lg:w-[230px] xl:w-[200px] h-[55px] bg-emerald-800/70 rounded-md relative items-center flex pl-3 gap-x-3'>
              <div className='w-[35px] h-[35px] flex items-center justify-center bg-js rounded-lg'>
                <Image src={javascripticon} alt='react icon' width={20} height={20} />
              </div>
              <p className='semi-semi-bold text-slate-300'>Javascript</p>
            </div>
            <div className='max-sm:w-full sm:w-full md:w-[250px] lg:w-[230px] xl:w-[200px] h-[55px] bg-emerald-800/70 rounded-md relative items-center flex pl-3 gap-x-3'>
              <div className='w-[35px] h-[35px] flex items-center justify-center bg-html rounded-lg'>
                <Image src={htmlicon} alt='react icon' width={20} height={20} />
              </div>
              <p className='semi-semi-bold text-slate-300'>HTML</p>
            </div>
            <div className='max-sm:w-full sm:w-full md:w-[250px] lg:w-[230px] xl:w-[200px] h-[55px] bg-emerald-800/70 rounded-md relative items-center flex pl-3 gap-x-3'>
              <div className='w-[35px] h-[35px] flex items-center justify-center bg-react rounded-lg'>
                <Image src={cssicon} alt='react icon' width={25} height={25} />
              </div>
              <p className='semi-semi-bold text-slate-300'>CSS</p>
            </div>
            <div className='max-sm:w-full sm:w-full md:w-[250px] lg:w-[230px] xl:w-[200px] h-[55px] bg-emerald-800/70 rounded-md relative items-center flex pl-3 gap-x-3'>
              <div className='w-[35px] h-[35px] flex items-center justify-center bg-cyan-500/50 rounded-lg'>
                <Image src={tailwindicon} alt='react icon' width={20} height={20} />
              </div>
              <p className='semi-semi-bold text-slate-300'>Tailwind</p>
            </div>
            <div className='max-sm:w-full sm:w-full md:w-[250px] lg:w-[230px] xl:w-[200px] h-[55px] bg-emerald-800/70 rounded-md relative items-center flex pl-3 gap-x-3'>
              <div className='w-[35px] h-[35px] flex items-center justify-center bg-gray-100/10 rounded-lg'>
                <Image src={nextjsicon} alt='react icon' width={20} height={20} />
              </div>
              <p className='semi-semi-bold text-slate-300'>NextJS</p>
            </div>
        </div>
        <h3 className='mt-7 semi-semi-bold'>Backend</h3>
        <div className="w-full h-1/10 xl:h-1/6 grid grid-cols-2 xl:grid-cols-4 max-sm:-mt-3 sm:-mt-3 gap-3 place-items-center relative">
          <div className='max-sm:w-full sm:w-full xl:w-[200px] h-[55px] bg-emerald-800/70 rounded-md relative items-center flex pl-3 gap-x-3'>
            <div className='w-[35px] h-[35px] flex items-center justify-center bg-green-500/30 rounded-lg'>
              <Image src={nodejsicon} alt='react icon' width={20} height={20} />
            </div>
            <p className='semi-semi-bold text-slate-300'>NodeJS</p>
          </div>
          <div className='max-sm:w-full sm:w-full xl:w-[200px] h-[55px] bg-emerald-800/70 rounded-md relative items-center flex pl-3 gap-x-3'>
            <div className='w-[35px] h-[35px] flex items-center justify-center bg-gray-100/10 rounded-lg'>
              <Image src={expressicon} alt='react icon' width={20} height={20} />
            </div>
            <p className='semi-semi-bold text-slate-300'>Express</p>
          </div>
        </div>
        <h3 className='max-sm:mt-3 mt-7 semi-semi-bold'>Databases</h3>
        <div className="w-full h-1/10 xl:h-1/6 grid grid-cols-2 xl:grid-cols-4 max-sm:-mt-3 sm:-mt-3 gap-3 place-items-center relative">
          <div className='max-sm:w-full sm:w-full xl:w-[200px] h-[55px] bg-emerald-800/70 rounded-md relative items-center flex pl-3 gap-x-3'>
            <div className='w-[35px] h-[35px] flex items-center justify-center bg-gray-100/10 rounded-lg'>
              <Image src={expressicon} alt='react icon' width={20} height={20} />
            </div>
            <p className='semi-semi-bold text-slate-300'>MySQL</p>
          </div>
          <div className='max-sm:w-full sm:w-full xl:w-[200px] h-[55px] bg-emerald-800/70 rounded-md relative items-center flex pl-3 gap-x-3'>
            <div className='w-[35px] h-[35px] flex items-center justify-center bg-gray-100/10 rounded-lg'>
              <Image src={expressicon} alt='react icon' width={20} height={20} />
            </div>
            <p className='semi-semi-bold text-slate-300'>MongoDB</p>
          </div>
        </div>
    </section>
  )
}

export default TechStack;