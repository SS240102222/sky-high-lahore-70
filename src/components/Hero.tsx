import { ChevronDown, Music, MapPin } from 'lucide-react';
import heroImage from '@/assets/hero-rooftop-sunset.jpg';
const Hero = () => {
  return <section className="relative min-h-screen flex items-end pb-20 md:pb-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Monal Lahore rooftop terrace at sunset with panoramic city views" className="w-full h-full object-cover" />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-hero-gradient" />
        {/* Vignette */}
        <div className="absolute inset-0 vignette" />
      </div>

      {/* Content */}
      <div className="relative section-container">
        <div className="max-w-3xl py-0">
          {/* Main Heading */}
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight text-shadow mb-4 animate-fade-in" style={{
          animationDelay: '0.2s',
          opacity: 0
        }}>
            Sky High Dining<br />
            <span className="text-primary">with Panoramic Views</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-foreground/80 mb-6 max-w-xl animate-fade-in" style={{
          animationDelay: '0.4s',
          opacity: 0
        }}>
            Experience fine dining above Lahore's skyline since 2015. 10th floor rooftop, 
            six outdoor terraces, and cuisine that matches the view.
          </p>

          {/* Location */}
          <div className="flex items-center gap-2 text-foreground/70 mb-6 animate-fade-in" style={{
          animationDelay: '0.5s',
          opacity: 0
        }}>
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm">Park & Ride Plaza, Liberty Roundabout, Gulberg</span>
          </div>

          {/* Live Music Badge - moved below location */}
          <div className="badge-live mb-8 animate-fade-in" style={{
          animationDelay: '0.6s',
          opacity: 0
        }}>
            <Music className="w-4 h-4" />
            <span>Live Music 7 Days a Week</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-in" style={{
          animationDelay: '0.7s',
          opacity: 0
        }}>
            <a href="#reservations" className="btn-hero text-center">
              Reserve Your Rooftop Table
            </a>
            <a href="#menu" className="btn-outline-gold text-center">
              View Menu
            </a>
          </div>

          {/* Scroll Indicator - moved below buttons */}
          <div className="animate-float hidden md:block">
            <a href="#about" className="text-foreground/50 hover:text-primary transition-colors inline-flex items-center gap-2">
              <ChevronDown className="w-6 h-6" />
              <span className="text-sm">Scroll to explore</span>
            </a>
          </div>
        </div>
      </div>

      {/* Hours Badge - Desktop */}
      <div className="absolute bottom-8 right-8 hidden lg:block">
        <div className="bg-card/90 backdrop-blur-sm rounded-lg p-4 border border-border/50">
          <p className="text-xs text-muted-foreground mb-1">Today's Hours</p>
          <p className="font-heading font-semibold text-foreground">1:00 PM - 12:00 AM</p>
          <p className="text-xs text-primary mt-1">Sunday Brunch from 10 AM</p>
        </div>
      </div>
    </section>;
};
export default Hero;