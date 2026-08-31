import { AboutGuide } from "@/components/home/AboutGuide";
import { Destinations } from "@/components/home/Destinations";
import { FeaturedTours } from "@/components/home/FeaturedTours";
import { FollowJourney } from "@/components/home/FollowJourney";
import { Hero } from "@/components/home/Hero";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Languages } from "@/components/home/Languages";
import { Testimonials } from "@/components/home/Testimonials";
import { WaysToExplore } from "@/components/home/WaysToExplore";
import { Welcome } from "@/components/home/Welcome";
import { WhyBeExplorers } from "@/components/home/WhyBeExplorers";
import { CTABanner } from "@/components/ui/CTABanner";
import { closingCta } from "@/content/home";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Welcome />
      <FeaturedTours />
      <WaysToExplore />
      <WhyBeExplorers />
      <AboutGuide />
      <Languages />
      <Destinations />
      <HowItWorks />
      <Testimonials />
      <CTABanner
        heading={closingCta.heading}
        body={closingCta.body}
        primary={closingCta.primary}
        secondary={closingCta.secondary}
      />
      <FollowJourney />
    </>
  );
}
