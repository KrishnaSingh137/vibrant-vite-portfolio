
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        background: "#18182a",
        card: "#232336",
        accent: {
          purple: "#9b87f5",
          blue: "#0EA5E9",
          'gradient-from': "#9b87f5",
          'gradient-via': "#7E69AB",
          'gradient-to': "#0EA5E9",
        },
        glass: "rgba(30,34,51,0.67)",
        white: "#fff"
      },
      boxShadow: {
        'soft-glow': "0 4px 32px 0 rgba(115,103,240,0.12)",
        'inner-card': "inset 0 1px 16px 0 rgba(50,51,110,0.12)",
      },
      borderRadius: {
        xl: "1.5rem",
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      },
      animation: {
        "fade-in-up": "fade-in-up 0.7s ease",
      },
      backgroundImage: {
        "profile-blob":
          "radial-gradient(ellipse 60% 80% at 65% 0,#9b87f5 60%,#0EA5E9 100%)",
        "card-gradient":
          "linear-gradient(145deg,rgba(155,135,245,0.07) 0%, rgba(14,165,233,0.08) 100%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
