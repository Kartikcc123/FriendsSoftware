import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Home, Star, Quote } from 'lucide-react';

const clientsData = [
  {
    id: 1,
    name: 'STECH School Digitization Success',
    type: 'Education',
    service: 'Web Development',
    location: 'Bhilwara, Rajasthan',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800',
    description: 'Explore how we provided a comprehensive school management and digital presence solution to streamline their operations.'
  },
  {
    id: 2,
    name: 'Academic Plus Coaching Enrollment Boost',
    type: 'Education',
    service: 'Digital Marketing',
    location: 'Bhilwara, Rajasthan',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800',
    description: 'Learn how a custom LMS and targeted marketing strategy significantly boosted student enrollment for Academic Plus.'
  },
  {
    id: 3,
    name: 'Maths Point Interactive Learning Platform',
    type: 'Education',
    service: 'App Development',
    location: 'Bhilwara, Rajasthan',
    image: 'https://images.unsplash.com/photo-1634128221889-82ed6ef821ce?auto=format&fit=crop&q=80&w=800',
    description: 'Discover how an interactive learning platform and dedicated mobile application transformed the student experience.'
  },
  {
    id: 4,
    name: 'Local Business E-Commerce Overhaul',
    type: 'Retail',
    service: 'Web Development',
    location: 'Bhilwara, Rajasthan',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800',
    description: 'See how a comprehensive e-commerce platform and digital marketing overhaul increased local retail sales.'
  },
  {
    id: 5,
    name: 'Healthcare Clinic Patient Management SaaS',
    type: 'Healthcare',
    service: 'SaaS Solutions',
    location: 'Bhilwara, Rajasthan',
    image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=800',
    description: 'Learn how a custom patient management SaaS and appointment booking system optimized clinic workflows.'
  }
];

const testimonials = [
  {
    id: 1,
    name: "Rajesh Sharma",
    role: "Director",
    company: "STECH School",
    content: "Friends Software transformed our entire school management process. Their web development team was professional, and the digital presence they built for us has been phenomenal.",
    rating: 5
  },
  {
    id: 2,
    name: "Vikram Singh",
    role: "Founder",
    company: "Academic Plus Coaching",
    content: "The targeted digital marketing campaign and the custom LMS they developed helped us double our student enrollment within just 3 months. Truly exceptional service!",
    rating: 5
  },
  {
    id: 3,
    name: "Dr. Anita Patel",
    role: "Head Physician",
    company: "City Healthcare Clinic",
    content: "The patient management SaaS solution has completely streamlined our clinic's daily operations. Appointment booking is now seamless for both our staff and patients.",
    rating: 5
  }
];

export default function Clients() {
  const [activeTab, setActiveTab] = useState('case-studies');
  const [serviceFilter, setServiceFilter] = useState('All Services');
  const [industryFilter, setIndustryFilter] = useState('All Industries');

  const filteredClients = useMemo(() => {
    return clientsData.filter(client => {
      const matchService = serviceFilter === 'All Services' || client.service === serviceFilter;
      const matchIndustry = industryFilter === 'All Industries' || client.type === industryFilter;
      return matchService && matchIndustry;
    });
  }, [serviceFilter, industryFilter]);

  return (
    <div className="bg-[#ffffff] min-h-screen pb-24">
      {/* Hero Section */}
      <div className="relative bg-[#3a3b58] bg-cover bg-center py-20" style={{ backgroundImage: "linear-gradient(rgba(45, 47, 86, 0.8), rgba(45, 47, 86, 0.8)), url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1920')" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center text-sm text-gray-300 mb-6 gap-2">
            <Home size={14} />
            <span>/</span>
            <span className="capitalize">Clientsuccess</span>
          </div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-light text-white mb-4 tracking-wide"
          >
            Client Success
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-gray-200 max-w-3xl font-medium leading-relaxed"
          >
            Creating new experiences and business values. We deliver disruptive innovations across many industries.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tabs */}
        <div className="flex border-b border-[#06081E] bg-white -mt-[1px] relative z-10">
          <button 
            onClick={() => setActiveTab('case-studies')}
            className={`px-8 py-4 font-bold text-[15px] transition-colors ${activeTab === 'case-studies' ? 'bg-[#FDB714] text-[#06081E]' : 'text-[#06081E] bg-transparent hover:bg-gray-50'}`}
          >
            Case Studies
          </button>
          <button 
            onClick={() => setActiveTab('testimonials')}
            className={`px-8 py-4 font-bold text-[15px] transition-colors ${activeTab === 'testimonials' ? 'bg-[#FDB714] text-[#06081E]' : 'text-[#06081E] bg-transparent hover:bg-gray-50'}`}
          >
            Testimonials
          </button>
        </div>

        {/* Filters */}
        <AnimatePresence mode="wait">
          {activeTab === 'case-studies' && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="flex justify-end mt-8 mb-8 gap-4 overflow-hidden"
            >
              <select 
                value={serviceFilter}
                onChange={(e) => setServiceFilter(e.target.value)}
                className="border border-gray-300 bg-white text-gray-700 py-2 px-4 rounded-sm text-[13px] outline-none focus:border-[#FDB714] shadow-sm cursor-pointer hover:border-gray-400 transition-colors"
              >
                <option>All Services</option>
                <option>Web Development</option>
                <option>App Development</option>
                <option>Digital Marketing</option>
                <option>SaaS Solutions</option>
              </select>
              <select 
                value={industryFilter}
                onChange={(e) => setIndustryFilter(e.target.value)}
                className="border border-gray-300 bg-white text-gray-700 py-2 px-4 rounded-sm text-[13px] outline-none focus:border-[#FDB714] shadow-sm cursor-pointer hover:border-gray-400 transition-colors"
              >
                <option>All Industries</option>
                <option>Education</option>
                <option>Retail</option>
                <option>Healthcare</option>
              </select>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Grid / Testimonials Content */}
        <div className="mt-8">
          <AnimatePresence mode="wait">
            {activeTab === 'case-studies' ? (
              <motion.div 
                key="grid"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                <AnimatePresence>
                  {filteredClients.length > 0 ? (
                    filteredClients.map((client) => (
                      <motion.div
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        key={client.id}
                        className="bg-white border border-gray-200 rounded-sm group cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full overflow-hidden"
                      >
                        {/* Image & Badges */}
                        <div className="relative h-52 overflow-hidden">
                          <img 
                            src={client.image} 
                            alt={client.name} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <div className="absolute top-3 left-3 flex gap-2">
                            <span className="bg-[#1853b8] text-white text-[11px] font-bold px-2.5 py-1 rounded-sm tracking-wide capitalize shadow-md">
                              {client.service}
                            </span>
                            <span className="bg-[#06081E] text-white text-[11px] font-bold px-2.5 py-1 rounded-sm tracking-wide capitalize shadow-md">
                              {client.type}
                            </span>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 flex flex-col flex-grow relative">
                          <h3 className="text-[#06081E] font-bold text-[17px] leading-snug mb-3 group-hover:text-[#1853b8] transition-colors">
                            {client.name}
                          </h3>
                          <p className="text-gray-600 text-[14px] leading-relaxed flex-grow">
                            {client.description}
                          </p>
                          
                          {/* Footer link */}
                          <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                            <span className="text-[#1853b8] font-bold text-[13px] flex items-center gap-1">
                              Continue Reading <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    ))
                  ) : (
                    <motion.div 
                      initial={{ opacity: 0 }} 
                      animate={{ opacity: 1 }} 
                      className="col-span-full py-20 text-center text-gray-500"
                    >
                      <div className="text-2xl mb-2">No case studies found</div>
                      <p>Try adjusting your filters to see more results.</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ) : (
              <motion.div
                key="testimonials"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8"
              >
                {testimonials.map((testimonial, index) => (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    key={testimonial.id}
                    className="bg-[#f8f9fa] p-8 border-l-4 border-[#FDB714] hover:shadow-lg transition-shadow relative"
                  >
                    <Quote className="absolute top-6 right-6 text-gray-200" size={48} />
                    <div className="flex gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={16} className="fill-[#FDB714] text-[#FDB714]" />
                      ))}
                    </div>
                    <p className="text-gray-700 italic leading-relaxed mb-6 relative z-10">
                      "{testimonial.content}"
                    </p>
                    <div>
                      <h4 className="text-[#06081E] font-bold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
