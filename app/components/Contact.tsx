'use client';

import { useState, FormEvent } from 'react';
import Image from 'next/image';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    service: 'company-formation',
    preferredContact: 'Phone',
    taskDescription: '',
  });
  const [privacyAgreed, setPrivacyAgreed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!privacyAgreed) {
      setSubmitStatus({ type: 'error', message: 'Please agree to the Privacy Policy' });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          phone: formData.phone,
          email: formData.email || undefined,
          service: formData.service,
          preferredContact: formData.preferredContact,
          taskDescription: formData.taskDescription || undefined,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus({ type: 'success', message: 'Thank you! Your message has been sent successfully.' });
        // Reset form
        setFormData({
          fullName: '',
          phone: '',
          email: '',
          service: 'company-formation',
          preferredContact: 'Phone',
          taskDescription: '',
        });
        setPrivacyAgreed(false);
      } else {
        setSubmitStatus({ type: 'error', message: data.error || 'Failed to send message. Please try again.' });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({ type: 'error', message: 'An error occurred. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-20 scroll-mt-24">
      <div className="max-w-[1400px] mx-auto px-3 md:px-8 pt-4 pb-12">
        {/* Main Contact Card with rounded corners and shadow - similar to Hero */}
        <div className="relative bg-white rounded-[2.5rem] shadow-2xl">
          {/* Background Image in container */}
          <div className="relative h-[1100px] md:h-[700px] z-0 rounded-[2.5rem] overflow-hidden">
            <Image
              src="/d9ee7766-4e01-4c01-bb74-902bacd98aa7.png"
              alt="Contact background"
              fill
              className="object-cover"
              priority
            />
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
          </div>

          {/* Contact Form Overlay */}
          <div className="absolute inset-0 flex items-start md:items-center z-10 rounded-[2.5rem]">
            <div className="w-full max-w-[900px] mx-auto px-3 md:px-8 py-6 md:py-12">
              <div className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-[30px] p-5 md:p-12 shadow-2xl w-full">
          {/* Header */}
          <div className="text-center mb-8">
            <p className="text-white/80 text-xs font-semibold mb-3 tracking-[0.2em] uppercase" style={{ fontFamily: 'Corbel, sans-serif' }}>Contact</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4" style={{ fontFamily: 'Corbel, sans-serif' }}>
              Get In Touch
            </h2>
            <p className="text-white text-base drop-shadow-md" style={{ fontFamily: 'Corbel, sans-serif' }}>
              Corporate advisory and document clearing services supporting entrepreneurs and investors across the Emirates.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
            {/* Status Message */}
            {submitStatus.type && (
              <div className={`p-4 rounded-lg ${
                submitStatus.type === 'success' 
                  ? 'bg-green-500/20 border border-green-500/50 text-green-100' 
                  : 'bg-red-500/20 border border-red-500/50 text-red-100'
              }`}>
                <p className="text-sm font-medium" style={{ fontFamily: 'Corbel, sans-serif' }}>
                  {submitStatus.message}
                </p>
              </div>
            )}

            {/* First Row - Name and Phone */}
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <label className="block text-white text-xs font-semibold mb-2 uppercase tracking-wider drop-shadow-md" style={{ fontFamily: 'Corbel, sans-serif' }}>
                  FULL NAME *
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-3.5 backdrop-blur-md bg-white/30 border border-white/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/60 text-white placeholder:text-white/70 transition-all"
                  placeholder="Enter your full name"
                  style={{ fontFamily: 'Corbel, sans-serif' }}
                />
              </div>
              <div>
                <label className="block text-white text-xs font-semibold mb-2 uppercase tracking-wider drop-shadow-md" style={{ fontFamily: 'Corbel, sans-serif' }}>
                  PHONE *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3.5 backdrop-blur-md bg-white/30 border border-white/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/60 text-white placeholder:text-white/70 transition-all"
                  placeholder="Enter your phone number"
                  style={{ fontFamily: 'Corbel, sans-serif' }}
                />
              </div>
            </div>

            {/* Second Row - Email and Service */}
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <label className="block text-white text-xs font-semibold mb-2 uppercase tracking-wider drop-shadow-md" style={{ fontFamily: 'Corbel, sans-serif' }}>
                  EMAIL
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3.5 backdrop-blur-md bg-white/30 border border-white/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/60 text-white placeholder:text-white/70 transition-all"
                  placeholder="Enter your email"
                  style={{ fontFamily: 'Corbel, sans-serif' }}
                />
              </div>
              <div>
                <label className="block text-white text-xs font-semibold mb-2 uppercase tracking-wider drop-shadow-md" style={{ fontFamily: 'Corbel, sans-serif' }}>
                  SELECT SERVICE
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3.5 backdrop-blur-md bg-white/30 border border-white/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/60 text-white transition-all"
                  style={{ fontFamily: 'Corbel, sans-serif' }}
                >
                  <option value="company-formation" className="text-[#222221]">Company Formation</option>
                  <option value="document-clearance" className="text-[#222221]">Document Clearance & PRO Services</option>
                  <option value="translation" className="text-[#222221]">Translation & Document Legalization</option>
                  <option value="power-of-attorney" className="text-[#222221]">Power of Attorney & Notary Services</option>
                  <option value="visa" className="text-[#222221]">Visa & Immigration Services</option>
                  <option value="labor" className="text-[#222221]">Labor & Employment Services</option>
                  <option value="banking" className="text-[#222221]">Banking Support Services</option>
                  <option value="tax" className="text-[#222221]">Tax Residency & Compliance Support</option>
                  <option value="ongoing" className="text-[#222221]">Ongoing Corporate & Administrative Support</option>
                </select>
              </div>
            </div>

            {/* Task Description */}
            <div>
              <label className="block text-white text-xs font-semibold mb-2 uppercase tracking-wider drop-shadow-md" style={{ fontFamily: 'Corbel, sans-serif' }}>
                DESCRIBE YOUR TASK/REQUEST
              </label>
              <textarea
                value={formData.taskDescription}
                onChange={(e) => setFormData({ ...formData, taskDescription: e.target.value })}
                className="w-full px-4 py-3.5 backdrop-blur-md bg-white/30 border border-white/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/60 text-white placeholder:text-white/70 transition-all resize-none"
                placeholder="Describe your task/request"
                rows={4}
                style={{ fontFamily: 'Corbel, sans-serif' }}
              />
            </div>

            {/* Set Us a Task Section */}
            <div className="space-y-3 md:space-y-4 pt-4 md:pt-6 border-t border-white/30">
              {/* Preferred Method of Contact */}
              <div>
                <label className="block text-white text-sm font-semibold mb-3 drop-shadow-md" style={{ fontFamily: 'Corbel, sans-serif' }}>
                  Preferred Method of Contact *
                </label>
                <div className="flex flex-wrap gap-6">
                  {['Phone', 'Email'].map((method) => (
                    <label
                      key={method}
                      className="flex items-center cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="preferredContact"
                        value={method}
                        checked={formData.preferredContact === method}
                        onChange={(e) => setFormData({ ...formData, preferredContact: e.target.value })}
                        className="mr-2 w-4 h-4 text-white focus:ring-white/50 accent-white"
                      />
                      <span className="text-white text-sm drop-shadow-md" style={{ fontFamily: 'Corbel, sans-serif' }}>{method}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Privacy Policy and Submit */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-4 pt-4 md:pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="backdrop-blur-md bg-white/40 hover:bg-white/50 border border-white/50 text-[#222221] font-semibold px-10 py-3.5 rounded-lg transition-all uppercase tracking-wider order-2 md:order-1 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ fontFamily: 'Corbel, sans-serif' }}
              >
                {isSubmitting ? 'Sending...' : 'Enquire'}
              </button>
              <label className="flex items-center cursor-pointer order-1 md:order-2">
                <input
                  type="checkbox"
                  checked={privacyAgreed}
                  onChange={(e) => setPrivacyAgreed(e.target.checked)}
                  className="mr-2 w-4 h-4 text-white focus:ring-white/50 accent-white"
                />
                <span className="text-white text-sm drop-shadow-md" style={{ fontFamily: 'Corbel, sans-serif' }}>
                  I&apos;ve read and agree to the Privacy Policy.*
                </span>
              </label>
            </div>
          </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
