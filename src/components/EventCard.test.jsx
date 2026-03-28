import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import EventCard from './EventCard';

const defaultProps = {
  name: 'Mehendi',
  date: 'Friday, March 9th 2026',
  venue: 'Rambagh, Jaipur',
  time: '6pm Onwards',
  mapUrl: 'https://maps.google.com/?q=Rambagh+Palace+Jaipur',
};

describe('EventCard', () => {
  it('renders the event name as a heading', () => {
    render(<EventCard {...defaultProps} />);
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Mehendi');
  });

  it('renders the date', () => {
    render(<EventCard {...defaultProps} />);
    expect(screen.getByText('Friday, March 9th 2026')).toBeInTheDocument();
  });

  it('renders the venue', () => {
    render(<EventCard {...defaultProps} />);
    expect(screen.getByText('Rambagh, Jaipur')).toBeInTheDocument();
  });

  it('renders the time', () => {
    render(<EventCard {...defaultProps} />);
    expect(screen.getByText('6pm Onwards')).toBeInTheDocument();
  });

  it('renders a "See the route →" link with correct href', () => {
    render(<EventCard {...defaultProps} />);
    const link = screen.getByRole('link', { name: /see the route/i });
    expect(link).toHaveAttribute('href', defaultProps.mapUrl);
  });

  it('opens the map link in a new tab', () => {
    render(<EventCard {...defaultProps} />);
    const link = screen.getByRole('link', { name: /see the route/i });
    expect(link).toHaveAttribute('target', '_blank');
  });

  it('applies the event-card class to the wrapper', () => {
    const { container } = render(<EventCard {...defaultProps} />);
    expect(container.firstChild).toHaveClass('event-card');
  });

  it('applies correct CSS classes to date, venue, and time', () => {
    const { container } = render(<EventCard {...defaultProps} />);
    expect(container.querySelector('.date')).toHaveTextContent('Friday, March 9th 2026');
    expect(container.querySelector('.venue')).toHaveTextContent('Rambagh, Jaipur');
    expect(container.querySelector('.time')).toHaveTextContent('6pm Onwards');
  });
});
