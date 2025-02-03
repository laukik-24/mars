"use client";
import Home from "@/components/Home";
import Geography from "@/components/Geography";
import {AboutMars}  from "@/components/about";
import { Explore } from "@/components/exploration";
import Navbar from "@/components/ui/Navbar";
import { Particles } from "@/components/ui/particles";
import Footer from "@/components/footer";


export default function LandingPage() {
  
  return (
<div className="relative flex flex-col bg-black">
  <Particles
          className="absolute inset-0 z-0"
          quantity={100}
          ease={80}
          color="#ffffff"
          refresh
        />
  <Navbar/>
  <Home />
  <AboutMars/>
  <div className="relative w-full flex justify-center items-center ">
    <Geography />
  </div>
  <Explore/>
  <Footer/>
</div>
  );
}
