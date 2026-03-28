import { useState, useCallback, useRef, useEffect } from 'react';

/**
 * DiyaLamp — Reusable SVG oil lamp with animated flame glow,
 * custom scroll-based parallax, and mouse-hover tilt/glow effects.
 *
 * Props:
 *   position: 'left' | 'right' — determines CSS class for positioning
 *   className: optional CSS class (defaults to 'diya-decor')
 *   style: optional inline styles
 *   parallaxSpeed: scroll parallax multiplier (default 0.08)
 */
export default function DiyaLamp({ position, className = 'diya-decor', style, parallaxSpeed = 0.08 }) {
  const positionClass = position === 'left' ? 'diya-left' : 'diya-right';
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, scale: 1 });
  const [isHovered, setIsHovered] = useState(false);
  const [parallaxY, setParallaxY] = useState(0);
  const ref = useRef(null);

  // Custom scroll-based parallax
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (ref.current) {
            const section = ref.current.closest('section');
            if (section) {
              const rect = section.getBoundingClientRect();
              setParallaxY((rect.top + rect.height / 2) * parallaxSpeed);
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [parallaxSpeed]);

  const handleMouseMove = useCallback((e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setTilt({
      rotateX: (y - 0.5) * -20,
      rotateY: (x - 0.5) * 20,
      scale: 1.15,
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTilt({ rotateX: 0, rotateY: 0, scale: 1 });
    setIsHovered(false);
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const tiltTransform = `perspective(200px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale(${tilt.scale}) translateY(${parallaxY}px)`;
  const tiltStyle = {
    transform: tiltTransform,
    transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.4s ease-out',
  };

  return (
    <div
      ref={ref}
      className={`${className} ${positionClass} flame-glow diya-interactive`}
      style={{ ...style, ...tiltStyle }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <svg viewBox="0 0 100 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="50" cy="105" rx="35" ry="12" fill="currentColor" opacity=".6" />
        <path d="M20 105 Q20 75 50 70 Q80 75 80 105Z" fill="currentColor" opacity=".5" />
        <rect x="45" y="55" width="10" height="18" rx="5" fill="currentColor" opacity=".4" />
        <ellipse cx="50" cy="42" rx="8" ry="16" fill="currentColor" opacity=".7" />
        <ellipse cx="50" cy="35" rx="4" ry="10" fill="currentColor" opacity=".9" />
        {/* Outer glow ring */}
        <circle cx="50" cy="30" r="12" fill="none" stroke="currentColor" opacity=".15" strokeWidth="1">
          <animate attributeName="r" values="12;18;12" dur="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values=".15;.05;.15" dur="2s" repeatCount="indefinite" />
        </circle>
        {/* Extra glow ring visible on hover via CSS */}
        <circle className="diya-hover-glow" cx="50" cy="30" r="22" fill="none" stroke="currentColor" strokeWidth="0.5" />
      </svg>
    </div>
  );
}
