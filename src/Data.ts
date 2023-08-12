import { CaroselloItem, ElementoNavigazione } from "./Models";

import mac from "./assets/images/mac.jpg";
import assemblaggio from "./assets/images/assemblaggio pc.jpg";
import pastaTermica from "./assets/images/pasta termica.jpg";
import os from "./assets/images/os download.jpg";
import cambioSsd from "./assets/images/cambio ssd.jpg";

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
      "Neanche la riparazione del delicato Mac spaventa i nostri tecnici, che senza problemi, trattano il problema con professionalità e tempestività.",
  },
  {
    imgPath: assemblaggio,
    title: "Assemblaggio PC Desktop",
    description:
      "Al fine di offrire un’esperienza più completa, assembliamo in tempo utile computer desktop dal qualsiasi numero di componenti.",
  },
  {
    imgPath: pastaTermica,
    title: "Rettifica Sistema Di Raffreddamento PC & MAC",
    description:
      "Al termine di ogni riparazione puliamo il computer dalla polvere e, se necessario, ne sostituiamo la pasta termica. Così da evitare il surriscaldamento.",
  },
  {
    imgPath: os,
    title: "Installazione Windows & MAC OS",
    description:
      "Faxtornet offre l'installazione rapida e affidabile del sistema operativo, per un'esperienza informatica fluida e ottimizzata.",
  },
  {
    imgPath: cambioSsd,
    title: "Migrazione Su Dischi A Stato Solido Mantenendo Propri Dati",
    description:
      "Nel caso vi si sia rotto un HDD o SSD non c’è problema, i nostri tecnici sono in grado di recuperare i dati e inserirli in una nuova unità di salvataggio dati.",
  },
];
