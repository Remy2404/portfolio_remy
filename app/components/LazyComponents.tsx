import React, { lazy, Suspense, memo } from 'react';
import IntersectionObserver from './IntersectionObserver';

// Lazy load heavy components
const LazyExperienceTimeline = lazy(() => import('./ExperienceTimeline'));
const LazySkills = lazy(() => import('./Skills'));

// Loading fallbacks
const TimelineLoadingFallback = memo(() => (
  <div className="py-12 px-2 sm:py-16 sm:px-4 md:py-20 md:px-8 max-w-6xl mx-auto">
    <div className="text-center mb-12 sm:mb-16">
      <div className="h-12 w-64 bg-white/10 rounded-lg mx-auto mb-4 animate-pulse" />
      <div className="h-6 w-96 bg-white/5 rounded-lg mx-auto animate-pulse" />
    </div>
    <div className="space-y-8">
      {[1, 2, 3].map((i) => (
        <div key={i} className="glass-card p-6 rounded-2xl animate-pulse">
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-white/10 rounded-full flex-shrink-0" />
            <div className="flex-1 space-y-3">
              <div className="h-6 w-48 bg-white/10 rounded" />
              <div className="h-4 w-32 bg-white/5 rounded" />
              <div className="space-y-2">
                <div className="h-3 w-full bg-white/5 rounded" />
                <div className="h-3 w-3/4 bg-white/5 rounded" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
));

const SkillsLoadingFallback = memo(() => (
  <div className="py-12 px-2 sm:py-16 sm:px-4 md:py-20 md:px-8 max-w-6xl mx-auto">
    <div className="text-center mb-12 sm:mb-16">
      <div className="h-12 w-48 bg-white/10 rounded-lg mx-auto mb-4 animate-pulse" />
      <div className="h-6 w-80 bg-white/5 rounded-lg mx-auto animate-pulse" />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div key={i} className="glass-card p-6 rounded-2xl animate-pulse">
          <div className="h-6 w-32 bg-white/10 rounded mb-4" />
          <div className="space-y-3">
            <div className="h-4 w-full bg-white/5 rounded" />
            <div className="h-3 w-16 bg-white/5 rounded" />
          </div>
        </div>
      ))}
    </div>
  </div>
));

TimelineLoadingFallback.displayName = 'TimelineLoadingFallback';
SkillsLoadingFallback.displayName = 'SkillsLoadingFallback';

export const LazyTimelineSection = memo(() => (
  <IntersectionObserver threshold={0.1} rootMargin="150px">
    <Suspense fallback={<TimelineLoadingFallback />}>
      <LazyExperienceTimeline />
    </Suspense>
  </IntersectionObserver>
));

export const LazySkillsSection = memo(() => (
  <IntersectionObserver threshold={0.1} rootMargin="150px">
    <Suspense fallback={<SkillsLoadingFallback />}>
      <LazySkills />
    </Suspense>
  </IntersectionObserver>
));

LazyTimelineSection.displayName = 'LazyTimelineSection';
LazySkillsSection.displayName = 'LazySkillsSection';
