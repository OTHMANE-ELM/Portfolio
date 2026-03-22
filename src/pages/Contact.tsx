import { Helmet } from "react-helmet-async";
import { profile } from "@/data/profile";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact — {profile.name}</title>
        <meta name="description" content={`Contacter ${profile.name} — ${profile.role}`} />
      </Helmet>

      <section className="grid gap-8 max-w-2xl">
        {/* Header */}
        <div className="border-b border-ink-800 pb-6">
          <p className="font-mono text-accent text-xs uppercase tracking-widest mb-2">Contact</p>
          <h2 className="font-display text-4xl font-bold text-white">Me Contacter</h2>
          <p className="text-ink-400 mt-2 text-sm font-body">
            Disponible pour un stage PFE — n'hésitez pas à me joindre.
          </p>
        </div>

        {/* Contact info cards */}
        <div className="grid gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="card flex items-center gap-4 group hover:border-accent/40"
          >
            <span className="text-2xl text-accent/70 group-hover:text-accent transition-colors">✉</span>
            <div>
              <p className="text-xs font-mono text-ink-600 uppercase tracking-widest mb-0.5">Email</p>
              <p className="text-white font-body group-hover:text-accent transition-colors">
                {profile.email}
              </p>
            </div>
          </a>

          <div className="card flex items-center gap-4">
            <span className="text-2xl text-ink-500">☎</span>
            <div>
              <p className="text-xs font-mono text-ink-600 uppercase tracking-widest mb-0.5">Téléphone</p>
              <p className="text-white font-body">{profile.phone}</p>
            </div>
          </div>

          <div className="card flex items-center gap-4">
            <span className="text-2xl text-ink-500">📍</span>
            <div>
              <p className="text-xs font-mono text-ink-600 uppercase tracking-widest mb-0.5">
                Localisation
              </p>
              <p className="text-white font-body">{profile.location}</p>
            </div>
          </div>
        </div>

        {/* Social links */}
        <div className="section-divider pt-2">
          <p className="text-xs font-mono text-ink-600 uppercase tracking-widest mb-4">
            Réseaux sociaux
          </p>
          <div className="flex flex-col gap-3">
            {profile.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="card flex items-center justify-between group hover:border-accent/40"
              >
                <span className="font-body text-white font-medium">{s.label}</span>
                <span className="text-ink-500 group-hover:text-accent transition-colors font-mono text-sm">
                  {s.href.replace("https://", "")} ↗
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Availability note */}
        <div className="bg-accent/5 border border-accent/20 rounded-sm p-5">
          <p className="text-sm font-body text-ink-300 leading-relaxed">
            🎓 Étudiant en dernière année de Licence SIR, je recherche activement un{" "}
            <strong className="text-white">stage PFE</strong> pour mettre en pratique mes
            compétences en développement full stack (Spring Boot, React, MySQL).
          </p>
        </div>
      </section>
    </>
  );
}
