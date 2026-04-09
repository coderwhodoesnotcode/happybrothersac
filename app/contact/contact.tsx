'use client'
import { useState, FormEvent } from 'react'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState<boolean>(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // Connect to Formspree or EmailJS here
    setSubmitted(true)
  }

  return (
    <>
      <section className="page-hero">
        <div className="page-hero-eyebrow">Get In Touch</div>
        <h1>Contact <em>Us</em></h1>
        <p>
          Reach out for bookings, quotes, or any enquiries.
          We respond fast — usually within the hour.
        </p>
      </section>

      <section className="contact-layout">
        {/* Contact Info */}
        <div className="contact-info">
          <div className="section-label" style={{ marginBottom: '1rem' }}>Our Details</div>
          <h2>We&apos;re Here to Help</h2>
          <p>
            Based in Nakheel Center, Deira, we serve all of Dubai&apos;s
            premium communities. Call, WhatsApp, or fill in the form —
            whatever works best for you.
          </p>

          <div className="contact-details">
            <div className="contact-detail-item">
              <div className="contact-detail-icon">📞</div>
              <div>
                <div className="contact-detail-label">Phone / WhatsApp</div>
                <div className="contact-detail-value">
                  <a href="tel:+971502175305">+971 050 217 5305</a>
                </div>
              </div>
            </div>

            <div className="contact-detail-item">
              <div className="contact-detail-icon">✉️</div>
              <div>
                <div className="contact-detail-label">Email</div>
                <div className="contact-detail-value">
                  <a href="mailto:allahyarkhan132@gmail.com">allahyarkhan132@gmail.com</a>
                </div>
              </div>
            </div>

            <div className="contact-detail-item">
              <div className="contact-detail-icon">📍</div>
              <div>
                <div className="contact-detail-label">Office Address</div>
                <div className="contact-detail-value">
                  Nakheel Center, Deira, Dubai, UAE
                </div>
              </div>
            </div>

            <div className="contact-detail-item">
              <div className="contact-detail-icon">🕐</div>
              <div>
                <div className="contact-detail-label">Working Hours</div>
                <div className="contact-detail-value">
                  Sat – Thu: 8:00 AM – 10:00 PM<br />
                  Emergency: 24/7
                </div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '3rem', padding: '2rem', background: 'var(--dark)', border: '1px solid var(--border)' }}>
            <div className="section-label" style={{ marginBottom: '0.75rem' }}>Areas We Cover</div>
            <p style={{ color: 'var(--gray)', fontSize: '0.85rem', lineHeight: '1.9' }}>
              Palm Jumeirah · Downtown Dubai · Dubai Marina · Jumeirah ·
              Business Bay · DIFC · Emirates Hills · Arabian Ranches ·
              Al Barsha · JBR · The Springs · Mirdif · Deira · Bur Dubai
              and all surrounding premium areas.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form">
          <h3>Send a Message</h3>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '3rem 0' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
              <h3 style={{ color: 'var(--gold)', marginBottom: '0.75rem' }}>Message Sent!</h3>
              <p style={{ color: 'var(--gray)', fontSize: '0.9rem' }}>
                Thank you for reaching out. We&apos;ll get back to you very shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Your Name</label>
                  <input type="text" placeholder="Ahmed Al Mansouri" required />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="tel" placeholder="+971 5X XXX XXXX" required />
                </div>
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="your@email.com" />
              </div>
              <div className="form-group">
                <label>Service Required</label>
                <select required>
                  <option value="">Select a service...</option>
                  <option>AC Repair</option>
                  <option>AC Installation</option>
                  <option>AC Maintenance / Cleaning</option>
                  <option>Gas Refill</option>
                  <option>Plumbing</option>
                  <option>Electrical / Handyman</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="form-group">
                <label>Your Area / Location</label>
                <input type="text" placeholder="Palm Jumeirah, Downtown, Marina..." required />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea placeholder="Describe your issue or what you need..."></textarea>
              </div>
              <button
                type="submit"
                className="btn-primary"
                style={{ width: '100%', border: 'none', cursor: 'pointer', fontSize: '0.8rem' }}
              >
                Send Message →
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  )
}