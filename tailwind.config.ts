
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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
          "gradient-from": "#9b87f5",
          "gradient-via": "#7E69AB",
          "gradient-to": "#0EA5E9",
          purple: "#9b87f5",
          blue: "#0EA5E9",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        glass: "rgba(30,34,51,0.67)",
        white: "#fff",
        "accent-purple": "#9b87f5",
        "accent-blue": "#0EA5E9",
        "base-dark": "#18182a",
        "soft-charcoal": "#232336",
      },
      boxShadow: {
        'soft-glow': "0 4px 32px 0 rgba(115,103,240,0.12)",
        'inner-card': "inset 0 1px 16px 0 rgba(50,51,110,0.12)",
        'neo-mix': "0 4px 32px 0 rgba(155,135,245,0.09), 0 4px 64px 0 rgba(14,165,233,0.10)",
      },
      borderRadius: {
        xl: "1.5rem",
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "fade-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          }
        }
      },
      animation: {
        "fade-in-up": "fade-in-up 0.7s ease",
        "fade-in": "fade-in 0.4s ease",
      },
      backgroundImage: {
        "profile-blob":
          "radial-gradient(ellipse 60% 80% at 65% 0,#9b87f5 60%,#0EA5E9 100%)",
        "card-gradient":
          "linear-gradient(145deg,rgba(155,135,245,0.07) 0%, rgba(14,165,233,0.08) 100%)",
        "modern-glass":
          "linear-gradient(120deg, rgba(30,34,51,0.68) 60%, rgba(14,165,233,0.12) 100%)",
        "modern-dark-gradient":
          "linear-gradient(135deg, #1a1f2c 0%, #232336 60%, #18182a 100%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

