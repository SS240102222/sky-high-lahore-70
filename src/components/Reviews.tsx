import { Star, Quote } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      text: "One of the best meals I've had in Lahore. The butter chicken was so creamy and delicious. Timing was very good, service excellent.",
      rating: 5,
      source: 'TripAdvisor',
    },
    {
      text: "Monal has such a charming and inviting atmosphere. The mixed grill was outstanding—juicy, flavorful, and cooked to perfection. The panoramic views were stunning.",
      rating: 5,
      source: 'TripAdvisor',
    },
    {
      text: "Great sitting area and atmosphere is excellent. The ushers were very professional. They serve fresh BBQ and cheese naan right off the oven at your table.",
      rating: 5,
      source: 'TripAdvisor',
    },
    {
      text: "Perfect blend of country and contemporary architecture. The outdoor seating offers a great view of the city of Lahore. Live music playing with local songs is music to the ears.",
      rating: 5,
      source: 'Wanderlog',
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-3 tracking-wider uppercase text-sm">Reviews</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Our Guests Say
          </h2>
          <div className="section-divider mb-6" />
          <div className="flex items-center justify-center gap-2">
            <span className="text-primary font-semibold">Travelers' Choice</span>
            <span className="text-muted-foreground">• Top 10% on TripAdvisor</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="review-card">
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              <p className="text-foreground/90 mb-4 leading-relaxed">"{review.text}"</p>
              <div className="flex items-center justify-between">
                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <span className="text-xs text-muted-foreground">{review.source}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
