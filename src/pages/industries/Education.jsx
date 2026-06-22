import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BookOpenCheck,
  ChartColumn,
  CheckCircle2,
  CirclePlay,
  CreditCard,
  GraduationCap,
  LayoutDashboard,
  MessageSquareMore,
  NotebookTabs,
  ReceiptText,
  ShieldCheck,
  Smartphone,
  Trophy,
  Users,
} from 'lucide-react';

const platformModules = [
  {
    title: 'Live + recorded learning',
    description: 'Deliver live classes, structured video libraries, chapter-based access, and revision-friendly lesson flows.',
    icon: CirclePlay,
  },
  {
    title: 'Student app experience',
    description: 'A mobile-first student journey with course browsing, enrollment, progress tracking, and engagement features.',
    icon: Smartphone,
  },
  {
    title: 'Admin and faculty dashboard',
    description: 'Manage batches, content, educators, students, analytics, and support from one centralized control panel.',
    icon: LayoutDashboard,
  },
  {
    title: 'Payments and subscriptions',
    description: 'Run paid courses, subscription plans, access control, and scalable monetization for coaching businesses.',
    icon: CreditCard,
  },
];

const businessOutcomes = [
  'PW or Unacademy style learning platform structure',
  'SaaS-ready architecture for long-term product growth',
  'Course, batch, test, and student management in one system',
  'Designed for coaching institutes, academies, and edtech founders',
];

const featureStack = [
  {
    title: 'Course and batch management',
    text: 'Create subjects, modules, lessons, batches, and faculty mapping with flexible control over how students access content.',
    icon: BookOpenCheck,
  },
  {
    title: 'Student engagement systems',
    text: 'Build discussion, notifications, doubt support, attendance, and progress-based learning flows that improve retention.',
    icon: MessageSquareMore,
  },
  {
    title: 'Analytics and reporting',
    text: 'Track enrollments, learning activity, course completion, revenue performance, and platform usage with actionable insights.',
    icon: ChartColumn,
  },
  {
    title: 'Secure scalable foundation',
    text: 'Use a modern stack with role-based access, content protection, performance optimization, and scalable SaaS readiness.',
    icon: ShieldCheck,
  },
];

const roleCapabilities = [
  {
    role: 'Students',
    points: [
      'Browse courses, batches, and paid learning programs',
      'Attend live classes and watch recorded sessions anytime',
      'Track progress, assignments, and test performance from one dashboard',
    ],
    icon: Users,
  },
  {
    role: 'Faculty',
    points: [
      'Upload classes, notes, assignments, and practice material',
      'Manage batches, communicate with students, and review performance',
      'Run a structured digital classroom without fragmented tools',
    ],
    icon: GraduationCap,
  },
  {
    role: 'Admins',
    points: [
      'Control admissions, subscriptions, content access, and reporting',
      'Manage revenue, offers, support, and platform operations centrally',
      'Scale the product with better structure across teams and workflows',
    ],
    icon: LayoutDashboard,
  },
];

const useCases = [
  {
    title: 'Competitive exam coaching',
    description: 'For institutes preparing students for JEE, NEET, UPSC, banking, SSC, and other high-scale exam programs.',
    icon: Trophy,
  },
  {
    title: 'School and college learning support',
    description: 'For academic organizations that want course delivery, revision content, and student engagement beyond the classroom.',
    icon: NotebookTabs,
  },
  {
    title: 'Paid digital course businesses',
    description: 'For educators and training brands monetizing premium lessons, subscriptions, and structured learning journeys.',
    icon: ReceiptText,
  },
];

const deliveryScope = [
  'Student-facing web or app experience',
  'Admin panel and faculty management dashboard',
  'Course uploads, lesson structure, and content flow',
  'Live class integration and recorded content access',
  'Payment gateway, subscriptions, and access management',
  'Testing, analytics, notifications, and support workflow',
];

export default function Education() {
  return (
    <div className="bg-[linear-gradient(180deg,#f8fbff_0%,#eef5fb_30%,#ffffff_100%)]">
      <section className="relative overflow-hidden border-b border-[#dbe5f0]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,107,53,0.14),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(10,106,210,0.12),transparent_28%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-[1.02fr_0.98fr] gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-3 rounded-full border border-[#ff6b35]/20 bg-white/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#6a7690] shadow-sm">
                <GraduationCap className="h-3.5 w-3.5 text-[#FF6B35]" />
                Education Industry
              </div>
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 text-3xl sm:text-4xl md:text-6xl font-bold leading-tight text-[#06081E]"
              >
                Build your LMS as a real SaaS product, not just a simple coaching website.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mt-6 max-w-2xl text-lg md:text-xl leading-relaxed text-[#5e6b85]"
              >
                We develop education platforms similar in structure to PW and Unacademy style apps,
                with course delivery, student management, subscriptions, analytics, and a scalable admin system.
              </motion.p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl">
                {businessOutcomes.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-[20px] border border-[#dbe5f0] bg-white/90 px-4 py-4 shadow-sm">
                    <div className="mt-1.5 h-2.5 w-2.5 rounded-full bg-[#FF6B35] shrink-0" />
                    <p className="text-[#40516d] leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#FF6B35] px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#E85D2A]"
                >
                  Book a Service
                  <ArrowRight size={16} />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 border border-[#cfdceb] bg-white px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-[#06081E] transition-colors hover:border-[#06081E]"
                >
                  Explore Services
                </Link>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="rounded-[32px] border border-white/60 bg-[#06081E] p-6 md:p-8 text-white shadow-[0_28px_80px_rgba(6,8,30,0.2)]"
            >
              <div className="overflow-hidden rounded-[24px] border border-white/10">
                <img
                  src="/coaching_app.png"
                  alt="Education LMS SaaS platform"
                  className="w-full h-[260px] object-cover"
                />
              </div>

              <div className="mt-6">
                <p className="text-[11px] uppercase tracking-[0.28em] text-white/45 font-semibold mb-3">
                  Product Positioning
                </p>
                <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                  A coaching and edtech platform designed like a modern learning product.
                </h2>
                <p className="mt-4 text-white/72 leading-relaxed">
                  This is built for institutes and education businesses that want a full digital platform
                  where students can learn, pay, interact, and grow inside one branded system.
                </p>
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
                Core Platform Modules
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-[#06081E] leading-tight">
                The LMS SaaS modules needed for a serious education product.
              </h2>
            </div>
            <p className="max-w-xl text-[#5e6b85] text-base md:text-lg leading-relaxed">
              We structure the platform so it supports teaching, monetization, operations, and future growth
              without feeling like a limited brochure website.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
            {platformModules.map((module, index) => (
              <motion.div
                key={module.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                className="rounded-[28px] border border-[#dbe5f0] bg-white p-7 shadow-[0_18px_50px_rgba(10,25,47,0.06)]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f6f9fc] text-[#06081E] mb-6">
                  <module.icon className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-[#06081E] leading-snug">{module.title}</h3>
                <p className="mt-4 text-[#5e6b85] leading-relaxed">{module.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-[#06081E] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[0.92fr_1.08fr] gap-8 items-start">
            <div>
              <p className="text-[11px] uppercase tracking-[0.28em] text-white/45 font-semibold mb-4">
                Feature Stack
              </p>
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                Everything needed to operate and grow an online learning business.
              </h2>
              <p className="mt-6 text-white/70 text-base md:text-lg leading-relaxed">
                The platform can be tailored for coaching institutes, test prep businesses,
                academic organizations, and education startups building their own learning ecosystem.
              </p>

              <Link
                to="/contact"
                className="mt-8 inline-flex items-center justify-center gap-2 bg-[#FF6B35] px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#E85D2A]"
              >
                Book a Service
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {featureStack.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.06 }}
                  className="rounded-[28px] border border-white/10 bg-white/[0.05] p-6"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/8 text-[#FDB714] mb-5">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-white/68 leading-relaxed">{feature.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 md:mb-14">
            <div className="max-w-2xl">
              <p className="text-[11px] uppercase tracking-[0.28em] text-[#73819b] font-semibold mb-4">
                User Experience Layers
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-[#06081E] leading-tight">
                A complete LMS product should serve students, faculty, and admins differently.
              </h2>
            </div>
            <p className="max-w-xl text-[#5e6b85] text-base md:text-lg leading-relaxed">
              We design the platform around the actual roles inside an education business so each user
              gets the tools and workflows they need without confusion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {roleCapabilities.map((item, index) => (
              <motion.div
                key={item.role}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                className="rounded-[28px] border border-[#dbe5f0] bg-white p-7 shadow-[0_18px_50px_rgba(10,25,47,0.06)]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f6f9fc] text-[#06081E] mb-6">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-[#06081E] mb-5">{item.role}</h3>
                <div className="space-y-4">
                  {item.points.map((point) => (
                    <div key={point} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#16a34a]" />
                      <p className="text-[#5e6b85] leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-[#f7fafc] border-y border-[#e4edf6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-8 items-start">
            <div>
              <p className="text-[11px] uppercase tracking-[0.28em] text-[#73819b] font-semibold mb-4">
                Common Use Cases
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-[#06081E] leading-tight">
                Built for multiple education business models, not just one type of institute.
              </h2>
              <p className="mt-6 text-[#5e6b85] text-base md:text-lg leading-relaxed">
                Whether you are a coaching center, digital academy, or education startup, the LMS can be
                adapted to your content style, revenue model, and teaching operations.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5">
              {useCases.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.06 }}
                  className="rounded-[28px] border border-[#dbe5f0] bg-white p-6 shadow-[0_18px_50px_rgba(10,25,47,0.05)]"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#06081E] text-white shrink-0">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#06081E]">{item.title}</h3>
                      <p className="mt-2 text-[#5e6b85] leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-[32px] border border-[#dbe5f0] bg-white shadow-[0_24px_65px_rgba(10,25,47,0.08)]">
            <div className="grid grid-cols-1 lg:grid-cols-[1.02fr_0.98fr]">
              <div className="p-8 md:p-12">
                <p className="text-[11px] uppercase tracking-[0.28em] text-[#73819b] font-semibold mb-4">
                  Ideal For
                </p>
                <h2 className="text-3xl md:text-5xl font-bold text-[#06081E] leading-tight">
                  Institutions that want to launch a branded learning product with serious capability.
                </h2>
                <p className="mt-5 max-w-2xl text-[#5e6b85] text-base md:text-lg leading-relaxed">
                  If you want more than a simple website and need a product where students can consume content,
                  enroll, track progress, and interact inside one platform, this service is the right fit.
                </p>

                <div className="mt-8 rounded-[26px] border border-[#dbe5f0] bg-[#f8fbfe] p-6">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-[#73819b] font-semibold mb-4">
                    Delivery Scope
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {deliveryScope.map((item) => (
                      <div key={item} className="flex items-start gap-3 rounded-2xl bg-white px-4 py-4 border border-[#e6eef6]">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#16a34a]" />
                        <p className="text-[#4f5f7b] leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: 'Coaching institutes', icon: Users },
                    { title: 'Edtech founders', icon: GraduationCap },
                    { title: 'Course creators', icon: BookOpenCheck },
                    { title: 'Training academies', icon: ChartColumn },
                  ].map((item) => (
                    <div key={item.title} className="rounded-[22px] border border-[#dbe5f0] bg-[#f8fbfe] px-5 py-5">
                      <div className="flex items-center gap-3">
                        <item.icon className="h-5 w-5 text-[#06081E]" />
                        <p className="font-semibold text-[#06081E]">{item.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[linear-gradient(135deg,#06081E_0%,#0f1942_100%)] p-8 md:p-12 text-white flex flex-col justify-between">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.28em] text-white/45 font-semibold mb-4">
                    Next Step
                  </p>
                  <h3 className="text-2xl md:text-3xl font-bold leading-tight">
                    Ready to build your education LMS SaaS platform?
                  </h3>
                  <p className="mt-4 text-white/72 leading-relaxed">
                    Let&apos;s discuss your course model, app structure, features, and monetization flow so we can scope the right platform.
                  </p>
                </div>

                <div className="mt-8 space-y-4">
                  {[
                    'Student app + admin panel planning',
                    'Subscription and monetization structure',
                    'Scalable SaaS architecture for future growth',
                  ].map((point) => (
                    <div key={point} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                      <p className="text-sm leading-relaxed text-white/78">{point}</p>
                    </div>
                  ))}
                </div>

                <Link
                  to="/contact"
                  className="mt-8 inline-flex items-center justify-center gap-2 bg-[#FF6B35] px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#E85D2A]"
                >
                  Book a Service
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
