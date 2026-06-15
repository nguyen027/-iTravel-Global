import { createFileRoute } from "@tanstack/react-router";
import { useState, useCallback, useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  Globe2, Plane, Hotel, Users, Headphones, ArrowRight, Check,
  MapPin, Mail, Phone, MessageSquare, Building2, Star,
  Facebook, Instagram, Linkedin, Twitter, ChevronRight, ChevronLeft, Sun, Moon,
  TrendingDown, Network, Handshake, LifeBuoy, Layers, Zap, TrendingUp,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { useTheme } from "@/lib/theme";
import heroImg from "@/assets/hero.jpg";
import destEurope from "@/assets/dest-europe.jpg";
import destAsia from "@/assets/dest-asia.jpg";
import destNAmerica from "@/assets/dest-namerica.jpg";
import destMe from "@/assets/dest-me.jpg";
import destAustralia from "@/assets/dest-australia.jpg";
import destIslands from "@/assets/dest-islands.jpg";
import avatarSarah from "@/assets/avatar-sarah.jpg";
import avatarDaniel from "@/assets/avatar-daniel.jpg";
import avatarMei from "@/assets/avatar-mei.jpg";
import avatarJames from "@/assets/avatar-james.jpg";
import avatarPriya from "@/assets/avatar-priya.jpg";
import avatarThomas from "@/assets/avatar-thomas.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "iTravel Global | Travel & Hotel Wholesale Solutions" },
      { name: "description", content: "Partner with iTravel Global for premium travel wholesale services, tour packages, hotel partnerships, and global travel solutions for agencies." },
      { property: "og:title", content: "iTravel Global | Travel & Hotel Wholesale Solutions" },
      { property: "og:description", content: "Premium travel wholesale services for agencies worldwide — tours, hotels, and global travel solutions." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "iTravel Global",
        description: "Travel wholesaler providing tour packages, hotel accommodations, and travel solutions to travel agencies worldwide.",
        url: "/",
      }),
    }],
  }),
  component: LandingPage,
});

const services = [
  { icon: Plane, title: "Tour Packages", desc: "Custom and pre-designed travel experiences tailored for every client segment." },
  { icon: Hotel, title: "Hotel Partnerships", desc: "Access to a wide network of trusted accommodations at wholesale rates." },
  { icon: Users, title: "Group Travel Solutions", desc: "Specialized packages built for groups, MICE, and corporate travel." },
  { icon: Headphones, title: "Agency Support", desc: "Dedicated assistance for booking, planning, and on-trip needs." },
];

const features = [
  { icon: TrendingDown, title: "Competitive Wholesale Rates", desc: "Margins your agency can actually grow on.", stat: "Up to 35% off" },
  { icon: Network, title: "Global Destination Network", desc: "Inventory across 150+ destinations worldwide.", stat: "150+ countries" },
  { icon: Handshake, title: "Reliable Industry Partnerships", desc: "Vetted suppliers and direct contracts.", stat: "1,200+ partners" },
  { icon: LifeBuoy, title: "Dedicated Agency Support", desc: "Real humans, 24/7, in your timezone.", stat: "24/7 support" },
  { icon: Layers, title: "Flexible Travel Solutions", desc: "FIT, group, MICE, corporate — fully modular.", stat: "Any segment" },
  { icon: Zap, title: "Fast Booking Assistance", desc: "Quote-to-confirmation in record time.", stat: "< 2h avg." },
];

const destinations = [
  { name: "Europe", img: destEurope, tag: "120+ Cities" },
  { name: "Asia", img: destAsia, tag: "90+ Cities" },
  { name: "North America", img: destNAmerica, tag: "60+ Cities" },
  { name: "Middle East", img: destMe, tag: "25+ Cities" },
  { name: "Australia", img: destAustralia, tag: "18+ Cities" },
  { name: "Tropical Islands", img: destIslands, tag: "40+ Resorts" },
];

const steps = [
  { n: "01", title: "Contact Us", desc: "Reach out and tell us about your agency." },
  { n: "02", title: "Discuss Your Needs", desc: "We tailor a partnership plan to your markets." },
  { n: "03", title: "Access Exclusive Products", desc: "Unlock wholesale rates and inventory." },
  { n: "04", title: "Grow Your Business", desc: "Scale revenue with reliable support behind you." },
];

const stepIcons = [Mail, MessageSquare, Globe2, TrendingUp];

const testimonials = [
  { quote: "iTravel Global has transformed how we source hotels. Pricing is unbeatable and the team always delivers.", name: "Sarah Mitchell", role: "Director, Horizon Travel Co.", avatar: avatarSarah },
  { quote: "Their global network opened up destinations we never thought we could offer. Our clients are thrilled.", name: "Daniel Okafor", role: "CEO, Pinnacle Voyages", avatar: avatarDaniel },
  { quote: "Reliable, responsive, and genuinely partnership-driven. A true extension of our agency.", name: "Mei Lin Tan", role: "Head of Ops, Lotus Tours", avatar: avatarMei },
  { quote: "From onboarding to our first booking, the process was seamless. iTravel Global is now our go-to wholesaler.", name: "James Rodriguez", role: "VP, Atlas Journeys", avatar: avatarJames },
  { quote: "The wholesale rates alone increased our margins by 22%. Add the support team, and it's a no-brainer.", name: "Priya Sharma", role: "Founder, Wanderlust India", avatar: avatarPriya },
  { quote: "We've worked with many wholesalers. iTravel Global's technology and reliability set them apart.", name: "Thomas Weber", role: "MD, Alpine Adventures GmbH", avatar: avatarThomas },
];

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Toaster richColors position="top-center" />
      <Nav />
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <Destinations />
      <Process />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  const links = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#destinations", label: "Destinations" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-[image:var(--gradient-primary)] text-white shadow-[var(--shadow-card)]">
            <Globe2 className="h-5 w-5" />
          </span>
          <span className="font-display font-bold text-lg tracking-tight">iTravel <span className="text-primary">Global</span></span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          {links.map(l => (
            <a key={l.href} href={l.href} className="hover:text-primary transition-colors">{l.label}</a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild variant="hero" size="default" className="hidden sm:inline-flex">
            <a href="#contact">Become a Partner</a>
          </Button>
        </div>
      </div>
    </header>
  );
}

function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-card hover:bg-accent text-foreground transition-colors"
    >
      <Sun className="h-4 w-4 dark:hidden" />
      <Moon className="h-4 w-4 hidden dark:block" />
    </button>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] flex items-center overflow-hidden">
      <img src={heroImg} alt="Luxury tropical resort overlooking turquoise ocean at sunset" width={1920} height={1080} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-20 w-full">
        <div className="max-w-3xl text-white">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur border border-white/30 px-4 py-1.5 text-xs font-medium mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Trusted by 1,200+ travel agencies worldwide
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-extrabold leading-[1.05]">
            Your Global Travel<br />Wholesale Partner
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
            Connecting travel agencies with exceptional tours, accommodations, and travel experiences worldwide.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild variant="hero" size="xl">
              <a href="#contact">Become a Partner <ArrowRight className="ml-1" /></a>
            </Button>
            <Button asChild variant="heroGhost" size="xl">
              <a href="#contact">Request a Quote</a>
            </Button>
          </div>
          <div className="mt-16 grid grid-cols-3 gap-6 max-w-xl">
            {[
              { n: "150+", l: "Destinations" },
              { n: "1.2k+", l: "Agency Partners" },
              { n: "20yrs", l: "Industry Experience" },
            ].map(s => (
              <div key={s.l}>
                <div className="font-display text-3xl md:text-4xl font-bold">{s.n}</div>
                <div className="text-sm text-white/75 mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ eyebrow, title, desc }: { eyebrow: string; title: string; desc?: string }) {
  return (
    <div className="max-w-3xl mb-14">
      <div className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">{eyebrow}</div>
      <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">{title}</h2>
      {desc && <p className="mt-5 text-lg text-muted-foreground leading-relaxed">{desc}</p>}
    </div>
  );
}

function About() {
  return (
    <section id="about" className="py-24 md:py-32" style={{ background: "var(--gradient-soft)" }}>
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <SectionHeader
            eyebrow="About iTravel Global"
            title="Empowering Travel Agencies Worldwide"
            desc="iTravel Global specializes in providing travel agencies with access to quality tours, hotel packages, and travel solutions across multiple destinations. Our mission is to help agencies deliver outstanding travel experiences while maximizing profitability."
          />
          <div className="grid sm:grid-cols-2 gap-4 mt-2">
            {["B2B Wholesale Only", "Real-time Inventory", "24/7 Operations", "Multi-currency Pricing"].map(x => (
              <div key={x} className="flex items-center gap-3 text-sm font-medium">
                <span className="grid h-7 w-7 place-items-center rounded-full bg-primary/10 text-primary"><Check className="h-4 w-4" /></span>
                {x}
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-[image:var(--gradient-primary)] opacity-20 blur-2xl" />
          <div className="relative rounded-3xl overflow-hidden shadow-[var(--shadow-elegant)] aspect-[4/5]">
            <img src={destIslands} alt="Overwater bungalows aerial view" loading="lazy" width={1024} height={1280} className="h-full w-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -left-6 rounded-2xl bg-card shadow-[var(--shadow-card)] p-5 border border-border">
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-[image:var(--gradient-primary)] text-white">
                <Globe2 className="h-6 w-6" />
              </div>
              <div>
                <div className="font-display font-bold text-2xl leading-none">98%</div>
                <div className="text-xs text-muted-foreground mt-1">Partner satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">
            Our Services
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            Wholesale solutions, <span className="text-primary">end to end</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Everything your agency needs to deliver exceptional journeys — sourced, supported, and priced for growth.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div key={s.title} className="group relative rounded-2xl backdrop-blur-md bg-card/60 border border-border/50 shadow-[var(--shadow-card)] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:bg-card hover:shadow-[var(--shadow-elegant)]">
              <div className="mb-6 flex items-center justify-between">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[image:var(--gradient-primary)] text-white shadow-lg transition-transform duration-500 group-hover:scale-110">
                  <s.icon className="h-6 w-6" />
                </div>
                <span className="font-display text-5xl font-black select-none text-primary/5 group-hover:text-primary/15 transition-colors">
                  0{i + 1}
                </span>
              </div>
              <h3 className="font-display text-xl font-bold mb-3 text-foreground">{s.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              <div className="mt-5 flex items-center text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more <ChevronRight className="h-4 w-4 ml-1" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section className="py-24 md:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">
            Why Choose Us
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            Built for agencies that <span className="text-primary">scale.</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Six reasons forward-thinking travel agencies choose iTravel Global as their wholesale partner of record.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="group relative rounded-2xl border border-border bg-card shadow-sm p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)] hover:border-primary/20 hover:bg-gradient-to-br hover:from-primary/[0.03] hover:to-primary/[0.08]"
            >
              <div className="mb-6">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/20 transition-transform duration-500 group-hover:scale-110">
                  <f.icon className="h-5 w-5" />
                </div>
              </div>

              <h3 className="font-display text-xl font-bold mb-3 text-foreground">{f.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{f.desc}</p>

              <div className="mt-6 pt-5 border-t border-border flex items-center justify-between">
                <span className="text-sm font-semibold text-primary">{f.stat}</span>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Destinations() {
  return (
    <section id="destinations" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Featured Destinations"
          title="A world of inventory, one partner"
          desc="From iconic cities to remote island escapes — sell anywhere with confidence."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map(d => (
            <a key={d.name} href="#contact" className="group relative aspect-[4/5] rounded-2xl overflow-hidden shadow-[var(--shadow-card)]">
              <img src={d.img} alt={`${d.name} destination`} loading="lazy" width={1024} height={1280} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/90 via-primary-deep/20 to-transparent" />
              <div className="absolute inset-0 p-7 flex flex-col justify-end text-white">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider opacity-90 mb-2"><MapPin className="h-3.5 w-3.5" /> {d.tag}</div>
                <div className="font-display text-3xl font-bold">{d.name}</div>
                <div className="mt-3 inline-flex items-center text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  Explore inventory <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="py-24 md:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">
            Partnership Process
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            Onboard in four <span className="text-primary">simple steps</span>
          </h2>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Connecting dashed line on desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full border-t border-dashed border-primary/20 -translate-y-8 pointer-events-none" />

          {steps.map((s, i) => {
            const Icon = stepIcons[i];
            return (
              <div key={s.n} className="group relative">
                <div className="relative z-10 h-full p-7 rounded-2xl backdrop-blur-md bg-card/60 border border-border/50 shadow-[var(--shadow-card)] transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:bg-card hover:shadow-[var(--shadow-elegant)]">
                  <div className="mb-6 flex items-center justify-between">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[image:var(--gradient-primary)] text-white shadow-lg transition-transform duration-500 group-hover:scale-110">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="font-display text-5xl font-black select-none text-primary/5 group-hover:text-primary/15 transition-colors">
                      {s.n}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold mb-3 text-foreground">{s.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [isHovered, setIsHovered] = useState(false);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setScrollSnaps(emblaApi.scrollSnapList());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi) return;

    const startAutoPlay = () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
      autoPlayRef.current = setInterval(() => {
        if (!isHovered) {
          emblaApi.scrollNext();
        }
      }, 4000);
    };

    const stopAutoPlay = () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
        autoPlayRef.current = null;
      }
    };

    startAutoPlay();
    return () => stopAutoPlay();
  }, [emblaApi, isHovered]);

  return (
    <section className="py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">Partner Voices</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">Agencies that grow with us</h2>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={scrollPrev}
              className="grid h-11 w-11 place-items-center rounded-full border border-border bg-card text-foreground hover:bg-accent transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={scrollNext}
              className="grid h-11 w-11 place-items-center rounded-full border border-border bg-card text-foreground hover:bg-accent transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div
          className="overflow-hidden"
          ref={emblaRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="flex -ml-6">
            {testimonials.map(t => (
              <div key={t.name} className="min-w-0 flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-6">
                <figure className="rounded-2xl border border-border bg-card p-8 flex flex-col h-full">
                  <div className="flex gap-1 text-primary mb-5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-lg leading-relaxed text-foreground flex-1">"{t.quote}"</blockquote>
                  <figcaption className="mt-6 flex items-center gap-3 pt-6 border-t border-border">
                    <img src={t.avatar} alt={t.name} loading="lazy" width={40} height={40} className="h-10 w-10 rounded-full object-cover ring-2 ring-border" />
                    <div>
                      <div className="font-semibold text-sm">{t.name}</div>
                      <div className="text-xs text-muted-foreground">{t.role}</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                index === selectedIndex ? "w-6 bg-primary" : "w-2 bg-border hover:bg-primary/50"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-3xl p-12 md:p-20 text-center text-white shadow-[var(--shadow-elegant)]" style={{ background: "var(--gradient-primary)" }}>
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 80% 0%, white, transparent 50%)" }} />
          <div className="relative">
            <h2 className="font-display text-4xl md:text-5xl font-bold max-w-3xl mx-auto">Ready to Expand Your Travel Offerings?</h2>
            <p className="mt-5 text-lg text-white/85 max-w-2xl mx-auto">Partner with iTravel Global and gain access to world-class travel products and competitive wholesale rates.</p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button asChild size="xl" className="bg-white text-primary-deep hover:bg-white/90">
                <a href="#contact">Become a Partner <ArrowRight className="ml-1" /></a>
              </Button>
              <Button asChild variant="heroGhost" size="xl">
                <a href="#contact">Contact Our Team</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [loading, setLoading] = useState(false);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Thanks! Our partnership team will be in touch within 1 business day.");
      (e.target as HTMLFormElement).reset();
    }, 600);
  };
  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-14">
        <div>
          <SectionHeader
            eyebrow="Get in Touch"
            title="Let's build a partnership"
            desc="Tell us about your agency and goals. Our team will reach out with tailored wholesale options."
          />
          <div className="space-y-5">
            {[
              { icon: Mail, label: "Email", value: "partners@itravelglobal.com" },
              { icon: Phone, label: "Phone", value: "+1 (800) 555-0188" },
              { icon: Building2, label: "Headquarters", value: "Dubai · London · Singapore" },
            ].map(c => (
              <div key={c.label} className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary"><c.icon className="h-5 w-5" /></span>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{c.label}</div>
                  <div className="font-medium mt-0.5">{c.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <form onSubmit={onSubmit} className="rounded-3xl bg-card border border-border p-8 md:p-10 shadow-[var(--shadow-card)]">
          <div className="grid sm:grid-cols-2 gap-5">
            <Field id="name" label="Your Name" required><Input id="name" required placeholder="Jane Doe" /></Field>
            <Field id="agency" label="Agency Name" required><Input id="agency" required placeholder="Horizon Travel Co." /></Field>
            <Field id="email" label="Email" required><Input id="email" type="email" required placeholder="jane@agency.com" /></Field>
            <Field id="phone" label="Phone"><Input id="phone" type="tel" placeholder="+1 555 000 0000" /></Field>
          </div>
          <Field id="message" label="Message" className="mt-5">
            <Textarea id="message" rows={5} placeholder="Tell us about your markets, volumes, and what you're looking for…" />
          </Field>
          <Button type="submit" variant="hero" size="xl" className="mt-7 w-full" disabled={loading}>
            {loading ? "Sending…" : <>Send Inquiry <MessageSquare className="ml-1" /></>}
          </Button>
          <p className="mt-4 text-xs text-muted-foreground text-center">We respond within 1 business day.</p>
        </form>
      </div>
    </section>
  );
}

function Field({ id, label, required, className, children }: { id: string; label: string; required?: boolean; className?: string; children: React.ReactNode }) {
  return (
    <div className={className}>
      <Label htmlFor={id} className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label}{required && <span className="text-primary"> *</span>}
      </Label>
      <div className="mt-2">{children}</div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-primary-deep text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-white/15 backdrop-blur"><Globe2 className="h-5 w-5" /></span>
            <span className="font-display font-bold text-lg">iTravel Global</span>
          </div>
          <p className="text-sm text-white/70 max-w-md leading-relaxed">
            A trusted travel wholesaler partnering with agencies worldwide to deliver competitive pricing, diverse destinations, and reliable travel experiences.
          </p>
          <div className="flex gap-3 mt-6">
            {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
              <a key={i} href="#" aria-label="Social link" className="grid h-9 w-9 place-items-center rounded-lg bg-white/10 hover:bg-white hover:text-primary-deep transition-colors">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <FooterCol title="Company" links={[["About", "#about"], ["Services", "#services"], ["Destinations", "#destinations"], ["Contact", "#contact"]]} />
        <FooterCol title="Contact" links={[["partners@itravelglobal.com", "mailto:partners@itravelglobal.com"], ["+1 (800) 555-0188", "tel:+18005550188"], ["Dubai · London · Singapore", "#"]]} />
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-wrap justify-between gap-3 text-xs text-white/60">
          <div>© {new Date().getFullYear()} iTravel Global. All rights reserved.</div>
          <div className="flex gap-5"><a href="#" className="hover:text-white">Privacy</a><a href="#" className="hover:text-white">Terms</a></div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <div className="font-display font-bold text-sm uppercase tracking-wider mb-4">{title}</div>
      <ul className="space-y-2.5 text-sm text-white/70">
        {links.map(([label, href]) => (
          <li key={label}><a href={href} className="hover:text-white transition-colors">{label}</a></li>
        ))}
      </ul>
    </div>
  );
}
