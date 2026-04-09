'use client'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { Phone, Mail, MapPin, Clock, AlertCircle, Loader2, RefreshCw, Search, Filter, ChevronDown, ChevronUp, User, Wrench, Calendar, MessageSquare } from 'lucide-react'

export default function ResponsesPage() {
  const [bookings, setBookings] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [search, setSearch] = useState('')
  const [filterService, setFilterService] = useState('')
  const [filterUrgency, setFilterUrgency] = useState('')
  const [expanded, setExpanded] = useState(null)
  const [sortDesc, setSortDesc] = useState(true)

  const fetchBookings = async () => {
    setLoading(true)
    setError(null)
    try {
      const { data, error } = await supabase
        .from('ac_bookings')
        .select('*')
        .order('created_at', { ascending: !sortDesc })

      if (error) throw error
      setBookings(data || [])
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { fetchBookings() }, [sortDesc])

  const urgencyColor = (urgency) => {
    if (urgency?.includes('Emergency')) return 'bg-red-100 text-red-700 border-red-200'
    if (urgency?.includes('Urgent')) return 'bg-orange-100 text-orange-700 border-orange-200'
    if (urgency?.includes('Regular')) return 'bg-blue-100 text-blue-700 border-blue-200'
    return 'bg-gray-100 text-gray-700 border-gray-200'
  }

  const filtered = bookings.filter(b => {
    const q = search.toLowerCase()
    const matchSearch = !q || b.name?.toLowerCase().includes(q) || b.phone?.includes(q) || b.email?.toLowerCase().includes(q) || b.location?.toLowerCase().includes(q)
    const matchService = !filterService || b.service === filterService
    const matchUrgency = !filterUrgency || b.urgency === filterUrgency
    return matchSearch && matchService && matchUrgency
  })

  const services = [...new Set(bookings.map(b => b.service).filter(Boolean))]
  const urgencies = [...new Set(bookings.map(b => b.urgency).filter(Boolean))]

  const stats = {
    total: bookings.length,
    emergency: bookings.filter(b => b.urgency?.includes('Emergency')).length,
    today: bookings.filter(b => new Date(b.created_at).toDateString() === new Date().toDateString()).length,
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-cyan-800 text-white px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-3xl font-bold">Booking Responses</h1>
              <p className="text-blue-200 mt-1">Happy Brother AC — Admin Dashboard</p>
            </div>
            <button
              onClick={fetchBookings}
              className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-xl border border-white/20 transition-all"
            >
              <RefreshCw className="w-4 h-4" />
              Refresh
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-6">
            {[
              { label: 'Total Bookings', value: stats.total, color: 'bg-white/10' },
              { label: 'Today', value: stats.today, color: 'bg-cyan-500/30' },
              { label: 'Emergency', value: stats.emergency, color: 'bg-red-500/30' },
            ].map((s, i) => (
              <div key={i} className={`${s.color} rounded-xl p-4 text-center backdrop-blur-sm border border-white/10`}>
                <div className="text-3xl font-bold">{s.value}</div>
                <div className="text-sm text-blue-200 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4 mb-6 flex flex-wrap gap-4">
          <div className="flex-1 min-w-48 relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name, phone, email..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none"
            />
          </div>
          <select
            value={filterService}
            onChange={e => setFilterService(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-cyan-500 outline-none bg-white"
          >
            <option value="">All Services</option>
            {services.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
          <select
            value={filterUrgency}
            onChange={e => setFilterUrgency(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-cyan-500 outline-none bg-white"
          >
            <option value="">All Urgency</option>
            {urgencies.map(u => <option key={u} value={u}>{u}</option>)}
          </select>
          <button
            onClick={() => setSortDesc(!sortDesc)}
            className="flex items-center gap-1 px-3 py-2 border border-gray-300 rounded-xl text-sm hover:bg-gray-50 transition-all"
          >
            {sortDesc ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
            {sortDesc ? 'Newest First' : 'Oldest First'}
          </button>
        </div>

        {/* Error */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-2xl p-6 flex items-start gap-3 mb-6">
            <AlertCircle className="w-5 h-5 text-red-500 mt-0.5" />
            <div>
              <p className="font-semibold text-red-800">Failed to load bookings</p>
              <p className="text-red-600 text-sm mt-1">{error}</p>
              <p className="text-red-500 text-xs mt-2">Make sure your Supabase credentials are set in .env.local and the RLS policy allows authenticated reads.</p>
            </div>
          </div>
        )}

        {/* Loading */}
        {loading && (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 text-cyan-500 animate-spin mr-3" />
            <span className="text-gray-500 text-lg">Loading bookings...</span>
          </div>
        )}

        {/* Empty */}
        {!loading && !error && filtered.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            <MessageSquare className="w-12 h-12 mx-auto mb-3 opacity-40" />
            <p className="text-lg font-medium">No bookings found</p>
            <p className="text-sm mt-1">
              {bookings.length > 0 ? 'Try adjusting your filters' : 'Submissions will appear here once the form is filled out'}
            </p>
          </div>
        )}

        {/* Bookings List */}
        {!loading && !error && filtered.length > 0 && (
          <div className="space-y-4">
            <p className="text-sm text-gray-500 mb-2">Showing {filtered.length} of {bookings.length} bookings</p>
            {filtered.map((b) => (
              <div key={b.id} className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all">
                {/* Row Summary */}
                <div
                  className="p-5 cursor-pointer flex flex-wrap items-start gap-4"
                  onClick={() => setExpanded(expanded === b.id ? null : b.id)}
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="font-bold text-gray-900 text-lg">{b.name}</span>
                      <span className={`text-xs px-2.5 py-1 rounded-full font-semibold border ${urgencyColor(b.urgency)}`}>{b.urgency}</span>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-1"><Phone className="w-3.5 h-3.5" />{b.phone}</span>
                      {b.email && <span className="flex items-center gap-1"><Mail className="w-3.5 h-3.5" />{b.email}</span>}
                      <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{b.location}</span>
                      <span className="flex items-center gap-1"><Wrench className="w-3.5 h-3.5" />{b.service}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-right">
                    <div>
                      <div className="text-xs text-gray-400">{new Date(b.created_at).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</div>
                      <div className="text-xs text-gray-400">{new Date(b.created_at).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })}</div>
                    </div>
                    {expanded === b.id ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                  </div>
                </div>

                {/* Expanded Details */}
                {expanded === b.id && (
                  <div className="border-t border-gray-100 bg-gray-50 p-5 grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-700 flex items-center gap-2"><User className="w-4 h-4" />Contact Details</h4>
                      <div className="text-sm space-y-1">
                        <p><span className="text-gray-500">Name:</span> <span className="font-medium">{b.name}</span></p>
                        <p><span className="text-gray-500">Phone:</span> <a href={`tel:${b.phone}`} className="font-medium text-cyan-600 hover:underline">{b.phone}</a></p>
                        {b.email && <p><span className="text-gray-500">Email:</span> <a href={`mailto:${b.email}`} className="font-medium text-cyan-600 hover:underline">{b.email}</a></p>}
                        {b.property && <p><span className="text-gray-500">Property:</span> <span className="font-medium">{b.property}</span></p>}
                        {b.source && <p><span className="text-gray-500">Source:</span> <span className="font-medium">{b.source}</span></p>}
                      </div>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-700 flex items-center gap-2"><Calendar className="w-4 h-4" />Service & Schedule</h4>
                      <div className="text-sm space-y-1">
                        <p><span className="text-gray-500">Service:</span> <span className="font-medium">{b.service}</span></p>
                        <p><span className="text-gray-500">Location:</span> <span className="font-medium">{b.location}</span></p>
                        {b.date && <p><span className="text-gray-500">Preferred Date:</span> <span className="font-medium">{b.date}</span></p>}
                        {b.time && <p><span className="text-gray-500">Preferred Time:</span> <span className="font-medium">{b.time}</span></p>}
                      </div>
                    </div>
                    <div className="md:col-span-2 space-y-2">
                      <h4 className="font-semibold text-gray-700 flex items-center gap-2"><MessageSquare className="w-4 h-4" />Issue Description</h4>
                      <p className="text-sm text-gray-700 bg-white border border-gray-200 rounded-xl p-4 leading-relaxed">{b.description}</p>
                    </div>
                    <div className="md:col-span-2 flex gap-3">
                      <a href={`tel:${b.phone}`} className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white text-sm font-semibold rounded-xl flex items-center gap-2 transition-all">
                        <Phone className="w-4 h-4" />Call Customer
                      </a>
                      {b.email && (
                        <a href={`mailto:${b.email}`} className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold rounded-xl flex items-center gap-2 transition-all">
                          <Mail className="w-4 h-4" />Email Customer
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}