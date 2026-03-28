import { useMemo } from 'react';
import { PARTICLE_SYMBOLS, PARTICLE_COUNT } from '../data/constants';

/**
 * FloatingParticles — Fixed overlay of drifting symbol particles.
 *
 * Generates PARTICLE_COUNT particles on mount with randomized positions,
 * font sizes, animation durations, and delays. Rendered as a fixed overlay
 * with pointer-events disabled so particles don't interfere with interaction.
 */
export default function FloatingParticles() {
  const particles = useMemo(() =>
    Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
      symbol: PARTICLE_SYMBOLS[i % PARTICLE_SYMBOLS.length],
      left: Math.random() * 100 + '%',
      animationDuration: (12 + Math.random() * 18) + 's',
      animationDelay: (Math.random() * 20) + 's',
      fontSize: (8 + Math.random() * 10) + 'px',
    })),
  []);

  return (
    <div className="floaters">
      {particles.map((p, i) => (
        <span
          key={i}
          className="floater"
          style={{
            left: p.left,
            animationDuration: p.animationDuration,
            animationDelay: p.animationDelay,
            fontSize: p.fontSize,
          }}
        >
          {p.symbol}
        </span>
      ))}
    </div>
  );
}
