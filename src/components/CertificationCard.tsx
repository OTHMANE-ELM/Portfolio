import clsx from "clsx";
import type { Certification } from "@/data/certifications";

function mmYYYY(s: string) {
  const [y, m] = s.split("-");
  const months = ["Jan","Fév","Mar","Avr","Mai","Jun","Jul","Aoû","Sep","Oct","Nov","Déc"];
  return m ? `${months[parseInt(m) - 1]} ${y}` : y;
}

export default function CertificationCard({ c }: { c: Certification }) {
  const isExpired =
    c.status === "expired" ||
    (c.expiryDate != null && c.expiryDate < c.issueDate);

  return (
    <article
      className={clsx(
        "card flex flex-col group transition-all duration-300",
        isExpired && "opacity-70"
      )}
      aria-label={`Certification ${c.title}`}
    >
      {/* Badge image */}
      {c.image && (
        <div className="flex justify-center mb-4">
          <img
            src={c.image}
            alt={c.imageAlt ?? c.title}
            width={96}
            height={96}
            loading="lazy"
            className="w-24 h-24 object-contain rounded-lg border border-ink-700 bg-ink-900/40 p-1"
          />
        </div>
      )}

      {/* Title */}
      <h3 className="font-display font-semibold text-white leading-snug group-hover:text-accent transition-colors mb-1">
        {c.title}
      </h3>

      {/* Issuer & date */}
      <p className="text-sm text-ink-400 font-body mb-3">
        {c.issuer} · {mmYYYY(c.issueDate)}
        {c.expiryDate && ` → ${mmYYYY(c.expiryDate)}`}
      </p>

      {/* Score / Progression */}
      {(c.score || c.progression) && (
        <div className="flex gap-4 mb-3">
          {c.score && (
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-mono text-ink-600">Score</span>
              <span className="text-sm font-mono text-gold font-medium">{c.score}</span>
            </div>
          )}
          {c.progression && (
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-mono text-ink-600">Progression</span>
              <span className="text-sm font-mono text-accent font-medium">{c.progression}</span>
            </div>
          )}
        </div>
      )}

      {/* Credential ID */}
      {c.credentialId && (
        <p className="text-xs font-mono text-ink-600 mb-3 truncate">
          ID: {c.credentialId}
        </p>
      )}

      {/* Skills */}
      {c.skills && c.skills.length > 0 && (
        <div className="mb-3">
          <p className="text-xs font-mono text-ink-600 mb-1.5">Compétences</p>
          <div className="flex flex-wrap gap-1.5">
            {c.skills.map((s) => (
              <span key={s} className="tag-pill">{s}</span>
            ))}
          </div>
        </div>
      )}

      {/* Tags */}
      {c.tags && c.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-4">
          {c.tags.map((t) => (
            <span
              key={t}
              className="text-xs font-mono px-2 py-0.5 rounded-sm bg-accent/10 text-accent border border-accent/20"
            >
              {t}
            </span>
          ))}
        </div>
      )}

      {/* Bottom row */}
      <div className="mt-auto flex items-center gap-3 text-sm">
        {c.credentialUrl && c.credentialUrl !== "#" && (
          <a
            href={c.credentialUrl}
            target="_blank"
            rel="noreferrer"
            className="underline-link font-mono text-xs"
            aria-label={`Voir le certificat ${c.title}`}
          >
            Voir le certificat ↗
          </a>
        )}
        {isExpired && (
          <span className="text-xs font-mono text-ink-600 ml-auto">Expirée</span>
        )}
        {c.status === "revoked" && (
          <span className="text-xs font-mono text-red-500 ml-auto">Révoquée</span>
        )}
        {c.status === "active" && !isExpired && (
          <span className="text-xs font-mono text-emerald-500 ml-auto flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
            Active
          </span>
        )}
      </div>
    </article>
  );
}
