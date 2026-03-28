import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import InfoCard from './InfoCard';

const defaultProps = {
  icon: '#',
  title: 'Hashtag',
  description: 'Use the hashtag — <strong>#abkan</strong>',
  index: 0,
};

describe('InfoCard', () => {
  it('renders the icon', () => {
    render(<InfoCard {...defaultProps} />);
    expect(screen.getByText('#')).toBeInTheDocument();
  });

  it('renders the title as an h3 heading', () => {
    render(<InfoCard {...defaultProps} />);
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Hashtag');
  });

  it('renders the description with HTML content', () => {
    const { container } = render(<InfoCard {...defaultProps} />);
    const paragraph = container.querySelector('.info-card p');
    expect(paragraph.innerHTML).toContain('<strong>#abkan</strong>');
  });

  it('applies the info-card class to the wrapper', () => {
    const { container } = render(<InfoCard {...defaultProps} />);
    expect(container.firstChild).toHaveClass('info-card');
  });

  it('applies the icon class to the icon wrapper', () => {
    const { container } = render(<InfoCard {...defaultProps} />);
    expect(container.querySelector('.icon')).toBeInTheDocument();
  });

  it('sets staggered animation delay based on index', () => {
    const { container } = render(<InfoCard {...defaultProps} index={2} />);
    const iconEl = container.querySelector('.icon');
    expect(iconEl.style.animationDelay).toBe('1s');
  });

  it('sets zero delay for index 0', () => {
    const { container } = render(<InfoCard {...defaultProps} index={0} />);
    const iconEl = container.querySelector('.icon');
    expect(iconEl.style.animationDelay).toBe('0s');
  });

  it('renders plain text description without HTML', () => {
    render(<InfoCard {...defaultProps} description="Valet parking available" />);
    expect(screen.getByText('Valet parking available')).toBeInTheDocument();
  });
});
