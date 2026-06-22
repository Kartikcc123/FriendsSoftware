import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight, Sparkles, Clock3 } from 'lucide-react';

export default function Footer() {
  const socialLinks = {
    facebook: 'https://www.facebook.com/profile.php?id=61591406033261',
    linkedin: 'https://www.linkedin.com/company/friends-software/?viewAsMember=true',
    instagram: 'https://www.instagram.com/friendsoftwaresin/',
  };

  const serviceLinks = [
    'Digital Marketing',
    'Web Development',
    'App Development',
    'Custom SaaS',
  ];

  const companyLinks = [
    { label: 'Home', to: '/' },
    { label: 'Services', to: '/services' },
    { label: 'Clients', to: '/clients' },
    { label: 'Insights', to: '/insights' },
    { label: 'Careers', to: '/careers' },
    { label: 'Contact', to: '/contact' },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#06081E] text-brand-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,107,53,0.22),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(253,183,20,0.14),transparent_28%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-20 pb-8">
        <div className="mb-12 rounded-[28px] border border-white/10 bg-white/[0.04] px-6 py-8 backdrop-blur-sm md:px-10 md:py-9 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#FF6B35]/30 bg-[#FF6B35]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#FFD7C9] mb-4">
              <Sparkles className="h-3.5 w-3.5" />
              Let's Build Something Strong
            </div>
            <h2 className="text-2xl md:text-4xl font-bold leading-tight">
              Ready to turn your next product idea into a reliable digital experience?
            </h2>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 self-start bg-[#FF6B35] px-6 py-3.5 text-sm font-bold uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#E85D2A] lg:self-center"
          >
            Start A Project
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12 xl:grid-cols-[1.35fr_0.8fr_0.8fr_1fr]">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <div className="overflow-hidden rounded-[24px] bg-white shadow-[0_18px_40px_rgba(0,0,0,0.22)]">
                <img
                  src="/friends-software-mark.png"
                  alt="Friends Software"
                  className="h-20 w-20 object-cover sm:h-24 sm:w-24"
                />
              </div>
              <div>
                <span className="block text-2xl font-bold tracking-tight text-white">Friends Software</span>
                <span className="text-sm uppercase tracking-[0.24em] text-brand-gray/70">
                  Digital Product Partner
                </span>
              </div>
            </Link>

            <p className="max-w-md text-brand-gray/80 leading-relaxed">
              We help ambitious businesses launch dependable software, modern web platforms,
              and performance-driven digital systems that support real growth.
            </p>

            <div className="grid max-w-xl grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="mb-2 text-[11px] uppercase tracking-[0.24em] text-brand-gray/60">Focus</p>
                <p className="font-semibold text-white">Web, mobile, SaaS, and automation solutions</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="mb-2 text-[11px] uppercase tracking-[0.24em] text-brand-gray/60">Support</p>
                <div className="flex items-start gap-3">
                  <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-brand-yellow" />
                  <p className="font-semibold text-white">
                    Responsive collaboration from planning to launch
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-semibold text-brand-yellow">Services</h3>
            <ul className="space-y-3 text-brand-gray/80">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="group inline-flex items-center gap-2 transition-colors hover:text-brand-yellow"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#FF6B35] transition-transform group-hover:scale-125" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-semibold text-brand-yellow">Company</h3>
            <ul className="space-y-3 text-brand-gray/80">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="group inline-flex items-center gap-2 transition-colors hover:text-brand-yellow"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-white/30 transition-colors group-hover:bg-brand-yellow" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-semibold text-brand-yellow">Contact</h3>
            <ul className="space-y-4 text-brand-gray/80">
              <li className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-brand-yellow" />
                  <div>
                    <p className="mb-1 text-[11px] uppercase tracking-[0.22em] text-brand-gray/60">Location</p>
                    <span>Bhilwara, Rajasthan, India</span>
                  </div>
                </div>
              </li>
              <li className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 shrink-0 text-brand-yellow" />
                  <div>
                    <p className="mb-1 text-[11px] uppercase tracking-[0.22em] text-brand-gray/60">Phone</p>
                    <a href="tel:+919116901749" className="transition-colors hover:text-brand-yellow">
                      +91 9116901749
                    </a>
                  </div>
                </div>
              </li>
              <li className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 shrink-0 text-brand-yellow" />
                  <div>
                    <p className="mb-1 text-[11px] uppercase tracking-[0.22em] text-brand-gray/60">Email</p>
                    <a
                      href="mailto:contact@friendssoftware.com"
                      className="break-all transition-colors hover:text-brand-yellow"
                    >
                      contact@friendssoftware.com
                    </a>
                  </div>
                </div>
              </li>
            </ul>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/10 px-4 py-2 text-sm text-brand-gray/80 transition-colors hover:border-brand-yellow/40 hover:text-brand-yellow"
              >
                Facebook
              </a>
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/10 px-4 py-2 text-sm text-brand-gray/80 transition-colors hover:border-brand-yellow/40 hover:text-brand-yellow"
              >
                Instagram
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/10 px-4 py-2 text-sm text-brand-gray/80 transition-colors hover:border-brand-yellow/40 hover:text-brand-yellow"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-brand-white/10 pt-8 text-sm text-brand-gray/60 md:flex-row md:items-center">
          <p>&copy; {new Date().getFullYear()} Friends Software. All rights reserved.</p>
          <p>Designed to support long-term products, partnerships, and measurable business growth.</p>
        </div>
      </div>
    </footer>
  );
}
