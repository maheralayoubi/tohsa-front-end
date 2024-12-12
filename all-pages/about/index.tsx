import HeroSection from "@/global-components/HeroSection";
import IndexWarper from "./IndexWarper";
import Footer from "@/global-components/Footer";

function Index() {
  return (
    <main>
      <HeroSection title="ABOUT TOHSA" imageSource="/images/about-hero.png" />
      <IndexWarper />
      <Footer />
    </main>
  );
}

export default Index;
