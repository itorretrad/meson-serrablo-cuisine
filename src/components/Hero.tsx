import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-restaurant.jpg";
const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Interior elegante del restaurante Mesón Serrablo" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-white leading-tight">
          Mesón Serrablo
        </h1>
        <p className="text-xl md:text-2xl mb-4 text-white/90 font-light">
          Tradición Culinaria Aragonesa
        </p>
        <p className="text-lg md:text-xl mb-8 text-white/80 max-w-2xl mx-auto leading-relaxed">Descubre los sabores auténticos de Aragón en un ambiente cálido y acogedor. </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={() => scrollToSection('carta')} size="lg" className="bg-primary hover:bg-primary-dark text-primary-foreground font-medium px-8 py-3 rounded-lg shadow-medium hover:shadow-strong transition-all duration-300 transform hover:scale-105">
            Ver Carta
          </Button>
          <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white hover:text-foreground font-medium px-8 py-3 rounded-lg backdrop-blur-sm transition-all duration-300">
            <a href="tel:+34974362418">Reservar Mesa</a>
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>;
};
export default Hero;