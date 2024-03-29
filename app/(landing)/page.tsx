import { LandingNavbar } from "@/components/landing-navbar";
import { LandingHero } from "@/components/landing-hero";
import { LandingContent } from "@/components/landing-content";
import Footer from "@/components/footer";
//import { LandingPricing } from "@/components/landing-pricing";

const LandingPage = () => {
  return (
    <div className="h-full ">
      <LandingNavbar />
      <LandingHero />
      <LandingContent />
      <Footer />
    </div>
  );
};

export default LandingPage;
