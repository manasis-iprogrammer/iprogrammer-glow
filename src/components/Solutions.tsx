import { Brain, Users2, Building2, CheckCircle2 } from "lucide-react";

const solutions = [
  {
    icon: Brain,
    number: "01",
    title: "AI-powered Product Engineering",
    description:
      "End-to-end, AI-driven product engineering, from discovery to launch and continuous iteration.",
    features: [
      "Accelerate new product builds, platform rewrites, and modernization with embedded AI automation",
      "Infuse intelligence into architecture, UX, backend, frontend, QA, DevOps through AI-assisted design",
      "Harness AI for predictive analytics, personalization, and automated workflows",
      "300+ global products engineered serving millions of active users",
    ],
  },
  {
    icon: Users2,
    number: "02",
    title: "Talent+ Engineering Teams",
    description:
      'Go beyond "staff augmentation" with vetted, high-calibre talent that integrates like an extension of your core team.',
    features: [
      "Developers, architects, data engineers, DevOps, QA aligned to your tech stack",
      "Teams spun up in days—not months—for rapid response to new deals",
      "Specialists matched to your tools and time zones",
      "Seamless integration with your existing workflows",
    ],
  },
  {
    icon: Building2,
    number: "03",
    title: "Enterprise-scale Capacity",
    description:
      "Purpose-built for IT services and consulting firms managing multiple concurrent client projects.",
    features: [
      "Flexible pods and squads that scale up or down based on pipeline",
      "Multi-year, multi-project relationships across verticals",
      "Proven track record across 15+ countries with consistent quality",
      "Support for telecom, manufacturing, healthcare, and more",
    ],
  },
];

const Solutions = () => {
  return (
    <section id="solutions" className="py-20 lg:py-32">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
            Our Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            How iProgrammer Powers{" "}
            <span className="text-gradient">Delivery Velocity</span>
          </h2>
        </div>

        {/* Solution Cards */}
        <div className="space-y-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group relative p-8 lg:p-10 rounded-2xl bg-card-gradient border border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Left Content */}
                <div className="lg:w-1/3">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <solution.icon className="w-8 h-8 text-primary" />
                    </div>
                    <span className="text-5xl font-bold text-primary/20">
                      {solution.number}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {solution.description}
                  </p>
                </div>

                {/* Right Content - Features */}
                <div className="lg:w-2/3 lg:pl-8 lg:border-l border-border">
                  <div className="grid sm:grid-cols-2 gap-4">
                    {solution.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-start gap-3 p-4 rounded-lg bg-secondary/30"
                      >
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-foreground/90">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
