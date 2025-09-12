import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MainMenu from "@/components/MainMenu";
import SpecialMenus from "@/components/SpecialMenus";
import WineMenu from "@/components/WineMenu";
import Footer from "@/components/Footer";
import { useScrollNavigation } from "@/hooks/useScrollNavigation";
import { useEffect } from "react";

const Index = () => {
  const sections = ['hero', 'menus', 'carta', 'vinos', 'footer'];
  
  const { currentSection } = useScrollNavigation({ 
    sections,
    threshold: 80,
    debounceMs: 100
  });

  useEffect(() => {
    // Add IDs to sections if they don't exist
    const sectionElements = [
      { id: 'hero', selector: 'section:first-of-type, div:first-of-type' },
      { id: 'menus', selector: '#menus' },
      { id: 'carta', selector: '#carta' },
      { id: 'vinos', selector: '#vinos' },
      { id: 'footer', selector: 'footer' }
    ];

    sectionElements.forEach(({ id, selector }) => {
      const element = document.querySelector(selector);
      if (element && !element.id) {
        element.id = id;
      }
    });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div id="hero">
        <Hero />
      </div>
      <SpecialMenus />
      <MainMenu />
      <WineMenu />
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
