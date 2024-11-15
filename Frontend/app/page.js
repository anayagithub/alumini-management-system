import Services from "@/components/Services";
import Aboutus from "@/components/Aboutus";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="h-screen bg-gray-200 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(55,65,81,0.6),rgba(0,0,0,0))]">
      <Services />
      <Aboutus />
      <Gallery/>
      <Contact />
    </div>
  );
}
