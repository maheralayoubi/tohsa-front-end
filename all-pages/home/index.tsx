// sections
import Hero from "./sections/Hero";
import Blogs from "./sections/Blogs";
import Projects from "./sections/Projects";
import LatestUpdates from "./sections/LatestUpdates";
import Footer from "@/global-components/Footer";

const Index: React.FC = () => {

  return (
    <main>
      <Hero />
      <Blogs />
      <Projects />
      <LatestUpdates />
      <Footer />
    </main>
  );
};

export default Index
