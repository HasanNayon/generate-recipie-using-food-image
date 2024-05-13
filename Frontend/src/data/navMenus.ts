import type { INavMenuItem } from "@/types";

const navMenus: INavMenuItem[] = [
  {
    id: "home",
    title: "Home",
    path: "/",
    section: "home",
  },
  {
    id: "contact",
    title: "Contact Us",
    path: "/contact",
    section: "contact",
  },
  {
    id: "about",
    title: "About Us",
    path: "/about",
    section: "about",
  },
  {
    id: "generateai",
    title: "Generate Recipe",
    path: "/generateai",
    section: "generateai",
  }
];

export default navMenus;
