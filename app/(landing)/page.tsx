import { LandingNavbar } from "@/components/landing-navbar";
import { LandingHero } from "@/components/landing-hero";
import { LandingContent } from "@/components/landing-content";
//import { LandingPricing } from "@/components/landing-pricing";

const LandingPage = () => {
  return (
    <div className="h-full ">
      <LandingNavbar />
      <LandingHero />
      <LandingContent />
      {/* <LandingPricing /> */}
    </div>
  );
};

export default LandingPage;
