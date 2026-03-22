import { Helmet } from "react-helmet-async";
import { experience } from "@/data/experience";
import { profile } from "@/data/profile";

function fmt(s?: string) {
  if (!s) return "Présent";
  const [y, m] = s.split("-");
  const months = ["Jan","Fév","Mar","Avr","Mai","Jun","Jul","Aoû","Sep","Oct","Nov","Déc"];
  return m ? `${months[parseInt(m) - 1]} ${y}` : y;
}

export default function Experience() {
  return (
    <>
      <Helmet>
        <title>Parcours — {profile.name}</title>
        <meta name="description" content="Expérience professionnelle de Othmane El Matlini" />
      </Helmet>

      <section className="grid gap-8">
        {/* Header */}
        <div className="border-b border-ink-800 pb-6">
          <p className="font-mono text-accent text-xs uppercase tracking-widest mb-2">Carrière</p>
          <h2 className="font-display text-4xl font-bold text-white">Expérience Professionnelle</h2>
        </div>

        {/* Timeline */}
        <ol className="relative border-l border-ink-800 ml-4 space-y-0">
          {experience.map((exp) => (
            <li key={exp.company + exp.start} className="ms-6 pb-12 last:pb-0">
              {/* Dot */}
              <span className="absolute -left-[9px] mt-1.5 flex h-4 w-4 items-center justify-center rounded-full border border-accent bg-ink-950">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              </span>

              {/* Date */}
              <time className="font-mono text-xs text-ink-500 tracking-wide">
                {fmt(exp.start)} — {fmt(exp.end)}
                {exp.location && (
                  <span className="ml-3 text-ink-600">📍 {exp.location}</span>
                )}
              </time>

              {/* Card */}
              <div className="mt-3 card">
                <h3 className="font-display font-semibold text-white text-lg leading-snug">
                  {exp.role}
                </h3>
                <p className="text-accent text-sm font-body mt-0.5 mb-4">{exp.company}</p>

                <ul className="space-y-2">
                  {exp.description.map((d, j) => (
                    <li key={j} className="flex gap-3 text-sm text-ink-300 font-body">
                      <span className="text-accent mt-0.5 shrink-0">▸</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>

        {/* Skills used */}
        <div className="section-divider pt-4">
          <p className="text-xs font-mono text-ink-600 uppercase tracking-widest mb-4">
            Compétences techniques globales
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {Object.entries(profile.skills).map(([cat, skills]) => (
              <div key={cat}>
                <p className="text-xs font-mono text-ink-500 capitalize mb-2">{cat}</p>
                <div className="flex flex-wrap gap-1.5">
                  {skills.map((s) => (
                    <span key={s} className="tag-pill">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Qualités */}
        <div>
          <p className="text-xs font-mono text-ink-600 uppercase tracking-widest mb-4">Qualités</p>
          <div className="flex flex-wrap gap-2">
            {profile.qualites.map((q) => (
              <span
                key={q}
                className="px-3 py-1.5 text-xs font-body border border-ink-700 rounded-sm text-ink-300 bg-ink-900/40"
              >
                {q}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
