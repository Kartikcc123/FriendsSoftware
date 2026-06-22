import { motion } from 'framer-motion';
import {
  ArrowRight,
  CalendarDays,
  ChevronRight,
  Clock3,
  FileText,
  Mic,
  MonitorPlay,
  Sparkles,
  Waves,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const featureStory = {
  category: 'Lead Story',
  title: 'Digital transformation works best when strategy, systems, and execution move together.',
  summary:
    'The biggest gains rarely come from isolated tools. They come from clear thinking, aligned teams, and digital systems designed around actual business flow.',
  date: 'June 20, 2026',
  length: '8 min read',
  image:
    'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
};

const quickSignals = [
  { label: 'Articles', value: '12+', icon: FileText },
  { label: 'Podcasts', value: '08', icon: Mic },
  { label: 'Sessions', value: '06', icon: MonitorPlay },
];

const editorNotes = [
  {
    title: 'Product Thinking',
    text: 'How teams prioritize better, simplify roadmaps, and create more useful digital experiences.',
  },
  {
    title: 'Delivery Systems',
    text: 'Practical ideas on design, development, workflows, and scaling with less friction.',
  },
  {
    title: 'Growth Signals',
    text: 'Perspectives on digital visibility, decision-making, and long-term product momentum.',
  },
];

const storyStream = [
  {
    category: 'Podcast',
    title: 'Beyond the Stack: Episode 42',
    excerpt: 'Reducing the gap between business strategy and software delivery in growing teams.',
    date: 'June 15, 2026',
    meta: '42 min listen',
  },
  {
    category: 'White Paper',
    title: 'Implementing AI in Educational LMS',
    excerpt: 'Where AI genuinely improves learning platforms and where teams should be more cautious.',
    date: 'June 10, 2026',
    meta: 'Research brief',
  },
  {
    category: 'Webinar',
    title: 'Scaling SaaS Architectures',
    excerpt: 'Architectural choices that help platforms scale without creating product drag.',
    date: 'June 05, 2026',
    meta: 'Live session',
  },
  {
    category: 'Video',
    title: 'A Tour of Our Web Development Process',
    excerpt: 'A clearer look at how discovery, design, development, and launch connect in practice.',
    date: 'May 28, 2026',
    meta: 'Studio video',
  },
];

const spotlightTopics = [
  {
    title: 'Designing for clarity',
    summary: 'How strong interfaces reduce confusion and improve adoption across teams and customers.',
    accent: 'bg-[#fff3ea] text-[#d86438]',
  },
  {
    title: 'Building dependable systems',
    summary: 'Why thoughtful architecture and process discipline matter more than speed alone.',
    accent: 'bg-[#edf6ff] text-[#0a6ad2]',
  },
  {
    title: 'Growing with intention',
    summary: 'Digital growth is stronger when content, product, and operations are aligned early.',
    accent: 'bg-[#eefbf4] text-[#0f9f5f]',
  },
];

export default function Insights() {
  return (
    <div className="min-h-screen bg-[#f3f7fb]">
      <section className="relative overflow-hidden bg-[#06081E] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,107,53,0.18),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(24,119,242,0.16),transparent_28%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 md:pt-24 md:pb-20">
          <div className="grid grid-cols-1 xl:grid-cols-[1.1fr_0.9fr] gap-8 items-start">
            <div>
              <div className="inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/6 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/72">
                <Sparkles className="h-3.5 w-3.5 text-[#FDB714]" />
                Insights
              </div>
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 max-w-4xl text-3xl sm:text-4xl md:text-6xl font-bold leading-[1.05]"
              >
                A different view on digital work, product decisions, and what actually helps teams grow.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mt-6 max-w-2xl text-lg md:text-xl leading-relaxed text-white/72"
              >
                Friends Software shares observations, lessons, and working ideas across product design,
                engineering, strategy, and digital growth.
              </motion.p>

              <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl">
                {quickSignals.map((item) => (
                  <div key={item.label} className="rounded-[24px] border border-white/10 bg-white/[0.05] p-5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-[#FDB714] mb-4">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <p className="text-2xl font-bold">{item.value}</p>
                    <p className="mt-2 text-sm text-white/65">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="rounded-[32px] border border-white/10 bg-white/[0.05] p-6 md:p-7 backdrop-blur-sm"
            >
              <div className="flex items-center justify-between gap-4 mb-6">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.28em] text-white/45 font-semibold mb-2">
                    Editor's Note
                  </p>
                  <h2 className="text-2xl font-semibold">What we pay attention to</h2>
                </div>
                <Waves className="h-8 w-8 text-[#FDB714]" />
              </div>

              <div className="space-y-4">
                {editorNotes.map((note) => (
                  <div key={note.title} className="rounded-[22px] border border-white/10 bg-[#0d1231] p-5">
                    <h3 className="text-lg font-semibold">{note.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/68">{note.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-[34px] border border-[#dbe5f0] bg-white shadow-[0_22px_65px_rgba(10,25,47,0.08)]"
          >
            <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="relative min-h-[360px]">
                <img
                  src={featureStory.image}
                  alt={featureStory.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06081E]/55 via-transparent to-transparent" />
              </div>
              <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-between">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.28em] text-[#73819b] font-semibold mb-4">
                    {featureStory.category}
                  </p>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#06081E] leading-tight">
                    {featureStory.title}
                  </h2>
                  <p className="mt-5 text-[#5e6b85] text-base md:text-lg leading-relaxed">
                    {featureStory.summary}
                  </p>
                </div>

                <div className="mt-8">
                  <div className="flex flex-wrap items-center gap-5 text-sm text-[#73819b]">
                    <div className="inline-flex items-center gap-2">
                      <CalendarDays className="h-4 w-4" />
                      {featureStory.date}
                    </div>
                    <div className="inline-flex items-center gap-2">
                      <Clock3 className="h-4 w-4" />
                      {featureStory.length}
                    </div>
                  </div>

                  <Link
                    to="/contact"
                    className="mt-8 inline-flex items-center gap-2 bg-[#06081E] px-6 py-3.5 text-sm font-bold uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#11173b]"
                  >
                    Discuss This Topic
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="pb-10 md:pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 xl:grid-cols-[1.1fr_0.9fr] gap-8">
            <div className="rounded-[32px] border border-[#dbe5f0] bg-white p-6 md:p-8 shadow-[0_18px_55px_rgba(10,25,47,0.06)]">
              <div className="flex items-center justify-between gap-4 mb-8">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.28em] text-[#73819b] font-semibold mb-3">
                    Story Stream
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#06081E]">Latest formats and conversations</h2>
                </div>
                <span className="hidden md:inline-flex rounded-full bg-[#f4f8fc] px-4 py-2 text-sm font-semibold text-[#51627f]">
                  Updated regularly
                </span>
              </div>

              <div className="space-y-5">
                {storyStream.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: index * 0.06 }}
                    className="group grid grid-cols-[auto_1fr] gap-4 rounded-[24px] border border-[#e2eaf3] p-5 transition-all duration-300 hover:border-[#06081E] hover:bg-[#fbfdff]"
                  >
                    <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-[#06081E] text-white font-bold">
                      0{index + 1}
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span className="rounded-full bg-[#fff4ec] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#d86438]">
                          {item.category}
                        </span>
                        <span className="text-sm text-[#8693ab]">{item.date}</span>
                        <span className="text-sm text-[#8693ab]">{item.meta}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-[#06081E] leading-snug">{item.title}</h3>
                      <p className="mt-3 text-[#5e6b85] leading-relaxed">{item.excerpt}</p>
                      <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#06081E] transition-colors group-hover:text-[#FF6B35]">
                        Open insight
                        <ChevronRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-[32px] bg-[#06081E] p-7 text-white shadow-[0_18px_55px_rgba(10,25,47,0.12)]">
                <p className="text-[11px] uppercase tracking-[0.28em] text-white/45 font-semibold mb-3">
                  Perspective
                </p>
                <h2 className="text-3xl font-bold leading-tight">
                  We care less about noise and more about what helps teams make better decisions.
                </h2>
                <p className="mt-4 text-white/70 leading-relaxed">
                  Our insights are shaped by delivery work, not just theory, so the ideas stay useful in real projects.
                </p>
              </div>

              {spotlightTopics.map((topic, index) => (
                <motion.div
                  key={topic.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  className="rounded-[28px] border border-[#dbe5f0] bg-white p-6 shadow-[0_18px_55px_rgba(10,25,47,0.05)]"
                >
                  <span className={`inline-flex rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] ${topic.accent}`}>
                    Topic
                  </span>
                  <h3 className="mt-4 text-2xl font-bold text-[#06081E] leading-snug">{topic.title}</h3>
                  <p className="mt-3 text-[#5e6b85] leading-relaxed">{topic.summary}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-8 items-stretch">
            <div className="rounded-[32px] border border-[#dbe5f0] bg-[#fff8f4] p-8 md:p-10">
              <p className="text-[11px] uppercase tracking-[0.28em] text-[#d86438] font-semibold mb-4">
                Keep Reading
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#06081E] leading-tight">
                Looking for ideas that connect content, product, and delivery?
              </h2>
              <p className="mt-5 text-[#5e6b85] text-base md:text-lg leading-relaxed">
                The best digital decisions usually happen when strategy and execution are discussed together,
                not in separate silos.
              </p>
            </div>

            <div className="rounded-[32px] border border-[#dbe5f0] bg-white p-8 md:p-10 shadow-[0_18px_55px_rgba(10,25,47,0.05)]">
              <p className="text-[11px] uppercase tracking-[0.28em] text-[#73819b] font-semibold mb-4">
                Continue The Conversation
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#06081E] leading-tight">
                Want to turn an insight into a working plan for your business?
              </h2>
              <p className="mt-5 text-[#5e6b85] text-base md:text-lg leading-relaxed">
                We can help you move from interesting ideas to a practical next step across marketing,
                websites, applications, and software systems.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#FF6B35] px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#E85D2A]"
                >
                  Contact Our Team
                  <ArrowRight size={16} />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 border border-[#d1ddea] px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-[#06081E] transition-colors hover:border-[#06081E]"
                >
                  Explore Services
                  <ChevronRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
