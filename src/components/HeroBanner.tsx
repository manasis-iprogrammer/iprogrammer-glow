import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroBanner = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Technology Infrastructure"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Content */}
      <div className="section-container relative z-10 py-20 lg:py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/80 border border-border mb-8 animate-fade-up">
            <span className="text-sm text-muted-foreground">
              18+ Years of Excellence in Digital Transformation
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-up delay-100">
            Scale IT Delivery without{" "}
            <span className="text-gradient">Talent Gaps</span> or{" "}
            <span className="text-gradient">Hiring Risk</span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl animate-fade-up delay-200">
            Delivering AI-powered Product Engineering, Talent+ engineering teams, 
            and Enterprise-scale capacity for global IT firms. Build robust, 
            intelligent solutions that accelerate your growth.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-300">
            <Button variant="hero" size="xl" asChild>
              <a href="mailto:sales@iprogrammer.co">
                Start Your Transformation
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <a href="#solutions">
                Explore Solutions
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-16 pt-10 border-t border-border/50 animate-fade-up delay-400">
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-gradient">300+</div>
              <div className="text-sm text-muted-foreground mt-1">Global Products Delivered</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-gradient">4M+</div>
              <div className="text-sm text-muted-foreground mt-1">Daily Active Users</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-gradient">15+</div>
              <div className="text-sm text-muted-foreground mt-1">Countries Served</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
