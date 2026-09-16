export interface STLItem {
  id: string;
  name: string;
  category: string;
  page: number;
  status: 'available' | 'coming_soon';
  folderUrl?: string;
  description?: string;
  tags: string[];
}

export interface PDFPageData {
  pageNumber: number;
  title: string;
  subtitle?: string;
  items: STLItem[];
  notice?: string;
}

export const STL_PAGES_DATA: PDFPageData[] = [
  {
    pageNumber: 1,
    title: 'BIGESTPACKS © | STL DO MAGO',
    subtitle:
      "Thank you for your purchase! 🎉 We're thrilled to have you as part of the BigestPacks family. Below you’ll find all the links to your STL packs, including exclusive content just for you. Enjoy exploring your new collection!",
    items: [
      {
        id: 'book-nook',
        name: 'BOOK NOOK PACK',
        category: 'Dioramas & Estantes',
        page: 1,
        status: 'available',
        folderUrl: 'https://drive.google.com',
        description: 'Dioramas e book nooks detalhados para estantes de RPG e fantasia.',
        tags: ['Diorama', 'Decoração', 'Estante', 'RPG']
      },
      {
        id: 'star-wars',
        name: 'STAR WARS',
        category: 'Ficção & Sci-Fi',
        page: 1,
        status: 'available',
        folderUrl: 'https://drive.google.com',
        description: 'Capacetes, naves, bustos e sabres de luz do universo Star Wars.',
        tags: ['Sci-Fi', 'Bustos', 'Naves', 'Darth Vader']
      },
      {
        id: 'planters-pack',
        name: 'PLANTERS PACK',
        category: 'Utilidades & Decor',
        page: 1,
        status: 'available',
        folderUrl: 'https://drive.google.com',
        description: 'Vasos temáticos para plantas, monstros fofos e criaturas místicas.',
        tags: ['Vasos', 'Decoração', 'Plantas']
      },
      {
        id: 'miniatures',
        name: 'MINIATURES',
        category: 'RPG & Miniaturas',
        page: 1,
        status: 'available',
        folderUrl: 'https://drive.google.com',
        description: 'Heróis, magos, guerreiros, monstros e NPCs em escala 28mm / 32mm.',
        tags: ['RPG', '28mm', '32mm', 'Guerreiros', 'Magos', 'Monstros']
      },
      {
        id: 'mixed-tabletop',
        name: 'MIXED TABLETOP',
        category: 'RPG & Miniaturas',
        page: 1,
        status: 'available',
        folderUrl: 'https://drive.google.com',
        description: 'Cenários modulares de masmorras, tavernas, baús e terrenos.',
        tags: ['Grid', 'Dungeon', 'Tabletop', 'Cenário']
      }
    ]
  },
  {
    pageNumber: 2,
    title: 'BIGESTPACKS © | STL DO MAGO',
    items: [
      { id: 'cosplay', name: 'COSPLAY', category: 'Cosplay & Props', page: 2, status: 'available', folderUrl: 'https://drive.google.com', tags: ['Armaduras', 'Máscaras', 'Wearables'] },
      { id: 'dragon-ball', name: 'DRAGON BALL', category: 'Anime & Mangá', page: 2, status: 'available', folderUrl: 'https://drive.google.com', tags: ['Goku', 'Vegeta', 'Action Figures'] },
      { id: 'games', name: 'GAMES', category: 'Videogames', page: 2, status: 'available', folderUrl: 'https://drive.google.com', tags: ['Kratos', 'God of War', 'Elden Ring', 'Dark Souls'] },
      { id: 'cartoons', name: 'CARTOONS', category: 'Animação', page: 2, status: 'available', folderUrl: 'https://drive.google.com', tags: ['Desenhos', 'Infantil', 'Colecionáveis'] },
      { id: 'marvel', name: 'MARVEL', category: 'Super-Heróis', page: 2, status: 'available', folderUrl: 'https://drive.google.com', tags: ['Vingadores', 'Homem de Ferro', 'Wolverine'] },
      { id: 'dc', name: 'DC', category: 'Super-Heróis', page: 2, status: 'available', folderUrl: 'https://drive.google.com', tags: ['Batman', 'Coringa', 'Superman'] }
    ]
  },
  {
    pageNumber: 3,
    title: 'BIGESTPACKS © | STL DO MAGO',
    items: [
      { id: 'chibi', name: 'CHIBI', category: 'Estilo Chibi', page: 3, status: 'available', folderUrl: 'https://drive.google.com', tags: ['Mini', 'Fofo', 'Chibi'] },
      { id: 'anime', name: 'ANIME', category: 'Anime & Mangá', page: 3, status: 'available', folderUrl: 'https://drive.google.com', tags: ['One Piece', 'Naruto', 'Attack on Titan'] },
      { id: 'valentine', name: 'VALENTINE', category: 'Temáticos & Caixas', page: 3, status: 'available', folderUrl: 'https://drive.google.com', tags: ['Corações', 'Caixas com Engrenagem', 'Presentes'] },
      { id: 'pokemon', name: 'POKEMON', category: 'Anime & Jogos', page: 3, status: 'available', folderUrl: 'https://drive.google.com', tags: ['Pikachu', 'Pokebolas', 'Monstros'] },
      { id: 'warhammer', name: 'WARHAMMER', category: 'RPG & Wargames', page: 3, status: 'available', folderUrl: 'https://drive.google.com', tags: ['Space Marines', 'Wargames', '40k', 'Grimdark'] },
      { id: 'articulated', name: 'ARTICULATED', category: 'Articulados Print-in-Place', page: 3, status: 'available', folderUrl: 'https://drive.google.com', tags: ['Polvos', 'Articulados', 'Print-in-Place'] }
    ]
  },
  {
    pageNumber: 4,
    title: 'BIGESTPACKS © | STL DO MAGO',
    items: [
      { id: 'wall-decor', name: 'WALL DECOR', category: 'Decoração', page: 4, status: 'available', folderUrl: 'https://drive.google.com', tags: ['Quadros 3D', 'Painéis de Parede'] },
      { id: 'vehicules-planes', name: 'VEHICULES & PLANES', category: 'Veículos & Modelismo', page: 4, status: 'available', folderUrl: 'https://drive.google.com', tags: ['Carros', 'Aviões', 'Escala'] },
      { id: 'real', name: 'REAL', category: 'Anatomia & Escultura', page: 4, status: 'available', folderUrl: 'https://drive.google.com', tags: ['Coração', 'Esculturas', 'Realismo'] },
      { id: 'puzzles', name: 'PUZZLES', category: 'Quebra-cabeças & Jogos', page: 4, status: 'available', folderUrl: 'https://drive.google.com', tags: ['Cubos', 'Labirintos', 'Puzzles'] },
      { id: 'plakit', name: 'PLAKIT', category: 'Kits para Montar', page: 4, status: 'available', folderUrl: 'https://drive.google.com', tags: ['Model Kits', 'Montagem'] },
      { id: 'movies-tv', name: 'MOVIES & TV', category: 'Cinema & Séries', page: 4, status: 'available', folderUrl: 'https://drive.google.com', tags: ['Avatar', 'Alien', 'Predador'] }
    ]
  },
  {
    pageNumber: 5,
    title: 'BIGESTPACKS © | STL DO MAGO',
    items: [
      { id: 'keychains', name: 'KEYCHAINS', category: 'Acessórios', page: 5, status: 'available', folderUrl: 'https://drive.google.com', tags: ['Chaveiros', 'Lembrancinhas'] },
      { id: 'joystick-support', name: 'JOYSTICK SUPPORT', category: 'Suportes Gamer', page: 5, status: 'available', folderUrl: 'https://drive.google.com', tags: ['Controle', 'PS5', 'Xbox', 'Goku Stand'] },
      { id: 'jewelry', name: 'JEWELRY', category: 'Joalheria & Anéis', page: 5, status: 'available', folderUrl: 'https://drive.google.com', tags: ['Anéis de Lobo', 'Garras', 'Bijuteria'] },
      { id: 'home', name: 'HOME', category: 'Casa & Utilidades', page: 5, status: 'available', folderUrl: 'https://drive.google.com', tags: ['Luminárias de Jardim', 'Decoração Casa'] },
      { id: 'headphones', name: 'HEADPHONES', category: 'Suportes Gamer', page: 5, status: 'available', folderUrl: 'https://drive.google.com', tags: ['Suporte Fone', 'Headset Stand'] },
      { id: 'guns', name: 'GUNS', category: 'Props & Armas', page: 5, status: 'available', folderUrl: 'https://drive.google.com', tags: ['Rifles', 'Props', 'Cosplay Guns'] }
    ]
  },
  {
    pageNumber: 6,
    title: 'BIGESTPACKS © | STL DO MAGO',
    items: [
      { id: 'funko', name: 'FUNKO', category: 'Colecionáveis', page: 6, status: 'available', folderUrl: 'https://drive.google.com', tags: ['Funko Pop', 'It a Coisa', 'Chucky'] },
      { id: 'dog-tags', name: 'DOG TAGS', category: 'Pets & Tags', page: 6, status: 'available', folderUrl: 'https://drive.google.com', tags: ['Identificação Pet', 'Plaquinhas'] },
      { id: 'disney', name: 'DISNEY', category: 'Animação', page: 6, status: 'available', folderUrl: 'https://drive.google.com', tags: ['Princesas', 'Alice', 'Ariel'] },
      { id: 'cookie-cutters', name: 'COOKIE CUTTERS', category: 'Cozinha', page: 6, status: 'available', folderUrl: 'https://drive.google.com', tags: ['Cortadores de Biscoito', 'Confeitaria'] },
      { id: 'cnc-router', name: 'CNC ROUTER', category: 'Modelos CNC & Relevos', page: 6, status: 'available', folderUrl: 'https://drive.google.com', tags: ['Relevos', 'Madeira', 'CNC'] },
      { id: 'buildings', name: 'BUILDINGS', category: 'Cidades & Cenários RPG', page: 6, status: 'available', folderUrl: 'https://drive.google.com', tags: ['Metrópole', 'Prédios', 'Cenários'] }
    ]
  },
  {
    pageNumber: 7,
    title: 'BIGESTPACKS © | STL DO MAGO',
    items: [
      { id: 'vases', name: 'VASES', category: 'Decoração', page: 7, status: 'available', folderUrl: 'https://drive.google.com', tags: ['Vasos Voronoi', 'Design Moderno'] },
      { id: 'katana-swords', name: 'KATANA SWORDS', category: 'Espadas & Props', page: 7, status: 'available', folderUrl: 'https://drive.google.com', tags: ['Katanas Colapsáveis', 'Lâminas'] },
      { id: 'suspended', name: 'SUSPENDED', category: 'Esculturas Tensêgridade', page: 7, status: 'available', folderUrl: 'https://drive.google.com', tags: ['Tensegrity', 'Peixes', 'Gravidade Zero'] },
      { id: 'flexi-dragons', name: 'FLEXI DRAGONS', category: 'Dragões RPG & Articulados', page: 7, status: 'available', folderUrl: 'https://drive.google.com', tags: ['Dragões', 'Articulados', 'RPG Bestiário'] },
      { id: 'scary-masks', name: 'SCARY MASKS', category: 'Máscaras & Terror', page: 7, status: 'available', folderUrl: 'https://drive.google.com', tags: ['Halloween', 'Máscaras', 'Vilões'] },
      { id: '3d-lamps', name: '3D LAMPS', category: 'Iluminação & Luminárias', page: 7, status: 'available', folderUrl: 'https://drive.google.com', tags: ['Luminária Lua', 'Esferas Iluminadas'] }
    ]
  },
  {
    pageNumber: 8,
    title: 'BIGESTPACKS © | STL DO MAGO',
    items: [
      { id: 'mugs', name: 'MUGS', category: 'Canecas & Taças RPG', page: 8, status: 'available', folderUrl: 'https://drive.google.com', tags: ['Caneca Medieval', 'Taverna', 'Caveiras'] },
      { id: 'organizers', name: 'ORGANIZERS', category: 'Organizadores', page: 8, status: 'available', folderUrl: 'https://drive.google.com', tags: ['Caixas de Ferramenta', 'Gaveteiros', 'Bancada'] },
      { id: 'shadow-lamp', name: 'SHADOW LAMP', category: 'Luminárias', page: 8, status: 'coming_soon', tags: ['Lâmpada de Sombra', 'Em Breve'] },
      { id: 'candle-holder', name: 'CANDLE HOLDER', category: 'Decoração', page: 8, status: 'coming_soon', tags: ['Castiçal Gótico', 'Em Breve'] },
      { id: 'incense-burner', name: 'INCENSE BURNER', category: 'Decoração & Mística', page: 8, status: 'coming_soon', tags: ['Incensário Dragão', 'Em Breve'] },
      { id: 'headphone-stands', name: 'HEADPHONE STANDS', category: 'Suportes Gamer', page: 8, status: 'coming_soon', tags: ['Suporte Especial', 'Em Breve'] }
    ]
  },
  {
    pageNumber: 9,
    title: '2024 UPDATES | STL DO MAGO',
    subtitle: 'Pacotes e atualizações mensais completas disponibilizadas ao longo de 2024.',
    items: [
      { id: 'up24-jan', name: 'JANUARY 2024', category: 'Atualizações 2024', page: 9, status: 'available', folderUrl: 'https://drive.google.com', tags: ['Janeiro', '2024'] },
      { id: 'up24-feb', name: 'FEBRUARY 2024', category: 'Atualizações 2024', page: 9, status: 'available', folderUrl: 'https://drive.google.com', tags: ['Fevereiro', '2024'] },
      { id: 'up24-mar', name: 'MARCH 2024', category: 'Atualizações 2024', page: 9, status: 'available', folderUrl: 'https://drive.google.com', tags: ['Março', '2024'] },
      { id: 'up24-apr', name: 'APRIL 2024', category: 'Atualizações 2024', page: 9, status: 'available', folderUrl: 'https://drive.google.com', tags: ['Abril', '2024'] },
      { id: 'up24-may', name: 'MAY 2024', category: 'Atualizações 2024', page: 9, status: 'available', folderUrl: 'https://drive.google.com', tags: ['Maio', '2024'] },
      { id: 'up24-jun', name: 'JUNE 2024', category: 'Atualizações 2024', page: 9, status: 'available', folderUrl: 'https://drive.google.com', tags: ['Junho', '2024'] },
      { id: 'up24-jul', name: 'JULY 2024', category: 'Atualizações 2024', page: 9, status: 'available', folderUrl: 'https://drive.google.com', tags: ['Julho', '2024'] },
      { id: 'up24-aug', name: 'AUGUST 2024', category: 'Atualizações 2024', page: 9, status: 'available', folderUrl: 'https://drive.google.com', tags: ['Agosto', '2024'] },
      { id: 'up24-sep', name: 'SEPTEMBER 2024', category: 'Atualizações 2024', page: 9, status: 'available', folderUrl: 'https://drive.google.com', tags: ['Setembro', '2024'] },
      { id: 'up24-oct', name: 'OCTOBER 2024', category: 'Atualizações 2024', page: 9, status: 'available', folderUrl: 'https://drive.google.com', tags: ['Outubro', '2024'] },
      { id: 'up24-nov', name: 'NOVEMBER 2024', category: 'Atualizações 2024', page: 9, status: 'available', folderUrl: 'https://drive.google.com', tags: ['Novembro', '2024'] },
      { id: 'up24-dec', name: 'DECEMBER 2024', category: 'Atualizações 2024', page: 9, status: 'available', folderUrl: 'https://drive.google.com', tags: ['Dezembro', '2024'] }
    ]
  },
  {
    pageNumber: 10,
    title: '2025 UPDATES | STL DO MAGO',
    subtitle: 'Lançamentos mensais contínuos da assinatura e coleções de 2025.',
    items: [
      { id: 'up25-jan', name: 'JANUARY 2025', category: 'Atualizações 2025', page: 10, status: 'available', folderUrl: 'https://drive.google.com', tags: ['Janeiro', '2025'] },
      { id: 'up25-feb', name: 'FEBRUARY 2025', category: 'Atualizações 2025', page: 10, status: 'coming_soon', tags: ['Fevereiro', '2025', 'Em Breve'] },
      { id: 'up25-mar', name: 'MARCH 2025', category: 'Atualizações 2025', page: 10, status: 'coming_soon', tags: ['Março', '2025', 'Em Breve'] },
      { id: 'up25-apr', name: 'APRIL 2025', category: 'Atualizações 2025', page: 10, status: 'coming_soon', tags: ['Abril', '2025', 'Em Breve'] },
      { id: 'up25-may', name: 'MAY 2025', category: 'Atualizações 2025', page: 10, status: 'coming_soon', tags: ['Maio', '2025', 'Em Breve'] },
      { id: 'up25-jun', name: 'JUNE 2025', category: 'Atualizações 2025', page: 10, status: 'coming_soon', tags: ['Junho', '2025', 'Em Breve'] },
      { id: 'up25-jul', name: 'JULY 2025', category: 'Atualizações 2025', page: 10, status: 'coming_soon', tags: ['Julho', '2025', 'Em Breve'] },
      { id: 'up25-aug', name: 'AUGUST 2025', category: 'Atualizações 2025', page: 10, status: 'coming_soon', tags: ['Agosto', '2025', 'Em Breve'] },
      { id: 'up25-sep', name: 'SEPTEMBER 2025', category: 'Atualizações 2025', page: 10, status: 'coming_soon', tags: ['Setembro', '2025', 'Em Breve'] },
      { id: 'up25-oct', name: 'OCTOBER 2025', category: 'Atualizações 2025', page: 10, status: 'coming_soon', tags: ['Outubro', '2025', 'Em Breve'] },
      { id: 'up25-nov', name: 'NOVEMBER 2025', category: 'Atualizações 2025', page: 10, status: 'coming_soon', tags: ['Novembro', '2025', 'Em Breve'] },
      { id: 'up25-dec', name: 'DECEMBER 2025', category: 'Atualizações 2025', page: 10, status: 'coming_soon', tags: ['Dezembro', '2025', 'Em Breve'] }
    ]
  },
  {
    pageNumber: 11,
    title: 'BIGESTPACKS © | STL DO MAGO',
    notice:
      'Sharing the download links with others will result in loss of access without a refund. Please keep them private to continue enjoying your exclusive content.\n\nStay tuned for exciting updates! Happy printing! 🎨✨\nPack de STL para Imprimir RPG e Coleções 3D',
    items: []
  }
];
