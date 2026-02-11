'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import FAQs from "./components/FAQs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Navigation Bar - Fixed */}
      <header className="backdrop-blur-xl bg-white/80 border border-white/30 rounded-[2rem] fixed top-4 left-1/2 transform -translate-x-1/2 z-50 shadow-2xl" style={{ width: '80%' }}>
        <div className="px-6 py-6 flex items-center justify-between relative">
          <Link href="#home" className="flex items-center" onClick={closeMenu}>
            <Image
              src="/6.png"
              alt="Flavus Business Services Logo"
              width={180}
              height={60}
              className="h-auto w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
            <Link href="#home" className="text-[#222221] hover:text-[#6F6F6E] font-bold transition-colors" style={{ fontFamily: 'Corbel, sans-serif' }}>
              Home
            </Link>
            <Link href="#services" className="text-[#222221] hover:text-[#6F6F6E] font-bold transition-colors" style={{ fontFamily: 'Corbel, sans-serif' }}>
              Services
            </Link>
            <Link href="#about" className="text-[#222221] hover:text-[#6F6F6E] font-bold transition-colors" style={{ fontFamily: 'Corbel, sans-serif' }}>
              About
            </Link>
            <Link href="#faqs" className="text-[#222221] hover:text-[#6F6F6E] font-bold transition-colors" style={{ fontFamily: 'Corbel, sans-serif' }}>
              FAQs
            </Link>
            <Link href="#contact" className="text-[#222221] hover:text-[#6F6F6E] font-bold transition-colors" style={{ fontFamily: 'Corbel, sans-serif' }}>
              Contact
            </Link>
          </nav>

          {/* Desktop Contact Button */}
          <Link
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              closeMenu();
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            className="hidden md:inline-block bg-[#222221] hover:bg-[#6F6F6E] text-white font-semibold px-6 py-2.5 rounded-lg transition-all shadow-lg hover:shadow-xl"
            style={{ fontFamily: 'Corbel, sans-serif' }}
          >
            Contact Us
          </Link>

          {/* Mobile Burger Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col gap-1.5 p-2 z-[60] relative"
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-[#222221] transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-[#222221] transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-[#222221] transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </header>

      {/* Mobile Menu - Full Screen Overlay */}
      {isMenuOpen && (
        <>
          {/* Dark Overlay Background */}
          <div 
            className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-[55] transition-opacity duration-300"
            onClick={closeMenu}
          />
          
          {/* Mobile Menu */}
          <div className="md:hidden fixed inset-0 z-[60] flex items-center justify-center">
            <div className="w-full h-full bg-white flex flex-col">
              {/* Close Button */}
              <div className="flex justify-end p-6">
                <button
                  onClick={closeMenu}
                  className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#F6F6F6] transition-colors"
                  aria-label="Close menu"
                >
                  <span className="text-3xl text-[#222221]">×</span>
                </button>
              </div>

              {/* Menu Items */}
              <nav className="flex flex-col flex-1 justify-center px-8 pb-20">
                <Link 
                  href="#home" 
                  className="text-[#222221] hover:text-[#6F6F6E] font-bold py-4 text-2xl transition-colors border-b border-[#E0E0D8]" 
                  style={{ fontFamily: 'Corbel, sans-serif' }}
                  onClick={closeMenu}
                >
                  Home
                </Link>
                <Link 
                  href="#services" 
                  className="text-[#222221] hover:text-[#6F6F6E] font-bold py-4 text-2xl transition-colors border-b border-[#E0E0D8]" 
                  style={{ fontFamily: 'Corbel, sans-serif' }}
                  onClick={closeMenu}
                >
                  Services
                </Link>
                <Link 
                  href="#about" 
                  className="text-[#222221] hover:text-[#6F6F6E] font-bold py-4 text-2xl transition-colors border-b border-[#E0E0D8]" 
                  style={{ fontFamily: 'Corbel, sans-serif' }}
                  onClick={closeMenu}
                >
                  About
                </Link>
                <Link 
                  href="#faqs" 
                  className="text-[#222221] hover:text-[#6F6F6E] font-bold py-4 text-2xl transition-colors border-b border-[#E0E0D8]" 
                  style={{ fontFamily: 'Corbel, sans-serif' }}
                  onClick={closeMenu}
                >
                  FAQs
                </Link>
                <Link 
                  href="#contact" 
                  onClick={(e) => {
                    e.preventDefault();
                    closeMenu();
                    const element = document.getElementById('contact');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className="text-[#222221] hover:text-[#6F6F6E] font-bold py-4 text-2xl transition-colors border-b border-[#E0E0D8]" 
                  style={{ fontFamily: 'Corbel, sans-serif' }}
                >
                  Contact
                </Link>
                <Link
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    closeMenu();
                    const element = document.getElementById('contact');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className="mt-8 bg-[#222221] hover:bg-[#6F6F6E] text-white font-semibold px-8 py-4 rounded-lg transition-all shadow-lg text-center text-xl"
                  style={{ fontFamily: 'Corbel, sans-serif' }}
                >
                  Contact Us
                </Link>
              </nav>
            </div>
          </div>
        </>
      )}

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* FAQs Section */}
      <FAQs />

      {/* Services Section */}
      <Services />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}