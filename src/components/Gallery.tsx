import { useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import terraceNightImage from '@/assets/terrace-night.jpg';
import indoorHallImage from '@/assets/indoor-hall.jpg';
import heroImage from '@/assets/hero-rooftop-sunset.jpg';
import buffetImage from '@/assets/buffet-spread.jpg';
import liveMusicImage from '@/assets/live-music.jpg';

const Gallery = () => {
  const [viewMode, setViewMode] = useState<'day' | 'night'>('night');

  const galleryImages = [
    {
      day: heroImage,
      night: terraceNightImage,
      title: 'Rooftop Terrace',
      description: 'Panoramic city views',
    },
    {
      day: indoorHallImage,
      night: indoorHallImage,
      title: 'Indoor Hall',
      description: 'Live kitchen experience',
    },
    {
      day: buffetImage,
      night: buffetImage,
      title: 'Buffet Stations',
      description: '3 separate setups',
    },
    {
      day: liveMusicImage,
      night: liveMusicImage,
      title: 'Live Entertainment',
      description: '7 nights a week',
    },
  ];

  return (
    <section id="gallery" className="py-20 md:py-32 bg-secondary/30">
      <div className="section-container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="text-primary font-medium mb-3 tracking-wider uppercase text-sm">Gallery</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Six Terraces, One<br className="hidden md:block" /> Unforgettable View
            </h2>
          </div>

          {/* Day/Night Toggle */}
          <div className="flex items-center gap-2 bg-card rounded-full p-1 border border-border/50 self-start md:self-auto">
            <button
              onClick={() => setViewMode('day')}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                viewMode === 'day'
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Sun className="w-4 h-4" />
              Day
            </button>
            <button
              onClick={() => setViewMode('night')}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                viewMode === 'night'
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Moon className="w-4 h-4" />
              Night
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="terrace-card group"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={viewMode === 'day' ? image.day : image.night}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background/95 to-transparent">
                <h3 className="font-heading font-semibold text-xl text-foreground">{image.title}</h3>
                <p className="text-sm text-muted-foreground">{image.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 grid sm:grid-cols-3 gap-6 text-center">
          <div className="p-6 bg-card rounded-xl border border-border/50">
            <p className="font-heading font-bold text-3xl text-primary">10th</p>
            <p className="text-muted-foreground">Floor Height</p>
          </div>
          <div className="p-6 bg-card rounded-xl border border-border/50">
            <p className="font-heading font-bold text-3xl text-primary">360°</p>
            <p className="text-muted-foreground">City Panorama</p>
          </div>
          <div className="p-6 bg-card rounded-xl border border-border/50">
            <p className="font-heading font-bold text-3xl text-primary">∞</p>
            <p className="text-muted-foreground">Memories</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
