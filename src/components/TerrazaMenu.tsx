import MenuSection from "./MenuSection";

const TerrazaMenu = () => {
  const raciones = [
    { name: "Croquetas surtidas (6ud)", price: "12,00€" },
    { name: "Jamón Ibérico de bellota (100g)", price: "19,00€" },
    { name: "Cecina de León con AOVE trufado", price: "18,00€" },
    { name: "Paté del mesón con sus tostadas", price: "10,50€" },
    { name: "Salmorejo cordobés", price: "10,00€" },
    { name: "Ensalada de tomate rosa y ventresca con aceite de albahaca", price: "14,50€" },
    { name: "Ensaladilla rusa con gambón", price: "12,20€" },
    { name: "Migas de pastor con huevo frito", price: "10,00€" },
    { name: "Huevos rotos con jamón ibérico/foie", price: "16,30€" },
    { name: "Tempura de verduras con salsa romescu", price: "13,50€" }
  ];

  const pescados = [
    { name: "Tartar de atún y aguacate con yema de huevo curada en soja", price: "15,80€" },
    { name: "Chopitos con pimientos de Padrón", price: "10,50€" },
    { name: "Pulpo a la brasa con ali oli negro y parmentier de pimentón", price: "19,00€" }
  ];

  const carnes = [
    { name: "Chuletillas de cordero lechal con patatas", price: "19,80€" },
    { name: "Entraña a la brasa con chimichurri", price: "14,00€" },
    { name: "Chuletón de vaca (800g)", price: "40,00€" }
  ];

  return (
    <section id="raciones" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Carta de Raciones
          </h2>
          <p className="text-lg text-muted-foreground mb-2">
            Mesón-Serrablo - Terraza
          </p>
          <p className="text-base text-accent font-medium">
            (Sólo en terraza)
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <MenuSection title="Raciones" items={raciones} />
          <MenuSection title="Pescados" items={pescados} />
          <MenuSection title="Carnes" items={carnes} />
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

export default TerrazaMenu;