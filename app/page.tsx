import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TechWeMaster from "@/components/TechWeMaster";
import OurExpertise from "@/components/OurExpertise";
import OurIdentity from "@/components/OurIdentity";
import OurWorks from "@/components/OurWorks";

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <TechWeMaster />
      <OurExpertise />
      <OurIdentity />
      <OurWorks />
    </div>
  );
}
