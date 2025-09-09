import { MapPin, Phone, Clock, Mail } from "lucide-react";

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
              <div className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors cursor-pointer">
                <span className="text-sm font-semibold">FB</span>
              </div>
              <div className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors cursor-pointer">
                <span className="text-sm font-semibold">IG</span>
              </div>
              <div className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors cursor-pointer">
                <span className="text-sm font-semibold">TW</span>
              </div>
            </div>
          </div>

          {/* Información de contacto */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Contacto</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-1 text-primary-foreground/70" />
                <div>
                  <p className="text-primary-foreground/90">Dirección del Restaurante</p>
                  <p className="text-primary-foreground/70 text-sm">Serrablo, Huesca, España</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-foreground/70" />
                <p className="text-primary-foreground/90">+34 XXX XXX XXX</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-foreground/70" />
                <p className="text-primary-foreground/90">info@mesonserrablo.com</p>
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
                  <p className="text-primary-foreground/90 font-medium">Comidas</p>
                  <p className="text-primary-foreground/70 text-sm">13:00 - 16:00</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 mt-1 text-primary-foreground/70" />
                <div>
                  <p className="text-primary-foreground/90 font-medium">Cenas</p>
                  <p className="text-primary-foreground/70 text-sm">20:00 - 23:30</p>
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
              © 2024 Mesón Serrablo. Todos los derechos reservados.
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