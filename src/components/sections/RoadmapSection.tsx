import { Search, Users, Rocket, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discovery",
    description: "Understand your goals, target demographic, and campaign objectives through in-depth consultation.",
    step: "01",
  },
  {
    icon: Users,
    title: "Selection",
    description: "Curated creator list that perfectly fits your brand values, audience, and campaign goals.",
    step: "02",
  },
  {
    icon: Rocket,
    title: "Execution",
    description: "Complete campaign management including content coordination, posting schedules, and quality control.",
    step: "03",
  },
  {
    icon: BarChart3,
    title: "Results",
    description: "Detailed performance metrics and reach report with actionable insights for future campaigns.",
    step: "04",
  },
];

const RoadmapSection = () => {
  return (
    <section id="roadmap" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            The <span className="text-gradient-gold">Roadmap</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Our proven 4-step process delivers consistent results for every campaign
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold via-gold/50 to-border md:-translate-x-1/2" />

            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative flex items-start gap-8 mb-12 last:mb-0 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div
                  className={`flex-1 ml-20 md:ml-0 ${
                    index % 2 === 0 ? "md:text-right md:pr-16" : "md:text-left md:pl-16"
                  }`}
                >
                  <div
                    className={`inline-block p-6 rounded-xl bg-card border border-border hover:border-gold/30 transition-all duration-300 hover:shadow-[0_0_30px_hsl(43,74%,49%,0.1)] ${
                      index % 2 === 0 ? "md:ml-auto" : ""
                    }`}
                  >
                    <div className={`flex items-center gap-4 mb-4 ${
                      index % 2 === 0 ? "md:flex-row-reverse" : ""
                    }`}>
                      <div className="p-3 rounded-lg bg-gold/10 text-gold">
                        <step.icon size={24} />
                      </div>
                      <h3 className="text-xl font-display font-semibold text-foreground">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Step indicator */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-16 h-16 rounded-full bg-background border-2 border-gold flex items-center justify-center">
                  <span className="text-xl font-display font-bold text-gold">
                    {step.step}
                  </span>
                </div>

                {/* Empty space for the other side */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
