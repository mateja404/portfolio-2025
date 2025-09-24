import React from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';

const DownloadResume = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  return (
    <motion.div ref={ref} initial={{ x: -50, opacity: 0 }} animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }} transition={{ duration: .3 }} className='w-full min-h-[220px] xl:h-[220px] xl:-mt-150 2xl:-mt-200 flex-1 relative rounded-xl bg-gradient-to-r from-emerald-400/60 via-emerald-300 to-emerald-100/70 pt-[50px] pb-[50px] pl-[30px] pr-[30px] flex flex-col md:flex-row lg:flex-row xl:flex-row gap-10'>
      <div className='flex w-full h-1/2 xl:w-1/2 xl:h-auto flex-col gap-y-3'>
        <h3 className='font-normal text-white text-2xl xl:text-3xl'>
          Ready to build something great?
        </h3>
        <p className='font-bold text-slate-300 max-w-lg'>
          Download my resume and let’s create amazing web experiences together.
        </p>
      </div>
      <div className='flex w-full h-1/2 xl:w-1/2 xl:h-auto pr-[10px] relative items-center justify-center'>
        <button className='pt-[15px] pl-[30px] pb-[15px] pr-[30px] rounded-full cursor-pointer bg-emerald-500 text-white'>
          Download resume
        </button>
      </div>
    </motion.div>
  );
};

export default DownloadResume;