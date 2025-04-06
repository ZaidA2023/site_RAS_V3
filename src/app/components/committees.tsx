'use client'

import {slides} from "./slides";
import Slideshow from "./Slideshow";
import Navbar from "./Navbar";

export default function Committees() {
return (
<div>
  <Navbar scrollSet = {false} opacitySet = {false}/>
  {/* VexU title and slides */}
  <div className = "text-black flex">
  <div className = "slider-container text-start text-4xl">
    VEXU
  </div>
  </div>
  <div className = "wrapper w-full bg-transparent relative mt-5">
  <Slideshow slides = {slides.vexSlides}/>
  </div>
  {/* Demobots title and slides */}
  <div className = "mt-10 text-black flex">
  <div className = "slider-container text-start ml-20 text-4xl">
    Demobots
  </div>
  </div>
  <div className = "wrapper w-full bg-transparent relative mt-5">
  <Slideshow slides = {slides.dbSlides}/>
  </div>
  {/* Robomaster title and slides */}
  <div className = "mt-10 text-black flex">
  <div className = "slider-container text-start ml-20 text-4xl">
    Robomaster
  </div>
  </div>
  <div className = "wrapper w-full bg-transparent relative mt-5">
  <Slideshow slides = {slides.rbmSlides}/>
  </div>
  {/* IGVC title and slides */}
  <div className = "mt-10 text-black flex">
  <div className = "slider-container text-start ml-20 text-4xl">
    IGVC
  </div>
  </div>
  <div className = "wrapper w-full bg-transparent relative mt-5">
  <Slideshow slides = {slides.igvcSlides}/>
  </div>
  {/* Robotathon title and slides */}
  <div className = "mt-10 text-black flex">
  <div className = "slider-container text-start ml-20 text-4xl">
    Robotathon
  </div>
  </div>
  <div className = "wrapper w-full bg-transparent relative mt-5">
  <Slideshow slides = {slides.thonSlides}/>
  </div>
  {/* Business title and slides */}
  <div className = "mt-10 text-black flex">
  <div className = "slider-container text-start ml-20 text-4xl">
    Business / Advertising
  </div>
  </div>
  <div className = "wrapper w-full bg-transparent relative mt-5">        
  <Slideshow slides = {slides.advSlides}/>
  </div>
</div>
)
}