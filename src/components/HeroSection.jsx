import { Parallax } from 'react-parallax';
import DiyaLamp from './DiyaLamp';
import TempleBg from './TempleBg';
import MonogramLogo from './MonogramLogo';

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

        <div className="hero-content">
          <MonogramLogo />
          <h3>GOWTHAM</h3>
          <h2>W E D S</h2>
          <h3>GOMATHI</h3>
          <div className="ornament"></div>
        </div>

        <TempleBg />
      </section>
    </Parallax>
  );
}
