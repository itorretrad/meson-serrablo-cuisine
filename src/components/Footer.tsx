import { MapPin, Phone, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer id="reserva" className="bg-primary text-primary-foreground py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="col-span-1 lg:col-span-2">
            <h3 className="text-3xl font-serif font-bold mb-4">Mesón Serrablo</h3>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Tradición culinaria aragonesa en el corazón de la gastronomía española. 
              Más de años ofreciendo los sabores más auténticos con ingredientes de la máxima calidad.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/mesonserrablo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors cursor-pointer"
              >
                <img src="/lovable-uploads/f820f3b7-8a55-4685-8d29-7b33e1c51977.png" alt="Facebook" className="w-6 h-6" />
              </a>
              <a 
                href="https://www.instagram.com/mesonserrablo/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors cursor-pointer"
              >
                <img src="/lovable-uploads/d6e8a045-2928-4af6-9c93-4f1403bc45e1.png" alt="Instagram" className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Información de contacto */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Contacto</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-1 text-primary-foreground/70" />
                <div>
                  <p className="text-primary-foreground/90">C. del Obispo, 3</p>
                  <p className="text-primary-foreground/70 text-sm">22700 Jaca, Huesca</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-foreground/70" />
                <p className="text-primary-foreground/90">974 36 24 18</p>
              </div>
            </div>
          </div>

          {/* Horarios */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Horarios</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 mt-1 text-primary-foreground/70" />
                <div>
                  <p className="text-primary-foreground/90 font-medium">De lunes a sábado</p>
                  <p className="text-primary-foreground/70 text-sm">12:00–16:00, 20:00–23:00</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 mt-1 text-primary-foreground/70" />
                <div>
                  <p className="text-primary-foreground/90 font-medium">Domingos</p>
                  <p className="text-primary-foreground/70 text-sm">12:00–16:00</p>
                </div>
              </div>
              <div className="mt-4 p-3 bg-primary-foreground/10 rounded-lg">
                <p className="text-primary-foreground/90 text-sm font-medium">Reservas recomendadas</p>
                <p className="text-primary-foreground/70 text-sm">Especialmente en fines de semana</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/70 text-sm">
              © 2025 Mesón Serrablo. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">
                Términos de Servicio
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;