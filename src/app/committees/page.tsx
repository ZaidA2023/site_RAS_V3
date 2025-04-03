'use client'

import {slides, Redir} from "../components/slides";
import Slideshow from "../components/Slideshow";
import Navbar from "../components/Navbar";

export default function Committees() {
return (
<div>
  <Navbar scrollSet = {false} opacitySet = {false}/>
  {/* VexU title and slides */}
  <div className = "mt-30 text-black flex">
  <div className = "text-start ml-20 text-4xl">
    VEXU
  </div>
  <Redir link="" />
  </div>
  <div className = "wrapper w-full bg-transparent relative mt-5">
  <Slideshow slides = {slides.vexSlides}/>
  </div>
  {/* Demobots title and slides */}
  <div className = "mt-10 text-black flex">
  <div className = "text-start ml-20 text-4xl">
    Demobots
  </div>
  <Redir link="" />
  </div>
  <div className = "wrapper w-full bg-transparent relative mt-5">
  <Slideshow slides = {slides.dbSlides}/>
  </div>
  {/* Robomaster title and slides */}
  <div className = "mt-10 text-black flex">
  <div className = "text-start ml-20 text-4xl">
    Robomaster
  </div>
  <Redir link="" />
  </div>
  <div className = "wrapper w-full bg-transparent relative mt-5">
  <Slideshow slides = {slides.rbmSlides}/>
  </div>
  {/* IGVC title and slides */}
  <div className = "mt-10 text-black flex">
  <div className = "text-start ml-20 text-4xl">
    IGVC
  </div>
  <Redir link="" />
  </div>
  <div className = "wrapper w-full bg-transparent relative mt-5">
  <Slideshow slides = {slides.igvcSlides}/>
  </div>
  {/* Robotathon title and slides */}
  <div className = "mt-10 text-black flex">
  <div className = "text-start ml-20 text-4xl">
    Robotathon
  </div>
  <Redir link="" />
  </div>
  <div className = "wrapper w-full bg-transparent relative mt-5">
  <Slideshow slides = {slides.thonSlides}/>
  </div>
  {/* Business title and slides */}
  <div className = "mt-10 text-black flex">
  <div className = "text-start ml-20 text-4xl">
    Business / Advertising
  </div>
  <Redir link="" />
  </div>
  <div className = "wrapper w-full bg-transparent relative mt-5">        
  <Slideshow slides = {slides.advSlides}/>
  </div>
</div>
)
}