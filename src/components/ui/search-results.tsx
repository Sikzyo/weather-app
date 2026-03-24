import { type GeocodingResult } from "@/lib/schemas/weather";
import { MapPin } from "lucide-react";
import { Separator } from "./separator";

interface SearchResultsProps {
  results: GeocodingResult[];
  onSelect: (result: GeocodingResult) => void;
}

export function SearchResults({ results, onSelect }: SearchResultsProps) {
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
            <MapPin />
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
