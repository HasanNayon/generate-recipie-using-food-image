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
    icon: "/skills/react.svg",
    TeamType: TeamType.Chilling,
    githubUrl: "https://github.com/nixrajput/ecommerce-web-reactjs",
    url: "https://nixlab-shop.cyclic.app",
    tags: ["Machine Learning", "Deep Learning", "Python", "Data Structures"],
  },
  {
    id: "wqerwqtwert",
    title: "qwretqwer",
    description:
      "A video calling mobile application developed using Flutter and Agora SDK that allows users to call each other face to face.",
    icon: "/skills/flutter.svg",
    TeamType: TeamType.Active,
    githubUrl: "https://github.com/nixrajput/video-calling-app-flutter",
    url: "https://www.nixlab.co.in/projects/livebox-app",
    tags: ["Flutter", "Dart", "GetX", "Agora SDK"],
  }
];

export default team;

