export type PantoneColor = {
  name: string;
  code: string;
  hex: string;
};

// Pantone Color of the Year, 2000–2026. Years with two entries were dual picks.
export const COLOR_OF_THE_YEAR: Record<number, PantoneColor[]> = {
  2026: [{ name: "Cloud Dancer", code: "11-4201", hex: "#F0EEE9" }],
  2025: [{ name: "Mocha Mousse", code: "17-1230", hex: "#A47864" }],
  2024: [{ name: "Peach Fuzz", code: "13-1023", hex: "#FFBE98" }],
  2023: [{ name: "Viva Magenta", code: "18-1750", hex: "#BB2649" }],
  2022: [{ name: "Very Peri", code: "17-3938", hex: "#6667AB" }],
  2021: [
    { name: "Illuminating", code: "13-0647", hex: "#F5DF4D" },
    { name: "Ultimate Gray", code: "17-5104", hex: "#939597" },
  ],
  2020: [{ name: "Classic Blue", code: "19-4052", hex: "#0F4C81" }],
  2019: [{ name: "Living Coral", code: "16-1546", hex: "#FF6F61" }],
  2018: [{ name: "Ultra Violet", code: "18-3838", hex: "#5F4B8B" }],
  2017: [{ name: "Greenery", code: "15-0343", hex: "#88B04B" }],
  2016: [
    { name: "Rose Quartz", code: "13-1520", hex: "#F7CAC9" },
    { name: "Serenity", code: "15-3919", hex: "#92A8D1" },
  ],
  2015: [{ name: "Marsala", code: "18-1438", hex: "#955251" }],
  2014: [{ name: "Radiant Orchid", code: "18-3224", hex: "#B565A7" }],
  2013: [{ name: "Emerald", code: "17-5641", hex: "#009B77" }],
  2012: [{ name: "Tangerine Tango", code: "17-1463", hex: "#DD4124" }],
  2011: [{ name: "Honeysuckle", code: "18-2120", hex: "#D94F70" }],
  2010: [{ name: "Turquoise", code: "15-5519", hex: "#45B5AA" }],
  2009: [{ name: "Mimosa", code: "14-0848", hex: "#EFC050" }],
  2008: [{ name: "Blue Iris", code: "18-3943", hex: "#5A5B9F" }],
  2007: [{ name: "Chili Pepper", code: "19-1557", hex: "#9B1B30" }],
  2006: [{ name: "Sand Dollar", code: "13-1106", hex: "#DECDBE" }],
  2005: [{ name: "Blue Turquoise", code: "15-5217", hex: "#55B4B0" }],
  2004: [{ name: "Tigerlily", code: "17-1456", hex: "#E2583E" }],
  2003: [{ name: "Aqua Sky", code: "14-4811", hex: "#7BC4C4" }],
  2002: [{ name: "True Red", code: "19-1664", hex: "#BC243C" }],
  2001: [{ name: "Fuchsia Rose", code: "17-2031", hex: "#C3447A" }],
  2000: [{ name: "Cerulean", code: "15-4020", hex: "#98B2D1" }],
};

export const YEARS = Object.keys(COLOR_OF_THE_YEAR)
  .map(Number)
  .sort((a, b) => b - a);

export const DEFAULT_YEAR = 2026;

function luminance(hex: string): number {
  const n = parseInt(hex.slice(1), 16);
  const r = (n >> 16) & 255;
  const g = (n >> 8) & 255;
  const b = n & 255;
  return (0.299 * r + 0.587 * g + 0.114 * b) / 255;
}

export function backgroundFor(colors: PantoneColor[]): string {
  if (colors.length === 1) return colors[0].hex;
  return `linear-gradient(135deg, ${colors[0].hex} 50%, ${colors[1].hex} 50%)`;
}

export function textColorFor(colors: PantoneColor[]): string {
  const avg =
    colors.reduce((sum, c) => sum + luminance(c.hex), 0) / colors.length;
  return avg > 0.6 ? "#2C2C2A" : "#FFFFFF";
}

export function swatchLabel(colors: PantoneColor[]): string {
  return colors.map((c) => `PANTONE ${c.code} ${c.name}`).join(" + ");
}
