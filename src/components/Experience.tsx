import { Music, Baby, Accessibility, Utensils, Car, Users } from 'lucide-react';
import liveMusicImage from '@/assets/live-music.jpg';

const Experience = () => {
  const features = [
    {
      icon: Music,
      title: 'Live Music',
      description: 'Local Pakistani songs performed live, 7 nights a week. Music that speaks to the soul.',
    },
    {
      icon: Baby,
      title: "Kids' Play Area",
      description: 'Ball pit and dedicated play zone. Family dining without the worry.',
    },
    {
      icon: Accessibility,
      title: 'Wheelchair Accessible',
      description: 'Dedicated elevators and accessible seating throughout all areas.',
    },
    {
      icon: Utensils,
      title: 'Tableside Service',
      description: 'Fresh BBQ and hot cheese naan delivered straight from the tandoor to your table.',
    },
    {
      icon: Car,
      title: 'Easy Parking',
      description: 'Multi-story parking plaza right below the restaurant. No parking hassles.',
    },
    {
      icon: Users,
      title: 'Private Events',
      description: 'Corporate dinners, birthdays, anniversaries. Let us make it memorable.',
    },
  ];

  return (
    <section id="experience" className="py-20 md:py-32 bg-secondary/30">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <p className="text-primary font-medium mb-3 tracking-wider uppercase text-sm">The Experience</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              More Than Just<br />a Meal
            </h2>
            <p className="text-lg text-foreground/80 mb-10 leading-relaxed">
              Every visit to Monal Lahore is a complete sensory journey. From the elevator ride to 
              the 10th floor, the anticipation builds—and the view never disappoints.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-foreground mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[3/4] rounded-xl overflow-hidden">
              <img
                src={liveMusicImage}
                alt="Live music performance at Monal Lahore"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-card rounded-xl p-6 shadow-card border border-border/50 hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center animate-pulse-glow">
                  <Music className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-heading font-bold text-foreground">Live Tonight</p>
                  <p className="text-sm text-muted-foreground">8 PM onwards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
