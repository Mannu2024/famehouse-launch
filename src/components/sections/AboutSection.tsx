import { CheckCircle, Users, Target, Award } from "lucide-react";

const highlights = [
  {
    icon: Users,
    title: "Vetted Creators",
    description: "Every creator in our network is thoroughly vetted for authentic engagement and brand alignment.",
  },
  {
    icon: Target,
    title: "End-to-End Management",
    description: "From creator sourcing to final reporting, we handle every aspect of your campaign.",
  },
  {
    icon: Award,
    title: "Niche Expertise",
    description: "Specialized knowledge in Fashion, Lifestyle, FMCG, and performance-driven outreach.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-radial from-gold/3 via-transparent to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              Experience Meets
              <br />
              <span className="text-gradient-gold">Innovation</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              FAMEHOUSE was built to solve the critical gaps in influencer marketing.
              Too many brands struggle with poor communication, weak creator vetting,
              and missed ROI opportunities.
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We focus on authentic, performance-driven campaigns that deliver
              measurable results. Our team combines deep industry experience with
              innovative strategies to maximize your brand's impact.
            </p>

            <div className="space-y-4">
              {["Poor communication solved", "Rigorous creator vetting", "ROI-focused strategies"].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-gold shrink-0" size={20} />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl bg-gradient-card border border-border hover:border-gold/30 transition-all duration-300 hover:shadow-[0_0_30px_hsl(43,74%,49%,0.1)]"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-gold/10 text-gold group-hover:bg-gold group-hover:text-primary-foreground transition-colors duration-300">
                    <highlight.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
