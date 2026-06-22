import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  ChevronRight,
  Handshake,
  Lightbulb,
  Rocket,
  Users2,
} from 'lucide-react';

const culturePoints = [
  {
    title: 'Real ownership',
    description: 'We value people who take responsibility for outcomes, not just assigned tasks.',
    icon: Rocket,
  },
  {
    title: 'Collaborative delivery',
    description: 'Our best work comes from clear communication, shared context, and practical teamwork.',
    icon: Handshake,
  },
  {
    title: 'Curiosity and growth',
    description: 'We encourage learning, better thinking, and continuous improvement across design, development, and strategy.',
    icon: Lightbulb,
  },
];

const hiringTracks = [
  'Frontend and UI-focused development',
  'Backend and scalable application development',
  'Full-stack SaaS and business system delivery',
  'Digital marketing and growth support roles',
];

export default function Careers() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#f8fbff_0%,#eef4fb_30%,#ffffff_100%)]">
      <section className="relative overflow-hidden border-b border-[#dbe5f0]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,107,53,0.14),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(10,106,210,0.12),transparent_28%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-3 rounded-full border border-[#ff6b35]/20 bg-white/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#6a7690] shadow-sm">
                <BriefcaseBusiness className="h-3.5 w-3.5 text-[#FF6B35]" />
                Careers
              </div>
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 text-3xl sm:text-4xl md:text-6xl font-bold leading-tight text-[#06081E]"
              >
                Build useful digital products with a team that values clarity, ownership, and progress.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mt-6 max-w-2xl text-lg md:text-xl leading-relaxed text-[#5e6b85]"
              >
                We are growing carefully and looking for people who want to work on meaningful digital
                solutions across software, design, product thinking, and delivery.
              </motion.p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#FF6B35] px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#E85D2A]"
                >
                  Apply or Inquire
                  <ArrowRight size={16} />
                </Link>
                <Link
                  to="/company"
                  className="inline-flex items-center justify-center gap-2 border border-[#cfdceb] bg-white px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-[#06081E] transition-colors hover:border-[#06081E]"
                >
                  About Our Team
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
                  <Users2 className="h-6 w-6 text-[#FDB714]" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-white/60">What We Value</p>
                  <h2 className="text-xl font-semibold">A healthy working mindset</h2>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  'People who care about product quality and practical business value',
                  'Team members who communicate clearly and help others move faster',
                  'Builders who are thoughtful, responsible, and open to learning',
                ].map((item) => (
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
                Culture
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-[#06081E] leading-tight">
                A workplace built around dependable collaboration and steady growth.
              </h2>
            </div>
            <p className="max-w-xl text-[#5e6b85] text-base md:text-lg leading-relaxed">
              We care about how people work together, not just what gets shipped. Good work usually
              comes from clear process, trust, and strong communication.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {culturePoints.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                className="rounded-[28px] border border-[#dbe5f0] bg-white p-7 shadow-[0_18px_50px_rgba(10,25,47,0.06)]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f6f9fc] text-[#06081E] mb-6">
                  <point.icon className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-[#06081E] mb-3">{point.title}</h3>
                <p className="text-[#5e6b85] leading-relaxed">{point.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-[32px] border border-[#dbe5f0] bg-white shadow-[0_24px_65px_rgba(10,25,47,0.08)]">
            <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="p-8 md:p-12">
                <p className="text-[11px] uppercase tracking-[0.28em] text-[#73819b] font-semibold mb-4">
                  Opportunities
                </p>
                <h2 className="text-3xl md:text-5xl font-bold text-[#06081E] leading-tight">
                  We are especially interested in people who can contribute across these areas.
                </h2>
                <div className="mt-8 space-y-4">
                  {hiringTracks.map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-2xl border border-[#e1ebf5] bg-[#f8fbfe] p-4">
                      <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#16a34a]" />
                      <p className="text-[#4f5f7b] leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[linear-gradient(135deg,#06081E_0%,#0f1942_100%)] p-8 md:p-12 text-white flex flex-col justify-between">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.28em] text-white/45 font-semibold mb-4">
                    Current Status
                  </p>
                  <h3 className="text-2xl md:text-3xl font-bold leading-tight">
                    If there is a strong fit, we are happy to start the conversation.
                  </h3>
                  <p className="mt-4 text-white/72 leading-relaxed">
                    Even if you do not see a formal listing yet, you can still reach out with your profile,
                    area of expertise, and the kind of role you are looking for.
                  </p>
                </div>

                <Link
                  to="/contact"
                  className="mt-8 inline-flex items-center justify-center gap-2 bg-[#FF6B35] px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#E85D2A]"
                >
                  Contact for Careers
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
