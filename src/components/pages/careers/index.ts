import { imgTeam1, imgTeam2, imgTeam3, imgTeam4 } from "@/assets";
import type { Team } from "@/types";

export * from "./CareersHero";
export * from "./CareersJoin";
export * from "./CareersValues";

export const team: Team[] = [
  {
    name: "Halimah Martins-Kuye",
    role: "Founder & Strategy lead",
    image: imgTeam1,
  },
  {
    name: "Favour Oparaugo",
    role: "Brand Systems Architect",
    image: imgTeam2,
  },
  {
    name: "Benjamin Ukwuoma",
    role: "Digital Experience Designer",
    image: imgTeam3,
  },
  {
    name: "Victor Abang",
    role: "Multimedia Content Specialist",
    image: imgTeam4,
  },
];
