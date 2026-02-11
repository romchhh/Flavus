import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-[#F5F5F0] z-10 md:z-auto">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="relative flex items-center min-h-[800px]">
          {/* Left Side - About Card with overlap */}
          <div className="relative z-20 w-full lg:w-[55%] lg:pr-8 flex items-center">
            <div className="bg-[#FAF5F1] rounded-3xl p-12 shadow-2xl w-full">
              {/* Header */}
              <div className="mb-8">
                <p className="text-[#6F6F6E] text-xs font-semibold mb-2 tracking-[0.2em] uppercase" style={{ fontFamily: 'Corbel, sans-serif' }}>About</p>
                <h2 className="text-5xl font-bold text-[#222221] leading-tight mb-3" style={{ fontFamily: 'Corbel, sans-serif' }}>
                  Flavus Business Services
                </h2>
              </div>

              {/* Description */}
              <div className="space-y-5 mb-8 text-[#222221]">
                <p className="text-lg font-medium leading-relaxed" style={{ fontFamily: 'Corbel, sans-serif' }}>
                  Step into a new era of business excellence in Dubai, where <span className="font-bold">Flavus Business Services</span> redefines corporate advisory with unmatched sophistication and precision.
                </p>
                <p className="text-lg font-medium leading-relaxed" style={{ fontFamily: 'Corbel, sans-serif' }}>
                  Nestled in the heart of the UAE, we are more than consultants — we are architects of opportunity. Our seamless blend of resort-style service and urban vibrancy creates an environment where sophistication meets authenticity, and ambition transforms into achievement.
                </p>
                <p className="text-lg font-medium leading-relaxed" style={{ fontFamily: 'Corbel, sans-serif' }}>
                  From <span className="font-bold">company formation</span> and <span className="font-bold">Golden Visa processing</span> to <span className="font-bold">residency management</span>, <span className="font-bold">document legalization</span>, and <span className="font-bold">certified translation</span> — we orchestrate every detail with precision.
                </p>
                
                {/* Key Values */}
                <div className="bg-white/80 rounded-xl p-4 md:p-5 mt-6">
                  <p className="text-base md:text-lg font-bold text-[#222221] mb-3" style={{ fontFamily: 'Corbel, sans-serif' }}>
                    Our Foundation
                  </p>
                  <div className="flex flex-wrap items-center gap-2 md:gap-3 text-[#222221] text-sm md:text-base font-bold" style={{ fontFamily: 'Corbel, sans-serif' }}>
                    <span className="flex items-center gap-1.5">
                      <span className="text-[#F9DC0A] text-lg">✓</span>
                      <span>Compliance</span>
                    </span>
                    <span className="text-[#6F6F6E] hidden md:inline">|</span>
                    <span className="flex items-center gap-1.5">
                      <span className="text-[#F9DC0A] text-lg">✓</span>
                      <span>Clarity</span>
                    </span>
                    <span className="text-[#6F6F6E] hidden md:inline">|</span>
                    <span className="flex items-center gap-1.5">
                      <span className="text-[#F9DC0A] text-lg">✓</span>
                      <span>Continuity</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Professional Image with overlap */}
          <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[65%] -z-10 lg:z-0">
            <div className="relative h-full min-h-[800px] rounded-3xl overflow-hidden">
              <Image
                src="/about-image.png"
                alt="Flavus Business Services"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}