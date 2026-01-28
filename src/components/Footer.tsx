import { Phone, MessageCircle, Instagram, Facebook, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border/50">
      <div className="section-container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <span className="font-heading font-bold text-primary-foreground text-xl">M</span>
              </div>
              <div>
                <h3 className="font-heading font-bold text-2xl text-foreground">Monal Lahore</h3>
                <p className="text-sm text-primary">Part of Monal Group</p>
              </div>
            </div>
            <p className="text-foreground/70 mb-6 max-w-md">
              Sky high dining with panoramic views. Experience fine dining above Lahore's skyline 
              since 2015. 10th floor rooftop, six outdoor terraces, and live music 7 days a week.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/monallahore"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/monallahore"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-foreground/70 hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#menu" className="text-foreground/70 hover:text-primary transition-colors">
                  Menu & Prices
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-foreground/70 hover:text-primary transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#reservations" className="text-foreground/70 hover:text-primary transition-colors">
                  Reservations
                </a>
              </li>
              <li>
                <a href="#location" className="text-foreground/70 hover:text-primary transition-colors">
                  Location
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+924235789823"
                  className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  042-35789823
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/923334767104"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Us
                </a>
              </li>
              <li className="flex items-start gap-2 text-foreground/70">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>
                  Park & Ride Plaza, 10th Floor<br />
                  Liberty Roundabout, Gulberg<br />
                  Lahore 54000
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/50">
        <div className="section-container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© {currentYear} Monal Lahore. All rights reserved.</p>
            <p>Part of the Monal Group • Established 2015</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
