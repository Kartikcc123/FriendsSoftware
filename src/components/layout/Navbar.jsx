import { useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, GraduationCap, Landmark, HeartPulse, ShieldCheck, Scale, Factory, ShoppingCart, Truck, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const socialLinks = {
    facebook: 'https://www.facebook.com/profile.php?id=61591406033261',
    linkedin: 'https://www.linkedin.com/company/friends-software/?viewAsMember=true',
    instagram: 'https://www.instagram.com/friendsoftwaresin/',
  };

  const [isOpen, setIsOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [expandedMobileSection, setExpandedMobileSection] = useState(null);
  const location = useLocation();
  const timeoutRef = useRef(null);

  const links = [
    { name: 'SERVICES', path: '/services' },
    { name: 'INDUSTRIES', path: '/industries', hasMegaMenu: true },
    { name: 'CLIENT SUCCESS', path: '/clients' },
    { name: 'INSIGHTS', path: '/insights', hasDropdown: true },
    { name: 'COMPANY', path: '/company' },
  ];

  const insightsDropdown = [
    [
      { name: 'Blogs', path: '/insights/blogs' },
      { name: 'Beyond the Stack Podcast', path: '/insights/podcasts' },
      { name: 'Friends Tech Forum', path: '/insights/forum' },
    ],
    [
      { name: 'Videos', path: '/insights/videos' },
      { name: 'Webinars', path: '/insights/webinars' },
      { name: 'White Papers', path: '/insights/white-papers' },
    ]
  ];

  const industriesDropdown = [
    {
      name: 'Education',
      label: 'DIGITAL LEARNING',
      description: 'LMS platforms, student portals, and smart engagement systems.',
      icon: GraduationCap,
      path: '/industries/education',
    },
    {
      name: 'Financial Services',
      label: 'TRUST AT SCALE',
      description: 'Secure workflows, reporting systems, and fintech-ready product builds.',
      icon: Landmark,
      path: '/industries/financial-services',
    },
    {
      name: 'Healthcare',
      label: 'CONNECTED CARE',
      description: 'Patient journeys, healthcare operations, and modern digital experiences.',
      icon: HeartPulse,
      path: '/industries/healthcare',
    },
    {
      name: 'Insurance & Insurtech',
      label: 'RISK INTELLIGENCE',
      description: 'Claims, policy servicing, and customer-first digital transformation.',
      icon: ShieldCheck,
      path: '/industries/insurance-insurtech',
    },
    {
      name: 'Legaltech',
      label: 'WORKFLOW PRECISION',
      description: 'Case management, compliance tooling, and document-led automation.',
      icon: Scale,
      path: '/industries/legaltech',
    },
    {
      name: 'Manufacturing',
      label: 'OPERATIONAL VISIBILITY',
      description: 'ERP integrations, production workflows, and efficiency-focused systems.',
      icon: Factory,
      path: '/industries/manufacturing',
    },
    {
      name: 'Retail',
      label: 'COMMERCE EXPERIENCE',
      description: 'Omnichannel storefronts, loyalty solutions, and retail analytics tools.',
      icon: ShoppingCart,
      path: '/industries/retail',
    },
    {
      name: 'Transportation & Logistics',
      label: 'MOVEMENT SIMPLIFIED',
      description: 'Fleet visibility, booking flows, and logistics operations software.',
      icon: Truck,
      path: '/industries/transportation-logistics',
    },
  ];

  const handleMouseEnter = (name) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setHoveredLink(name);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setHoveredLink(null);
    }, 150);
  };

  const toggleMobileSection = (name) => {
    setExpandedMobileSection((prev) => (prev === name ? null : name));
  };

  return (
    <header className="sticky top-0 z-50 w-full flex flex-col shadow-lg">
      {/* Upper Navbar */}
      <div className="bg-[#FDB714] text-[#06081E] py-1.5 hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-[13px] font-bold tracking-wide">
          <div className="flex items-center gap-6">
            <a href="tel:+919116901749" className="flex items-center gap-2 hover:opacity-70 transition-opacity">
              <Phone size={14} strokeWidth={2.5} />
              +91 91169 01749
            </a>
            <a href="mailto:info@friendssoftware.com" className="flex items-center gap-2 hover:opacity-70 transition-opacity">
              <Mail size={14} strokeWidth={2.5} />
              info@friendssoftware.com
            </a>
          </div>
          <div className="flex items-center gap-5">
            <span className="mr-2 uppercase border-r border-[#06081E]/20 pr-5">Connect With Us</span>
            <a
              href={socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
              aria-label="Facebook"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <span
              className="inline-flex opacity-30"
              aria-label="Twitter link will be added later"
              title="Twitter link will be added later"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
            </span>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
              aria-label="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
              aria-label="Instagram"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="w-full bg-[#06081E] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20 gap-4">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-2 sm:gap-3 min-w-0">
              <div className="overflow-hidden rounded-xl sm:rounded-2xl bg-white shadow-[0_10px_30px_rgba(0,0,0,0.22)] ring-1 ring-white/10 shrink-0">
                <img
                  src="/friends-software-mark.png"
                  alt="Friends Software"
                  className="h-9 w-9 object-cover sm:h-14 sm:w-14"
                />
              </div>
              <span className="font-light text-sm min-[420px]:text-base sm:text-2xl tracking-[0.08em] min-[420px]:tracking-[0.12em] sm:tracking-[0.2em] text-white font-serif uppercase truncate">
                Friends Software
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden xl:flex items-center space-x-6 relative h-full">
            {links.map((link) => (
              <div 
                key={link.name} 
                className="h-full flex items-center relative group"
                onMouseEnter={() => handleMouseEnter(link.name)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to={link.path}
                  className={`text-[13px] font-semibold tracking-wide transition-colors flex items-center gap-1 ${
                    location.pathname === link.path || hoveredLink === link.name
                      ? 'text-[#FDB714]'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>

                {/* Dropdown Menu for Insights */}
                {link.hasDropdown && (
                  <AnimatePresence>
                    {hoveredLink === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, x: "-50%" }}
                        animate={{ opacity: 1, y: 0, x: "-50%" }}
                        exit={{ opacity: 0, y: 10, x: "-50%" }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 w-[600px] bg-white shadow-2xl border-t border-gray-200"
                        onMouseEnter={() => handleMouseEnter(link.name)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <div className="flex">
                          {/* Column 1 */}
                          <div className="w-1/2 py-4">
                            {insightsDropdown[0].map((item, idx) => (
                              <Link 
                                key={idx} 
                                to={item.path}
                                className="block px-6 py-4 text-[#06081E] text-[15px] hover:bg-[#e8f0fe] border-l-4 border-transparent hover:border-[#FDB714] transition-colors"
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                          {/* Divider */}
                          <div className="w-[1px] bg-gray-200 my-4"></div>
                          {/* Column 2 */}
                          <div className="w-1/2 py-4">
                            {insightsDropdown[1].map((item, idx) => (
                              <Link 
                                key={idx} 
                                to={item.path}
                                className="block px-6 py-4 text-[#06081E] text-[15px] hover:bg-[#e8f0fe] border-l-4 border-transparent hover:border-[#FDB714] transition-colors"
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}

                {/* Mega Menu for Industries */}
                {link.hasMegaMenu && (
                  <AnimatePresence>
                    {hoveredLink === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="fixed left-0 right-0 top-[110px] xl:top-[104px] mx-auto max-w-7xl w-full bg-[#f8fbff] shadow-2xl border-t border-gray-200 p-8 rounded-b-xl z-50"
                        onMouseEnter={() => handleMouseEnter(link.name)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <div className="grid grid-cols-4 gap-6">
                          {industriesDropdown.map((item, idx) => (
                            <Link 
                              key={idx} 
                              to={item.path} 
                              className="group bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all flex flex-col h-full relative overflow-hidden"
                            >
                              <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-[#FF6B35] to-[#FDB714] transition-all duration-300 group-hover:w-full"></div>
                              <div className="flex justify-between items-start mb-4">
                                <div>
                                  <p className="text-[10px] font-bold text-gray-400 tracking-widest uppercase mb-1">{item.label}</p>
                                  <h3 className="text-lg font-extrabold text-[#06081E]">{item.name}</h3>
                                </div>
                                <div className="bg-gray-100 p-2 rounded-lg text-gray-600 group-hover:bg-[#FDB714] group-hover:text-white transition-colors shrink-0 ml-2">
                                  <item.icon size={22} strokeWidth={2} />
                                </div>
                              </div>
                              <p className="text-sm text-gray-500 mb-6 flex-grow">{item.description}</p>
                              <div className="flex items-center text-[13px] font-bold text-[#06081E] group-hover:text-[#FF6B35] transition-colors mt-auto">
                                Explore solutions <ChevronRight size={14} className="ml-1" />
                              </div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
            
            <Link
              to="/contact"
              className="ml-4 bg-[#FDB714] text-[#06081E] px-6 py-2.5 font-bold uppercase tracking-wider text-[13px] hover:bg-yellow-500 transition-colors rounded-sm"
            >
              CONTACT
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="xl:hidden flex items-center shrink-0">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="text-white focus:outline-none rounded-xl border border-white/10 bg-white/5 p-2.5"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-[#06081E] border-t border-white/10 max-h-[calc(100vh-72px)] overflow-y-auto"
          >
            <div className="px-3 pt-3 pb-5 space-y-2 sm:px-4">
              {links.map((link) => (
                <div key={link.name} className="rounded-2xl border border-white/8 bg-white/[0.03] overflow-hidden">
                  {link.hasDropdown || link.hasMegaMenu ? (
                    <>
                      <button
                        type="button"
                        onClick={() => toggleMobileSection(link.name)}
                        className={`w-full flex items-center justify-between px-4 py-4 text-left text-sm font-bold tracking-wider uppercase transition-colors ${
                          location.pathname === link.path || expandedMobileSection === link.name
                            ? 'text-[#FDB714] bg-white/5'
                            : 'text-white'
                        }`}
                      >
                        <span>{link.name}</span>
                        <ChevronRight
                          size={18}
                          className={`transition-transform duration-300 ${expandedMobileSection === link.name ? 'rotate-90' : ''}`}
                        />
                      </button>

                      <AnimatePresence initial={false}>
                        {expandedMobileSection === link.name && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="border-t border-white/8 bg-white/[0.04]"
                          >
                            <div className="px-4 py-2">
                              {link.hasDropdown &&
                                [...insightsDropdown[0], ...insightsDropdown[1]].map((item, idx) => (
                                  <Link
                                    key={idx}
                                    to={item.path}
                                    onClick={() => {
                                      setIsOpen(false);
                                      setExpandedMobileSection(null);
                                    }}
                                    className="block rounded-xl px-3 py-3 text-sm text-gray-300 transition-colors hover:bg-white/5 hover:text-white"
                                  >
                                    {item.name}
                                  </Link>
                                ))}
                              {link.hasMegaMenu &&
                                industriesDropdown.map((item, idx) => (
                                  <Link
                                    key={idx}
                                    to={item.path}
                                    onClick={() => {
                                      setIsOpen(false);
                                      setExpandedMobileSection(null);
                                    }}
                                    className="block rounded-xl px-3 py-3 text-sm text-gray-300 transition-colors hover:bg-white/5 hover:text-white"
                                  >
                                    {item.name}
                                  </Link>
                                ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-4 text-sm font-bold tracking-wider uppercase transition-colors ${
                        location.pathname === link.path
                          ? 'text-[#FDB714] bg-white/5'
                          : 'text-white hover:bg-white/5'
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block mt-4 text-center bg-[#FDB714] text-[#06081E] px-6 py-3.5 font-bold uppercase tracking-wider hover:bg-yellow-500 transition-colors rounded-xl"
              >
                CONTACT
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </nav>
    </header>
  );
}
