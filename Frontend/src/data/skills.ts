import { ISkillListItem, SkillLevel } from "@/types";


const skills: ISkillListItem[] = [
  {
    title: "Programming Languages",
    items: [
      {
        title: "JavaScript",
        level: SkillLevel.Expert,
        icon: "/icons/javascript.svg",
      },
      {
        title: "Python",
        level: SkillLevel.Intermediate,
        icon: "/icons/python.svg",
      },
    ],
  },
  {
    title: "Frontend Development",
    items: [
      {
        title: "Next.js",
        level: SkillLevel.Expert,
        icon: "/icons/next.svg",
      },
      {
        title: "React.js",
        level: SkillLevel.Expert,
        icon: "/icons/react.svg",
      },
      {
        title: "HTML",
        level: SkillLevel.Expert,
        icon: "/icons/html.svg",
      },
      {
        title: "Tailwind CSS",
        level: SkillLevel.Intermediate,
        icon: "/icons/tailwind.svg",
      }
    ],
  },
  {
    title: "Backend Development",
    items: [
      {
        title: "Node.js",
        level: SkillLevel.Expert,
        icon: "/icons/nodejs.svg",
      },
      {
        title: "Streamlit",
        level: SkillLevel.Expert,
        icon: "/icons/streamlit.svg",
      },
      {
        title: "Jupyter Framework",
        level: SkillLevel.Begginer,
        icon: "/icons/jupyter.svg",
      },
      {
        title: "TensorFlow Framework",
        level: SkillLevel.Begginer,
        icon: "/icons/tensorflow.svg",
      },
      {
        title: "OpenCV Framework",
        level: SkillLevel.Begginer,
        icon: "/icons/opencv.svg",
      }
    ],
  },
  {
    title: "Database Management",
    items: [
      {
        title: "LocalHost",
        level: SkillLevel.Begginer,
        icon: "/icons/sql.svg",
      },
      {
        title: "Tensorflow LocalHost",
        level: SkillLevel.Begginer,
        icon: "/icons/tensorflow.svg",
      }
    ],
  },
  {
    title: "Version Control Systems",
    items: [
      {
        title: "Git",
        level: SkillLevel.Expert,
        icon: "/icons/git.svg",
      },
      {
        title: "GitHub",
        level: SkillLevel.Expert,
        icon: "/icons/github.svg",
      },
    ],
  },
];

export default skills;
