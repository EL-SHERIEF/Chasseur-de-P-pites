import { Price } from "@/types/price";

export const pricingData: Price[] = [
  {
    id: "price_1NQk5TLtGdPVhGLecVfQ7mn0",
    unit_amount: 100 * 100,
    nickname: "Essentiel",
    offers: [
      "1 Utilisateur",
      "Surveillance de base",
      "Alertes par email",
      "Rapports hebdomadaires",
      "Support par email",
      "Accès aux fonctionnalités de base",
    ],
  },
  {
    id: "price_1NQk55LtGdPVhGLefU8AHqHr",
    unit_amount: 200 * 100,
    nickname: "Pro",
    offers: [
      "5 Utilisateurs",
      "Surveillance avancée",
      "Alertes en temps réel",
      "Rapports personnalisés",
      "Support prioritaire",
      "Accès à toutes les fonctionnalités",
    ],
  },
  {
    id: "price_1NQk4eLtGdPVhGLeZsZDsCNz",
    unit_amount: 300 * 100,
    nickname: "Entreprise",
    offers: [
      "Utilisateurs illimités",
      "Surveillance multi-comptes",
      "API dédiée",
      "Rapports sur mesure",
      "Support dédié 24/7",
      "Solutions personnalisées",
    ],
  },
];
