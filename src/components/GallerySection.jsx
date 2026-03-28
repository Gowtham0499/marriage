import { useRef, useState, useCallback } from 'react';
import { Parallax } from 'react-parallax';
import useScrollReveal from '../hooks/useScrollReveal';
import { GALLERY_IMAGES } from '../data/constants';

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

  return (
    <Parallax
      strength={150}
      renderLayer={(percentage) => (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: `radial-gradient(ellipse at 50% ${percentage * 100}%, rgba(201,169,110,0.05) 0%, transparent 50%)`,
          }}
        />
      )}
    >
      <section className="gallery">
        <h2 data-reveal="up" ref={headingRef}>Our Moments</h2>

        <div className="gallery-grid" data-stagger ref={gridRef}>
          {GALLERY_IMAGES.map((img, i) => (
            <button
              key={i}
              className="gallery-item"
              onClick={() => openLightbox(i)}
              aria-label={img.caption || `Photo ${i + 1}`}
            >
              <img
                src={img.src}
                alt={img.caption || `Couple photo ${i + 1}`}
                loading="lazy"
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
          >
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">×</button>
              <button className="lightbox-nav lightbox-prev" onClick={goPrev} aria-label="Previous">‹</button>
              <img
                src={GALLERY_IMAGES[lightbox].src}
                alt={GALLERY_IMAGES[lightbox].caption || `Photo ${lightbox + 1}`}
              />
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
