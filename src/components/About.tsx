import { Award, Clock, Users } from 'lucide-react';
import indoorHallImage from '@/assets/indoor-hall.jpg';

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-3 tracking-wider uppercase text-sm">Our Story</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            A Decade Above Lahore
          </h2>
          <div className="section-divider" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-xl overflow-hidden">
              <img
                src={indoorHallImage}
                alt="Monal Lahore elegant indoor dining hall with live kitchen"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground rounded-xl p-6 shadow-gold hidden md:block">
              <p className="font-heading font-bold text-3xl">10+</p>
              <p className="text-sm opacity-90">Years of Excellence</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
              Since 2015, Monal Lahore has been Gulberg's premier rooftop dining destination. 
              Perched on the 10th floor of Park & Ride Plaza, we offer an unparalleled fusion of 
              breathtaking city panoramas and authentic Pakistani cuisine.
            </p>
            <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
              As part of the prestigious <span className="text-primary font-medium">Monal Group</span>—renowned 
              for our iconic Margalla Hills location in Islamabad—we bring the same commitment to 
              quality, ambiance, and hospitality that has made our name synonymous with exceptional dining.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center p-4 bg-card rounded-lg border border-border/50">
                <Users className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="font-heading font-bold text-2xl text-foreground">6</p>
                <p className="text-xs text-muted-foreground">Outdoor Terraces</p>
              </div>
              <div className="text-center p-4 bg-card rounded-lg border border-border/50">
                <Clock className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="font-heading font-bold text-2xl text-foreground">7</p>
                <p className="text-xs text-muted-foreground">Days Live Music</p>
              </div>
              <div className="text-center p-4 bg-card rounded-lg border border-border/50">
                <Award className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="font-heading font-bold text-2xl text-foreground">Top 10%</p>
                <p className="text-xs text-muted-foreground">TripAdvisor</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
