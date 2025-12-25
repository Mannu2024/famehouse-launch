import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-gold/5 via-transparent to-transparent" />
      
      {/* Animated glow orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px] animate-float" />

      <div className="container mx-auto px-4 lg:px-8 pt-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Tagline */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 mb-8 animate-fade-up">
            <span className="text-gold text-sm font-medium">
              Your Fame. Our Strategy.
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold leading-tight mb-6 animate-fade-up animation-delay-100">
            The Future of
            <br />
            <span className="text-gradient-gold">Influencer Partnerships</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up animation-delay-200">
            Bridging the gap between brand vision and creator reality.
            We deliver authentic, performance-driven influencer marketing campaigns.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up animation-delay-300">
            <Button variant="hero" asChild>
              <a href="#contact">
                Start a Campaign
                <ArrowRight size={18} />
              </a>
            </Button>
            <Button variant="heroOutline" asChild>
              <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer">
                <MessageCircle size={18} />
                Talk to Us
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 pt-12 border-t border-border/50 animate-fade-up animation-delay-400">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-gradient-gold mb-2">
                500+
              </div>
              <div className="text-sm text-muted-foreground">
                Campaigns Delivered
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-gradient-gold mb-2">
                50M+
              </div>
              <div className="text-sm text-muted-foreground">
                Audience Reached
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-gradient-gold mb-2">
                98%
              </div>
              <div className="text-sm text-muted-foreground">
                Client Satisfaction
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-gold rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
