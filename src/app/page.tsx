import { getListPage } from "@/lib/contentParser";
import CallToAction from "@/partials/CallToAction";
import FeatureSection from "@/partials/FeatureSection";
import HowItWorks from "@/partials/HowItWorks";
import SeoMeta from "@/partials/SeoMeta";

const Home = () => {
  const pricingData = getListPage("sections/pricing.md").frontmatter;

  return (
    <>
      <SeoMeta />
      {/* Home Page Banner Located in `Header.astro` file */}
      {/* <Clients /> */}
      <HowItWorks />
      {/* <FeaturesGrid /> */}
      <FeatureSection />
      {/* <FeaturesExplanation /> */}
      {/* <PricingSection pricingData={pricingData} /> */}
      {/* <Testimonial visible_testimonial={3} /> */}
      <CallToAction />
    </>
  );
};

export default Home;
