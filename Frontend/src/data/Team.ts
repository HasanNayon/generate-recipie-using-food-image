import { ITeamItem, ProjectType, TeamType } from "@/types";

const team: ITeamItem[] = [
  {
    id: "Mohammad Hamim",
    title: "Mohammad Hamim",
    description:
      "Full Stack Developer | Expert in React.js, Next.js, Python Flask, and Java | Agile Enthusiast | Proven Problem Solver | Strong Documentation Skills",
    icon: "/icons/profilepic.svg",
    TeamType: TeamType.Chilling,
    githubUrl: "https://github.com/md_hameem",
    url: "https://linkedin.com/in/md_hameem",
    tags: ["Next.js", "React", "Flask", "Java", "TensorFlow"],
  },
  {
    id: "Md Raziul Hasan Nayon",
    title: "Md Raziul Hasan Nayon",
    description:
      "Machine Learning || Software Engineering Student at ZZU",
    icon: "/icons/nayon.svg",
    TeamType: TeamType.Chilling,
    githubUrl: "https://github.com/nixrajput/ecommerce-web-reactjs",
    url: "https://nixlab-shop.cyclic.app",
    tags: ["Machine Learning", "Deep Learning", "Python", "Data Structures"],
  },
  {
    id: "Tamim",
    title: "Nishat Bin Md Harun",
    description:
      "Dynamic Software Engineer, Currently study Software Engineering at Zhengzhou University.",
    icon: "/icons/tamim.svg",
    TeamType: TeamType.Chilling,
    githubUrl: "https://github.com/nixrajput/video-calling-app-flutter",
    url: "https://www.nixlab.co.in/projects/livebox-app",
    tags: ["C", "Java", "DSA", "HTML", "CSS", "javascript"],
  }
];

export default team;

