import Image from 'next/image'
import type { Metadata } from 'next'
import { 
  Award,
  Users,
  Clock,
  Shield,
  Heart,
  Target,
  Lightbulb,
  CheckCircle,
  Phone,
  ArrowRight,
  Star,
  ThumbsUp,
  Zap,
  TrendingUp,
  Wind,
  Wrench,
  Droplets,
  Building2,
  Home,
  BadgeCheck
} from 'lucide-react'
import Button from '../../components/ui/Button'
import SectionHeading from '../../components/ui/SectionHeading'
import CTASection from '../../components/ui/CTASection'

export const metadata: Metadata = {
  title: 'About Us | Happy Brother AC - Dubai\'s Trusted AC & Handyman Service Provider',
  description: 'Learn about Happy Brother AC - 15+ years of excellence in AC repair, plumbing, electrical & handyman services in Dubai. Licensed professionals, 5000+ happy customers, available 24/7.',
  keywords: 'about Happy Brother AC, AC repair company Dubai, handyman services Dubai, professional technicians Dubai, licensed contractors Dubai',
  openGraph: {
    title: 'About Happy Brother AC | Professional Services in Dubai',
    description: '15+ years of trusted service in Dubai. Expert AC repair, plumbing, electrical & handyman solutions. Licensed, insured, and customer-focused.',
    url: 'https://happybrotherac.com/about',
    images: [
      {
        url: 'https://happybrotherac.com/about-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Happy Brother AC Team - Professional Services in Dubai',
      },
    ],
  },
  alternates: {
    canonical: 'https://happybrotherac.com/about',
  },
}

// Structured Data for About Page
const aboutStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  mainEntity: {
    '@type': 'LocalBusiness',
    '@id': 'https://happybrotherac.com/#business',
    name: 'Happy Brother AC',
    description: 'Professional AC repair and handyman services in Dubai with over 15 years of experience',
    foundingDate: '2009',
    telephone: '+971502175305',
    url: 'https://happybrotherac.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dubai',
      addressRegion: 'Dubai',
      addressCountry: 'AE',
    },
    areaServed: {
      '@type': 'City',
      name: 'Dubai',
    },
  },
}

export default function AboutPage() {
  const stats = [
    {
      icon: Users,
      number: '5000',
      suffix: '+',
      label: 'Happy Customers',
      color: 'cyan' as const
    },
    {
      icon: Award,
      number: '15',
      suffix: '+',
      label: 'Years Experience',
      color: 'purple' as const
    },
    {
      icon: CheckCircle,
      number: '10000',
      suffix: '+',
      label: 'Projects Completed',
      color: 'magenta' as const
    },
    {
      icon: Clock,
      number: '24',
      suffix: '/7',
      label: 'Available Service',
      color: 'cyan' as const
    }
  ]

  const values = [
    {
      icon: Shield,
      title: 'Quality First',
      description: 'We never compromise on quality. Every service is delivered with precision and care, using only the best materials and techniques.',
      color: 'cyan' as const
    },
    {
      icon: Heart,
      title: 'Customer-Centric',
      description: 'Your satisfaction is our priority. We listen, understand, and deliver solutions that exceed expectations every time.',
      color: 'purple' as const
    },
    {
      icon: BadgeCheck,
      title: 'Professional Excellence',
      description: 'Our licensed and certified technicians maintain the highest standards of professionalism and expertise in every job.',
      color: 'magenta' as const
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We stay updated with the latest technologies and methods to provide you with modern, efficient solutions.',
      color: 'cyan' as const
    },
    {
      icon: ThumbsUp,
      title: 'Reliability',
      description: 'Count on us to be there when you need us. We honor our commitments and deliver on our promises.',
      color: 'purple' as const
    },
    {
      icon: Target,
      title: 'Continuous Improvement',
      description: 'We constantly evolve and improve our services based on customer feedback and industry best practices.',
      color: 'magenta' as const
    }
  ]

  const whyChooseUs = [
    {
      icon: Award,
      title: 'Licensed & Certified',
      description: 'All our technicians are fully licensed, certified, and undergo regular training to stay current with industry standards.'
    },
    {
      icon: Shield,
      title: 'Fully Insured',
      description: 'Comprehensive insurance coverage protects you and your property during all service appointments.'
    },
    {
      icon: Star,
      title: 'Experienced Professionals',
      description: 'Our team brings 15+ years of combined experience across all service categories.'
    },
    {
      icon: Clock,
      title: '24/7 Emergency Service',
      description: 'Round-the-clock availability for urgent repairs and emergencies across all Dubai areas.'
    },
    {
      icon: CheckCircle,
      title: 'Quality Guarantee',
      description: '100% satisfaction guarantee on all work with warranty coverage on repairs and installations.'
    },
    {
      icon: Zap,
      title: 'Fast Response',
      description: 'Same-day service available with quick response times to minimize your inconvenience.'
    },
    {
      icon: ThumbsUp,
      title: 'Transparent Pricing',
      description: 'Clear, upfront pricing with no hidden charges. You know exactly what you\'re paying for.'
    },
    {
      icon: Users,
      title: 'Trusted by Thousands',
      description: 'Over 5,000 satisfied customers across Dubai trust us for their home service needs.'
    }
  ]

  const milestones = [
    {
      year: '2009',
      title: 'Company Founded',
      description: 'Happy Brother AC was established with a vision to provide reliable AC and handyman services in Dubai.'
    },
    {
      year: '2012',
      title: 'Expanded Services',
      description: 'Added comprehensive plumbing and electrical services to our portfolio, becoming a full-service provider.'
    },
    {
      year: '2015',
      title: '1000+ Customers',
      description: 'Reached our first major milestone of serving over 1,000 satisfied customers across Dubai.'
    },
    {
      year: '2018',
      title: 'Team Growth',
      description: 'Expanded our team to 20+ skilled technicians to better serve the growing demand.'
    },
    {
      year: '2020',
      title: '24/7 Service Launch',
      description: 'Introduced round-the-clock emergency service to support customers anytime, anywhere.'
    },
    {
      year: '2023',
      title: '5000+ Happy Clients',
      description: 'Celebrated serving over 5,000 happy customers with consistently high satisfaction ratings.'
    }
  ]

  const services = [
    { icon: Wind, name: 'AC Services' },
    { icon: Droplets, name: 'Plumbing' },
    { icon: Zap, name: 'Electrical' },
    { icon: Wrench, name: 'Handyman' },
  ]

  const certifications = [
    'Licensed by Dubai Municipality',
    'DCD Approved Contractor',
    'ISO 9001:2015 Certified',
    'HVAC Certified Technicians',
    'Electrical Safety Certified',
    'Plumbing License Holders',
    'Insurance Coverage',
    'Trade License Verified'
  ]

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutStructuredData) }}
      />

      <div className="bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 md:py-32 overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-cyan/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-purple/20 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-magenta/10 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                <span className="text-sm font-semibold text-brand-cyan">
                  ⭐ 15+ Years of Excellence
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Dubai's Most Trusted
                <span className="block bg-gradient-brand bg-clip-text text-transparent mt-2">
                  AC & Handyman Service
                </span>
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                Since 2009, we've been serving Dubai with exceptional AC repair, plumbing, electrical, and handyman services. Our commitment to quality and customer satisfaction has made us the preferred choice for thousands of homeowners and businesses.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="text-center space-y-4 p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-brand-cyan/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-brand-${stat.color} to-brand-${stat.color}/70 rounded-xl`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="text-4xl md:text-5xl font-bold text-gray-900">
                      {stat.number}
                      <span className={`text-brand-${stat.color}`}>{stat.suffix}</span>
                    </div>
                    <div className="text-gray-600 font-medium mt-2">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Image Side */}
                <div className="space-y-6">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300">
                    {/* Placeholder - Replace with actual team photo */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Users className="w-32 h-32 text-gray-400" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="relative rounded-xl overflow-hidden shadow-lg aspect-square bg-gradient-to-br from-gray-200 to-gray-300">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Wind className="w-16 h-16 text-gray-400" />
                      </div>
                    </div>
                    <div className="relative rounded-xl overflow-hidden shadow-lg aspect-square bg-gradient-to-br from-gray-200 to-gray-300">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Wrench className="w-16 h-16 text-gray-400" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="space-y-6">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-brand-cyan/10 to-brand-purple/10 border border-brand-cyan/20">
                    <span className="text-sm font-semibold text-gray-700">Our Story</span>
                  </div>

                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                    Building Trust, One Service at a Time
                  </h2>

                  <div className="prose prose-lg text-gray-600 space-y-4">
                    <p>
                      Happy Brother AC began in 2009 with a simple mission: to provide honest, reliable, and professional home services to the people of Dubai. What started as a small AC repair business has grown into a comprehensive home service company trusted by thousands.
                    </p>
                    <p>
                      Our founder recognized the need for a service provider that truly cares about customer satisfaction. Too often, homeowners faced unreliable technicians, hidden charges, and subpar work. We set out to change that narrative.
                    </p>
                    <p>
                      Today, we're proud to be one of Dubai's most trusted names in AC repair, plumbing, electrical work, and general handyman services. Our success is built on three pillars: quality workmanship, transparent pricing, and genuine care for our customers.
                    </p>
                    <p>
                      With a team of over 20 licensed professionals and state-of-the-art equipment, we handle everything from emergency AC repairs at 3 AM to complete home maintenance projects. Every member of our team shares our commitment to excellence and customer satisfaction.
                    </p>
                  </div>

                  <div className="pt-4">
                    <Button
                      href="/services"
                      variant="gradient"
                      icon={ArrowRight}
                    >
                      Explore Our Services
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <SectionHeading
              badge="Our Values"
              title="What Drives Us"
              description="The principles that guide everything we do"
              gradient
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              {values.map((value, idx) => (
                <div
                  key={idx}
                  className="group p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-brand-cyan/30 hover:shadow-xl transition-all duration-300"
                >
                  <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-brand-${value.color} to-brand-${value.color}/70 rounded-xl mb-6 group-hover:scale-110 transition-transform`}>
                    <value.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Journey/Timeline */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <SectionHeading
              badge="Our Journey"
              title="Milestones & Achievements"
              description="A look at our growth over the years"
            />

            <div className="mt-16 max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline Line */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-brand-cyan via-brand-purple to-brand-magenta" aria-hidden="true" />

                <div className="space-y-12">
                  {milestones.map((milestone, idx) => (
                    <div
                      key={idx}
                      className={`relative flex items-center ${
                        idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                      }`}
                    >
                      {/* Content */}
                      <div className={`flex-1 ${idx % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:border-brand-cyan/30 hover:shadow-xl transition-all duration-300">
                          <div className="inline-flex items-center justify-center px-4 py-1 bg-gradient-brand text-white rounded-full text-sm font-bold mb-3">
                            {milestone.year}
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            {milestone.title}
                          </h3>
                          <p className="text-gray-600">
                            {milestone.description}
                          </p>
                        </div>
                      </div>

                      {/* Center Dot */}
                      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-brand rounded-full border-4 border-white shadow-lg" />

                      {/* Spacer */}
                      <div className="flex-1 hidden md:block" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <SectionHeading
              badge="Why Choose Us"
              title="The Happy Brother AC Advantage"
              description="What makes us different from the rest"
              gradient
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
              {whyChooseUs.map((item, idx) => (
                <div
                  key={idx}
                  className="text-center space-y-4 p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-brand-cyan/30 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-brand rounded-xl group-hover:scale-110 transition-transform">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications & Licenses */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <SectionHeading
              badge="Certified & Licensed"
              title="Our Credentials"
              description="Fully certified and compliant with Dubai regulations"
            />

            <div className="max-w-4xl mx-auto mt-16">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {certifications.map((cert, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-brand-cyan/30 hover:shadow-md transition-all duration-200"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-brand rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-sm font-semibold text-gray-700">
                      {cert}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Service Coverage */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <SectionHeading
                badge="Service Coverage"
                title="We Serve All of Dubai"
                description="Professional services available across every neighborhood"
                gradient
              />

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {services.map((service, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-brand-cyan/30 hover:shadow-lg transition-all duration-300 group"
                  >
                    <service.icon className="w-12 h-12 text-brand-cyan mx-auto mb-3 group-hover:scale-110 transition-transform" />
                    <div className="text-sm font-semibold text-gray-700">
                      {service.name}
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-lg text-gray-600 max-w-2xl mx-auto pt-8">
                From Dubai Marina to Deira, from Jumeirah to Dubai Silicon Oasis - we provide reliable service across all Dubai neighborhoods, 24 hours a day, 7 days a week.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <SectionHeading
                badge="Our Team"
                title="Meet Our Professionals"
                description="Experienced, licensed, and dedicated to your satisfaction"
              />

              <div className="grid md:grid-cols-3 gap-8 mt-16">
                {[
                  { role: 'AC Technicians', count: '8+', icon: Wind },
                  { role: 'Electricians', count: '5+', icon: Zap },
                  { role: 'Plumbers', count: '4+', icon: Droplets },
                  { role: 'Handymen', count: '6+', icon: Wrench },
                  { role: 'Carpenters', count: '3+', icon: Building2 },
                  { role: 'Painters', count: '3+', icon: Home },
                ].map((team, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-xl bg-white shadow-sm border border-gray-100 hover:border-brand-cyan/30 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-16 h-16 bg-gradient-brand rounded-xl flex items-center justify-center mx-auto mb-4">
                      <team.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">
                      {team.count}
                    </div>
                    <div className="text-gray-600 font-medium">
                      {team.role}
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-gray-600 pt-8">
                Every team member is background-checked, licensed, and trained to deliver exceptional service. We invest in continuous training to ensure our team stays current with the latest techniques and technologies.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection
          title="Experience the Happy Brother AC Difference"
          description="Join thousands of satisfied customers who trust us for all their home service needs. Available 24/7 across Dubai."
          primaryButtonText="Call +971 50 217 5305"
          primaryButtonHref="tel:+971502175305"
          secondaryButtonText="Book a Service"
          secondaryButtonHref="/contact"
        />
      </div>
    </>
  )
}