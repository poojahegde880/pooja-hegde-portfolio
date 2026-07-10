import {
  SiPython,
  SiJavascript,
  SiHtml5,
  SiBootstrap,
  SiMysql,
  SiPhp,
  SiFlask,
  SiTensorflow,
  SiOpencv,
  SiNodedotjs,
  SiExpress,
  SiGit,
  SiGithub,
  SiLinux,
  SiKeras,
} from "react-icons/si";

import { FaJava, FaCss3Alt, FaAws } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { TbBrandCpp } from "react-icons/tb";

import { Code2, Database } from "lucide-react";
import type { IconType } from "react-icons";
import type { ComponentType } from "react";

export const skillIcons: Record<
  string,
  IconType | ComponentType<{ size?: number; className?: string }>
> = {
  Java: FaJava,
  Python: SiPython,
  C: Code2,
  "C++": TbBrandCpp,

  HTML: SiHtml5,
  CSS: FaCss3Alt,

  JavaScript: SiJavascript,
  JS: SiJavascript,

  Bootstrap: SiBootstrap,
  Flask: SiFlask,
  "Node.js": SiNodedotjs,
  Express: SiExpress,
  PHP: SiPhp,

  SQL: Database,
  MySQL: SiMysql,

  Git: SiGit,
  GitHub: SiGithub,
  Linux: SiLinux,

  "Visual Studio Code": VscVscode,

  AWS: FaAws,

  TensorFlow: SiTensorflow,
  Keras: SiKeras,
  OpenCV: SiOpencv,
};

export const skillColors: Record<string, string> = {
  Java: "#E76F00",
  Python: "#3776AB",
  C: "#5C6BC0",
  "C++": "#00599C",
  HTML: "#E34F26",
  CSS: "#1572B6",
  JavaScript: "#F7DF1E",
  JS: "#F7DF1E",
  Bootstrap: "#7952B3",
  Flask: "#9CA3AF",
  "Node.js": "#339933",
  Express: "#71717A",
  PHP: "#777BB4",
  SQL: "#0EA5A4",
  MySQL: "#4479A1",
  Git: "#F05032",
  GitHub: "#6E40C9",
  Linux: "#FCC624",
  "Visual Studio Code": "#007ACC",
  AWS: "#FF9900",
  TensorFlow: "#FF6F00",
  Keras: "#D00000",
  OpenCV: "#5C3EE8",
};