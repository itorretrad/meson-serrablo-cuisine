import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MainMenu from "@/components/MainMenu";
import SpecialMenus from "@/components/SpecialMenus";
import WineMenu from "@/components/WineMenu";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <SpecialMenus />
      <MainMenu />
      <WineMenu />
      <Footer />
    </div>
  );
};

export default Index;
