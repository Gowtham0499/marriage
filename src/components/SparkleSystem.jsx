import { useMemo } from 'react';
import { SPARKLE_COUNT } from '../data/constants';

/**
 * SparkleSystem — Animated dots rising within the Countdown section.
 *
 * Generates SPARKLE_COUNT sparkle dots with randomized horizontal positions,
 * animation durations (3–8s), and animation delays (0–8s). Each dot uses the
 * `.sparkle` CSS class with the `@keyframes sparkle` animation from App.css.
 */
export default function SparkleSystem() {
  const sparkles = useMemo(() =>
    Array.from({ length: SPARKLE_COUNT }, () => ({
      left: Math.random() * 100 + '%',
      animationDuration: (3 + Math.random() * 5) + 's',
      animationDelay: (Math.random() * 8) + 's',
    })),
  []);

  return (
    <>
      {sparkles.map((s, i) => (
        <div
          key={i}
          className="sparkle"
          style={{
            left: s.left,
            bottom: '0',
            animationDuration: s.animationDuration,
            animationDelay: s.animationDelay,
          }}
        />
      ))}
    </>
  );
}
