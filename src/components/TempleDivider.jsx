/**
 * TempleDivider — Full-width SVG divider between sections.
 *
 * Props:
 *   variant: 'light' | 'dark' — sets background class
 */
export default function TempleDivider({ variant = 'light' }) {
  const className = variant === 'dark' ? 'temple-divider dark' : 'temple-divider';

  return (
    <div className={className} style={{ color: 'var(--gold)' }}>
      <svg viewBox="0 0 1200 80" preserveAspectRatio="none" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 80 H1200 V60 H680 V40 L620 20 H580 L520 40 V60 H0Z" opacity=".08" />
        <path d="M580 20 L600 5 L620 20Z" opacity=".12" />
        <path d="M200 80 V65 L215 55 L230 65 V80Z" opacity=".05" />
        <path d="M970 80 V65 L985 55 L1000 65 V80Z" opacity=".05" />
      </svg>
    </div>
  );
}
