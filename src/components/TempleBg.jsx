/**
 * TempleBg — Temple silhouette background SVG.
 *
 * Used in Hero and Countdown sections. Accepts an optional style prop for overrides.
 * Wraps the SVG in a div with class "temple-bg".
 */
export default function TempleBg({ style } = {}) {
  return (
    <div className="temple-bg" style={style}>
      <svg viewBox="0 0 800 200" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M400 10 L420 50 H440 L450 30 L460 50 H480 L490 30 L500 50 H520 L530 50 V80 H270 V50 H290 L300 50 H310 L320 30 L330 50 H350 L360 30 L370 50 H380 Z" opacity=".8" />
        <rect x="280" y="80" width="240" height="60" opacity=".6" />
        <rect x="260" y="140" width="280" height="60" opacity=".4" />
        <rect x="350" y="90" width="20" height="40" rx="10" opacity=".3" />
        <rect x="390" y="90" width="20" height="40" rx="10" opacity=".3" />
        <rect x="430" y="90" width="20" height="40" rx="10" opacity=".3" />
        <path d="M100 200 V120 L130 80 L160 120 V200Z" opacity=".25" />
        <path d="M120 70 L130 50 L140 70Z" opacity=".25" />
        <path d="M640 200 V120 L670 80 L700 120 V200Z" opacity=".25" />
        <path d="M660 70 L670 50 L680 70Z" opacity=".25" />
        <path d="M0 200 H800" stroke="currentColor" strokeWidth="1" opacity=".2" />
      </svg>
    </div>
  );
}
