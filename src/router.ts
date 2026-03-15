import { createBrowserRouter } from "react-router";
import { HomePage } from "@/pages/home-page";
import { WeatherPage } from "@/pages/weather-page";
import { NotFound } from "@/pages/404";

export const router = createBrowserRouter([
  { path: "/", Component: HomePage },
  { path: "/weather/:id", Component: WeatherPage },
  { path: "*", Component: NotFound },
]);
