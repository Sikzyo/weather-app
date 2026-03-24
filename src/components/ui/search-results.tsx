import { type GeocodingResult } from "@/lib/schemas/weather";
import { MapPin } from "lucide-react";
import { Separator } from "./separator";
import { Spinner } from "@/components/ui/spinner";

interface SearchResultsProps {
  results: GeocodingResult[];
  onSelect: (result: GeocodingResult) => void;
  isLoading?: boolean;
}

export function SearchResults({
  results,
  onSelect,
  isLoading,
}: SearchResultsProps) {
  if (isLoading) {
    return (
      <ul className="bg-mauve-2/75 border-mauve-7 absolute bottom-17 flex w-full flex-col gap-2 rounded-2xl border p-2 backdrop-blur-xs md:max-w-194">
        <li className="text-mauve-11 flex items-center gap-2 font-light">
          <Spinner />
          <p>Buscando...</p>
        </li>
      </ul>
    );
  }

  if (results.length === 0) {
    return null;
  }

  return (
    <ul className="bg-mauve-2/75 border-mauve-7 absolute bottom-17 flex w-full flex-col gap-2 rounded-2xl border p-2 backdrop-blur-xs md:max-w-194">
      {results.map((result, index) => (
        <li key={result.id} className="contents">
          <div
            onClick={() => onSelect(result)}
            className="hover:bg-mauve-3 flex h-11 cursor-pointer items-center gap-2 rounded-[8px] p-2"
          >
            <MapPin size={18} />
            <span className="min-w-0 flex-1">
              {[result.name, result.admin1, result.country]
                .filter(Boolean)
                .join(", ")}
            </span>
          </div>
          {index < results.length - 1 && <Separator className="bg-mauve-7" />}
        </li>
      ))}
    </ul>
  );
}
