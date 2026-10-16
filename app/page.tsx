'use client'

import { useMemo, useState } from 'react'
import { ArrowRight, CalendarDays, Check, ChevronLeft, ChevronRight, Clock3, Instagram, MapPin, ShieldCheck, Sparkles, Star, Zap } from 'lucide-react'

const availability = {
  '2026-10-19': ['09:00', '10:30', '13:00', '15:30'],
  '2026-10-20': ['09:30', '11:00', '14:00', '16:30'],
  '2026-10-21': ['10:00', '12:30', '15:00'],
  '2026-10-22': ['09:00', '11:30', '13:30', '17:00'],
  '2026-10-23': ['10:30', '13:00', '14:30'],
} as Record<string, string[]>

const services = [
  { name: 'The Sharp Cut', price: '$42', detail: 'Cut, neck shave, hot towel finish', time: '45 min' },
  { name: 'Executive Reset', price: '$68', detail: 'Cut, beard sculpt, skin treatment', time: '60 min' },
  { name: 'Beard Architecture', price: '$36', detail: 'Precision shape, line-up, conditioning', time: '30 min' },
]

function toDateKey(date: Date) {
  return date.toISOString().slice(0, 10)
}

export default function Page() {
  const [monthOffset, setMonthOffset] = useState(0)
  const [selectedDate, setSelectedDate] = useState('2026-10-20')
  const [selectedTime, setSelectedTime] = useState('09:30')
  const [selectedService, setSelectedService] = useState('The Sharp Cut')
  const [submitted, setSubmitted] = useState(false)

  const month = useMemo(() => {
    const date = new Date(2026, 9 + monthOffset, 1)
    return date
  }, [monthOffset])
  const days = useMemo(() => {
    const firstDay = new Date(month.getFullYear(), month.getMonth(), 1).getDay()
    const count = new Date(month.getFullYear(), month.getMonth() + 1, 0).getDate()
    return [...Array(firstDay).fill(null), ...Array.from({ length: count }, (_, i) => new Date(month.getFullYear(), month.getMonth(), i + 1))]
  }, [month])
  const dateKey = selectedDate
  const availableTimes = availability[dateKey] ?? ['09:00', '10:30', '13:00', '15:30']

  function chooseDate(date: Date) {
    const key = toDateKey(date)
    setSelectedDate(key)
    setSelectedTime(availability[key]?.[0] ?? '09:00')
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#080909] text-[#f6f0e4] selection:bg-[#d6a84f] selection:text-[#080909]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <header className="flex items-center justify-between border-b border-[#d6a84f]/30 py-5 font-mono text-[10px] tracking-[0.22em] text-[#d6a84f] sm:text-xs">
          <div className="flex items-center gap-3"><span className="size-2 rounded-full bg-[#d6a84f] shadow-[0_0_12px_#d6a84f]" />SECURED BY SERPENT SYSTEMS <span className="hidden text-[#706a5d] sm:inline">//</span> <span className="hidden sm:inline">MD.SEL ACTIVE</span></div>
          <div className="hidden items-center gap-2 text-[#706a5d] sm:flex"><ShieldCheck className="size-3" /> PRIVATE BOOKING SYSTEM</div>
        </header>

        <section className="grid items-center gap-12 py-16 lg:grid-cols-[1.05fr_.95fr] lg:gap-20 lg:py-24">
          <div>
            <p className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-[#d6a84f]"><span className="h-px w-8 bg-[#d6a84f]" />Sharp Schedules / Terminal 01</p>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-[#f6f0e4] sm:text-7xl">Your time is valuable.<br /><span className="text-[#d6a84f]">Your cut should be too.</span></h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-[#aaa396] sm:text-lg">Precision grooming, without the waiting room. Reserve a private chair at Sharp Schedules Barbershop Terminal and leave looking dialed in.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row"><a href="#reserve" className="inline-flex items-center justify-center gap-3 bg-[#d6a84f] px-6 py-4 font-mono text-xs font-bold tracking-[0.16em] text-[#080909] transition hover:bg-[#f0c96e]">RESERVE YOUR CHAIR <ArrowRight className="size-4" /></a><a href="#services" className="inline-flex items-center justify-center border border-[#3d3a34] px-6 py-4 font-mono text-xs tracking-[0.16em] text-[#c6bfae] transition hover:border-[#d6a84f]">VIEW SERVICES</a></div>
            <div className="mt-12 grid max-w-lg grid-cols-3 gap-5 border-t border-[#2b2a26] pt-5"><div><p className="font-mono text-2xl text-[#d6a84f]">4.9</p><p className="mt-1 text-xs text-[#777168]">CLIENT RATING</p></div><div><p className="font-mono text-2xl text-[#d6a84f]">12k+</p><p className="mt-1 text-xs text-[#777168]">CLEAN CUTS</p></div><div><p className="font-mono text-2xl text-[#d6a84f]">0:00</p><p className="mt-1 text-xs text-[#777168]">WAIT TIME</p></div></div>
          </div>
          <div className="relative min-h-[390px] border border-[#3d3a34] bg-[#111210] p-6 sm:p-8"><div className="absolute -right-px -top-px size-12 border-r border-t border-[#d6a84f]" /><div className="absolute -bottom-px -left-px size-12 border-b border-l border-[#d6a84f]" /><div className="mb-12 flex items-center justify-between font-mono text-[10px] tracking-[0.2em] text-[#777168]"><span>LIVE FEED / 001</span><span className="flex items-center gap-2 text-[#d6a84f]"><span className="size-1.5 rounded-full bg-[#d6a84f]" /> OPEN NOW</span></div><div className="flex h-60 flex-col justify-center"><p className="font-mono text-sm text-[#777168]">// next available slot</p><p className="mt-2 font-mono text-6xl tracking-[-0.06em] text-[#d6a84f] sm:text-7xl">09:30</p><p className="mt-3 text-sm text-[#aaa396]">Tuesday, October 20 <span className="text-[#55514a]">/</span> The Sharp Cut</p><div className="mt-8 flex items-center gap-2 text-xs text-[#777168]"><Clock3 className="size-3" /> Your appointment starts on time. Every time.</div></div></div>
        </section>

        <section id="services" className="border-t border-[#2b2a26] py-16 sm:py-20"><div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="font-mono text-[10px] tracking-[0.25em] text-[#d6a84f]">01 / SERVICES</p><h2 className="mt-3 text-3xl tracking-[-0.04em] sm:text-4xl">Built for the well-kept.</h2></div><p className="max-w-sm text-sm leading-6 text-[#777168]">No upsells. No guesswork. Just a focused menu of services, performed with intention.</p></div><div className="grid gap-4 md:grid-cols-3">{services.map((service, index) => <button key={service.name} onClick={() => { setSelectedService(service.name); document.getElementById('reserve')?.scrollIntoView({ behavior: 'smooth' }) }} className={`group text-left border p-6 transition ${selectedService === service.name ? 'border-[#d6a84f] bg-[#161611]' : 'border-[#302f2a] bg-[#111210] hover:border-[#70603c]'}`}><div className="mb-12 flex items-center justify-between"><span className="font-mono text-xs text-[#777168]">0{index + 1}</span><ArrowRight className="size-4 text-[#d6a84f] transition group-hover:translate-x-1" /></div><h3 className="text-xl">{service.name}</h3><p className="mt-2 min-h-12 text-sm leading-6 text-[#777168]">{service.detail}</p><div className="mt-5 flex items-center justify-between border-t border-[#2b2a26] pt-4 font-mono text-sm"><span className="text-[#d6a84f]">{service.price}</span><span className="text-[#777168]">{service.time}</span></div></button>)}</div></section>

        <section id="reserve" className="grid gap-6 border-t border-[#2b2a26] py-16 sm:py-20 lg:grid-cols-[1.1fr_.9fr]">
          <div className="border border-[#3d3a34] bg-[#111210] p-5 sm:p-8"><div className="mb-8 flex items-start justify-between"><div><p className="font-mono text-[10px] tracking-[0.25em] text-[#d6a84f]">02 / AVAILABILITY</p><h2 className="mt-3 text-2xl tracking-[-0.04em]">Choose your window.</h2></div><CalendarDays className="size-5 text-[#d6a84f]" /></div><div className="flex items-center justify-between border-b border-[#2b2a26] pb-4"><button aria-label="Previous month" onClick={() => setMonthOffset(Math.max(0, monthOffset - 1))} className="rounded p-2 text-[#777168] hover:bg-[#25231d] hover:text-[#d6a84f]"><ChevronLeft className="size-4" /></button><span className="font-mono text-sm tracking-[0.15em] text-[#d6a84f]">{month.toLocaleDateString('en-US', { month: 'long', year: 'numeric' }).toUpperCase()}</span><button aria-label="Next month" onClick={() => setMonthOffset(Math.min(2, monthOffset + 1))} className="rounded p-2 text-[#777168] hover:bg-[#25231d] hover:text-[#d6a84f]"><ChevronRight className="size-4" /></button></div><div className="mt-5 grid grid-cols-7 gap-1 text-center font-mono text-[10px] text-[#777168]">{['SU','MO','TU','WE','TH','FR','SA'].map(day => <span key={day} className="pb-2">{day}</span>)}{days.map((date, i) => date ? <button key={i} onClick={() => chooseDate(date)} className={`aspect-square rounded text-xs transition ${selectedDate === toDateKey(date) ? 'bg-[#d6a84f] font-bold text-[#080909]' : availability[toDateKey(date)] ? 'text-[#e6dcc8] hover:bg-[#25231d] hover:text-[#d6a84f]' : 'text-[#48453e]'}`}>{date.getDate()}</button> : <span key={i} />)}</div><div className="mt-8 border-t border-[#2b2a26] pt-5"><div className="mb-3 flex justify-between"><span className="font-mono text-[10px] tracking-[0.15em] text-[#777168]">AVAILABLE WINDOWS</span><span className="text-xs text-[#d6a84f]">{new Date(`${selectedDate}T12:00:00`).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}</span></div><div className="grid grid-cols-2 gap-2 sm:grid-cols-4">{availableTimes.map(time => <button key={time} onClick={() => setSelectedTime(time)} className={`border py-3 font-mono text-xs transition ${selectedTime === time ? 'border-[#d6a84f] bg-[#25231d] text-[#d6a84f]' : 'border-[#302f2a] text-[#aaa396] hover:border-[#70603c]'}`}>{time}</button>)}</div></div></div>
          <form onSubmit={(event) => { event.preventDefault(); setSubmitted(true) }} className="border border-[#3d3a34] bg-[#161611] p-5 sm:p-8"><p className="font-mono text-[10px] tracking-[0.25em] text-[#d6a84f]">03 / INTAKE</p><h2 className="mt-3 text-2xl tracking-[-0.04em]">Lock it in.</h2>{submitted ? <div className="flex min-h-[390px] flex-col items-center justify-center text-center"><div className="mb-5 flex size-14 items-center justify-center rounded-full border border-[#d6a84f] text-[#d6a84f]"><Check className="size-6" /></div><h3 className="text-xl">Request received.</h3><p className="mt-3 max-w-xs text-sm leading-6 text-[#777168]">We'll confirm your {selectedService.toLowerCase()} for {selectedTime} shortly.</p><button type="button" onClick={() => setSubmitted(false)} className="mt-7 font-mono text-[10px] tracking-[0.15em] text-[#d6a84f] underline underline-offset-4">EDIT REQUEST</button></div> : <div className="mt-7 flex flex-col gap-5"><label className="flex flex-col gap-2 font-mono text-[10px] tracking-[0.12em] text-[#777168]">FULL NAME<input required name="name" placeholder="YOUR NAME" className="border border-[#3b3933] bg-[#0d0e0d] px-3 py-3 font-sans text-sm tracking-normal text-[#f6f0e4] outline-none placeholder:text-[#4e4b44] focus:border-[#d6a84f]" /></label><label className="flex flex-col gap-2 font-mono text-[10px] tracking-[0.12em] text-[#777168]">EMAIL ADDRESS<input required type="email" name="email" placeholder="YOU@EXAMPLE.COM" className="border border-[#3b3933] bg-[#0d0e0d] px-3 py-3 font-sans text-sm tracking-normal text-[#f6f0e4] outline-none placeholder:text-[#4e4b44] focus:border-[#d6a84f]" /></label><label className="flex flex-col gap-2 font-mono text-[10px] tracking-[0.12em] text-[#777168]">NOTES <textarea name="notes" rows={3} placeholder="ANY DETAILS WE SHOULD KNOW?" className="resize-none border border-[#3b3933] bg-[#0d0e0d] px-3 py-3 font-sans text-sm tracking-normal text-[#f6f0e4] outline-none placeholder:text-[#4e4b44] focus:border-[#d6a84f]" /></label><div className="flex items-start gap-3 text-xs leading-5 text-[#777168]"><input required id="privacy" type="checkbox" className="mt-1 accent-[#d6a84f]" /><label htmlFor="privacy">I agree to the <a href="#privacy" className="text-[#d6a84f] underline underline-offset-2">privacy terms</a>. Your information is used only to manage this appointment and is never sold.</label></div><button type="submit" className="flex items-center justify-center gap-3 bg-[#d6a84f] py-4 font-mono text-xs font-bold tracking-[0.16em] text-[#080909] transition hover:bg-[#f0c96e]">REQUEST {selectedTime} <ArrowRight className="size-4" /></button></div>}</form>
        </section>

        <footer className="flex flex-col gap-6 border-t border-[#2b2a26] py-8 text-xs text-[#777168] sm:flex-row sm:items-center sm:justify-between"><div><span className="font-mono text-[#d6a84f]">SHARP SCHEDULES</span><span className="mx-2 text-[#3d3a34]">/</span> 214 Mercer St, Downtown</div><div className="flex items-center gap-5"><span className="flex items-center gap-2"><MapPin className="size-3" /> Mon—Sat / 09:00—19:00</span><Instagram className="size-4 text-[#d6a84f]" /></div></footer>
      </div>
    </main>
  )
}
