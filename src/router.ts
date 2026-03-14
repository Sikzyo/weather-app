import { createBrowserRouter } from "react-router";
import { HomePage } from "@/pages/home-page";
import { WeatherPage } from "@/pages/weather-page";

export const router = createBrowserRouter([
  { path: "/", Component: HomePage },
  { path: "/weather/:id", Component: WeatherPage },
]);
