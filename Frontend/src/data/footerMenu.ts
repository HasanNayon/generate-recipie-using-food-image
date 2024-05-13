import type { INavMenuItem } from "@/types";

const footerMenu: INavMenuItem[][] = [
  [
    {
      id: "home",
      title: "Home",
      path: "/",
      section: "home",
    }
  ],
  [
    {
      id: "about",
      title: "About Us",
      path: "/aboutus",
      section: "about",
    }
  ],
  [
    {
      id: "contact",
      title: "Contact Us",
      path: "/contact",
      section: "contact",
    },
  ],
  [
    {
      id: "generateai",
      title: "Generate Recipe",
      path: "/generateai",
      section: "generateai",
    },
  ],
];

export default footerMenu;
