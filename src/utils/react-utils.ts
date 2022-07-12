import { useCallback, useEffect, useState } from 'react';

const events = ['resize', 'load', 'orientationchange'];

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window?.innerWidth || 1920,
    height: window?.innerHeight || 1080,
  });

  useEffect(() => {
    let lastWidth = window?.innerWidth || 1920;
    let lastHeight = window?.innerHeight || 1080;

    const handleResize = () => {
      if (window.innerWidth !== lastWidth || window.innerHeight !== lastHeight) {
        lastWidth = window.innerWidth;
        lastHeight = window.innerHeight;
        setWindowSize({ width: window.innerWidth, height: window.innerHeight });
      }
    };

    events.map(event => window.addEventListener(event, handleResize));
    handleResize();
    return () => {
      events.map(event => window.removeEventListener(event, handleResize));
    };
  }, [setWindowSize]);

  return windowSize;
}
