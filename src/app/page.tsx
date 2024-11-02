import Header from "@/components/Header";
import HeroesSection from "@/components/HeroesSection";
import Aboutus from "@/components/Aboutus";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="">
      <Header />
        <HeroesSection/>
        <Aboutus/>
      <Footer />
    </div>
  );
}
