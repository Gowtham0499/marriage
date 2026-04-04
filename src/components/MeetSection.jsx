import { useRef } from 'react';
import { Parallax } from 'react-parallax';
import DiyaLamp from './DiyaLamp';
import SideOrnament from './SideOrnament';
import useScrollReveal from '../hooks/useScrollReveal';

export default function MeetSection() {
  const labelRef = useRef(null);
  const headingRef = useRef(null);
  const messageRef = useRef(null);

  useScrollReveal(labelRef);
  useScrollReveal(headingRef);
  useScrollReveal(messageRef);

  return (
    <Parallax
      strength={200}
      renderLayer={(percentage) => (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: `radial-gradient(ellipse at 50% ${percentage * 100}%, rgba(201,169,110,0.04) 0%, transparent 60%)`,
          }}
        />
      )}
    >
      <section className="meet">
        <DiyaLamp position="left" className="section-diya" style={{ color: '#c9a96e' }} />
        <DiyaLamp position="right" className="section-diya" style={{ color: '#c9a96e' }} />
        <SideOrnament symbol="✧" position="left" />
        <SideOrnament symbol="✧" position="right" />

        <p className="label" data-reveal="up" ref={labelRef}>
          meet the
        </p>
        <h2 data-reveal="scale" ref={headingRef} style={{ transitionDelay: '.15s' }}>
          Bride &amp; Groom
        </h2>
        <p data-reveal="up" ref={messageRef} style={{ transitionDelay: '.3s' }}>
          We are both so delighted that you are able to join us in celebrating what
          we hope will be one of the happiest days of our lives. The affection
          shown to us by so many people since our roka has been incredibly moving,
          and has touched us both deeply. We would like to take this opportunity to
          thank everyone most sincerely for their kindness. We are looking forward
          to see you at the wedding.
        </p>
      </section>
    </Parallax>
  );
}
