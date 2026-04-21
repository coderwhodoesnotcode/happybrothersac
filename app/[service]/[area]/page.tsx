// app/[service]/[area]/page.tsx

import Image from "next/image";
import { services, areas } from "../../../data/seo-pages";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const params = [];
  for (const service of services) {
    for (const area of areas) {
      params.push({ service: service.slug, area: area.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string; area: string }>;
}) {
  const { service: serviceSlug, area: areaSlug } = await params;
  const service = services.find((s) => s.slug === serviceSlug);
  const area = areas.find((a) => a.slug === areaSlug);
  if (!service || !area) return {};

  return {
    title: `${service.label} in ${area.label} Dubai | Happy Brother Technical Services`,
    description: `Need ${service.label.toLowerCase()} in ${area.label}, Dubai? Happy Brother provides same-day service, transparent pricing, and experienced technicians. Call +971 50 2175305 now.`,
    alternates: {
      canonical: `https://happybrotherac.com/${serviceSlug}/${areaSlug}`,
    },
  };
}

export default async function ServiceAreaPage({
  params,
}: {
  params: Promise<{ service: string; area: string }>;
}) {
  const { service: serviceSlug, area: areaSlug } = await params;
  const service = services.find((s) => s.slug === serviceSlug);
  const area = areas.find((a) => a.slug === areaSlug);
  if (!service || !area) return notFound();

  const phone = "+971502175305";
  const phoneDisplay = "+971 50 2175305";
  const email = "fawadtwopointo@gmail.com";
  const whatsappMsg = encodeURIComponent(
    `Hi, I need ${service.label} in ${area.label}. Please assist.`
  );

  // ── JSON-LD structured data ──────────────────────────────────────────────
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        name: "Happy Brother Technical Services",
        url: "https://happybrotherac.com",
        telephone: phone,
        email: email,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Dubai",
          addressCountry: "AE",
        },
        openingHours: "Mo-Su 08:00-22:00",
        image: "https://happybrotherac.com/og-image.jpg",
        priceRange: "$$",
        areaServed: {
          "@type": "City",
          name: "Dubai",
        },
      },
      {
        "@type": "Service",
        name: `${service.label} in ${area.label}`,
        description: service.longDescription ?? service.description,
        provider: {
          "@type": "LocalBusiness",
          name: "Happy Brother Technical Services",
        },
        areaServed: {
          "@type": "Place",
          name: `${area.label}, Dubai`,
        },
        serviceType: service.label,
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "AED",
          },
        },
      },
      ...(service.faqs
        ? [
            {
              "@type": "FAQPage",
              mainEntity: service.faqs.map((faq) => ({
                "@type": "Question",
                name: faq.q,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.a,
                },
              })),
            },
          ]
        : []),
    ],
  };

  return (
    <>
      {/* Inject JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main style={{ maxWidth: 860, margin: "0 auto", padding: "48px 20px", fontFamily: "system-ui, sans-serif", color: "#1a1a1a", lineHeight: 1.7 }}>

        {/* ── HERO / H1 ── */}
        <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.2rem)", fontWeight: 800, marginBottom: 12 }}>
          {service.label} in {area.label}, Dubai
        </h1>
        <p style={{ fontSize: "1.1rem", color: "#444", marginBottom: 24 }}>
          Fast, affordable, and reliable <strong>{service.label.toLowerCase()}</strong> in{" "}
          <strong>{area.label}</strong>. Happy Brother Technical Services is available{" "}
          7 days a week with same-day response, no waiting, no surprises.
        </p>

        {/* ── HERO IMAGE ── */}
        {service.image && (
          <div style={{ borderRadius: 12, overflow: "hidden", marginBottom: 32 }}>
            <Image
              src={service.image}
              alt={`${service.label} in ${area.label}, Dubai — Happy Brother Technical Services`}
              width={860}
              height={480}
              style={{ width: "100%", height: "auto", display: "block" }}
              priority
            />
          </div>
        )}

        {/* ── CTA BUTTONS (above the fold) ── */}
        <CallToAction phone={phone} phoneDisplay={phoneDisplay} email={email} whatsappMsg={whatsappMsg} service={service.label} area={area.label} />

        <hr style={{ border: "none", borderTop: "1px solid #e8e8e8", margin: "40px 0" }} />

        {/* ── ABOUT THE SERVICE ── */}
        <section>
          <h2 style={h2Style}>
            Professional {service.label} in {area.label}
          </h2>
          <p>
            Happy Brother Technical Services has been providing trusted {service.label.toLowerCase()} across
            Dubai, including {area.label} {area.landmark}. Our team of certified technicians arrives
            on time, diagnoses the problem accurately, and completes the job cleanly first time, every time.
          </p>
          <p>{service.longDescription ?? service.description}</p>
          <p>
            Whether you are a homeowner, tenant, or business in {area.label}, we understand that
            a broken appliance or technical fault cannot wait. That is why we offer same-day
            bookings and carry commonly needed spare parts on every service call.
          </p>
        </section>

        {/* ── WHAT'S INCLUDED ── */}
        {service.bullets && (
          <section style={{ marginTop: 32 }}>
            <h2 style={h2Style}>What Our {service.label} Includes</h2>
            <ul style={{ paddingLeft: 20, marginTop: 8 }}>
              {service.bullets.map((b, i) => (
                <li key={i} style={{ marginBottom: 8 }}>
                  ✅ {b}
                </li>
              ))}
            </ul>
          </section>
        )}

        <hr style={{ border: "none", borderTop: "1px solid #e8e8e8", margin: "40px 0" }} />

        {/* ── HOW IT WORKS ── */}
        <section>
          <h2 style={h2Style}>How It Works, Simple 3-Step Process</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20, marginTop: 16 }}>
            {[
              { step: "1", title: "Call or WhatsApp Us", desc: `Tell us your location in ${area.label} and describe the issue. We will confirm a technician and arrival time immediately.` },
              { step: "2", title: "Same-Day Technician Visit", desc: `Our technician arrives at your ${area.label} address, inspects the issue, and gives you a transparent quote before any work begins.` },
              { step: "3", title: "Job Done, Warranty Provided", desc: `We complete the work neatly and on time. All services come with a warranty so you have complete peace of mind.` },
            ].map(({ step, title, desc }) => (
              <div key={step} style={{ background: "#f5f8ff", borderRadius: 12, padding: "20px 18px", borderLeft: "4px solid #1a73e8" }}>
                <div style={{ fontSize: "1.6rem", fontWeight: 800, color: "#1a73e8", marginBottom: 6 }}>0{step}</div>
                <strong style={{ display: "block", marginBottom: 6 }}>{title}</strong>
                <p style={{ margin: 0, color: "#555", fontSize: "0.95rem" }}>{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <hr style={{ border: "none", borderTop: "1px solid #e8e8e8", margin: "40px 0" }} />

        {/* ── WHY CHOOSE US ── */}
        <section>
          <h2 style={h2Style}>Why {area.label} Residents Choose Happy Brother</h2>
          <p>
            With dozens of technical service companies in Dubai, here is what makes Happy Brother
            the trusted choice for {service.label.toLowerCase()} in {area.label}:
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16, marginTop: 16 }}>
            {[
              { icon: "⚡", title: "Same-Day Service", desc: `We aim to reach you in ${area.label} within hours of your call.` },
              { icon: "🔍", title: "Accurate Diagnosis", desc: "We find the real problem and fix it, no guesswork, no repeat visits." },
              { icon: "💰", title: "Transparent Pricing", desc: "You get a clear price before work starts. No hidden fees, ever." },
              { icon: "🏆", title: "Experienced Technicians", desc: "All our technicians are trained, verified, and experienced with UAE standards." },
              { icon: "📅", title: "7 Days a Week", desc: "We work every day including weekends and public holidays." },
              { icon: "🛡️", title: "Service Warranty", desc: "All repairs and installations come with a warranty for your peace of mind." },
            ].map(({ icon, title, desc }) => (
              <div key={title} style={{ background: "#fff", border: "1px solid #e8e8e8", borderRadius: 10, padding: "16px 14px" }}>
                <div style={{ fontSize: "1.5rem", marginBottom: 6 }}>{icon}</div>
                <strong style={{ display: "block", marginBottom: 4 }}>{title}</strong>
                <p style={{ margin: 0, color: "#666", fontSize: "0.9rem" }}>{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <hr style={{ border: "none", borderTop: "1px solid #e8e8e8", margin: "40px 0" }} />

        {/* ── FAQ ── */}
        {service.faqs && (
          <section>
            <h2 style={h2Style}>
              Frequently Asked Questions, {service.label} in {area.label}
            </h2>
            <p style={{ color: "#555", marginBottom: 20 }}>
              Common questions from our customers in {area.label}:
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {service.faqs.map((faq, i) => (
                <div key={i} style={{ background: "#fafafa", border: "1px solid #e8e8e8", borderRadius: 10, padding: "18px 20px" }}>
                  <strong style={{ display: "block", marginBottom: 8, color: "#1a1a1a" }}>
                    ❓ {faq.q}
                  </strong>
                  <p style={{ margin: 0, color: "#444" }}>{faq.a}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <hr style={{ border: "none", borderTop: "1px solid #e8e8e8", margin: "40px 0" }} />

        {/* ── NEARBY AREAS ── */}
        {area.nearbyAreas && (
          <section>
            <h2 style={h2Style}>We Also Serve Areas Near {area.label}</h2>
            <p>
              In addition to {area.label}, Happy Brother provides {service.label.toLowerCase()} across Dubai.
              If you are in one of the nearby areas, we can reach you just as quickly:
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 12 }}>
              {area.nearbyAreas.map((nearby) => {
                const nearbyArea = areas.find((a) => a.label === nearby);
                return nearbyArea ? (
                  <a
                    key={nearby}
                    href={`/${serviceSlug}/${nearbyArea.slug}`}
                    style={{ background: "#f0f4ff", color: "#1a73e8", padding: "8px 16px", borderRadius: 20, textDecoration: "none", fontSize: "0.9rem", fontWeight: 600, border: "1px solid #c7d7f7" }}
                  >
                    {service.label} in {nearby}
                  </a>
                ) : (
                  <span key={nearby} style={{ background: "#f0f4ff", color: "#1a73e8", padding: "8px 16px", borderRadius: 20, fontSize: "0.9rem", fontWeight: 600 }}>
                    {nearby}
                  </span>
                );
              })}
            </div>
          </section>
        )}

        <hr style={{ border: "none", borderTop: "1px solid #e8e8e8", margin: "40px 0" }} />

        {/* ── BOOK NOW (bottom CTA) ── */}
        <section>
          <h2 style={h2Style}>
            Book {service.label} in {area.label} Today
          </h2>
          <p>
            Do not let a technical problem disrupt your day. Contact Happy Brother now for fast,
            professional <strong>{service.label.toLowerCase()}</strong> anywhere in{" "}
            <strong>{area.label}</strong>, Dubai. We respond quickly and arrive ready to fix.
          </p>
          <CallToAction phone={phone} phoneDisplay={phoneDisplay} email={email} whatsappMsg={whatsappMsg} service={service.label} area={area.label} />
        </section>

        {/* ── CONTACT INFO BOX ── */}
        <div style={{ background: "#f5f8ff", border: "1px solid #c7d7f7", borderRadius: 10, padding: "20px 24px", margin: "32px 0" }}>
          <p style={{ margin: 0, fontWeight: 700, fontSize: "1rem", marginBottom: 12 }}>📋 Contact Details</p>
          <p style={{ margin: "0 0 8px" }}>📞 <strong>Phone / WhatsApp:</strong> <a href={`tel:${phone}`} style={{ color: "#1a73e8" }}>{phoneDisplay}</a></p>
          <p style={{ margin: "0 0 8px" }}>✉️ <strong>Email:</strong> <a href={`mailto:${email}`} style={{ color: "#1a73e8" }}>{email}</a></p>
          <p style={{ margin: 0 }}>🕐 <strong>Hours:</strong> Monday – Sunday, 8:00 AM – 10:00 PM</p>
        </div>

        {/* ── MAP ── */}
        <section>
          <h2 style={h2Style}>Find Us on Google Maps</h2>
          <p>View our profile, read reviews from customers in {area.label}, and get directions:</p>
          <div style={{ borderRadius: 12, overflow: "hidden", border: "1px solid #e0e0e0" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d52991.059676431236!2d72.752729!3d33.8911674!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f436d32fac4a1%3A0xc21cddbbc54c090e!2sHappy%20Brothers%20Air%20conditioner%20Maintenance%20Service!5e0!3m2!1sen!2s!4v1776597065036!5m2!1sen!2s"
              width="100%"
              height="420"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Happy Brother Technical Services location map, ${service.label} in ${area.label}`}
            />
          </div>
        </section>

      </main>
    </>
  );
}

// ── Shared styles ─────────────────────────────────────────────────────────────
const h2Style: React.CSSProperties = {
  fontSize: "clamp(1.2rem, 3vw, 1.6rem)",
  fontWeight: 700,
  marginBottom: 12,
  marginTop: 0,
};

// ── Reusable CTA buttons ──────────────────────────────────────────────────────
function CallToAction({
  phone, phoneDisplay, email, whatsappMsg, service, area,
}: {
  phone: string; phoneDisplay: string; email: string;
  whatsappMsg: string; service: string; area: string;
}) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 8 }}>
      <a href={`tel:${phone}`} style={btnStyle("#1a73e8")}>
        📞 Call Now, {phoneDisplay}
      </a>
      <a
        href={`https://wa.me/${phone.replace("+", "")}?text=${whatsappMsg}`}
        target="_blank"
        rel="noopener noreferrer"
        style={btnStyle("#25d366")}
      >
        💬 WhatsApp Us
      </a>
      <a
        href={`mailto:${email}?subject=${service} in ${area}&body=Hi, I need ${service} in ${area}.`}
        style={btnStyle("#ea4335")}
      >
        ✉️ Email Us
      </a>
    </div>
  );
}

function btnStyle(bg: string): React.CSSProperties {
  return {
    background: bg,
    color: "#fff",
    padding: "14px 24px",
    borderRadius: 8,
    fontWeight: 700,
    textDecoration: "none",
    fontSize: "0.95rem",
  };
}