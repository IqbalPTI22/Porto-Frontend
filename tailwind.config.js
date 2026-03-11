/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        soft: "0 8px 32px -12px rgba(255, 184, 54, 0.18)",
      },
    },
  },
  plugins: [],
};
