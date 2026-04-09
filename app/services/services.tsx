import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Services | Happy Brother Technical Services Dubai',
  description: 'AC repair, AC installation, duct cleaning, gas refill, plumbing, electrical & home maintenance services across Dubai. Call +971 050 217 5305.',
}

interface ServiceItem {
  num: string
  title: string
  desc: string
  features: string[]
}

const services: ServiceItem[] = [
  {
    num: '01',
    title: 'AC Repair',
    desc: 'Fast, professional repair for all types of air conditioning units. We diagnose and fix all AC problems same day.',
    features: ['Not cooling / weak airflow', 'Water leakage repair', 'Noise & vibration fixes', 'PCB & electrical faults', 'Remote & thermostat issues', 'All brands supported'],
  },
  {
    num: '02',
    title: 'AC Installation',
    desc: 'Expert installation of new AC units with proper sizing calculations, pipework, and electrical connections.',
    features: ['Split AC installation', 'Cassette & ducted systems', 'Multi-split setups', 'Drain pipe installation', 'Electrical wiring', 'Post-install testing'],
  },
  {
    num: '03',
    title: 'AC Maintenance & Cleaning',
    desc: "Regular maintenance keeps your AC running efficiently and extends its lifespan, especially in Dubai's dusty climate.",
    features: ['Filter deep cleaning', 'Coil washing & sterilizing', 'Gas pressure check', 'Drain line flushing', 'Annual service contracts', 'Performance report'],
  },
  {
    num: '04',
    title: 'Gas Refill & Top-Up',
    desc: 'Low refrigerant is the #1 cause of poor cooling in Dubai. We check, top up or fully recharge your AC gas.',
    features: ['R22 gas refill', 'R410A gas refill', 'R32 gas refill', 'Leak detection & repair', 'Gas pressure testing', 'All AC types covered'],
  },
  {
    num: '05',
    title: 'Plumbing Services',
    desc: 'Complete plumbing solutions from minor fixes to full bathroom fittings. Fast and reliable service.',
    features: ['Leak detection & repair', 'Tap & faucet replacement', 'Water heater service', 'Pipe blockage clearing', 'Toilet & basin fitting', 'Kitchen plumbing'],
  },
  {
    num: '06',
    title: 'Electrical & Handyman',
    desc: 'General maintenance, electrical work, and handyman services for homes, apartments, and offices in Dubai.',
    features: ['Light fitting & switches', 'Fan installation', 'Painting & touch-ups', 'Furniture assembly', 'Door & lock repairs', 'Tiling & grouting'],
  },
]

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-eyebrow">What We Offer</div>
        <h1>Our <em>Services</em></h1>
        <p>
          Comprehensive AC and home maintenance solutions delivered by
          certified technicians across all of Dubai&apos;s premium areas.
        </p>
      </section>

      <section className="services-full">
        <div className="services-full-grid">
          {services.map((s) => (
            <div className="service-full-card" key={s.num}>
              <div className="num">{s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <ul className="service-features">
                {s.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-banner">
        <h2>Not sure what you need? <em>Just call us.</em></h2>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="tel:+971502175305" className="btn-primary">📞 050 217 5305</a>
          <a href="/contact" className="btn-ghost">→ Send a Message</a>
        </div>
      </section>
    </>
  )
}