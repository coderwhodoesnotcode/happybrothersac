import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import {
  CheckCircle,
  Phone,
  ArrowLeft,
  ArrowRight,
  Clock,
  ShieldCheck,
  Star,
} from 'lucide-react'
import { services } from '@/lib/services-data'
import CTASection from '@/components/ui/CTASection'

// ── Tell Next.js which slugs exist at build time ──
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

// ── Per-page SEO metadata ──
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)
  if (!service) return {}

  return {
    title: service.metaTitle,
    description: service.metaDesc,
    alternates: {
      canonical: `https://happybrotherac.com/services/${service.slug}`,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDesc,
      url: `https://happybrotherac.com/services/${service.slug}`,
      images: [{ url: service.image, width: 1200, height: 630, alt: service.label }],
    },
  }
}

// ── Page component ──
export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)
  if (!service) notFound()

  const idx = services.indexOf(service)
  const prev = services[idx - 1] ?? null
  const next = services[idx + 1] ?? null

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.label,
    description: service.metaDesc,
    url: `https://happybrotherac.com/services/${service.slug}`,
    image: service.image,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Happy Brother Technical Services',
      telephone: '+971502175305',
      url: 'https://happybrotherac.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Dubai',
        addressCountry: 'AE',
      },
    },
    areaServed: { '@type': 'City', name: 'Dubai' },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="bg-white">

        {/* ── Breadcrumb ── */}
        <div className="border-b border-gray-100 bg-gray-50">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex items-center gap-2 text-sm text-gray-500">
              <Link href="/" className="hover:text-brand-cyan transition-colors">Home</Link>
              <span>/</span>
              <Link href="/services" className="hover:text-brand-cyan transition-colors">Services</Link>
              <span>/</span>
              <span className="text-gray-900 font-medium">{service.label}</span>
            </nav>
          </div>
        </div>

        {/* ── Hero ── */}
        <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-cyan/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-purple/20 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">

              {/* Left — text */}
              <div className="space-y-6">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-brand-cyan transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to All Services
                </Link>

                {/* <div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-brand-${service.color} to-brand-${service.color}/70 rounded-2xl shadow-lg`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </div> */}

                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  {service.label}
                  <span className="block text-brand-cyan mt-1">in Dubai</span>
                </h1>

                <p className="text-lg text-gray-300 leading-relaxed">
                  {service.longDescription}
                </p>

                <div className="flex flex-wrap gap-3">
                  {[
                    { icon: Clock,       text: '24/7 Service' },
                    { icon: ShieldCheck, text: 'Licensed & Insured' },
                    { icon: Star,        text: '5000+ Customers' },
                  ].map((badge) => (
                    <div
                      key={badge.text}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-sm text-gray-200"
                    >
                      <badge.icon className="w-4 h-4 text-brand-cyan" />
                      {badge.text}
                    </div>
                  ))}
                </div>

                <a
                  href="tel:+971502175305"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-brand text-white font-bold rounded-xl hover:opacity-90 transition-opacity text-lg"
                >
                  <Phone className="w-5 h-5" />
                  Call Now — +971 50 217 5305
                </a>
              </div>

              {/* Right — image */}
              <div className="relative aspect-video lg:h-auto rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={service.image}
                  alt={service.label}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── What's Included ── */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
              What&apos;s Included
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {service.features.map((f) => (
                <div
                  key={f}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-100"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-brand rounded-xl flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <p className="font-semibold text-gray-900 pt-2">{f}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Prev / Next navigation ── */}
        <section className="py-10 border-t border-gray-100">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="flex justify-between items-center gap-4">
              {prev ? (
                <Link
                  href={`/services/${prev.slug}`}
                  className="flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-brand-cyan transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  {prev.label}
                </Link>
              ) : <div />}
              {next ? (
                <Link
                  href={`/services/${next.slug}`}
                  className="flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-brand-cyan transition-colors"
                >
                  {next.label}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              ) : <div />}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <CTASection
          title={`Need ${service.label} Today?`}
          description="Our licensed professionals are available 24/7 across all Dubai areas. Call now for a free quote."
          primaryButtonText="Call +971 50 217 5305"
          primaryButtonHref="tel:+971502175305"
          secondaryButtonText="See All Services"
          secondaryButtonHref="/services"
        />
      </div>
    </>
  )
}