import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Globe } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/20 via-background to-background">
      <div className="section-container">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-card-gradient opacity-90" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(355_72%_51%/0.15),transparent_50%)]" />
          
          {/* Content */}
          <div className="relative p-10 lg:p-16 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Scale Without{" "}
              <span className="text-gradient">Hiring Risk?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              iProgrammer is your scalable tech talent and product engineering 
              partner when you need to expand fast without compromising on quality.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button variant="hero" size="xl" asChild>
                <a href="mailto:sales@iprogrammer.co">
                  <Mail className="w-5 h-5" />
                  Book a Conversation
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <a href="https://www.iprogrammer.com" target="_blank" rel="noopener noreferrer">
                  <Globe className="w-5 h-5" />
                  Visit Our Website
                </a>
              </Button>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-muted-foreground">
              <a 
                href="mailto:sales@iprogrammer.co" 
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                sales@iprogrammer.co
              </a>
              <span className="hidden sm:block">•</span>
              <a 
                href="https://www.iprogrammer.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Globe className="w-4 h-4" />
                www.iprogrammer.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
