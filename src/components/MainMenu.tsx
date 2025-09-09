import MenuSection from "./MenuSection";

const MainMenu = () => {
  const entrantesFrios = [
    {
      name: "JAMÓN IBÉRICO DE BELLOTA (100gr)",
      nameFr: "Jambon Ibérique Bellota",
      nameEn: "Bellota ham",
      price: "19,00€"
    },
    {
      name: "PATÉ DEL MESÓN CON SUS TOSTADAS",
      nameFr: "Pâté du Maison avec des tostes",
      nameEn: "Pate with toast",
      price: "10,50€"
    },
    {
      name: "ENSALADA DE QUESO DE CABRA, PIÑONES, MIEL Y JAMÓN IBÉRICO",
      nameFr: "Salade de Chèvre avec pignons, miel et jambon ibérique",
      nameEn: "Goat cheese and pine nuts salad with iberian ham",
      price: "14,20€"
    }
  ];

  const entrantesCalientes = [
    {
      name: "SALTEADO DE BOLETUS CON HUEVO FRITO Y JAMÓN IBÉRICO",
      nameFr: "Sauté du cèpes avec oeuf et jambon ibérique",
      nameEn: "Sautéed from ceps with egg and iberian ham",
      price: "16,30€"
    },
    {
      name: "BORRAJITAS AL NATURAL CON ALMEJAS",
      nameFr: "Bourrache aux clovisses",
      nameEn: "Borage with clams",
      price: "20,20€"
    },
    {
      name: "CANELONES DE SETAS GRATINADOS",
      nameFr: "Cannelloni gratinés aux champignons",
      nameEn: "Mushrooms canneloni au gratin",
      price: "14,60€"
    },
    {
      name: "HUEVOS ROTOS CON FOIE",
      nameFr: "Oeufs cassés au foie gras",
      nameEn: "Fried eggs with foie gras",
      price: "16,30€"
    },
    {
      name: "PULPO ASADO CON CREMA DE PATATAS, AJO NEGRO Y ACEITE DE PIMENTÓN",
      nameFr: "Poulpé rôti à la crème de pomme de terre, ail noir et huile de Paprika",
      nameEn: "Roasted octopus, mash potato, black garlic and Paprika",
      price: "18,20€"
    }
  ];

  const pescados = [
    {
      name: "BACALAO GRATINADO CON PATATA PANADERA",
      nameFr: "Morue gratinée avec pommes de terre",
      nameEn: "Roasted cod with potatoes",
      price: "18,50€"
    },
    {
      name: "MERLUZA RELLENA DE MARISCO EN SALSA DE ALMENDRAS",
      nameFr: "Merlu farcie aux fruits de mer en sauce aux amandes",
      nameEn: "Seafood stuffed hake in almond sauce",
      price: "23,00€"
    },
    {
      name: "ARROZ CALDOSO DE BOGAVANTE (MÍN 2 PERSONAS)",
      nameFr: "Rissoto au homard",
      nameEn: "Soupy rice with lobster",
      price: "21,30€",
      description: "precio por persona"
    },
    {
      name: "LUBINA A LA SAL (MÍN 2 PERSONAS)",
      nameFr: "Bar en croûte de sel",
      nameEn: "Sea bass in a salt crust",
      price: "22,00€",
      description: "precio por persona"
    }
  ];

  const carnes = [
    {
      name: "PALETILLA DE CORDERO LECHAL ASADA A BAJA TEMPERATURA",
      nameFr: "Épaule d'agneu de lait rôti à basse température",
      nameEn: "Slow roast suckling lamb",
      price: "25,00€"
    },
    {
      name: "ESTOFADO DE JABALÍ CON MANZANA",
      nameFr: "Ragoût de sanglier aux pommes",
      nameEn: "Wild boar stew with apples",
      price: "18,50€"
    },
    {
      name: "CHULETILLAS DE LECHAL DEL PIRINEO",
      nameFr: "Côtelettes d'agneu de lait des Pyrénées",
      nameEn: "Pyrenean lamb cuttles",
      price: "19,80€"
    },
    {
      name: "ENTRECOTTE DE TERNERA A LA BRASA",
      nameFr: "Entrecôte de veau grillée",
      nameEn: "Grilled entrecotte steak",
      price: "19,30€"
    },
    {
      name: "CHULETÓN DE VACA (800gr)",
      nameFr: "Côte de boeuf (800gr)",
      nameEn: "Veal t-bone steak (800gr)",
      price: "40,00€"
    },
    {
      name: "SOLOMILLO DE TERNERA AL ARMAGNAC",
      nameFr: "Faux fillet de veau à l'armagnac",
      nameEn: "Beef medallions with cognac sauce",
      price: "22,50€"
    }
  ];

  const postres = [
    {
      name: "TARTA DE QUESO CON FRUTOS ROJOS",
      price: "5,50€"
    },
    {
      name: "BROWNIE DE CHOCOLATE (SIN HARINA) CON HELADO DE MANDARINA",
      price: "5,50€"
    },
    {
      name: "PASTEL RUSO CON CHOCOLATE",
      price: "5,50€"
    },
    {
      name: "HELADO GRATINADO (NUESTRA ESPECIALIDAD)",
      price: "6,20€"
    },
    {
      name: "TORRIJA DE BRIOCHE CARAMELIZADA CON HELADO DE LECHE MERENGADA",
      price: "7,50€"
    },
    {
      name: "PROFITEROLES CON CHOCOLATE",
      price: "5,50€"
    },
    {
      name: "TABLA DE QUESOS",
      price: "9,00€"
    },
    {
      name: "SORBETE DE LIMÓN AL CAVA",
      price: "5,20€"
    },
    {
      name: "CAFÉ ESCOCÉS",
      price: "5,80€"
    },
    {
      name: "CAFÉ IRLANDÉS",
      price: "5,80€"
    }
  ];

  return (
    <section id="carta" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Carta Principal
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubre nuestra selección de especialidades tradicionales aragonesas, 
            elaboradas con ingredientes de la máxima calidad
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <MenuSection title="Entrantes Fríos" items={entrantesFrios} />
          <MenuSection title="Entrantes Calientes" items={entrantesCalientes} />
          <MenuSection title="Pescados" items={pescados} />
          <MenuSection title="Carnes" items={carnes} />
          <MenuSection title="Postres Caseros" items={postres} />
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

export default MainMenu;