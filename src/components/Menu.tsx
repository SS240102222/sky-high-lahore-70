import { Flame, ChefHat, Sparkles } from 'lucide-react';
import butterChickenImage from '@/assets/dish-butter-chicken.jpg';
import karahiImage from '@/assets/dish-karahi.jpg';
import kebabsImage from '@/assets/dish-kebabs.jpg';
import buffetImage from '@/assets/buffet-spread.jpg';

const Menu = () => {
  const buffetOptions = [
    {
      name: 'Dinner Buffet',
      price: 'Rs 2,695 - 3,190',
      description: 'Available after 7 PM',
      highlight: true,
    },
    {
      name: 'Sunday Brunch',
      price: 'Special Pricing',
      description: 'Starts 10 AM',
      highlight: false,
    },
    {
      name: 'Hi-Tea / Lunch',
      price: 'Contact for rates',
      description: 'Day-time dining',
      highlight: false,
    },
  ];

  const signatureDishes = [
    {
      name: 'Butter Chicken',
      price: 'Rs 2,300+',
      image: butterChickenImage,
      description: 'Creamy tomato-based curry with tender chicken',
    },
    {
      name: 'Mutton Karahi',
      price: 'Rs 2,500+',
      image: karahiImage,
      description: 'Traditional wok-cooked mutton with fresh spices',
    },
    {
      name: 'Mixed Grill Platter',
      price: 'Rs 3,500+',
      image: kebabsImage,
      description: 'Assorted BBQ kebabs, tikka & seekh',
    },
  ];

  const menuCategories = [
    {
      title: 'Karahi & Curries',
      items: [
        { name: 'Chicken Karahi', price: 'Rs 2,200+' },
        { name: 'Tawa Chicken', price: 'Rs 2,100+' },
        { name: 'Grilled Fish', price: 'Rs 2,600+' },
      ],
    },
    {
      title: 'Rice & Pulao',
      items: [
        { name: 'Mutton Pulao (Special)', price: 'Rs 2,975' },
        { name: 'Kabuli Pulao', price: 'Rs 2,400+' },
        { name: 'Biryani', price: 'Rs 2,200+' },
      ],
    },
    {
      title: 'BBQ & Kebabs',
      items: [
        { name: 'Chicken Seekh Kebab', price: 'Rs 1,800+' },
        { name: 'Lamb Chops', price: 'Rs 2,800+' },
        { name: 'Chicken Tikka', price: 'Rs 1,600+' },
      ],
    },
  ];

  return (
    <section id="menu" className="py-20 md:py-32 bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-3 tracking-wider uppercase text-sm">Menu</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Buffet & À La Carte Excellence
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Savor authentic Pakistani cuisine with continental favorites. Fresh BBQ and cheese naan 
            served hot to your table.
          </p>
        </div>

        {/* Buffet Options */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {buffetOptions.map((option, index) => (
            <div
              key={index}
              className={`menu-card text-center ${
                option.highlight ? 'ring-2 ring-primary/50 bg-primary/5' : ''
              }`}
            >
              {option.highlight && (
                <span className="inline-block bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full mb-4">
                  Most Popular
                </span>
              )}
              <h3 className="font-heading font-semibold text-xl text-foreground mb-2">{option.name}</h3>
              <p className="price-tag text-2xl mb-2">{option.price}</p>
              <p className="text-sm text-muted-foreground">{option.description}</p>
              <p className="text-xs text-muted-foreground mt-2">+ taxes • Under 6: 50% off</p>
            </div>
          ))}
        </div>

        {/* Signature Dishes */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <ChefHat className="w-6 h-6 text-primary" />
            <h3 className="font-heading font-semibold text-2xl text-foreground">Signature Dishes</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {signatureDishes.map((dish, index) => (
              <div key={index} className="card-elevated overflow-hidden group">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h4 className="font-heading font-semibold text-lg text-foreground">{dish.name}</h4>
                    <span className="price-tag whitespace-nowrap">{dish.price}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{dish.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Menu Categories Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {menuCategories.map((category, index) => (
            <div key={index} className="menu-card">
              <h4 className="font-heading font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                <Flame className="w-4 h-4 text-primary" />
                {category.title}
              </h4>
              <ul className="space-y-3">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex justify-between items-center">
                    <span className="text-foreground/80">{item.name}</span>
                    <span className="price-tag text-sm">{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Buffet Includes */}
        <div className="bg-card rounded-xl border border-border/50 overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3">
              <img
                src={buffetImage}
                alt="Monal Lahore buffet spread"
                className="w-full h-64 md:h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="p-8 md:w-2/3">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-primary" />
                <h4 className="font-heading font-semibold text-xl text-foreground">Buffet Includes</h4>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 text-foreground/80">
                <div>
                  <p className="mb-2">• Multiple soup varieties</p>
                  <p className="mb-2">• Assorted appetizers & salads</p>
                  <p className="mb-2">• Pakistani: Karahi, BBQ, rice, breads</p>
                  <p className="mb-2">• Continental selections</p>
                </div>
                <div>
                  <p className="mb-2">• Chinese: Fried rice, sweet & sour</p>
                  <p className="mb-2">• Live BBQ station with fresh naan</p>
                  <p className="mb-2">• Traditional dessert bar</p>
                  <p className="mb-2">• Complimentary mint lemonade</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
