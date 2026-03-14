import { Input } from "@/components/ui/input";

export function HomePage() {
  return (
    <>
      <header>Header</header>
      <main>Información del clima</main>
      <footer>
        <Input placeholder="Buscar ciudad..." />
      </footer>
    </>
  );
}
