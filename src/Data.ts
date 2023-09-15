import { CaroselloItem, ElementoNavigazione, WhyNoiCard } from "./Models";

import mac from "./assets/images/mac.jpg";
import assemblaggio from "./assets/images/assemblaggio pc.jpg";
import pastaTermica from "./assets/images/pasta termica.jpg";
import os from "./assets/images/os download.jpg";
import cambioSsd from "./assets/images/cambio ssd.jpg";
import serviziAffidabili from "./assets/images/handshake.png";
import qualificato from "./assets/images/qualificato.png";
import onesta from "./assets/images/rating.png";

// Navigazione nel footer
export const homeLinks: ElementoNavigazione[] = [
  {
    idRef: "navbar",
    displayString: "Presentazione",
  },
  {
    idRef: "chi-siamo",
    displayString: "Chi Siamo",
  },
  {
    idRef: "servizi",
    displayString: "Servizi",
  },
  {
    idRef: "why-us",
    displayString: "Perché Noi",
  },
];

export const infoLinks: ElementoNavigazione[] = [];

// Carosello - Home
export const caroselloItems: CaroselloItem[] = [
  {
    imgPath: mac,
    title: "Sostituzione Display PC & MAC",
    description:
      "Neanche la riparazione del delicato Mac spaventa i nostri tecnici, che trattano e sostituiscono il display con professionalità e tempestività.",
  },
  {
    imgPath: assemblaggio,
    title: "Assemblaggio PC Desktop",
    description:
      "Al fine di offrire un’esperienza più completa, assembliamo in tempo utile computer desktop dotati di un numero più o meno illimitato di componenti.",
  },
  {
    imgPath: pastaTermica,
    title: "Rettifica Sistema Di Raffreddamento PC & MAC",
    description:
      "Al termine di ogni riparazione puliamo il computer dalla polvere e se necessario ne sostituiamo la pasta termica in modo da evitare il surriscaldamento.",
  },
  {
    imgPath: os,
    title: "Installazione Windows & MAC OS",
    description:
      "Faxtornet garantisce un’installazione rapida e sicura del sistema operativo per un’esperienza informatica fluida e ottimizzata.",
  },
  {
    imgPath: cambioSsd,
    title: "Migrazione Su Dischi A Stato Solido Mantenendo Propri Dati",
    description:
      "In caso di rottura di un HDD o SSD, non buttare via tutto! Siamo in grado di recuperare i dati e inserirli in una nuova unità di salvataggio dati.",
  },
];

// Why Noi - Home
export const whyNoiItems: WhyNoiCard[] = [
  {
    imgPath: serviziAffidabili,
    title: "Paghi solo se sei soddisfatto",
    descrizione:
      "Soddisfare il cliente è la nostra priorità. Se non sei soddisfatto, è semplice: non paghi!",
  },
  {
    imgPath: qualificato,
    title: "Personale esperto e qualificato",
    descrizione:
      "Ormai è qualcosa che dicono tutti, ma qui è veramente così: i nostri tecnici vantano anni di esperienza e specializzazione nell’ambito della riparazione e assistenza computer.",
  },
  {
    imgPath: onesta,
    title: "Onestà",
    descrizione:
      "È un valore fondamentale, in cui crediamo fermamente. Per noi, l’onestà è anzitutto chiarezza e trasparenza con il cliente: se un problema non te lo possiamo risolvere, non ti faremo perdere tempo inutilmente.",
  },
];
