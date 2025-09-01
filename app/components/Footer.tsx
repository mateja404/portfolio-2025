import React, { useState } from 'react';
import Link from 'next/link';
import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@radix-ui/react-label';
import toast, { Toaster } from "react-hot-toast";

const Footer = ({ isSidebarOpen }: any) => {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    async function handleCopy(username: string): Promise<void> {
      await navigator.clipboard.writeText(username);
      toast.success("Username copied");
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
    <>
      <Toaster/>
      <footer className={isSidebarOpen ? 'hidden' : 'absolute mb-10 bottom-0 left-1/2 -translate-x-1/2 flex-1 w-full max-sm:h-auto h-auto flex flex-col xl:flex-row max-sm:justify-center sm:justify-center md:justify-start'}>
          <div className='w-full h-full flex flex-col gap-y-5 lg:flex-row xl:flex-row bg-transparent'>
            <div className='w-full h-1/2 lg:w-1/2 lg:h-full xl:w-1/2 xl:h-full bg-transparent pl-5 pr-5'>
              <h1 className='font-bold text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white via-emerald-300 to-white'>Got any problem to solve?</h1>
              <h1 className='font-bold text-5xl bg-clip-text text-transparent bg-gradient-to-l from-white via-emerald-300 to-white'>Let me know!</h1>
              <p className='text-md text-slate-300 mt-2 text-start'>I'm here to assist you. Any day, any time. Just call me.</p>
              <div className='flex flex-row justify-center mt-7'>
                <div className='w-1/2 h-full gap-y-3 xl:gap-y-5  flex flex-col'>
                  <Link href={"https://wa.me/38163242823?text=Hello%2C%20World!"} className='flex items-center gap-x-2'>
                    <span className='w-[50px] h-[50px] rounded-xl bg-white/5 flex items-center justify-center'>
                      <FaWhatsapp className='text-2xl text-white/55 hover:text-white' />
                    </span>
                    <div className='flex flex-col leading-tight'>
                      <span>WhatsApp</span>
                      <p className='text-sm text-slate-300'>Chat with me</p>
                    </div>
                  </Link>
                  <Link href={"https://www.instagram.com/3_kornepenal/"} className='flex items-center gap-x-2'>
                    <span className='w-[50px] h-[50px] rounded-xl bg-white/5 flex items-center justify-center'>
                      <FaInstagram className='text-2xl text-white/55 hover:text-white' />
                    </span>
                    <div className='flex flex-col leading-tight'>
                      <span>Instagram</span>
                      <p className='text-sm text-slate-300'>Follow me</p>
                    </div>
                  </Link>
                </div>
                <div className='w-1/2 h-full gap-y-3 xl:gap-y-5 flex flex-col'>
                  <Link href={"https://t.me/hldnica"} className='flex items-center gap-x-2' onClick={() => handleCopy("mrljb")}>
                    <span className='w-[50px] h-[50px] rounded-xl bg-white/5 flex items-center justify-center'>
                      <FaTelegramPlane className='text-2xl text-white/55 hover:text-white' />
                    </span>
                    <div className='flex flex-col leading-tight'>
                      <span>Telegram</span>
                      <p className='text-sm text-slate-300'>Chat with me</p>
                    </div>
                  </Link>
                  <Link href={""} className='flex items-center gap-x-2'>
                    <span className='w-[50px] h-[50px] rounded-xl bg-white/5 flex items-center justify-center'>
                      <FaLinkedin className='text-2xl text-white/55 hover:text-white' />
                    </span>
                    <div className='flex flex-col leading-tight'>
                      <span>LinkedIn</span>
                      <p className='text-sm text-slate-300'>Follow me</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className='w-full h-1/2 xl:w-1/2 xl:h-full'>
              <form className="pl-6 pr-6 max-md:pt-6 w-full h-full" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-5">
                  <div className="flex flex-col text-center">
                    <h1 className="text-5xl font-bold">Let's get in touch!</h1>
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
          </div>
      </footer>
    </>
  )
}

export default Footer