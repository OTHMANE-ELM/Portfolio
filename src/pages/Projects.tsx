import { Helmet } from "react-helmet-async";
import { projects } from "@/data/projects";
import { profile } from "@/data/profile";

export default function Projects() {
  return (
    <>
      <Helmet>
        <title>Projets — {profile.name}</title>
        <meta name="description" content="Projets académiques et personnels de Othmane El Matlini" />
      </Helmet>

      <section className="grid gap-8">
        {/* Header */}
        <div className="border-b border-ink-800 pb-6">
          <p className="font-mono text-accent text-xs uppercase tracking-widest mb-2">Portfolio</p>
          <h2 className="font-display text-4xl font-bold text-white">Projets</h2>
          <p className="text-ink-400 mt-2 text-sm font-body">
            {projects.length} projets académiques & personnels
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className="card flex flex-col group"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Period badge */}
              {p.period && (
                <span className="font-mono text-xs text-ink-500 mb-3">{p.period}</span>
              )}

              <h3 className="font-display font-semibold text-white leading-snug mb-2 group-hover:text-accent transition-colors">
                {p.title}
              </h3>

              <p className="text-sm text-ink-400 font-body leading-relaxed flex-1 mb-4">
                {p.summary}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {p.tags.map((t) => (
                  <span key={t} className="tag-pill">
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4 text-sm mt-auto">
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="underline-link font-mono text-xs"
                  >
                    Demo ↗
                  </a>
                )}
                {p.repo && (
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="underline-link font-mono text-xs"
                  >
                    Code ↗
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
