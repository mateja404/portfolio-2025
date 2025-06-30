import React from 'react';
import { Sparkles } from 'lucide-react';

const Features = ({ isSidebarOpen }: any) => {
  return (
    <section className={isSidebarOpen ? 'hidden' : 'mt-7 xl:mt-30 flex flex-col justify-center items-center w-full mx-auto gap-5'}>
      <div className='w-full h-auto flex flex-col xl:flex-row 2xl:flex-row gap-5'>
        <div className='w-full xl:w-1/2 2xl:w-1/2 flex-grow min-h-[200px] bg-emerald-800/60 rounded-2xl border-1 border-emerald-400 hover:bg-emerald-300/35 transition-all duration-300 p-[20px] flex flex-col justify-between'>
          <div className='w-[40px] h-[40px] bg-emerald-700 rounded-full flex items-center justify-center'>
            <Sparkles />
          </div>
          <h1 className='text-2xl font-bold text-emerald-300'>MERN & Beyond</h1>
          <p className='text-sm semi-semi-bold text-cyan-100'>
            From MongoDB to MySQL, from Express to Next.js – versatility is the weapon of choice.
          </p>
        </div>
        <div className='w-full xl:w-1/2 2xl:w-1/2 flex-grow min-h-[200px] bg-emerald-800/60 rounded-2xl border-1 border-emerald-400 hover:bg-emerald-300/35 transition-all duration-300 p-[20px] flex flex-col justify-between'>
          <div className='w-[40px] h-[40px] bg-emerald-700 rounded-full flex items-center justify-center'>
            <Sparkles />
          </div>
          <h1 className='text-2xl font-bold text-emerald-300'>Digital Craftsman</h1>
          <p className='text-sm semi-semi-bold text-cyan-100'>
            Sculpting full-stack solutions with precision and a passion for clean code.
          </p>
        </div>
      </div>
      <div className='w-full h-auto xl:h-auto flex flex-col xl:flex-row 2xl:flex-row'>
        <div className='w-full min-h-[200px] flex-grow bg-emerald-800/60 rounded-2xl border-1 border-emerald-400 hover:bg-emerald-300/35 transition-all duration-300 p-[20px] flex flex-col justify-between'>
          <div className='w-[40px] h-[40px] bg-emerald-700 rounded-full flex items-center justify-center'>
            <Sparkles />
          </div>
          <h1 className='text-2xl font-bold text-emerald-300'>Code, Click, Commit</h1>
          <p className='text-sm semi-semi-bold text-cyan-100'>
            Shipping scalable features one pull request at a time.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Features;