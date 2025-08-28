import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TechWeMaster from "@/components/TechWeMaster";
import OurExpertise from "@/components/OurExpertise";
import OurIdentity from "@/components/OurIdentity";
import OurWorks from "@/components/OurWorks";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <TechWeMaster />
      <OurExpertise />
      <OurIdentity />
      <OurWorks />
      <ContactUs />
      <Footer />
    </div>
  );
}
