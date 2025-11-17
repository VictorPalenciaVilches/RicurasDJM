const menuItems = [
  // SUIZO
  {
    id: 1,
    category: "Suizo",
    name: "SUIZO SENCILLO",
    description: "Suiza, Butifarra, salami cervecero, lechuga, papa francesa o cocida",
    price: 11000
  },
  {
    id: 2,
    category: "Suizo",
    name: "SUIZO ESPECIAL",
    description: "Suiza, chorizo, salami cervecero, maíz, mozzarella, recorte, lechuga, papa francesa o cocida",
    price: 16000
  },
  {
    id: 3,
    category: "Suizo",
    name: "SUIZO RANCHERO",
    description: "Suiza, chorizo, Butifarra, salami cervecero, maíz, salchicha ranchera, mozzarella, recorte, papa francesa o cocida",
    price: 20000
  },
  {
    id: 4,
    category: "Suizo",
    name: "SUIZO DE POLLO",
    description: "Suiza, pollo, jamón, tocineta, maíz, mozzarella, papa francesa o cocida",
    price: 20000
  },
  {
    id: 5,
    category: "Suizo",
    name: "SUIZO D J M",
    description: "Suiza, butifarra, Chorizo, salami cervecero, pollo, ranchera, maíz, tocineta, jamón, recorte, lechuga GRATINADO",
    price: 30000
  },

  // AREPA
  {
    id: 6,
    category: "Arepa",
    name: "AREPA SOLO QUESO",
    description: "Queso costeño, Queso mozzarella",
    price: 5000
  },
  {
    id: 7,
    category: "Arepa",
    name: "AREPA JAMÓN & QUESO",
    description: "Recorte, Queso costeño, Jamón y mozzarella",
    price: 6000
  },
  {
    id: 8,
    category: "Arepa",
    name: "AREPA DE CHORIZO",
    description: "Recorte, Queso costeño, chorizo, jamón y mozzarella",
    price: 7000
  },
  {
    id: 9,
    category: "Arepa",
    name: "AREPA DE BUTIFARRA",
    description: "Recorte, Queso costeño, Butifarra, jamón y mozzarella",
    price: 7000
  },
  {
    id: 10,
    category: "Arepa",
    name: "AREPA DE TOCINETA",
    description: "Recorte, Queso costeño, tocineta, jamón y mozzarella",
    price: 7000
  },
  {
    id: 11,
    category: "Arepa",
    name: "AREPA DE POLLO",
    description: "Recorte, Queso costeño, pollo, jamón y mozzarella",
    price: 10000
  },
  {
    id: 12,
    category: "Arepa",
    name: "AREPA DE CARNE",
    description: "Recorte, Queso costeño, jamón y mozzarella",
    price: 10000
  },
  {
    id: 13,
    category: "Arepa",
    name: "AREPA MIXTA CON 2 CARNES",
    description: "Recorte, Queso costeño, Carnes(opcionales), jamón y mozzarella",
    price: 12000
  },
  {
    id: 14,
    category: "Arepa",
    name: "AREPA TRIFÁSICA",
    description: "Recorte, Queso costeño, Carnes(opcionales) tocineta y mozzarella",
    price: 15000
  },
  {
    id: 15,
    category: "Arepa",
    name: "AREPA D J M",
    description: "Queso costeño, pollo, carne, chorizo, butifarra, jamón, mozzarella, tocineta, cebolla, maíz",
    price: 16000
  },

  // PICADA
  {
    id: 16,
    category: "Picada",
    name: "PICADA SENCILLA",
    description: "Pollo y cerdo (150g), chorizo, butifarra, lechuga, papa francesa",
    price: 20000
  },
  {
    id: 17,
    category: "Picada",
    name: "PICADA ESPECIAL",
    description: "Pollo y cerdo (350g), chorizo, butifarra, lechuga, papa francesa",
    price: 30000
  },
  {
    id: 18,
    category: "Picada",
    name: "PICADA FAMILIAR",
    description: "Pollo y cerdo (350g), cerdo, chorizo, Butifarra, lechuga, papa francesa",
    price: 40000
  },
  {
    id: 19,
    category: "Picada",
    name: "PICADA D J M",
    description: "Pollo y cerdo (450g), chorizo, butifarra, lechuga, papa francesa, GRATINADO",
    price: 50000
  },

  // SALCHIPAPA
  {
    id: 20,
    category: "Salchipapa",
    name: "SALCHIPAPA SENCILLA",
    description: "Salchicha xl, Chorizo, recorte, queso costeño, papa francesa",
    price: 11000
  },
  {
    id: 21,
    category: "Salchipapa",
    name: "SALCHIPAPA ESPECIAL",
    description: "Salchicha xl, Chorizo, Butifarra, maíz, mozzarella, recorte, queso costeño, papa francesa",
    price: 14000
  },
  {
    id: 22,
    category: "Salchipapa",
    name: "SALCHIPAPA MIXTA",
    description: "Salchicha xl, pollo, cerdo, maíz, mozzarella, recorte, queso costeño, papa francesa",
    price: 18000
  },
  {
    id: 23,
    category: "Salchipapa",
    name: "SALCHIPAPA DJM",
    description: "Salchicha xl, pollo, carne, maíz, jamón, tocineta, mozzarella, recorte, queso costeño, papa francesa",
    price: 25000
  },

  // CHORIPAPA
  {
    id: 24,
    category: "Choripapa",
    name: "CHORIPAPA SENCILLA",
    description: "Chorizo, recorte, queso costeño, papa francesa",
    price: 11000
  },
  {
    id: 25,
    category: "Choripapa",
    name: "CHORIPAPA ESPECIAL",
    description: "Chorizo, recorte, queso costeño, maíz, mozzarella, papa francesa",
    price: 14000
  },
  {
    id: 26,
    category: "Choripapa",
    name: "CHORIPAPA DJM",
    description: "Chorizo, tocineta, recorte, queso costeño, maíz, mozzarella, papa francesa",
    price: 20000
  },

  // HAMBURGUESA
  {
    id: 27,
    category: "Hamburguesa",
    name: "HAMBURGUESA SENCILLA",
    description: "Carne artesanal, lechuga, tomate, mozzarella, pan, papa francesa",
    price: 11000
  },
  {
    id: 28,
    category: "Hamburguesa",
    name: "HAMBURGUESA ESPECIAL",
    description: "Carne artesanal, tocineta, chorizo, mozzarella, lechuga, tomate, pan, papa francesa",
    price: 15000
  },
  {
    id: 29,
    category: "Hamburguesa",
    name: "HAMBURGUESA DJM",
    description: "Carne artesanal, ranchera, tocineta, mozzarella, lechuga, tomate, pan, papa francesa",
    price: 20000
  },

  // PERRO
  {
    id: 30,
    category: "Perro",
    name: "PERRO SENCILLO",
    description: "Salchicha tradicional, recorte, queso costeño",
    price: 4500
  },
  {
    id: 31,
    category: "Perro",
    name: "PERRO ESPECIAL",
    description: "Recorte, salchicha tradicional, queso costeño, tocineta, Jamón y mozzarella",
    price: 8000
  },
  {
    id: 32,
    category: "Perro",
    name: "PERRO SUIZO",
    description: "Salchicha Suiza, recorte, jamón, queso costeño tocineta y mozzarella",
    price: 11000
  },
  {
    id: 33,
    category: "Perro",
    name: "PERRO RANCHERO",
    description: "Salchicha ranchera, recorte, queso, costeño, jamón, tocineta y mozzarella",
    price: 11000
  },
  {
    id: 34,
    category: "Perro",
    name: "PERRO DJM",
    description: "Salchicha tradicional, suiza, ranchera, recorte, queso costeño, Jamón, tocineta, cebolla",
    price: 15000
  },

  // SÁNDUCHON
  {
    id: 35,
    category: "Sánduchon",
    name: "SÁNDUCHON DE JAMÓN Y QUESO",
    description: "Recorte, queso costeño, lechuga, jamón y mozzarella",
    price: 6000
  },
  {
    id: 36,
    category: "Sánduchon",
    name: "SÁNDUCHON DE CHORIZO",
    description: "Recorte, queso costeño, lechuga, jamón, mozzarella, chorizo",
    price: 7000
  },
  {
    id: 37,
    category: "Sánduchon",
    name: "SÁNDUCHON DE BUTIFARRA",
    description: "Recorte, queso costeño, lechuga, jamón, mozzarella, butifarra",
    price: 7000
  },
  {
    id: 38,
    category: "Sánduchon",
    name: "SÁNDUCHON DE TOCINETA",
    description: "Recorte, queso costeño, lechuga, jamón, mozzarella, tocineta",
    price: 7000
  },
  {
    id: 39,
    category: "Sánduchon",
    name: "SÁNDUCHON DE POLLO",
    description: "Recorte, queso costeño, lechuga, jamón, mozzarella, pollo",
    price: 8000
  },
  {
    id: 40,
    category: "Sánduchon",
    name: "SÁNDUCHON DE CARNE",
    description: "Recorte, queso costeño, lechuga, jamón, mozzarella, carne",
    price: 8000
  }
];

export default menuItems;

