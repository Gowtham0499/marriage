import { useRef } from 'react';
import { Parallax } from 'react-parallax';
import DiyaLamp from './DiyaLamp';
import EventCard from './EventCard';
import { EVENTS } from '../data/constants';
import useScrollReveal from '../hooks/useScrollReveal';

export default function EventsSection() {
  const headingRef = useRef(null);
  const gridRef = useRef(null);

  useScrollReveal(headingRef);
  useScrollReveal(gridRef, { stagger: true });

  return (
    <Parallax
      strength={250}
      renderLayer={(percentage) => (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: `radial-gradient(ellipse at 50% ${percentage * 100}%, rgba(201,169,110,0.06) 0%, transparent 50%)`,
          }}
        />
      )}
    >
      <section className="events">
        <DiyaLamp position="left" className="section-diya" style={{ color: '#c9a96e' }} />
        <DiyaLamp position="right" className="section-diya" style={{ color: '#c9a96e' }} />

        <h2 data-reveal="up" ref={headingRef}>Celebrations</h2>

        <div className="events-grid" data-stagger ref={gridRef}>
          {EVENTS.map((event) => (
            <EventCard
              key={event.name}
              name={event.name}
              tamilName={event.tamilName}
              description={event.description}
              date={event.date}
              venue={event.venue}
              time={event.time}
              mapUrl={event.mapUrl}
            />
          ))}
        </div>
      </section>
    </Parallax>
  );
}
