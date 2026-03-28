import { useRef } from 'react';
import { Parallax } from 'react-parallax';
import useCountdown from '../hooks/useCountdown';
import useScrollReveal from '../hooks/useScrollReveal';
import { WEDDING_DATE } from '../data/constants';
import SparkleSystem from './SparkleSystem';
import TempleBg from './TempleBg';

/**
 * CountdownSection — Live countdown to the wedding date with sparkle effects,
 * temple silhouette background, and parallax scrolling.
 */
export default function CountdownSection() {
  const { days, hours, minutes, seconds } = useCountdown(WEDDING_DATE);

  const headingRef = useRef(null);
  const countdownRef = useRef(null);
  const messageRef = useRef(null);

  useScrollReveal(headingRef);
  useScrollReveal(countdownRef);
  useScrollReveal(messageRef);

  return (
    <Parallax strength={300}>
      <section className="countdown-section">
        <SparkleSystem />
        <TempleBg style={{ color: 'var(--gold)', opacity: '.05' }} />

        <h2 ref={headingRef} data-reveal="up">The Countdown Begins</h2>

        <div ref={countdownRef} id="countdown" data-reveal="scale" style={{ transitionDelay: '.2s' }}>
          <span>{days}</span>
          <span className="sep">:</span>
          <span>{hours}</span>
          <span className="sep">:</span>
          <span>{minutes}</span>
          <span className="sep">:</span>
          <span>{seconds}</span>
        </div>

        <p ref={messageRef} data-reveal="up" style={{ transitionDelay: '.4s' }}>
          Our families are excited that you are able to join us in celebrating what we hope will be one of the happiest days of our lives.
        </p>
      </section>
    </Parallax>
  );
}
