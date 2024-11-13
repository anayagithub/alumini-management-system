import Services from "@/components/Services";
import Aboutus from "@/components/Aboutus";
import Contact from "@/components/Contact";
import Nav from "@/components/Nav";


export default function Home() {
  return (
    <div className="h-screen">
      <Nav/>
      <Services />
      <Aboutus />
      <Contact />
    </div>
  );
}
