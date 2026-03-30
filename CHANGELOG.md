# Registro de cambios

Todos los cambios notables de este proyecto se documentarán en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
y este proyecto adhiere a [Versionado Semántico](https://semver.org/spec/v2.0.0.html).

## [1.2.0] - 2026-03-30

### Añadido

- **Nombre del clima**: Nueva utilidad `getWeatherName()` que retorna el nombre legible del código meteorológico WMO
- **Visualización del nombre del clima**: El nombre del clima se muestra debajo de la temperatura en la página de detalle

### Corregido

- Tamaño de texto responsivo en el componente `DateTimeDisplay` para pantallas medianas y mayores

## [1.1.0] - 2026-03-30

### Añadido

- **Fondo degradado del clima**: Fondo de pantalla que cambia según el código del clima y si es día o noche
- **Página de detalle del clima**: Nueva página con icono del clima, temperatura y estructura semántica con `<figure>` y `<section>`
- **Icono meteorológico responsivo**: Icono del clima con tamaño adaptativo (96px en móvil, 120px en pantallas medianas+)
- **Transiciones de vista**: Navegación fluida con View Transitions API entre la lista de ciudades y la página de detalle

### Cambiado

- Tarjetas de ciudad ahora navegan a la página de detalle del clima
- Fondo degradado usa `cn()` para manejo de modo oscuro

### Refactorizado

- Componente `GradientBackground` extraído para reutilización
- Página de clima ahora usa elementos semánticos (`<figure>`, `<section>`) en lugar de `<div>` genéricos

## [1.0.1] - 2026-03-27

### Seguridad

- Actualización de dependencias internas (@tanstack/react-query, react-router, shadcn, typescript-eslint, vite)

### Mantenimiento

- Simplificación de configuración de Wranger

## [1.0.0] - 2026-03-27

### Añadido

- **Búsqueda de ciudades**: Busca ciudades con llamadas API con debounce para reducir solicitudes
- **Ciudades guardadas**: Persiste las ciudades seleccionadas en localStorage usando Zustand
- **Pronóstico del clima**: Muestra tarjetas de pronóstico del clima para las ciudades guardadas con códigos meteorológicos WMO
- **Panel de configuración**: Panel de configuración por ciudad para eliminarla de la lista
- **Notificaciones toast**: Notificaciones de éxito al guardar o eliminar ciudades
- **Estados de carga**: Indicador de carga en los resultados de búsqueda
- **Página 404**: Página personalizada para rutas no encontradas
