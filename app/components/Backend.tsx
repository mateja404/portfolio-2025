import React from 'react';
import nodejsicon from "../../public/nodejs.svg";
import expressicon from "../../public/Express.svg";
import Image from 'next/image';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';

const Backend = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  return (
    <section className='max-sm:mt-15 mt-10'>
        <h3 className='max-sm:mt-3 sm:mt-5 md:mt-5 xl:-mt-3 mt-0 semi-semi-bold'>Backend</h3>
        <motion.div ref={ref} initial={{ x: -50, opacity: 0 }} animate={inView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }} transition={{ duration: .3 }} className="w-full h-1/3 grid grid-cols-2 mt-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-y-0 sm:gap-y-3 max-sm:gap-y-3 gap-x-3 relative">
            <div className='max-sm:w-full sm:w-full md:w-[250px] lg:w-[230px] xl:w-[200px] h-[55px] bg-emerald-800/70 rounded-md relative items-center flex pl-3 gap-x-3'>
              <div className='w-[35px] h-[35px] flex items-center justify-center bg-green-500/50 rounded-lg'>
                <Image src={nodejsicon} alt='react icon' width={20} height={20} />
              </div>
              <p className='semi-semi-bold text-slate-300'>NodeJS</p>
            </div>
            <div className='max-sm:w-full sm:w-full md:w-[250px] lg:w-[230px] xl:w-[200px] h-[55px] bg-emerald-800/70 rounded-md relative items-center flex pl-3 gap-x-3'>
              <div className='w-[35px] h-[35px] flex items-center justify-center bg-gray-100/50 rounded-lg'>
                <Image src={expressicon} alt='react icon' width={20} height={20} />
              </div>
              <p className='semi-semi-bold text-slate-300'>Express</p>
            </div>
        </motion.div>
    </section>
  )
}

export default Backend;