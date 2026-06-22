import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Activity,
  ArrowRight,
  Bot,
  CalendarCheck2,
  CheckCircle2,
  Clock3,
  GraduationCap,
  HeartPulse,
  LayoutDashboard,
  ShieldCheck,
  Stethoscope,
  UserRoundSearch,
  Users,
} from 'lucide-react';

const platformModules = [
  {
    title: 'Doctor appointment booking',
    description: 'Allow patients to book appointments by department, doctor availability, and preferred timing from a single website flow.',
    icon: CalendarCheck2,
  },
  {
    title: 'Doctor profiles and status',
    description: 'Show doctor availability, specialties, timings, consultation details, and current service status with clarity.',
    icon: Stethoscope,
  },
  {
    title: 'Patient timing coordination',
    description: 'Organize consultation slots, waiting flow, and scheduling visibility so patients know when and where to report.',
    icon: Clock3,
  },
  {
    title: 'Healthcare admin dashboard',
    description: 'Manage appointments, doctor schedules, service updates, departments, and operational visibility from one panel.',
    icon: LayoutDashboard,
  },
];

const positioningPoints = [
  'Hospital website prototype designed for a healthcare organization in Bhilwara',
  'Positioned as a scalable digital healthcare platform concept',
  'Supports appointment booking, doctor visibility, and patient convenience',
  'Includes AI-assisted guidance for basic symptoms and doctor suggestions',
];

const featureStack = [
  {
    title: 'AI symptom assistance',
    text: 'Patients can enter minimal symptoms such as headache or basic discomfort and receive initial guidance on which doctor or department may be more suitable.',
    icon: Bot,
  },
  {
    title: 'Department and doctor discovery',
    text: 'Help visitors quickly understand available departments, doctors, expertise areas, and consultation options without confusion.',
    icon: UserRoundSearch,
  },
  {
    title: 'Operational convenience',
    text: 'Reduce manual front-desk friction by moving appointment discovery, doctor lookup, and timing visibility online.',
    icon: Activity,
  },
  {
    title: 'Secure platform direction',
    text: 'Plan the product with role-based access, reliable admin control, and scalable digital healthcare workflows in mind.',
    icon: ShieldCheck,
  },
];

const userFlows = [
  {
    role: 'Patients',
    points: [
      'Search for doctors, specialties, and available hospital services',
      'Book appointments based on timing and department availability',
      'Use simple AI guidance for minor symptom-to-doctor suggestions',
    ],
    icon: Users,
  },
  {
    role: 'Doctors',
    points: [
      'Display profile details, timings, specialization, and consultation schedule',
      'Show current status and availability in a structured digital format',
      'Improve discoverability for patients seeking the right healthcare support',
    ],
    icon: Stethoscope,
  },
  {
    role: 'Hospital admins',
    points: [
      'Manage departments, doctor listings, appointments, and schedule updates',
      'Control content and service visibility for the hospital website',
      'Create a stronger digital front door for patient engagement and operations',
    ],
    icon: LayoutDashboard,
  },
];

const deliveryScope = [
  'Hospital website UI and service information architecture',
  'Doctor profile listing and specialty-based browsing',
  'Appointment request and booking workflow',
  'Doctor timing and patient schedule visibility',
  'AI support flow for minor symptom guidance',
  'Admin management layer for updates and operations',
];

export default function Healthcare() {
  return (
    <div className="bg-[linear-gradient(180deg,#f8fbff_0%,#eef5fb_30%,#ffffff_100%)]">
      <section className="relative overflow-hidden border-b border-[#dbe5f0]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,107,53,0.14),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(10,106,210,0.12),transparent_28%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-[1.02fr_0.98fr] gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-3 rounded-full border border-[#ff6b35]/20 bg-white/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#6a7690] shadow-sm">
                <HeartPulse className="h-3.5 w-3.5 text-[#FF6B35]" />
                Healthcare Industry
              </div>
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 text-3xl sm:text-4xl md:text-6xl font-bold leading-tight text-[#06081E]"
              >
                Build a modern hospital website experience with appointments, doctor access, and AI-assisted guidance.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mt-6 max-w-2xl text-lg md:text-xl leading-relaxed text-[#5e6b85]"
              >
                This healthcare concept is a prototype created for a hospital use case in Bhilwara. It is not currently
                deployed live at that hospital, but it demonstrates how a hospital website can improve patient access,
                doctor discovery, appointment workflows, and digital healthcare support.
              </motion.p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl">
                {positioningPoints.map((item) => (
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
                  src="https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Hospital digital platform prototype"
                  className="w-full h-[260px] object-cover"
                />
              </div>

              <div className="mt-6">
                <p className="text-[11px] uppercase tracking-[0.28em] text-white/45 font-semibold mb-3">
                  Prototype Positioning
                </p>
                <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                  A hospital website prototype designed like a patient-focused digital healthcare platform.
                </h2>
                <p className="mt-4 text-white/72 leading-relaxed">
                  The concept focuses on making healthcare access easier through appointment booking,
                  better doctor visibility, patient timing support, and smart digital assistance.
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
                The healthcare website modules needed for a better patient experience.
              </h2>
            </div>
            <p className="max-w-xl text-[#5e6b85] text-base md:text-lg leading-relaxed">
              This direction goes beyond a simple hospital information site and moves toward a more functional
              healthcare digital system that improves access and communication.
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
                Practical features for hospitals, clinics, and healthcare organizations.
              </h2>
              <p className="mt-6 text-white/70 text-base md:text-lg leading-relaxed">
                The prototype demonstrates how patient-facing healthcare experiences can become more
                organized, searchable, and supportive through the right digital product structure.
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
                User Journey Layers
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-[#06081E] leading-tight">
                A healthcare product should support patients, doctors, and hospital operations differently.
              </h2>
            </div>
            <p className="max-w-xl text-[#5e6b85] text-base md:text-lg leading-relaxed">
              The platform experience becomes stronger when each user group has a clear role,
              visibility, and workflow inside the product.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {userFlows.map((item, index) => (
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

      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-[32px] border border-[#dbe5f0] bg-white shadow-[0_24px_65px_rgba(10,25,47,0.08)]">
            <div className="grid grid-cols-1 lg:grid-cols-[1.02fr_0.98fr]">
              <div className="p-8 md:p-12">
                <p className="text-[11px] uppercase tracking-[0.28em] text-[#73819b] font-semibold mb-4">
                  Delivery Scope
                </p>
                <h2 className="text-3xl md:text-5xl font-bold text-[#06081E] leading-tight">
                  A hospital digital experience can combine visibility, convenience, and better first-level support.
                </h2>
                <p className="mt-5 max-w-2xl text-[#5e6b85] text-base md:text-lg leading-relaxed">
                  This prototype direction is ideal for hospitals and healthcare providers that want a better
                  digital front door for patient inquiries, appointment workflows, and service communication.
                </p>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {deliveryScope.map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-2xl bg-[#f8fbfe] px-4 py-4 border border-[#e6eef6]">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#16a34a]" />
                      <p className="text-[#4f5f7b] leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[linear-gradient(135deg,#06081E_0%,#0f1942_100%)] p-8 md:p-12 text-white flex flex-col justify-between">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.28em] text-white/45 font-semibold mb-4">
                    Important Note
                  </p>
                  <h3 className="text-2xl md:text-3xl font-bold leading-tight">
                    This project is presented as a prototype concept, not as an active hospital deployment.
                  </h3>
                  <p className="mt-4 text-white/72 leading-relaxed">
                    It shows how a healthcare organization in Bhilwara could structure a stronger hospital website
                    with appointment flows, doctor information, scheduling support, and AI-powered assistance.
                  </p>
                </div>

                <div className="mt-8 space-y-4">
                  {[
                    'Appointment booking and doctor lookup flow',
                    'Patient timing and status visibility',
                    'AI-based minimal symptom to doctor recommendation concept',
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
