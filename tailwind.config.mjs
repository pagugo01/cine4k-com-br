/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        cine: {
          dark: '#030712',
          card: '#080d1a',
          cyan: '#06b6d4',
          neon: '#22d3ee',
          amber: '#f59e0b'
        }
      },
      aspectRatio: {
        'poster': '2 / 3'
      }
    },
  },
  plugins: [],
};
