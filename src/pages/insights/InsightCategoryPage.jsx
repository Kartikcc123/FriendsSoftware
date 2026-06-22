import { motion } from 'framer-motion';
import { ArrowRight, CalendarDays, ChevronRight, Clock3, Sparkles } from 'lucide-react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { insightCategories } from './insightCategoryData';

export default function InsightCategoryPage() {
  const { slug } = useParams();
  const page = insightCategories[slug];

  if (!page) {
    return <Navigate to="/insights" replace />;
  }

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#f7fbff_0%,#edf4fb_28%,#ffffff_100%)]">
      <section className="relative overflow-hidden border-b border-[#dbe5f0]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,107,53,0.14),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(10,106,210,0.12),transparent_28%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 md:pt-24 md:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1.02fr_0.98fr] gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-3 rounded-full border border-[#ff6b35]/20 bg-white/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#6a7690] shadow-sm">
                <Sparkles className="h-3.5 w-3.5 text-[#FF6B35]" />
                {page.eyebrow}
              </div>
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 text-3xl sm:text-4xl md:text-6xl font-bold leading-tight text-[#06081E]"
              >
                {page.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mt-6 max-w-2xl text-lg md:text-xl leading-relaxed text-[#5e6b85]"
              >
                {page.description}
              </motion.p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#FF6B35] px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#E85D2A]"
                >
                  Contact Our Team
                  <ArrowRight size={16} />
                </Link>
                <Link
                  to="/insights"
                  className="inline-flex items-center justify-center gap-2 border border-[#cfdceb] bg-white px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-[#06081E] transition-colors hover:border-[#06081E]"
                >
                  Back to Insights
                  <ChevronRight size={16} />
                </Link>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className={`rounded-[32px] border border-white/60 bg-gradient-to-br ${page.accent} p-6 md:p-8 text-white shadow-[0_28px_80px_rgba(6,8,30,0.18)]`}
            >
              <p className="text-[11px] uppercase tracking-[0.28em] text-white/70 font-semibold mb-4">
                Featured
              </p>
              <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                {page.featured.title}
              </h2>
              <p className="mt-4 text-white/88 leading-relaxed">
                {page.featured.summary}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-white/80">
                <div className="inline-flex items-center gap-2">
                  <CalendarDays className="h-4 w-4" />
                  {page.featured.date}
                </div>
                <div className="inline-flex items-center gap-2">
                  <Clock3 className="h-4 w-4" />
                  {page.featured.meta}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-18 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 md:mb-14">
            <div className="max-w-2xl">
              <p className="text-[11px] uppercase tracking-[0.28em] text-[#73819b] font-semibold mb-4">
                Recent Content
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-[#06081E] leading-tight">
                Explore more from this category.
              </h2>
            </div>
            <p className="max-w-xl text-[#5e6b85] text-base md:text-lg leading-relaxed">
              These entries give visitors a clearer idea of the kind of topics, conversations, and
              materials available inside this section.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {page.articles.map((article, index) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                className="rounded-[28px] border border-[#dbe5f0] bg-white p-7 shadow-[0_18px_55px_rgba(10,25,47,0.05)]"
              >
                <div className="flex items-center justify-between gap-3 mb-5">
                  <span className="rounded-full bg-[#fff4ec] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#d86438]">
                    {page.title}
                  </span>
                  <span className="text-sm text-[#8693ab]">{article.date}</span>
                </div>
                <h3 className="text-2xl font-bold text-[#06081E] leading-snug">{article.title}</h3>
                <p className="mt-4 text-[#5e6b85] leading-relaxed">{article.summary}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#06081E]">
                  Explore content
                  <ChevronRight size={16} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
