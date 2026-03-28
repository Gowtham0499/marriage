import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import TempleDivider from './TempleDivider';

describe('TempleDivider', () => {
  it('renders an SVG element', () => {
    const { container } = render(<TempleDivider variant="light" />);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });

  it('applies temple-divider class for light variant', () => {
    const { container } = render(<TempleDivider variant="light" />);
    const wrapper = container.firstChild;
    expect(wrapper).toHaveClass('temple-divider');
    expect(wrapper).not.toHaveClass('dark');
  });

  it('applies temple-divider and dark classes for dark variant', () => {
    const { container } = render(<TempleDivider variant="dark" />);
    const wrapper = container.firstChild;
    expect(wrapper).toHaveClass('temple-divider');
    expect(wrapper).toHaveClass('dark');
  });

  it('sets color to var(--gold) on the wrapper', () => {
    const { container } = render(<TempleDivider variant="light" />);
    const wrapper = container.firstChild;
    expect(wrapper.style.color).toBe('var(--gold)');
  });

  it('contains expected SVG path elements', () => {
    const { container } = render(<TempleDivider variant="light" />);
    const svg = container.querySelector('svg');
    expect(svg.querySelectorAll('path').length).toBe(4);
  });

  it('defaults to light variant when no prop is provided', () => {
    const { container } = render(<TempleDivider />);
    const wrapper = container.firstChild;
    expect(wrapper).toHaveClass('temple-divider');
    expect(wrapper).not.toHaveClass('dark');
  });
});
