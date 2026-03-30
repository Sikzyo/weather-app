export type WeatherColors = {
  gradientFrom: string;
  gradientTo: string;
  text: string;
};

type ColorRule = {
  min: number;
  max: number;
  day: WeatherColors;
  night: WeatherColors;
};

const COLOR_RULES: ColorRule[] = [
  {
    min: 0,
    max: 0,
    day: {
      gradientFrom: "var(--amber-3)",
      gradientTo: "var(--amber-10)",
      text: "var(--amber-12)",
    },
    night: {
      gradientFrom: "var(--blue-2)",
      gradientTo: "var(--blue-4)",
      text: "var(--yellow-12)",
    },
  },
  {
    min: 1,
    max: 1,
    day: {
      gradientFrom: "var(--yellow-2)",
      gradientTo: "var(--gray-5)",
      text: "var(--yellow-12)",
    },
    night: {
      gradientFrom: "var(--gray-2)",
      gradientTo: "var(--blue-2)",
      text: "var(--blue-12)",
    },
  },
  {
    min: 2,
    max: 2,
    day: {
      gradientFrom: "var(--gray-4)",
      gradientTo: "var(--gray-3)",
      text: "var(--gray-12)",
    },
    night: {
      gradientFrom: "var(--gray-4)",
      gradientTo: "var(--blue-3)",
      text: "var(--blue-12)",
    },
  },
  {
    min: 3,
    max: 3,
    day: {
      gradientFrom: "var(--gray-10)",
      gradientTo: "var(--gray-8)",
      text: "var(--gray-12)",
    },
    night: {
      gradientFrom: "var(--gray-10)",
      gradientTo: "var(--gray-8)",
      text: "var(--gray-12)",
    },
  },
  {
    min: 45,
    max: 48,
    day: {
      gradientFrom: "var(--gray-5)",
      gradientTo: "var(--sand-3)",
      text: "var(--sand-12)",
    },
    night: {
      gradientFrom: "var(--gray-5)",
      gradientTo: "var(--sand-3)",
      text: "var(--sand-12)",
    },
  },
  {
    min: 51,
    max: 55,
    day: {
      gradientFrom: "var(--gray-5)",
      gradientTo: "var(--blue-2)",
      text: "var(--blue-12)",
    },
    night: {
      gradientFrom: "var(--gray-5)",
      gradientTo: "var(--blue-2)",
      text: "var(--blue-12)",
    },
  },
  {
    min: 56,
    max: 57,
    day: {
      gradientFrom: "var(--gray-5)",
      gradientTo: "var(--sky-3)",
      text: "var(--sky-12)",
    },
    night: {
      gradientFrom: "var(--gray-5)",
      gradientTo: "var(--sky-3)",
      text: "var(--sky-12)",
    },
  },
  {
    min: 61,
    max: 65,
    day: {
      gradientFrom: "var(--gray-5)",
      gradientTo: "var(--blue-3)",
      text: "var(--blue-12)",
    },
    night: {
      gradientFrom: "var(--gray-2)",
      gradientTo: "var(--blue-1)",
      text: "var(--blue-12)",
    },
  },
  {
    min: 66,
    max: 67,
    day: {
      gradientFrom: "var(--gray-5)",
      gradientTo: "var(--sky-3)",
      text: "var(--sky-12)",
    },
    night: {
      gradientFrom: "var(--gray-5)",
      gradientTo: "var(--sky-3)",
      text: "var(--sky-12)",
    },
  },
  {
    min: 71,
    max: 75,
    day: {
      gradientFrom: "var(--gray-5)",
      gradientTo: "var(--gray-2)",
      text: "var(--gray-12)",
    },
    night: {
      gradientFrom: "var(--gray-5)",
      gradientTo: "var(--gray-2)",
      text: "var(--gray-12)",
    },
  },
  {
    min: 77,
    max: 77,
    day: {
      gradientFrom: "var(--blue-3)",
      gradientTo: "var(--blue-1)",
      text: "var(--blue-12)",
    },
    night: {
      gradientFrom: "var(--blue-3)",
      gradientTo: "var(--blue-1)",
      text: "var(--blue-12)",
    },
  },
  {
    min: 80,
    max: 82,
    day: {
      gradientFrom: "var(--gray-5)",
      gradientTo: "var(--sky-3)",
      text: "var(--sky-12)",
    },
    night: {
      gradientFrom: "var(--gray-5)",
      gradientTo: "var(--sky-3)",
      text: "var(--sky-12)",
    },
  },
  {
    min: 85,
    max: 86,
    day: {
      gradientFrom: "var(--blue-3)",
      gradientTo: "var(--blue-1)",
      text: "var(--blue-12)",
    },
    night: {
      gradientFrom: "var(--blue-3)",
      gradientTo: "var(--blue-1)",
      text: "var(--blue-12)",
    },
  },
  {
    min: 95,
    max: 99,
    day: {
      gradientFrom: "var(--gray-10)",
      gradientTo: "var(--yellow-2)",
      text: "var(--gray-12)",
    },
    night: {
      gradientFrom: "var(--gray-10)",
      gradientTo: "var(--yellow-2)",
      text: "var(--gray-12)",
    },
  },
];

const DEFAULT_COLORS: WeatherColors = {
  gradientFrom: "var(--slate-1)",
  gradientTo: "var(--slate-1)",
  text: "var(--slate-12)",
};

export function getWeatherColors(
  code: number | undefined,
  isDay: boolean = true,
  cloudOff: boolean = false,
): WeatherColors {
  if (cloudOff || code === undefined) {
    return DEFAULT_COLORS;
  }
  const rule = COLOR_RULES.find((r) => code >= r.min && code <= r.max);
  if (!rule) return DEFAULT_COLORS;
  return isDay ? rule.day : rule.night;
}
