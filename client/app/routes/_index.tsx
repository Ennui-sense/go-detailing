import Header from "~/components/Header/Header";

export function meta() {
  return [
    { title: "GO detailing | Главная" },
    { name: "description", content: "Home Page" },
  ];
}

export default function IndexRoute() {
  return <Header />;
}
