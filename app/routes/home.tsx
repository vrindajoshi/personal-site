import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Vrinda Joshi" },
    { name: "Vrinda's Site. Product Designer, Developer, and Innovator. Systems Design Engineering @ Univerity of Waterloo", content: "" },
  ];
}

export default function Home() {
  return <Welcome />;
}
