import { CircleX, Search } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import { SearchResults } from "@/components/ui/search-results";
import { type GeocodingResult } from "@/lib/schemas/weather";

interface CitySearchProps {
  city: string;
  onCityChange: (value: string) => void;
  results: GeocodingResult[];
  isLoading: boolean;
  onSelect: (result: GeocodingResult) => void;
  isOpen: boolean;
}

export function CitySearch({
  city,
  onCityChange,
  results,
  isLoading,
  onSelect,
  isOpen,
}: CitySearchProps) {
  return (
    <>
      <InputGroup className="bg-mauve-2 h-11 max-w-194 rounded-full">
        <InputGroupInput
          placeholder="Busca una ciudad"
          value={city}
          onChange={(e) => {
            onCityChange(e.target.value);
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
      {city && isOpen && (
        <SearchResults
          results={results}
          onSelect={onSelect}
          isLoading={isLoading}
        />
      )}
    </>
  );
}
