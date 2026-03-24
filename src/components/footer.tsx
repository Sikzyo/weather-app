import { useState } from "react";
import { useNavigate } from "react-router";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupButton,
} from "@/components/ui/input-group";
import { SearchResults } from "@/components/ui/search-results";
import { useGeocoding } from "@/hooks/use-geocoding";
import { useDebounce } from "@/hooks/use-debounce";
import { Search, CircleX } from "lucide-react";

export function Footer({ city, onCityChange }: FooterProps) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const debouncedCity = useDebounce(city, 300);
  const { data, isLoading } = useGeocoding(debouncedCity);

  const handleSelect = (result: { id: number }) => {
    navigate(`/weather/${result.id}`);
    onCityChange("");
    setIsOpen(false);
  };

  const results = data?.results ?? [];

  return (
    <footer className="relative flex justify-center">
      <InputGroup className="bg-mauve-2 h-11 max-w-194 rounded-full">
        <InputGroupInput
          placeholder="Busca una ciudad"
          value={city}
          onChange={(e) => {
            onCityChange(e.target.value);
            setIsOpen(true);
          }}
          className="placeholder:text-mauve-11/80"
        />
        <InputGroupAddon>
          <Search className="text-mauve-11 size-5" />
        </InputGroupAddon>
        {city && (
          <InputGroupButton onClick={() => onCityChange("")}>
            <CircleX className="text-mauve-11 size-5" />
          </InputGroupButton>
        )}
      </InputGroup>
      {city && isOpen && !isLoading && (
        <SearchResults results={results} onSelect={handleSelect} />
      )}
    </footer>
  );
}

interface FooterProps {
  city: string;
  onCityChange: (value: string) => void;
}
