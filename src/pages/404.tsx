import { Link } from "react-router";
import { CloudAlert } from "lucide-react";
import { Button } from "@/components/ui/button";

export function NotFound() {
  return (
    <main className="flex grow flex-col items-center justify-center gap-4 text-center">
      <CloudAlert className="text-gray-7 size-25" />
      <h1 className="font-manrope text-2xl font-bold">Pagina no disponible</h1>
      <p className="font-light">
        La pagina que buscas no se encuentra. Regresa al inicio para continuar.
      </p>
      <Link to="/">
        <Button className="font-manrope transition-transform duration-300 hover:scale-105">
          Volver al inicio
        </Button>
      </Link>
    </main>
  );
}
