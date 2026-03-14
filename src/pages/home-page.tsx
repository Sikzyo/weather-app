import { useState } from "react";
import { Footer } from "@/components/footer";

export function HomePage() {
  const [city, setCity] = useState("");

  return (
    <>
      <header>
        <h1 className="font-manrope text-3xl font-bold md:text-4xl">
          Ciudades
        </h1>
      </header>
      <main className="flex grow flex-col items-center justify-center gap-4">
        Información del clima
      </main>
      <Footer city={city} onCityChange={setCity} />
    </>
  );
}
