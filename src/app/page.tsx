import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import BentoGrid from "@/components/BentoGrid"
import Advantages from "@/components/Advantages";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Pricing from "@/components/Pricing";
import Testimonial from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <BentoGrid/>
      <Projects/>
      <About/>
      <Advantages/>
      <Pricing/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </div>
  );
}