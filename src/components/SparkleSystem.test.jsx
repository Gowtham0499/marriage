import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import SparkleSystem from './SparkleSystem';
import { SPARKLE_COUNT } from '../data/constants';

describe('SparkleSystem', () => {
  it('renders exactly SPARKLE_COUNT (20) sparkle elements', () => {
    const { container } = render(<SparkleSystem />);
    const sparkles = container.querySelectorAll('.sparkle');
    expect(sparkles).toHaveLength(SPARKLE_COUNT);
  });

  it('applies the sparkle class to each element', () => {
    const { container } = render(<SparkleSystem />);
    const sparkles = container.querySelectorAll('.sparkle');
    sparkles.forEach((el) => {
      expect(el.className).toBe('sparkle');
    });
  });

  it('sets bottom to 0 on each sparkle', () => {
    const { container } = render(<SparkleSystem />);
    const sparkles = container.querySelectorAll('.sparkle');
    sparkles.forEach((el) => {
      expect(el.style.bottom).toBe('0px');
    });
  });

  it('generates left positions between 0% and 100%', () => {
    const { container } = render(<SparkleSystem />);
    const sparkles = container.querySelectorAll('.sparkle');
    sparkles.forEach((el) => {
      const left = parseFloat(el.style.left);
      expect(left).toBeGreaterThanOrEqual(0);
      expect(left).toBeLessThanOrEqual(100);
    });
  });

  it('generates animation durations between 3s and 8s', () => {
    const { container } = render(<SparkleSystem />);
    const sparkles = container.querySelectorAll('.sparkle');
    sparkles.forEach((el) => {
      const duration = parseFloat(el.style.animationDuration);
      expect(duration).toBeGreaterThanOrEqual(3);
      expect(duration).toBeLessThanOrEqual(8);
    });
  });

  it('generates animation delays between 0s and 8s', () => {
    const { container } = render(<SparkleSystem />);
    const sparkles = container.querySelectorAll('.sparkle');
    sparkles.forEach((el) => {
      const delay = parseFloat(el.style.animationDelay);
      expect(delay).toBeGreaterThanOrEqual(0);
      expect(delay).toBeLessThanOrEqual(8);
    });
  });

  it('renders div elements (not spans)', () => {
    const { container } = render(<SparkleSystem />);
    const sparkles = container.querySelectorAll('.sparkle');
    sparkles.forEach((el) => {
      expect(el.tagName).toBe('DIV');
    });
  });
});
