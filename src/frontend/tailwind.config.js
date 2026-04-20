/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "src/**/*.{js,ts,jsx,tsx,html,css}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        mono: ["JetBrains Mono", "Menlo", "Monaco", "Consolas", "monospace"],
      },
      colors: {
        // ZurichLoop design system colors — dark red theme
        app: {
          // Background colors (dark)
          bg: {
            primary: "#0F0A0A",
            secondary: "#1A0A0A",
            tertiary: "#220D0D",
          },
          // Surface colors (cards, sidebar — dark)
          surface: {
            DEFAULT: "#1C0E0E",
            hover: "#2A1010",
            active: "#3D1515",
          },
          // Border colors (dark red tinted)
          border: {
            DEFAULT: "#3B1A1A",
            light: "#2A1212",
            dark: "#5C2020",
          },
          // Text colors (light on dark)
          text: {
            primary: "#F5EDED",
            secondary: "#C4A0A0",
            tertiary: "#8C6060",
            inverse: "#0F0A0A",
          },
          // Accent colors (dark red)
          accent: {
            50: "#FEF2F2",
            100: "#FEE2E2",
            200: "#FECACA",
            300: "#FCA5A5",
            400: "#F87171",
            500: "#EF4444",
            600: "#DC2626",
            700: "#B91C1C",
            800: "#991B1B",
            900: "#7F1D1D",
          },
        },
      },
      boxShadow: {
        card: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        "card-hover":
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        modal: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      },
      animation: {
        "fade-in": "fadeIn 0.3s ease-out",
        "slide-up": "slideUp 0.3s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
