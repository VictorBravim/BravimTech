import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Serviços from "@/components/Serviços"
import Projects from "@/components/Projects";
import About from "@/components/About";
import Pricing from "@/components/Pricing";
import Testimonial from "@/components/Testimonials";
import Advantages from "@/components/Advantages";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <Serviços/>
      <Projects/>
      <About/>
      <Pricing/>
      <Testimonial/>
      <Advantages/>
      <Contact/>
      <Footer/>
    </div>
  );
}