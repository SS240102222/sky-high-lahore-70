import { Phone, MessageCircle } from 'lucide-react';

const StickyReserve = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {/* WhatsApp */}
      <a
        href="https://wa.me/923334767104"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </a>

      {/* Phone */}
      <a
        href="tel:+924235789823"
        className="w-14 h-14 bg-accent rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform animate-pulse-glow"
        aria-label="Call to reserve"
      >
        <Phone className="w-6 h-6 text-accent-foreground" />
      </a>
    </div>
  );
};

export default StickyReserve;
