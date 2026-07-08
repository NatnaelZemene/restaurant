/**
 * ArchDivider — the site's signature motif.
 *
 * Gondar is defined by Fasil Ghebbi, the 17th-century castle complex whose
 * silhouette — round towers, crenellations, and repeating stone archways —
 * is the single most recognizable image of the city. Rather than a generic
 * gold rule or a numbered-marker divider, every section break on this site
 * uses a thin-line repeating arch, drawn once and echoed at small scale in
 * the nav underline, the menu card corners, and the footer. It's the one
 * piece of "brand" this design invents, and it's derived from Gondar's own
 * architecture rather than a stock luxury-restaurant trope.
 */
export function ArchDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex justify-center ${className}`} aria-hidden="true">
      <svg
        width="220"
        height="24"
        viewBox="0 0 220 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 22V10C2 5 6 2 11 2C16 2 20 5 20 10V22"
          stroke="url(#archGrad)"
          strokeWidth="1.25"
        />
        <path
          d="M42 22V10C42 5 46 2 51 2C56 2 60 5 60 10V22"
          stroke="url(#archGrad)"
          strokeWidth="1.25"
        />
        <path
          d="M82 22V10C82 5 86 2 91 2C96 2 100 5 100 10V22"
          stroke="url(#archGrad)"
          strokeWidth="1.25"
        />
        <path
          d="M120 22V10C120 5 124 2 129 2C134 2 138 5 138 10V22"
          stroke="url(#archGrad)"
          strokeWidth="1.25"
        />
        <path
          d="M160 22V10C160 5 164 2 169 2C174 2 178 5 178 10V22"
          stroke="url(#archGrad)"
          strokeWidth="1.25"
        />
        <path
          d="M200 22V10C200 5 204 2 209 2C214 2 218 5 218 10V22"
          stroke="url(#archGrad)"
          strokeWidth="1.25"
        />
        <defs>
          <linearGradient id="archGrad" x1="0" y1="0" x2="220" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#D4AF37" stopOpacity="0" />
            <stop offset="0.5" stopColor="#D4AF37" stopOpacity="0.9" />
            <stop offset="1" stopColor="#D4AF37" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
