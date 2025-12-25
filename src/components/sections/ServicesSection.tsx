import { Gift, TrendingUp, Users, FileText, HandshakeIcon, BarChart3 } from "lucide-react";

const services = [
  {
    type: "Barter Campaigns",
    description: "Product-based collaborations with authentic creators",
    features: [
      { icon: Users, text: "Influencer sourcing & discovery" },
      { icon: FileText, text: "Thorough vetting process" },
      { icon: Gift, text: "Product coordination & logistics" },
    ],
    accent: "from-gold/20 to-gold/5",
  },
  {
    type: "Paid Campaigns",
    description: "Strategic paid partnerships for maximum ROI",
    features: [
      { icon: TrendingUp, text: "Strategy & campaign planning" },
      { icon: HandshakeIcon, text: "Creator negotiation" },
      { icon: BarChart3, text: "ROI-focused reporting" },
    ],
    accent: "from-gold/30 to-gold/10",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-radial from-gold/3 via-transparent to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Our <span className="text-gradient-gold">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive influencer marketing solutions tailored to your brand's needs
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 lg:p-10 rounded-2xl border border-border bg-card hover:border-gold/40 transition-all duration-500 overflow-hidden"
            >
              {/* Gradient overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                {/* Service type badge */}
                <div className="inline-flex items-center px-4 py-2 rounded-full border border-gold/30 bg-gold/10 mb-6">
                  <span className="text-gold font-medium">{service.type}</span>
                </div>

                {/* Description */}
                <p className="text-lg text-muted-foreground mb-8">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-4">
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center gap-4 p-4 rounded-lg bg-background/50 border border-border/50"
                    >
                      <div className="p-2 rounded-lg bg-gold/10 text-gold">
                        <feature.icon size={20} />
                      </div>
                      <span className="text-foreground font-medium">
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
