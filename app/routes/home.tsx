import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Vrinda Joshi" },
    { name: "Vrinda's Site. Product Designer, Developer, and Innovator. Systems Designe Engineering @ Univerity of Waterloo", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
