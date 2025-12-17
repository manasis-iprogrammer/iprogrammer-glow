import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import Challenges from "@/components/Challenges";
import Solutions from "@/components/Solutions";
import WhyiProgrammer from "@/components/WhyiProgrammer";
import TrackRecord from "@/components/TrackRecord";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroBanner />
        <Challenges />
        <Solutions />
        <WhyiProgrammer />
        <TrackRecord />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
