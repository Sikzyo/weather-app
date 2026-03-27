# Registro de cambios

Todos los cambios notables de este proyecto se documentarán en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
y este proyecto adhiere a [Versionado Semántico](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

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
