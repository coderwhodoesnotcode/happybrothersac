import Link from 'next/link'
import { MapPin, Phone, Clock, CheckCircle } from 'lucide-react'

export const metadata = {
  title: 'Service Areas in Dubai',
  description: 'Professional handyman services available across all Dubai areas including Marina, Downtown, Jumeirah, JBR, Business Bay and more. 24/7 service.',
  keywords: ['handyman Dubai Marina', 'handyman Downtown Dubai', 'handyman Jumeirah', 'handyman JBR', 'handyman Business Bay'],
}

export default function AreasPage() {
  const areas = [
    {
      name: 'Dubai Marina',
      slug: 'dubai-marina',
      description: 'Serving all residential and commercial properties in Dubai Marina with quick response times.',
      popular: true
    },
    {
      name: 'Downtown Dubai',
      slug: 'downtown-dubai',
      description: 'Expert handyman services for homes and offices in Downtown Dubai including Burj Khalifa area.',
      popular: true
    },
    {
      name: 'Jumeirah',
      slug: 'jumeirah',
      description: 'Quality handyman services for Jumeirah 1, 2, 3 and surrounding areas.',
      popular: true
    },
    {
      name: 'Palm Jumeirah',
      slug: 'palm-jumeirah',
      description: 'Specialized services for villas and apartments on Palm Jumeirah.',
      popular: true
    },
    {
      name: 'Business Bay',
      slug: 'business-bay',
      description: 'Commercial and residential handyman services in Business Bay.',
      popular: false
    },
    {
      name: 'JBR (Jumeirah Beach Residence)',
      slug: 'jbr',
      description: 'Professional maintenance services for JBR towers and properties.',
      popular: true
    },
    {
      name: 'Arabian Ranches',
      slug: 'arabian-ranches',
      description: 'Villa maintenance and repair services in Arabian Ranches community.',
      popular: false
    },
    {
      name: 'Dubai Hills',
      slug: 'dubai-hills',
      description: 'Comprehensive handyman services for Dubai Hills Estate residents.',
      popular: false
    },
    {
      name: 'JLT (Jumeirah Lakes Towers)',
      slug: 'jlt',
      description: 'Quick response services for all JLT clusters and buildings.',
      popular: false
    },
    {
      name: 'Deira',
      slug: 'deira',
      description: 'Serving old and new Deira with all types of handyman services.',
      popular: false
    },
    {
      name: 'Bur Dubai',
      slug: 'bur-dubai',
      description: 'Reliable handyman services throughout Bur Dubai area.',
      popular: false
    },
    {
      name: 'Al Barsha',
      slug: 'al-barsha',
      description: 'Al Barsha 1, 2, and 3 handyman services including Mall of Emirates area.',
      popular: false
    },
    {
      name: 'Mirdif',
      slug: 'mirdif',
      description: 'Professional home maintenance services in Mirdif and surrounding areas.',
      popular: false
    },
    {
      name: 'Silicon Oasis',
      slug: 'silicon-oasis',
      description: 'Expert handyman services for Dubai Silicon Oasis residents.',
      popular: false
    },
    {
      name: 'International City',
      slug: 'international-city',
      description: 'Affordable and reliable handyman services for International City.',
      popular: false
    },
    {
      name: 'Discovery Gardens',
      slug: 'discovery-gardens',
      description: 'Quality maintenance services for Discovery Gardens community.',
      popular: false
    },
    {
      name: 'Sports City',
      slug: 'sports-city',
      description: 'Handyman services for Dubai Sports City residences and facilities.',
      popular: false
    },
    {
      name: 'Motor City',
      slug: 'motor-city',
      description: 'Professional repair and maintenance in Motor City area.',
      popular: false
    },
    {
      name: 'Jumeirah Village Circle (JVC)',
      slug: 'jvc',
      description: 'Comprehensive handyman solutions for JVC residents.',
      popular: false
    },
    {
      name: 'Jumeirah Village Triangle (JVT)',
      slug: 'jvt',
      description: 'Expert services for all JVT townhouses and apartments.',
      popular: false
    }
  ]

  const popularAreas = areas.filter(area => area.popular)
  const otherAreas = areas.filter(area => !area.popular)

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Areas We Serve in Dubai</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional handyman services available across all Dubai neighborhoods with fast response times
          </p>
        </div>

        {/* Popular Areas */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Popular Service Areas</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}`}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition border-l-4 border-blue-600 group"
              >
                <div className="flex items-start space-x-4">
                  <MapPin className="w-8 h-8 text-blue-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-xl mb-2 group-hover:text-blue-600">{area.name}</h3>
                    <p className="text-gray-600 text-sm mb-3">{area.description}</p>
                    <div className="flex items-center space-x-2 text-sm text-green-600">
                      <CheckCircle className="w-4 h-4" />
                      <span>Available 24/7</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Other Areas */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">All Service Areas</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {otherAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}`}
                className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition border border-gray-200 hover:border-blue-600 group"
              >
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <div>
                    <h3 className="font-semibold group-hover:text-blue-600">{area.name}</h3>
                    <p className="text-xs text-gray-500">24/7 Available</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Coverage Map Info */}
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 md:p-12 mb-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Complete Dubai Coverage</h2>
            <p className="text-lg text-gray-700 mb-6">
              We provide professional handyman services across all areas of Dubai, from the iconic Dubai Marina to the growing communities of Dubai South. Our strategically located teams ensure quick response times no matter where you are in the city.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-start space-x-3">
                <Clock className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-1">Fast Response</h3>
                  <p className="text-sm text-gray-600">Average 30-minute response time</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-1">All Emirates</h3>
                  <p className="text-sm text-gray-600">Serving entire Dubai emirate</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-1">24/7 Support</h3>
                  <p className="text-sm text-gray-600">Always available for emergencies</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Don't See Your Area */}
        <div className="bg-blue-600 text-white rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Don't See Your Area Listed?</h2>
          <p className="text-xl mb-8 opacity-90">
            We serve all of Dubai! If your specific area isn't listed above, give us a call and we'll be happy to assist you.
          </p>
          <a 
            href="tel:+971501234567" 
            className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 text-lg"
          >
            <Phone className="w-6 h-6" />
            <span>Call +971 50 123 4567</span>
          </a>
        </div>
      </div>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Handyman Services",
            "areaServed": areas.map(area => ({
              "@type": "City",
              "name": area.name
            }))
          })
        }}
      />
    </div>
  )
}