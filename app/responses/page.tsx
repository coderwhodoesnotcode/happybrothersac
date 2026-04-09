'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import {
  Phone, Mail, MapPin, AlertCircle, Loader2, RefreshCw,
  Search, ChevronDown, ChevronUp, User, Wrench, Calendar, MessageSquare
} from 'lucide-react'

// ✅ Type تعریف
type Booking = {
  id: string
  name: string
  phone: string
  email?: string
  location: string
  service: string
  urgency: string
  description?: string
  property?: string
  source?: string
  date?: string
  time?: string
  created_at: string
}

export default function ResponsesPage() {
  const [bookings, setBookings] = useState<Booking[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [search, setSearch] = useState<string>('')
  const [filterService, setFilterService] = useState<string>('')
  const [filterUrgency, setFilterUrgency] = useState<string>('')
  const [expanded, setExpanded] = useState<string | null>(null)
  const [sortDesc, setSortDesc] = useState<boolean>(true)

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
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchBookings()
  }, [sortDesc])

  const urgencyColor = (urgency?: string) => {
    if (urgency?.includes('Emergency')) return 'bg-red-100 text-red-700 border-red-200'
    if (urgency?.includes('Urgent')) return 'bg-orange-100 text-orange-700 border-orange-200'
    if (urgency?.includes('Regular')) return 'bg-blue-100 text-blue-700 border-blue-200'
    return 'bg-gray-100 text-gray-700 border-gray-200'
  }

  const filtered = bookings.filter(b => {
    const q = search.toLowerCase()
    const matchSearch =
      !q ||
      b.name?.toLowerCase().includes(q) ||
      b.phone?.includes(q) ||
      b.email?.toLowerCase().includes(q) ||
      b.location?.toLowerCase().includes(q)

    const matchService = !filterService || b.service === filterService
    const matchUrgency = !filterUrgency || b.urgency === filterUrgency

    return matchSearch && matchService && matchUrgency
  })

  const services = [...new Set(bookings.map(b => b.service).filter(Boolean))]
  const urgencies = [...new Set(bookings.map(b => b.urgency).filter(Boolean))]

  const stats = {
    total: bookings.length,
    emergency: bookings.filter(b => b.urgency?.includes('Emergency')).length,
    today: bookings.filter(
      b => new Date(b.created_at).toDateString() === new Date().toDateString()
    ).length,
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-cyan-800 text-white px-6 py-8">
        <div className="max-w-7xl mx-auto flex justify-between">
          <div>
            <h1 className="text-3xl font-bold">Booking Responses</h1>
            <p className="text-blue-200 mt-1">Happy Brother AC — Admin Dashboard</p>
          </div>

          <button
            onClick={fetchBookings}
            className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-xl"
          >
            <RefreshCw className="w-4 h-4" />
            Refresh
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">

        {/* Search */}
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearch(e.target.value)
          }
          className="w-full mb-6 px-4 py-2 border rounded-xl"
        />

        {/* Error */}
        {error && (
          <div className="bg-red-100 p-4 rounded-xl mb-4 text-red-700">
            {error}
          </div>
        )}

        {/* Loading */}
        {loading && (
          <div className="flex justify-center py-10">
            <Loader2 className="animate-spin" />
          </div>
        )}

        {/* List */}
        {!loading &&
          filtered.map(b => (
            <div key={b.id} className="bg-white p-4 rounded-xl mb-3 shadow">
              <div
                className="flex justify-between cursor-pointer"
                onClick={() =>
                  setExpanded(expanded === b.id ? null : b.id)
                }
              >
                <div>
                  <p className="font-bold">{b.name}</p>
                  <p className="text-sm text-gray-500">{b.phone}</p>
                </div>

                {expanded === b.id ? <ChevronUp /> : <ChevronDown />}
              </div>

              {expanded === b.id && (
                <div className="mt-3 text-sm text-gray-600">
                  <p>{b.description}</p>
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  )
}