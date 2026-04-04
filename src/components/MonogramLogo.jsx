import { useRef, useEffect, useState } from 'react';

/**
 * MonogramLogo — Renders GG.png with white background removed via canvas.
 */
export default function MonogramLogo() {
  const canvasRef = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const r = data[i], g = data[i + 1], b = data[i + 2];
        if (r > 200 && g > 200 && b > 200) {
          data[i + 3] = 0;
        }
      }

      ctx.putImageData(imageData, 0, 0);
      setReady(true);
    };
    img.src = import.meta.env.BASE_URL + 'GG.png';
  }, []);

  return (
    <div className="monogram-logo">
      <canvas
        ref={canvasRef}
        style={{ width: '100%', height: 'auto', opacity: ready ? 1 : 0 }}
      />
    </div>
  );
}
