import React from 'react'
import Meteors from '@/components/ui/meteors'
// import Navbar from '@/components/ui/Navbar'
import Image from 'next/image'
import { Particles } from './ui/particles'
import { AnimatedGradientText } from './ui/animated-gradient-text'
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Link from 'next/link'

const Home = () => {
  return (
    <div className="relative flex lg:h-screen h-1/2 w-full flex-col bg-gradient-to-b from-black via-[#381801d0] to-black overflow-hidden  md:shadow-xl">
      <Meteors number={50} /> 
      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        color="#ffffff"
        refresh
      />
      <div className='flex lg:flex-row flex-col-reverse justify-center items-center lg:h-full h-1/2'>
        <div className='text-white text-center lg:px-12'><p className='text-3xl lg:text-6xl font-extrabold mb-4'>Unveiling the Mysteries of Mars:</p><p className='text-4xl lg:text-7xl bg-clip-text text-transparent bg-no-repeat font-extrabold bg-gradient-to-r from-orange-300 via-orange-600 to-red-600'> The Next Frontier</p>
       <div className='flex justify-center z-10  mt-8 '><Link href="/login" className='items-center text-center'><AnimatedGradientText>
        <span
          className={cn(
            `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
          )}
        >
          Join the Community
        </span>
        <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
      </AnimatedGradientText></Link></div>
        </div>
        
        <div className='text-white animate-float'>
          <Image src='/Mars.png' alt='image' width={600} height={500} className="lg:pr-8 p-4 z-100"/>
        </div>
      </div>
    </div>
  )
}

export default Home