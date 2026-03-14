import { useParams } from "react-router";

export function WeatherPage() {
  const { id } = useParams();
  return <div>Weather Page - ID: {id}</div>;
}
