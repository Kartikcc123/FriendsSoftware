import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  BarChart3,
  Briefcase,
  CheckCircle2,
  ChevronRight,
  Globe,
  Layers3,
  Monitor,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Workflow,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const servicesData = [
  {
    id: 1,
    title: 'Digital Marketing',
    label: 'Demand Generation',
    icon: Globe,
    accent: 'from-[#FF6B35] to-[#FDB714]',
    description:
      'Performance-driven campaigns that help brands grow visibility, generate leads, and turn attention into measurable results.',
    outcome: 'Reach the right audience with sharper positioning, better campaign tracking, and higher quality conversions.',
    idealFor: ['Local businesses', 'Growing brands', 'Campaign launches'],
    deliverables: [
      { name: 'Facebook Marketing', desc: 'Targeted ads, retargeting, and full-funnel audience strategy.' },
      { name: 'Instagram Growth', desc: 'Creative planning, visual content direction, and engagement systems.' },
      { name: 'WhatsApp Campaigns', desc: 'Broadcast workflows, customer communication, and conversion touchpoints.' },
    ],
  },
  {
    id: 2,
    title: 'Web Development & Design',
    label: 'Digital Presence',
    icon: Monitor,
    accent: 'from-[#0a6ad2] to-[#38bdf8]',
    description:
      'Fast, scalable, and trustworthy websites built to reflect your brand and support real business goals.',
    outcome: 'Launch web experiences that look credible, load quickly, and move visitors toward action.',
    idealFor: ['Corporate websites', 'Landing pages', 'E-commerce experiences'],
    deliverables: [
      { name: 'Corporate Websites', desc: 'Professional sites for companies, institutions, and service-led brands.' },
      { name: 'E-commerce Solutions', desc: 'Online stores with streamlined product journeys and payment integration.' },
      { name: 'Landing Pages', desc: 'Conversion-focused pages tailored for ads, launches, and campaigns.' },
    ],
  },
  {
    id: 3,
    title: 'App Development & Design',
    label: 'Mobile Products',
    icon: Smartphone,
    accent: 'from-[#14b8a6] to-[#22c55e]',
    description:
      'Mobile app experiences designed for usability, reliability, and long-term product growth across devices.',
    outcome: 'Ship mobile products with intuitive interfaces, strong performance, and scalable engineering foundations.',
    idealFor: ['Customer-facing apps', 'Operational tools', 'Cross-platform product teams'],
    deliverables: [
      { name: 'iOS App Development', desc: 'High-performance iPhone applications with polished native interactions.' },
      { name: 'Android App Development', desc: 'Reliable Android experiences built for reach and device compatibility.' },
      { name: 'Cross-Platform Apps', desc: 'React Native and Flutter solutions for faster, efficient product delivery.' },
    ],
  },
  {
    id: 4,
    title: 'SaaS Projects',
    label: 'Business Systems',
    icon: Briefcase,
    accent: 'from-[#6366f1] to-[#8b5cf6]',
    description:
      'Custom software products that automate workflows, centralize data, and make day-to-day operations easier to manage.',
    outcome: 'Replace fragmented manual processes with software that supports growth, teams, and operational clarity.',
    idealFor: ['Institutions', 'Operational businesses', 'Process-heavy teams'],
    deliverables: [
      { name: 'Learning Management System (LMS)', desc: 'A modern education platform built for content delivery and engagement.' },
      { name: 'Travel Booking App', desc: 'A structured booking flow for route discovery, reservations, and management.' },
      { name: 'Gym Automation App', desc: 'Membership, attendance, billing, and schedule management in one system.' },
      { name: 'Education ERP', desc: 'Large-scale administration and data handling for schools and colleges.' },
      { name: 'Stock Handler', desc: 'Inventory, invoicing, and operational visibility for product-based businesses.' },
    ],
  },
];

const deliverySteps = [
  {
    title: 'Discover',
    description: 'We map business goals, user needs, and delivery constraints before we recommend the solution.',
    icon: Sparkles,
  },
  {
    title: 'Design',
    description: 'We turn strategy into user flows, interface direction, and a build plan your team can trust.',
    icon: Layers3,
  },
  {
    title: 'Build',
    description: 'We execute with modern tooling, iterative milestones, and close collaboration throughout delivery.',
    icon: Workflow,
  },
  {
    title: 'Optimize',
    description: 'We refine performance, stability, and outcomes after launch so the product keeps improving.',
    icon: ShieldCheck,
  },
];

const highlightStats = [
  { value: '4', label: 'Core service pillars' },
  { value: '14+', label: 'Specialized solution tracks' },
  { value: 'End-to-end', label: 'Strategy, design, build, and growth' },
];

export default function Services() {
  const [activeServiceId, setActiveServiceId] = useState(servicesData[0].id);

  return (
    <div className="bg-[linear-gradient(180deg,#f8fbff_0%,#eef4fb_32%,#ffffff_100%)]">
      <section className="relative overflow-hidden border-b border-[#dbe5f0]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,107,53,0.14),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(10,106,210,0.12),transparent_26%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-3 rounded-full border border-[#ff6b35]/20 bg-white/70 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#6a7690] shadow-sm backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-[#FF6B35]" />
                Services
              </div>
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 text-3xl sm:text-4xl md:text-6xl font-bold leading-tight text-[#06081E]"
              >
                Digital services built to help ambitious businesses grow with confidence.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mt-6 max-w-2xl text-lg md:text-xl leading-relaxed text-[#5e6b85]"
              >
                From marketing and websites to mobile apps and SaaS platforms, we build the
                systems businesses need to attract customers, simplify operations, and scale.
              </motion.p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#FF6B35] px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#E85D2A]"
                >
                  Discuss Your Project
                  <ArrowRight size={16} />
                </Link>
                <a
                  href="#service-explorer"
                  className="inline-flex items-center justify-center gap-2 border border-[#cfdceb] bg-white px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-[#06081E] transition-colors hover:border-[#06081E]"
                >
                  Explore Services
                  <ChevronRight size={16} />
                </a>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="rounded-[32px] border border-white/60 bg-[#06081E] p-6 md:p-8 text-white shadow-[0_28px_80px_rgba(6,8,30,0.2)]"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                  <BarChart3 className="h-6 w-6 text-[#FDB714]" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-white/60">What We Deliver</p>
                  <h2 className="text-xl font-semibold">Execution with business focus</h2>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {highlightStats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                    <p className="mt-2 text-sm leading-relaxed text-white/68">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-[#FDB714]/20 bg-[#0e1332] p-5">
                <p className="text-[11px] uppercase tracking-[0.26em] text-[#FDB714]">Approach</p>
                <p className="mt-3 text-sm leading-relaxed text-white/75">
                  We combine strategy, design thinking, engineering quality, and practical
                  business understanding so every service feels useful, scalable, and worth the investment.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="service-explorer" className="py-18 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 md:mb-14">
            <div className="max-w-2xl">
              <p className="text-[11px] uppercase tracking-[0.28em] text-[#73819b] font-semibold mb-4">
                Service Explorer
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-[#06081E] leading-tight">
                Choose the service area that fits your next stage of growth.
              </h2>
            </div>
            <p className="max-w-xl text-[#5e6b85] text-base md:text-lg leading-relaxed">
              Every service line is structured to solve a clear business problem and can be adapted
              for different team sizes, industries, and delivery goals.
            </p>
          </div>

          <div className="space-y-4">
            {servicesData.map((service, index) => {
              const isActive = service.id === activeServiceId;

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.06 }}
                  className={`overflow-hidden rounded-[28px] border transition-all duration-300 ${
                    isActive
                      ? 'border-[#06081E] bg-[#06081E] text-white shadow-[0_24px_60px_rgba(6,8,30,0.16)]'
                      : 'border-[#d9e3ef] bg-white text-[#06081E] hover:border-[#aebfd3] hover:shadow-[0_16px_45px_rgba(10,25,47,0.08)]'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setActiveServiceId(isActive ? null : service.id)}
                    className="w-full p-6 text-left md:p-7"
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${service.accent} ${
                          isActive ? 'shadow-[0_12px_28px_rgba(0,0,0,0.18)]' : ''
                        }`}
                      >
                        <service.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className={`text-[11px] uppercase tracking-[0.26em] font-semibold ${isActive ? 'text-white/55' : 'text-[#73819b]'}`}>
                              {service.label}
                            </p>
                            <h3 className="mt-3 text-2xl font-bold leading-tight">{service.title}</h3>
                          </div>
                          <ChevronRight className={`mt-1 h-5 w-5 shrink-0 transition-transform duration-300 ${isActive ? 'rotate-90 text-[#FDB714]' : 'text-[#7d8aa5]'}`} />
                        </div>
                        <p className={`mt-4 text-sm leading-relaxed ${isActive ? 'text-white/72' : 'text-[#5e6b85]'}`}>
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: 'easeInOut' }}
                        className="border-t border-white/10"
                      >
                        <div className="p-6 pt-0 md:p-7 md:pt-0">
                          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-[1.2fr_0.8fr]">
                            <div className="rounded-[26px] border border-white/10 bg-white/5 p-6">
                              <h4 className="mb-4 text-lg font-semibold text-white">Solutions & deliverables</h4>
                              <div className="space-y-3">
                                {service.deliverables.map((item) => (
                                  <div key={item.name} className="rounded-2xl border border-white/10 bg-white/95 p-4 shadow-sm">
                                    <div className="flex items-start gap-3">
                                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#16a34a]" />
                                      <div>
                                        <h5 className="font-semibold text-[#06081E]">{item.name}</h5>
                                        <p className="mt-1 text-sm leading-relaxed text-[#5e6b85]">{item.desc}</p>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div className="space-y-6">
                              <div className="rounded-[26px] border border-white/10 bg-white/5 p-6">
                                <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/50">
                                  Outcome
                                </p>
                                <p className="text-sm leading-relaxed text-white/75">{service.outcome}</p>
                              </div>

                              <div className="rounded-[26px] border border-white/10 bg-white/5 p-6">
                                <h4 className="mb-4 text-lg font-semibold text-white">Ideal for</h4>
                                <div className="flex flex-wrap gap-3">
                                  {service.idealFor.map((item) => (
                                    <span
                                      key={item}
                                      className="rounded-full border border-white/12 bg-white/10 px-4 py-2 text-sm font-medium text-white/85"
                                    >
                                      {item}
                                    </span>
                                  ))}
                                </div>
                              </div>

                              <div className="rounded-[26px] bg-[#09103a] p-6 text-white">
                                <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/50">
                                  Why this matters
                                </p>
                                <p className="text-sm leading-relaxed text-white/75">
                                  Strong delivery is not just about features. It is about creating a system
                                  your team can run, your customers can trust, and your business can scale with.
                                </p>
                                <Link
                                  to="/contact"
                                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#FDB714] transition-colors hover:text-white"
                                >
                                  Talk to our team
                                  <ArrowRight size={16} />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-18 md:py-24 bg-[#06081E] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 md:mb-14">
            <div className="max-w-2xl">
              <p className="text-[11px] uppercase tracking-[0.28em] text-white/45 font-semibold mb-4">
                Delivery Process
              </p>
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                A practical process designed to reduce risk and create momentum.
              </h2>
            </div>
            <p className="max-w-xl text-white/68 text-base md:text-lg leading-relaxed">
              We keep delivery collaborative and visible so your team always knows what is being built,
              why it matters, and what comes next.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
            {deliverySteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/8 text-[#FDB714] mb-6">
                  <step.icon className="h-6 w-6" />
                </div>
                <div className="text-[11px] uppercase tracking-[0.24em] text-white/40 font-semibold mb-3">
                  0{index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-sm leading-relaxed text-white/68">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-18 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-[32px] overflow-hidden border border-[#dbe5f0] bg-white shadow-[0_24px_65px_rgba(10,25,47,0.08)]">
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="p-8 md:p-12">
                <p className="text-[11px] uppercase tracking-[0.28em] text-[#73819b] font-semibold mb-4">
                  Next Step
                </p>
                <h2 className="text-3xl md:text-5xl font-bold text-[#06081E] leading-tight">
                  Need a service mix tailored to your business?
                </h2>
                <p className="mt-5 max-w-2xl text-[#5e6b85] text-base md:text-lg leading-relaxed">
                  We can help you define the right combination of strategy, design, development,
                  and growth support based on your goals, timeline, and team capacity.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-[#06081E] px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#11173b]"
                  >
                    Book A Consultation
                    <ArrowRight size={16} />
                  </Link>
                  <Link
                    to="/clients"
                    className="inline-flex items-center justify-center gap-2 border border-[#d1ddea] px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-[#06081E] transition-colors hover:border-[#06081E]"
                  >
                    View Client Work
                    <ChevronRight size={16} />
                  </Link>
                </div>
              </div>

              <div className="bg-[linear-gradient(135deg,#06081E_0%,#0f1942_100%)] p-8 md:p-12 text-white flex flex-col justify-between">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.28em] text-white/45 font-semibold mb-4">
                    Engagement Fit
                  </p>
                  <h3 className="text-2xl md:text-3xl font-bold leading-tight">
                    Best for teams that want thoughtful delivery, not just quick output.
                  </h3>
                </div>
                <div className="mt-8 space-y-4">
                  {[
                    'Clear business-first recommendations',
                    'Professional execution across design and development',
                    'Long-term support for evolving digital products',
                  ].map((point) => (
                    <div key={point} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#FDB714]" />
                      <p className="text-sm leading-relaxed text-white/78">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
