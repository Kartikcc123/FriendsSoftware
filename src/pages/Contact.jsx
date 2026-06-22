import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
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
                  <p className="opacity-80">contact@friendssoftware.com</p>
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
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">First Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-brand-navy/20 dark:border-white/20 bg-white/50 dark:bg-brand-dark/50 focus:outline-none focus:ring-2 focus:ring-brand-yellow transition-all text-brand-dark dark:text-brand-white" placeholder="John" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Last Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-brand-navy/20 dark:border-white/20 bg-white/50 dark:bg-brand-dark/50 focus:outline-none focus:ring-2 focus:ring-brand-yellow transition-all text-brand-dark dark:text-brand-white" placeholder="Doe" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email Address</label>
              <input type="email" className="w-full px-4 py-3 rounded-lg border border-brand-navy/20 dark:border-white/20 bg-white/50 dark:bg-brand-dark/50 focus:outline-none focus:ring-2 focus:ring-brand-yellow transition-all text-brand-dark dark:text-brand-white" placeholder="john@example.com" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Service Required</label>
              <select className="w-full px-4 py-3 rounded-lg border border-brand-navy/20 dark:border-white/20 bg-white/50 dark:bg-brand-dark/50 focus:outline-none focus:ring-2 focus:ring-brand-yellow transition-all text-brand-dark dark:text-brand-white">
                <option value="" className="text-black">Select a service...</option>
                <option value="digital-marketing" className="text-black">Digital Marketing</option>
                <option value="web-dev" className="text-black">Web Development</option>
                <option value="app-dev" className="text-black">App Development</option>
                <option value="saas" className="text-black">SaaS Solutions</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Project Details</label>
              <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-brand-navy/20 dark:border-white/20 bg-white/50 dark:bg-brand-dark/50 focus:outline-none focus:ring-2 focus:ring-brand-yellow transition-all text-brand-dark dark:text-brand-white" placeholder="Tell us about your project requirements..."></textarea>
            </div>

            <button type="submit" className="w-full bg-brand-yellow text-brand-navy font-bold text-lg py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-brand-yellowDark transition-colors shadow-md">
              Send Request <Send size={20} />
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
