import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import FloatingParticles from './FloatingParticles';
import { PARTICLE_SYMBOLS, PARTICLE_COUNT } from '../data/constants';

describe('FloatingParticles', () => {
  it('renders exactly PARTICLE_COUNT (15) particle elements', () => {
    const { container } = render(<FloatingParticles />);
    const particles = container.querySelectorAll('.floater');
    expect(particles).toHaveLength(PARTICLE_COUNT);
  });

  it('renders a fixed overlay container with floaters class', () => {
    const { container } = render(<FloatingParticles />);
    const overlay = container.querySelector('.floaters');
    expect(overlay).toBeInTheDocument();
  });

  it('cycles through PARTICLE_SYMBOLS for each particle', () => {
    const { container } = render(<FloatingParticles />);
    const particles = container.querySelectorAll('.floater');
    particles.forEach((el, i) => {
      expect(el.textContent).toBe(PARTICLE_SYMBOLS[i % PARTICLE_SYMBOLS.length]);
    });
  });

  it('applies inline styles for left, animationDuration, animationDelay, and fontSize', () => {
    const { container } = render(<FloatingParticles />);
    const particle = container.querySelector('.floater');
    const style = particle.style;
    expect(style.left).toBeTruthy();
    expect(style.animationDuration).toBeTruthy();
    expect(style.animationDelay).toBeTruthy();
    expect(style.fontSize).toBeTruthy();
  });

  it('generates font sizes between 8px and 18px', () => {
    const { container } = render(<FloatingParticles />);
    const particles = container.querySelectorAll('.floater');
    particles.forEach((el) => {
      const size = parseFloat(el.style.fontSize);
      expect(size).toBeGreaterThanOrEqual(8);
      expect(size).toBeLessThanOrEqual(18);
    });
  });

  it('generates animation durations between 12s and 30s', () => {
    const { container } = render(<FloatingParticles />);
    const particles = container.querySelectorAll('.floater');
    particles.forEach((el) => {
      const duration = parseFloat(el.style.animationDuration);
      expect(duration).toBeGreaterThanOrEqual(12);
      expect(duration).toBeLessThanOrEqual(30);
    });
  });

  it('generates left positions between 0% and 100%', () => {
    const { container } = render(<FloatingParticles />);
    const particles = container.querySelectorAll('.floater');
    particles.forEach((el) => {
      const left = parseFloat(el.style.left);
      expect(left).toBeGreaterThanOrEqual(0);
      expect(left).toBeLessThanOrEqual(100);
    });
  });
});
