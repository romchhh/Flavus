import Image from 'next/image';
import { FileText, Globe, PenTool, Building2, Plane, Users, Building, BarChart3, Settings } from 'lucide-react';

const services = [
  {
    title: 'Document Clearance & PRO Services',
    description: 'Government document clearance and processing, immigration and visa-related documentation support, liaison with UAE government authorities.',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop',
    imagePosition: 'left', // 'left' or 'right'
    Icon: FileText,
  },
  {
    title: 'Translation & Document Legalization',
    description: 'Certified legal and official document translation, document legalization and attestation at local embassies and consulates in the UAE.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop',
    imagePosition: 'left',
    Icon: Globe,
  },
  {
    title: 'Power of Attorney & Notary Services',
    description: 'Power of Attorney drafting coordination, notarization and attestation within the UAE, coordination with UAE notary public.',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop',
    imagePosition: 'right',
    Icon: PenTool,
  },
  {
    title: 'Company Formation & Corporate Setup',
    description: 'New company formation in Mainland, Free Zones, and Offshore jurisdictions, business activity and license selection advisory.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop',
    imagePosition: 'right',
    Icon: Building2,
  },
  {
    title: 'Visa & Immigration Services',
    description: 'Golden Visa issuance and full support, investor, partner, employment, and family visa issuance, residency renewal support.',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop',
    imagePosition: 'left',
    Icon: Plane,
  },
  {
    title: 'Labor & Employment Services',
    description: 'Labor file opening and management (MOHRE), employment contracts preparation and registration, work permit issuance.',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop',
    imagePosition: 'left',
    Icon: Users,
  },
  {
    title: 'Banking Support Services',
    description: 'Bank compliance and KYC documentation preparation, banking support and coordination.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2011&auto=format&fit=crop',
    imagePosition: 'right',
    Icon: Building,
  },
  {
    title: 'Tax Residency & Compliance Support',
    description: 'Tax Residency Certificate application support, UAE tax residency structuring guidance, corporate tax registration.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop',
    imagePosition: 'right',
    Icon: BarChart3,
  },
  {
    title: 'Ongoing Corporate & Administrative Support',
    description: 'Corporate document maintenance and renewals, business support services for shareholders and executives.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop',
    imagePosition: 'left',
    Icon: Settings,
  },
];

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
                  <div className="text-white mb-4 text-center flex justify-center">
                    <service.Icon className="w-12 h-12" strokeWidth={1.5} />
                  </div>
                  
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
