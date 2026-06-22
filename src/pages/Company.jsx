import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  ChevronRight,
  Handshake,
  HeartHandshake,
  Lightbulb,
  ShieldCheck,
  Sparkles,
  Target,
  Users2,
} from 'lucide-react';

const values = [
  {
    title: 'Together',
    description: 'We work closely with clients, keeping decisions visible and delivery collaborative from the start.',
    icon: Handshake,
  },
  {
    title: 'Innovative',
    description: 'We build with a future-ready mindset, combining practical execution with modern digital thinking.',
    icon: Lightbulb,
  },
  {
    title: 'Reliable',
    description: 'We focus on dependable systems, thoughtful planning, and clear communication at every step.',
    icon: ShieldCheck,
  },
  {
    title: 'Authentic',
    description: 'We stay grounded, honest, and aligned with what actually helps the client move forward.',
    icon: HeartHandshake,
  },
];

const highlights = [
  {
    title: 'Business-first execution',
    description: 'Every solution is shaped around growth, operations, and real user needs rather than unnecessary complexity.',
    icon: Target,
  },
  {
    title: 'Multi-service capability',
    description: 'From digital marketing and websites to mobile apps and SaaS systems, we support delivery end to end.',
    icon: BriefcaseBusiness,
  },
  {
    title: 'Partnership mindset',
    description: 'We aim to be a dependable long-term technology partner, not just a short-term project vendor.',
    icon: Users2,
  },
];

const milestones = [
  'Understand the business context before suggesting the build.',
  'Design with clarity so every product feels credible and usable.',
  'Deliver modern digital systems that teams can actually operate.',
  'Support growth after launch through iteration and practical guidance.',
];

export default function Company() {
  return (
    <div className="bg-[linear-gradient(180deg,#f9fbfe_0%,#eef4fb_30%,#ffffff_100%)]">
      <section className="relative overflow-hidden border-b border-[#dbe5f0]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,107,53,0.14),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(10,106,210,0.12),transparent_28%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-3 rounded-full border border-[#ff6b35]/20 bg-white/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#6a7690] shadow-sm">
                <Sparkles className="h-3.5 w-3.5 text-[#FF6B35]" />
                About Friends Software
              </div>
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 text-3xl sm:text-4xl md:text-6xl font-bold leading-tight text-[#06081E]"
              >
                A digital team focused on practical solutions, steady collaboration, and long-term value.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mt-6 max-w-2xl text-lg md:text-xl leading-relaxed text-[#5e6b85]"
              >
                Friends Software helps businesses strengthen their digital presence, improve operations,
                and launch software that supports real growth. We combine strategy, design, engineering,
                and communication into one dependable delivery experience.
              </motion.p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#FF6B35] px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#E85D2A]"
                >
                  Start A Conversation
                  <ArrowRight size={16} />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 border border-[#cfdceb] bg-white px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-[#06081E] transition-colors hover:border-[#06081E]"
                >
                  View Services
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
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                  <Building2 className="h-6 w-6 text-[#FDB714]" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-white/60">Who We Are</p>
                  <h2 className="text-xl font-semibold">A collaborative digital partner</h2>
                </div>
              </div>

              <div className="space-y-4">
                {milestones.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="flex items-start gap-3">
                      <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#FDB714]" />
                      <p className="text-sm leading-relaxed text-white/75">{item}</p>
                    </div>
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
                Why Businesses Choose Us
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-[#06081E] leading-tight">
                We aim to make digital work feel more structured, useful, and results-oriented.
              </h2>
            </div>
            <p className="max-w-xl text-[#5e6b85] text-base md:text-lg leading-relaxed">
              Our work is shaped by business clarity, careful execution, and a commitment to solutions
              that remain valuable after launch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                className="rounded-[28px] border border-[#dbe5f0] bg-white p-7 shadow-[0_18px_50px_rgba(10,25,47,0.06)]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f6f9fc] text-[#06081E] mb-6">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-[#06081E] mb-3">{item.title}</h3>
                <p className="text-[#5e6b85] leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-[#06081E] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 md:mb-14">
            <div className="max-w-2xl">
              <p className="text-[11px] uppercase tracking-[0.28em] text-white/45 font-semibold mb-4">
                Core Values
              </p>
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                The values that shape how we think, build, and collaborate.
              </h2>
            </div>
            <p className="max-w-xl text-white/68 text-base md:text-lg leading-relaxed">
              We keep our process grounded in partnership, thoughtful execution, and solutions that
              genuinely serve the people using them.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/8 text-[#FDB714] mb-6">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-sm leading-relaxed text-white/68">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-[32px] overflow-hidden border border-[#dbe5f0] bg-white shadow-[0_24px_65px_rgba(10,25,47,0.08)]">
            <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="p-8 md:p-12">
                <p className="text-[11px] uppercase tracking-[0.28em] text-[#73819b] font-semibold mb-4">
                  Work With Us
                </p>
                <h2 className="text-3xl md:text-5xl font-bold text-[#06081E] leading-tight">
                  Looking for a team that understands both business needs and digital delivery?
                </h2>
                <p className="mt-5 max-w-2xl text-[#5e6b85] text-base md:text-lg leading-relaxed">
                  We would love to understand your goals, discuss the right solution path, and help you
                  move forward with clarity.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-[#06081E] px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#11173b]"
                  >
                    Contact Our Team
                    <ArrowRight size={16} />
                  </Link>
                  <Link
                    to="/clients"
                    className="inline-flex items-center justify-center gap-2 border border-[#d1ddea] px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-[#06081E] transition-colors hover:border-[#06081E]"
                  >
                    See Client Success
                    <ChevronRight size={16} />
                  </Link>
                </div>
              </div>

              <div className="bg-[linear-gradient(135deg,#06081E_0%,#0f1942_100%)] p-8 md:p-12 text-white flex flex-col justify-between">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.28em] text-white/45 font-semibold mb-4">
                    Working Style
                  </p>
                  <h3 className="text-2xl md:text-3xl font-bold leading-tight">
                    Best for teams that value clarity, responsiveness, and thoughtful execution.
                  </h3>
                </div>
                <div className="mt-8 space-y-4">
                  {[
                    'Transparent communication throughout delivery',
                    'Balanced thinking across design, development, and business goals',
                    'A dependable approach built for long-term digital progress',
                  ].map((point) => (
                    <div key={point} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                      <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#FDB714]" />
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
