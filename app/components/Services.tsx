import Image from 'next/image';
import { services } from '../data/services';

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-[#F5F5F0] z-30 md:z-auto">
      <div className="max-w-[1400px] mx-auto px-8">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#222221] leading-tight" style={{ fontFamily: 'Corbel, sans-serif' }}>
            Services
          </h2>
        </div>

        {/* Services Grid - 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const imageOnLeft = service.imagePosition === 'left';
            return (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex"
              >
                {/* Image Side */}
                <div className={`relative w-1/2 flex-shrink-0 ${imageOnLeft ? 'order-1' : 'order-2'}`}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Information Side */}
                <div className={`w-1/2 flex flex-col justify-center p-6 bg-[#77736D] ${imageOnLeft ? 'order-2' : 'order-1'}`}>
                  {/* Icon */}
                  {service.Icon && (
                    <div className="text-white mb-4 text-center flex justify-center">
                      <service.Icon className="w-12 h-12" strokeWidth={1.5} />
                    </div>
                  )}
                  
                  {/* Title */}
                  <h3 className="text-white text-lg font-bold mb-3 leading-tight text-center" style={{ fontFamily: 'Corbel, sans-serif' }}>
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-white/90 text-sm font-medium leading-relaxed text-center" style={{ fontFamily: 'Corbel, sans-serif' }}>
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
