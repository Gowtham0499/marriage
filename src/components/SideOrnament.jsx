import { Parallax } from 'react-parallax';

/**
 * SideOrnament — Decorative symbol with parallax movement.
 *
 * Props:
 *   symbol: string — the ornament character (e.g. "❋", "✧")
 *   position: 'left' | 'right' — determines CSS class for positioning
 */
export default function SideOrnament({ symbol, position }) {
  const positionClass = position === 'left' ? 'left' : 'right';

  return (
    <Parallax strength={150}>
      <span className={`side-ornament ${positionClass} parallax-bg`}>
        {symbol}
      </span>
    </Parallax>
  );
}
