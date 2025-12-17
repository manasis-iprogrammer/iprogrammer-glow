import { Zap, Target, TrendingUp, Shield } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Speed",
    description:
      "Deploy talent and ship products faster, without waiting on long hiring cycles or niche skill searches.",
  },
  {
    icon: Target,
    title: "Depth",
    description:
      "Access world-class engineers, not just generic resources, for critical client programs and complex architectures.",
  },
  {
    icon: TrendingUp,
    title: "Scalability",
    description:
      "Grow delivery capacity in line with pipeline, without adding permanent fixed cost or bench risk.",
  },
  {
    icon: Shield,
    title: "End-to-end Ownership",
    description:
      "From architecture and design to build, launch, and support, with shared accountability for outcomes.",
  },
];

const WhyiProgrammer = () => {
  return (
    <section id="why" className="py-20 lg:py-32 bg-secondary/30">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
            Why Partner With Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            What IT Firms <span className="text-gradient">Really Need</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            US IT services and consulting leaders are looking for more than 
            low-cost capacity—they need a strategic engineering partner.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 text-center"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <benefit.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground">
            <span className="text-primary font-semibold">iProgrammer</span> is 
            already delivering all four consistently for leading IT services and 
            consulting companies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyiProgrammer;
