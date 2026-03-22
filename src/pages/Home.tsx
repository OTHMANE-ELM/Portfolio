import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { profile } from "@/data/profile";

export default function Home() {
  const allSkills = [
    ...profile.skills.langages,
    ...profile.skills.frameworks,
    ...profile.skills.tools.slice(0, 3),
  ];

  return (
    <>
      <Helmet>
        <title>{profile.name} — Portfolio</title>
        <meta name="description" content={`Portfolio de ${profile.name} — ${profile.role}`} />
      </Helmet>

      <div className="min-h-[80vh] flex flex-col justify-center">
        {/* Hero */}
        <section className="grid gap-10 md:grid-cols-5 md:items-center py-12">
          {/* Text */}
          <div className="md:col-span-3 animate-fade-up">
            <p className="font-mono text-accent text-sm tracking-widest uppercase mb-4">
              Disponible · Stage PFE
            </p>

            <h1 className="font-display text-5xl md:text-6xl font-bold text-white leading-tight mb-3">
              {profile.name.split(" ")[0]}{" "}
              <span className="text-ink-400 font-normal italic">
                {profile.name.split(" ").slice(1).join(" ")}
              </span>
            </h1>

            <p className="text-xl text-ink-300 font-body mb-2">{profile.role}</p>
            <p className="text-sm text-ink-500 font-body mb-6">{profile.subtitle}</p>

            <p className="text-ink-300 font-body leading-relaxed max-w-xl mb-8 text-sm">
              {profile.about}
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-3 mb-10">
              <Link to="/projects" className="btn-primary">
                Voir mes projets →
              </Link>
              <Link to="/contact" className="btn-secondary">
                Me contacter
              </Link>
            </div>

            {/* Social links */}
            <div className="flex gap-4">
              {profile.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="underline-link text-sm font-mono"
                >
                  {s.label} ↗
                </a>
              ))}
              <span className="text-ink-600">|</span>
              <a href={`mailto:${profile.email}`} className="underline-link text-sm font-mono">
                {profile.email}
              </a>
            </div>
          </div>

          {/* Visual / Avatar placeholder */}
          <div
            className="md:col-span-2 flex justify-center animate-fade-in"
            style={{ animationDelay: "200ms" }}
          >
            <div className="relative">
              {/* Decorative ring */}
              <div className="w-52 h-52 md:w-64 md:h-64 rounded-full border-2 border-accent/30 flex items-center justify-center">
                <div className="w-44 h-44 md:w-56 md:h-56 rounded-full border border-gold/20 bg-ink-900/60 backdrop-blur flex items-center justify-center">
                  <span className="font-display text-6xl md:text-7xl font-bold text-accent/80">
                    {profile.name.charAt(0)}
                  </span>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-2 -right-2 bg-ink-800 border border-ink-700 rounded-sm px-3 py-1.5">
                <p className="font-mono text-xs text-gold">📍 {profile.location}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills strip */}
        <section className="section-divider pt-8">
          <p className="text-xs font-mono text-ink-600 uppercase tracking-widest mb-4">
            Stack technique
          </p>
          <div className="flex flex-wrap gap-2">
            {allSkills.map((skill) => (
              <span key={skill} className="tag-pill">
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Quick nav cards */}
        <section className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { to: "/projects", icon: "⬡", label: "Projets", desc: "3 projets académiques" },
            { to: "/experience", icon: "◈", label: "Expérience", desc: "Stage en IT, Béni Mellal" },
            { to: "/education", icon: "◉", label: "Formation", desc: "Licence SIR + DEUST MIPC" },
            { to: "/certifications", icon: "◎", label: "Certifications", desc: "Hibernate & JPA — 84%" },
          ].map((card, i) => (
            <Link
              key={card.to}
              to={card.to}
              className="card group"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <span className="text-2xl text-accent/70 group-hover:text-accent transition-colors">
                {card.icon}
              </span>
              <h3 className="font-display font-semibold text-white mt-2 mb-1">{card.label}</h3>
              <p className="text-xs text-ink-500 font-body">{card.desc}</p>
            </Link>
          ))}
        </section>
      </div>
    </>
  );
}
