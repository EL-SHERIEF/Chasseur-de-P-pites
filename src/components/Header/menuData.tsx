import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Accueil",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "À propos",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "Tarifs",
    path: "/pricing",
    newTab: false,
  },
  {
    id: 4,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
  {
    id: 5,
    title: "Blog",
    path: "/blogs",
    newTab: false,
  },
  {
    id: 6,
    title: "Pages",
    newTab: false,
    submenu: [
      {
        id: 61,
        title: "À propos",
        path: "/about",
        newTab: false,
      },
      {
        id: 62,
        title: "Tarifs",
        path: "/pricing",
        newTab: false,
      },
      {
        id: 63,
        title: "Contact",
        path: "/contact",
        newTab: false,
      },
      {
        id: 64,
        title: "Blog",
        path: "/blogs",
        newTab: false,
      },
      {
        id: 66,
        title: "S'inscrire",
        path: "/signup",
        newTab: false,
      },
      {
        id: 67,
        title: "Se connecter",
        path: "/signin",
        newTab: false,
      },
      {
        id: 68,
        title: "Erreur",
        path: "/error",
        newTab: false,
      },
    ],
  },
];
export default menuData;
