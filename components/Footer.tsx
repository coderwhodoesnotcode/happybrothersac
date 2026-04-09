import Link from 'next/link'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
)

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
)

const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
  </svg>
)

// X (Twitter) icon component since lucide-react doesn't have the new X logo
const XIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
  
)

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const services = [
    { name: 'AC Repair', href: '/services#ac' },
    { name: 'AC Installation', href: '/services#ac' },
    { name: 'AC Maintenance', href: '/services#ac' },
    { name: 'Plumbing Services', href: '/services#plumbing' },
    { name: 'Electrical Services', href: '/services#electrical' },
    { name: 'General Repairs', href: '/services#general' },
  ]

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' },
    { name: 'Emergency Service', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
  ]

  const serviceAreas = [
    'Dubai Marina',
    'Downtown Dubai',
    'Jumeirah',
    'Business Bay',
    'JBR',
    'Palm Jumeirah',
    'Deira',
    'Bur Dubai',
  ]

  const socialLinks = [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/airconditioningdubai',
      icon: FacebookIcon,
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/happybrothersac',
      icon: InstagramIcon,
    },
    {
      name: 'YouTube',
      href: 'https://www.youtube.com/@happybrotherac',
      icon: YoutubeIcon,
    },
    {
      name: 'X (Twitter)',
      href: 'https://x.com/happybrotherac',
      icon: XIcon,
    },
  ]

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Happy Brother AC
              </h3>
              <p className="text-gray-400 text-sm">
                Your trusted partner for AC repair, maintenance, and handyman services across Dubai. Available 24/7 for emergencies.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="tel:+971502175305"
                className="flex items-center gap-3 text-gray-300 hover:text-brand-cyan transition-colors group"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-brand-cyan/10 rounded-lg flex items-center justify-center group-hover:bg-brand-cyan/20 transition-colors">
                  <Phone className="w-5 h-5 text-brand-cyan" />
                </div>
                <div>
                  <div className="text-xs text-gray-400">Call Us 24/7</div>
                  <div className="font-semibold">+971 50 217 5305</div>
                </div>
              </a>

              <a
                href="mailto:info@happybrotherac.com"
                className="flex items-center gap-3 text-gray-300 hover:text-brand-cyan transition-colors group"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-brand-purple/10 rounded-lg flex items-center justify-center group-hover:bg-brand-purple/20 transition-colors">
                  <Mail className="w-5 h-5 text-brand-purple" />
                </div>
                <div>
                  <div className="text-xs text-gray-400">Email Us</div>
                  <div className="font-semibold">info@happybrotherac.com</div>
                </div>
              </a>

              <div className="flex items-center gap-3 text-gray-300">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-magenta/10 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-brand-magenta" />
                </div>
                <div>
                  <div className="text-xs text-gray-400">Working Hours</div>
                  <div className="font-semibold">24/7 Available</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-brand hover:scale-110 transition-all duration-200 group"
                      aria-label={`Follow us on ${social.name}`}
                    >
                      <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-brand-cyan transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-brand-cyan transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Service Areas</h4>
            <div className="flex items-start gap-3 mb-4">
              <MapPin className="w-5 h-5 text-brand-cyan flex-shrink-0 mt-1" />
              <p className="text-gray-400 text-sm">
                Serving all areas across Dubai
              </p>
            </div>
            <ul className="space-y-2">
              {serviceAreas.map((area) => (
                <li key={area} className="text-gray-400 text-sm flex items-center gap-2">
                  <span className="w-1 h-1 bg-brand-cyan rounded-full" />
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Happy Brother AC. All rights reserved. Professional AC repair and handyman services in Dubai.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-brand-cyan transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-brand-cyan transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/sitemap.xml"
                className="text-gray-400 hover:text-brand-cyan transition-colors"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Call Button for Mobile */}
      <a
        href="tel:+971502175305"
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-brand rounded-full shadow-2xl flex items-center justify-center lg:hidden z-50 hover:scale-110 transition-transform animate-pulse"
        aria-label="Call Happy Brother AC"
      >
        <Phone className="w-6 h-6 text-white" />
      </a>
    </footer>
  )
}