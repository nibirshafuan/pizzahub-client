import Navbar from "@/components/home/Navbar";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import WhatsNewSection from "@/components/home/WhatsNewSection";
import ExploreCategories from "@/components/home/ExploreCategories";
import PopularPizzas from "@/components/home/PopularPizzas";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CustomerReviews from "@/components/home/CustomerReviews";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <WhatsNewSection />
      <ExploreCategories />
      <PopularPizzas />
      <WhyChooseUs />
      <CustomerReviews />
    </main>
  );
}
