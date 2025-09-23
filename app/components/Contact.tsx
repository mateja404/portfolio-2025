"use client";

import React, { useState } from 'react';
import Navbar from './Navbar';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
    const [isActive, setIsActive] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");
  
    function toggleMenu() {
      setIsActive(prevState => !prevState);
      setIsSidebarOpen(prevState => !prevState);
    }

    async function handleSubmit(e: any) {
        e.preventDefault();
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                access_key: "9c206207-85d0-4a02-9f67-f8b3aaaf9874",
                name: name,
                email: email,
                message: message,
            }),
        });
        const result = await response.json();
        if (result.success) {
            toast.success("Message sent successfully");
            setName("");
            setEmail("");
            setMessage("");
        }
    }
  return (
    <div className='w-full relative bg-transparent max-w-5xl z-20 mx-auto min-h-screen px-7 py-7 flex flex-col'>
      <Toaster/>
      <div>
        <Navbar isSidebarOpen={isSidebarOpen}/>
        <button onClick={() => toggleMenu()} className="md:hidden bg-neutral-500/30 absolute top-14 right-7 w-10 h-10 flex items-center justify-center rounded-xl transition-all duration-200 border border-neutral-500 group z-23" aria-label="Toggle menu">
            <div className="relative flex flex-col items-center justify-center w-5 h-5 overflow-hidden">
              <span className={`absolute w-5 h-[2px] bg-white/50 rounded-full transform transition-transform duration-300 ease-in-out ${isActive ? "rotate-45" : "-translate-y-1.5"}`}></span>
              <span className={`absolute w-5 h-[2px] bg-white/50 rounded-full transform transition-all duration-200 ease-in-out ${isActive ? "opacity-0" : "opacity-100"}`}></span>
              <span className={`absolute w-5 h-[2px] bg-white/50 rounded-full transform transition-transform duration-300 ease-in-out ${isActive ? "-rotate-45" : "translate-y-1.5"}`}></span>
            </div>
        </button>
      </div>
      <div className={isSidebarOpen ? 'hidden' : 'flex flex-1 mt-10'}>
        <div className='w-1/2 max-sm:w-full max-sm:rounded-xl bg-emerald-800 flex justify-center items-center rounded-tl-xl rounded-bl-xl'>
          <form className="p-6 md:p-8 w-full" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-5xl font-bold">What's up?</h1>
                <p className="text-gray-100/80 text-balance text-lg">Let's get in touch!</p>
              </div>
              <div className="grid gap-3">
                <Label htmlFor="email">Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  className='bg-transparent focus-visible:ring-0 border-none text-white placeholder:text-gray-100/80'
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  required
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="example@example.com"
                  className='bg-transparent focus-visible:ring-0 border-none text-white placeholder:text-gray-100/80'
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Message</Label>
                </div>
                <Textarea placeholder='Message...' className='bg-transparent focus-visible:ring-0 border-none text-white placeholder:text-gray-100/80 max-h-[200px] min-h-[100px]' value={message} onChange={(e) => setMessage(e.target.value)}></Textarea>
              </div>
              <Button type="submit" className="w-full bg-black cursor-pointer">Submit</Button>
            </div>
          </form>
        </div>
        <div className='w-1/2 bg-emerald-800/60 flex justify-center items-center rounded-tr-xl rounded-br-xl max-sm:hidden'>
          <div className='relative w-full h-full flex justify-center'>
            <Image
              src={"/callme.png"}
              alt='callme'
              width={500}
              height={500}
              className='absolute bottom-0 translate-y-2'
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;