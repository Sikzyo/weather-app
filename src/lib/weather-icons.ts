import {
  CloudOff,
  Cloud,
  CloudDrizzle,
  CloudFog,
  CloudHail,
  CloudLightning,
  CloudMoon,
  CloudRain,
  CloudRainWind,
  CloudSnow,
  CloudSun,
  Cloudy,
  MoonStar,
  Snowflake,
  Sun,
  type LucideIcon,
} from "lucide-react";

export function getWeatherIcon(
  code: number | undefined,
  isDay = true,
  cloudOff = false,
): LucideIcon {
  if (cloudOff || code === undefined) return CloudOff;

  if (!isDay) {
    if (code === 0) return MoonStar;
    if (code === 1) return CloudMoon;
    if (code === 2) return Cloud;
    if (code === 3) return Cloudy;
    if (code === 45 || code === 48) return CloudFog;
    if (code === 51 || code === 53 || code === 55) return CloudDrizzle;
    if (code === 56 || code === 57) return CloudHail;
    if (code === 61 || code === 63 || code === 65) return CloudRain;
    if (code === 66 || code === 67) return CloudHail;
    if (code === 71 || code === 73 || code === 75) return CloudSnow;
    if (code === 77) return Snowflake;
    if (code === 80 || code === 81 || code === 82) return CloudRainWind;
    if (code === 85 || code === 86) return Snowflake;
    if (code === 95 || code === 96 || code === 99) return CloudLightning;
    return CloudMoon;
  }

  if (code === 0) return Sun;
  if (code === 1) return CloudSun;
  if (code === 2) return Cloud;
  if (code === 3) return Cloudy;
  if (code === 45 || code === 48) return CloudFog;
  if (code === 51 || code === 53 || code === 55) return CloudDrizzle;
  if (code === 56 || code === 57) return CloudHail;
  if (code === 61 || code === 63 || code === 65) return CloudRain;
  if (code === 66 || code === 67) return CloudHail;
  if (code === 71 || code === 73 || code === 75) return CloudSnow;
  if (code === 77) return Snowflake;
  if (code === 80 || code === 81 || code === 82) return CloudRainWind;
  if (code === 85 || code === 86) return Snowflake;
  if (code === 95 || code === 96 || code === 99) return CloudLightning;
  return Cloud;
}
