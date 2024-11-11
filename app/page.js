import Services from "@/components/Services";
import Aboutus from "@/components/Aboutus";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="h-screen">
      <Services />
      <Aboutus />
      <Gallery/>
      <Contact />
    </div>
  );
}
