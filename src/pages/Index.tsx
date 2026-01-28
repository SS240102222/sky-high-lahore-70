import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Gallery from '@/components/Gallery';
import Menu from '@/components/Menu';
import Experience from '@/components/Experience';
import Reviews from '@/components/Reviews';
import Reservations from '@/components/Reservations';
import Location from '@/components/Location';
import Footer from '@/components/Footer';
import StickyReserve from '@/components/StickyReserve';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Menu />
        <Experience />
        <Reviews />
        <Reservations />
        <Location />
      </main>
      <Footer />
      <StickyReserve />
    </div>
  );
};

export default Index;
