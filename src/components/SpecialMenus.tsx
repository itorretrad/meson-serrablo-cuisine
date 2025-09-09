const SpecialMenus = () => {
  const primeros = [
    "Ensalada griega con queso feta y salsa de yogur",
    "Salmorejo cordobés con jamón y huevo",
    "Migas del pastor con huevo frito y uvas",
    "Tortellini de ricota y espinacas a la crema",
    "Cardo de Aragón en salsa de almendras",
    "Arroz meloso de setas con longaniza y parmesano"
  ];

  const segundos = [
    "Salmón a la plancha con salsa tártara",
    "Lubina al horno con salsa estilo Orio",
    "Toro estofado con demiglace de verduras",
    "Carrilleras de cerdo ibérico glaseadas",
    "Conejo a la brasa con ali-oli",
    "Entraña de ternera a la brasa con patatas fritas"
  ];

  const postres = [
    "Tarta de queso con salsa de frutos rojos",
    "Natillas al estilo de la abuela con galleta",
    "Tiramisú al café",
    "Mousse de limón casero",
    "Cuajada de oveja con miel y nueces"
  ];

  return (
    <section id="menus" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Menús Especiales
          </h2>
          <p className="text-lg text-muted-foreground">
            Opciones completas para disfrutar de nuestra cocina
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8 mb-8">
          {/* Menú del Día */}
          <div className="bg-gradient-card rounded-lg p-8 shadow-medium hover:shadow-strong transition-all duration-300">
            <div className="text-center mb-6">
              <h3 className="text-3xl font-serif font-semibold text-primary mb-2">
                Menú del Día
              </h3>
              <p className="text-2xl font-bold text-accent">25,80€</p>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-3 pb-1 border-b border-border">
                  Primeros a elegir:
                </h4>
                <ul className="space-y-2">
                  {primeros.map((plato, index) => (
                    <li key={index} className="text-muted-foreground flex items-start">
                      <span className="text-primary mr-2">•</span>
                      {plato}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-foreground mb-3 pb-1 border-b border-border">
                  Segundos a elegir:
                </h4>
                <ul className="space-y-2">
                  {segundos.map((plato, index) => (
                    <li key={index} className="text-muted-foreground flex items-start">
                      <span className="text-primary mr-2">•</span>
                      {plato}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-foreground mb-3 pb-1 border-b border-border">
                  Postres a elegir:
                </h4>
                <ul className="space-y-2">
                  {postres.map((postre, index) => (
                    <li key={index} className="text-muted-foreground flex items-start">
                      <span className="text-primary mr-2">•</span>
                      {postre}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-secondary/50 p-4 rounded-md">
                <p className="text-sm font-medium text-foreground">
                  Bebida incluida: ½ l Agua mineral o ½ l Vino Viñas del Vero Roble o ½ l Cerveza
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  (No incluye otra bebida aparte de las indicadas)
                </p>
              </div>
            </div>
          </div>

          {/* Menús Premium y otros */}
          <div className="space-y-6 max-w-2xl mx-auto">
            <div className="bg-gradient-card rounded-lg p-6 shadow-soft">
              <h3 className="text-xl font-serif font-semibold text-primary mb-4">
                Menús con Bodega Superior
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-secondary/30 rounded">
                  <span className="font-medium">Menú con Señorío de Lazán Crianza</span>
                  <span className="text-primary font-bold">32,50€</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-secondary/30 rounded">
                  <span className="font-medium">Menú con Rioja D.O. 828 Crianza</span>
                  <span className="text-primary font-bold">32,50€</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-card rounded-lg p-6 shadow-soft">
              <h3 className="text-xl font-serif font-semibold text-primary mb-4">
                Menú Infantil
              </h3>
              <div className="text-center mb-4">
                <p className="text-2xl font-bold text-accent">16,00€</p>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="font-medium text-foreground mb-2">Plato:</p>
                  <p className="text-muted-foreground">Pasta boloñesa, pechugas de pollo empanadas y patatas fritas</p>
                </div>
                <div>
                  <p className="font-medium text-foreground mb-2">Incluye:</p>
                  <p className="text-muted-foreground">Postres del menú | ½ Litro de agua o refresco</p>
                </div>
                <p className="text-xs text-muted-foreground italic">
                  IVA incluido (no permitido compartir)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialMenus;