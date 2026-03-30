import { useNavigate } from "react-router";
import { toast } from "sonner";
import { CitySearch } from "@/components/ui/city-search";
import { useCitySearch } from "@/hooks/use-city-search";
import { useSavedCitiesStore } from "@/hooks/use-saved-city";
import { type GeocodingResult } from "@/lib/schemas/weather";

export function Footer() {
  const navigate = useNavigate();
  const { city, setCity, isOpen, setIsOpen, results, isLoading } =
    useCitySearch();
  const { addCity } = useSavedCitiesStore();

  const handleSelect = (result: GeocodingResult) => {
    addCity(result);
    toast.success("Ciudad guardada correctamente", {
      position: "top-center",
      style: {
        backgroundColor: "var(--green-10)",
        color: "var(--green-4)",
        fontFamily: "Manrope, sans-serif",
        fontSize: "16px",
        fontWeight: 600,
      },
    });
    navigate(`/weather/${result.id}`, { viewTransition: true });
    setCity("");
    setIsOpen(false);
  };

  return (
    <footer className="relative flex justify-center">
      <CitySearch
        city={city}
        onCityChange={(value) => {
          setCity(value);
          setIsOpen(true);
        }}
        results={results}
        isLoading={isLoading}
        onSelect={handleSelect}
        isOpen={isOpen}
      />
    </footer>
  );
}
