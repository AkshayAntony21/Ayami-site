import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import HowItWorks from '../components/HowItWorks';
import WhyChooseUs from '../components/WhyChooseUs';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
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
