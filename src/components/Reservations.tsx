import { Phone, MessageCircle, Clock, Calendar } from 'lucide-react';

const Reservations = () => {
  const phoneNumbers = [
    { number: '042-35789823', display: '042-35789823' },
    { number: '042-35789824', display: '042-35789824' },
    { number: '042-35789825', display: '042-35789825' },
  ];

  const whatsappNumbers = [
    { number: '923334767104', display: '0333-4767104' },
    { number: '923248166625', display: '0324-8166625' },
  ];

  return (
    <section id="reservations" className="py-20 md:py-32 bg-card">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <p className="text-primary font-medium mb-3 tracking-wider uppercase text-sm">Reservations</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Reserve Your Rooftop Table
            </h2>
            <div className="section-divider mb-6" />
            <p className="text-muted-foreground">
              Call or WhatsApp to book your table. Request indoor hall or outdoor terrace seating.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Phone Reservations */}
            <div className="bg-secondary/50 rounded-xl p-8 border border-border/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-foreground">Call Us</h3>
              </div>
              <div className="space-y-3">
                {phoneNumbers.map((phone, index) => (
                  <a
                    key={index}
                    href={`tel:+92${phone.number.replace(/-/g, '')}`}
                    className="flex items-center justify-between p-3 bg-background rounded-lg hover:bg-muted transition-colors group"
                  >
                    <span className="font-mono text-foreground">{phone.display}</span>
                    <Phone className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* WhatsApp */}
            <div className="bg-[#25D366]/10 rounded-xl p-8 border border-[#25D366]/30">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#25D366]/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-[#25D366]" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-foreground">WhatsApp</h3>
              </div>
              <div className="space-y-3">
                {whatsappNumbers.map((wa, index) => (
                  <a
                    key={index}
                    href={`https://wa.me/${wa.number}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 bg-background rounded-lg hover:bg-[#25D366]/10 transition-colors group"
                  >
                    <span className="font-mono text-foreground">{wa.display}</span>
                    <MessageCircle className="w-4 h-4 text-muted-foreground group-hover:text-[#25D366] transition-colors" />
                  </a>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                Message us for quick reservations and inquiries
              </p>
            </div>
          </div>

          {/* Hours */}
          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            <div className="flex items-start gap-4 p-6 bg-secondary/50 rounded-xl border border-border/50">
              <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-heading font-semibold text-foreground mb-2">Regular Hours</h4>
                <p className="text-foreground/80">Monday - Saturday</p>
                <p className="text-primary font-medium">1:00 PM - 12:00 AM</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-primary/10 rounded-xl border border-primary/30">
              <Calendar className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-heading font-semibold text-foreground mb-2">Sunday Brunch</h4>
                <p className="text-foreground/80">Special Extended Hours</p>
                <p className="text-primary font-medium">10:00 AM - 12:00 AM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservations;
