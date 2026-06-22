import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ChevronRight,
  Factory,
  GraduationCap,
  HeartPulse,
  Landmark,
  Scale,
  ShieldCheck,
  ShoppingCart,
  Truck,
} from 'lucide-react';

const industries = [
  {
    title: 'Education',
    label: 'Digital Learning',
    description: 'LMS platforms, student portals, course businesses, and learning-focused SaaS systems.',
    path: '/industries/education',
    icon: GraduationCap,
    accent: 'from-[#FF6B35] to-[#FDB714]',
  },
  {
    title: 'Financial Services',
    label: 'Trust At Scale',
    description: 'Secure workflows, reporting systems, fintech-ready tooling, and customer-facing financial products.',
    path: '/industries/financial-services',
    icon: Landmark,
    accent: 'from-[#0a6ad2] to-[#38bdf8]',
  },
  {
    title: 'Healthcare',
    label: 'Connected Care',
    description: 'Patient journeys, hospital websites, appointment systems, and digital healthcare support tools.',
    path: '/industries/healthcare',
    icon: HeartPulse,
    accent: 'from-[#14b8a6] to-[#22c55e]',
  },
  {
    title: 'Insurance & Insurtech',
    label: 'Risk Intelligence',
    description: 'Claims, policy servicing, digital operations, and customer-first insurance experiences.',
    path: '/industries/insurance-insurtech',
    icon: ShieldCheck,
    accent: 'from-[#6366f1] to-[#8b5cf6]',
  },
  {
    title: 'Legaltech',
    label: 'Workflow Precision',
    description: 'Case management, compliance tooling, legal operations, and document-driven automation.',
    path: '/industries/legaltech',
    icon: Scale,
    accent: 'from-[#ec4899] to-[#f97316]',
  },
  {
    title: 'Manufacturing',
    label: 'Operational Visibility',
    description: 'ERP integrations, production workflows, inventory systems, and process-driven operations.',
    path: '/industries/manufacturing',
    icon: Factory,
    accent: 'from-[#0f9f5f] to-[#84cc16]',
  },
  {
    title: 'Retail',
    label: 'Commerce Experience',
    description: 'Omnichannel storefronts, customer journeys, loyalty systems, and retail analytics tooling.',
    path: '/industries/retail',
    icon: ShoppingCart,
    accent: 'from-[#f59e0b] to-[#f97316]',
  },
  {
    title: 'Transportation & Logistics',
    label: 'Movement Simplified',
    description: 'Fleet visibility, booking flows, tracking systems, and logistics operations software.',
    path: '/industries/transportation-logistics',
    icon: Truck,
    accent: 'from-[#06b6d4] to-[#3b82f6]',
  },
];

export default function Industries() {
  return (
    <div className="bg-[linear-gradient(180deg,#f8fbff_0%,#eef4fb_30%,#ffffff_100%)] min-h-screen">
      <section className="relative overflow-hidden border-b border-[#dbe5f0]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,107,53,0.14),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(10,106,210,0.12),transparent_28%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-[1.08fr_0.92fr] gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-3 rounded-full border border-[#ff6b35]/20 bg-white/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#6a7690] shadow-sm">
                <span className="h-2 w-2 rounded-full bg-[#FF6B35]" />
                Industries
              </div>
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 text-3xl sm:text-4xl md:text-6xl font-bold leading-tight text-[#06081E]"
              >
                Industry-focused digital solutions shaped around real operational needs.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mt-6 max-w-2xl text-lg md:text-xl leading-relaxed text-[#5e6b85]"
              >
                We help different industries build the right mix of websites, applications, automation,
                SaaS products, and operational systems with a structure that fits how their business actually runs.
              </motion.p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#FF6B35] px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#E85D2A]"
                >
                  Discuss Your Industry
                  <ArrowRight size={16} />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 border border-[#cfdceb] bg-white px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-[#06081E] transition-colors hover:border-[#06081E]"
                >
                  Explore Services
                  <ChevronRight size={16} />
                </Link>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="rounded-[32px] border border-white/60 bg-[#06081E] p-6 md:p-8 text-white shadow-[0_28px_80px_rgba(6,8,30,0.2)]"
            >
              <p className="text-[11px] uppercase tracking-[0.28em] text-white/45 font-semibold mb-4">
                What this page helps with
              </p>
              <div className="space-y-4">
                {[
                  'Understand which industries we actively design and build for',
                  'See where our digital products connect with real business workflows',
                  'Choose a domain-specific page before discussing your project',
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                    <p className="text-white/75 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 md:mb-14">
            <div className="max-w-2xl">
              <p className="text-[11px] uppercase tracking-[0.28em] text-[#73819b] font-semibold mb-4">
                Industry Overview
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-[#06081E] leading-tight">
                Explore the sectors where we build tailored digital products.
              </h2>
            </div>
            <p className="max-w-xl text-[#5e6b85] text-base md:text-lg leading-relaxed">
              Each category page goes deeper into the kinds of solutions, workflows, and platform ideas
              we can support for that industry.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
              >
                <Link
                  to={industry.path}
                  className="group relative flex h-full min-h-[280px] flex-col overflow-hidden rounded-[28px] border border-[#dbe5f0] bg-white p-7 shadow-[0_18px_55px_rgba(10,25,47,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(10,25,47,0.1)]"
                >
                  <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${industry.accent}`} />
                  <div className="mb-8 flex items-start justify-between gap-4">
                    <div>
                      <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#73819b]">
                        {industry.label}
                      </p>
                      <h3 className="text-2xl font-bold leading-snug text-[#06081E]">{industry.title}</h3>
                    </div>
                    <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${industry.accent} text-white shadow-[0_12px_28px_rgba(10,25,47,0.12)]`}>
                      <industry.icon className="h-6 w-6" />
                    </div>
                  </div>

                  <p className="mt-auto text-[#5e6b85] leading-relaxed">{industry.description}</p>

                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#06081E] transition-colors group-hover:text-[#FF6B35]">
                    View industry page
                    <ChevronRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
