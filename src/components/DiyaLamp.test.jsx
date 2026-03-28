import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import DiyaLamp from './DiyaLamp';

describe('DiyaLamp', () => {
  it('renders an SVG element', () => {
    const { container } = render(<DiyaLamp position="left" />);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });

  it('applies diya-decor class by default', () => {
    const { container } = render(<DiyaLamp position="left" />);
    const wrapper = container.firstChild;
    expect(wrapper).toHaveClass('diya-decor');
  });

  it('applies diya-left class for left position', () => {
    const { container } = render(<DiyaLamp position="left" />);
    const wrapper = container.firstChild;
    expect(wrapper).toHaveClass('diya-left');
  });

  it('applies diya-right class for right position', () => {
    const { container } = render(<DiyaLamp position="right" />);
    const wrapper = container.firstChild;
    expect(wrapper).toHaveClass('diya-right');
  });

  it('applies flame-glow class for animation', () => {
    const { container } = render(<DiyaLamp position="left" />);
    const wrapper = container.firstChild;
    expect(wrapper).toHaveClass('flame-glow');
  });

  it('accepts a custom className prop', () => {
    const { container } = render(<DiyaLamp position="left" className="section-diya" />);
    const wrapper = container.firstChild;
    expect(wrapper).toHaveClass('section-diya');
    expect(wrapper).not.toHaveClass('diya-decor');
  });

  it('contains expected SVG elements (ellipse, path, rect, circle with animate)', () => {
    const { container } = render(<DiyaLamp position="left" />);
    const svg = container.querySelector('svg');
    expect(svg.querySelectorAll('ellipse').length).toBe(3);
    expect(svg.querySelectorAll('path').length).toBe(1);
    expect(svg.querySelectorAll('rect').length).toBe(1);
    expect(svg.querySelectorAll('circle').length).toBe(1);
    expect(svg.querySelectorAll('animate').length).toBe(2);
  });
});
