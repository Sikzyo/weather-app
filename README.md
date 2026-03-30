# Weather App

<img src="./public/favicon.svg" alt="Weather App Logo" height="64" align="center" />

Aplicación del clima que te permite buscar ciudades, guardar tus favoritas y ver las condiciones climáticas actuales con tarjetas de gradientes animados.

## Stack Tecnológico

- **Frontend**: React 19 · TypeScript (strict) · Vite 8 · Tailwind CSS 4
- **Estado**: Zustand (persistente) · TanStack Query
- **Componentes**: shadcn/ui · Radix UI · Lucide Icons
- **APIs**: Open-Meteo Weather API · Open-Meteo Geocoding API
- **Despliegue**: Cloudflare Workers (Wrangler)

## Funcionalidades

- **Búsqueda de ciudades**: Busca cualquier ciudad del mundo usando la API de Geocoding de Open-Meteo
- **Ciudades guardadas**: Persiste tus ciudades favoritas usando Zustand con localStorage
- **Datos del clima**: Ver temperatura actual, código del clima y estado día/noche
- **Gradientes dinámicos**: Fondos con gradientes hermisos basados en las condiciones climáticas
- **Diseño responsive**: Layout mobile-first que se adapta a cualquier pantalla
- **Type-Safe**: TypeScript en modo estricto con validación Zod para todos los datos externos

## Primeros Pasos

```bash
# Instalar dependencias
bun install

# Iniciar servidor de desarrollo
bun dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

## Scripts

| Comando          | Descripción                                  |
| ---------------- | -------------------------------------------- |
| `bun dev`        | Iniciar servidor de desarrollo               |
| `bun run build`  | Compilar para producción (TypeScript + Vite) |
| `bun run lint`   | Ejecutar ESLint                              |
| `bun run format` | Formatear código con Prettier                |
| `bun run deploy` | Desplegar a Cloudflare Workers               |

## Estructura del Proyecto

```
src/
├── components/
│   ├── ui/                  # Componentes shadcn/ui (button, input, card, etc.)
│   │   ├── weather-card.tsx
│   │   ├── weather-card-settings.tsx
│   │   └── search-results.tsx
│   ├── weather-card-list.tsx
│   └── footer.tsx
├── hooks/
│   ├── use-saved-city.ts    # Store Zustand para ciudades persistidas
│   ├── use-weather-forecast.ts
│   └── use-geocoding.ts
├── lib/
│   ├── api/
│   │   ├── weather.ts       # Cliente de Open-Meteo Weather API
│   │   └── geocoding.ts     # Cliente de Open-Meteo Geocoding API
│   ├── schemas/
│   │   └── weather.ts       # Schemas Zod para validación de APIs
│   ├── weather-icons.ts     # Renderizado dinámico de íconos del clima
│   └── weather-colors.ts    # Colores de gradientes basados en el clima
├── pages/
│   ├── home-page.tsx
│   └── weather-page.tsx
├── router.ts
└── main.tsx
```

## APIs

### Open-Meteo Weather API

Provee datos del clima actual incluyendo temperatura, código del clima e indicador de día/noche.

### Open-Meteo Geocoding API

Provee funcionalidad de búsqueda de ciudades con coordenadas (latitud/longitud).

Ambas APIs son gratuitas y no requieren clave de API.

## Arquitectura

- **Data Fetching**: TanStack Query para todo el estado del servidor
- **Estado del cliente**: Zustand con middleware `persist` para ciudades guardadas
- **Validación**: Schemas Zod validan todas las respuestas de las APIs
- **Estilos**: Tailwind CSS 4 con variables CSS y utilidad `cn()`
- **Routing**: React Router v7 para navegación
