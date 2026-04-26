import Image from 'next/image'
import type { Metadata } from 'next'
import Link from 'next/link'
import { services } from '@/lib/services-data'
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  Clock,
  Star,
  ShieldCheck,
} from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import CTASection from '@/components/ui/CTASection'

export const metadata: Metadata = {
  title: 'Our Services | Happy Brother Technical Services – Dubai',
  description:
    'Professional AC repair, plumbing, electrical, painting, carpentry, tiling, deep cleaning & more across all Dubai areas. Licensed technicians, 24/7 availability.',
  keywords:
    'AC repair Dubai, plumbing Dubai, electrical services Dubai, handyman Dubai, deep cleaning Dubai, AC installation Dubai, carpentry Dubai, tiling Dubai',
  openGraph: {
    title: 'Our Services | Happy Brother Technical Services',
    description:
      'Expert home services across all Dubai areas — AC, plumbing, electrical, handyman & more.',
    url: 'https://happybrotherac.com/services',
    images: [
      {
        url: 'https://happybrotherac.com/services-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Happy Brother Technical Services – Dubai',
      },
    ],
  },
  alternates: {
    canonical: 'https://happybrotherac.com/services',
  },
}

const servicesStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  provider: {
    '@type': 'LocalBusiness',
    '@id': 'https://happybrotherac.com/#business',
    name: 'Happy Brother Technical Services',
    telephone: '+971502175305',
    email: 'fawadtwopointo@gmail.com',
    url: 'https://happybrotherac.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dubai',
      addressRegion: 'Dubai',
      addressCountry: 'AE',
    },
  },
  areaServed: { '@type': 'City', name: 'Dubai' },
}

const areas = [
  'Dubai Marina', 'JBR', 'Downtown Dubai', 'Business Bay', 'DIFC',
  'Deira', 'Bur Dubai', 'Karama', 'Al Quoz', 'Jumeirah',
  'JLT', 'Mirdif', 'Discovery Gardens', 'Sports City', 'Palm Jumeirah',
  'Al Nahda', 'Al Qusais', 'Silicon Oasis', 'Festival City', 'Oud Metha',
]

const highlights = [
  { icon: Clock,       label: '24/7 Emergency Service' },
  { icon: ShieldCheck, label: 'Licensed & Insured' },
  { icon: Star,        label: '5000+ Happy Customers' },
  { icon: CheckCircle, label: 'Transparent Pricing' },
]

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesStructuredData) }}
      />

      <div className="bg-white">

        {/* ── Hero ── */}
        <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-cyan/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-purple/20 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-magenta/10 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                <span className="text-sm font-semibold text-brand-cyan">
                  🔧 15 Professional Services Across Dubai
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Everything Your Home
                <span className="block bg-gradient-brand bg-clip-text text-transparent mt-2">
                  Needs, Under One Roof
                </span>
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                From AC repair to waterproofing, carpentry to deep cleaning — our licensed professionals are available 24/7 across all Dubai neighborhoods.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                {highlights.map((h, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center gap-2 px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10"
                  >
                    <h.icon className="w-5 h-5 text-brand-cyan" />
                    <span className="text-sm font-medium text-gray-200 text-center">{h.label}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <a
                  href="tel:+971502175305"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-brand text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
                >
                  <Phone className="w-5 h-5" />
                  +971 50 217 5305
                </a>
                <a
                  href="mailto:fawadtwopointo@gmail.com"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  Send an Email
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── All Services ── */}
        <section className="py-20 bg-white">
  <div className="w-full px-6 lg:px-16">
            <SectionHeading
              badge="What We Do"
              title="Our Services"
              description="Quality workmanship across 15 home service categories"
              gradient
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-brand-cyan/40 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
                >
                  <div className="relative w-full aspect-video overflow-hidden bg-gray-100">
                    <Image
                      src={service.image}
                      alt={service.label}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    <div
                      className={`absolute top-4 left-4 inline-flex items-center justify-center w-11 h-11 bg-gradient-to-br from-brand-${service.color} to-brand-${service.color}/70 rounded-xl shadow-lg`}
                    >
                      <service.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  <div className="p-6 flex flex-col gap-4 flex-1">
                    <div className="space-y-1.5">
                      <h2 className="text-xl font-bold text-gray-900 group-hover:text-brand-cyan transition-colors">
                        {service.label}
                      </h2>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    <ul className="grid grid-cols-2 gap-x-3 gap-y-2">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-start gap-1.5 text-xs text-gray-600">
                          <CheckCircle className="w-3.5 h-3.5 text-brand-cyan flex-shrink-0 mt-0.5" />
                          {f}
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center gap-1 text-brand-cyan text-sm font-semibold pt-2 border-t border-gray-100 mt-auto">
                      View Service Details
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Areas We Serve ── */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <SectionHeading
              badge="Coverage"
              title="Areas We Serve Across Dubai"
              description="Our technicians are stationed strategically so we reach you fast — wherever you are"
            />

          <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {areas.map((area) => (
                <div
                  key={area}
                  className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-brand-cyan/30 hover:shadow-md transition-all duration-200"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-brand rounded-lg flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-gray-700">{area}</span>
                </div>
              ))}
            </div>

            <p className="text-center text-gray-500 mt-10 text-sm">
              Don&apos;t see your area?{' '}
              <a href="tel:+971502175305" className="text-brand-cyan font-semibold hover:underline">
                Call us
              </a>{' '}
              — we likely cover it too.
            </p>
          </div>
        </section>

        {/* ── Contact Strip ── */}
        <section className="py-14 bg-white border-y border-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center gap-3">
                <div className="w-14 h-14 bg-gradient-brand rounded-xl flex items-center justify-center">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium mb-1">Call Us Anytime</p>
                  <a
                    href="tel:+971502175305"
                    className="text-xl font-bold text-gray-900 hover:text-brand-cyan transition-colors"
                  >
                    +971 50 217 5305
                  </a>
                </div>
              </div>

              <div className="flex flex-col items-center gap-3">
                <div className="w-14 h-14 bg-gradient-brand rounded-xl flex items-center justify-center">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium mb-1">Email Us</p>
                  <a
                    href="mailto:fawadtwopointo@gmail.com"
                    className="text-lg font-bold text-gray-900 hover:text-brand-cyan transition-colors break-all"
                  >
                    fawadtwopointo@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex flex-col items-center gap-3">
                <div className="w-14 h-14 bg-gradient-brand rounded-xl flex items-center justify-center">
                  <Clock className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium mb-1">Working Hours</p>
                  <p className="text-lg font-bold text-gray-900">24/7 Available</p>
                  <p className="text-sm text-gray-500">Including weekends &amp; holidays</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <CTASection
          title="Need a Service Today?"
          description="Our licensed professionals are standing by across all Dubai areas. Call now for a free quote or same-day booking."
          primaryButtonText="Call +971 50 217 5305"
          primaryButtonHref="tel:+971502175305"
          secondaryButtonText="Book Online"
          secondaryButtonHref="/contact"
        />
      </div>
    </>
  )
}