import { Hero } from "@/components/sections/hero";
import { SignatureDishes } from "@/components/sections/signature-dishes";
import { About } from "@/components/sections/about";
import { OurStory } from "@/components/sections/our-story";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { MenuExperience } from "@/components/sections/menu-experience";
import { FoodGallery } from "@/components/sections/food-gallery";
import { VideoExperience } from "@/components/sections/video-experience";
import { CoffeeCeremony } from "@/components/sections/coffee-ceremony";
import { Reviews } from "@/components/sections/reviews";
import { Reservation } from "@/components/sections/reservation";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <SignatureDishes />
      <About />
      <OurStory />
      <WhyChooseUs />
      <MenuExperience />
      <FoodGallery />
      <VideoExperience />
      <CoffeeCeremony />
      <Reviews />
      <Reservation />
      <Contact />
    </>
  );
}
