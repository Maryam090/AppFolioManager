// app/accessibility/page.jsx
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Accessibility & VPAT | AppFolio",
  description:
    "We support accessibility and publish our VPAT® report. View or download the latest VPAT for AppFolio.",
  robots: { index: true, follow: true },
};

const REPORTS = [
  {
    id: "vpat-2-5-2025-08-15",
    title: "VPAT® 2.5 (WCAG 2.2 A/AA)",
    version: "2.5",
    date: "August 15, 2025",
    url: "/reports/appfolio-vpat-2.5.pdf",
    size: "~1.2 MB",
  },
  // add older reports here if you keep a history
];

export default function AccessibilityPage() {
  const latest = REPORTS[0];

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <header className="mb-8">
        <h1 className="text-3xl font-semibold">Accessibility & VPAT</h1>
        <p className="mt-2 text-gray-600">
          We are committed to making our website usable by everyone. We assess
          against WCAG 2.2 Level AA and publish a VPAT® to document the current
          status and roadmap.
        </p>
      </header>

      {/* Highlights */}
      <section aria-labelledby="commitments" className="mb-10">
        <h2 id="commitments" className="text-xl font-semibold">Our commitments</h2>
        <ul className="mt-3 list-disc space-y-1 pl-6">
          <li>Design and code with accessibility in mind (WCAG 2.2 AA).</li>
          <li>Test with keyboard and screen readers (e.g., NVDA, VoiceOver).</li>
          <li>Continuously improve known issues noted in the VPAT.</li>
        </ul>
      </section>

      {/* Latest VPAT card */}
      <section aria-labelledby="latest-vpat" className="mb-10">
        <h2 id="latest-vpat" className="text-xl font-semibold">Latest VPAT</h2>

        <div className="mt-4 rounded-2xl border p-5">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-medium">{latest.title}</p>
              <p className="text-sm text-gray-600">
                Published: {latest.date} · File: PDF {latest.size}
              </p>
            </div>
            <div className="flex gap-3">
              {/* Direct download with download attr */}
              <a
                href={latest.url}
                download
                className="rounded-xl border px-4 py-2 text-sm hover:bg-gray-50"
                aria-label="Download VPAT PDF"
              >
                Download PDF
              </a>

              {/* API route forces download filename & headers (optional) */}
              <Link
                href={`/api/download-vpat?id=${encodeURIComponent(latest.id)}`}
                className="rounded-xl bg-black px-4 py-2 text-sm text-white hover:opacity-90"
                aria-label="Download VPAT PDF via secure route"
              >
                Download (via API)
              </Link>
            </div>
          </div>

          {/* Inline PDF preview with accessible fallback */}
          <div className="mt-5">
            <p className="mb-2 text-sm text-gray-600">Preview:</p>
            <object
              data={latest.url}
              type="application/pdf"
              aria-label="VPAT PDF preview"
              className="h-[75vh] w-full rounded-lg border"
            >
              <p className="p-4">
                PDF preview isn’t supported in your browser.{" "}
                <a className="underline" href={latest.url} target="_blank" rel="noopener noreferrer">
                  Open the VPAT in a new tab
                </a>{" "}
                or use the download buttons above.
              </p>
            </object>
          </div>
        </div>
      </section>

      {/* Report history */}
      {REPORTS.length > 1 && (
        <section aria-labelledby="past-reports" className="mb-10">
          <h2 id="past-reports" className="text-xl font-semibold">Past reports</h2>
          <ul className="mt-3 space-y-2">
            {REPORTS.slice(1).map((r) => (
              <li key={r.id} className="flex items-center justify-between rounded-xl border p-4">
                <div>
                  <p className="font-medium">{r.title}</p>
                  <p className="text-sm text-gray-600">Published: {r.date} · PDF {r.size}</p>
                </div>
                <a href={r.url} className="text-sm underline" target="_blank" rel="noopener noreferrer">
                  View
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Contact for accessibility issues */}
      <section aria-labelledby="contact" className="mb-10">
        <h2 id="contact" className="text-xl font-semibold">Report an accessibility issue</h2>
        <p className="mt-2 text-gray-600">
          Found a problem or need an alternative format? Email{" "}
          <a className="underline" href="mailto:accessibility@app-stack.net">
            accessibility@app-stack.net
          </a>{" "}
          with a short description and page URL.
        </p>
      </section>
    </main>
  );
}
