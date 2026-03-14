import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupButton,
} from "@/components/ui/input-group";
import { Search, CircleX } from "lucide-react";

export function Footer({ city, onCityChange }: FooterProps) {
  return (
    <footer className="flex justify-center">
      <InputGroup className="bg-mauve-2 h-11 max-w-194 rounded-full">
        <InputGroupInput
          placeholder="Busca una ciudad"
          value={city}
          onChange={(e) => onCityChange(e.target.value)}
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
    </footer>
  );
}

interface FooterProps {
  city: string;
  onCityChange: (value: string) => void;
}
