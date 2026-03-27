/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5",
        secondary: "#1E1B4B",
        sidebarText: "#5B5B66",
        borderSoft: "#ECECF2",
        mutedText: "#8B8B96",
        panelBg: "#F8F8FB"
      },
      boxShadow: {
        soft: "0 1px 2px rgba(16, 24, 40, 0.04), 0 1px 3px rgba(16, 24, 40, 0.08)"
      }
    }
  },
  plugins: []
};