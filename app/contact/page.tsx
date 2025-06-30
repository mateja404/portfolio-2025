import React from 'react';
import Contact from '../components/Contact';

const page = () => {
  return (
    <div className="relative flex h-screen overflow-x-hidden max-h-screen min-h-screen w-screen bg-emerald-950/60 dark:bg-emerald-950/60">
      <div className="absolute inset-0 
        [background-size:12px_12px]
        [background-image:linear-gradient(to_right,rgba(16,185,129,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,0.08)_1px,transparent_1px)] ">
      </div>
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_70%,black)] bg-black"></div>
      <Contact/>
    </div>
  )
}

export default page;