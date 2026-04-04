import { useRef } from 'react';
import { Parallax } from 'react-parallax';
import DiyaLamp from './DiyaLamp';
import SideOrnament from './SideOrnament';
import useScrollReveal from '../hooks/useScrollReveal';

export default function BlessingsSection() {
  const sanskritRef = useRef(null);
  const inviteRef = useRef(null);
  const joinTextRef = useRef(null);
  const coupleRef = useRef(null);
  const sonOfRef = useRef(null);
  const daughterRef = useRef(null);
  const eventsRef = useRef(null);

  useScrollReveal(sanskritRef);
  useScrollReveal(inviteRef);
  useScrollReveal(joinTextRef);
  useScrollReveal(coupleRef);
  useScrollReveal(sonOfRef);
  useScrollReveal(daughterRef);
  useScrollReveal(eventsRef);

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
      <section className="blessings">
        <DiyaLamp position="left" className="section-diya" />
        <DiyaLamp position="right" className="section-diya" />
        <SideOrnament symbol="❋" position="left" />
        <SideOrnament symbol="❋" position="right" />

        <p className="sanskrit" data-reveal="up" ref={sanskritRef}>
          ஓம் ஸ்ரீ கணேசாய நம
        </p>
        <p className="invite-text" data-reveal="scale" ref={inviteRef} style={{ transitionDelay: '.1s' }}>
          We INVITE
        </p>
        <p data-reveal="up" ref={joinTextRef} style={{ transitionDelay: '.2s' }}>
          You to join us in the wedding celebrations of
        </p>
        <div className="couple-names" data-reveal="scale" ref={coupleRef} style={{ transitionDelay: '.3s' }}>
          Gowtham
          <p data-reveal="up" ref={sonOfRef} style={{ marginTop: '1rem', transitionDelay: '.4s' }}>
            Son of<br /><strong>(Late) Mr. Sakthivel &amp; Mrs. Jothilakshmi</strong>
          </p>
          <span className="amp">&amp;</span>
          Gomathi
          <p data-reveal="up" ref={daughterRef} style={{ marginTop: '.8rem', transitionDelay: '.5s' }}>
            Daughter of<br /><strong>Mr. Marimuthu &amp; Mrs. Padmavathi</strong>
          </p>
        </div>
        <p
          data-reveal="up"
          ref={eventsRef}
          style={{ marginTop: '1.5rem', color: 'var(--gold)', letterSpacing: '.15em', transitionDelay: '.6s' }}
        >
          On the following events
        </p>
      </section>
    </Parallax>
  );
}
