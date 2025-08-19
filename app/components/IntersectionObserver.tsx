import React, { useEffect, useRef, useState, memo } from 'react';

interface IntersectionObserverProps {
  children: React.ReactNode;
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  fallbackDelay?: number;
}

const IntersectionObserver: React.FC<IntersectionObserverProps> = memo(({
  children,
  threshold = 0.1,
  rootMargin = '100px',
  triggerOnce = true,
  fallbackDelay = 3000,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setShouldRender(true);
          if (triggerOnce) {
            observer.disconnect();
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    const currentTarget = targetRef.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }

    // Fallback in case IntersectionObserver fails
    const fallbackTimer = setTimeout(() => {
      setShouldRender(true);
    }, fallbackDelay);

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
      observer.disconnect();
      clearTimeout(fallbackTimer);
    };
  }, [threshold, rootMargin, triggerOnce, fallbackDelay]);

  return (
    <div ref={targetRef}>
      {shouldRender ? children : <div className="h-96" />}
    </div>
  );
});

IntersectionObserver.displayName = 'IntersectionObserver';

export default IntersectionObserver;
