import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import SideOrnament from './SideOrnament';

describe('SideOrnament', () => {
  it('renders the symbol text', () => {
    const { container } = render(<SideOrnament symbol="❋" position="left" />);
    expect(container.textContent).toContain('❋');
  });

  it('applies side-ornament class', () => {
    const { container } = render(<SideOrnament symbol="❋" position="left" />);
    const span = container.querySelector('.side-ornament');
    expect(span).toBeInTheDocument();
  });

  it('applies left class for left position', () => {
    const { container } = render(<SideOrnament symbol="❋" position="left" />);
    const span = container.querySelector('.side-ornament');
    expect(span).toHaveClass('left');
  });

  it('applies right class for right position', () => {
    const { container } = render(<SideOrnament symbol="✧" position="right" />);
    const span = container.querySelector('.side-ornament');
    expect(span).toHaveClass('right');
  });

  it('applies parallax-bg class', () => {
    const { container } = render(<SideOrnament symbol="❋" position="left" />);
    const span = container.querySelector('.side-ornament');
    expect(span).toHaveClass('parallax-bg');
  });

  it('renders different symbols correctly', () => {
    const { container } = render(<SideOrnament symbol="✧" position="right" />);
    expect(container.textContent).toContain('✧');
  });
});
