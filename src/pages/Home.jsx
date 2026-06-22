import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Megaphone, Monitor, Smartphone, BookOpen, Plane,
  Dumbbell, Building, LineChart, Cloud,
  GraduationCap, Landmark, HeartPulse, ShieldCheck, Scale, Factory, ShoppingCart, Truck,
  Handshake, Microscope, ChevronRight
} from 'lucide-react';
import ParticlesBackground from '../components/layout/ParticlesBackground';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeService, setActiveService] = useState(4);
  const [activeTab, setActiveTab] = useState('skill');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHoveringSection, setIsHoveringSection] = useState(false);

  const heroSlides = [
    {
      title: "Unbox The Potential\nof Digital",
      subtitle: "Build a future ready digital enterprise with Friends Software.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      cta: "Let's Connect"
    },
    {
      title: "Next-Gen SaaS\nSolutions",
      subtitle: "Scalable, secure, and robust software tailored to your business needs.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      cta: "Explore SaaS"
    },
    {
      title: "Data-Driven\nDigital Marketing",
      subtitle: "Amplify your reach and engage customers where they are.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      cta: "Grow Your Brand"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);


  const servicesGrid = [
    { id: 0, title: "Digital\nMarketing", icon: Megaphone },
    { id: 1, title: "Web\nDevelopment", icon: Monitor },
    { id: 2, title: "App\nDevelopment", icon: Smartphone },
    { id: 3, title: "Learning\nManagement (LMS)", icon: BookOpen },
    { id: 4, title: "Travel\nBooking App", icon: Plane },
    { id: 5, title: "Gym\nAutomation", icon: Dumbbell },
    { id: 6, title: "ERP\nSystems", icon: Building },
    { id: 7, title: "Stock\nHandler", icon: LineChart },
    { id: 8, title: "Custom\nSaaS", icon: Cloud },
  ];

  const industriesGrid = [
    {
      title: "Education",
      eyebrow: "Digital Learning",
      description: "LMS platforms, student portals, and smart engagement systems.",
      icon: GraduationCap
    },
    {
      title: "Financial Services",
      eyebrow: "Trust At Scale",
      description: "Secure workflows, reporting systems, and fintech-ready product builds.",
      icon: Landmark
    },
    {
      title: "Healthcare",
      eyebrow: "Connected Care",
      description: "Patient journeys, healthcare operations, and modern digital experiences.",
      icon: HeartPulse
    },
    {
      title: "Insurance & Insurtech",
      eyebrow: "Risk Intelligence",
      description: "Claims, policy servicing, and customer-first digital transformation.",
      icon: ShieldCheck
    },
    {
      title: "Legaltech",
      eyebrow: "Workflow Precision",
      description: "Case management, compliance tooling, and document-led automation.",
      icon: Scale
    },
    {
      title: "Manufacturing",
      eyebrow: "Operational Visibility",
      description: "ERP integrations, production workflows, and efficiency-focused systems.",
      icon: Factory
    },
    {
      title: "Retail",
      eyebrow: "Commerce Experience",
      description: "Omnichannel storefronts, loyalty solutions, and retail analytics tools.",
      icon: ShoppingCart
    },
    {
      title: "Transportation & Logistics",
      eyebrow: "Movement Simplified",
      description: "Fleet visibility, booking flows, and logistics operations software.",
      icon: Truck
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">

      {/* Hero Carousel Section */}
      <section className="relative overflow-hidden min-h-[560px] sm:min-h-[620px] lg:h-[85vh] bg-[#061121]">
        {/* Slides */}
        <AnimatePresence initial={false}>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
              <img
                src={heroSlides[currentSlide].image}
                alt="Slide Background"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#061121] via-[#061121]/80 to-transparent"></div>
              <div className="absolute inset-0 bg-[#061121]/40"></div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex items-center">
              <div className="max-w-2xl">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] font-bold tracking-tight mb-6 text-white leading-tight whitespace-pre-line drop-shadow-lg"
                >
                  {heroSlides[currentSlide].title}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 md:mb-10 font-light drop-shadow-md max-w-xl"
                >
                  {heroSlides[currentSlide].subtitle}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <Link to="/contact" className="inline-block bg-[#FF6B35] text-white px-7 sm:px-10 py-3.5 sm:py-4 font-bold tracking-wide uppercase text-sm hover:bg-[#E85D2A] transition-colors shadow-xl">
                    {heroSlides[currentSlide].cta}
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3 sm:gap-4">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all duration-500 ${currentSlide === idx ? 'bg-[#FF6B35] w-12' : 'bg-white/40 hover:bg-white/80 w-3'
                }`}
            />
          ))}
        </div>

        {/* Particle Background Overlay */}
        <div className="absolute inset-0 pointer-events-none z-10">
          <ParticlesBackground />
        </div>
      </section>

      {/* Industries / Fields Section */}
      <section className="py-20 md:py-24 bg-[linear-gradient(180deg,#ffffff_0%,#f5f8fc_100%)] border-b border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-10 md:mb-14">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-[2px] bg-[#FF6B35]"></div>
                <span className="text-[#5e6b85] uppercase tracking-[0.3em] text-xs font-semibold">
                  Fields We Serve
                </span>
              </div>
              <h2 className="text-[#06081E] text-3xl md:text-5xl font-bold leading-tight">
                Built for industries where clarity, speed, and trust matter most.
              </h2>
            </div>
            <p className="max-w-xl text-[#5e6b85] text-base md:text-lg leading-relaxed">
              We design and ship tailored digital products for teams navigating regulation,
              operations, customer experience, and scale.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
            {industriesGrid.map((ind, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ y: -8 }}
                className="group relative min-h-[270px] bg-white border border-[#d9e2ee] p-7 md:p-8 flex flex-col overflow-hidden shadow-[0_18px_45px_rgba(10,25,47,0.06)] hover:shadow-[0_24px_60px_rgba(10,25,47,0.12)] transition-all duration-300"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#FF6B35] via-[#FDB714] to-[#ffd88a] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300"></div>

                <div className="flex items-start justify-between gap-4 mb-10">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.28em] text-[#7c8aa5] font-semibold mb-4">
                      {ind.eyebrow}
                    </p>
                    <h3 className="text-[#06081E] font-bold text-xl leading-snug">
                      {ind.title}
                    </h3>
                  </div>
                  <div className="relative shrink-0">
                    <div className="absolute -inset-2 bg-[#FDB714]/25 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative flex items-center justify-center w-14 h-14 rounded-2xl border border-[#d5deea] bg-[#f7f9fc] group-hover:bg-[#06081E] group-hover:border-[#06081E] transition-colors duration-300">
                      <ind.icon
                        size={28}
                        className="text-[#1c223a] group-hover:text-white transition-colors duration-300"
                        strokeWidth={1.8}
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-auto">
                  <p className="text-[#5e6b85] leading-relaxed text-[15px] pr-4">
                    {ind.description}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-[#06081E] font-semibold text-sm">
                    <span>Explore solutions</span>
                    <ChevronRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid & Experience Section */}
      <section
        className="py-20 md:py-24 bg-[#06081E] text-white overflow-hidden relative md:cursor-none md:[&_*]:cursor-none"
        onMouseMove={(e) => setMousePosition({ x: e.clientX, y: e.clientY })}
        onMouseEnter={() => setIsHoveringSection(true)}
        onMouseLeave={() => setIsHoveringSection(false)}
      >
        {isHoveringSection && (
          <>
            <motion.div
              className="fixed top-0 left-0 w-2 h-2 bg-[#FF6B35] rounded-full pointer-events-none z-[100]"
              animate={{ x: mousePosition.x - 4, y: mousePosition.y - 4 }}
              transition={{ type: "tween", ease: "linear", duration: 0 }}
            />
            <motion.div
              className="fixed top-0 left-0 w-10 h-10 border border-[#FF6B35] rounded-full pointer-events-none z-[100]"
              animate={{ x: mousePosition.x - 20, y: mousePosition.y - 20 }}
              transition={{ type: "spring", damping: 30, stiffness: 200, mass: 0.5 }}
            />
          </>
        )}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-8 h-[2px] bg-[#FF6B35]"></div>
              <span className="text-gray-400 uppercase tracking-widest text-sm font-semibold">Services</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              We're ready to share our <br />
              advice and experience.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start mt-12 md:mt-16">

            {/* Left: 3x3 Grid */}
            <div className="grid grid-cols-3 border-l border-t border-[#1c223a] max-w-[520px] mx-auto lg:max-w-none">
              {servicesGrid.map((service) => {
                const isActive = activeService === service.id;
                return (
                  <div
                    key={service.id}
                    onMouseEnter={() => setActiveService(service.id)}
                    className={`aspect-square border-r border-b border-[#1c223a] flex flex-col items-center justify-center p-3 sm:p-4 text-center transition-all duration-300 relative ${isActive ? 'bg-white/5 border border-white shadow-[0_0_20px_rgba(255,255,255,0.1)] z-10 scale-105' : 'hover:bg-[#121631]'
                      }`}
                  >
                    <service.icon
                      strokeWidth={1.5}
                      size={24}
                      className={`mb-3 transition-colors duration-300 ${isActive ? 'text-white' : 'text-[#4A5578]'}`}
                    />
                    <span className={`text-[10px] sm:text-[11px] md:text-[13px] font-semibold tracking-wide uppercase whitespace-pre-line transition-colors duration-300 ${isActive ? 'text-white' : 'text-[#4A5578]'
                      }`}>
                      {service.title}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Right: Content & Tabs */}
            <div className="pt-4">
              <p className="text-gray-300 leading-relaxed mb-10 text-[15px]">
                Friends Software is a single stop destination for every IT infrastructure and digital solution.
                Whether you need localized digital marketing in Bhilwara or a complex, scalable SaaS platform,
                we architect, implement, secure, and manage every technology domain end to end.
              </p>

              {/* Tabs Navigation */}
              <div className="flex flex-wrap border-b border-[#1c223a] gap-x-8 gap-y-3 mb-8">
                {['skill', 'why choose us?', 'our philosophy'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-4 text-sm font-bold tracking-wide capitalize transition-colors relative ${activeTab === tab ? 'text-white' : 'text-gray-500 hover:text-gray-300'
                      }`}
                  >
                    {tab === 'skill' ? 'Our Skill' : tab}
                    {activeTab === tab && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#FF6B35]"
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* Tab Content Area */}
              <div className="min-h-[250px]">
                <AnimatePresence mode="wait">
                  {activeTab === 'skill' && (
                    <motion.div
                      key="skill"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-gray-400 text-sm mb-8">
                        Forging relationships between businesses, institutions, and their audiences begins with
                        connections built on robust digital infrastructure and targeted marketing.
                      </p>

                      {/* Progress Bars */}
                      <div className="space-y-6">
                        <div>
                          <div className="flex justify-between text-sm font-semibold text-gray-300 mb-2">
                            <span>SaaS Development</span>
                            <span>95%</span>
                          </div>
                          <div className="w-full bg-[#1c223a] h-1.5 rounded-full overflow-hidden">
                            <motion.div initial={{ width: 0 }} whileInView={{ width: '95%' }} transition={{ duration: 1 }} className="h-full bg-[#FF6B35]"></motion.div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-sm font-semibold text-gray-300 mb-2">
                            <span>Digital Marketing</span>
                            <span>98%</span>
                          </div>
                          <div className="w-full bg-[#1c223a] h-1.5 rounded-full overflow-hidden">
                            <motion.div initial={{ width: 0 }} whileInView={{ width: '98%' }} transition={{ duration: 1, delay: 0.1 }} className="h-full bg-[#FF6B35]"></motion.div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-sm font-semibold text-gray-300 mb-2">
                            <span>Web & App Design</span>
                            <span>90%</span>
                          </div>
                          <div className="w-full bg-[#1c223a] h-1.5 rounded-full overflow-hidden">
                            <motion.div initial={{ width: 0 }} whileInView={{ width: '90%' }} transition={{ duration: 1, delay: 0.2 }} className="h-full bg-[#FF6B35]"></motion.div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'why choose us?' && (
                    <motion.div
                      key="why"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ul className="space-y-4 text-gray-300">
                        <li className="flex gap-3 items-start">
                          <div className="w-6 h-6 rounded-full bg-[#FF6B35]/20 text-[#FF6B35] flex items-center justify-center flex-shrink-0 mt-0.5">✓</div>
                          <p><strong>Local Expertise:</strong> Based in Bhilwara, we deeply understand local market dynamics and business needs.</p>
                        </li>
                        <li className="flex gap-3 items-start">
                          <div className="w-6 h-6 rounded-full bg-[#FF6B35]/20 text-[#FF6B35] flex items-center justify-center flex-shrink-0 mt-0.5">✓</div>
                          <p><strong>End-to-End Solutions:</strong> From marketing to heavy SaaS ERPs, we handle everything under one roof.</p>
                        </li>
                        <li className="flex gap-3 items-start">
                          <div className="w-6 h-6 rounded-full bg-[#FF6B35]/20 text-[#FF6B35] flex items-center justify-center flex-shrink-0 mt-0.5">✓</div>
                          <p><strong>Proven Track Record:</strong> Active success stories with top tier local clients like STECH School.</p>
                        </li>
                      </ul>
                    </motion.div>
                  )}

                  {activeTab === 'our philosophy' && (
                    <motion.div
                      key="philosophy"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-gray-300 leading-relaxed mb-4">
                        We believe that powerful technology should not be restricted to massive global corporations.
                        Our mission is to bring state-of-the-art software solutions, automation tools, and strategic
                        digital marketing to businesses of all scales.
                      </p>
                      <blockquote className="border-l-4 border-[#FF6B35] pl-4 italic text-gray-400 mt-6">
                        "Empowering local businesses with global digital standards."
                      </blockquote>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Results / Case Studies Section */}
      <section className="bg-white pb-24">
        {/* Banner */}
        <div className="relative w-full h-[300px] overflow-hidden bg-[#1c1427]">
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center opacity-40"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541295988133-c215d2a6a117?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')" }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#1c1427] via-[#1c1427]/70 to-transparent"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-2 leading-tight tracking-wide">
              Lead <br />
              <span className="font-semibold">the Outcome</span>
            </h2>
            <p className="text-white font tracking-wide mt-4 text-sm md:text-base">
              Results that matter. Impact you can measure.
            </p>
          </div>
          {/* Angled decorative shape */}
          <div className="absolute right-20 top-0 h-full w-[400px] hidden lg:block opacity-90 pointer-events-none">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
               <polygon points="40,20 100,0 60,100 0,70" fill="url(#gradShape)" stroke="#FDB714" strokeWidth="0.5" />
               <defs>
                 <linearGradient id="gradShape" x1="0%" y1="100%" x2="100%" y2="0%">
                   <stop offset="0%" style={{ stopColor: '#FDB714', stopOpacity: 0.85 }} />
                   <stop offset="100%" style={{ stopColor: 'transparent', stopOpacity: 0 }} />
                 </linearGradient>
               </defs>
            </svg>
          </div>
        </div>

        {/* 3 Column Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                img: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                title: "Harshal Doshi, Software Engineer, Socotra",
                category: "Case Study",
                desc: "Friends Software's QA and Testing enables test coverage improvement by 74% for a leading cybersecurity company in the US"
              },
              {
                img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                title: "Capturing the Experience of Canprev!",
                category: "Case Study",
                desc: "A leading InsurTech accelerates DevOps, improving deployment productivity by 95%"
              },
              {
                img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                title: "Ashok Jakati, CTO of Quility, at our office",
                category: "Case Study",
                desc: "Enable a seamless and superior digital healthcare experience across applications"
              }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col h-full gap-2">
                {/* Upper Box: Video & Title */}
                <div className="bg-[#f4f5f7] p-5 pb-6 flex flex-col h-full shadow-sm hover:shadow-md transition-shadow">
                  <div className="relative w-full aspect-[16/9] mb-5 bg-black group cursor-pointer overflow-hidden border border-gray-200">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-8 bg-[#FDB714] rounded-md flex items-center justify-center shadow-md group-hover:bg-[#FF6B35] transition-colors">
                        <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent ml-1"></div>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-[#06081E] font-bold text-[15px] leading-snug">
                    {item.title}
                  </h3>
                </div>

                {/* Lower Box: Case Study */}
                <div className="bg-[#f4f5f7] p-5 flex-grow flex flex-col shadow-sm">
                  <span className="text-gray-400 font-bold text-[12px] uppercase tracking-wider mb-2">
                    {item.category}
                  </span>
                  <p className="text-[#06529a] font-bold text-[14px] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
            <h2 className="text-4xl md:text-5xl font-bold text-[#06529a] max-w-lg leading-tight">
              This is what Friends Software stands for:
            </h2>
            <Link to="/company" className="flex items-center gap-2 text-[#06529a] font-semibold hover:text-[#0a6ad2] transition-colors mb-2">
              More about Friends Software <ChevronRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              {
                title: "TOGETHER",
                icon: Handshake,
                desc: "This is how we shape your digital transformation: with commitment, know-how and in exchange with you."
              },
              {
                title: "INNOVATIVE",
                icon: Microscope,
                desc: "Future-proof, sustainable and always the decisive step ahead: our IT solutions for you."
              },
              {
                title: "SAFE",
                icon: ShieldCheck,
                desc: "For your IT and data security, we offer you certified and optimal services."
              },
              {
                title: "AUTHENTIC",
                icon: Scale,
                desc: "Our passion is IT. At eye level with you, we create the best concept together."
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col"
              >
                <div className="mb-8">
                  <item.icon size={64} className="text-[#06529a]" strokeWidth={1} />
                </div>
                <h3 className="text-[#06529a] font-bold tracking-wide uppercase mb-4 text-[15px]">
                  {item.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-[15px]">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[linear-gradient(180deg,#ffffff_0%,#f6f9fc_100%)] border-t border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-[36px] border border-[#dbe4ef] bg-white p-6 md:p-10 lg:p-12 shadow-[0_30px_90px_rgba(10,25,47,0.08)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,107,53,0.1),transparent_25%),radial-gradient(circle_at_bottom_left,rgba(10,106,210,0.08),transparent_28%)] pointer-events-none"></div>

            <div className="relative grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-14 items-center">
              {/* Image Side */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full"
              >
                <div className="relative mx-auto max-w-[520px]">
                  <div className="absolute -top-6 -left-6 h-28 w-28 rounded-[28px] bg-[#FDB714]/20 blur-2xl"></div>
                  <div className="absolute -bottom-8 -right-8 h-36 w-36 rounded-full bg-[#0a6ad2]/12 blur-3xl"></div>

                  <div className="relative overflow-hidden rounded-[30px] border border-white shadow-[0_26px_55px_rgba(10,25,47,0.16)]">
                    <img
                      src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80"
                      alt="Team collaborating"
                      className="w-full h-[300px] sm:h-[360px] lg:h-[420px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#06081E]/45 via-transparent to-transparent"></div>

                    <div className="absolute left-5 right-5 bottom-5 rounded-[22px] border border-white/20 bg-white/12 px-5 py-4 backdrop-blur-md">
                      <p className="text-[11px] uppercase tracking-[0.28em] text-white/75 font-semibold mb-2">
                        What you can expect
                      </p>
                      <p className="text-white text-sm leading-relaxed">
                        Clear discovery, practical recommendations, and a solution roadmap shaped around your goals.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Content Side */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-full"
              >
                <div className="inline-flex items-center gap-3 rounded-full border border-[#ff6b35]/20 bg-[#fff7f3] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#6a7690]">
                  <span className="h-2 w-2 rounded-full bg-[#FF6B35]"></span>
                  Start The Conversation
                </div>

                <h2 className="mt-6 text-3xl sm:text-4xl lg:text-[3.2rem] leading-[1.08] text-[#06081E] font-light tracking-tight max-w-2xl">
                  Engage with us so <span className="font-bold">we can understand</span> your needs and
                  <span className="font-bold"> deliver the right digital solution</span>.
                </h2>

                <p className="mt-6 max-w-xl text-[#5e6b85] text-lg leading-relaxed">
                  Whether you need marketing support, a modern website, a mobile product, or a
                  business system, we help define the most effective path before we build.
                </p>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl">
                  {[
                    { value: '1:1', label: 'Consultation-led discovery' },
                    { value: 'Clear', label: 'Scope and solution alignment' },
                    { value: 'Fast', label: 'Next steps after first discussion' },
                  ].map((item) => (
                    <div key={item.label} className="rounded-[22px] border border-[#dbe4ef] bg-[#f8fbfe] px-5 py-5">
                      <p className="text-2xl font-bold text-[#06081E]">{item.value}</p>
                      <p className="mt-2 text-sm leading-relaxed text-[#5e6b85]">{item.label}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center bg-[#FF6B35] text-white px-8 py-4 font-bold tracking-[0.16em] uppercase hover:bg-[#E85D2A] transition-colors"
                  >
                    Let's Connect
                  </Link>
                  <Link
                    to="/services"
                    className="inline-flex items-center justify-center border border-[#cfdceb] text-[#06081E] px-8 py-4 font-bold tracking-[0.16em] uppercase hover:border-[#06081E] transition-colors"
                  >
                    Explore Services
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
