// app/services/page.tsx

import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Wind, Droplets, Zap, Wrench, Shield, Clock, Star,
  CheckCircle, Phone as PhoneIcon, MapPin, ArrowRight,
  Thermometer, Home, Tv, Paintbrush, Layers, Droplet,
  DoorOpen, ChevronRight,
} from 'lucide-react'
import SectionHeading from '../../components/ui/SectionHeading'
import CTASection from '../../components/ui/CTASection'
import Button from '../../components/ui/Button'

// ─── SEO Metadata ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'All Services | AC Repair, Plumbing, Electrical & Handyman Dubai | Happy Brother',
  description:
    'Browse all Happy Brother services in Dubai — AC repair, AC installation, AC maintenance, plumbing, electrical work, painting, carpentry, tiling, deep cleaning, waterproofing & more. Licensed technicians. Same-day service. Call +971 50 217 5305.',
  keywords: [
    'AC repair Dubai',
    'AC installation Dubai',
    'AC maintenance Dubai',
    'plumbing Dubai',
    'electrical work Dubai',
    'handyman Dubai',
    'painting Dubai',
    'carpentry Dubai',
    'tiling Dubai',
    'deep cleaning Dubai',
    'waterproofing Dubai',
    'TV mounting Dubai',
    'door repair Dubai',
    'water heater repair Dubai',
    'gypsum ceiling Dubai',
    'home services Dubai',
    'maintenance services Dubai',
    'Happy Brother Technical Services',
  ].join(', '),
  alternates: {
    canonical: 'https://happybrotherac.com/services',
  },
  openGraph: {
    type: 'website',
    locale: 'en_AE',
    url: 'https://happybrotherac.com/services',
    siteName: 'Happy Brother AC - AC & Handyman Services Dubai',
    title: 'All Services | AC Repair, Plumbing, Electrical & Handyman Dubai | Happy Brother',
    description:
      'Complete home and office maintenance services across Dubai. AC repair, plumbing, electrical, painting, carpentry, deep cleaning & more. Licensed & insured.',
    images: [
      {
        url: 'https://happybrotherac.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Happy Brother Technical Services Dubai',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

// ─── 1. Services data — defined first so everything below can reference it ────
const allServices = [
  {
    slug: 'ac-repair',
    label: 'AC Repair',
    icon: Wind,
    color: 'cyan',
    description: 'Fast diagnosis and repair for all AC faults — gas refill, compressor, PCB, thermostat, and more. All brands covered.',
    bullets: ['All major brands', 'Same-day parts & fix', 'Gas refill & leak detection', 'Error code diagnosis'],
    badge: 'Most Popular',
  },
  {
    slug: 'ac-installation',
    label: 'AC Installation',
    icon: Wind,
    color: 'cyan',
    description: 'Professional installation for split, ducted, cassette, and window AC units. DEWA-compliant wiring and full setup.',
    bullets: ['All unit types', 'DEWA-compliant wiring', 'Vacuuming & gas charging', 'All brands supplied or fitted'],
    badge: null,
  },
  {
    slug: 'ac-maintenance',
    label: 'AC Maintenance',
    icon: Shield,
    color: 'cyan',
    description: 'Annual and one-time maintenance contracts. Filter cleaning, coil wash, drain flush, and gas pressure check.',
    bullets: ['AMC contracts available', 'Filter & coil cleaning', 'Drain flushing', 'Priority breakdown response'],
    badge: 'Best Value',
  },
  {
    slug: 'plumbing',
    label: 'Plumbing',
    icon: Droplets,
    color: 'blue',
    description: 'Leak repairs, drain unblocking, tap replacement, pressure fixes, and full bathroom fitting. Emergency service available.',
    bullets: ['Leak detection & repair', 'Drain blockage clearing', 'Tap & shower replacement', 'Emergency plumbing'],
    badge: null,
  },
  {
    slug: 'electrical-work',
    label: 'Electrical Work',
    icon: Zap,
    color: 'yellow',
    description: 'Certified electrical work — sockets, wiring, circuit breakers, lighting, and DEWA-compliant load management.',
    bullets: ['DEWA-compliant work', 'Sockets & switches', 'Breaker & fuse repair', 'Outdoor lighting'],
    badge: null,
  },
  {
    slug: 'painting',
    label: 'Painting',
    icon: Paintbrush,
    color: 'purple',
    description: 'Interior and exterior painting with quality emulsion, texture, and weatherproof paints. Surface prep included.',
    bullets: ['Interior & exterior', 'Crack filling & priming', 'Texture finishes', 'Single room to full villa'],
    badge: null,
  },
  {
    slug: 'carpentry',
    label: 'Carpentry',
    icon: Wrench,
    color: 'orange',
    description: 'Custom carpentry — furniture assembly, built-in wardrobes, kitchen cabinets, wooden partitions, and office fit-out.',
    bullets: ['IKEA & flat-pack assembly', 'Built-in wardrobes', 'Custom cabinets', 'Wooden partitions'],
    badge: null,
  },
  {
    slug: 'tiling',
    label: 'Tiling',
    icon: Layers,
    color: 'teal',
    description: 'Floor and wall tiling for bathrooms, kitchens, and outdoor areas. New installation, replacement, re-grouting, and polishing.',
    bullets: ['Ceramic, porcelain & marble', 'Single tile replacement', 'Re-grouting & sealing', 'Tile polishing'],
    badge: null,
  },
  {
    slug: 'handyman',
    label: 'Handyman',
    icon: Wrench,
    color: 'brand',
    description: 'One visit for all your small jobs — picture hanging, curtain rods, door fixes, shelf fitting, wall patching, and more.',
    bullets: ['All tools supplied', 'List of jobs in one visit', 'Door & lock fixes', 'Wall patching & touch-ups'],
    badge: 'Quick Book',
  },
  {
    slug: 'deep-cleaning',
    label: 'Deep Cleaning',
    icon: Home,
    color: 'green',
    description: 'Professional deep cleaning for apartments, villas, and offices. Kitchen degreasing, bathroom sanitization, and move-in/out cleans.',
    bullets: ['Kitchen & oven degreasing', 'Bathroom sanitization', 'Inside-appliance cleaning', 'Move-in/out cleans'],
    badge: null,
  },
  {
    slug: 'door-repair',
    label: 'Door Repair',
    icon: DoorOpen,
    color: 'rose',
    description: 'Door alignment, hinge replacement, lock fixing, automatic sliding door maintenance, and security lock upgrades.',
    bullets: ['Hinge & lock replacement', 'Door alignment', 'Automatic door service', 'Security upgrades'],
    badge: null,
  },
  {
    slug: 'gypsum-false-ceiling',
    label: 'Gypsum / False Ceiling',
    icon: Layers,
    color: 'indigo',
    description: 'Gypsum board and POP false ceiling installation with recessed lighting cutouts, cove lighting, and cornice work.',
    bullets: ['Full frame & board install', 'Cove & recessed lighting', 'Taping, skimming & paint', 'Repair & patching'],
    badge: null,
  },
  {
    slug: 'tv-mounting',
    label: 'TV Mounting',
    icon: Tv,
    color: 'slate',
    description: 'Safe TV wall mounting on any surface — concrete, drywall, or tiles. Cable concealment and soundbar mounting included.',
    bullets: ['All wall types', 'All TV sizes', 'Cable concealment', 'Soundbar mounting'],
    badge: null,
  },
  {
    slug: 'water-heater-repair',
    label: 'Water Heater Repair',
    icon: Thermometer,
    color: 'red',
    description: 'Repair and replacement for all water heaters — electric, gas, instant, and storage units. Same-day diagnosis.',
    bullets: ['Electric & gas units', 'Element & thermostat fix', 'Full unit replacement', 'Old unit disposal'],
    badge: null,
  },
  {
    slug: 'waterproofing',
    label: 'Waterproofing',
    icon: Droplet,
    color: 'sky',
    description: 'Waterproofing for bathrooms, rooftops, balconies, and water tanks. Membrane systems, crack injection, and leak sealing.',
    bullets: ['Bathroom & wet rooms', 'Rooftop membranes', 'Balcony waterproofing', 'Water tank lining'],
    badge: null,
  },
]

// ─── 2. Top areas — slugs match seo-pages.ts exactly ─────────────────────────
const topAreas = [
  { slug: 'dubai-marina',   label: 'Dubai Marina' },
  { slug: 'downtown-dubai', label: 'Downtown Dubai' },
  { slug: 'palm-jumeirah',  label: 'Palm Jumeirah' },
  { slug: 'business-bay',   label: 'Business Bay' },
  { slug: 'difc',           label: 'DIFC' },
  { slug: 'jumeirah',       label: 'Jumeirah' },
  { slug: 'jbr',            label: 'JBR' },
  { slug: 'deira',          label: 'Deira' },
  { slug: 'bur-dubai',      label: 'Bur Dubai' },
  { slug: 'mirdif',         label: 'Mirdif' },
  { slug: 'al-quoz',        label: 'Al Quoz' },
  { slug: 'jlt',            label: 'JLT' },
]

// ─── 3. FAQs ──────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: 'How quickly can a technician reach me in Dubai?',
    a: 'Response times vary by area — typically 25–60 minutes across Dubai. Central areas like DIFC, Business Bay, and Downtown Dubai receive the fastest response. We confirm an ETA when you call.',
  },
  {
    q: 'Do you offer Annual Maintenance Contracts (AMC)?',
    a: 'Yes. We offer flexible AMC plans for AC, plumbing, and electrical systems for apartments, villas, and commercial properties across Dubai. AMC customers receive priority scheduling and discounted rates.',
  },
  {
    q: 'Are your technicians licensed for Dubai?',
    a: 'Yes. All our technicians are fully licensed, certified, and insured. Our electrical work is DEWA-compliant and all AC installations follow UAE manufacturer and regulatory standards.',
  },
  {
    q: 'Can I book multiple services in one visit?',
    a: 'Absolutely. Our handyman service is designed for multiple small tasks in one visit. For larger combinations — for example AC maintenance plus plumbing — we can send a two-person team on the same day.',
  },
  {
    q: 'Do you work on weekends and public holidays?',
    a: 'Yes. We operate 7 days a week including weekends and public holidays, from 8:00 AM to 10:00 PM. Emergency AC and plumbing services are available outside these hours too.',
  },
  {
    q: 'Is there a warranty on your work?',
    a: 'Yes. All repairs, installations, and services come with a service warranty. If the same fault recurs within the warranty period, we return and fix it at no extra cost.',
  },
  {
    q: 'Do you serve all areas of Dubai?',
    a: 'Yes. We cover all Dubai areas including Palm Jumeirah, Dubai Marina, Downtown, DIFC, Business Bay, Jumeirah, JBR, Deira, Bur Dubai, Mirdif, Al Quoz, JLT, Silicon Oasis, Sports City, Discovery Gardens, and more.',
  },
]

// ─── 4. Structured Data — defined after allServices and faqs ─────────────────
const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://happybrotherac.com/services',
      url: 'https://happybrotherac.com/services',
      name: 'All Services — Happy Brother Technical Services Dubai',
      description:
        'Complete list of AC repair, plumbing, electrical, handyman, and home maintenance services offered by Happy Brother across all Dubai areas.',
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://happybrotherac.com' },
          { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://happybrotherac.com/services' },
        ],
      },
    },
    {
      '@type': 'ItemList',
      name: 'Happy Brother Services in Dubai',
      description: 'All home and office maintenance services offered by Happy Brother Technical Services across Dubai.',
      itemListElement: allServices.map((s, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: s.label,
        description: s.description,
        url: `https://happybrotherac.com/${s.slug}/dubai-marina`,
      })),
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://happybrotherac.com/#business',
      name: 'Happy Brother Technical Services',
      url: 'https://happybrotherac.com',
      telephone: '+971502175305',
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Dubai',
        addressCountry: 'AE',
      },
      openingHours: 'Mo-Su 08:00-22:00',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Home & Office Maintenance Services',
        itemListElement: allServices.map((s) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: s.label,
            description: s.description,
          },
        })),
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ],
}

// ─── 5. Color map for service cards ──────────────────────────────────────────
const colorMap: Record<string, { bg: string; border: string; badge: string; dot: string }> = {
  cyan:   { bg: 'bg-cyan-50',    border: 'border-cyan-200',   badge: 'bg-cyan-100 text-cyan-800',     dot: 'bg-cyan-500' },
  blue:   { bg: 'bg-blue-50',    border: 'border-blue-200',   badge: 'bg-blue-100 text-blue-800',     dot: 'bg-blue-500' },
  yellow: { bg: 'bg-yellow-50',  border: 'border-yellow-200', badge: 'bg-yellow-100 text-yellow-800', dot: 'bg-yellow-500' },
  purple: { bg: 'bg-purple-50',  border: 'border-purple-200', badge: 'bg-purple-100 text-purple-800', dot: 'bg-purple-500' },
  orange: { bg: 'bg-orange-50',  border: 'border-orange-200', badge: 'bg-orange-100 text-orange-800', dot: 'bg-orange-500' },
  teal:   { bg: 'bg-teal-50',    border: 'border-teal-200',   badge: 'bg-teal-100 text-teal-800',     dot: 'bg-teal-500' },
  brand:  { bg: 'bg-violet-50',  border: 'border-violet-200', badge: 'bg-violet-100 text-violet-800', dot: 'bg-violet-500' },
  green:  { bg: 'bg-green-50',   border: 'border-green-200',  badge: 'bg-green-100 text-green-800',   dot: 'bg-green-500' },
  rose:   { bg: 'bg-rose-50',    border: 'border-rose-200',   badge: 'bg-rose-100 text-rose-800',     dot: 'bg-rose-500' },
  indigo: { bg: 'bg-indigo-50',  border: 'border-indigo-200', badge: 'bg-indigo-100 text-indigo-800', dot: 'bg-indigo-500' },
  slate:  { bg: 'bg-slate-50',   border: 'border-slate-200',  badge: 'bg-slate-100 text-slate-800',   dot: 'bg-slate-500' },
  red:    { bg: 'bg-red-50',     border: 'border-red-200',    badge: 'bg-red-100 text-red-800',       dot: 'bg-red-500' },
  sky:    { bg: 'bg-sky-50',     border: 'border-sky-200',    badge: 'bg-sky-100 text-sky-800',       dot: 'bg-sky-500' },
}

// ─── Page Component ───────────────────────────────────────────────────────────
export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div>

        {/* ── Breadcrumb ── */}
        <nav className="bg-gray-50 border-b border-gray-100 py-3" aria-label="Breadcrumb">
          <div className="container mx-auto px-4">
            <ol className="flex items-center gap-2 text-sm text-gray-500">
              <li>
                <Link href="/" className="hover:text-brand-cyan transition-colors">Home</Link>
              </li>
              <li aria-hidden="true"><ChevronRight className="w-4 h-4" /></li>
              <li className="font-medium text-gray-900" aria-current="page">All Services</li>
            </ol>
          </div>
        </nav>

        {/* ── Hero ── */}
        <section className="relative bg-gradient-to-br from-gray-50 via-white to-primary-50 py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-purple/10 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white shadow-brand border border-brand-purple/20">
                <span className="text-sm font-semibold bg-gradient-brand bg-clip-text text-transparent">
                  15 Services · 20 Areas · Same-Day Booking
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-gray-900">All Home & Office </span>
                <span className="bg-gradient-brand bg-clip-text text-transparent">Services</span>
                <span className="text-gray-900"> in Dubai</span>
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed">
                From AC repair and plumbing to painting, carpentry, and deep cleaning — Happy Brother covers every maintenance need across all Dubai areas. Licensed technicians. Same-day service. 100% satisfaction guaranteed.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="tel:+971502175305" variant="gradient" size="lg" icon={PhoneIcon}>
                  Call Now — 24/7
                </Button>
                <Button href="/contact" variant="outline" size="lg" icon={ArrowRight}>
                  Book a Service
                </Button>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-6 pt-2">
                {[
                  { icon: CheckCircle, text: 'Licensed & Insured',    color: 'text-green-500' },
                  { icon: Clock,       text: 'Same-Day Service',      color: 'text-brand-cyan' },
                  { icon: Star,        text: '4.9/5 · 5000+ Reviews', color: 'text-yellow-400' },
                  { icon: MapPin,      text: 'All Dubai Areas',       color: 'text-brand-purple' },
                ].map(({ icon: Icon, text, color }) => (
                  <div key={text} className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                    <Icon className={`w-4 h-4 ${color}`} />
                    {text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── All Services Grid ── */}
        <section className="py-20 bg-white" aria-labelledby="all-services-heading" id="all-services">
          <div className="container mx-auto px-4">
            <SectionHeading
              badge="Our Services"
              title="Everything Your Home or Office Needs"
              description="Click any service to see dedicated pages for your specific Dubai area, with pricing, FAQs, and same-day booking."
              gradient
            />

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-16">
              {allServices.map((service) => {
                const colors = colorMap[service.color] ?? colorMap.cyan
                const Icon = service.icon
                return (
                  <article
                    key={service.slug}
                    className={`rounded-2xl border p-6 ${colors.bg} ${colors.border} hover:shadow-lg transition-shadow flex flex-col`}
                    aria-label={service.label}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-xl bg-white shadow-sm">
                          <Icon className="w-6 h-6 text-gray-700" />
                        </div>
                        <h2 className="text-xl font-bold text-gray-900">{service.label}</h2>
                      </div>
                      {service.badge && (
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold flex-shrink-0 ml-2 ${colors.badge}`}>
                          {service.badge}
                        </span>
                      )}
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>

                    <ul className="grid grid-cols-2 gap-1.5 mb-5">
                      {service.bullets.map((b) => (
                        <li key={b} className="flex items-center gap-1.5 text-xs text-gray-700">
                          <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${colors.dot}`} />
                          {b}
                        </li>
                      ))}
                    </ul>

                    <div className="mb-5">
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                        Popular areas:
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {topAreas.slice(0, 6).map((area) => (
                          <Link
                            key={area.slug}
                            href={`/${service.slug}/${area.slug}`}
                            className="px-2 py-1 text-xs font-medium rounded-md bg-white border border-gray-200 text-gray-600 hover:border-brand-cyan hover:text-brand-cyan transition-colors shadow-sm"
                            aria-label={`${service.label} in ${area.label}, Dubai`}
                          >
                            {area.label}
                          </Link>
                        ))}
                      </div>
                    </div>

                    <div className="mt-auto flex flex-wrap gap-3">
                      <Link
                        href={`/${service.slug}/dubai-marina`}
                        className="inline-flex items-center gap-1 text-sm font-semibold text-brand-cyan hover:underline"
                      >
                        View service <ChevronRight className="w-4 h-4" />
                      </Link>
                      <a
                        href="tel:+971502175305"
                        className="inline-flex items-center gap-1 text-sm font-semibold text-gray-500 hover:text-brand-cyan transition-colors"
                      >
                        <PhoneIcon className="w-4 h-4" />
                        Call Now
                      </a>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── Browse by Area ── */}
        <section
          className="py-20 bg-gradient-to-br from-gray-50 to-white"
          id="by-area"
        >
          <div className="container mx-auto px-4">
            <SectionHeading
              badge="Browse by Area"
              title="Find Services in Your Dubai Neighbourhood"
              description="Select your area to see all available services with dedicated pricing, technician info, and same-day booking."
              gradient
            />

            <div className="mt-16 space-y-6">
              {topAreas.map((area) => (
                <div key={area.slug} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="w-5 h-5 text-brand-cyan flex-shrink-0" />
                    <h3 className="text-xl font-bold text-gray-900">
                      Services in {area.label}, Dubai
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {allServices.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/${service.slug}/${area.slug}`}
                        className="px-3 py-2 text-sm font-medium rounded-lg bg-gray-50 border border-gray-200 text-gray-700 hover:border-brand-cyan hover:text-brand-cyan hover:bg-cyan-50 transition-colors"
                        aria-label={`${service.label} in ${area.label}, Dubai`}
                      >
                        {service.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-4 text-center">
                Also covering — all services in:
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  { label: 'Karama',            slug: 'karama' },
                  { label: 'Oud Metha',         slug: 'oud-metha' },
                  { label: 'Silicon Oasis',     slug: 'silicon-oasis' },
                  { label: 'Sports City',       slug: 'sports-city' },
                  { label: 'Al Nahda',          slug: 'al-nahda' },
                  { label: 'Al Qusais',         slug: 'al-qusais' },
                  { label: 'Discovery Gardens', slug: 'discovery-gardens' },
                  { label: 'Festival City',     slug: 'festival-city' },
                ].map(({ label, slug }) => (
                  <Link
                    key={slug}
                    href={`/ac-repair/${slug}`}
                    className="px-3 py-1.5 text-sm text-gray-600 bg-gray-50 rounded-lg border border-gray-200 hover:border-brand-cyan hover:text-brand-cyan transition-colors"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Why Choose Us ── */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <SectionHeading
              badge="Why Happy Brother"
              title="Dubai's Most Trusted Home Service Team"
              description="15+ years serving Dubai residents and businesses with honest, professional, and reliable maintenance services."
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
              {[
                { icon: Shield,      title: 'Licensed & Insured',      color: 'text-cyan-500',   desc: 'All technicians are fully certified and covered. Electrical work is DEWA-compliant and AC work follows UAE standards.' },
                { icon: Clock,       title: '24/7 Emergency Service',  color: 'text-purple-500', desc: 'AC breakdown at midnight? Pipe burst on a Friday? We are on call around the clock for genuine emergencies across Dubai.' },
                { icon: Star,        title: '4.9/5 Customer Rating',   color: 'text-yellow-500', desc: 'Over 5,000 customers across Dubai have rated us 4.9 out of 5. Our reputation is built on honest work and no hidden charges.' },
                { icon: CheckCircle, title: 'Service Warranty',        color: 'text-green-500',  desc: 'Every repair and installation comes with a warranty. If the same fault recurs, we return and fix it at no extra cost.' },
                { icon: MapPin,      title: 'All 20+ Dubai Areas',     color: 'text-rose-500',   desc: 'From Palm Jumeirah to Deira, from DIFC to Silicon Oasis — we reach every corner of Dubai with the same quality of service.' },
                { icon: Wrench,      title: 'One Call, Many Services', color: 'text-brand-cyan', desc: 'AC, plumbing, electrical, painting, carpentry — we cover it all. One trusted company for every maintenance need.' },
              ].map(({ icon: Icon, title, desc, color }) => (
                <div key={title} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
                  <Icon className={`w-8 h-8 ${color} mb-4`} />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white" id="faq">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-center text-gray-500 mb-12">
              Common questions about our services across Dubai
            </p>
            <div className="space-y-5">
              {faqs.map(({ q, a }, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{q}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SEO prose ── */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Complete Home Maintenance Services Across Dubai
            </h2>
            <div className="prose prose-lg text-gray-600 space-y-4">
              <p>
                Happy Brother Technical Services is one of Dubai's most trusted providers of home and office maintenance. Whether you need urgent AC repair in Dubai Marina, a deep cleaning in Downtown Dubai, plumbing fixes in Deira, or carpentry work in Jumeirah — our licensed technicians are ready same day, every day of the week.
              </p>
              <p>
                Our AC services cover the full range from installation and maintenance contracts to emergency breakdown repair across all brands including Daikin, LG, Samsung, Carrier, Midea, and Gree. Beyond AC, we offer certified electrical work that meets DEWA standards, professional plumbing for everything from a dripping tap to a burst pipe, and skilled carpentry from flat-pack assembly to full built-in wardrobes.
              </p>
              <p>
                Every service page on this site is dedicated to a specific service and area combination — so whether you are searching for{' '}
                <Link href="/painting/dubai-marina" className="text-brand-cyan hover:underline">painting in Dubai Marina</Link>,{' '}
                <Link href="/tiling/downtown-dubai" className="text-brand-cyan hover:underline">tiling in Downtown Dubai</Link>, or{' '}
                <Link href="/waterproofing/business-bay" className="text-brand-cyan hover:underline">waterproofing in Business Bay</Link>,
                you will find a page built specifically for your needs with relevant FAQs, service details, and direct contact options.
              </p>
              <p>
                We operate 7 days a week, 8:00 AM to 10:00 PM, with emergency AC and plumbing response available outside these hours. All work comes with a service warranty and transparent pricing — the quote we give is the price you pay, no hidden fees.
              </p>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <CTASection
          title="Ready to Book a Service in Dubai?"
          description="Call us now or book online. Same-day technicians available across all Dubai areas for AC repair, plumbing, electrical, and all home services."
          primaryButtonText="Call +971 50 217 5305"
          primaryButtonHref="tel:+971502175305"
          secondaryButtonText="Book Online"
          secondaryButtonHref="/contact"
        />

      </div>
    </>
  )
}