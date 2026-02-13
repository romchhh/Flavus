'use client';

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { heroServices } from '../data/services';

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroServices.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextService = () => {
    setCurrentIndex((prev) => (prev + 1) % heroServices.length);
    setIsAutoPlaying(false);
  };

  const prevService = () => {
    setCurrentIndex((prev) => (prev - 1 + heroServices.length) % heroServices.length);
    setIsAutoPlaying(false);
  };

  const goToService = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const currentService = heroServices[currentIndex];
  const nextServiceData = heroServices[(currentIndex + 1) % heroServices.length];

  return (
    <section id="home" className="relative pt-24 z-40 md:z-auto">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 pt-4 pb-32 md:pb-12">
        {/* Main Hero Card with rounded corners and shadow */}
        <div className="relative bg-white rounded-[2.5rem] shadow-2xl">
          {/* Background Image */}
          <div className="relative h-[700px] md:h-[800px] z-0 rounded-[2.5rem] overflow-hidden">
            <Image
              src="/dubai-museum-hero.jpg"
              alt="Dubai museums"
              fill
              className="object-cover"
              priority
            />
            {/* Darker gradient overlay for better readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
          </div>

          {/* Hero Content Overlay */}
          <div className="absolute inset-0 flex items-center z-10 rounded-[2.5rem]">
            <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                {/* Left Side - Text Content */}
                <div className="text-left space-y-6 pt-8 md:pt-10">
                  <p className="text-white text-xl font-normal tracking-wide" style={{ fontFamily: 'Corbel, sans-serif' }}>
                    United Arab Emirates
                  </p>
                  <h1 className="text-6xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight" style={{ fontFamily: 'Corbel, sans-serif' }}>
                    Flavus Business
                    <br />
                    Services
                  </h1>
                  <p className="text-white text-lg font-light" style={{ fontFamily: 'Corbel, sans-serif' }}>
                    Corporate Advisory &amp; Document Clearing
                  </p>
                  <Link
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById('contact');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }}
                    className="inline-block backdrop-blur-xl bg-white/20 hover:bg-white/30 border border-white/30 text-white font-semibold px-8 py-3.5 rounded-lg transition-all mt-6 shadow-2xl hover:shadow-[0_0_30px_rgba(249,220,10,0.3)] hover:border-[#F9DC0A]/50"
                    style={{ fontFamily: 'Corbel, sans-serif' }}
                  >
                    Submit Your Request
                  </Link>
                </div>

                {/* Right Side - Image Cards */}
                <div className="relative flex items-center justify-center md:justify-end">
                  <div className="relative w-full max-w-md">
                    {/* Card Stack */}
                    <div className="relative">
                      {/* Top Left Card - Larger - Current Service */}
                      <Link href="#services" className="block">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl w-[280px] h-[360px] transform -rotate-2 backdrop-blur-sm bg-white/70 transition-all duration-500 z-50 cursor-pointer hover:scale-105">
                          <Image
                            src={currentService.image}
                            alt={currentService.title}
                            fill
                            className="object-cover transition-opacity duration-500"
                            key={currentIndex}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                          <div className="absolute bottom-8 left-6 right-6 text-left">
                            <p className="text-white/80 text-xs mb-2 uppercase tracking-wider" style={{ fontFamily: 'Corbel, sans-serif' }}>
                              {currentService.subtitle}
                            </p>
                            <h3 className="text-2xl font-bold text-white leading-tight" style={{ fontFamily: 'Corbel, sans-serif' }}>
                              {currentService.title.split(' ').map((word, i, arr) => (
                                <span key={i}>
                                  {word}
                                  {i < arr.length - 1 && <br />}
                                </span>
                              ))}
                            </h3>
                          </div>
                        </div>
                      </Link>

                      {/* Bottom Right Card - Overlapping - Next Service */}
                      <Link href="#services" className="block">
                        <div className="absolute top-24 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:-right-16 rounded-3xl overflow-hidden shadow-2xl w-[260px] h-[340px] md:w-[280px] md:h-[360px] transform rotate-3 backdrop-blur-sm bg-white/70 transition-all duration-500 z-40 cursor-pointer hover:scale-105">
                          <Image
                            src={nextServiceData.image}
                            alt={nextServiceData.title}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                          <div className="absolute bottom-8 left-6 right-6 text-left">
                            <h3 className="text-2xl font-bold text-white leading-tight" style={{ fontFamily: 'Corbel, sans-serif' }}>
                              {nextServiceData.title.split(' ').map((word, i, arr) => (
                                <span key={i}>
                                  {word}
                                  {i < arr.length - 1 && <br />}
                                </span>
                              ))}
                            </h3>
                          </div>
                        </div>
                      </Link>
                    </div>

                    {/* Navigation Controls */}
                    <div className="relative mt-8 md:mt-0 md:absolute md:-bottom-16 md:left-0 flex flex-col md:flex-row items-center gap-3 z-50">
                      <div className="flex items-center gap-3">
                        <button 
                          onClick={prevService}
                          className="w-12 h-12 rounded-full bg-white text-[#222221] flex items-center justify-center transition-all shadow-lg hover:shadow-xl hover:bg-[#F9DC0A] hover:text-[#222221]"
                          aria-label="Previous service"
                        >
                          <span className="text-xl">←</span>
                        </button>
                        <button 
                          onClick={nextService}
                          className="w-12 h-12 rounded-full bg-white text-[#222221] flex items-center justify-center transition-all shadow-lg hover:shadow-xl hover:bg-[#F9DC0A] hover:text-[#222221]"
                          aria-label="Next service"
                        >
                          <span className="text-xl">→</span>
                        </button>
                      </div>
                      <div className="flex items-center md:ml-3">
                        <span className="text-gray-400 md:text-white text-2xl font-bold" style={{ fontFamily: 'Corbel, sans-serif' }}>
                          {String(currentIndex + 1).padStart(2, '0')}
                        </span>
                        <span className="text-gray-400 md:text-white/60 text-lg ml-1" style={{ fontFamily: 'Corbel, sans-serif' }}>
                          / {String(heroServices.length).padStart(2, '0')}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
