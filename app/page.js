import Services from "@/components/Services";
import Aboutus from "@/components/Aboutus";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="h-screen">
      <Services />
      <Aboutus />
      <Contact />
    </div>
  );
}
