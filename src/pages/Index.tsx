import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MainMenu from "@/components/MainMenu";
import SpecialMenus from "@/components/SpecialMenus";
import WineMenu from "@/components/WineMenu";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background md:scroll-smooth scroll-snap-y scroll-snap-mandatory overflow-y-scroll h-screen">
      <Header />
      <div className="scroll-snap-start">
        <Hero />
      </div>
      <div className="scroll-snap-start">
        <SpecialMenus />
      </div>
      <div className="scroll-snap-start">
        <MainMenu />
      </div>
      <div className="scroll-snap-start">
        <WineMenu />
      </div>
      <div className="scroll-snap-start">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
