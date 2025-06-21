import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
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
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          50: "#fdf8f6",
          100: "#f2e8e5",
          200: "#eaddd7",
          300: "#e0cec7",
          400: "#d2bab0",
          500: "#c69c89",
          600: "#b08268",
          700: "#9c6a4a",
          800: "#7d543f",
          900: "#68453a",
          950: "#362318",
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
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Enhanced semantic colors
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          foreground: "hsl(var(--warning-foreground))",
        },
        info: {
          DEFAULT: "hsl(var(--info))",
          foreground: "hsl(var(--info-foreground))",
        },
        // Surface colors for layering
        surface: {
          DEFAULT: "hsl(var(--surface))",
          foreground: "hsl(var(--surface-foreground))",
          hover: "hsl(var(--surface-hover))",
          active: "hsl(var(--surface-active))",
        },
        // Enhanced color palette
        amber: {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309",
          800: "#92400e",
          900: "#78350f",
          950: "#451a03",
        },
        orange: {
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
          700: "#c2410c",
          800: "#9a3412",
          900: "#7c2d12",
          950: "#431407",
        },
        stone: {
          50: "#fafaf9",
          100: "#f5f5f4",
          200: "#e7e5e4",
          300: "#d6d3d1",
          400: "#a8a29e",
          500: "#78716c",
          600: "#57534e",
          700: "#44403c",
          800: "#292524",
          900: "#1c1917",
          950: "#0c0a09",
        },
        // Enhanced chart colors
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
        // Gradient colors
        gradient: {
          from: "hsl(var(--gradient-from))",
          to: "hsl(var(--gradient-to))",
        },
        // Shadow colors
        shadow: {
          DEFAULT: "hsl(var(--shadow))",
          light: "hsl(var(--shadow-light))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Oxygen",
          "Ubuntu",
          "Cantarell",
          "Fira Sans",
          "Droid Sans",
          "Helvetica Neue",
          "sans-serif",
        ],
        mono: [
          "Fira Code",
          "JetBrains Mono",
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "Courier New",
          "monospace",
        ],
      },
      fontSize: {
        "2xs": "0.625rem",
        "3xl": "1.953rem",
        "4xl": "2.441rem",
        "5xl": "3.052rem",
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
        112: "28rem",
        128: "32rem",
      },
      maxWidth: {
        "8xl": "88rem",
        "9xl": "96rem",
      },
      zIndex: {
        60: "60",
        70: "70",
        80: "80",
        90: "90",
        100: "100",
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "fade-out": "fade-out 0.5s ease-out",
        "slide-in-right": "slide-in-right 0.3s ease-out",
        "slide-in-left": "slide-in-left 0.3s ease-out",
        "slide-in-up": "slide-in-up 0.3s ease-out",
        "slide-in-down": "slide-in-down 0.3s ease-out",
        "bounce-in": "bounce-in 0.6s ease-out",
        "pulse-subtle": "pulse-subtle 2s ease-in-out infinite",
        "float": "float 3s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "fade-out": {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },
        "slide-in-right": {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(0)" },
        },
        "slide-in-left": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0)" },
        },
        "slide-in-up": {
          from: { transform: "translateY(100%)" },
          to: { transform: "translateY(0)" },
        },
        "slide-in-down": {
          from: { transform: "translateY(-100%)" },
          to: { transform: "translateY(0)" },
        },
        "bounce-in": {
          "0%": { transform: "scale(0.3)", opacity: "0" },
          "50%": { transform: "scale(1.1)", opacity: "0.8" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "pulse-subtle": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "glow": {
          from: { boxShadow: "0 0 5px hsl(var(--primary))" },
          to: { boxShadow: "0 0 20px hsl(var(--primary)), 0 0 30px hsl(var(--primary))" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        "elevation-1": "0 1px 3px 0 hsl(var(--shadow) / 0.1), 0 1px 2px 0 hsl(var(--shadow) / 0.06)",
        "elevation-2": "0 4px 6px -1px hsl(var(--shadow) / 0.1), 0 2px 4px -1px hsl(var(--shadow) / 0.06)",
        "elevation-3": "0 10px 15px -3px hsl(var(--shadow) / 0.1), 0 4px 6px -2px hsl(var(--shadow) / 0.05)",
        "elevation-4": "0 20px 25px -5px hsl(var(--shadow) / 0.1), 0 10px 10px -5px hsl(var(--shadow) / 0.04)",
        "elevation-5": "0 25px 50px -12px hsl(var(--shadow) / 0.25)",
        "inner-subtle": "inset 0 2px 4px 0 hsl(var(--shadow) / 0.06)",
        "glow-primary": "0 0 0 1px hsl(var(--primary) / 0.3), 0 0 20px hsl(var(--primary) / 0.2)",
        "glow-secondary": "0 0 0 1px hsl(var(--secondary) / 0.3), 0 0 20px hsl(var(--secondary) / 0.2)",
      },
      transitionProperty: {
        "height": "height",
        "spacing": "margin, padding",
        "colors-shadow": "color, background-color, border-color, text-decoration-color, fill, stroke, box-shadow",
      },
      transitionTimingFunction: {
        "bounce-in": "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
        "bounce-out": "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-subtle": "linear-gradient(135deg, hsl(var(--gradient-from)), hsl(var(--gradient-to)))",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    // Add custom plugin for utilities
    function({ addUtilities, theme }: { addUtilities: any, theme: any }) {
      const newUtilities = {
        // Text utilities
        '.text-gradient': {
          background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--secondary)))',
          '-webkit-background-clip': 'text',
          'background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        },
        
        // Glass morphism utilities
        '.glass-light': {
          'backdrop-filter': 'blur(16px) saturate(180%)',
          '-webkit-backdrop-filter': 'blur(16px) saturate(180%)',
          'background-color': 'hsla(var(--background), 0.8)',
          'border': '1px solid hsla(var(--border), 0.2)',
        },
        
        '.glass-dark': {
          'backdrop-filter': 'blur(16px) saturate(180%)',
          '-webkit-backdrop-filter': 'blur(16px) saturate(180%)',
          'background-color': 'hsla(var(--background), 0.6)',
          'border': '1px solid hsla(var(--border), 0.1)',
        },
        
        // Hover lift effect
        '.hover-lift': {
          'transition': 'transform 0.2s ease, box-shadow 0.2s ease',
          '&:hover': {
            'transform': 'translateY(-2px)',
            'box-shadow': theme('boxShadow.elevation-3'),
          },
        },
        
        // Focus styles
        '.focus-ring-inset': {
          '&:focus-visible': {
            'outline': 'none',
            'box-shadow': 'inset 0 0 0 2px hsl(var(--ring))',
          },
        },
        
        // Scroll area
        '.scroll-area': {
          '&::-webkit-scrollbar': {
            width: '8px',
            height: '8px',
          },
          '&::-webkit-scrollbar-track': {
            background: 'hsl(var(--muted))',
            'border-radius': '4px',
          },
          '&::-webkit-scrollbar-thumb': {
            background: 'hsl(var(--muted-foreground) / 0.3)',
            'border-radius': '4px',
            '&:hover': {
              background: 'hsl(var(--muted-foreground) / 0.5)',
            },
          },
          'scrollbar-width': 'thin',
          'scrollbar-color': 'hsl(var(--muted-foreground) / 0.3) hsl(var(--muted))',
        },
      }
      
      addUtilities(newUtilities)
    }
  ],
} satisfies Config

export default config