import estanco1 from "../assets/imgs/estanco/1.jpeg";
import estanco2 from "../assets/imgs/estanco/2.jpeg";
import estanco3 from "../assets/imgs/estanco/3.jpeg";

import metro1 from "../assets/imgs/metro/1.jpg";

import plazuela1 from "../assets/imgs/plazuela/1.jpeg";
import plazuela2 from "../assets/imgs/plazuela/2.jpeg";
import plazuela3 from "../assets/imgs/plazuela/3.jpeg";
import plazuela4 from "../assets/imgs/plazuela/4.jpeg";

import civic1 from "../assets/imgs/civic/1.jpeg";
import civic2 from "../assets/imgs/civic/2.jpeg";
import civic3 from "../assets/imgs/civic/3.jpeg";
import civic4 from "../assets/imgs/civic/4.jpeg";
import civic5 from "../assets/imgs/civic/5.jpeg";
import civic6 from "../assets/imgs/civic/6.jpeg";
import civic7 from "../assets/imgs/civic/7.jpeg";

import exteriorplus1 from "../assets/imgs/exteriorplus/1.jpeg";
import exteriorplus2 from "../assets/imgs/exteriorplus/2.jpeg";

import kawasaki1 from "../assets/imgs/kawasaki/1.jpeg";
import kawasaki2 from "../assets/imgs/kawasaki/2.jpeg";
import kawasaki3 from "../assets/imgs/kawasaki/3.jpeg";
import kawasaki4 from "../assets/imgs/kawasaki/4.jpeg";

import bowling1 from "../assets/imgs/bowling/1.jpeg";

import glovo1 from "../assets/imgs/glovo/1.jpeg";
import glovo2 from "../assets/imgs/glovo/2.jpeg";

import golfGti1 from "../assets/imgs/golf-gti/1.jpg";
import golfGti2 from "../assets/imgs/golf-gti/2.jpg";
import golfGti3 from "../assets/imgs/golf-gti/3.jpg";
import golfGti4 from "../assets/imgs/golf-gti/4.jpg";
import golfGti5 from "../assets/imgs/golf-gti/5.jpg";
import golfGti6 from "../assets/imgs/golf-gti/6.jpg";
import golfGti7 from "../assets/imgs/golf-gti/7.jpg";

export const projects = [
    {
        slug: "golf-gti",
        name: "Golf GTi",
        category: "motor",
        feature: true,
        images: [golfGti1, golfGti2, golfGti3, golfGti4, golfGti5, golfGti6, golfGti7],
        description: "Cortado y montado a mano en vinilo de corte para una exposición de coches de carreras.",
        tags: ["Coche", "Premium"],
    },
    {
        slug: "honda-civic",
        name: "Honda Civic",
        category: "motor",
        images: [civic1, civic2, civic3, civic4, civic5, civic6, civic7],
        description: "Diseñado y cortado para personalizar este Civic.",
        tags: ["Coche", "Estándar"],
    },
    {
        slug: "kawasaki",
        name: "Kawasaki",
        category: "motor",
        images: [kawasaki1, kawasaki2, kawasaki3, kawasaki4],
        description: "Vinilos a medida para darle personalidad a la moto de un amigo.",
        tags: ["Moto", "Estándar"],
    },
    {
        slug: "exteriorplus",
        name: "ExteriorPlus",
        category: "rotulos",
        images: [exteriorplus1, exteriorplus2],
        description: "Rotulación corporativa cortada en vinilo estándar para los vehículos de la empresa.",
        tags: ["Vehículos de empresa", "Estándar"],
    },
    {
        slug: "glovo",
        name: "Glovo",
        category: "rotulos",
        images: [glovo1, glovo2],
        description: "Rotulación a medida cortada en vinilo premium para los vehículos de reparto.",
        tags: ["Vehículos de empresa", "Premium"],
    },
    {
        slug: "metro",
        name: "Metro",
        category: "rotulos",
        images: [metro1],
        description: "Rotulación de la furgoneta de la empresa.",
        tags: ["Logo", "Estándar"],
    },
    {
        slug: "estanco",
        name: "Estanco",
        category: "rotulos",
        images: [estanco1, estanco2, estanco3],
        description: "Diseñado y cortado para arreglar el antiguo cartel que tenían puesto en la fachada.",
        tags: ["Cartel", "Premium"],
    },
    {
        slug: "la-plazuela",
        name: "La Plazuela",
        category: "rotulos",
        images: [plazuela1, plazuela2, plazuela3, plazuela4],
        description: "Rediseño y corte del cartel de la fachada para darle una vuelta a la imagen del local.",
        tags: ["Cartel", "Premium"],
    },
    {
        slug: "bowling",
        name: "Bowling",
        category: "rotulos",
        images: [bowling1],
        description: "Grafismo y numeración de las pistas de la bolera de Chamartín.",
        tags: ["Interior", "Estándar"],
    },
];

export const categories = {
    motor: {
        code: "ss/02.motor",
        label: "Motor",
        description: "Coches, motos y vehículos comerciales rotulados a mano.",
    },
    rotulos: {
        code: "ss/03.rotulos",
        label: "Rótulos",
        description: "Carteles, escaparates e interiorismo para negocios.",
    },
};

// Mapping from legacy numeric URLs (/1, /2, ...) to new slugs.
// Preserves incoming links from anywhere the old URLs were shared.
export const legacyIdToSlug = {
    "1": "estanco",
    "2": "metro",
    "3": "la-plazuela",
    "4": "honda-civic",
    "5": "exteriorplus",
    "6": "kawasaki",
    "7": "bowling",
    "8": "glovo",
};
