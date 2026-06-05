import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // PTPAL Palette
        'ptpal-bg': '#0F172A', // Deep Navy (Slate 900)
        'ptpal-card': '#1E293B', // Lighter Navy (Slate 800)
        'ptpal-accent': '#8B5CF6', // Violet/Purple (Gamified feel)
        'ptpal-gold': '#F59E0B', // Rewards/Ranks
        'ptpal-success': '#10B981', // Green (Recovery)
        'ptpal-danger': '#EF4444', // Red (Boss/Failure)
      },
      fontFamily: {
        // Use a clean sans for now, ideally import 'Nunito' or 'Fredoka' for gaming
        sans: ['var(--font-inter)'], 
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'game-gradient': 'linear-gradient(to bottom right, #0F172A, #1E1B4B)',
      },
    },
  },
  plugins: [],
};
export default config;
