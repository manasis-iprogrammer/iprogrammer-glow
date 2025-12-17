import { AlertTriangle, Clock, Users } from "lucide-react";

const challenges = [
  {
    icon: Clock,
    title: "Talent Shortage & Hiring Delays",
    description:
      "Hiring senior engineers, architects, and specialists in the US is slow, expensive, and highly competitive, creating delivery bottlenecks.",
  },
  {
    icon: Users,
    title: "Stretched Teams, Missed Deadlines",
    description:
      "Multiple concurrent client projects stretch internal teams, risking missed deadlines, scope creep, and quality issues.",
  },
  {
    icon: AlertTriangle,
    title: "Unreliable Overflow Vendors",
    description:
      '"Overflow" vendors often lack ownership, domain understanding, and reliability, which puts client relationships at risk.',
  },
];

const Challenges = () => {
  return (
    <section id="challenges" className="py-20 lg:py-32 bg-secondary/30">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
            The Challenge
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            The Capacity and Delivery Problem
          </h2>
          <p className="text-lg text-muted-foreground">
            US IT services and consulting firms need to ship more, faster—without 
            getting blocked by talent gaps, delivery risk, and unpredictable scaling.
          </p>
        </div>

        {/* Challenge Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {challenges.map((challenge, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-xl bg-card-gradient border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <challenge.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{challenge.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {challenge.description}
              </p>
            </div>
          ))}
        </div>

        {/* Solution Teaser */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20">
          <p className="text-lg text-center max-w-3xl mx-auto">
            <span className="text-primary font-semibold">iProgrammer</span> has already 
            built the delivery engine that keeps complex product builds and transformation 
            programs moving—and growing.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Challenges;
