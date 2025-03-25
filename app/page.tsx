import About from "@/components/shared/About";
import Contact from "@/components/shared/Contact";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import LatestWorks from "@/components/shared/Portfolio";
import TechStack from "@/components/shared/TechStack";
import Welcome from "@/components/shared/Welcome";

export default function Home() {
  return (
    <div className="bg-black text-white">
      <Header />
      <Welcome />
      <TechStack />
      <LatestWorks />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
