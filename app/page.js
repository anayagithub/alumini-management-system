import Services from "@/components/Services";
import Aboutus from "@/components/Aboutus";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Index from "@/components/Index";

export default function Home() {
  return (
    <div className="h-screen">
      <Services />
      <Aboutus />
      <Gallery/>
      <Contact />
      <Index/>
    </div>
  );
}
