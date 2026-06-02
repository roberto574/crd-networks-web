/*
 * CRD Networks — Home Page
 * Design: Corporate Dark Tech
 * Sections: Navbar, Hero, Beneficios, Servicios, Propuesta, Contacto, Footer
 */

import { useEffect, useRef, useState } from "react";
import {
  TrendingUp,
  ShieldCheck,
  Lightbulb,
  Server,
  Users,
  Monitor,
  Wifi,
  Network,
  Briefcase,
  Headphones,
  Phone,
  Mail,
  Globe,
  MapPin,
  Menu,
  X,
  ChevronRight,
  Target,
} from "lucide-react";

// ─── Intersection observer hook ──────────────────────────────────────────────
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, visible };
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const benefits = [
  {
    icon: TrendingUp,
    title: "Optimización de Costos",
    desc: "Identificamos oportunidades y optimizamos recursos para generar ahorros sostenibles y medibles.",
  },
  {
    icon: ShieldCheck,
    title: "Continuidad Operacional",
    desc: "Diseñamos soluciones resilientes que aseguran la disponibilidad y continuidad de su operación.",
  },
  {
    icon: Lightbulb,
    title: "Soluciones Estratégicas",
    desc: "Alineamos tecnología y negocio para impulsar la transformación y la ventaja competitiva.",
  },
  {
    icon: Server,
    title: "Infraestructura y Proveedores",
    desc: "Implementamos y gestionamos infraestructura robusta con aliados tecnológicos de primer nivel.",
  },
  {
    icon: Users,
    title: "Consultoría Especializada",
    desc: "Acompañamos a su organización con experiencia y conocimiento para tomar decisiones tecnológicas acertadas.",
  },
  {
    icon: Monitor,
    title: "Microinformática y Soporte TI",
    desc: "Soporte especializado para estaciones de trabajo y usuarios.",
  },
];

const services = [
  {
    icon: Briefcase,
    title: "Consultoría Tecnológica",
    items: [
      "Consultores con amplia experiencia en Telecomunicaciones",
      "Estrategia tecnológica",
      "Optimización de costos Telco",
      "Gestión y evaluación de proveedores",
      "Apoyo en procesos de licitación y RFP",
    ],
  },
  {
    icon: Wifi,
    title: "Telecomunicaciones",
    items: [
      "Conectividad corporativa",
      "Redes multisede",
      "Transporte IP y enlaces dedicados",
      "Soluciones para ISP y operadores",
      "Diseño y optimización de redes",
    ],
  },
  {
    icon: Network,
    title: "Networking e Infraestructura",
    items: [
      "Redes LAN y WAN",
      "WiFi Empresarial",
      "Switching y Routing",
      "SD-WAN",
      "Cableado estructurado",
      "Cámaras de seguridad y CCTV",
    ],
  },
  {
    icon: Users,
    title: "Servicios Profesionales",
    items: [
      "Diseño de arquitecturas tecnológicas",
      "Gestión de proyectos",
      "Implementación y puesta en marcha",
      "Soporte especializado",
      "Coordinación multiproveedor",
    ],
  },
  {
    icon: Headphones,
    title: "Microinformática y Soporte TI",
    items: [
      "Mesa de Ayuda (Help Desk)",
      "Soporte remoto y en terreno",
      "Administración de estaciones de trabajo",
      "Gestión de usuarios y dispositivos",
      "Instalación y configuración de software",
      "Gestión de activos TI",
      "Mantenimiento preventivo y correctivo",
    ],
  },
];

// ─── Navbar ───────────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Inicio", href: "#inicio" },
    { label: "Beneficios", href: "#beneficios" },
    { label: "Servicios", href: "#servicios" },
    { label: "Nosotros", href: "#propuesta" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0E1A]/95 backdrop-blur-md border-b border-[#1E2D4A]"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full border-2 border-[#F5A623] flex items-center justify-center">
            <div className="w-3 h-3 bg-[#F5A623] rounded-full" />
          </div>
          <span
            className="font-bold text-lg tracking-wide text-white"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            CRD <span className="text-[#F5A623]">NETWORKS</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="link-underline text-sm text-[#A8B8CC] hover:text-white transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="ml-2 px-4 py-2 text-sm font-semibold bg-[#F5A623] text-[#0A0E1A] rounded hover:bg-[#FFB84D] transition-colors duration-200 active:scale-95"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Contáctenos
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0A0E1A]/98 border-t border-[#1E2D4A] px-4 pb-4 pt-2 flex flex-col gap-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-[#A8B8CC] hover:text-[#F5A623] py-2 text-sm border-b border-[#1E2D4A] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage:
          "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663722119618/VFd4sCHznpDxhHuNqBHTnk/crd-hero-bg-EHvZdb6vCWciA8zhWfoTKV.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0E1A]/90 via-[#0A0E1A]/70 to-[#0A0E1A]/30" />

      <div className="container relative z-10 pt-24 pb-16">
        <div className="max-w-2xl">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#F5A623]/40 bg-[#F5A623]/10 text-[#F5A623] text-xs font-medium mb-6 tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F5A623] animate-pulse" />
            Technology · Connectivity · Strategy
          </div>

          {/* Headline */}
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Conectamos{" "}
            <span className="text-[#F5A623]">tecnología.</span>
            <br />
            Impulsamos{" "}
            <span className="relative">
              negocios.
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#F5A623]/50" />
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-[#A8B8CC] text-lg leading-relaxed mb-8 max-w-xl">
            Ayudamos a las organizaciones a diseñar, optimizar y gestionar
            soluciones tecnológicas robustas, seguras y escalables que impulsan
            la eficiencia, la continuidad y el crecimiento de su negocio.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#servicios"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#F5A623] text-[#0A0E1A] font-semibold rounded hover:bg-[#FFB84D] transition-all duration-200 active:scale-95"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Nuestros Servicios
              <ChevronRight size={16} />
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#F5A623]/50 text-[#F5A623] font-semibold rounded hover:bg-[#F5A623]/10 transition-all duration-200"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Contáctenos
            </a>
          </div>

          {/* Contact quick-bar */}
          <div className="mt-12 flex flex-wrap gap-6 text-sm text-[#7A8BA8]">
            <a
              href="tel:+56999694490"
              className="flex items-center gap-2 hover:text-[#F5A623] transition-colors"
            >
              <Phone size={14} className="text-[#F5A623]" />
              +569 99694490
            </a>
            <a
              href="mailto:contacto@crdnet.cl"
              className="flex items-center gap-2 hover:text-[#F5A623] transition-colors"
            >
              <Mail size={14} className="text-[#F5A623]" />
              contacto@crdnet.cl
            </a>
            <span className="flex items-center gap-2">
              <MapPin size={14} className="text-[#F5A623]" />
              Santiago, Chile
            </span>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0E1A] to-transparent" />
    </section>
  );
}

// ─── Beneficios ───────────────────────────────────────────────────────────────
function Beneficios() {
  const { ref, visible } = useInView();

  return (
    <section id="beneficios" className="py-24 bg-[#0A0E1A]">
      <div className="container">
        {/* Header */}
        <div ref={ref} className={`text-center mb-16 fade-up ${visible ? "visible" : ""}`}>
          <p className="text-[#F5A623] text-xs font-semibold tracking-widest uppercase mb-3">
            ¿Por qué elegirnos?
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Nuestra propuesta de valor
          </h2>
          <p className="text-[#7A8BA8] max-w-xl mx-auto text-base leading-relaxed">
            Ser su socio estratégico en tecnología, entregando soluciones
            innovadoras, confiables y alineadas a sus objetivos de negocio.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <BenefitCard key={b.title} {...b} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BenefitCard({
  icon: Icon,
  title,
  desc,
  delay,
}: {
  icon: React.ElementType;
  title: string;
  desc: string;
  delay: number;
}) {
  const { ref, visible } = useInView();
  return (
    <div
      ref={ref}
      className={`card-gold-border rounded-lg p-6 fade-up ${visible ? "visible" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-12 h-12 rounded-lg bg-[#F5A623]/10 border border-[#F5A623]/30 flex items-center justify-center mb-4">
        <Icon size={22} className="text-[#F5A623]" />
      </div>
      <h3
        className="text-white font-semibold text-base mb-2"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        {title}
      </h3>
      <p className="text-[#7A8BA8] text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

// ─── Servicios ────────────────────────────────────────────────────────────────
function Servicios() {
  const { ref, visible } = useInView();
  const [active, setActive] = useState(0);

  return (
    <section
      id="servicios"
      className="py-24 relative"
      style={{
        backgroundImage:
          "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663722119618/VFd4sCHznpDxhHuNqBHTnk/crd-services-bg-CC5uDL5YJAH8bg9tq7TA3W.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-[#0A0E1A]/92" />

      <div className="container relative z-10">
        <div ref={ref} className={`text-center mb-16 fade-up ${visible ? "visible" : ""}`}>
          <p className="text-[#F5A623] text-xs font-semibold tracking-widest uppercase mb-3">
            Lo que hacemos
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Nuestros Servicios
          </h2>
          <p className="text-[#7A8BA8] max-w-xl mx-auto text-base">
            Soluciones integrales para cada etapa de su transformación tecnológica.
          </p>
        </div>

        {/* Tab navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <button
                key={s.title}
                onClick={() => setActive(i)}
                className={`flex items-center gap-2 px-4 py-2 rounded text-sm font-medium transition-all duration-200 ${
                  active === i
                    ? "bg-[#F5A623] text-[#0A0E1A]"
                    : "border border-[#1E2D4A] text-[#7A8BA8] hover:border-[#F5A623]/40 hover:text-[#F5A623]"
                }`}
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                <Icon size={15} />
                <span className="hidden sm:inline">{s.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active service panel */}
        <div className="max-w-3xl mx-auto card-gold-border rounded-xl p-8">
          {(() => {
            const s = services[active];
            const Icon = s.icon;
            return (
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-[#F5A623]/10 border border-[#F5A623]/30 flex items-center justify-center">
                    <Icon size={26} className="text-[#F5A623]" />
                  </div>
                  <h3
                    className="text-2xl font-bold text-white"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {s.title}
                  </h3>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[#A8B8CC] text-sm">
                      <ChevronRight
                        size={14}
                        className="text-[#F5A623] mt-0.5 shrink-0"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })()}
        </div>

        {/* Service cards overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <button
                key={s.title}
                onClick={() => setActive(i)}
                className={`card-gold-border rounded-lg p-5 text-left transition-all duration-200 ${
                  active === i ? "border-[#F5A623]/60" : ""
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                      active === i
                        ? "bg-[#F5A623] text-[#0A0E1A]"
                        : "bg-[#F5A623]/10 text-[#F5A623]"
                    }`}
                  >
                    <Icon size={17} />
                  </div>
                  <span
                    className="text-white text-sm font-semibold"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {s.title}
                  </span>
                </div>
                <p className="text-[#7A8BA8] text-xs">{s.items.length} servicios incluidos</p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── Propuesta / CTA ──────────────────────────────────────────────────────────
function Propuesta() {
  const { ref, visible } = useInView();

  return (
    <section id="propuesta" className="py-24 bg-[#0A0E1A]">
      <div className="container">
        <div
          ref={ref}
          className={`max-w-4xl mx-auto rounded-2xl overflow-hidden fade-up ${visible ? "visible" : ""}`}
          style={{
            background:
              "linear-gradient(135deg, #0F1628 0%, #0A0E1A 50%, #0F1628 100%)",
            border: "1px solid #1E2D4A",
          }}
        >
          <div
            className="p-10 md:p-14 relative"
            style={{
              backgroundImage:
                "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663722119618/VFd4sCHznpDxhHuNqBHTnk/crd-consulting-a2Xukz6Ytjw4zed5rVfFoc.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center right",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0E1A]/95 via-[#0A0E1A]/80 to-[#0A0E1A]/40 rounded-2xl" />
            <div className="relative z-10 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#F5A623]/40 bg-[#F5A623]/10 text-[#F5A623] text-xs font-medium mb-6 tracking-widest uppercase">
                <Target size={12} />
                Nuestra Propuesta
              </div>
              <h2
                className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                ¿Está evaluando un proyecto tecnológico?
              </h2>
              <p className="text-[#A8B8CC] text-base leading-relaxed mb-8">
                Ya sea una renovación de infraestructura, optimización de costos,
                expansión de red o modernización tecnológica, CRD Networks le
                ayuda a tomar decisiones informadas, reducir riesgos y maximizar
                el retorno de sus inversiones.
              </p>
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#F5A623] text-[#0A0E1A] font-semibold rounded hover:bg-[#FFB84D] transition-all duration-200 active:scale-95"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Conversemos hoy
                <ChevronRight size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Experience badge */}
        <div className="flex justify-center mt-10">
          <div className="flex items-center gap-8 flex-wrap justify-center">
            {[
              { value: "Consultores", label: "Amplia experiencia" },
              { value: "Tech/IT/Telco", label: "Áreas de servicio" },
              { value: "360°", label: "Soluciones integrales" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p
                  className="text-4xl font-bold text-[#F5A623]"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {stat.value}
                </p>
                <p className="text-[#7A8BA8] text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Contacto ─────────────────────────────────────────────────────────────────
function Contacto() {
  const { ref, visible } = useInView();

  const contactItems = [
    {
      icon: Mail,
      label: "Correo electrónico",
      value: "contacto@crdnet.cl",
      href: "mailto:contacto@crdnet.cl",
    },
    {
      icon: Phone,
      label: "Teléfono",
      value: "+569 99694490",
      href: "tel:+56999694490",
    },
    {
      icon: Globe,
      label: "Sitio web",
      value: "www.crdnet.cl",
      href: "https://www.crdnet.cl",
    },
    {
      icon: MapPin,
      label: "Ubicación",
      value: "Santiago, Chile",
      href: "#",
    },
  ];

  return (
    <section id="contacto" className="py-24 bg-[#0D1220]">
      <div className="container">
        <div ref={ref} className={`text-center mb-16 fade-up ${visible ? "visible" : ""}`}>
          <p className="text-[#F5A623] text-xs font-semibold tracking-widest uppercase mb-3">
            Hablemos
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Contáctenos
          </h2>
          <p className="text-[#7A8BA8] max-w-md mx-auto text-base">
            Estamos listos para ayudarle a impulsar su transformación tecnológica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {contactItems.map((c, i) => (
            <ContactCard key={c.label} {...c} delay={i * 80} />
          ))}
        </div>

        {/* Experience Proven tagline */}
        <p
          className="text-center text-[#F5A623]/60 text-sm tracking-widest uppercase mt-16"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          CRD Networks | Experience Proven
        </p>
      </div>
    </section>
  );
}

function ContactCard({
  icon: Icon,
  label,
  value,
  href,
  delay,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  href: string;
  delay: number;
}) {
  const { ref, visible } = useInView();
  return (
    <a
      ref={ref as React.Ref<HTMLAnchorElement>}
      href={href}
      className={`card-gold-border rounded-xl p-6 flex items-center gap-4 fade-up ${visible ? "visible" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-12 h-12 rounded-xl bg-[#F5A623]/10 border border-[#F5A623]/30 flex items-center justify-center shrink-0">
        <Icon size={20} className="text-[#F5A623]" />
      </div>
      <div>
        <p className="text-[#7A8BA8] text-xs mb-0.5">{label}</p>
        <p
          className="text-white font-semibold text-sm"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {value}
        </p>
      </div>
    </a>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-[#080C16] border-t border-[#1E2D4A] py-8">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full border-2 border-[#F5A623] flex items-center justify-center">
            <div className="w-2.5 h-2.5 bg-[#F5A623] rounded-full" />
          </div>
          <span
            className="font-bold text-white text-sm"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            CRD <span className="text-[#F5A623]">NETWORKS</span>
          </span>
        </div>
        <p className="text-[#7A8BA8] text-xs text-center">
          Consultoría · Telecomunicaciones · Conectividad · Informática
        </p>
        <p className="text-[#4A5568] text-xs">
          © {new Date().getFullYear()} CRD Networks. Santiago, Chile.
        </p>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0E1A]">
      <Navbar />
      <Hero />
      <Beneficios />
      <Servicios />
      <Propuesta />
      <Contacto />
      <Footer />
    </div>
  );
}
