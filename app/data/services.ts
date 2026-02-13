import { FileText, Globe, PenTool, Building2, Plane, Users, Building, BarChart3, Settings } from 'lucide-react';

export interface Service {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imagePosition?: 'left' | 'right';
  Icon?: typeof FileText;
  icon?: string; // emoji for Hero section
}

export const services: Service[] = [
  {
    title: 'Company Formation & Corporate Setup',
    subtitle: 'UAE Business',
    description: 'New company formation in Mainland, Free Zones, and Offshore jurisdictions, business activity and license selection advisory.',
    image: '/company-formation.jpg',
    imagePosition: 'left',
    Icon: Building2,
    icon: '🏢',
  },
  {
    title: 'Document Clearance & PRO Services',
    subtitle: 'Document Services',
    description: 'Government document clearance and processing, immigration and visa-related documentation support, liaison with UAE government authorities.',
    image: '/document-clearing.jpg',
    imagePosition: 'left',
    Icon: FileText,
    icon: '📄',
  },
  {
    title: 'Translation & Document Legalization',
    subtitle: 'Document Services',
    description: 'Certified legal and official document translation, document legalization and attestation at local embassies and consulates in the UAE.',
    image: '/translation-legalization.jpg',
    imagePosition: 'right',
    Icon: Globe,
    icon: '🌐',
  },
  {
    title: 'Power of Attorney & Notary Services',
    subtitle: 'Legal Services',
    description: 'Power of Attorney drafting coordination, notarization and attestation within the UAE, coordination with UAE notary public.',
    image: '/power-of-attorney.jpg',
    imagePosition: 'right',
    Icon: PenTool,
    icon: '✍️',
  },
  {
    title: 'Visa & Immigration Services',
    subtitle: 'Immigration Services',
    description: 'Golden Visa issuance and full support, investor, partner, employment, and family visa issuance, residency renewal support.',
    image: '/visa-immigration.jpg',
    imagePosition: 'left',
    Icon: Plane,
    icon: '🛂',
  },
  {
    title: 'Labor & Employment Services',
    subtitle: 'Employment Services',
    description: 'Labor file opening and management (MOHRE), employment contracts preparation and registration, work permit issuance.',
    image: '/labor-employment.jpg',
    imagePosition: 'left',
    Icon: Users,
    icon: '👥',
  },
  {
    title: 'Banking Support Services',
    subtitle: 'Financial Services',
    description: 'Bank compliance and KYC documentation preparation, banking support and coordination.',
    image: '/banking-support.jpg',
    imagePosition: 'right',
    Icon: Building,
    icon: '🏦',
  },
  {
    title: 'Tax Residency & Compliance Support',
    subtitle: 'Tax Services',
    description: 'Tax Residency Certificate application support, UAE tax residency structuring guidance, corporate tax registration.',
    image: '/tax-residency.jpg',
    imagePosition: 'right',
    Icon: BarChart3,
    icon: '📊',
  },
  {
    title: 'Ongoing Corporate & Administrative Support',
    subtitle: 'Administrative Services',
    description: 'Corporate document maintenance and renewals, business support services for shareholders and executives.',
    image: '/ongoing-support.jpg',
    imagePosition: 'left',
    Icon: Settings,
    icon: '⚙️',
  },
];

// Hero section uses first 5 services
export const heroServices = services.slice(0, 5);
