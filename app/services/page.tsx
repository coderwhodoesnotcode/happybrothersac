import Image from 'next/image'
import type { Metadata } from 'next'
import { 
  Wind, 
  Droplets, 
  Zap, 
  Wrench, 
  Hammer,
  Paintbrush,
  DoorOpen,
  Lightbulb,
  Droplet,
  Fan,
  Thermometer,
  Shield,
  CheckCircle,
  Phone,
  ArrowRight,
  Home,
  Building2,
  Drill,
  Settings,
  RefreshCw,
  Clock,
  Award,
  Users
} from 'lucide-react'
import Button from '../../components/ui/Button'
import SectionHeading from '../../components/ui/SectionHeading'
import CTASection from '../../components/ui/CTASection'

export const metadata: Metadata = {
  title: 'Professional Services in Dubai | AC, Plumbing, Electrical & Handyman | Happy Brother AC',
  description: 'Complete home and office services in Dubai: AC repair & installation, plumbing, electrical work, carpentry, painting, and all handyman services. Licensed professionals available 24/7. Call +971 50 217 5305',
  keywords: 'AC services Dubai, plumbing services Dubai, electrical services Dubai, handyman Dubai, carpentry Dubai, painting services Dubai, home repair Dubai, office maintenance Dubai',
  openGraph: {
    title: 'Professional Services in Dubai | Happy Brother AC',
    description: 'Expert AC, plumbing, electrical, carpentry, painting & handyman services across Dubai. 24/7 emergency service available.',
    url: 'https://happybrotherac.com/services',
    images: [
      {
        url: 'https://happybrotherac.com/services-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Happy Brother AC Services in Dubai',
      },
    ],
  },
  alternates: {
    canonical: 'https://happybrotherac.com/services',
  },
}

// Structured Data for Services
const servicesStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: [
    {
      '@type': 'Service',
      name: 'AC Repair and Maintenance',
      description: 'Professional air conditioning repair, installation, and maintenance services',
      provider: {
        '@type': 'LocalBusiness',
        name: 'Happy Brother AC',
        telephone: '+971502175305',
      },
    },
    {
      '@type': 'Service',
      name: 'Plumbing Services',
      description: 'Complete plumbing solutions including repairs, installations, and emergency services',
      provider: {
        '@type': 'LocalBusiness',
        name: 'Happy Brother AC',
        telephone: '+971502175305',
      },
    },
    {
      '@type': 'Service',
      name: 'Electrical Services',
      description: 'Licensed electrical repairs, installations, and maintenance',
      provider: {
        '@type': 'LocalBusiness',
        name: 'Happy Brother AC',
        telephone: '+971502175305',
      },
    },
  ],
}

export default function ServicesPage() {
  const mainServices = [
    {
      id: 'ac',
      icon: Wind,
      title: 'AC Services',
      tagline: 'Complete Air Conditioning Solutions',
      description: 'Professional AC repair, installation, maintenance and servicing for all brands. Our certified technicians ensure your comfort all year round.',
      gradient: 'cyan' as const,
      image: '/images/ac-service.jpg',
      services: [
        'AC Repair & Troubleshooting',
        'AC Installation (Split, Window, Central)',
        'Annual Maintenance Contracts (AMC)',
        'AC Gas Refilling & Leak Detection',
        'AC Cleaning & Deep Cleaning',
        'Duct Cleaning & Sanitization',
        'Compressor Replacement',
        'Thermostat Installation & Repair',
        'Emergency AC Repair 24/7',
        'All Brands: Daikin, LG, Samsung, Carrier, Mitsubishi'
      ],
      benefits: [
        'Same-day service available',
        'All major brands supported',
        'Energy efficiency optimization',
        'Warranty on all repairs'
      ]
    },
    {
      id: 'plumbing',
      icon: Droplets,
      title: 'Plumbing Services',
      tagline: 'Expert Plumbing Solutions',
      description: 'From minor leaks to complete plumbing installations, our licensed plumbers handle all your water and drainage needs with precision.',
      gradient: 'purple' as const,
      image: '/images/plumbing-service.jpg',
      services: [
        'Leak Detection & Repair',
        'Pipe Installation & Replacement',
        'Faucet & Fixture Installation',
        'Toilet Repair & Replacement',
        'Sink & Basin Installation',
        'Water Heater Installation & Repair',
        'Drainage System Cleaning',
        'Sewer Line Repair',
        'Water Tank Cleaning',
        'Bathroom & Kitchen Plumbing',
        'Emergency Plumbing 24/7',
        'Water Pressure Solutions'
      ],
      benefits: [
        'Fast leak detection',
        'Quality parts & materials',
        'Clean work environment',
        'Transparent pricing'
      ]
    },
    {
      id: 'electrical',
      icon: Zap,
      title: 'Electrical Services',
      tagline: 'Safe & Reliable Electrical Work',
      description: 'Licensed electricians providing safe and compliant electrical solutions for homes and offices across Dubai.',
      gradient: 'magenta' as const,
      image: '/images/electrical-service.jpg',
      services: [
        'Electrical Repairs & Troubleshooting',
        'Light Fixture Installation',
        'Switch & Socket Installation',
        'Circuit Breaker Repair',
        'Wiring & Rewiring',
        'Generator Installation & Maintenance',
        'Power Distribution Board Setup',
        'LED Lighting Installation',
        'Smart Home Wiring',
        'Electrical Safety Inspections',
        'CCTV & Intercom Wiring',
        'Emergency Electrical Services'
      ],
      benefits: [
        'Licensed & certified electricians',
        'Safety compliance guaranteed',
        'Energy-efficient solutions',
        'Emergency response available'
      ]
    },
    {
      id: 'carpentry',
      icon: Hammer,
      title: 'Carpentry Services',
      tagline: 'Custom Woodwork & Furniture',
      description: 'Professional carpentry services for custom furniture, repairs, and installations with attention to detail and craftsmanship.',
      gradient: 'cyan' as const,
      image: '/images/carpentry-service.jpg',
      services: [
        'Custom Furniture Making',
        'Kitchen Cabinet Installation',
        'Wardrobe Design & Installation',
        'Door Installation & Repair',
        'Window Frame Repair',
        'Shelving & Storage Solutions',
        'Wooden Flooring Installation',
        'Furniture Repair & Restoration',
        'Partition & False Ceiling',
        'TV Unit Installation',
        'Office Furniture Assembly',
        'Deck & Outdoor Carpentry'
      ],
      benefits: [
        'Custom designs available',
        'Quality materials used',
        'Skilled craftsmen',
        'On-time completion'
      ]
    },
    {
      id: 'painting',
      icon: Paintbrush,
      title: 'Painting Services',
      tagline: 'Professional Interior & Exterior Painting',
      description: 'Transform your space with our expert painting services. Quality finishes for homes and commercial properties.',
      gradient: 'purple' as const,
      image: '/images/painting-service.jpg',
      services: [
        'Interior Wall Painting',
        'Exterior Wall Painting',
        'Ceiling Painting',
        'Texture & Design Painting',
        'Wood Staining & Varnishing',
        'Wallpaper Installation & Removal',
        'Waterproofing Solutions',
        'Apartment Painting',
        'Villa Painting',
        'Office Painting',
        'Touch-up & Repair Work',
        'Color Consultation'
      ],
      benefits: [
        'Premium quality paints',
        'Clean & neat work',
        'Color matching service',
        'Furniture protection included'
      ]
    },
    {
      id: 'handyman',
      icon: Wrench,
      title: 'General Handyman',
      tagline: 'All-in-One Home Solutions',
      description: 'Your go-to service for all general repairs and maintenance. No job is too small for our skilled handymen.',
      gradient: 'magenta' as const,
      image: '/images/handyman-service.jpg',
      services: [
        'Furniture Assembly',
        'Picture & Mirror Hanging',
        'Curtain Rod Installation',
        'Door Lock Repair & Replacement',
        'Drywall Repair',
        'Tile Repair & Replacement',
        'Grouting & Caulking',
        'Minor Repairs',
        'Home Maintenance',
        'Moving & Shifting Assistance',
        'Window Blind Installation',
        'General Home Improvements'
      ],
      benefits: [
        'Multi-skilled technicians',
        'Flexible scheduling',
        'Affordable rates',
        'Quick turnaround'
      ]
    }
  ]

  const additionalServices = [
    {
      icon: DoorOpen,
      title: 'Door & Window Services',
      description: 'Installation, repair, and maintenance of doors and windows including frames, hinges, and locks.'
    },
    {
      icon: Fan,
      title: 'Ceiling Fan Services',
      description: 'Installation, repair, and replacement of ceiling fans and exhaust fans for all room types.'
    },
    {
      icon: Lightbulb,
      title: 'Lighting Solutions',
      description: 'Indoor and outdoor lighting installation, LED upgrades, and smart lighting systems.'
    },
    {
      icon: Droplet,
      title: 'Water Filtration',
      description: 'Water filter installation, maintenance, and replacement for clean drinking water.'
    },
    {
      icon: Shield,
      title: 'Waterproofing',
      description: 'Bathroom, kitchen, and terrace waterproofing to prevent leaks and water damage.'
    },
    {
      icon: Settings,
      title: 'Appliance Installation',
      description: 'Installation and setup of home appliances including washing machines, dishwashers, and more.'
    },
    {
      icon: Drill,
      title: 'Drilling & Mounting',
      description: 'Professional drilling services for TV mounting, shelves, cabinets, and decorative items.'
    },
    {
      icon: RefreshCw,
      title: 'Maintenance Packages',
      description: 'Regular maintenance contracts for homes, villas, and commercial properties in Dubai.'
    }
  ]

  const whyChooseUs = [
    {
      icon: Award,
      title: '15+ Years Experience',
      description: 'Trusted expertise in all home services'
    },
    {
      icon: Users,
      title: 'Skilled Professionals',
      description: 'Licensed and trained technicians'
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Emergency services anytime'
    },
    {
      icon: Shield,
      title: 'Quality Guaranteed',
      description: '100% satisfaction on all work'
    }
  ]

  const serviceProcess = [
    {
      step: '01',
      title: 'Contact Us',
      description: 'Call or book online with your service requirements'
    },
    {
      step: '02',
      title: 'Schedule Visit',
      description: 'We arrange a convenient time for inspection or service'
    },
    {
      step: '03',
      title: 'Expert Service',
      description: 'Our professionals complete the work with quality'
    },
    {
      step: '04',
      title: 'Quality Check',
      description: 'We ensure everything meets our high standards'
    }
  ]

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesStructuredData) }}
      />

      <div className="bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 md:py-32 overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-cyan/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-purple/20 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                <span className="text-sm font-semibold text-brand-cyan">
                  ⚡ Complete Home & Office Solutions
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Professional Services for
                <span className="block bg-gradient-brand bg-clip-text text-transparent mt-2">
                  Every Need in Dubai
                </span>
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                From AC repair to complete home maintenance, we provide expert services with licensed professionals. Available 24/7 across all Dubai areas.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  href="tel:+971502175305"
                  variant="gradient"
                  size="lg"
                  icon={Phone}
                >
                  Call +971 50 217 5305
                </Button>
                <Button
                  href="/contact"
                  variant="outline"
                  size="lg"
                  icon={ArrowRight}
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  Get Free Quote
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Main Services */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <SectionHeading
              badge="Our Services"
              title="Comprehensive Solutions"
              description="Expert services for all your home and office maintenance needs"
              gradient
            />

            <div className="mt-16 space-y-24">
              {mainServices.map((service, index) => (
                <div
                  key={service.id}
                  id={service.id}
                  className={`flex flex-col ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } gap-12 items-center scroll-mt-20`}
                >
                  {/* Image Side */}
                  <div className="flex-1 w-full">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200">
                      {/* Placeholder - Replace with actual images */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <service.icon className={`w-32 h-32 text-brand-${service.gradient}`} />
                      </div>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="flex-1 w-full space-y-6">
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-brand-cyan/10 to-brand-purple/10 border border-brand-cyan/20">
                      <service.icon className={`w-5 h-5 text-brand-${service.gradient}`} />
                      <span className="text-sm font-semibold text-gray-700">
                        {service.tagline}
                      </span>
                    </div>

                    <h2 className="text-4xl font-bold text-gray-900">
                      {service.title}
                    </h2>

                    <p className="text-lg text-gray-600 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Services List */}
                    <div className="grid sm:grid-cols-2 gap-3">
                      {service.services.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle className={`w-5 h-5 text-brand-${service.gradient} flex-shrink-0 mt-0.5`} />
                          <span className="text-gray-700 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Benefits */}
                    <div className="flex flex-wrap gap-3 pt-4">
                      {service.benefits.map((benefit, idx) => (
                        <div
                          key={idx}
                          className="px-4 py-2 bg-gray-50 rounded-lg text-sm text-gray-700 border border-gray-200"
                        >
                          {benefit}
                        </div>
                      ))}
                    </div>

                    <div className="pt-4">
                      <Button
                        href="/contact"
                        variant="gradient"
                        icon={ArrowRight}
                      >
                        Book This Service
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <SectionHeading
              badge="More Services"
              title="Additional Solutions"
              description="We offer a wide range of specialized services to meet all your needs"
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
              {additionalServices.map((service, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-brand-cyan/30 group"
                >
                  <div className="w-12 h-12 bg-gradient-brand rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Process */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <SectionHeading
              badge="How It Works"
              title="Simple 4-Step Process"
              description="Getting quality service has never been easier"
              gradient
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
              {serviceProcess.map((process, idx) => (
                <div key={idx} className="relative">
                  <div className="text-center space-y-4">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-brand rounded-2xl text-white text-2xl font-bold shadow-lg">
                      {process.step}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {process.title}
                    </h3>
                    <p className="text-gray-600">
                      {process.description}
                    </p>
                  </div>
                  {idx < serviceProcess.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-brand-cyan to-brand-purple" aria-hidden="true" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <SectionHeading
              badge="Why Choose Us"
              title="Your Trusted Service Partner"
              description="Experience the Happy Brother AC difference"
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
              {whyChooseUs.map((item, idx) => (
                <div
                  key={idx}
                  className="text-center space-y-4 p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-brand rounded-xl">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <SectionHeading
                badge="Service Coverage"
                title="Serving All Dubai Areas"
                description="Professional services available across Dubai"
                gradient
              />

              <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[
                  'Dubai Marina',
                  'Downtown Dubai',
                  'Jumeirah',
                  'Business Bay',
                  'JBR',
                  'Palm Jumeirah',
                  'Deira',
                  'Bur Dubai',
                  'Dubai Sports City',
                  'Barsha',
                  'Dubai Silicon Oasis',
                  'International City',
                  'Discovery Gardens',
                  'Jumeirah Village',
                  'Dubai Hills',
                  'Arabian Ranches'
                ].map((area, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg hover:bg-gradient-brand hover:text-white transition-all duration-200 group"
                  >
                    <Home className="w-4 h-4 text-brand-cyan group-hover:text-white" />
                    <span className="text-sm font-medium text-gray-700 group-hover:text-white">
                      {area}
                    </span>
                  </div>
                ))}
              </div>

              <p className="text-center text-gray-600 mt-8">
                Don't see your area? <a href="/contact" className="text-brand-cyan hover:underline font-semibold">Contact us</a> - we likely serve your location!
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection
          title="Ready to Get Started?"
          description="Contact us today for professional service across Dubai. Our experts are available 24/7 to assist you."
          primaryButtonText="Call +971 50 217 5305"
          primaryButtonHref="tel:+971502175305"
          secondaryButtonText="Request Quote"
          secondaryButtonHref="/contact"
        />
      </div>
    </>
  )
}