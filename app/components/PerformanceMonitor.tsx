import { useEffect } from 'react';

interface PerformanceMetrics {
  lcp?: number;
  fid?: number;
  cls?: number;
  fcp?: number;
  ttfb?: number;
}

const PerformanceMonitor = () => {
  useEffect(() => {
    // Web Vitals monitoring
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const metrics: PerformanceMetrics = {};

      entries.forEach((entry) => {
        if (entry.entryType === 'largest-contentful-paint') {
          metrics.lcp = entry.startTime;
        }
        if (entry.entryType === 'first-input') {
          metrics.fid = (entry as any).processingStart - entry.startTime;
        }
        if (entry.entryType === 'layout-shift' && !(entry as any).hadRecentInput) {
          metrics.cls = (metrics.cls || 0) + (entry as any).value;
        }
      });

      // Log metrics for debugging (remove in production)
      if (process.env.NODE_ENV === 'development') {
        console.table(metrics);
      }
    });

    // Observe LCP
    observer.observe({ entryTypes: ['largest-contentful-paint'] });
    
    // Observe FID
    observer.observe({ entryTypes: ['first-input'] });
    
    // Observe CLS
    observer.observe({ entryTypes: ['layout-shift'] });

    // Measure FCP and TTFB
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      const ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
      console.log('TTFB:', ttfb, 'ms');
    }

    // Cleanup
    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
};

export default PerformanceMonitor;
