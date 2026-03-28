import { useState, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';

function EventCard({ name, tamilName, description, date, venue, time, mapUrl }) {
  const [tooltip, setTooltip] = useState(null);
  const iconRef = useRef(null);

  const showTooltip = useCallback(() => {
    if (!iconRef.current || !description) return;
    const rect = iconRef.current.getBoundingClientRect();
    setTooltip({
      top: rect.bottom + 8,
      left: rect.left + rect.width / 2,
    });
  }, [description]);

  const hideTooltip = useCallback(() => setTooltip(null), []);

  return (
    <div className="event-card">
      {description && (
        <span
          className="event-info-trigger"
          ref={iconRef}
          onMouseEnter={showTooltip}
          onMouseLeave={hideTooltip}
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
          style={{ top: tooltip.top, left: tooltip.left }}
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
