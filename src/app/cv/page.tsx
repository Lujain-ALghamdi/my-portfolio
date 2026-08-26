import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { skillGroups } from "@/data/skills";
import { certificates } from "@/data/certificates";
import PrintButton from "@/components/PrintButton";
import Link from "next/link";

export const metadata = {
  title: "CV — Lujain Anwar Alghamdi",
};

export default function CVPage() {
  const cvProjectIds = ["trainlink", "luna-ai", "color-recognition"];
  const cvProjects = cvProjectIds
    .map((id) => projects.find((p) => p.id === id))
    .filter(Boolean) as typeof projects;
  const allSkills = skillGroups.flatMap((g) => g.skills.map((s) => s.name)).join(" · ");
  const topCerts = certificates.slice(0, 6);
  const moreCerts = certificates.length - topCerts.length;

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 print:bg-white">
      <div className="no-print fixed top-4 right-4 z-50 flex gap-2">
        <Link
          href="/"
          className="px-4 py-2 bg-slate-800 text-white text-sm rounded-lg hover:bg-slate-700"
        >
          ← Portfolio
        </Link>
        <PrintButton />
      </div>

      <article className="cv-page max-w-[820px] mx-auto bg-white my-0 sm:my-8 p-6 sm:p-8 shadow-lg print:shadow-none print:my-0 print:p-0 print:max-w-none">
        <header className="border-b-2 border-slate-800 pb-2 mb-3">
          <h1 className="text-xl font-bold tracking-tight uppercase">{profile.name}</h1>
          <p className="text-sm text-slate-700 mt-0.5">{profile.title}</p>
          <p className="text-xs text-slate-600 mt-1 leading-snug">
            {profile.location} · github.com/Lujain-ALghamdi · linkedin.com/in/lujain-alghamdi-0b26ba367
          </p>
        </header>

        <section className="mb-3">
          <h2 className="cv-heading">Professional Summary</h2>
          <p className="cv-text leading-snug">
            Computer Science graduate from the University of Jeddah with hands-on experience
            building full-stack web applications, AI and computer vision projects, database-driven
            systems, and IoT solutions. Passionate about software development, practical problem
            solving, and creating user-centered digital experiences.
          </p>
        </section>

        <section className="mb-3">
          <h2 className="cv-heading">Education</h2>
          <p className="cv-text">
            <span className="font-semibold">{profile.education.university}</span> —{" "}
            {profile.education.degree} ({profile.education.status})
          </p>
        </section>

        <section className="mb-3">
          <h2 className="cv-heading">Technical Skills</h2>
          <p className="cv-text leading-snug">{allSkills}</p>
        </section>

        <section className="mb-3">
          <h2 className="cv-heading">Projects</h2>
          <div className="space-y-2.5">
            {cvProjects.map((p) => (
              <div key={p.id}>
                <p className="cv-text font-semibold">
                  {p.title}
                  {p.subtitle ? ` — ${p.subtitle}` : ""}
                </p>
                <ul className="cv-text list-disc ml-4 mt-0.5 space-y-0 text-slate-700">
                  {p.highlights.slice(0, 2).map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
                <p className="cv-text text-slate-600 italic mt-0.5">{p.tech.slice(0, 6).join(", ")}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="cv-heading">Certifications</h2>
          <p className="cv-text leading-snug text-slate-700">
            {topCerts.map((c) => `${c.title} (${c.issuer})`).join(" · ")}
            {moreCerts > 0 ? ` · +${moreCerts} more` : ""}
          </p>
          <p className="cv-text text-slate-600 mt-0.5">
            Full list & PDFs available on the portfolio under Certificates.
          </p>
        </section>
      </article>
    </div>
  );
}
