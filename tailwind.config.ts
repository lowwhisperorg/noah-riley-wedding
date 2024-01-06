import type { Config } from 'tailwindcss'
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'mtn' : "url('/background.svg')",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        "light": {
          extend: "light", // <- inherit default values from light theme
          colors: {
            background: "#f9f5f2",
            foreground: "#1b1a16",
            primary: "#B68363",
            secondary: "#ecafaf",
          },
          
          layout: {
            disabledOpacity: "0.3",
            radius: {
              small: "4px",
              medium: "6px",
              large: "8px",
            },
            borderWidth: {
              small: "1px",
              medium: "2px",
              large: "3px",
            },
          },
        },
      },
    }),
  ]
}
export default config