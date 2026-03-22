import { Helmet } from "react-helmet-async";
import { education } from "@/data/education";
import { profile } from "@/data/profile";

function fmt(s?: string) {
  if (!s) return "Présent";
  const parts = s.split("-");
  if (parts.length === 2) {
    const months = ["Jan","Fév","Mar","Avr","Mai","Jun","Jul","Aoû","Sep","Oct","Nov","Déc"];
    return `${months[parseInt(parts[1]) - 1]} ${parts[0]}`;
  }
  return s;
}

export default function EducationPage() {
  return (
    <>
      <Helmet>
        <title>Formations — {profile.name}</title>
        <meta name="description" content="Parcours académique de Othmane El Matlini" />
      </Helmet>

      <section className="grid gap-8">
        {/* Header */}
        <div className="border-b border-ink-800 pb-6">
          <p className="font-mono text-accent text-xs uppercase tracking-widest mb-2">Académique</p>
          <h2 className="font-display text-4xl font-bold text-white">Formations</h2>
        </div>

        {/* Timeline */}
        <ol className="relative border-l border-ink-800 ml-4">
          {education.map((e) => (
            <li key={e.school + e.start} className="ms-6 pb-12 last:pb-0">
              {/* Dot */}
              <span className="absolute -left-[9px] mt-1.5 flex h-4 w-4 items-center justify-center rounded-full border border-gold/60 bg-ink-950">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              </span>

              {/* Date */}
              <time className="font-mono text-xs text-ink-500 tracking-wide">
                {fmt(e.start)} — {fmt(e.end)}
                {e.location && (
                  <span className="ml-3 text-ink-600">📍 {e.location}</span>
                )}
              </time>

              {/* Card */}
              <div className="mt-3 card">
                <h3 className="font-display font-semibold text-white text-lg leading-snug">
                  {e.degree}
                  {e.field && (
                    <span className="text-gold"> — {e.field}</span>
                  )}
                </h3>
                <p className="text-ink-400 text-sm font-body mt-0.5 mb-4">@ {e.school}</p>

                {e.gpa && (
                  <p className="text-xs font-mono text-ink-500 mb-3">GPA {e.gpa}</p>
                )}

                {e.courses && e.courses.length > 0 && (
                  <div className="mb-4">
                    <p className="text-xs font-mono text-ink-600 uppercase tracking-widest mb-2">
                      Cours clés
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {e.courses.map((c) => (
                        <span key={c} className="tag-pill">{c}</span>
                      ))}
                    </div>
                  </div>
                )}

                {e.highlights && e.highlights.length > 0 && (
                  <ul className="space-y-1.5">
                    {e.highlights.map((h) => (
                      <li key={h} className="flex gap-2 text-sm text-ink-300 font-body">
                        <span className="text-gold mt-0.5">★</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ol>

        {/* Langues */}
        <div className="section-divider pt-4">
          <p className="text-xs font-mono text-ink-600 uppercase tracking-widest mb-4">Langues</p>
          <div className="flex flex-wrap gap-4">
            {profile.langues.map((l) => (
              <div
                key={l.lang}
                className="flex items-center gap-2 bg-ink-900/60 border border-ink-800 rounded-sm px-4 py-2"
              >
                <span className="text-white font-body text-sm font-medium">{l.lang}</span>
                <span className="text-ink-500 text-xs font-mono">— {l.level}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
