'use client'
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle, Loader2, User, Wrench, Calendar, MessageSquare, ThumbsUp, Headphones, Award } from 'lucide-react';

export default function HappyBrotherContact() {
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', service: '', location: '', urgency: '', date: '', time: '', property: '', description: '', source: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle');

  const services = ['AC Repair & Maintenance', 'AC Installation', 'AC Cleaning & Servicing', 'Duct Cleaning', 'AC Gas Refilling', 'Thermostat Repair', 'Emergency AC Repair', 'Annual Maintenance Contract', 'Commercial AC Services', 'Other AC Services'];
  const dubaiAreas = ['Dubai Marina', 'Downtown Dubai', 'Jumeirah', 'Business Bay', 'JBR (Jumeirah Beach Residence)', 'Palm Jumeirah', 'Deira', 'Bur Dubai', 'Dubai Sports City', 'Al Barsha', 'Arabian Ranches', 'The Springs', 'The Meadows', 'JLT (Jumeirah Lake Towers)', 'Other Area'];
  const urgencyLevels = ['Emergency (Within 2 hours)', 'Urgent (Same day)', 'Regular (Within 24 hours)', 'Schedule for later'];
  const timeSlots = ['Morning (8AM-12PM)', 'Afternoon (12PM-4PM)', 'Evening (4PM-8PM)', 'Flexible'];
  const propertyTypes = ['Apartment', 'Villa', 'Townhouse', 'Office', 'Commercial Building', 'Other'];

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    try {
      const googleFormURL = 'YOUR_GOOGLE_FORM_URL_HERE/formResponse';
      const formBody = new FormData();
      formBody.append('entry.XXXXXX', formData.name);
      formBody.append('entry.XXXXXX', formData.phone);
      formBody.append('entry.XXXXXX', formData.email);
      formBody.append('entry.XXXXXX', formData.service);
      formBody.append('entry.XXXXXX', formData.location);
      formBody.append('entry.XXXXXX', formData.urgency);
      formBody.append('entry.XXXXXX', formData.date);
      formBody.append('entry.XXXXXX', formData.time);
      formBody.append('entry.XXXXXX', formData.property);
      formBody.append('entry.XXXXXX', formData.description);
      formBody.append('entry.XXXXXX', formData.source);
      await fetch(googleFormURL, { method: 'POST', mode: 'no-cors', body: formBody });
      setSubmitStatus('success');
      setFormData({ name: '', phone: '', email: '', service: '', location: '', urgency: '', date: '', time: '', property: '', description: '', source: '' });
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setTimeout(() => setSubmitStatus('idle'), 6000);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <section className="relative bg-gradient-to-br from-blue-900 via-cyan-800 to-blue-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-400 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              <Phone className="w-5 h-5 mr-2" />
              <span className="text-sm font-semibold">24/7 Emergency Service Available</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">Contact Happy Brother AC<span className="block text-cyan-300 mt-2">Dubai's Trusted AC Experts</span></h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">Professional AC repair, installation & maintenance services across Dubai. Get instant quotes and same-day emergency service.</p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <a href="tel:+971502175305" className="inline-flex items-center px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl"><Phone className="w-5 h-5 mr-2" />Call +971 50 217 5305</a>
              <a href="#contact-form" className="inline-flex items-center px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold rounded-xl border-2 border-white/30 transition-all"><MessageSquare className="w-5 h-5 mr-2" />Book Online</a>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Phone, title: 'Call Us 24/7', content: '+971 50 217 5305', link: 'tel:+971502175305', desc: 'Emergency hotline available', color: 'from-cyan-500 to-blue-600' },
            { icon: Mail, title: 'Email Us', content: 'info@happybrotherac.com', link: 'mailto:info@happybrotherac.com', desc: 'Quick response guaranteed', color: 'from-blue-500 to-purple-600' },
            { icon: MapPin, title: 'Service Areas', content: 'All Dubai Areas', desc: 'Marina to Deira & beyond', color: 'from-purple-500 to-pink-600' },
            { icon: Clock, title: 'Working Hours', content: 'Open 24/7', desc: 'Weekends & holidays included', color: 'from-green-500 to-emerald-600' }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all group">
              <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <item.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
              {item.link ? <a href={item.link} className="text-cyan-600 font-semibold hover:underline text-lg">{item.content}</a> : <p className="text-gray-900 font-semibold">{item.content}</p>}
              <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20" id="contact-form">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
              <div className="mb-10">
                <h2 className="text-4xl font-bold text-gray-900 mb-3">Book Your AC Service</h2>
                <p className="text-gray-600 text-lg">Fill out the form below and our team will contact you shortly. For emergencies, call us directly at <a href="tel:+971502175305" className="text-cyan-600 font-semibold hover:underline">+971 50 217 5305</a></p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl border border-blue-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3"><div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center"><User className="w-5 h-5 text-white" /></div>Personal Information</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div><label className="block text-sm font-bold text-gray-700 mb-2">Full Name <span className="text-red-500">*</span></label><input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all" placeholder="John Doe" /></div>
                    <div><label className="block text-sm font-bold text-gray-700 mb-2">Phone Number <span className="text-red-500">*</span></label><input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all" placeholder="+971 50 XXX XXXX" /></div>
                    <div className="md:col-span-2"><label className="block text-sm font-bold text-gray-700 mb-2">Email Address (Optional)</label><input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all" placeholder="john@example.com" /></div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl border border-purple-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3"><div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center"><Wrench className="w-5 h-5 text-white" /></div>Service Details</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div><label className="block text-sm font-bold text-gray-700 mb-2">Service Required <span className="text-red-500">*</span></label><select name="service" value={formData.service} onChange={handleChange} required className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none bg-white transition-all"><option value="">Select a service</option>{services.map((s) => <option key={s} value={s}>{s}</option>)}</select></div>
                    <div><label className="block text-sm font-bold text-gray-700 mb-2">Location in Dubai <span className="text-red-500">*</span></label><select name="location" value={formData.location} onChange={handleChange} required className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none bg-white transition-all"><option value="">Select your area</option>{dubaiAreas.map((a) => <option key={a} value={a}>{a}</option>)}</select></div>
                    <div><label className="block text-sm font-bold text-gray-700 mb-2">Urgency Level <span className="text-red-500">*</span></label><select name="urgency" value={formData.urgency} onChange={handleChange} required className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none bg-white transition-all"><option value="">Select urgency</option>{urgencyLevels.map((l) => <option key={l} value={l}>{l}</option>)}</select></div>
                    <div><label className="block text-sm font-bold text-gray-700 mb-2">Property Type (Optional)</label><select name="property" value={formData.property} onChange={handleChange} className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none bg-white transition-all"><option value="">Select property type</option>{propertyTypes.map((t) => <option key={t} value={t}>{t}</option>)}</select></div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3"><div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center"><Calendar className="w-5 h-5 text-white" /></div>Preferred Schedule</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div><label className="block text-sm font-bold text-gray-700 mb-2">Preferred Date (Optional)</label><input type="date" name="date" value={formData.date} onChange={handleChange} className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all" /></div>
                    <div><label className="block text-sm font-bold text-gray-700 mb-2">Preferred Time (Optional)</label><select name="time" value={formData.time} onChange={handleChange} className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none bg-white transition-all"><option value="">Select time slot</option>{timeSlots.map((t) => <option key={t} value={t}>{t}</option>)}</select></div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-6 rounded-2xl border border-orange-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3"><div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center"><MessageSquare className="w-5 h-5 text-white" /></div>Additional Information</h3>
                  <div className="space-y-6">
                    <div><label className="block text-sm font-bold text-gray-700 mb-2">Describe Your Issue <span className="text-red-500">*</span></label><textarea name="description" value={formData.description} onChange={handleChange} required rows={5} className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none resize-none transition-all" placeholder="Please describe the AC problem you're experiencing in detail..." /></div>
                    <div><label className="block text-sm font-bold text-gray-700 mb-2">How did you hear about us? (Optional)</label><select name="source" value={formData.source} onChange={handleChange} className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none bg-white transition-all"><option value="">Select an option</option><option value="Google Search">Google Search</option><option value="Social Media">Social Media (Facebook/Instagram)</option><option value="Friend Referral">Friend or Family Referral</option><option value="Repeat Customer">Repeat Customer</option><option value="Online Advertisement">Online Advertisement</option><option value="Other">Other</option></select></div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button type="submit" disabled={isSubmitting} className="flex-1 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3">{isSubmitting ? <><Loader2 className="w-5 h-5 animate-spin" />Submitting Request...</> : <><Send className="w-5 h-5" />Submit Booking Request</>}</button>
                  <a href="tel:+971502175305" className="flex-1 px-8 py-4 bg-white border-2 border-cyan-500 text-cyan-600 font-bold rounded-xl hover:bg-cyan-50 transition-all flex items-center justify-center gap-3"><Phone className="w-5 h-5" />Call Now Instead</a>
                </div>
                {submitStatus === 'success' && <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-500 rounded-2xl p-6 flex items-start gap-4"><CheckCircle className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" /><div><h4 className="font-bold text-green-900 text-xl mb-2">🎉 Thank You for Choosing Happy Brother AC!</h4><p className="text-green-800 text-lg">Your service request has been received successfully! Our team will contact you within 30 minutes to confirm your appointment.</p><p className="text-green-700 mt-2 text-sm">For immediate assistance, call us at <a href="tel:+971502175305" className="font-bold underline">+971 50 217 5305</a></p></div></div>}
                {submitStatus === 'error' && <div className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-500 rounded-2xl p-6 flex items-start gap-4"><AlertCircle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" /><div><h4 className="font-bold text-red-900 text-xl mb-2">Submission Error</h4><p className="text-red-800 text-lg">We couldn't process your request online. Please call us directly at <a href="tel:+971502175305" className="font-bold underline">+971 50 217 5305</a> and we'll assist you immediately.</p></div></div>}
              </form>
            </div>
          </div>
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-8"><h3 className="text-2xl font-bold text-gray-900 mb-6">Why Book with Us?</h3><div className="space-y-5">{[{icon:ThumbsUp,title:'Instant Confirmation',desc:'Get immediate booking confirmation via call or SMS',color:'from-cyan-500 to-blue-600'},{icon:Headphones,title:'24/7 Support',desc:'Round-the-clock customer service for emergencies',color:'from-purple-500 to-pink-600'},{icon:Award,title:'Certified Technicians',desc:'Licensed and experienced AC specialists',color:'from-green-500 to-emerald-600'},{icon:CheckCircle,title:'Satisfaction Guaranteed',desc:'Quality workmanship with warranty on all services',color:'from-orange-500 to-red-600'}].map((item,idx)=><div key={idx} className="flex gap-4"><div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center flex-shrink-0`}><item.icon className="w-6 h-6 text-white"/></div><div><h4 className="font-bold text-gray-900 mb-1">{item.title}</h4><p className="text-sm text-gray-600">{item.desc}</p></div></div>)}</div></div>
            <div className="bg-gradient-to-br from-red-500 to-orange-600 rounded-2xl shadow-xl p-8 text-white"><div className="flex items-center gap-3 mb-4"><Phone className="w-10 h-10"/><h3 className="text-2xl font-bold">Emergency Service</h3></div><p className="mb-6 text-white/95 text-lg">AC broken down? Need immediate help? Our emergency response team is ready 24/7 across all Dubai areas.</p><a href="tel:+971502175305" className="block w-full text-center bg-white text-red-600 font-bold py-4 px-6 rounded-xl hover:bg-gray-100 transition-all shadow-lg text-lg">Call +971 50 217 5305</a><p className="text-center text-white/80 text-sm mt-4">Average response time: 1-2 hours</p></div>
            <div className="bg-white rounded-2xl shadow-xl p-8"><h3 className="text-2xl font-bold text-gray-900 mb-4">We Serve All Dubai</h3><p className="text-gray-600 mb-4">Professional AC services available across Dubai:</p><div className="space-y-2">{dubaiAreas.slice(0,10).map((area,idx)=><div key={idx} className="flex items-center gap-2 text-sm text-gray-700"><MapPin className="w-4 h-4 text-cyan-600 flex-shrink-0"/>{area}</div>)}<p className="text-sm text-gray-500 italic pt-2">...and many more areas</p></div></div>
          </div>
        </div>
      </section>
    </div>
  );
}