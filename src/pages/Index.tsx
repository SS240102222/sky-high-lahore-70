import { lazy, Suspense } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';

// Lazy load below-the-fold components for faster initial load
const About = lazy(() => import('@/components/About'));
const Gallery = lazy(() => import('@/components/Gallery'));
const Menu = lazy(() => import('@/components/Menu'));
const Experience = lazy(() => import('@/components/Experience'));
const Reviews = lazy(() => import('@/components/Reviews'));
const Reservations = lazy(() => import('@/components/Reservations'));
const Location = lazy(() => import('@/components/Location'));
const Footer = lazy(() => import('@/components/Footer'));
const StickyReserve = lazy(() => import('@/components/StickyReserve'));

// Minimal loading fallback to prevent layout shift
const SectionFallback = () => <div className="min-h-[50vh]" />;

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <About />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Gallery />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Menu />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Experience />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Reviews />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Reservations />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Location />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      <Suspense fallback={null}>
        <StickyReserve />
      </Suspense>
    </div>
  );
};

export default Index;
