import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import CountdownSection from './CountdownSection';

// Mock react-parallax
vi.mock('react-parallax', () => ({
  Parallax: ({ children }) => <div>{children}</div>,
}));

describe('CountdownSection', () => {
  it('renders the heading', () => {
    render(<CountdownSection />);
    expect(screen.getByText('The Countdown Begins')).toBeInTheDocument();
  });

  it('renders the countdown display with id="countdown"', () => {
    const { container } = render(<CountdownSection />);
    const countdown = container.querySelector('#countdown');
    expect(countdown).toBeInTheDocument();
  });

  it('renders gold colon separators with sep class', () => {
    const { container } = render(<CountdownSection />);
    const seps = container.querySelectorAll('.sep');
    expect(seps.length).toBe(3);
    seps.forEach((sep) => {
      expect(sep.textContent).toBe(':');
    });
  });

  it('renders four countdown value spans', () => {
    const { container } = render(<CountdownSection />);
    const countdown = container.querySelector('#countdown');
    // 4 value spans + 3 separator spans = 7 total
    const spans = countdown.querySelectorAll('span');
    expect(spans.length).toBe(7);
  });

  it('renders the personal message paragraph', () => {
    render(<CountdownSection />);
    expect(screen.getByText(/Our families are excited/)).toBeInTheDocument();
  });

  it('renders SparkleSystem sparkle dots', () => {
    const { container } = render(<CountdownSection />);
    const sparkles = container.querySelectorAll('.sparkle');
    expect(sparkles.length).toBe(20);
  });

  it('renders TempleBg with custom style', () => {
    const { container } = render(<CountdownSection />);
    const templeBg = container.querySelector('.temple-bg');
    expect(templeBg).toBeInTheDocument();
    expect(templeBg.style.color).toBe('var(--gold)');
    expect(templeBg.style.opacity).toBe('0.05');
  });

  it('applies data-reveal attributes for scroll animations', () => {
    const { container } = render(<CountdownSection />);
    const revealElements = container.querySelectorAll('[data-reveal]');
    expect(revealElements.length).toBe(3);
  });

  it('applies correct reveal directions', () => {
    const { container } = render(<CountdownSection />);
    const heading = container.querySelector('h2');
    expect(heading.getAttribute('data-reveal')).toBe('up');
    const countdown = container.querySelector('#countdown');
    expect(countdown.getAttribute('data-reveal')).toBe('scale');
    const message = container.querySelector('p');
    expect(message.getAttribute('data-reveal')).toBe('up');
  });

  it('applies staggered transition delays', () => {
    const { container } = render(<CountdownSection />);
    const countdown = container.querySelector('#countdown');
    expect(countdown.style.transitionDelay).toBe('.2s');
    const message = container.querySelector('p');
    expect(message.style.transitionDelay).toBe('.4s');
  });
});
