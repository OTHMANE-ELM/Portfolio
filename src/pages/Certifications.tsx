import { useState, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { certifications } from "@/data/certifications";
import CertificationCard from "@/components/CertificationCard";
import { profile } from "@/data/profile";

export default function CertificationsPage() {
  const [q, setQ] = useState("");

  const list = useMemo(
    () =>
      certifications
        .filter((c) =>
          [c.title, c.issuer, ...(c.tags ?? []), ...(c.skills ?? [])]
            .join(" ")
            .toLowerCase()
            .includes(q.toLowerCase())
        )
        .sort((a, b) => b.issueDate.localeCompare(a.issueDate)),
    [q]
  );

  return (
    <>
      <Helmet>
        <title>Certifications — {profile.name}</title>
        <meta name="description" content="Certifications professionnelles de Othmane El Matlini" />
      </Helmet>

      <section className="grid gap-8">
        {/* Header + filter */}
        <div className="border-b border-ink-800 pb-6">
          <p className="font-mono text-accent text-xs uppercase tracking-widest mb-2">
            Certifications
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end gap-4">
            <div>
              <h2 className="font-display text-4xl font-bold text-white">Certifications</h2>
              <p className="text-ink-400 mt-1 text-sm font-body">
                {list.length} certification{list.length > 1 ? "s" : ""} trouvée{list.length > 1 ? "s" : ""}
              </p>
            </div>
            <input
              type="search"
              placeholder="Filtrer (ex: Java, Kubernetes…)"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              aria-label="Filtrer les certifications"
              className="sm:ml-auto border border-ink-700 bg-ink-900/60 rounded-sm 
                         px-4 py-2 text-sm font-body text-ink-200 placeholder-ink-600 
                         focus:outline-none focus:border-accent w-full sm:w-64
                         transition-colors duration-200"
            />
          </div>
        </div>

        {/* Grid */}
        {list.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {list.map((c) => (
              <CertificationCard key={c.title + c.issueDate} c={c} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-ink-600 font-mono text-sm">
            Aucune certification ne correspond à « {q} »
          </div>
        )}
      </section>
    </>
  );
}
