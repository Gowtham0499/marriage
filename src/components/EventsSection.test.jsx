import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import EventsSection from './EventsSection';

describe('EventsSection', () => {
  it('renders the "Celebrations" heading', () => {
    render(<EventsSection />);
    expect(screen.getByText('Celebrations')).toBeInTheDocument();
  });

  it('renders all six event cards', () => {
    render(<EventsSection />);
    expect(screen.getByText('Mehendi')).toBeInTheDocument();
    expect(screen.getByText('Haldi')).toBeInTheDocument();
    expect(screen.getByText('Cocktail')).toBeInTheDocument();
    expect(screen.getByText('Engagement')).toBeInTheDocument();
    expect(screen.getByText('Shaadi')).toBeInTheDocument();
    expect(screen.getByText('Reception')).toBeInTheDocument();
  });

  it('renders six "See the route →" links', () => {
    render(<EventsSection />);
    const links = screen.getAllByText('See the route →');
    expect(links).toHaveLength(6);
  });

  it('renders DiyaLamp decorations on both sides', () => {
    const { container } = render(<EventsSection />);
    const diyas = container.querySelectorAll('.section-diya');
    expect(diyas).toHaveLength(2);
  });

  it('applies style with gold color to DiyaLamp elements', () => {
    const { container } = render(<EventsSection />);
    const diyas = container.querySelectorAll('.section-diya');
    diyas.forEach((diya) => {
      expect(diya.style.color).toBe('rgb(201, 169, 110)');
    });
  });

  it('renders the events grid with data-stagger attribute', () => {
    const { container } = render(<EventsSection />);
    const grid = container.querySelector('.events-grid');
    expect(grid).toBeInTheDocument();
    expect(grid).toHaveAttribute('data-stagger');
  });

  it('applies data-reveal="up" to the heading', () => {
    render(<EventsSection />);
    const heading = screen.getByText('Celebrations');
    expect(heading).toHaveAttribute('data-reveal', 'up');
  });

  it('renders inside an events section element', () => {
    const { container } = render(<EventsSection />);
    const section = container.querySelector('section.events');
    expect(section).toBeInTheDocument();
  });
});
