'use client'

import { committeesSlides } from "./slidesData";
import Slideshow from "./Slideshow";

export default function Committees() {
  return (
    <div>
      {committeesSlides.map((committee, idx) => (
        committee.slides.length && (
          <div key={idx}>
            {/* Header with title and Discord button (if available) */}
            <div className="mt-10 text-black flex flex-wrap items-center last:justify-center justify-between px-4 sm:px-20 gap-4">
              <div className="slider-container text-4xl">
                {committee.title}
              </div>
              {committee.linkLink && committee.linkTitle && (
                <a
                  href={committee.linkLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button"
                >
                  {committee.linkTitle}
                </a>
              )}
            </div>
            <div className="wrapper w-full bg-transparent relative mt-5">
              <Slideshow slides={committee.slides} />
            </div>
          </div>
        )
      ))}
    </div>
  )
}