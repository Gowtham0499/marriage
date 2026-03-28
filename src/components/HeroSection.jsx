import { Parallax } from 'react-parallax';
import DiyaLamp from './DiyaLamp';
import TempleBg from './TempleBg';

/**
 * HeroSection — Full-viewport landing with animated couple names,
 * ornament line, floating symbols, diya lamps, and temple silhouette.
 *
 * All animations (heroReveal, ornamentGrow, drift) are CSS-driven via App.css.
 * Wrapped with react-parallax for background parallax effect.
 */
export default function HeroSection() {
  return (
    <Parallax strength={300}>
      <section className="hero">
        <span className="hero-float">✦</span>
        <span className="hero-float">❋</span>
        <span className="hero-float">✧</span>
        <span className="hero-float">❊</span>

        <DiyaLamp position="left" />
        <DiyaLamp position="right" />

        <h3>GOWTHAM</h3>
        <h2>W E D S</h2>
        <h3>GOMATHI</h3>
        <div className="ornament"></div>

        <TempleBg />
      </section>
    </Parallax>
  );
}
