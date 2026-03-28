import { useRef } from 'react';
import { Parallax } from 'react-parallax';
import DiyaLamp from './DiyaLamp';
import InfoCard from './InfoCard';
import { INFO_ITEMS } from '../data/constants';
import useScrollReveal from '../hooks/useScrollReveal';

export default function InfoSection() {
  const headingRef = useRef(null);
  const subtitleRef = useRef(null);
  const gridRef = useRef(null);

  useScrollReveal(headingRef);
  useScrollReveal(subtitleRef);
  useScrollReveal(gridRef, { stagger: true });

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
      <section className="info">
        <DiyaLamp position="left" className="section-diya" />
        <DiyaLamp position="right" className="section-diya" />

        <h2 data-reveal="up" ref={headingRef}>Things to Know</h2>
        <p
          className="subtitle"
          data-reveal="up"
          ref={subtitleRef}
          style={{ transitionDelay: '.15s' }}
        >
          To help you feel at ease and enjoy every moment of the celebrations,
          we've gathered a few thoughtful details.
        </p>

        <div className="info-grid" data-stagger ref={gridRef}>
          {INFO_ITEMS.map((item, index) => (
            <InfoCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
              index={index}
            />
          ))}
        </div>
      </section>
    </Parallax>
  );
}
