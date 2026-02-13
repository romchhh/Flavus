'use client';

import { useState } from 'react';

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqItems = [
    {
      question: 'What services does Flavus Business Services provide?',
      answer: 'Flavus Business Services provides comprehensive corporate advisory and document clearing services including company formation, Golden Visa processing, residency and labor file management, document legalization and certified translation, as well as full document clearance services.',
    },
    {
      question: 'Where is Flavus Business Services located?',
      answer: 'Flavus Business Services is a UAE-based firm operating across the Emirates, supporting entrepreneurs and investors throughout the region.',
    },
    {
      question: 'What types of businesses can Flavus assist with?',
      answer: 'We support entrepreneurs and investors across various industries, providing structured solutions for company formation, compliance, and ongoing corporate maintenance in the UAE.',
    },
    {
      question: 'How does Flavus ensure regulatory compliance?',
      answer: 'Operating in a highly regulated environment, we combine local expertise with international standards to deliver structured, transparent solutions that ensure full regulatory compliance with precision and efficiency.',
    },
    {
      question: 'What makes Flavus different from other corporate advisory firms?',
      answer: 'We don\'t just process applications — we build secure pathways for long-term business success in the UAE. Our approach combines Compliance, Clarity, and Continuity to support your business journey.',
    },
    {
      question: 'How can I get started with Flavus Business Services?',
      answer: 'You can contact us through our enquiry form or reach out directly to discuss your specific needs. We provide consultations to understand your requirements and offer tailored solutions for your business.',
    },
    {
      question: 'What is the typical timeline for company formation?',
      answer: 'The timeline varies depending on the type of company and jurisdiction, but typically ranges from 2-4 weeks for mainland companies and 1-2 weeks for free zone companies. We expedite the process wherever possible while ensuring all documentation is complete and compliant.',
    },
    {
      question: 'Do you provide ongoing support after company formation?',
      answer: 'Yes, we provide comprehensive ongoing support including annual compliance management, visa renewals, labor file maintenance, and corporate governance advisory. We are committed to supporting your business throughout its entire lifecycle in the UAE.',
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="relative py-24 bg-gradient-to-br from-white via-[#F6F6F6] to-white">
      <div className="max-w-[1200px] mx-auto px-0 md:px-8">
        {/* Header */}
        <div className="text-center mb-16 px-8 md:px-0">
          <p className="text-[#6F6F6E] text-xs font-semibold mb-3 tracking-[0.2em] uppercase" style={{ fontFamily: 'Corbel, sans-serif' }}>Frequently Asked Questions</p>
          <h2 className="text-5xl md:text-6xl font-bold text-[#222221] leading-tight mb-4" style={{ fontFamily: 'Corbel, sans-serif' }}>
            Questions & Answers
          </h2>
        </div>

        {/* FAQ Accordion - Single Block */}
        <div className="bg-white rounded-none md:rounded-3xl p-8 md:p-12 shadow-xl border border-[#6F6F6E]/10">
          <div className="space-y-0">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className={`border-b border-[#E0E0D8] last:border-b-0 ${index === 0 ? 'pt-0' : 'pt-0'}`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between py-6 text-left hover:bg-[#F6F6F6]/50 transition-colors rounded-lg px-2 -mx-2"
                >
                  <span className="text-[#222221] font-bold text-lg pr-4 flex-1 leading-snug" style={{ fontFamily: 'Corbel, sans-serif' }}>
                    {item.question}
                  </span>
                  <span className={`text-[#6F6F6E] text-base flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-96 pb-5' : 'max-h-0'
                  }`}
                >
                  <div className="px-2 text-[#222221] text-base font-medium leading-relaxed text-justify md:text-left" style={{ fontFamily: 'Corbel, sans-serif' }}>
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
