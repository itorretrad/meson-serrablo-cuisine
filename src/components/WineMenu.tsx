const WineMenu = () => {
  const tintos = {
    "Aragón y Navarra": [
      { name: "Blescua Reserva", price: "69,00€" },
      { name: "Coto de Hayas Garnacha Centenaria", price: "19,20€" },
      { name: "Borsao 3 Picos", price: "18,80€" },
      { name: "Secastilla C.", price: "32,00€" },
      { name: "Señorío de Lazán", price: "12,90€" },
      { name: "Enate C.", price: "16,30€" },
      { name: "3404 Joven", price: "12,70€" },
      { name: "Viñas del Vero Joven", price: "9,50€" },
      { name: "Viñas del Vero Crianza", price: "12,60€" }
    ],
    "Rioja": [
      { name: "Beronia C.", price: "14,90€" },
      { name: "Bordón C.", price: "15,60€" },
      { name: "Campillo C.", price: "20,30€" },
      { name: "Luis Cañas C.", price: "19,70€" },
      { name: "Marqués de Cáceres C.", price: "16,40€" },
      { name: "Muga C.", price: "25,70€" },
      { name: "Ramón Bilbao C.", price: "16,80€" },
      { name: "Contino Reserva", price: "29,70€" },
      { name: "Gran Reserva 904", price: "69,00€" },
      { name: "Marqués de Murrieta Reserva", price: "30,20€" }
    ],
    "Duero": [
      { name: "Emilio Moro C.", price: "25,50€" },
      { name: "La Planta (Arzuaga)", price: "17,20€" },
      { name: "Protos C.", price: "23,60€" },
      { name: "Pago de Capellanes C.", price: "32,70€" }
    ]
  };

  const rosados = [
    { name: "Cresta Rosa - Gran Feudo", price: "11,40€" },
    { name: "Lambrusco", price: "11,60€" },
    { name: "Mateus", price: "10,90€" },
    { name: "Viñas del Vero", price: "11,50€" },
    { name: "Alquezano", price: "9,50€" },
    { name: "Inurrieta", price: "11,50€" }
  ];

  const blancos = [
    { name: "Blanc Pescador - Ampurdán", price: "12,90€" },
    { name: "Depende - D.O Albariño", price: "17,20€" },
    { name: "Martin Codax - Albariño", price: "19,40€" },
    { name: "Marqués de Riscal - Rueda", price: "16,80€" },
    { name: "Viña Sol - Penedés", price: "13,50€" },
    { name: "Viñas del Vero Gewürztraminer", price: "17,50€" },
    { name: "Viñas del Vero Chardonnay", price: "14,60€" },
    { name: "Viñas del Vero Joven", price: "9,50€" }
  ];

  const cavas = [
    { name: "Anna de Codorniu Brut", price: "16,40€" },
    { name: "Juve & Camps Rva. Brut", price: "26,80€" },
    { name: "Llopart Rva. Brut Nature", price: "22,60€" },
    { name: "Moet & Chandon", price: "55,00€" },
    { name: "Reyes de Aragón", price: "29,80€" }
  ];

  const otros = [
    { name: "Viñas del Vero C.", price: "8,80€", size: "Botella 3/8" },
    { name: "Marqués de Cáceres C.", price: "8,70€", size: "Botella 3/8" },
    { name: "El Coto (500ml) Rioja", price: "9,80€", size: "500ml" },
    { name: "Sangría", price: "13,00€" }
  ];

  const WineSection = ({ title, wines, subtitle }: { title: string; wines: any[]; subtitle?: string }) => (
    <div className="bg-gradient-card rounded-lg p-6 shadow-soft hover:shadow-medium transition-all duration-300">
      <h4 className="text-xl font-semibold text-primary mb-4 pb-2 border-b border-border">
        {title}
        {subtitle && <span className="text-sm text-muted-foreground block font-normal">{subtitle}</span>}
      </h4>
      <div className="space-y-3">
        {wines.map((wine, index) => (
          <div key={index} className="flex justify-between items-center hover:bg-muted/30 p-2 rounded transition-colors">
            <div>
              <span className="text-foreground">{wine.name}</span>
              {wine.size && <span className="text-xs text-muted-foreground ml-2">({wine.size})</span>}
            </div>
            <span className="text-primary font-semibold">{wine.price}</span>
          </div>
        ))}
      </div>
    </div>
  );

  const RegionSection = ({ title, regions }: { title: string; regions: Record<string, any[]> }) => (
    <div className="bg-gradient-card rounded-lg p-6 shadow-soft hover:shadow-medium transition-all duration-300">
      <h4 className="text-xl font-semibold text-primary mb-6 pb-2 border-b border-border">
        {title}
      </h4>
      <div className="space-y-6">
        {Object.entries(regions).map(([region, wines]) => (
          <div key={region}>
            <h5 className="font-medium text-accent mb-3">{region}:</h5>
            <div className="space-y-2 pl-4">
              {wines.map((wine, index) => (
                <div key={index} className="flex justify-between items-center hover:bg-muted/30 p-2 rounded transition-colors">
                  <span className="text-foreground">{wine.name}</span>
                  <span className="text-primary font-semibold">{wine.price}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="vinos" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Carta de Vinos
          </h2>
          <p className="text-lg text-muted-foreground">
            Selección de los mejores vinos españoles para maridar con nuestros platos
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <RegionSection title="Tintos" regions={tintos} />
          <div className="space-y-8">
            <WineSection title="Rosados" wines={rosados} />
            <WineSection title="Cavas y Champagnes" wines={cavas} />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <WineSection title="Blancos" wines={blancos} />
          <WineSection title="Otros" wines={otros} />
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            Nota: 10% IVA incluido
          </p>
        </div>
      </div>
    </section>
  );
};

export default WineMenu;