import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const whatsappNumber = '919116901749';
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    service: '',
    projectDetails: '',
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const serviceLabelMap = {
        'digital-marketing': 'Digital Marketing',
        'web-dev': 'Web Development',
        'app-dev': 'App Development',
        saas: 'SaaS Solutions',
      };

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Submission failed');
      }

      const whatsappMessage = [
        '*New Contact Form Submission*',
        '',
        `Name: ${formData.firstName} ${formData.lastName}`,
        `Email: ${formData.email}`,
        `Service: ${serviceLabelMap[formData.service] || formData.service}`,
        `Project Details: ${formData.projectDetails}`,
      ].join('\n');
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

      setStatus({
        type: 'success',
        message: 'Your request has been saved successfully and WhatsApp is ready to send.',
      });
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        service: '',
        projectDetails: '',
      });
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'We could not save your request. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const serviceLabelMap = {
    'digital-marketing': 'Digital Marketing',
    'web-dev': 'Web Development',
    'app-dev': 'App Development',
    saas: 'SaaS Solutions',
  };

  const openWhatsApp = () => {
    const fullName = [formData.firstName, formData.lastName].filter(Boolean).join(' ');
    const manualWhatsAppMessage = [
      '*Hello Friends Software,*',
      '',
      'I want to discuss a project with you.',
      `Name: ${fullName || 'Not provided yet'}`,
      `Email: ${formData.email || 'Not provided yet'}`,
      `Service: ${serviceLabelMap[formData.service] || 'Not selected yet'}`,
      `Project Details: ${formData.projectDetails || 'Not provided yet'}`,
    ].join('\n');

    const manualWhatsAppUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(manualWhatsAppMessage)}`;
    window.open(manualWhatsAppUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
      <div className="text-center mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-extrabold mb-6"
        >
          Book a <span className="text-brand-yellow">Service</span>
        </motion.h1>
        <p className="text-xl opacity-80 max-w-3xl mx-auto">
          Ready to start your next big project? Fill out the form below and our team will get back to you shortly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Information */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          <div className="glass dark:glass-dark p-8 rounded-2xl border border-brand-navy/10 dark:border-white/10">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-brand-yellow/20 text-brand-yellow rounded-lg">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold">Our Office</h4>
                  <p className="opacity-80">Bhilwara, Rajasthan, India</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-brand-yellow/20 text-brand-yellow rounded-lg">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold">Phone Number</h4>
                  <p className="opacity-80">+91 9116901749</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-brand-yellow/20 text-brand-yellow rounded-lg">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold">Email Address</h4>
                  <p className="opacity-80">friendsoftwarein@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass dark:glass-dark p-8 rounded-2xl bg-gradient-to-br from-brand-navy to-brand-navyLight text-white border-none shadow-2xl">
            <h3 className="text-2xl font-bold mb-4 text-brand-yellow">Why Choose Us?</h3>
            <ul className="space-y-3 opacity-90">
              <li>✓ Proven track record with local Bhilwara businesses.</li>
              <li>✓ Expertise in modern, fast, and scalable tech stacks.</li>
              <li>✓ Dedicated support and transparent communication.</li>
              <li>✓ Tailored solutions for your specific industry needs.</li>
            </ul>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          className="glass dark:glass-dark p-8 md:p-12 rounded-2xl border border-brand-navy/10 dark:border-white/10 shadow-xl"
        >
          <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">First Name</label>
                <input name="firstName" value={formData.firstName} onChange={handleChange} required type="text" className="w-full px-4 py-3 rounded-lg border border-brand-navy/20 dark:border-white/20 bg-white/50 dark:bg-brand-dark/50 focus:outline-none focus:ring-2 focus:ring-brand-yellow transition-all text-brand-dark dark:text-brand-white" placeholder="John" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Last Name</label>
                <input name="lastName" value={formData.lastName} onChange={handleChange} required type="text" className="w-full px-4 py-3 rounded-lg border border-brand-navy/20 dark:border-white/20 bg-white/50 dark:bg-brand-dark/50 focus:outline-none focus:ring-2 focus:ring-brand-yellow transition-all text-brand-dark dark:text-brand-white" placeholder="Doe" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email Address</label>
              <input name="email" value={formData.email} onChange={handleChange} required type="email" className="w-full px-4 py-3 rounded-lg border border-brand-navy/20 dark:border-white/20 bg-white/50 dark:bg-brand-dark/50 focus:outline-none focus:ring-2 focus:ring-brand-yellow transition-all text-brand-dark dark:text-brand-white" placeholder="john@example.com" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Service Required</label>
              <select name="service" value={formData.service} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-brand-navy/20 dark:border-white/20 bg-white/50 dark:bg-brand-dark/50 focus:outline-none focus:ring-2 focus:ring-brand-yellow transition-all text-brand-dark dark:text-brand-white">
                <option value="" className="text-black">Select a service...</option>
                <option value="digital-marketing" className="text-black">Digital Marketing</option>
                <option value="web-dev" className="text-black">Web Development</option>
                <option value="app-dev" className="text-black">App Development</option>
                <option value="saas" className="text-black">SaaS Solutions</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Project Details</label>
              <textarea name="projectDetails" value={formData.projectDetails} onChange={handleChange} required rows={4} className="w-full px-4 py-3 rounded-lg border border-brand-navy/20 dark:border-white/20 bg-white/50 dark:bg-brand-dark/50 focus:outline-none focus:ring-2 focus:ring-brand-yellow transition-all text-brand-dark dark:text-brand-white" placeholder="Tell us about your project requirements..."></textarea>
            </div>

            {status.message && (
              <p className={`text-sm font-medium ${status.type === 'success' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                {status.message}
              </p>
            )}

            <button disabled={isSubmitting} type="submit" className="w-full bg-brand-yellow text-brand-navy font-bold text-lg py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-brand-yellowDark transition-colors shadow-md disabled:cursor-not-allowed disabled:opacity-70">
              {isSubmitting ? 'Saving...' : 'Send Request'} <Send size={20} />
            </button>

            <button
              type="button"
              onClick={openWhatsApp}
              className="w-full border border-green-500 text-green-600 dark:text-green-400 font-bold text-lg py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-green-50 dark:hover:bg-green-500/10 transition-colors shadow-sm"
            >
              Send on WhatsApp
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
