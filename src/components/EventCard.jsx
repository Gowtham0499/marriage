import { useState, useRef, useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';

function EventCard({ name, tamilName, description, date, venue, time, mapUrl }) {
  const [tooltip, setTooltip] = useState(null);
  const iconRef = useRef(null);

  const calcPosition = useCallback(() => {
    if (!iconRef.current) return null;
    const rect = iconRef.current.getBoundingClientRect();
    const tooltipWidth = Math.min(280, window.innerWidth - 24);
    let left = rect.left + rect.width / 2;

    // Clamp so tooltip doesn't overflow viewport edges
    const halfWidth = tooltipWidth / 2;
    if (left - halfWidth < 12) left = halfWidth + 12;
    if (left + halfWidth > window.innerWidth - 12) left = window.innerWidth - halfWidth - 12;

    return { top: rect.bottom + 8, left, width: tooltipWidth };
  }, []);

  const showTooltip = useCallback(() => {
    if (!description) return;
    setTooltip(calcPosition());
  }, [description, calcPosition]);

  const hideTooltip = useCallback(() => setTooltip(null), []);

  const toggleTooltip = useCallback(() => {
    if (!description) return;
    setTooltip((prev) => (prev ? null : calcPosition()));
  }, [description, calcPosition]);

  // Close tooltip when scrolling or tapping elsewhere
  useEffect(() => {
    if (!tooltip) return;
    const close = () => setTooltip(null);
    window.addEventListener('scroll', close, { passive: true });
    return () => window.removeEventListener('scroll', close);
  }, [tooltip]);

  return (
    <div className="event-card">
      {description && (
        <span
          className="event-info-trigger"
          ref={iconRef}
          onMouseEnter={showTooltip}
          onMouseLeave={hideTooltip}
          onClick={toggleTooltip}
        >
          <span className="event-info-icon">ℹ</span>
        </span>
      )}
      <h3>{name}</h3>
      {tamilName && <p className="tamil-name">{tamilName}</p>}
      <p className="date">{date}</p>
      <p className="venue">{venue}</p>
      <p className="time">{time}</p>
      <a href={mapUrl} target="_blank" rel="noopener noreferrer">
        See the route →
      </a>

      {tooltip && createPortal(
        <div
          className="event-tooltip-fixed"
          style={{ top: tooltip.top, left: tooltip.left, width: tooltip.width }}
          onClick={hideTooltip}
        >
          <span className="event-tooltip-arrow-up" />
          <p>{description}</p>
        </div>,
        document.body
      )}
    </div>
  );
}

export default EventCard;
