// import Image from 'next/image'
import { supabase } from '../lib/supabase'
import { Wind, Droplets, Zap, Wrench, Shield, Clock, Star, CheckCircle, Phone as PhoneIcon, MapPin, ArrowRight, ChevronRight } from 'lucide-react'
import type { Metadata } from 'next'
import Button from '../components/ui/Button'
import ServiceCard from '../components/ui/ServiceCard'
import FeatureCard from '../components/ui/FeatureCard'
import SectionHeading from '../components/ui/SectionHeading'
import CTASection from '../components/ui/CTASection'
import StatsSection from '../components/ui/StatsSection'
import TestimonialCard from '../components/ui/TestimonialCard'

// ─── Enhanced SEO Metadata with location keywords ─────────────────────────────
export const metadata: Metadata = {
  title: 'AC Repair & Handyman Services Dubai | Palm Jumeirah, Marina, Downtown | Happy Brother AC',
  description:
    'Professional AC repair, installation & maintenance in Dubai — Palm Jumeirah, Dubai Marina, Downtown, DIFC, Business Bay, Emirates Hills & all premium areas. 24/7 emergency service. Licensed & insured. Call +971 50 217 5305',
  keywords: [
    'AC repair Dubai',
    'handyman Dubai',
    'AC repair Palm Jumeirah',
    'handyman Palm Jumeirah',
    'AC service Dubai Marina',
    'handyman Dubai Marina',
    'AC repair Downtown Dubai',
    'handyman Downtown Dubai',
    'AC service DIFC',
    'handyman DIFC',
    'AC repair Business Bay',
    'handyman Business Bay',
    'AC service Emirates Hills',
    'handyman Emirates Hills',
    'AC repair Jumeirah',
    'AC repair JBR',
    'AC repair Arabian Ranches',
    'AC repair Dubai Hills',
    'plumbing Dubai',
    'electrical services Dubai',
    '24/7 AC repair',
    'emergency AC service Dubai',
    'AC installation Dubai',
    'Happy Brother AC',
  ].join(', '),
  authors: [{ name: 'Happy Brother AC' }],
  openGraph: {
    type: 'website',
    locale: 'en_AE',
    url: 'https://happybrotherac.com',
    siteName: 'Happy Brother AC - AC & Handyman Services Dubai',
    title:
      'Professional AC Repair & Handyman Services Dubai | Palm Jumeirah, Marina, Downtown | 24/7',
    description:
      'Expert AC repair, plumbing, electrical & handyman services across all premium Dubai areas. Licensed professionals, 15+ years experience, 5000+ happy customers.',
    images: [
      {
        url: 'https://happybrotherac.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Happy Brother AC - AC Repair and Handyman Services in Dubai',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AC Repair & Handyman Services Dubai | 24/7 Emergency Service',
    description:
      'Professional AC repair, plumbing, electrical & handyman services across all Dubai areas. Licensed, insured, trusted by 5000+ customers.',
    images: ['https://happybrotherac.com/twitter-image.jpg'],
  },
  alternates: {
    canonical: 'https://happybrotherac.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

// ─── Structured Data ──────────────────────────────────────────────────────────
const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://happybrotherac.com/#business',
      name: 'Happy Brother AC',
      description:
        'Professional AC repair and handyman services across all Dubai neighborhoods including Palm Jumeirah, Dubai Marina, Downtown Dubai, DIFC, Business Bay, and Emirates Hills.',
      url: 'https://happybrotherac.com',
      telephone: '+971502175305',
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Your Street Address',
        addressLocality: 'Dubai',
        addressRegion: 'Dubai',
        addressCountry: 'AE',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 25.2048,
        longitude: 55.2708,
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '5000',
        bestRating: '5',
        worstRating: '1',
      },
      // Multiple areaServed entries for all premium Dubai locations
      areaServed: [
        { '@type': 'Place', name: 'Palm Jumeirah, Dubai' },
        { '@type': 'Place', name: 'Dubai Marina, Dubai' },
        { '@type': 'Place', name: 'Downtown Dubai' },
        { '@type': 'Place', name: 'DIFC, Dubai' },
        { '@type': 'Place', name: 'Business Bay, Dubai' },
        { '@type': 'Place', name: 'Emirates Hills, Dubai' },
        { '@type': 'Place', name: 'Jumeirah Beach Residence, Dubai' },
        { '@type': 'Place', name: 'Arabian Ranches, Dubai' },
        { '@type': 'Place', name: 'Dubai Hills Estate' },
        { '@type': 'Place', name: 'Jumeirah, Dubai' },
        { '@type': 'Place', name: 'Al Barsha, Dubai' },
        { '@type': 'Place', name: 'Mirdif, Dubai' },
        { '@type': 'City', name: 'Dubai' },
      ],
    },
    // ── Per-location Service schema entries (boosts local pack rankings) ──────
    ...[
      { name: 'Palm Jumeirah', lat: 25.1124, lon: 55.1390 },
      { name: 'Dubai Marina', lat: 25.0772, lon: 55.1335 },
      { name: 'Downtown Dubai', lat: 25.1972, lon: 55.2744 },
      { name: 'DIFC', lat: 25.2131, lon: 55.2819 },
      { name: 'Business Bay', lat: 25.1865, lon: 55.2627 },
      { name: 'Emirates Hills', lat: 25.0739, lon: 55.1611 },
      { name: 'JBR', lat: 25.0800, lon: 55.1340 },
      { name: 'Dubai Hills Estate', lat: 25.1020, lon: 55.2370 },
    ].map((loc) => ({
      '@type': 'Service',
      name: `AC Repair & Handyman Services in ${loc.name}`,
      provider: { '@id': 'https://happybrotherac.com/#business' },
      areaServed: {
        '@type': 'Place',
        name: `${loc.name}, Dubai`,
        geo: { '@type': 'GeoCoordinates', latitude: loc.lat, longitude: loc.lon },
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: `Services in ${loc.name}`,
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: `AC Repair ${loc.name}` } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: `Handyman ${loc.name}` } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: `Plumbing ${loc.name}` } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: `Electrical ${loc.name}` } },
        ],
      },
    })),
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Do you offer 24/7 emergency AC repair in Dubai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, we provide 24/7 emergency AC repair services across all areas of Dubai including Palm Jumeirah, Dubai Marina, Downtown Dubai, DIFC, Business Bay, and Emirates Hills. Our technicians are available round the clock.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you provide AC repair in Palm Jumeirah?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, we offer premium AC repair, installation, and maintenance services on Palm Jumeirah for villas and apartments. Our technicians handle all brands and provide same-day service.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which premium areas in Dubai do you cover?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We cover all premium Dubai areas including Palm Jumeirah, Dubai Marina, Downtown Dubai, DIFC, Business Bay, Emirates Hills, JBR, Dubai Hills Estate, Arabian Ranches, Jumeirah, and more.',
          },
        },
      ],
    },
    {
      '@type': 'Organization',
      '@id': 'https://happybrotherac.com/#organization',
      name: 'Happy Brother AC',
      url: 'https://happybrotherac.com',
      logo: { '@type': 'ImageObject', url: 'https://happybrotherac.com/logo.png' },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+971502175305',
        contactType: 'customer service',
        areaServed: 'AE',
        availableLanguage: ['English', 'Arabic'],
      },
      sameAs: [
        'https://facebook.com/yourcompany',
        'https://instagram.com/yourcompany',
        'https://twitter.com/yourcompany',
      ],
    },
  ],
}



//fawad
// ─── Premium location data ────────────────────────────────────────────────────
const premiumLocations = [
  {
    name: 'Palm Jumeirah',
    slug: 'palm-jumeirah',
    emoji: '🌴',
    tag: 'Ultra-Premium Villas & Residences',
    highlight: 'bg-amber-50 border-amber-200',
    badge: 'bg-amber-100 text-amber-800',
    description:
      'Specialised AC and handyman services for Palm Jumeirah villas, Atlantis residences, and signature apartments. We understand the unique requirements of premium beachfront properties with high-end HVAC systems.',
    services: ['Villa AC Maintenance Contracts', 'Smart Home Integration', 'VIP Same-Day Service', 'Pool-Area Electrical'],
    avgResponseTime: '< 30 min',
  },
  {
    name: 'Dubai Marina',
    slug: 'dubai-marina',
    emoji: '🏙️',
    tag: 'Luxury High-Rise Towers',
    highlight: 'bg-sky-50 border-sky-200',
    badge: 'bg-sky-100 text-sky-800',
    description:
      'Expert AC repair and handyman services for Dubai Marina skyscrapers and waterfront residences. Experienced with centralised chiller systems, ducted AC units, and the specific building regulations of Marina towers.',
    services: ['Chiller System Servicing', 'High-Rise Plumbing', 'Balcony Electrical Fixes', 'Ducted AC Repair'],
    avgResponseTime: '< 45 min',
  },
  {
    name: 'Downtown Dubai',
    slug: 'downtown-dubai',
    emoji: '🏛️',
    tag: 'Burj Khalifa Neighbourhood',
    highlight: 'bg-violet-50 border-violet-200',
    badge: 'bg-violet-100 text-violet-800',
    description:
      'Premium AC maintenance and handyman solutions for Downtown Dubai, The Address, Burj Khalifa residences, and Emaar developments. Our certified team meets the high standards expected in this iconic neighbourhood.',
    services: ['Emaar Building Compliance', 'Luxury Apartment AC', 'Emergency Callouts', 'Painting & Refurbishments'],
    avgResponseTime: '< 30 min',
  },
  {
    name: 'DIFC',
    slug: 'difc',
    emoji: '💼',
    tag: 'Financial District Offices & Residences',
    highlight: 'bg-emerald-50 border-emerald-200',
    badge: 'bg-emerald-100 text-emerald-800',
    description:
      'Commercial-grade AC servicing and office handyman solutions for DIFC businesses and Gate Village residences. We work around business hours and offer after-hours emergency support to minimise downtime.',
    services: ['Commercial AC Servicing', 'Office Fit-out Repairs', 'After-Hours Emergency', 'Data-Room Cooling'],
    avgResponseTime: '< 25 min',
  },
  {
    name: 'Business Bay',
    slug: 'business-bay',
    emoji: '🏢',
    tag: 'Mixed Commercial & Residential',
    highlight: 'bg-rose-50 border-rose-200',
    badge: 'bg-rose-100 text-rose-800',
    description:
      'Reliable AC repair and comprehensive handyman services across Business Bay towers. We serve both corporate offices and luxury apartments, with AMC (Annual Maintenance Contracts) available for building managers.',
    services: ['AMC Contracts', 'Apartment Snagging', 'Ducted & Split AC', 'Waterproofing'],
    avgResponseTime: '< 40 min',
  },
  {
    name: 'Emirates Hills',
    slug: 'emirates-hills',
    emoji: '🏡',
    tag: "Dubai's Most Exclusive Gated Villas",
    highlight: 'bg-teal-50 border-teal-200',
    badge: 'bg-teal-100 text-teal-800',
    description:
      'Discreet, premium handyman and AC services for Emirates Hills mansions. We work with household managers and PAs to schedule around your lifestyle. Central AC, ducted systems, and smart automation expertise.',
    services: ['Central AC Overhaul', 'Landscape & Outdoor Electrical', 'Smart Automation Repairs', 'Concierge Booking'],
    avgResponseTime: 'Same-day priority',
  },
  {
    name: 'JBR & JLT',
    slug: 'jbr-jlt',
    emoji: '🌊',
    tag: 'Beachfront & Lake Towers',
    highlight: 'bg-cyan-50 border-cyan-200',
    badge: 'bg-cyan-100 text-cyan-800',
    description:
      'Fast-response AC repair and handyman services for JBR beachfront apartments and JLT residential towers. Salt-air climate expertise ensuring your AC filters and coils are protected from coastal conditions.',
    services: ['Anti-Corrosion AC Servicing', 'Coastal Electrical Protection', 'Balcony Waterproofing', 'Rapid Response'],
    avgResponseTime: '< 35 min',
  },
  {
    name: 'Dubai Hills & Arabian Ranches',
    slug: 'dubai-hills-arabian-ranches',
    emoji: '🌿',
    tag: 'Family Villa Communities',
    highlight: 'bg-lime-50 border-lime-200',
    badge: 'bg-lime-100 text-lime-800',
    description:
      'Trusted AC maintenance and handyman services for Dubai Hills Estate and Arabian Ranches villa communities. Experienced with Emaar villa layouts, central AC systems, and community-compliant exterior work.',
    services: ['Villa Central AC', 'Outdoor AC Units', 'Community-Compliant Work', 'Annual Service Plans'],
    avgResponseTime: '< 60 min',
  },
]

// ─── Other static data (unchanged) ───────────────────────────────────────────
export default async function Home() {
  const { data: posts } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('published', true)
    .order('created_at', { ascending: false })
    .limit(3)

  const services = [
    {
      icon: Wind,
      title: 'AC Services',
      description: 'Complete AC solutions including installation, repair, and maintenance for all brands.',
      link: '/services#ac',
      gradient: 'cyan' as const,
    },
    {
      icon: Droplets,
      title: 'Plumbing',
      description: 'Expert plumbing services from leak repairs to complete installations.',
      link: '/services#plumbing',
      gradient: 'purple' as const,
    },
    {
      icon: Zap,
      title: 'Electrical',
      description: 'Safe and reliable electrical solutions for homes and offices.',
      link: '/services#electrical',
      gradient: 'magenta' as const,
    },
    {
      icon: Wrench,
      title: 'General Repairs',
      description: 'All types of home repairs and maintenance services.',
      link: '/services#general',
      gradient: 'brand' as const,
    },
  ]

  const features = [
    { icon: Shield, title: 'Licensed & Insured', description: 'Fully certified professionals with comprehensive insurance coverage', iconColor: 'cyan' as const },
    { icon: Clock, title: '24/7 Availability', description: 'Emergency services available round the clock across Dubai', iconColor: 'purple' as const },
    { icon: Star, title: 'Expert Technicians', description: 'Highly trained staff with years of experience', iconColor: 'magenta' as const },
    { icon: CheckCircle, title: 'Quality Guaranteed', description: '100% satisfaction guarantee on all work', iconColor: 'cyan' as const },
    { icon: PhoneIcon, title: 'Fast Response', description: 'Quick response time with same-day service', iconColor: 'purple' as const },
    { icon: MapPin, title: 'All Dubai Areas', description: 'Serving every neighbourhood across Dubai', iconColor: 'magenta' as const },
  ]

  const stats = [
    { number: '5000', suffix: '+', label: 'Happy Customers' },
    { number: '15', suffix: '+', label: 'Years Experience' },
    { number: '24', suffix: '/7', label: 'Available' },
    { number: '100', suffix: '%', label: 'Satisfaction' },
  ]

  const testimonials = [
    { name: 'Ahmed Al-Mansoori', location: 'Dubai Marina', rating: 5, text: 'Excellent AC service! They arrived on time and fixed my AC quickly. Very professional team.', service: 'AC Repair' },
    { name: 'Sarah Johnson', location: 'Downtown Dubai', rating: 5, text: 'Best handyman service in Dubai. They handle everything from plumbing to electrical work with expertise.', service: 'Plumbing' },
    { name: 'Mohammed Hassan', location: 'Jumeirah', rating: 5, text: 'Called them for an emergency AC repair. They came within 30 minutes and fixed it perfectly!', service: 'Emergency Service' },
    { name: 'Fatima Al-Rashidi', location: 'Palm Jumeirah', rating: 5, text: 'Incredible service for our villa on Palm. Professional, punctual, and very reasonably priced for the quality.', service: 'AC Maintenance' },
    { name: 'James Whitfield', location: 'DIFC', rating: 5, text: 'Sorted our office AC during peak summer — zero downtime. They work around our business hours too.', service: 'Commercial AC' },
    { name: 'Layla Al-Farsi', location: 'Emirates Hills', rating: 5, text: 'They manage all our villa maintenance contracts. Discreet, reliable, and always send senior technicians.', service: 'AMC Contract' },
  ]

  return (
    <>
      {/* ── Structured Data ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div>
        {/* ── Hero Section ── */}
        <section className="relative bg-gradient-to-br from-gray-50 via-white to-primary-50 py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
            <div className="absolute top-20 right-0 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-purple/10 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-magenta/5 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white shadow-brand border border-brand-purple/20">
                <span className="text-sm font-semibold bg-gradient-brand bg-clip-text text-transparent">
                  ⚡ Dubai's #1 AC & Handyman Service
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-gray-900">Professional </span>
                <span className="bg-gradient-brand bg-clip-text text-transparent">AC & Home</span>
                <span className="text-gray-900"> Services in Dubai</span>
              </h1>

              {/* Location pills — inline keyword density + UX signal */}
              <div className="flex flex-wrap justify-center gap-2" aria-label="Service areas">
                {['Palm Jumeirah', 'Dubai Marina', 'Downtown', 'DIFC', 'Business Bay', 'Emirates Hills', 'JBR', 'Dubai Hills'].map(
                  (area) => (
                    <span
                      key={area}
                      className="px-3 py-1 text-xs font-semibold rounded-full bg-white border border-gray-200 text-gray-600 shadow-sm"
                    >
                      <MapPin className="inline w-3 h-3 mr-1 text-brand-cyan" aria-hidden="true" />
                      {area}
                    </span>
                  )
                )}
              </div>

              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Expert AC repair, installation, plumbing, electrical services &amp; handyman solutions across Palm Jumeirah, Dubai Marina, Downtown Dubai, DIFC, Business Bay, and all premium Dubai neighbourhoods. Available 24/7. Licensed, insured, trusted by over 5,000 customers.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="tel:+971502175305" variant="gradient" size="xl" icon={PhoneIcon} aria-label="Call for 24/7 emergency AC and handyman services in Dubai">
                  Call Now — 24/7
                </Button>
                <Button href="/contact" variant="outline" size="xl" icon={ArrowRight} aria-label="Book AC repair or handyman service online">
                  Book Service
                </Button>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <div className="flex" role="img" aria-label="4.9 out of 5 stars rating">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" aria-hidden="true" />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-gray-700">4.9/5 Rating</span>
                </div>
                <div className="h-8 w-px bg-gray-300" aria-hidden="true" />
                <div className="text-sm font-semibold text-gray-700">5000+ Happy Customers</div>
                <div className="h-8 w-px bg-gray-300" aria-hidden="true" />
                <div className="text-sm font-semibold text-gray-700">15+ Years Experience</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Stats ── */}
        <StatsSection stats={stats} variant="light" />

        {/* ── Services ── */}
        <section className="py-20 bg-white" aria-labelledby="services-heading">
          <div className="container mx-auto px-4">
            <SectionHeading
              badge="Our Services"
              title="Complete Home Solutions"
              description="Professional AC repair, plumbing, electrical, and handyman services for all your home maintenance needs across Dubai"
              gradient
              id="services-heading"
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
              {services.map((service, idx) => (
                <ServiceCard key={idx} icon={service.icon} title={service.title} description={service.description} href={service.link} gradient={service.gradient} />
              ))}
            </div>

            <div className="mt-16 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Dubai's Most Trusted AC and Handyman Service Provider
              </h2>
              <div className="prose prose-lg text-gray-600 space-y-4">
                <p>
                  Looking for reliable AC repair services in Dubai? We provide comprehensive air conditioning solutions including AC installation, repair, maintenance, and emergency services across all Dubai areas — from the ultra-luxury villas of Palm Jumeirah and Emirates Hills to high-rise towers in Dubai Marina, Downtown Dubai, and DIFC.
                </p>
                <p>
                  Beyond AC services, we offer complete handyman solutions for your home or office. From plumbing repairs and electrical work to general maintenance, our skilled professionals deliver quality workmanship with a 100% satisfaction guarantee across every Dubai neighbourhood.
                </p>
                <p>
                  We understand that home emergencies don't follow a schedule. That's why we offer 24/7 emergency services throughout Dubai Marina, Downtown Dubai, Jumeirah, Business Bay, DIFC, Palm Jumeirah, Emirates Hills, JBR, Dubai Hills Estate, Arabian Ranches, and all other Dubai communities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Why Choose Us ── */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white" aria-labelledby="features-heading">
          <div className="container mx-auto px-4">
            <SectionHeading badge="Why Choose Us" title="Your Trusted Partner in Dubai" description="We deliver excellence in every AC repair, plumbing, and handyman service" id="features-heading" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              {features.map((feature, idx) => (
                <FeatureCard key={idx} icon={feature.icon} title={feature.title} description={feature.description} iconColor={feature.iconColor} />
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════
            PREMIUM LOCATION SECTIONS — Core SEO addition
            Each card = dedicated keyword cluster + schema-aligned content
            ════════════════════════════════════════════════════════════════════ */}
        <section
          className="py-24 bg-white"
          aria-labelledby="locations-heading"
          id="service-areas"
        >
          <div className="container mx-auto px-4">
            <SectionHeading
              badge="Service Areas"
              title="Premium AC & Handyman Services Across Dubai"
              description="We specialise in high-end residential and commercial properties across Dubai's most prestigious communities — with tailored services for each neighbourhood's unique needs."
              gradient
              id="locations-heading"
            />

            {/* ── Location grid ── */}
            <div className="grid md:grid-cols-2 xl:grid-cols-2 gap-8 mt-16">
              {premiumLocations.map((loc) => (
                <article
                  key={loc.slug}
                  id={`service-area-${loc.slug}`}
                  className={`rounded-2xl border p-8 ${loc.highlight} transition-shadow hover:shadow-lg`}
                  aria-label={`AC and handyman services in ${loc.name}`}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-3xl" aria-hidden="true">{loc.emoji}</span>
                        <h3 className="text-2xl font-bold text-gray-900">
                          {/* H3 with location keyword naturally embedded */}
                          AC &amp; Handyman Services in {loc.name}
                        </h3>
                      </div>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${loc.badge}`}>
                        {loc.tag}
                      </span>
                    </div>
                    <div className="text-right flex-shrink-0 ml-4">
                      <p className="text-xs text-gray-500 mb-0.5">Response time</p>
                      <p className="text-sm font-bold text-gray-800">{loc.avgResponseTime}</p>
                    </div>
                  </div>

                  {/* Description — SEO prose with location keywords */}
                  <p className="text-gray-700 leading-relaxed mb-5 text-sm">
                    {loc.description}
                  </p>

                  {/* Services offered — keyword-dense bullet list */}
                  <ul
                    className="grid grid-cols-2 gap-2 mb-6"
                    aria-label={`Services offered in ${loc.name}`}
                  >
                    {loc.services.map((svc) => (
                      <li key={svc} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" aria-hidden="true" />
                        {svc}
                      </li>
                    ))}
                  </ul>

                  {/* CTA link — internal anchor + call */}
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={`/services/${loc.slug}`}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-brand-cyan hover:underline"
                      aria-label={`Learn more about our services in ${loc.name}`}
                    >
                      View {loc.name} services <ChevronRight className="w-4 h-4" aria-hidden="true" />
                    </a>
                    <a
                      href="tel:+971502175305"
                      className="inline-flex items-center gap-1 text-sm font-semibold text-gray-600 hover:text-brand-cyan transition-colors"
                      aria-label={`Call us for ${loc.name} services`}
                    >
                      <PhoneIcon className="w-4 h-4" aria-hidden="true" />
                      Call Now
                    </a>
                  </div>
                </article>
              ))}
            </div>

            {/* ── Location quick-links bar — flat internal links for crawlability ── */}
            <nav
              className="mt-16 p-6 bg-gray-50 rounded-2xl border border-gray-100"
              aria-label="All Dubai service areas"
            >
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-4 text-center">
                Also serving — AC repair &amp; handyman services in:
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  'Jumeirah Village Circle',
                  'Al Barsha',
                  'Mirdif',
                  'Deira',
                  'Bur Dubai',
                  'Oud Metha',
                  'Dubai Silicon Oasis',
                  'International City',
                  'Motor City',
                  'Sports City',
                  'Al Nahda',
                  'Qusais',
                  'Muhaisnah',
                  'Al Quoz',
                  'Tecom',
                  'Meadows',
                  'Springs',
                  'The Lakes',
                  'Discovery Gardens',
                  'Remraam',
                ].map((area) => (
                  <a
                    key={area}
                    href={`/services/${area.toLowerCase().replace(/\s+/g, '-')}`}
                    className="px-3 py-1.5 text-sm text-gray-600 bg-white rounded-lg border border-gray-200 hover:border-brand-cyan hover:text-brand-cyan transition-colors shadow-sm"
                    aria-label={`AC repair and handyman services in ${area}, Dubai`}
                  >
                    {area}
                  </a>
                ))}
              </div>
            </nav>
          </div>
        </section>

        {/* ── Testimonials (expanded to 6 — more premium-area social proof) ── */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white" aria-labelledby="testimonials-heading">
          <div className="container mx-auto px-4">
            <SectionHeading
              badge="Customer Reviews"
              title="Trusted Across Dubai's Top Communities"
              description="Real reviews from satisfied customers in Palm Jumeirah, DIFC, Emirates Hills, and beyond"
              gradient
              id="testimonials-heading"
            />
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              {testimonials.map((testimonial, idx) => (
                <TestimonialCard
                  key={idx}
                  name={testimonial.name}
                  location={testimonial.location}
                  rating={testimonial.rating}
                  text={testimonial.text}
                  service={testimonial.service}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ (location-enriched for SEO) ── */}
        <section className="py-20 bg-white" aria-labelledby="faq-heading">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 id="faq-heading" className="text-4xl font-bold text-center mb-12">
              Frequently Asked Questions — Dubai AC &amp; Handyman Services
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: 'Do you offer 24/7 emergency AC repair in Dubai?',
                  a: 'Yes — we provide 24/7 emergency AC repair services across all Dubai areas, including Palm Jumeirah, Dubai Marina, Downtown Dubai, DIFC, Business Bay, and Emirates Hills. Our technicians are on call round the clock for urgent breakdowns.',
                },
                {
                  q: 'Do you provide AC repair in Palm Jumeirah villas?',
                  a: 'Absolutely. We are one of the most trusted AC service providers on Palm Jumeirah. Our technicians are experienced with the villa layouts, premium HVAC brands, and the specific requirements of beachfront properties on the Palm.',
                },
                {
                  q: 'Can you service commercial AC units in DIFC and Business Bay?',
                  a: 'Yes. We offer commercial-grade AC maintenance, repair, and Annual Maintenance Contracts (AMCs) for offices and mixed-use buildings in DIFC, Business Bay, and Dubai Marina. We schedule around business hours to minimise disruption.',
                },
                {
                  q: 'Which premium areas of Dubai do you cover?',
                  a: 'We cover all premium Dubai areas including Palm Jumeirah, Dubai Marina, Downtown Dubai, DIFC, Business Bay, Emirates Hills, JBR, Dubai Hills Estate, Arabian Ranches, Jumeirah, Meadows, Springs, Al Barsha, Mirdif, and more.',
                },
                {
                  q: 'Are your technicians licensed and insured?',
                  a: 'Yes. All our technicians are fully licensed, certified, and insured. We maintain high professional standards and comply with all Dubai regulations for AC repair and handyman services.',
                },
                {
                  q: 'What AC brands do you service across Dubai?',
                  a: 'We service all major AC brands including LG, Samsung, Daikin, Mitsubishi, Carrier, York, Trane, and more. Our technicians handle both residential split units and commercial/centralised systems across all Dubai properties.',
                },
                {
                  q: 'Do you offer Annual Maintenance Contracts (AMC) for Dubai properties?',
                  a: 'Yes. We offer flexible AMC plans for villas, apartments, and commercial properties across Dubai. AMC customers in premium areas like Emirates Hills, Palm Jumeirah, and Dubai Hills receive priority response and scheduled seasonal tune-ups.',
                },
              ].map(({ q, a }, idx) => (
                <div key={idx} className="bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{q}</h3>
                  <p className="text-gray-600 leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <CTASection
          title="Need Immediate Assistance Anywhere in Dubai?"
          description="From Palm Jumeirah villas to DIFC offices — our expert team is ready 24/7 across all Dubai areas. Call now for fast, professional AC repair and handyman services."
          primaryButtonText="Call +971 50 217 5305"
          primaryButtonHref="tel:+971502175305"
          secondaryButtonText="Book Online"
          secondaryButtonHref="/contact"
        />
      </div>
    </>
  )
}