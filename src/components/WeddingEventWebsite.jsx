"use client";
import Image from "next/image";
import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  Check,
  ChevronDown,
  Flower2,
  Heart,
  Camera,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Quote,
  Sparkles,
  Star,
  Users,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const palette = {
  ivory: "#F8F4ED",
  cream: "#EFE5D6",
  sage: "#A9B39E",
  olive: "#68705F",
  clay: "#B9826B",
  charcoal: "#35332F",
};

const navItems = [
  ["Home", "home"],
  ["Weddings", "weddings"],
  ["Events", "events"],
  ["Portfolio", "portfolio"],
  ["About", "about"],
  ["Contact", "contact"],
];

const services = [
  {
    eyebrow: "For your love story",
    title: "Wedding Planning",
    copy: "From the first inspiration board to the last dance, every detail is shaped around your story.",
    bullets: ["Full-service planning", "Partial planning", "Wedding-day coordination"],
    icon: Heart,
    target: "weddings",
  },
  {
    eyebrow: "For meaningful moments",
    title: "Event Planning",
    copy: "Warm, beautifully considered celebrations for milestones, brands, families and friends.",
    bullets: ["Private celebrations", "Corporate gatherings", "Creative brand events"],
    icon: Sparkles,
    target: "events",
  },
];

const weddingPackages = [
  {
    number: "01",
    title: "The Whole Story",
    subtitle: "Full-service planning",
    copy: "A calm, creative partnership from first ideas to flawless execution.",
    items: ["Concept and budget", "Venue and vendor sourcing", "Design direction", "Timeline and on-site coordination"],
  },
  {
    number: "02",
    title: "The Final Chapter",
    subtitle: "Partial planning",
    copy: "Expert support to bring your plans together and confidently fill the remaining gaps.",
    items: ["Planning review", "Vendor recommendations", "Design refinement", "Six-week coordination"],
  },
  {
    number: "03",
    title: "The Beautiful Day",
    subtitle: "Wedding-day coordination",
    copy: "You celebrate. We quietly manage every cue, handover and finishing touch.",
    items: ["Final vendor check-in", "Detailed day timeline", "Venue set-up oversight", "On-site coordination"],
  },
];

const eventTypes = [
  { title: "Private Celebrations", copy: "Birthdays, anniversaries, showers and intimate dinners made deeply personal.", icon: Heart },
  { title: "Corporate Events", copy: "Refined gatherings that bring teams, clients and brand stories together.", icon: Users },
  { title: "Destination Events", copy: "Beautifully orchestrated celebrations in places worth travelling for.", icon: MapPin },
];

const gallery = [
  { id: 1, type: "Weddings", title: "Golden Meadow Vows", location: "Countryside", image: "public/images/boho-bouquet.jpg" },
  { id: 2, type: "Events", title: "A Candlelit Birthday", location: "Private Estate", colors: "from-[#8c695a] via-[#d2a988] to-[#efe0ca]" },
  { id: 3, type: "Weddings", title: "Modern Garden Romance", location: "Botanical House", colors: "from-[#b8c2ad] via-[#efe4d3] to-[#8c7465]" },
  { id: 4, type: "Events", title: "Gather & Grow", location: "Brand Dinner", colors: "from-[#5d6657] via-[#aeb59e] to-[#e9d7be]" },
  { id: 5, type: "Weddings", title: "Wildflower Elopement", location: "Alpine Lake", colors: "from-[#8194a0] via-[#b9b99e] to-[#e7d9c2]" },
  { id: 6, type: "Events", title: "Sunday in the Orchard", location: "Family Celebration", colors: "from-[#c9a780] via-[#7d886b] to-[#f0e4cf]" },
];

const reviews = [
  { quote: "We felt completely understood from the first conversation. The day looked beautiful, but more importantly, it felt exactly like us.", names: "Mia & Jonas", event: "Garden wedding" },
  { quote: "Every detail was thoughtful and the entire evening flowed effortlessly. We could simply be present with our guests.", names: "Leonie", event: "Private celebration" },
  { quote: "Creative, calm and exceptionally organised. Our team event had warmth, purpose and a visual identity we loved.", names: "Clara", event: "Brand event" },
];

const faqs = [
  ["How early should we get in touch?", "For weddings, reaching out 9 to 18 months before your preferred date gives us the widest choice of venues and creative partners. For smaller events, shorter lead times can often work."],
  ["Do you plan events outside your region?", "Yes. We welcome destination weddings and events, and build travel, local sourcing and venue coordination into the planning proposal."],
  ["Can you work with vendors we have already chosen?", "Absolutely. We are happy to join your existing team, review what is already in place and coordinate everyone around one clear plan."],
  ["What happens after we inquire?", "We arrange a relaxed introductory call to hear about your celebration, priorities and planning stage. You then receive a tailored proposal with the best-fit service."],
];

function DecorativeSprig({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 160 240" fill="none" aria-hidden="true">
      <path d="M78 230C77 164 89 105 128 20" stroke="currentColor" strokeWidth="1.5" />
      <path d="M87 164C57 153 37 132 24 103C53 105 78 126 87 164Z" fill="currentColor" fillOpacity=".18" stroke="currentColor" />
      <path d="M101 112C121 91 141 84 157 83C151 108 129 124 101 112Z" fill="currentColor" fillOpacity=".18" stroke="currentColor" />
      <path d="M70 197C46 193 27 179 12 157C38 154 60 170 70 197Z" fill="currentColor" fillOpacity=".18" stroke="currentColor" />
      <circle cx="132" cy="18" r="10" fill="currentColor" fillOpacity=".25" />
    </svg>
  );
}

function SectionTitle({ eyebrow, title, copy, center = false }) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#8c604f]">{eyebrow}</p>
      <h2 className="font-serif text-4xl leading-[1.08] text-[#35332F] sm:text-5xl lg:text-6xl">{title}</h2>
      {copy && <p className="mt-6 text-base leading-7 text-[#6c685f] sm:text-lg">{copy}</p>}
    </div>
  );
}

export default function WeddingEventWebsite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState("All");
  const [reviewIndex, setReviewIndex] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const projects = useMemo(() => filter === "All" ? gallery : gallery.filter((x) => x.type === filter), [filter]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F8F4ED] text-[#35332F]">
      <style>{`
        html { scroll-behavior: smooth; }
        ::selection { background: #A9B39E; color: #fff; }
        .grain { background-image: radial-gradient(rgba(53,51,47,.055) .65px, transparent .65px); background-size: 5px 5px; }
        .field { width: 100%; border: 0; border-bottom: 1px solid rgba(53,51,47,.25); background: transparent; padding: 12px 0; outline: none; transition: border-color .2s; }
        .field:focus { border-color: #68705F; }
      `}</style>

      <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-[#F8F4ED]/90 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <button onClick={() => scrollTo("home")} className="group flex items-center gap-3" aria-label="Go to homepage">
            <span className="grid h-10 w-10 place-items-center rounded-full border border-[#88927f] text-[#68705F] transition group-hover:bg-[#68705F] group-hover:text-white"><Flower2 size={18} /></span>
            <span className="text-left">
              <span className="block font-serif text-xl leading-none tracking-wide">IB Signature</span>
              <span className="mt-1 block text-[8px] uppercase tracking-[.28em] text-[#777168]">Weddings & Events</span>
            </span>
          </button>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
            {navItems.map(([label, id]) => (
              <button key={id} onClick={() => scrollTo(id)} className="text-xs uppercase tracking-[.16em] text-[#5f5b54] transition hover:text-[#9b6652]">{label}</button>
            ))}
          </nav>

          <Button onClick={() => scrollTo("contact")} className="hidden rounded-full bg-[#68705F] px-6 text-xs uppercase tracking-[.14em] text-white hover:bg-[#52594c] lg:inline-flex">
            Tell me your story
          </Button>
          <button className="p-2 lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X /> : <Menu />}</button>
        </div>
        <AnimatePresence>
          {menuOpen && (
            <motion.nav initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="border-t border-black/5 bg-[#F8F4ED] px-5 py-5 lg:hidden">
              {navItems.map(([label, id]) => <button key={id} onClick={() => scrollTo(id)} className="block w-full border-b border-black/5 py-3 text-left font-serif text-2xl">{label}</button>)}
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      <section id="home" className="grain relative min-h-screen overflow-hidden pt-20">
        <DecorativeSprig className="absolute -right-8 top-20 h-[38rem] text-[#7a856f] opacity-40" />
        <DecorativeSprig className="absolute -bottom-40 -left-14 h-[32rem] -rotate-[145deg] text-[#b47962] opacity-25" />
        <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-[1.02fr_.98fr] lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }} className="relative z-10 max-w-2xl">
            <div className="mb-7 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[.28em] text-[#8c604f]"><span className="h-px w-10 bg-[#b9826b]" /> Wedding & event planning</div>
            <h1 className="font-serif text-[3.4rem] leading-[.98] sm:text-7xl lg:text-[5.6rem]">Thoughtfully planned.<br/><em className="font-normal text-[#68705F]">Beautifully</em> celebrated.</h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-[#68645d]">We create soulful weddings and meaningful events with calm guidance, artful details and a beautifully personal point of view.</p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button onClick={() => scrollTo("contact")} className="h-12 rounded-full bg-[#68705F] px-7 text-xs uppercase tracking-[.15em] text-white hover:bg-[#535b4d]">Start your journey <ArrowRight className="ml-2" size={16}/></Button>
              <Button onClick={() => scrollTo("portfolio")} variant="outline" className="h-12 rounded-full border-[#827d73] bg-transparent px-7 text-xs uppercase tracking-[.15em] hover:bg-white/40">View our work</Button>
            </div>
            <div className="mt-12 flex items-center gap-5 text-xs uppercase tracking-[.14em] text-[#777168]"><span className="flex -space-x-2">{["#A9B39E", "#D9B59F", "#8C7465"].map(c => <i key={c} style={{background:c}} className="h-8 w-8 rounded-full border-2 border-[#F8F4ED]" />)}</span><span>Made for moments<br/>that feel like you</span></div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: .97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8, delay: .15 }} className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <div className="relative ml-auto aspect-[4/5] w-[88%] overflow-hidden rounded-t-[12rem] bg-gradient-to-br from-[#a9b39e] via-[#d8c7ae] to-[#8d7669] shadow-2xl shadow-[#62584b]/15">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_25%,rgba(255,255,255,.65),transparent_25%),radial-gradient(circle_at_22%_65%,rgba(255,242,221,.4),transparent_22%)]" />
              <div className="absolute inset-x-[16%] bottom-[12%] top-[18%] rounded-t-full border border-white/45" />
              <div className="absolute bottom-[17%] left-[18%] h-40 w-40 rounded-full bg-[#f2e5d2]/75 blur-sm" />
              <div className="absolute bottom-[20%] right-[15%] h-52 w-28 rotate-12 rounded-full bg-[#76816d]/80 blur-sm" />
              <div className="absolute bottom-[18%] left-1/2 h-52 w-px -translate-x-1/2 bg-white/50" />
              <div className="absolute bottom-[15%] left-1/2 -translate-x-1/2 text-center text-white drop-shadow">
                <Flower2 className="mx-auto mb-3" size={34} strokeWidth={1}/>
                <p className="font-serif text-2xl italic">Your day, your way</p>
              </div>
            </div>
            <div className="absolute -bottom-6 left-0 max-w-[210px] rounded-2xl bg-[#fffaf2] p-5 shadow-xl shadow-black/10">
              <Quote size={20} className="mb-2 text-[#b9826b]" />
              <p className="font-serif text-lg leading-snug">“The day felt effortless, intimate and completely ours.”</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#35332F] py-6 text-[#F8F4ED]">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-5 text-[10px] uppercase tracking-[.23em] lg:justify-between">
          <span>Calm coordination</span><Flower2 size={13} className="text-[#b7c1aa]"/><span>Considered design</span><Flower2 size={13} className="text-[#b7c1aa]"/><span>Trusted partners</span><Flower2 size={13} className="text-[#b7c1aa]"/><span>Joyful celebrations</span>
        </div>
      </section>

      <section className="relative px-5 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="What we create" title="Celebrations with soul, style and space to be present." copy="Great planning is almost invisible. It lets you notice the laughter, hold the hug a little longer and enjoy every beautifully unscripted moment." center />
          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card key={service.title} className="group overflow-hidden rounded-[2rem] border-0 bg-[#EFE5D6] shadow-none transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#6a5b4c]/10">
                  <CardContent className="relative p-8 sm:p-10">
                    <Icon className="absolute right-8 top-8 text-[#a07866] opacity-65" strokeWidth={1.2} size={38}/>
                    <p className="text-[10px] uppercase tracking-[.24em] text-[#8c604f]">{service.eyebrow}</p>
                    <h3 className="mt-5 font-serif text-4xl">{service.title}</h3>
                    <p className="mt-4 max-w-md leading-7 text-[#6a655d]">{service.copy}</p>
                    <ul className="mt-8 space-y-3">{service.bullets.map(x => <li key={x} className="flex items-center gap-3 text-sm"><Check size={15} className="text-[#68705F]"/>{x}</li>)}</ul>
                    <button onClick={() => scrollTo(service.target)} className="mt-9 flex items-center gap-2 text-xs font-semibold uppercase tracking-[.16em] text-[#68705F]">Explore services <ArrowRight size={15} className="transition group-hover:translate-x-1"/></button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section id="weddings" className="relative bg-[#E7E9E0] px-5 py-24 lg:px-8 lg:py-32">
        <DecorativeSprig className="absolute -right-12 bottom-0 h-80 text-[#7e8974] opacity-25" />
        <div className="relative mx-auto max-w-7xl">
          <SectionTitle eyebrow="Weddings" title="A planning experience as memorable as the day itself." copy="Choose the level of support that meets you where you are. Every service is tailored after our first conversation." />
          <div className="mt-16 grid gap-5 lg:grid-cols-3">
            {weddingPackages.map((item) => (
              <article key={item.number} className="rounded-[2rem] border border-[#848d7b]/25 bg-[#F8F4ED]/70 p-7 backdrop-blur sm:p-8">
                <div className="flex items-center justify-between"><span className="font-serif text-4xl italic text-[#9a6c5b]">{item.number}</span><span className="rounded-full border border-[#89927f]/30 px-3 py-1 text-[9px] uppercase tracking-[.18em]">{item.subtitle}</span></div>
                <h3 className="mt-8 font-serif text-3xl">{item.title}</h3>
                <p className="mt-4 min-h-20 leading-7 text-[#6b675f]">{item.copy}</p>
                <ul className="mt-6 border-t border-[#89927f]/20 pt-6">{item.items.map(i => <li key={i} className="mb-3 flex gap-3 text-sm"><Check size={15} className="mt-0.5 shrink-0 text-[#68705F]"/>{i}</li>)}</ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="events" className="px-5 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[.9fr_1.1fr]">
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/5] overflow-hidden rounded-[2rem] bg-gradient-to-tr from-[#7d866f] via-[#bea389] to-[#eadbc5]">
              <div className="grid h-full place-items-center bg-[radial-gradient(circle_at_30%_35%,rgba(255,255,255,.5),transparent_25%)] p-10 text-center text-white">
                <div className="rounded-full border border-white/50 px-12 py-20 backdrop-blur-[2px]"><Sparkles className="mx-auto mb-4" strokeWidth={1}/><p className="font-serif text-4xl">Gather beautifully</p><p className="mt-3 text-xs uppercase tracking-[.2em]">Whatever the reason</p></div>
              </div>
            </div>
            <div className="absolute -bottom-7 -right-3 rounded-2xl bg-[#B9826B] p-6 text-[#fffaf4] shadow-xl sm:-right-8"><CalendarDays size={24}/><p className="mt-3 font-serif text-xl">Small moments.<br/>Big memories.</p></div>
          </div>
          <div className="order-1 lg:order-2">
            <SectionTitle eyebrow="Events" title="Gather people. Mark the moment. Make it matter." copy="Whether intimate or expansive, every gathering deserves an atmosphere that feels effortless, welcoming and distinctly yours." />
            <div className="mt-10 space-y-4">
              {eventTypes.map(({title, copy, icon: Icon}) => (
                <div key={title} className="group flex gap-5 rounded-2xl border border-[#837c70]/15 p-5 transition hover:bg-[#EFE5D6]">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#E1E4D9] text-[#68705F]"><Icon size={19} strokeWidth={1.4}/></span>
                  <div><h3 className="font-serif text-2xl">{title}</h3><p className="mt-1 leading-6 text-[#6c675f]">{copy}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="bg-[#35332F] px-5 py-24 text-[#F8F4ED] lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div><p className="mb-4 text-[11px] font-semibold uppercase tracking-[.28em] text-[#d2a28e]">Selected celebrations</p><h2 className="max-w-xl font-serif text-4xl leading-tight sm:text-6xl">A glimpse into the stories we have shaped.</h2></div>
            <div className="flex gap-2">{["All", "Weddings", "Events"].map(x => <button key={x} onClick={() => setFilter(x)} className={`rounded-full border px-5 py-2 text-[10px] uppercase tracking-[.18em] transition ${filter === x ? "border-[#d6c9b7] bg-[#d6c9b7] text-[#35332F]" : "border-white/25 hover:border-white/60"}`}>{x}</button>)}</div>
          </div>
          <motion.div layout className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence>
              {projects.map((item, index) => (
                <motion.article layout key={item.id} initial={{opacity:0, scale:.96}} animate={{opacity:1, scale:1}} exit={{opacity:0, scale:.96}} className={`group relative overflow-hidden rounded-3xl ${index === 1 ? "lg:translate-y-8" : ""}`}>
                  <div className={`aspect-[4/5] bg-gradient-to-br ${item.colors}`}><div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,.45),transparent_20%)] transition duration-500 group-hover:scale-110"/></div>
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent p-7 pt-20"><p className="text-[9px] uppercase tracking-[.22em] text-white/75">{item.type} · {item.location}</p><h3 className="mt-2 font-serif text-3xl">{item.title}</h3></div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <section id="about" className="relative overflow-hidden px-5 py-24 lg:px-8 lg:py-32">
        <DecorativeSprig className="absolute -left-16 top-16 h-96 -rotate-12 text-[#b9826b] opacity-20" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
          <div className="mx-auto aspect-square w-full max-w-md rounded-full bg-gradient-to-br from-[#e3d5c0] via-[#b9c0ac] to-[#a97a65] p-4">
            <div className="grid h-full place-items-center rounded-full border border-white/60 bg-white/10 text-center text-white backdrop-blur-[1px]"><div><Flower2 className="mx-auto" size={48} strokeWidth={1}/><p className="mt-4 font-serif text-4xl">Hello, I’m Isabelle</p><p className="mt-2 text-xs uppercase tracking-[.2em]">Founder & lead planner</p></div></div>
          </div>
          <div>
            <SectionTitle eyebrow="Meet your planner" title="Beauty matters. How it feels matters more." />
            <div className="mt-7 space-y-5 leading-7 text-[#68645d]"><p>I started IB Signature with one simple belief: your celebration should never feel like a performance. It should feel like coming home to the people you love.</p><p>My approach blends thoughtful organisation with an editorial eye. I listen closely, edit carefully and build a planning experience that feels calm from the first conversation to the final farewell.</p></div>
            <div className="mt-8 flex flex-wrap gap-6 border-t border-[#7e786d]/20 pt-7"><div><b className="block font-serif text-3xl font-normal">Calm</b><span className="text-[9px] uppercase tracking-[.2em]">in every detail</span></div><div><b className="block font-serif text-3xl font-normal">Personal</b><span className="text-[9px] uppercase tracking-[.2em]">never templated</span></div><div><b className="block font-serif text-3xl font-normal">Joyful</b><span className="text-[9px] uppercase tracking-[.2em]">from start to finish</span></div></div>
          </div>
        </div>
      </section>

      <section className="bg-[#EFE5D6] px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <Quote className="mx-auto text-[#b9826b]" strokeWidth={1} size={40}/>
          <AnimatePresence mode="wait">
            <motion.div key={reviewIndex} initial={{opacity:0, y:8}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-8}} className="mt-7">
              <p className="font-serif text-3xl leading-tight sm:text-5xl">“{reviews[reviewIndex].quote}”</p>
              <div className="mt-7 flex justify-center gap-1 text-[#a67661]">{[1,2,3,4,5].map(x => <Star key={x} size={14} fill="currentColor"/>)}</div>
              <p className="mt-4 text-xs uppercase tracking-[.2em]">{reviews[reviewIndex].names} · {reviews[reviewIndex].event}</p>
            </motion.div>
          </AnimatePresence>
          <div className="mt-9 flex justify-center gap-2">{reviews.map((_,i) => <button key={i} onClick={() => setReviewIndex(i)} aria-label={`Show review ${i+1}`} className={`h-2 rounded-full transition-all ${i === reviewIndex ? "w-7 bg-[#68705F]" : "w-2 bg-[#a8a096]"}`}/>)}</div>
        </div>
      </section>

      <section className="px-5 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[.75fr_1.25fr]">
          <SectionTitle eyebrow="Questions, answered" title="A little clarity before we begin." copy="Still wondering about something? Add it to your inquiry and we will happily talk it through." />
          <div>
            {faqs.map(([q,a],i) => (
              <div key={q} className="border-b border-[#79736b]/20">
                <button onClick={() => setOpenFaq(openFaq === i ? -1 : i)} className="flex w-full items-center justify-between gap-6 py-6 text-left font-serif text-xl sm:text-2xl"><span>{q}</span><ChevronDown className={`shrink-0 transition ${openFaq === i ? "rotate-180" : ""}`} size={20}/></button>
                <AnimatePresence>{openFaq === i && <motion.p initial={{opacity:0,height:0}} animate={{opacity:1,height:"auto"}} exit={{opacity:0,height:0}} className="overflow-hidden pb-6 leading-7 text-[#6a665e]">{a}</motion.p>}</AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative bg-[#6B7463] px-5 py-24 text-[#fffaf1] lg:px-8 lg:py-32">
        <DecorativeSprig className="absolute -right-8 bottom-0 h-96 text-white opacity-10" />
        <div className="relative mx-auto grid max-w-7xl gap-16 lg:grid-cols-[.85fr_1.15fr]">
          <div>
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[.28em] text-[#ecd0bf]">Begin your celebration</p>
            <h2 className="font-serif text-5xl leading-[1.05] sm:text-7xl">Let’s make something beautiful together.</h2>
            <p className="mt-7 max-w-md leading-7 text-white/75">Tell us what you are dreaming of. We will reply with next steps and arrange a relaxed introductory conversation.</p>
            <div className="mt-10 space-y-4 text-sm text-white/85">
              <a href="mailto:hello@ib-signature.com" className="flex items-center gap-3 hover:text-white"><Mail size={17}/> hello@ib-signature.com</a>
              <a href="tel:+43123456789" className="flex items-center gap-3 hover:text-white"><Phone size={17}/> +43 123 456 789</a>
              <span className="flex items-center gap-3"><MapPin size={17}/> Austria · Available worldwide</span>
            </div>
          </div>

          <Card className="rounded-[2rem] border-0 bg-[#fffaf1] text-[#35332F] shadow-2xl shadow-black/10">
            <CardContent className="p-7 sm:p-10">
              {submitted ? (
                <motion.div initial={{opacity:0,scale:.97}} animate={{opacity:1,scale:1}} className="grid min-h-[520px] place-items-center text-center">
                  <div><span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[#E1E4D9] text-[#68705F]"><Check size={28}/></span><h3 className="mt-6 font-serif text-4xl">Thank you.</h3><p className="mx-auto mt-4 max-w-sm leading-7 text-[#6c675f]">Your story has landed safely. We are delighted you thought of IB Signature.</p><Button onClick={() => setSubmitted(false)} variant="outline" className="mt-7 rounded-full">Send another inquiry</Button></div>
                </motion.div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                  <div className="mb-8"><p className="text-[10px] uppercase tracking-[.22em] text-[#9a6c5b]">Inquiry form</p><h3 className="mt-2 font-serif text-3xl">Tell us a little about your plans</h3></div>
                  <div className="grid gap-x-7 gap-y-6 sm:grid-cols-2">
                    <label className="text-[10px] uppercase tracking-[.16em]">Your name<input required className="field text-sm normal-case tracking-normal" placeholder="First and last name"/></label>
                    <label className="text-[10px] uppercase tracking-[.16em]">Email address<input required type="email" className="field text-sm normal-case tracking-normal" placeholder="you@example.com"/></label>
                    <label className="text-[10px] uppercase tracking-[.16em]">Event type<select className="field text-sm normal-case tracking-normal"><option>Wedding</option><option>Private celebration</option><option>Corporate event</option><option>Destination event</option><option>Other</option></select></label>
                    <label className="text-[10px] uppercase tracking-[.16em]">Preferred date<input type="date" className="field text-sm normal-case tracking-normal"/></label>
                    <label className="text-[10px] uppercase tracking-[.16em]">Location<input className="field text-sm normal-case tracking-normal" placeholder="City or venue"/></label>
                    <label className="text-[10px] uppercase tracking-[.16em]">Estimated guests<input type="number" min="1" className="field text-sm normal-case tracking-normal" placeholder="Approximate number"/></label>
                    <label className="text-[10px] uppercase tracking-[.16em] sm:col-span-2">Tell us your vision<textarea required rows={4} className="field resize-none text-sm normal-case tracking-normal" placeholder="The atmosphere, priorities and details you already know..."/></label>
                  </div>
                  <Button type="submit" className="mt-8 h-12 w-full rounded-full bg-[#B9826B] text-xs uppercase tracking-[.16em] text-white hover:bg-[#9d6d59]">Send my inquiry <ArrowRight className="ml-2" size={16}/></Button>
                  <p className="mt-4 text-center text-[10px] leading-5 text-[#817b71]">By submitting, you agree that we may use your details to respond to your inquiry.</p>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-[#35332F] px-5 py-14 text-[#F8F4ED] lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-3">
            <div><div className="flex items-center gap-3"><Flower2 className="text-[#b7c1aa]"/><span className="font-serif text-2xl">IB Signature</span></div><p className="mt-4 max-w-xs text-sm leading-6 text-white/55">Soulful weddings and meaningful events, thoughtfully planned and beautifully celebrated.</p></div>
            <div><p className="text-[10px] uppercase tracking-[.2em] text-[#d3a593]">Explore</p><div className="mt-4 grid grid-cols-2 gap-3">{navItems.slice(1).map(([l,id]) => <button key={id} onClick={() => scrollTo(id)} className="text-left text-sm text-white/65 hover:text-white">{l}</button>)}</div></div>
            <div><p className="text-[10px] uppercase tracking-[.2em] text-[#d3a593]">Stay inspired</p><p className="mt-4 text-sm text-white/60">Follow the stories, details and celebrations behind the scenes.</p><div className="mt-5 flex gap-3"><a href="#instagram" aria-label="Instagram" className="grid h-10 w-10 place-items-center rounded-full border border-white/20 hover:bg-white hover:text-[#35332F]"><Camera size={17}/></a><a href="mailto:hello@ib-signature.com" aria-label="Email" className="grid h-10 w-10 place-items-center rounded-full border border-white/20 hover:bg-white hover:text-[#35332F]"><Mail size={17}/></a><a href="https://wa.me/43123456789" aria-label="WhatsApp" className="grid h-10 w-10 place-items-center rounded-full border border-white/20 hover:bg-white hover:text-[#35332F]"><MessageCircle size={17}/></a></div></div>
          </div>
          <div className="flex flex-col justify-between gap-3 pt-7 text-[10px] uppercase tracking-[.15em] text-white/40 sm:flex-row"><span>© 2026 IB Signature. All rights reserved.</span><div className="flex gap-5"><a href="#privacy" className="hover:text-white">Privacy</a><a href="#imprint" className="hover:text-white">Imprint</a></div></div>
        </div>
      </footer>
    </main>
  );
}