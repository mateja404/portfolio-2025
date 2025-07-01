import React from 'react';
import { Heart } from 'lucide-react';
import Link from 'next/link';

const Footer = ({ isSidebarOpen }: any) => {
  return (
    <footer className={isSidebarOpen ? 'hidden' : 'absolute bottom-0 w-[90%] h-[50px] flex max-sm:justify-center sm:justify-center md:justify-start'}>
        <h5 className='flex gap-x-1'>Made with <Heart /> by <Link href={"https://github.com/mateja404"} className='underline'>mateja</Link></h5>
    </footer>
  )
}

export default Footer