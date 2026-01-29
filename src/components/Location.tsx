import { useState, useEffect, useRef } from 'react';
import { MapPin, Navigation, Car } from 'lucide-react';

const Location = () => {
  const [mapLoaded, setMapLoaded] = useState(false);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  // Lazy load map when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMapLoaded(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );

    if (mapContainerRef.current) {
      observer.observe(mapContainerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="location" className="py-20 md:py-32 bg-background">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map */}
          <div className="order-2 lg:order-1">
            <div 
              ref={mapContainerRef}
              className="aspect-video rounded-xl overflow-hidden border border-border/50 bg-secondary/30"
            >
              {mapLoaded ? (
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.7!2d74.3456!3d31.5234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLiberty%20Market%2C%20Gulberg%20III%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Monal Lahore Location"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <MapPin className="w-8 h-8 mx-auto mb-2 opacity-50" />
                    <p className="text-sm">Loading map...</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <p className="text-primary font-medium mb-3 tracking-wider uppercase text-sm">Location</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Find Us Above the City
            </h2>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-foreground mb-1">Address</h4>
                  <p className="text-foreground/80">
                    Top of Park & Ride Plaza (10th Floor)<br />
                    Liberty Roundabout, Gulberg<br />
                    Lahore 54000, Pakistan
                  </p>
                </div>
              </div>

              {/* Directions */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Navigation className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-foreground mb-1">Getting Here</h4>
                  <p className="text-foreground/80">
                    Located at Liberty Roundabout, one of Lahore's most iconic landmarks. 
                    Look for Park & Ride Plaza—we're at the very top.
                  </p>
                </div>
              </div>

              {/* Parking */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Car className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-foreground mb-1">Parking</h4>
                  <p className="text-foreground/80">
                    Multi-story parking plaza directly below the restaurant. 
                    Take the elevator to the 10th floor.
                  </p>
                </div>
              </div>
            </div>

            {/* Get Directions Button */}
            <div className="mt-8">
              <a
                href="https://maps.app.goo.gl/z7tVxpZkYGUb8yNx9"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-reserve inline-flex items-center gap-2"
              >
                <Navigation className="w-4 h-4" />
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
