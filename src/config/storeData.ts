/**
 * ============================================================================
 * LOJA DAS BICICLETAS — CONFIGURAÇÃO CENTRAL DO SITE & GUIA DO LOJISTA
 * ============================================================================
 * Este arquivo centraliza todas as informações da loja, telefones, endereços,
 * ofertas do mês, serviços da oficina e caminhos das imagens.
 * 
 * Para editar qualquer informação, basta alterar os valores abaixo.
 */

// ============================================================================
// 1. CONFIGURAÇÃO DE CONTATO E DADOS DA LOJA
// ============================================================================
export const STORE_CONFIG = {
  name: "Loja das Bicicletas",
  city: "Rolândia - PR",
  
  /**
   * NÚMERO DO WHATSAPP (ÚNICA VARIÁVEL PARA TODO O SITE):
   * Insira o número completo com DDI (55 para Brasil) + DDD + Telefone (apenas números).
   * Exemplo: "554330830499" ou se celular: "5543999998888".
   * Todos os botões do site que abrem o WhatsApp utilizam automaticamente esta variável.
   */
  whatsappNumber: "554330630499",

  // Telefone fixo informado na fachada
  phoneDisplay: "(43) 3063-0499",

  // Endereço físico e referências
  address: {
    streetPrimary: "Avenida Atlanta, 695",
    city: "Rolândia",
    state: "PR",
    cep: "86606-008",
    // Texto formatado para exibição principal
    fullDisplay: "Avenida Atlanta, 695 — Rolândia - PR, CEP 86606-008",
    referenceNote: "Ponto de fácil acesso em Rolândia. Consulte nossa localização exata no mapa abaixo.",
  },

  // Horários de atendimento
  businessHours: [
    { days: "Segunda a Sexta", hours: "08:00 às 18:00" },
    { days: "Sábado", hours: "08:00 às 12:30" },
    { days: "Domingo e Feriados", hours: "Fechado" },
  ],

  /**
   * LINKS DE NAVEGAÇÃO EXTERNOS:
   * Abrem diretamente as rotas sem exigir permissão prévia de localização.
   */
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Loja+das+Bicicletas+Avenida+Atlanta+695+Rolandia+PR",
  wazeUrl: "https://waze.com/ul?q=Avenida+Atlanta+695+Rolandia+PR",
};

/**
 * Função utilitária para gerar links do WhatsApp com mensagem pré-preenchida
 */
export function getWhatsAppLink(customMessage?: string): string {
  const defaultMsg = "Olá! Gostaria de falar com a Loja das Bicicletas.";
  const text = encodeURIComponent(customMessage || defaultMsg);
  return `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${text}`;
}

/**
 * Utilitário de formatação de moeda brasileira (R$ 999,90)
 */
export function formatCurrency(value?: number | string | null): string {
  if (value === undefined || value === null || value === "") return "";
  const numeric = typeof value === "string" ? parseFloat(value.replace(",", ".")) : value;
  if (isNaN(numeric)) return "";
  return numeric.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

// ============================================================================
// 2. SEÇÃO HERO (INÍCIO)
// ============================================================================
export const HERO_DATA = {
  tagline: "Fachada Azul Tradicional em Rolândia - PR",
  title: "Sua próxima aventura começa sobre duas rodas.",
  subtitle: "Da primeira pedalada às grandes aventuras, encontre a bicicleta ideal para o seu dia a dia e conte com oficina mecânica especializada.",
  ctaWhatsApp: "Fale pelo WhatsApp",
  ctaCatalog: "Encontre sua bicicleta",
  // Imagem principal com opções de enquadramento
  image: {
    src: "./src/assets/images/Firstimage.webp",
    alt: "Bicicleta moderna de alto desempenho em estrada cênica",
    objectFit: "object-cover" as "object-cover" | "object-contain",
    objectPosition: "object-center" as "object-center" | "object-top" | "object-bottom",
  },
};

// ============================================================================
// 3. AS TRÊS CATEGORIAS PRINCIPAIS DE BICICLETAS
// ============================================================================
export interface CategoryImage {
  src: string;
  alt: string;
  caption?: string;
  objectFit?: "object-cover" | "object-contain";
  objectPosition?: string;
}

export interface BikeCategory {
  id: string;
  name: string;
  title: string;
  description: string;
  buttonLabel: string;
  whatsappMessage: string;
  images: CategoryImage[];
  highlights: string[];
}

export const BIKE_CATEGORIES: BikeCategory[] = [
  {
    id: "infantil",
    name: "Bicicletas Infantis",
    title: "A alegria da primeira pedalada.",
    description: "Grandes aventuras começam com pequenas pedaladas. Encontre uma bicicleta para acompanhar cada nova descoberta, com segurança, cores vibrantes e muita diversão para todas as idades.",
    buttonLabel: "Ver opções infantis",
    whatsappMessage: "Olá! Gostaria de consultar os modelos, tamanhos e cores de bicicletas infantis disponíveis na Loja das Bicicletas.",
    highlights: ["Aros 12, 16, 20 e 24", "Modelos com rodinhas de apoio e de equilíbrio", "Segurança, cores alegres e durabilidade"],
    images: [
      {
        src: "./src/assets/images/kids_bicycle_1.jpg",
        alt: "Bicicleta infantil com rodinhas de apoio e cestinha colorida",
        caption: "Bicicleta com rodinhas de apoio e acessórios aro 12",
        objectFit: "object-cover",
        objectPosition: "object-center",
      },
      {//Mudar Aqui//
        src: "./src/assets/images/kids_bicycle_2.jpg",
        alt: "Bicicleta de equilíbrio balance bike para primeiros passos",
        caption: "Tamanho aro 20 modelo cross",
        objectFit: "object-cover",
        objectPosition: "object-center",
      },
      {
        src: "./src/assets/images/kids_bicycle_3.jpg",
        alt: "Bicicleta juvenil esportiva aro 20 com marchas para crianças maiores",
        caption: "Modelos aro 24 ",
        objectFit: "object-cover",
        objectPosition: "object-center",
      },
    ],
  },
  {
    id: "urbana",
    name: "Bicicletas para Trabalho e Dia a Dia",
    title: "Seu caminho. Seu ritmo.",
    description: "Mais praticidade para a rotina, liberdade para se deslocar e economia para chegar aonde você precisa. Modelos confortáveis, resistentes e pensados para o trânsito da cidade.",
    buttonLabel: "Encontrar minha bicicleta",
    whatsappMessage: "Olá! Gostaria de conhecer as opções de bicicletas urbanas para trabalho e transporte do dia a dia na Loja das Bicicletas.",
    highlights: ["Conforto postural e ergonomia para trajetos diários", "Opções com bagageiro traseiro e cesta frontal", "Economia real no combustível e transporte diário"],
    images: [
      {
        src: "./src/assets/images/urban_bicycle_1.jpg",
        alt: "Bicicleta urbana resistente com alforje e bagageiro para o dia a dia",
        caption: "Equipada com bagageiro e cesta para suas compras e rotina",
        objectFit: "object-cover",
        objectPosition: "object-center",
      },
      {
        src: "./src/assets/images/urban_bicycle_2.jpg",
        alt: "Bicicleta urbana moderna commuter para transporte e trabalho",
        caption: "Estilo moderno com várias opções de cores",
        objectFit: "object-cover",
        objectPosition: "object-center",
      },
      {
        src: "./src/assets/images/urban_bicycle_3.jpg",
        alt: "Bicicleta clássica retrô comfort com cesto de vime",
        caption: "Geometria confortável com postura ereta e relaxada",
        objectFit: "object-cover",
        objectPosition: "object-center",
      },
    ],
  },
  {
    id: "mountain-bike",
    name: "Mountain Bike e Aventura",
    title: "Vá além do caminho conhecido.",
    description: "Explore novos caminhos, encare subidas e descubra até onde suas pedaladas podem levar você. Bicicletas com suspensão, marchas precisas e pneus aderentes para terra e asfalto.",
    buttonLabel: "Explorar mountain bikes",
    whatsappMessage: "Olá! Gostaria de consultar as opções de mountain bikes (MTB) disponíveis na Loja das Bicicletas.",
    highlights: ["Aro 29 com quadros leves em alumínio", "Freios a disco mecânicos e hidráulicos", "Variedade de tamanhos"],
    images: [
      {
        src: "./src/assets/images/mountain_bike_1.jpg",
        alt: "Mountain bike robusta pronta para trilhas e estradão de terra",
        caption: "Robusta para estradas de terra, trilhas e asfalto",
        objectFit: "object-cover",
        objectPosition: "object-center",
      },
      {
        src: "./src/assets/images/mountain_bike_2.jpg",
        alt: "Mountain bike full suspension em cenário de montanhas",
        caption: "Variedade de cores e tamanhos de quadros",
        objectFit: "object-cover",
        objectPosition: "object-center",
      },
      {
        src: "./src/assets/images/mountain_bike_3.jpg",
        alt: "Mountain bike hardtail aro 29 em trilha na mata",
        caption: "Modelos personalizados para o gosto do cliente",
        objectFit: "object-cover",
        objectPosition: "object-center",
      },
    ],
  },
];

// ============================================================================
// 4. OFICINA ESPECIALIZADA E VENDA DE PEÇAS
// ============================================================================
export const WORKSHOP_SECTION = {
  mainTitle: "Sua bicicleta em boas mãos.",
  complementaryText: "Manutenção, reparos e peças para manter sua bicicleta em boas condições. Conte com uma equipe especializada para cuidar da sua bike e ajudar você a pedalar com mais tranquilidade e segurança.",
  
  mechanicsBlock: {
    title: "Manutenção e revisão de bicicletas",
    description: "Da manutenção preventiva aos ajustes e reparos, cuidamos da sua bicicleta para ajudar a garantir um funcionamento adequado, mais conforto e segurança durante suas pedaladas.",
    services: [
      { id: "rev", name: "Revisão e manutenção preventiva", desc: "Aperto geral, lubrificação, checagem estrutural e limpeza técnica." },
      { id: "fre", name: "Ajustes de freios e marchas", desc: "Regulagem fina de câmbios e sangria/troca de pastilhas de freio." },
      { id: "com", name: "Regulagem e substituição de componentes", desc: "Instalação de coroas, cabos, conduítes e peças de transmissão." },
      { id: "rod", name: "Manutenção de rodas e pneus", desc: "Alinhamento, desempeno de rodas, troca de câmaras e pneus." },
      { id: "dia", name: "Diagnóstico de problemas mecânicos", desc: "Identificação precisa de ruídos, folgas e desgastes irregulares." },
      { id: "rep", name: "Reparos e serviços personalizados", desc: "Soluções sob medida para o estado e necessidade de cada modelo." },
    ],
    highlightQuote: "Mecânicos especializados e atenção aos detalhes.",
    highlightText: "Cada bicicleta tem suas particularidades. Nossa equipe avalia as necessidades de cada modelo e busca realizar os serviços adequados, com atenção à qualidade dos ajustes e ao bom funcionamento dos componentes.",
    buttonLabel: "Tire suas dúvidas",
    whatsappMessage: "Olá! Gostaria de tirar dúvidas ou consultar a disponibilidade para revisão e manutenção na oficina da Loja das Bicicletas.",
    image: {
      src: "/src/assets/images/workshop_mechanic_1791572173944.jpg",
      alt: "Mecânico profissional ajustando bicicleta no cavalete em oficina organizada",
      objectFit: "object-cover" as "object-cover" | "object-contain",
    },
  },

  partsBlock: {
    title: "Peças e componentes para sua bicicleta",
    description: "Precisa substituir uma peça ou encontrar o componente certo para sua bicicleta? Consulte nossas opções de peças e acessórios para manutenção, reposição e conservação da sua bike.",
    partsExamples: [
      "Correntes e cassetes de marchas",
      "Pastilhas e sapatas de freio",
      "Pneus urbanos e para terra",
      "Câmaras de ar de diversos aros",
      "Cabos de aço e conduítes",
      "Pedais, manoplas e selins confortáveis",
    ],
    highlightQuote: "A peça certa para sua bicicleta começa com a orientação certa.",
    highlightText: "Entre em contato para consultar disponibilidade, compatibilidade e valores. Nossa equipe poderá ajudar você a identificar as opções adequadas para o seu modelo de bicicleta.",
    buttonLabel: "Consultar peças disponíveis",
    whatsappMessage: "Olá! Preciso de peças ou componentes para minha bicicleta e gostaria de consultar a disponibilidade e valores na Loja das Bicicletas.",
    image: {
      src: "/src/assets/images/bike_components_1791572182215.jpg",
      alt: "Componentes técnicos de bicicleta alinhados sobre bancada de trabalho",
      objectFit: "object-cover" as "object-cover" | "object-contain",
    },
  },

  trustCallout: {
    title: "Mais cuidado com sua bicicleta. Mais confiança em cada pedalada.",
    subtitle: "Conte com a Loja das Bicicletas para consultar peças, esclarecer dúvidas e encontrar soluções para a manutenção da sua bicicleta.",
    buttonLabel: "Fale com nossa equipe",
    whatsappMessage: "Olá! Gostaria de falar com a equipe da Loja das Bicicletas sobre atendimento ou dúvidas.",
  },
};

// ============================================================================
// 5. SEÇÃO ESPECIAL — OFERTA DO MÊS
// ============================================================================
/**
 * REQUISITO DE ATUALIZAÇÃO MANUAL MENSAL:
 * Atualize as duas ofertas abaixo diretamente alterando os campos:
 * - name: Nome da bicicleta em promoção
 * - description: Descrição curta e honesta do modelo
 * - currentPrice: Preço atual (ex: 1490.00 ou 999.90)
 * - previousPrice: Preço anterior opcional (ex: 1790.00). Deixe `null` se não houver promoção de comparação.
 * - image: Caminho da foto do produto
 * - whatsappMessage: Mensagem pré-formatada para o WhatsApp
 */
export interface MonthlyOffer {
  id: string;
  name: string;
  description: string;
  currentPrice: number | null;
  previousPrice: number | null;
  image: {
    src: string;
    alt: string;
    objectFit: "object-cover" | "object-contain";
  };
  whatsappMessage: string;
}

export const MONTHLY_OFFERS: MonthlyOffer[] = [
  // --- OFERTA 1 DO MÊS ---
  {
    id: "oferta-1",
    name: "Mountain Bike Aro 29 Marca SOUTH",
    description: "Quadro resistente em alumínio, suspensão dianteira com trava mecânica, transmissão com trocas ágeis e freios a disco para segurança em asfalto e estradão de terra.",
    currentPrice: 999.00,
    previousPrice: 1290.00, // Preço anterior (opcional). Se não houver, coloque `null`.
    image: {
      src: "./src/assets/images/promo_bike_1.jpg",
      alt: "Mountain Bike Aro 29 Sport Disc em acabamento azul royal metálico",
      objectFit: "object-cover",
    },
    whatsappMessage: "Olá! Vi a Oferta do Mês da 'Mountain Bike Aro 29' no site e gostaria de saber as opções de cores, tamanhos e condições de pagamento!",
  },

  // --- OFERTA 2 DO MÊS ---
  {
    id: "oferta-2",
    name: "Bicicleta Urbana VeloCity Híbrida",
    description: "Ideal para o dia a dia, trabalho e lazer na cidade. Acompanha bagageiro funcional, geometria confortável que alivia as costas e componentes de baixa manutenção.",
    currentPrice: 1199.90,
    previousPrice: 1399.00, // Preço anterior (opcional). Se não houver, coloque `null`.
    image: {
      src: "./src/assets/images/promo_bike_2.jpg",
      alt: "Bicicleta urbana híbrida VeloCity com bagageiro e acabamento fosco",
      objectFit: "object-cover",
    },
    whatsappMessage: "Olá! Vi a Oferta do Mês da 'Bicicleta Urbana VeloCity' no site e gostaria de consultar a disponibilidade e formas de pagamento!",
  },
];

// ============================================================================
// 6. CHAMADA FINAL PARA AÇÃO (CTA DE ENCERRAMENTO)
// ============================================================================
export const FINAL_CTA = {
  title: "Seu próximo destino começa com uma pedalada.",
  subtitle: "Encontre a bicicleta ideal para sua rotina ou sua próxima aventura. Entre em contato e consulte as opções disponíveis.",
  buttonLabel: "Fale com a Loja das Bicicletas",
  whatsappMessage: "Olá! Gostaria de conversar com a equipe da Loja das Bicicletas em Rolândia.",
};

// ============================================================================
// 7. GUIA EXPLICATIVO PARA O PROPRIETÁRIO / ADMINISTRADOR
// ============================================================================
export const ADMIN_GUIDE = [
  {
    topic: "1. Onde trocar as fotografias e carrosséis de cada seção",
    instruction: "Todas as fotos estão listadas em `src/config/storeData.ts`. Para as categorias (Infantil, Urbana e Mountain Bike), cada uma possui um carrossel com 3 fotos no array `images`. Para trocar qualquer foto, adicione seu arquivo na pasta `src/assets/images/` e atualize o campo `src` e `caption` (legenda do slide). Você também pode controlar `objectFit` ('object-cover' ou 'object-contain').",
  },
  {
    topic: "2. Onde alterar os preços e nomes das duas ofertas mensais",
    instruction: "No arquivo `src/config/storeData.ts`, localize o bloco `MONTHLY_OFFERS`. Altere `name`, `description`, `currentPrice` (ex: 1250.00) e `previousPrice` (coloque `null` se não quiser exibir preço antigo). O site formata os valores automaticamente no padrão brasileiro (R$).",
  },
  {
    topic: "3. Onde alterar o número do WhatsApp",
    instruction: "Em `src/config/storeData.ts`, no topo do arquivo, altere apenas a variável `STORE_CONFIG.whatsappNumber = '554330830499'`. Todos os botões do cabeçalho, hero, categorias, oficina, ofertas e botão flutuante serão atualizados simultaneamente.",
  },
  {
    topic: "4. Onde alterar o endereço e os links de navegação",
    instruction: "Em `src/config/storeData.ts`, no bloco `STORE_CONFIG.address`, você pode atualizar as ruas, CEP e referências. Os links de rotas do Google Maps e Waze ficam no mesmo bloco em `googleMapsUrl` e `wazeUrl`.",
  },
  {
    topic: "5. Como visualizar o site localmente",
    instruction: "Abra o terminal na pasta do projeto e execute: `npm install` e depois `npm run dev`. O site estará disponível em `http://localhost:3000` com atualização imediata.",
  },
  {
    topic: "6. Como publicar em hospedagem gratuita",
    instruction: "Execute `npm run build` para gerar a pasta `dist`. Você pode enviar para o Vercel (conectando seu GitHub ou com `vercel deploy`), Netlify (arrastando a pasta `dist`), GitHub Pages ou Firebase Hosting gratuitamente.",
  },
];
