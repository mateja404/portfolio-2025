import React from 'react';
import vscodesvg from "../../public/vscode.svg";
import githubsvg from "../../public/github-mark-white.svg";
import gitsvg from "../../public/git.svg";
import Image from 'next/image';

const Tools = () => {
  return (
    <section className='max-sm:mt-3'>
        <h3 className='max-sm:mt-3 mt-7 semi-semi-bold'>Tools</h3>
        <div className="w-full h-1/3 grid grid-cols-2 mt-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-y-0 sm:gap-y-3 max-sm:gap-y-3 gap-x-3 relative">
            <div className='max-sm:w-full sm:w-full md:w-[250px] lg:w-[230px] xl:w-[200px] h-[55px] bg-emerald-800/70 rounded-md relative items-center flex pl-3 gap-x-3'>
              <div className='w-[35px] h-[35px] flex items-center justify-center bg-blue-500/30 rounded-lg'>
                <Image src={vscodesvg} alt='react icon' width={20} height={20} />
              </div>
              <p className='semi-semi-bold text-slate-300'>VS Code</p>
            </div>
            <div className='max-sm:w-full sm:w-full md:w-[250px] lg:w-[230px] xl:w-[200px] h-[55px] bg-emerald-800/70 rounded-md relative items-center flex pl-3 gap-x-3'>
              <div className='w-[35px] h-[35px] flex items-center justify-center bg-gray-100/10 rounded-lg'>
                <Image src={githubsvg} alt='react icon' width={20} height={20} />
              </div>
              <p className='semi-semi-bold text-slate-300'>GitHub</p>
            </div>
            <div className='max-sm:w-full sm:w-full md:w-[250px] lg:w-[230px] xl:w-[200px] h-[55px] bg-emerald-800/70 rounded-md relative items-center flex pl-3 gap-x-3'>
              <div className='w-[35px] h-[35px] flex items-center justify-center bg-html rounded-lg'>
                <Image src={gitsvg} alt='react icon' width={20} height={20} />
              </div>
              <p className='semi-semi-bold text-slate-300'>Git</p>
            </div>
        </div>
    </section>
  )
}

export default Tools;