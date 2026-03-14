import { CloudOff } from "lucide-react";

export function EmptyState() {
  return (
    <div className="text-gray-7 flex flex-col items-center gap-4">
      <CloudOff className="size-25" />
      <p className="font-manrope text-center text-2xl font-semibold">
        Agrega una ciudad para empezar
      </p>
    </div>
  );
}
