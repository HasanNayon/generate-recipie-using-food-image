import type { INavMenuItem } from "@/types";

const footerMenu: INavMenuItem[][] = [
  [
    {
      id: "home",
      title: "Home",
      path: "/",
      section: "home",
    },
    {
      id: "about",
      title: "About Us",
      path: "/#about",
      section: "about",
    },
    {
      id: "team",
      title: "Team",
      path: "/#team",
      section: "team",
    },
  ],

  [
   {
      id: "faq",
      title: "FAQ",
      path: "/#faq",
      section: "faq",
    },
  ],

  [
    {
      id: "contact",
      title: "Contact Us",
      path: "/#contact",
      section: "contact",
    },
  ],
];

export default footerMenu;
