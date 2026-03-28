import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import InfoSection from './InfoSection';

// Mock IntersectionObserver for scroll reveal
beforeAll(() => {
  global.IntersectionObserver = vi.fn().mockImplementation(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
  }));
});

describe('InfoSection', () => {
  it('renders the heading', () => {
    render(<InfoSection />);
    expect(screen.getByText('Things to Know')).toBeInTheDocument();
  });

  it('renders the subtitle', () => {
    render(<InfoSection />);
    expect(
      screen.getByText(/To help you feel at ease/)
    ).toBeInTheDocument();
  });

  it('renders four InfoCard components', () => {
    render(<InfoSection />);
    expect(screen.getByText('Hashtag')).toBeInTheDocument();
    expect(screen.getByText('Weather')).toBeInTheDocument();
    expect(screen.getByText('Stay')).toBeInTheDocument();
    expect(screen.getByText('Parking')).toBeInTheDocument();
  });

  it('renders DiyaLamp decorations on both sides', () => {
    const { container } = render(<InfoSection />);
    const diyas = container.querySelectorAll('.section-diya');
    expect(diyas.length).toBe(2);
    expect(container.querySelector('.section-diya.diya-left')).toBeInTheDocument();
    expect(container.querySelector('.section-diya.diya-right')).toBeInTheDocument();
  });

  it('has stagger attribute on the info grid', () => {
    const { container } = render(<InfoSection />);
    const grid = container.querySelector('.info-grid');
    expect(grid).toHaveAttribute('data-stagger');
  });

  it('applies data-reveal="up" to heading and subtitle', () => {
    const { container } = render(<InfoSection />);
    const heading = container.querySelector('h2');
    const subtitle = container.querySelector('.subtitle');
    expect(heading).toHaveAttribute('data-reveal', 'up');
    expect(subtitle).toHaveAttribute('data-reveal', 'up');
  });
});
