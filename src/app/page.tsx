import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Story from "@/components/Story";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Visit from "@/components/Visit";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <Story />
      <Services />
      <Gallery />
      <Testimonials />
      <Pricing />
      <Visit />
      <Footer />
    </main>
  );
}
