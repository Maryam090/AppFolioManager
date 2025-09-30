"use client";

const REPORTS = [
  {
    id: "vpat-2-5-2025-08-15",
    title: "VPAT® 2.5 (WCAG 2.2 A/AA)",
    version: "2.5",
    date: "August 15, 2025",
    url: "/reports/App-Stack-Section508-VPAT-2.5.pdf",
    size: "~1.2 MB",
  },
];

export default function AccessibilityClient() {
  const latest = REPORTS[0];

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      {/* Header */}
      <header className="mb-8">
        <h1 style={{ fontSize: "24px", fontWeight: 500 }}>
          Accessibility & VPAT
        </h1>
        <p style={{ marginTop: "8px", color: "#555" }}>
          We are committed to making our website usable by everyone. We assess
          against WCAG 2.2 Level AA and publish a VPAT® to document the current
          status and roadmap.
        </p>
      </header>

      {/* Full Accessibility Statement Content */}
      <div style={{ marginBottom: "20px" }}>
        <div style={{ marginTop: "16px" }}>
          <h2 style={{ fontSize: "20px", marginBottom: "8px" }}>Scope</h2>
          <p>
            This statement applies to app-stack.net and connected web
            experiences.
          </p>

          <h2 style={{ fontSize: "20px", marginTop: "16px" }}>
            Our Standard & Current Status
          </h2>
          <p>
            We are committed to making our website usable by everyone. We work
            toward <b>WCAG 2.2 Level AA</b>. Our most recent assessment (VPAT®
            2.5, August 15, 2025) evaluated the site against{" "}
            <b>WCAG 2.0 A/AA</b> and found <b>overall “Partially Supports.”</b>
          </p>

          <h2 style={{ fontSize: "20px", marginTop: "16px" }}>How We Test</h2>
          <p>
            We combine automated checks and manual audits, including
            screen-reader and keyboard testing. Tools and AT used include{" "}
            <b>axe, Colour Contrast Analyser</b>, and{" "}
            <b>NVDA, JAWS, VoiceOver</b> on current Chrome/Firefox/Edge/Safari
            across Windows and macOS.
          </p>

          <h2 style={{ fontSize: "20px", marginTop: "16px" }}>Compatibility</h2>
          <p>
            Our site is intended to work with current versions of major browsers
            on desktop and mobile OSs and with assistive technologies that
            follow platform accessibility APIs.
          </p>

          <h2 style={{ fontSize: "20px", marginTop: "16px" }}>
            Known Accessibility Limitations (from our VPAT)
          </h2>
          <ul style={{ marginLeft: "20px", marginTop: "8px" }}>
            <li>
              <b>Non-text content:</b> some decorative images/icons are not
              hidden from screen readers.
            </li>
            <li>
              <b>Info & relationships / landmarks:</b> missing or incorrect
              heading levels and landmarks on certain pages (e.g., missing H1 on
              “About,” footer landmark not defined on “Login,” dashboard
              landmarks).
            </li>
            <li>
              <b>Bypass blocks:</b> “Skip to main content” link not present.
            </li>
            <li>
              <b>Page titles:</b> some pages lack descriptive/unique titles.
            </li>
            <li>
              <b>Focus order & forms:</b> focus can enter an unexpanded
              accordion; focus doesn’t move to first invalid field; required
              fields aren’t always announced.
            </li>
            <li>
              <b>Name/Role/Value:</b> accordion name/state not exposed;
              show/hide password control lacks accessible name.
            </li>
            <li>
              <b>Contrast:</b> certain texts (e.g., “Login,” placeholders,
              specific headings) fall below <b>4.5:1</b>.
            </li>
          </ul>

          <h2 style={{ fontSize: "20px", marginTop: "16px" }}>
            Feedback & Accommodation Requests
          </h2>
          <p>
            If you encounter an accessibility barrier or need content in an
            alternative format, email{" "}
            <a
              href="mailto:support@app-stack.net"
              style={{ textDecoration: "underline" }}
            >
              <b>support@app-stack.net</b>
            </a>
            . We aim to reply within <b>2 business days</b> and resolve issues
            within <b>10 business days</b>.
          </p>

          <h2 style={{ fontSize: "20px", marginTop: "16px" }}>
            Ongoing Improvements
          </h2>
          <p>
            We’re adding a global skip link, correcting heading hierarchy and
            landmarks, fixing low-contrast styles, ensuring required fields are
            programmatically conveyed, and labelling interactive controls. We
            review this page after major releases and at least <b>annually</b>.
          </p>
        </div>
      </div>

      {/* Latest VPAT */}

      <div>
        <p style={{ fontSize: "14px", color: "#666" }}>
          Published: {latest.date}
        </p>
      </div>
    </main>
  );
}
