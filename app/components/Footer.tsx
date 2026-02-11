import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#222221] rounded-b-[2rem] text-white">
      <div className="max-w-[1400px] mx-auto px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Left Column - Branding */}
          <div>
            <Link href="#home" className="inline-block mb-4">
              <Image
                src="/6.png"
                alt="Flavus Business Services Logo"
                width={200}
                height={70}
                className="h-auto w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-sm text-[#6F6F6E] mb-1" style={{ fontFamily: 'Corbel, sans-serif' }}>Discover</p>
            <p className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'Corbel, sans-serif' }}>Business Solutions</p>
            <p className="text-xl font-bold text-white" style={{ fontFamily: 'Corbel, sans-serif' }}>Flavus Business Services</p>
          </div>

          {/* Middle Column - Address */}
          <div>
            <p className="text-xs uppercase tracking-wider mb-4 text-[#6F6F6E] font-bold" style={{ fontFamily: 'Corbel, sans-serif' }}>ADDRESS</p>
            <p className="text-sm text-white/90 leading-relaxed" style={{ fontFamily: 'Corbel, sans-serif' }}>
              Dubai based
              <br />
              Supporting entrepreneurs and investors across the Emirates
            </p>
          </div>

          {/* Right Column - Contact */}
          <div>
            <p className="text-xs uppercase tracking-wider mb-4 text-[#6F6F6E] font-bold" style={{ fontFamily: 'Corbel, sans-serif' }}>SAY HELLO</p>
            <p className="text-sm text-white/90 mb-3" style={{ fontFamily: 'Corbel, sans-serif' }}>Customercare@flavus.ae</p>
            <div className="w-full h-px bg-[#6F6F6E]/50 my-4"></div>
            <p className="text-2xl font-bold text-white" style={{ fontFamily: 'Corbel, sans-serif' }}>+971 58 593 0042</p>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-[#6F6F6E]/50 pt-8 text-center">
          <p className="text-xs text-[#6F6F6E]" style={{ fontFamily: 'Corbel, sans-serif' }}>
            Flavus Business Services © All rights reserved. Proudly Designed & Developed by{' '}
            <Link 
              href="https://new.telebots.site/en" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline hover:text-[#F9DC0A] transition-colors text-white/80"
            >
              TeleBots
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
