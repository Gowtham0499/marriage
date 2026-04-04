import { useRef, useState, useCallback, useEffect } from 'react';
import { Parallax } from 'react-parallax';
import useScrollReveal from '../hooks/useScrollReveal';
import { GALLERY_IMAGES } from '../data/constants';

/** Block right-click, drag, and long-press on an element */
const protectHandlers = {
  onContextMenu: (e) => e.preventDefault(),
  onDragStart: (e) => e.preventDefault(),
};

export default function GallerySection() {
  const headingRef = useRef(null);
  const gridRef = useRef(null);
  const [lightbox, setLightbox] = useState(null);

  useScrollReveal(headingRef);
  useScrollReveal(gridRef, { stagger: true });

  const openLightbox = useCallback((index) => setLightbox(index), []);
  const closeLightbox = useCallback(() => setLightbox(null), []);
  const goNext = useCallback(() => {
    setLightbox((i) => (i + 1) % GALLERY_IMAGES.length);
  }, []);
  const goPrev = useCallback(() => {
    setLightbox((i) => (i - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
  }, []);
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') goNext();
    if (e.key === 'ArrowLeft') goPrev();
  }, [closeLightbox, goNext, goPrev]);

  // Disable keyboard shortcuts for saving (Ctrl+S, Ctrl+Shift+I)
  useEffect(() => {
    if (lightbox === null) return;
    const block = (e) => {
      if ((e.ctrlKey || e.metaKey) && (e.key === 's' || e.key === 'S')) {
        e.preventDefault();
      }
    };
    window.addEventListener('keydown', block);
    return () => window.removeEventListener('keydown', block);
  }, [lightbox]);

  return (
    <Parallax
      strength={150}
      renderLayer={(percentage) => (
        <div style={{
          position: 'absolute', inset: 0,
          background: `radial-gradient(ellipse at 50% ${percentage * 100}%, rgba(201,169,110,0.05) 0%, transparent 50%)`,
        }} />
      )}
    >
      <section className="gallery" {...protectHandlers}>
        <h2 data-reveal="up" ref={headingRef}>Our Moments</h2>

        <div className="gallery-grid" data-stagger ref={gridRef}>
          {GALLERY_IMAGES.map((img, i) => (
            <button
              key={i}
              className="gallery-item protected-image"
              onClick={() => openLightbox(i)}
              aria-label={img.caption || `Photo ${i + 1}`}
              {...protectHandlers}
            >
              {/* Use background-image instead of <img> to hide URL from simple inspection */}
              <div
                className="gallery-bg"
                style={{ backgroundImage: `url(${img.src})` }}
              />
              <div className="gallery-overlay">
                <span>✦</span>
              </div>
            </button>
          ))}
        </div>

        {/* Lightbox */}
        {lightbox !== null && (
          <div
            className="lightbox"
            onClick={closeLightbox}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            ref={(el) => el && el.focus()}
            role="dialog"
            aria-label="Image lightbox"
            {...protectHandlers}
          >
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">×</button>
              <button className="lightbox-nav lightbox-prev" onClick={goPrev} aria-label="Previous">‹</button>
              <div className="lightbox-image-wrapper">
                <div
                  className="lightbox-bg protected-image"
                  style={{ backgroundImage: `url(${GALLERY_IMAGES[lightbox].src})` }}
                  {...protectHandlers}
                />
                {/* Transparent shield blocks direct image interaction */}
                <div className="lightbox-shield" {...protectHandlers} />
              </div>
              <button className="lightbox-nav lightbox-next" onClick={goNext} aria-label="Next">›</button>
              {GALLERY_IMAGES[lightbox].caption && (
                <p className="lightbox-caption">{GALLERY_IMAGES[lightbox].caption}</p>
              )}
            </div>
          </div>
        )}
      </section>
    </Parallax>
  );
}
