import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import BlessingsSection from './BlessingsSection';

// Mock react-parallax since it's not needed for unit tests
vi.mock('react-parallax', () => ({
  Parallax: ({ children }) => <div>{children}</div>,
}));

describe('BlessingsSection', () => {
  it('renders the Sanskrit text', () => {
    render(<BlessingsSection />);
    expect(screen.getByText('ॐ श्री गणेशाय नमः')).toBeInTheDocument();
  });

  it('renders both sets of parent names', () => {
    render(<BlessingsSection />);
    expect(screen.getByText(/Smt\. Lata Devi/)).toBeInTheDocument();
    expect(screen.getByText(/Mrs\. Reena/)).toBeInTheDocument();
  });

  it('renders the couple names', () => {
    const { container } = render(<BlessingsSection />);
    const coupleDiv = container.querySelector('.couple-names');
    expect(coupleDiv).toBeInTheDocument();
    expect(coupleDiv.textContent).toContain('Abhishek');
    expect(coupleDiv.textContent).toContain('Kanika');
  });

  it('renders the invitation text', () => {
    render(<BlessingsSection />);
    expect(screen.getByText('INVITE')).toBeInTheDocument();
    expect(screen.getByText(/wedding celebrations/)).toBeInTheDocument();
  });

  it('renders the bride parents below couple names', () => {
    render(<BlessingsSection />);
    expect(screen.getByText(/Mrs\. Shalini & Mr\. Aakash Mittal/)).toBeInTheDocument();
  });

  it('renders "On the following events" text', () => {
    render(<BlessingsSection />);
    expect(screen.getByText('On the following events')).toBeInTheDocument();
  });

  it('renders DiyaLamp decorations on both sides', () => {
    const { container } = render(<BlessingsSection />);
    const diyas = container.querySelectorAll('.section-diya');
    expect(diyas.length).toBe(2);
  });

  it('renders SideOrnament symbols on both sides', () => {
    const { container } = render(<BlessingsSection />);
    const ornaments = container.querySelectorAll('.side-ornament');
    expect(ornaments.length).toBe(2);
  });

  it('applies data-reveal attributes for scroll animations', () => {
    const { container } = render(<BlessingsSection />);
    const revealElements = container.querySelectorAll('[data-reveal]');
    expect(revealElements.length).toBe(10);
  });

  it('applies staggered transition delays', () => {
    const { container } = render(<BlessingsSection />);
    const revealElements = container.querySelectorAll('[data-reveal]');
    // First element (sanskrit) has no explicit delay
    // Second element should have 0.1s delay
    expect(revealElements[1].style.transitionDelay).toBe('.1s');
    // Last element should have 0.9s delay
    expect(revealElements[9].style.transitionDelay).toBe('.9s');
  });
});
