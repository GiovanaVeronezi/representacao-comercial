import Header from "../components/Header";
import Footer from "../components/Footer";

import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import DifferentialsSection from "../components/DifferentialsSection";
import GallerySection from "../components/GallerySection";
import CallToAction from "../components/CallToAction";

function Home() {
  return (
    <>
      <Header />

      <main>

        <Hero />

        <AboutSection />

        <DifferentialsSection />

        <GallerySection />

        <CallToAction />

      </main>

      <Footer />
    </>
  );
}

export default Home;