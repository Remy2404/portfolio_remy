import React, { lazy, Suspense, memo } from 'react';

// Lazy load the Galaxy component
const Galaxy = lazy(() => import('../../react_bit/Galaxy/Galaxy'));

// Simple fallback loading component
const GalaxyFallback = memo(() => (
  <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-blue-900/20 animate-pulse">
    <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent" />
  </div>
));

GalaxyFallback.displayName = 'GalaxyFallback';

interface LazyGalaxyProps {
  [key: string]: any;
}

// Reduced performance Galaxy props for better initial load
const optimizedGalaxyProps = {
  density: 0.5, // Reduce star density
  glowIntensity: 0.2, // Reduce glow
  speed: 0.5, // Slower animation
  rotationSpeed: 0.05, // Slower rotation
  twinkleIntensity: 0.1, // Less twinkling
  mouseInteraction: false, // Disable initially for performance
  transparent: true,
  disableAnimation: false,
};

const LazyGalaxy: React.FC<LazyGalaxyProps> = memo((props) => {
  return (
    <Suspense fallback={<GalaxyFallback />}>
      <Galaxy {...optimizedGalaxyProps} {...props} />
    </Suspense>
  );
});

LazyGalaxy.displayName = 'LazyGalaxy';

export default LazyGalaxy;
