import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import TempleBg from './TempleBg';

describe('TempleBg', () => {
  it('renders a div with class "temple-bg"', () => {
    const { container } = render(<TempleBg />);
    const wrapper = container.querySelector('.temple-bg');
    expect(wrapper).toBeInTheDocument();
  });

  it('contains an SVG element', () => {
    const { container } = render(<TempleBg />);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });

  it('SVG has the correct viewBox', () => {
    const { container } = render(<TempleBg />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('viewBox', '0 0 800 200');
  });

  it('contains temple structure paths and rects', () => {
    const { container } = render(<TempleBg />);
    const paths = container.querySelectorAll('path');
    const rects = container.querySelectorAll('rect');
    expect(paths.length).toBeGreaterThanOrEqual(5);
    expect(rects.length).toBeGreaterThanOrEqual(5);
  });
});
