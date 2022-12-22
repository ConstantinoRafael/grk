import terrasDoMonte from "../assets/images/produtos/terras-do-monte.png";
import instintoForteBranco from "../assets/images/produtos/instinto-forte-branco.png";
import terrasDoMonteTinto from "../assets/images/produtos/terras-do-monte-tinto.png";
import thalassaWhite from "../assets/images/produtos/thalassa-white.png";
import okeanosAssyrtikoChardonnay from "../assets/images/produtos/okeanos-assyrtiko-chardonnay.png";

export const products = [
  {
    id: 1,
    nome: "TERRAS DO MONTE BRANCO",
    image: terrasDoMonte,
    tipo: "branco",
    pais: "Portugal",
    produtora: "Condado Portucalense",
    região: "Lisboa",
    uvas: "Vital, Malvasia Rui e Fernão Pires",
    safra: 2021,
    harmonizacao: "Peixes e grelhados, frutas e queijos brancos.",
    notas:
      "Vinho de cor amarela palha, de aspecto cristalino com aroma cítrico e pera madura. Sabores frescos e frutados na boca, final persistente.",
  },
  {
    id: 2,
    nome: "INSTINTO FORTE BRANCO",
    image: instintoForteBranco,
    tipo: "branco",
    pais: "Portugal",
    produtora: "Condado Portucalense",
    região: "Lisboa",
    uvas: "Fernão Pires, Arinto e Seara Nova",
    safra: 2021,
    harmonizacao: "Saladas, frutos do mar, carnes brancas.",
    notas:
      "Vinho branco de cor citrina, jovem e frutado com final de boca persistente e fresco.",
  },
  {
    id: 3,
    nome: "TERRAS DO MONTE TINTO",
    image: terrasDoMonteTinto,
    tipo: "tinto",
    pais: "Portugal",
    produtora: "Condado Portucalense",
    região: "Lisboa",
    uvas: "Aragonez, Caladoc e Carignan",
    safra: 2021,
    harmonizacao:
      "Carne vermelha, Sorrentinos, molho vermelho e massas no geral.",
    notas:
      "Vinho de cor vermelha intensa, elaborada a partir das melhores castas, possui aromas harmoniosos, distintos e marcantes, sabores suculentos e frutados.",
  },
  {
    id: 4,
    nome: "THALASSA WHITE",
    image: thalassaWhite,
    tipo: "branco",
    pais: "Grécia",
    produtora: "Domaine Costa Lazaridi",
    região: "Drama",
    uvas: "100% chardonnay",
    safra: 2019,
    harmonizacao: "Peixes grelhados, queijos brancos e saladas.",
    notas:
      "De coloração amarelo brilhante, aroma de frutas cítricas e tropicais com nuances florais. Na boca, toque macio e aveludado, boa acidez e final persistente.",
  },
  {
    id: 5,
    nome: "OKEANOS ASSYRTIKO CHARDONNAY",
    image: okeanosAssyrtikoChardonnay,
    tipo: "branco",
    pais: "Grécia",
    produtora: "Domaine Costa Lazaridi",
    região: "Drama",
    uvas: "Assyrtiko, Chardonnay",
    safra: 2019,
    harmonizacao: "Saladas, petiscos e pratos frescos ou grelhados à base de frutos do mar. Carpaccios e alguns embutidos também são boas opções.",
    notas:
      "De coloração amarelo palha brilhante com reflexos esverdeados. Aromas florais e de frutas cítricas, com toque mineral. Agradável acidez e frescor, com destaque para um sutil toque de nozes.",
  },
];
