'use client'

import { useState } from 'react'
import { Phone, Mail, User, Home, Calendar, MessageSquare, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', service: '', location: '', urgency: '',
    date: '', time: '', property: '', description: '', source: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const services = [
    'AC Repair & Installation',
    'AC Maintenance & Cleaning', 
    'Plumbing Services',
    'Electrical Services',
    'Carpentry Work',
    'Painting Services',
    'General Handyman',
    'Emergency Repair',
    'Maintenance Contract',
    'Other Services'
  ]

  const dubaiAreas = [
    'Dubai Marina', 'Downtown Dubai', 'Jumeirah', 'Business Bay', 'JBR', 'Palm Jumeirah',
    'Deira', 'Bur Dubai', 'Dubai Sports City', 'Barsha', 'Other'  // ✅ Changed "Other Area" to "Other"
  ]

  const urgencyLevels = [
    'Emergency (Within 2 hours)', 'Urgent (Same day)',
    'Regular (Within 24 hours)', 'Schedule for later'
  ]

  const timeSlots = ['Morning (8AM-12PM)', 'Afternoon (12PM-4PM)', 'Evening (4PM-8PM)', 'Night (8PM-12AM)']
  const propertyTypes = ['Apartment', 'Villa', 'Townhouse', 'Office', 'Other']

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    console.log('🚀 STEP 1: Form submission started')
    console.log('📝 Form Data:', formData)

    try {
      const googleFormURL = 'https://docs.google.com/forms/d/e/1FAIpQLSc1xZkc8bGX21DoUGz8D5KrrxHuYV3-Wy3_m_vVXt6QT2TWVw/formResponse'
      console.log('🔗 STEP 2: Google Form URL:', googleFormURL)
      
      const formBody = new FormData()
      
      console.log('📋 STEP 3: Mapping form data to CORRECT entry IDs...')
      
      // ✅ CORRECT Entry IDs from your actual Google Form
      
      // Field 1: Full Name (entry.1522909915)
      formBody.append('entry.1522909915', formData.name)
      console.log('  ✓ Name:', formData.name)
      
      // Field 2: Phone Number (entry.1789495474)
      formBody.append('entry.1789495474', formData.phone)
      console.log('  ✓ Phone:', formData.phone)
      
      // Field 3: Email Address (entry.753974613)
      formBody.append('entry.753974613', formData.email || '')
      console.log('  ✓ Email:', formData.email || '(empty)')
      
      // Field 4: Service Required (entry.756775819) ⚠️ THIS WAS WRONG BEFORE!
      formBody.append('entry.756775819', formData.service)
      console.log('  ✓ Service:', formData.service)
      
      // Field 5: Location/Area (entry.1011068775) ⚠️ THIS WAS WRONG BEFORE!
      formBody.append('entry.1011068775', formData.location)
      console.log('  ✓ Location:', formData.location)
      
      // Field 6: Urgency Level (entry.1358464028) ⚠️ THIS WAS WRONG BEFORE!
      formBody.append('entry.1358464028', formData.urgency)
      console.log('  ✓ Urgency:', formData.urgency)
      
      // Field 7: Preferred Date (entry.1772107261)
      if (formData.date) {
        const [year, month, day] = formData.date.split('-')
        formBody.append('entry.1772107261_year', year)
        formBody.append('entry.1772107261_month', month)
        formBody.append('entry.1772107261_day', day)
        console.log('  ✓ Date (split):', { year, month, day })
      }
      
      // Field 8: Preferred Time (entry.709868206)
      if (formData.time) {
        formBody.append('entry.709868206', formData.time)
        console.log('  ✓ Time:', formData.time)
      }
      
      // Field 9: Property Type (entry.1213102883) ⚠️ THIS WAS WRONG BEFORE!
      if (formData.property) {
        formBody.append('entry.1213102883', formData.property)
        console.log('  ✓ Property:', formData.property)
      }
      
      // Field 10: Problem Description (entry.2049382224) ⚠️ THIS WAS WRONG BEFORE!
      formBody.append('entry.2049382224', formData.description)
      console.log('  ✓ Description:', formData.description)
      
      // Field 11: How did you hear about us? (entry.860503090) ⚠️ THIS WAS WRONG BEFORE!
      formBody.append('entry.860503090', formData.source || '')
      console.log('  ✓ Source:', formData.source || '(empty)')

      console.log('🌐 STEP 4: Sending request to Google Forms...')
      
      const response = await fetch(googleFormURL, {
        method: 'POST',
        mode: 'no-cors',
        body: formBody,
      })

      console.log('✅ STEP 5: Request completed')
      console.log('📊 Response type:', response.type)
      console.log('📊 Response status:', response.status)

      console.log('🎉 STEP 6: Setting success status')
      setSubmitStatus('success')
      
      // Save phone for success message before clearing
      const submittedPhone = formData.phone
      
      setFormData({ 
        name: '', phone: '', email: '', service: '', location: '', 
        urgency: '', date: '', time: '', property: '', description: '', source: '' 
      })
      
      window.scrollTo({ top: 0, behavior: 'smooth' })
      setTimeout(() => setSubmitStatus('idle'), 5000)
      
    } catch (error) {
      console.error('❌ ERROR occurred:', error)
      setSubmitStatus('error')
    } finally {
      console.log('🏁 STEP 7: Submission process finished')
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Personal Info */}
      <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200">
        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <User className="w-5 h-5 text-brand-cyan" />
          Personal Information
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-cyan focus:border-transparent outline-none"
              placeholder="Enter your full name" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-cyan focus:border-transparent outline-none"
              placeholder="+971 50 XXX XXXX" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-cyan focus:border-transparent outline-none"
              placeholder="your.email@example.com" />
          </div>
        </div>
      </div>

      {/* Service Details */}
      <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200">
        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <Home className="w-5 h-5 text-brand-purple" />
          Service Details
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Service Required *</label>
            <select name="service" value={formData.service} onChange={handleChange} required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-cyan focus:border-transparent outline-none bg-white">
              <option value="">Select a service</option>
              {services.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Location in Dubai *</label>
            <select name="location" value={formData.location} onChange={handleChange} required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-cyan focus:border-transparent outline-none bg-white">
              <option value="">Select your area</option>
              {dubaiAreas.map((a) => <option key={a} value={a}>{a}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Urgency Level *</label>
            <select name="urgency" value={formData.urgency} onChange={handleChange} required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-cyan focus:border-transparent outline-none bg-white">
              <option value="">Select urgency</option>
              {urgencyLevels.map((l) => <option key={l} value={l}>{l}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Property Type</label>
            <select name="property" value={formData.property} onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-cyan focus:border-transparent outline-none bg-white">
              <option value="">Select property type</option>
              {propertyTypes.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
        </div>
      </div>

      {/* Schedule */}
      <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200">
        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <Calendar className="w-5 h-5 text-brand-magenta" />
          Preferred Schedule
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Date</label>
            <input type="date" name="date" value={formData.date} onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-cyan focus:border-transparent outline-none" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Time</label>
            <select name="time" value={formData.time} onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-cyan focus:border-transparent outline-none bg-white">
              <option value="">Select time slot</option>
              {timeSlots.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200">
        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <MessageSquare className="w-5 h-5 text-brand-cyan" />
          Problem Description
        </h3>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Describe your issue *</label>
          <textarea name="description" value={formData.description} onChange={handleChange} required rows={5}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-cyan focus:border-transparent outline-none resize-none"
            placeholder="Describe your issue..." />
        </div>
        <div className="mt-4">
          <label className="block text-sm font-semibold text-gray-700 mb-2">How did you hear about us?</label>
          <select name="source" value={formData.source} onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-cyan focus:border-transparent outline-none bg-white">
            <option value="">Select an option</option>
            <option value="Google Search">Google Search</option>
            <option value="Social Media">Social Media</option>
            <option value="Friend/Family">Friend/Family</option>
            <option value="Repeat Customer">Repeat Customer</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      {/* Submit */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button type="submit" disabled={isSubmitting}
          className="px-8 py-4 bg-gradient-brand text-white font-bold rounded-lg hover:shadow-lg transition-all disabled:opacity-50 flex items-center justify-center gap-2">
          {isSubmitting ? <><Loader2 className="w-5 h-5 animate-spin" />Submitting...</> : <><Send className="w-5 h-5" />Submit Request</>}
        </button>
        <a href="tel:+971502175305"
          className="px-8 py-4 bg-white border-2 border-gray-300 text-gray-900 font-bold rounded-lg hover:border-brand-cyan hover:shadow-md transition-all flex items-center justify-center gap-2">
          <Phone className="w-5 h-5" />Call +971 50 217 5305
        </a>
      </div>

      {submitStatus === 'success' && (
        <div className="bg-green-50 border-2 border-green-500 rounded-xl p-6 flex items-start gap-4">
          <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-bold text-green-900 text-lg mb-2">Thank You! 🎉</h4>
            <p className="text-green-800">Your request has been submitted successfully! We'll contact you shortly.</p>
          </div>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="bg-red-50 border-2 border-red-500 rounded-xl p-6 flex items-start gap-4">
          <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-bold text-red-900 text-lg mb-2">Submission Error</h4>
            <p className="text-red-800">Please call us at <a href="tel:+971502175305" className="underline font-semibold">+971 50 217 5305</a></p>
          </div>
        </div>
      )}
    </form>
  )
}