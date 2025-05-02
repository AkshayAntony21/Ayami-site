import SEO from "@/components/Head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import HowItWorks from "../components/HowItWorks";
import WhyChooseUs from "../components/WhyChooseUs";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <SEO
        title="Ayami | Immersive VR for Real Estate"
        description="Step into the future of architecture. We create hyper-realistic VR walkthroughs and cinematic renders using Unreal Engine 5."
        image="/logo3.png" // Place this in your public/ folder
        url="https://www.ayamiprojects.com"
      />
      <main className="relative">
        <Navbar />
        <Hero />
        <Services />
        <HowItWorks />
        <WhyChooseUs />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

