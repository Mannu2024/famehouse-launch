import { Check, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const pricingPlans = [
  {
    name: "Barter Campaigns",
    price: "₹200",
    unit: "per influencer",
    description: "Perfect for product-based collaborations",
    features: [
      "Influencer sourcing",
      "Thorough vetting",
      "Product coordination",
      "Content guidelines",
      "Basic reporting",
    ],
  },
  {
    name: "Paid Campaigns",
    price: "₹400",
    unit: "per influencer",
    description: "Strategic paid partnerships for maximum ROI",
    features: [
      "Everything in Barter",
      "Strategy planning",
      "Creator negotiation",
      "Content approval workflow",
      "Detailed ROI reporting",
      "Dedicated account manager",
    ],
    featured: true,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 lg:py-32 bg-card relative overflow-hidden">
      {/* Decorative lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Transparent <span className="text-gradient-gold">Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Simple. Scalable. No Hidden Fees.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl border transition-all duration-300 ${
                plan.featured
                  ? "border-gold bg-gradient-to-b from-gold/10 to-transparent shadow-[0_0_40px_hsl(43,74%,49%,0.15)]"
                  : "border-border bg-background hover:border-gold/30"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-gold text-primary-foreground text-sm font-medium">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-6">
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-display font-bold text-gradient-gold">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground">/{plan.unit}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <Check className="text-gold shrink-0" size={18} />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.featured ? "gold" : "goldOutline"}
                className="w-full"
                asChild
              >
                <a href="#contact">Get Started</a>
              </Button>
            </div>
          ))}
        </div>

        {/* Launch Offer */}
        <div className="max-w-3xl mx-auto">
          <div className="relative p-8 md:p-10 rounded-2xl border border-gold/30 bg-gradient-to-r from-gold/10 via-gold/5 to-gold/10 overflow-hidden">
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gold-shimmer bg-[length:200%_100%] animate-shimmer opacity-20" />

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 md:gap-8">
              <div className="p-4 rounded-xl bg-gradient-gold text-primary-foreground shrink-0">
                <Zap size={32} />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-display font-bold text-gold mb-2">
                  THE LAUNCH OFFER
                </h3>
                <p className="text-foreground text-lg mb-2">
                  Zero agency fees for your first 5 influencers.
                </p>
                <p className="text-muted-foreground">
                  We're confident in our process. Test our expertise at zero cost
                  for your first placements.
                </p>
              </div>
              <Button variant="gold" size="lg" className="shrink-0 md:ml-auto" asChild>
                <a href="#contact">Claim Offer</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
