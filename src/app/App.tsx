import { useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Compass,
  CreditCard,
  Globe2,
  HeartHandshake,
  Luggage,
  Mail,
  MapPin,
  Menu,
  Phone,
  Plane,
  Send,
  ShieldCheck,
  Star,
  Users,
  X,
} from "lucide-react";
import heroImage from "@/imports/WebsiteDesign/a25dec4956b304f720e56443b30caa96d3b7b425.png";
import planeImage from "@/imports/WebsiteDesign/423c7e4fe50b236e5b618cfe6dbc132469208162.png";
import mountainImage from "@/imports/WebsiteDesign/65005a737ed2314ab3d2c221bf34981abb9c6330.png";
import waterfallImage from "@/imports/WebsiteDesign/497a489463b356d5340c6d2bb02c66dab940df9d.png";
import cityImage from "@/imports/WebsiteDesign/6827e441ad4186596b6cba797d04106581a903f0.png";
import aboutImage from "@/imports/WebsiteDesign/d2dff81b9e9a1977fe0258d69ac534227a4920d3.png";
import beachImage from "@/imports/WebsiteDesign/88d0ce0d0757202ccffd68fa3b6ff628d95913cd.png";
import adventureImage from "@/imports/WebsiteDesign/af39c348d9a09771e82e112afb575e6d0fa1cc1a.png";
import guideImage from "@/imports/WebsiteDesign/bfc864eda75557d31a80f8324dd7e358e0383483.png";
import avatarOne from "@/imports/WebsiteDesign/333de77dec601de480b0e086ecbe42066d68b399.png";
import avatarTwo from "@/imports/WebsiteDesign/0b557a6d7ebd3f24329b116a329d8308e66d2dce.png";
import avatarThree from "@/imports/WebsiteDesign/d6e69a7424f60534ce021fbcb8cee4f9ea6fdd53.png";

type Page = "home" | "packages" | "about" | "contact";

const navItems: { label: string; page: Page }[] = [
  { label: "Home", page: "home" },
  { label: "Packages", page: "packages" },
  { label: "About Us", page: "about" },
  { label: "Contact Us", page: "contact" },
];

const destinations = [
  { title: "Swiss Alps", location: "NRT, Switzerland", image: mountainImage, rating: "4.8" },
  { title: "Wild Falls", location: "NRT, Canada", image: waterfallImage, rating: "4.9" },
  { title: "Historic Istanbul", location: "NRT, Turkey", image: cityImage, rating: "5.0" },
];

const stats = [
  ["10+", "Years Experience"],
  ["12K", "Happy Clients"],
  ["4.8", "Overall Rating"],
];

const tourPackages = [
  {
    title: "Alpine Escape",
    location: "Switzerland",
    duration: "6 days",
    group: "2-8 guests",
    price: "$1,490",
    image: mountainImage,
    highlights: ["Lake cruise", "Mountain rail pass", "Boutique hotel"],
  },
  {
    title: "Waterfall Trails",
    location: "Canada",
    duration: "5 days",
    group: "4-10 guests",
    price: "$1,220",
    image: waterfallImage,
    highlights: ["Nature guide", "Forest lodge", "Scenic transfers"],
  },
  {
    title: "Istanbul Heritage",
    location: "Turkey",
    duration: "7 days",
    group: "2-12 guests",
    price: "$1,080",
    image: cityImage,
    highlights: ["Old city walk", "Food tour", "Bosphorus evening"],
  },
  {
    title: "Coastal Reset",
    location: "Bali",
    duration: "8 days",
    group: "2-6 guests",
    price: "$1,760",
    image: beachImage,
    highlights: ["Beach resort", "Wellness day", "Private driver"],
  },
  {
    title: "Desert Adventure",
    location: "Dubai",
    duration: "4 days",
    group: "2-10 guests",
    price: "$950",
    image: adventureImage,
    highlights: ["Dune safari", "Skyline tour", "Premium stay"],
  },
  {
    title: "Local Explorer",
    location: "Germany",
    duration: "6 days",
    group: "3-9 guests",
    price: "$1,310",
    image: guideImage,
    highlights: ["City passes", "Local host", "Rail tickets"],
  },
];

function Brand() {
  return (
    <button className="flex items-center gap-2" type="button">
      <span className="flex size-10 items-center justify-center rounded-full bg-[#101010] text-white shadow-lg shadow-black/10">
        <Plane className="size-5" />
      </span>
      <span className="font-['DM_Sans:Bold',sans-serif] text-lg font-bold tracking-normal text-[#101010]">
        Sky Wings
      </span>
    </button>
  );
}

function Header({
  activePage,
  setActivePage,
}: {
  activePage: Page;
  setActivePage: (page: Page) => void;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const openPage = (page: Page) => {
    setActivePage(page);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/50 bg-white/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Brand />

        <nav className="hidden items-center gap-2 rounded-full border border-white/70 bg-white/55 p-1 shadow-sm md:flex">
          {navItems.map((item) => (
            <button
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                activePage === item.page
                  ? "bg-[#2986fe] text-white shadow-lg shadow-blue-500/20"
                  : "text-[#101010]/70 hover:bg-white hover:text-[#101010]"
              }`}
              key={item.page}
              onClick={() => openPage(item.page)}
              type="button"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          className="interactive-button hidden items-center gap-2 rounded-full bg-[#101010] px-5 py-3 text-sm font-semibold text-white md:flex"
          onClick={() => openPage("contact")}
          type="button"
        >
          Book Trip <ArrowRight className="size-4" />
        </button>

        <button
          aria-label="Toggle menu"
          className="interactive-icon flex size-11 items-center justify-center rounded-full bg-[#101010] text-white md:hidden"
          onClick={() => setMenuOpen((value) => !value)}
          type="button"
        >
          {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {menuOpen ? (
        <div className="mx-5 mb-4 grid gap-2 rounded-3xl border border-white/70 bg-white/90 p-3 shadow-xl md:hidden">
          {navItems.map((item) => (
            <button
              className={`rounded-2xl px-4 py-3 text-left text-sm font-semibold ${
                activePage === item.page ? "bg-[#2986fe] text-white" : "text-[#101010]"
              }`}
              key={item.page}
              onClick={() => openPage(item.page)}
              type="button"
            >
              {item.label}
            </button>
          ))}
        </div>
      ) : null}
    </header>
  );
}

function Hero({ setActivePage }: { setActivePage: (page: Page) => void }) {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-16 pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-24 lg:pt-16">
      <div className="motion-fade-up">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-[#2986fe]">
          Elevate your travel journey
        </p>
        <h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] text-[#101010] sm:text-6xl lg:text-7xl">
          Experience the magic of flight.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-[#101010]/65">
          Thoughtful trip planning, handpicked destinations, and calm support from takeoff to touchdown.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <button
            className="interactive-button premium-glow inline-flex items-center justify-center gap-3 rounded-full bg-[#2986fe] px-7 py-4 font-semibold text-white"
            onClick={() => setActivePage("contact")}
            type="button"
          >
            Book A Trip Now <ArrowRight className="size-5" />
          </button>
          <button
            className="interactive-button inline-flex items-center justify-center gap-3 rounded-full border border-[#101010]/10 bg-white/80 px-7 py-4 font-semibold text-[#101010]"
            onClick={() => setActivePage("packages")}
            type="button"
          >
            View Packages
          </button>
        </div>
      </div>

      <div className="motion-fade-up motion-delay-1 relative min-h-[430px] overflow-hidden rounded-[32px] lg:min-h-[560px]">
        <img alt="Cloudy sky above mountains" className="absolute inset-0 size-full object-cover" src={heroImage} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/10 to-black/55" />
        <img
          alt="Airplane flying through sky"
          className="motion-float absolute left-1/2 top-[10%] w-[88%] max-w-[680px] -translate-x-1/2 rotate-[8deg] object-contain"
          src={planeImage}
        />
        <div className="glass-panel absolute bottom-5 left-5 right-5 rounded-3xl p-5 text-white sm:left-auto sm:w-[360px]">
          <div className="flex items-center gap-4">
            <div className="flex w-[92px] shrink-0 -space-x-4">
              {[avatarOne, avatarTwo, avatarThree].map((avatar) => (
                <img alt="" className="size-12 rounded-full border-2 border-white object-cover" key={avatar} src={avatar} />
              ))}
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-semibold">Awesome places</p>
              <p className="text-sm text-white/78">Discover the world one adventure at a time.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Destinations() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#2986fe]">Popular destination</p>
          <h2 className="mt-3 text-4xl font-semibold text-[#101010]">Unleash your wanderlust</h2>
        </div>
        <p className="max-w-xl text-[#101010]/60">
          Pick from traveler-loved routes with smart timing, beautiful stays, and flexible planning.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {destinations.map((destination, index) => (
          <article
            className={`glass-card interactive-card motion-fade-up motion-delay-${Math.min(index + 1, 3)} overflow-hidden rounded-[28px] p-4`}
            key={destination.title}
          >
            <div className="aspect-[4/3] overflow-hidden rounded-3xl">
              <img alt={destination.title} className="size-full object-cover" src={destination.image} />
            </div>
            <div className="flex items-center justify-between gap-4 p-3 pt-5">
              <div>
                <h3 className="text-xl font-semibold text-[#101010]">{destination.title}</h3>
                <p className="mt-2 flex items-center gap-1 text-sm text-[#101010]/55">
                  <MapPin className="size-4" /> {destination.location}
                </p>
              </div>
              <span className="interactive-button flex shrink-0 items-center gap-1 rounded-full bg-[#2986fe] px-4 py-2 text-sm font-semibold text-white">
                <Star className="size-4 fill-white" /> {destination.rating}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="mx-auto grid max-w-7xl gap-5 px-5 py-12 sm:grid-cols-3 lg:px-8">
      {stats.map(([value, label]) => (
        <div className="glass-card interactive-card rounded-[28px] p-8 text-center" key={label}>
          <p className="text-5xl font-semibold text-[#2986fe] lg:text-6xl">{value}</p>
          <p className="mt-3 text-lg font-medium text-[#101010]/70">{label}</p>
        </div>
      ))}
    </section>
  );
}

function PackageCard({
  tourPackage,
  compact = false,
  setActivePage,
}: {
  tourPackage: (typeof tourPackages)[number];
  compact?: boolean;
  setActivePage: (page: Page) => void;
}) {
  return (
    <article className="glass-card interactive-card overflow-hidden rounded-[30px] p-4">
      <div className="relative aspect-[4/3] overflow-hidden rounded-[24px]">
        <img alt={tourPackage.title} className="size-full object-cover" src={tourPackage.image} />
        <div className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-2 text-sm font-bold text-[#2986fe] backdrop-blur">
          {tourPackage.price}
        </div>
      </div>
      <div className="p-2 pt-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-2xl font-semibold text-[#101010]">{tourPackage.title}</h3>
            <p className="mt-2 flex items-center gap-1 text-sm text-[#101010]/55">
              <MapPin className="size-4" /> {tourPackage.location}
            </p>
          </div>
          <span className="flex shrink-0 items-center gap-1 rounded-full bg-[#101010] px-3 py-2 text-sm font-semibold text-white">
            <Star className="size-4 fill-white" /> 4.9
          </span>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3 text-sm text-[#101010]/65">
          <span className="flex items-center gap-2 rounded-2xl bg-white/60 px-3 py-2">
            <CalendarDays className="size-4 text-[#2986fe]" /> {tourPackage.duration}
          </span>
          <span className="flex items-center gap-2 rounded-2xl bg-white/60 px-3 py-2">
            <Users className="size-4 text-[#2986fe]" /> {tourPackage.group}
          </span>
        </div>

        {!compact ? (
          <div className="mt-5 grid gap-2">
            {tourPackage.highlights.map((highlight) => (
              <p className="flex items-center gap-2 text-sm text-[#101010]/65" key={highlight}>
                <CheckCircle2 className="size-4 text-[#2986fe]" /> {highlight}
              </p>
            ))}
          </div>
        ) : null}

        <button
          className="interactive-button mt-6 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#2986fe] px-5 py-3 font-semibold text-white"
          onClick={() => setActivePage("contact")}
          type="button"
        >
          Book Package <ArrowRight className="size-4" />
        </button>
      </div>
    </article>
  );
}

function PackagePreview({ setActivePage }: { setActivePage: (page: Page) => void }) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#2986fe]">Tour packages</p>
          <h2 className="mt-3 text-4xl font-semibold text-[#101010]">Best trips, already planned</h2>
        </div>
        <button
          className="interactive-button inline-flex items-center justify-center gap-2 rounded-full bg-[#101010] px-5 py-3 text-sm font-semibold text-white"
          onClick={() => setActivePage("packages")}
          type="button"
        >
          View All Packages <ArrowRight className="size-4" />
        </button>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {tourPackages.slice(0, 3).map((tourPackage) => (
          <PackageCard compact key={tourPackage.title} setActivePage={setActivePage} tourPackage={tourPackage} />
        ))}
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    [Compass, "Choose your vibe", "Pick beaches, cities, mountains, culture, or a mix of everything."],
    [Luggage, "Shape the package", "We tune flights, stays, transfers, and activities around your pace."],
    [HeartHandshake, "Travel with backup", "Get clear support and practical guidance throughout the journey."],
  ];

  return (
    <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
      <div className="rounded-[34px] bg-[#101010] p-6 text-white sm:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#7ab7ff]">Simple planning</p>
            <h2 className="mt-3 text-4xl font-semibold">From idea to itinerary in three calm steps.</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {steps.map(([Icon, title, copy]) => (
              <div className="rounded-[26px] border border-white/10 bg-white/10 p-5" key={String(title)}>
                <span className="flex size-12 items-center justify-center rounded-full bg-white text-[#2986fe]">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-5 font-semibold">{String(title)}</h3>
                <p className="mt-2 text-sm leading-6 text-white/60">{String(copy)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const reviews = [
    [avatarOne, "Amina Rahman", "The route felt personal and the whole trip was beautifully paced."],
    [avatarTwo, "Hesham Ali", "Hotels, transfers, and tours were all smooth. We just enjoyed the journey."],
    [avatarThree, "Khanoon Lee", "The package saved us so much planning time and still felt flexible."],
  ];

  return (
    <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
      <div className="mb-8 text-center">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#2986fe]">Traveler stories</p>
        <h2 className="mt-3 text-4xl font-semibold text-[#101010]">Loved by happy travelers</h2>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {reviews.map(([avatar, name, quote]) => (
          <article className="glass-card interactive-card rounded-[28px] p-6" key={name}>
            <div className="flex gap-1 text-[#2986fe]">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star className="size-4 fill-[#2986fe]" key={index} />
              ))}
            </div>
            <p className="mt-5 leading-7 text-[#101010]/70">{String(quote)}</p>
            <div className="mt-6 flex items-center gap-3">
              <img alt="" className="size-12 rounded-full object-cover" src={String(avatar)} />
              <div>
                <p className="font-semibold text-[#101010]">{String(name)}</p>
                <p className="text-sm text-[#101010]/50">Verified traveler</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function HomePage({ setActivePage }: { setActivePage: (page: Page) => void }) {
  return (
    <>
      <Hero setActivePage={setActivePage} />
      <Destinations />
      <PackagePreview setActivePage={setActivePage} />
      <HowItWorks />
      <Stats />
      <Testimonials />
    </>
  );
}

function PackagesPage({ setActivePage }: { setActivePage: (page: Page) => void }) {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-5 pb-8 pt-12 lg:px-8 lg:pt-20">
        <div className="glass-panel grid gap-8 overflow-hidden rounded-[34px] p-6 md:grid-cols-[1.05fr_0.95fr] md:p-8 lg:p-10">
          <div className="motion-fade-up flex flex-col justify-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#2986fe]">All tour packages</p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-[#101010] sm:text-5xl">
              Explore ready-made trips for every travel style.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#101010]/65">
              Compare curated packages with clear durations, group sizes, highlights, and starting prices.
            </p>
          </div>
          <div className="relative min-h-[300px] overflow-hidden rounded-[28px]">
            <img alt="Tour package collage" className="absolute inset-0 size-full object-cover" src={guideImage} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 rounded-3xl bg-white/85 p-5 backdrop-blur">
              <p className="font-semibold text-[#101010]">Custom packages available</p>
              <p className="mt-1 text-sm text-[#101010]/60">Tell us your budget and timing, and we will tailor the plan.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {tourPackages.map((tourPackage) => (
            <PackageCard key={tourPackage.title} setActivePage={setActivePage} tourPackage={tourPackage} />
          ))}
        </div>
      </section>
    </main>
  );
}

function AboutPage() {
  return (
    <main className="mx-auto grid max-w-7xl gap-10 px-5 py-12 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-20">
      <div className="motion-fade-up overflow-hidden rounded-[32px]">
        <img alt="Traveler looking at a scenic destination" className="h-full min-h-[360px] w-full object-cover" src={aboutImage} />
      </div>

      <div className="motion-fade-up motion-delay-1 flex flex-col justify-center">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#2986fe]">About us</p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight text-[#101010] sm:text-5xl">
          We make every journey feel simple, safe, and memorable.
        </h1>
        <p className="mt-6 text-lg leading-8 text-[#101010]/65">
          Sky Wings helps travelers choose better routes, trusted stays, and experiences that match their pace.
          We combine local knowledge with reliable support, so your trip feels less like logistics and more like
          discovery.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            ["Curated routes", "Handpicked travel ideas built around comfort and value."],
            ["Reliable support", "Clear communication before, during, and after each trip."],
            ["Flexible planning", "Packages shaped around your schedule and travel style."],
            ["Trusted partners", "Hotels, guides, and flights selected with care."],
          ].map(([title, copy]) => (
            <div className="glass-card rounded-3xl p-5" key={title}>
              <CheckCircle2 className="mb-3 size-6 text-[#2986fe]" />
              <h2 className="font-semibold text-[#101010]">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-[#101010]/60">{copy}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

function ContactPage() {
  return (
    <main className="mx-auto grid max-w-7xl gap-8 px-5 py-12 lg:grid-cols-[0.85fr_1.15fr] lg:px-8 lg:py-20">
      <section className="motion-fade-up">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#2986fe]">Contact us</p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight text-[#101010] sm:text-5xl">
          Ready to plan your next escape?
        </h1>
        <p className="mt-5 text-lg leading-8 text-[#101010]/65">
          Send us your travel idea and we will help shape the route, timing, and package details.
        </p>

        <div className="mt-8 grid gap-4">
          {[
            [Phone, "+1 (555) 018-8842", "Talk with a trip planner"],
            [Mail, "hello@skywings.com", "Send trip notes anytime"],
            [Clock3, "Mon - Sat, 9:00 - 18:00", "Fast response window"],
          ].map(([Icon, title, copy]) => (
            <div className="glass-card flex items-center gap-4 rounded-3xl p-5" key={String(title)}>
              <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#2986fe] text-white">
                <Icon className="size-5" />
              </span>
              <div>
                <p className="font-semibold text-[#101010]">{String(title)}</p>
                <p className="text-sm text-[#101010]/60">{String(copy)}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <form className="glass-card motion-fade-up motion-delay-1 rounded-[32px] p-5 sm:p-8">
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="grid gap-2 text-sm font-semibold text-[#101010]">
            Name
            <input className="rounded-2xl border border-[#101010]/10 bg-white/70 px-4 py-3 outline-none transition focus:border-[#2986fe]" placeholder="Your name" />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-[#101010]">
            Email
            <input className="rounded-2xl border border-[#101010]/10 bg-white/70 px-4 py-3 outline-none transition focus:border-[#2986fe]" placeholder="you@example.com" type="email" />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-[#101010]">
            Destination
            <input className="rounded-2xl border border-[#101010]/10 bg-white/70 px-4 py-3 outline-none transition focus:border-[#2986fe]" placeholder="Where to?" />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-[#101010]">
            Travel date
            <input className="rounded-2xl border border-[#101010]/10 bg-white/70 px-4 py-3 outline-none transition focus:border-[#2986fe]" type="date" />
          </label>
        </div>

        <label className="mt-5 grid gap-2 text-sm font-semibold text-[#101010]">
          Message
          <textarea
            className="min-h-36 resize-none rounded-2xl border border-[#101010]/10 bg-white/70 px-4 py-3 outline-none transition focus:border-[#2986fe]"
            placeholder="Tell us your preferred destination, budget, and travel style."
          />
        </label>

        <button
          className="interactive-button mt-6 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#2986fe] px-7 py-4 font-semibold text-white sm:w-auto"
          type="button"
        >
          Send Message <Send className="size-5" />
        </button>
      </form>
    </main>
  );
}

function Footer({ setActivePage }: { setActivePage: (page: Page) => void }) {
  const openPage = (page: Page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
      <div className="overflow-hidden rounded-[34px] bg-[#101010] text-white shadow-2xl shadow-black/10">
        <div className="grid gap-10 p-6 sm:p-8 lg:grid-cols-[1.05fr_0.75fr_0.75fr_1fr] lg:p-10">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex size-10 items-center justify-center rounded-full bg-white text-[#101010]">
                <Plane className="size-5" />
              </span>
              <span className="text-lg font-bold">Sky Wings</span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/62">
              Beautifully planned journeys with flexible packages, trusted partners, and support that keeps travel easy.
            </p>
            <div className="mt-6 flex gap-3">
              {[Globe2, CreditCard, ShieldCheck].map((Icon, index) => (
                <span className="flex size-10 items-center justify-center rounded-full bg-white/10 text-white" key={index}>
                  <Icon className="size-4" />
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold">Explore</h3>
            <div className="mt-5 grid gap-3">
              {navItems.map((item) => (
                <button
                  className="w-fit text-sm text-white/62 transition hover:text-white"
                  key={item.page}
                  onClick={() => openPage(item.page)}
                  type="button"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold">Packages</h3>
            <div className="mt-5 grid gap-3">
              {tourPackages.slice(0, 4).map((tourPackage) => (
                <button
                  className="w-fit text-sm text-white/62 transition hover:text-white"
                  key={tourPackage.title}
                  onClick={() => openPage("packages")}
                  type="button"
                >
                  {tourPackage.title}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold">Stay in the loop</h3>
            <p className="mt-5 text-sm leading-6 text-white/62">
              Get new routes, seasonal offers, and practical travel notes.
            </p>
            <div className="mt-5 flex overflow-hidden rounded-full border border-white/10 bg-white/10 p-1">
              <input
                className="min-w-0 flex-1 bg-transparent px-4 text-sm text-white outline-none placeholder:text-white/35"
                placeholder="Email address"
                type="email"
              />
              <button className="interactive-button flex size-11 shrink-0 items-center justify-center rounded-full bg-[#2986fe]" type="button">
                <Send className="size-4" />
              </button>
            </div>
            <div className="mt-5 grid gap-2 text-sm text-white/62">
              <p className="flex items-center gap-2">
                <Phone className="size-4 text-[#7ab7ff]" /> +1 (555) 018-8842
              </p>
              <p className="flex items-center gap-2">
                <Mail className="size-4 text-[#7ab7ff]" /> hello@skywings.com
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 px-6 py-5 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <p>2026 Sky Wings. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <button className="transition hover:text-white" type="button">Privacy Policy</button>
            <button className="transition hover:text-white" type="button">Terms</button>
            <button className="transition hover:text-white" type="button">Support</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [activePage, setActivePage] = useState<Page>("home");

  return (
    <div className="min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_12%_8%,rgba(41,134,254,0.12),transparent_28%),radial-gradient(circle_at_82%_24%,rgba(0,0,0,0.06),transparent_24%),#ffffff] text-[#101010]">
      <Header activePage={activePage} setActivePage={setActivePage} />
      {activePage === "home" ? <HomePage setActivePage={setActivePage} /> : null}
      {activePage === "packages" ? <PackagesPage setActivePage={setActivePage} /> : null}
      {activePage === "about" ? <AboutPage /> : null}
      {activePage === "contact" ? <ContactPage /> : null}
      <section className="mx-auto max-w-7xl px-5 pb-6 lg:px-8">
        <div className="grid gap-4 rounded-[28px] bg-[#101010] p-5 text-white md:grid-cols-3 md:p-6">
          {[
            [ShieldCheck, "Secure Planning", "Protected booking guidance"],
            [Plane, "Smooth Flights", "Routes matched to your schedule"],
            [Star, "Traveler Loved", "Thousands of happy explorers"],
          ].map(([Icon, title, copy]) => (
            <div className="flex items-center gap-4" key={String(title)}>
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white/10">
                <Icon className="size-5" />
              </span>
              <div>
                <p className="font-semibold">{String(title)}</p>
                <p className="text-sm text-white/60">{String(copy)}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer setActivePage={setActivePage} />
    </div>
  );
}
