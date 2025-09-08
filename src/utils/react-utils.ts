import { useEffect, useLayoutEffect, useState } from 'react';

const events = ['resize', 'load', 'orientationchange'];

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1920,
    height: typeof window !== 'undefined' ? window.innerHeight : 1080,
  });

  useLayoutEffect(() => {
    let lastWidth = window.innerWidth || 1920;
    let lastHeight = window.innerHeight || 1080;

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

export function useAppUrl() {
  const [url, setUrl] = useState('https://app.beefy.com/');

  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hostname === 'beefy.finance') {
      setUrl('https://app.beefy.finance/');
    }
  }, [setUrl]);

  return url;
}
