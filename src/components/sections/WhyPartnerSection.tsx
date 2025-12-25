import { Shield, Workflow, Sparkles } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Vetted Creators",
    description:
      "Carefully vetted creators with real engagement metrics. No fake followers, no inflated numbers—just authentic influence.",
  },
  {
    icon: Workflow,
    title: "End-to-End Management",
    description:
      "From sourcing and vetting to execution and reporting, we handle everything so you can focus on your business.",
  },
  {
    icon: Sparkles,
    title: "Niche Expertise",
    description:
      "Specialized in Fashion & Lifestyle, FMCG, and performance-driven influencer outreach that delivers results.",
  },
];

const WhyPartnerSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-card relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Why Partner With
            <span className="text-gradient-gold"> Us</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We bring expertise, transparency, and results-driven strategies
            to every partnership.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-background border border-border hover:border-gold/40 transition-all duration-500"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-gold flex items-center justify-center mb-6 group-hover:animate-glow-pulse">
                  <reason.icon size={28} className="text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-display font-semibold text-foreground mb-4">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>

              {/* Number badge */}
              <div className="absolute top-6 right-6 text-6xl font-display font-bold text-border/50 group-hover:text-gold/10 transition-colors duration-300">
                0{index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyPartnerSection;
