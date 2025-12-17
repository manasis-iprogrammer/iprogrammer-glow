import { Globe, Users, Handshake, Award } from "lucide-react";

const stats = [
  {
    icon: Globe,
    value: "300+",
    label: "Global Products",
    description: "Engineered and delivered for technology-driven firms",
  },
  {
    icon: Users,
    value: "4M+",
    label: "Daily Active Users",
    description: "Across the largest implementations supported",
  },
  {
    icon: Handshake,
    value: "15+",
    label: "Countries Served",
    description: "With consistent quality and delivery standards",
  },
  {
    icon: Award,
    value: "18+",
    label: "Years of Excellence",
    description: "Multi-year consulting partnerships built on trust",
  },
];

const TrackRecord = () => {
  return (
    <section id="track-record" className="py-20 lg:py-32">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
              Track Record
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              A Track Record That{" "}
              <span className="text-gradient">Speaks</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              For IT services and consulting clients, iProgrammer acts as the 
              "strategic scale" behind their most important projects.
            </p>
            <div className="p-6 rounded-xl bg-secondary/50 border border-border">
              <p className="text-foreground/90 italic">
                "This is not overflow support; it is a long-term, strategic 
                capacity layer that helps IT firms protect relationships, grow 
                accounts, and win bigger deals."
              </p>
            </div>
          </div>

          {/* Right Content - Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-card-gradient border border-border hover:border-primary/30 transition-colors"
              >
                <stat.icon className="w-8 h-8 text-primary mb-4" />
                <div className="text-3xl lg:text-4xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="font-semibold mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrackRecord;
