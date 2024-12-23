module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#DB2777", // Indigo
        secondary: "#FCA5A5", // Rose
        accent: "#10B981", // Green
      },
      animation: {
        "fade-in-up": "fadeInUp 0.5s ease-out",
      },
      boxShadow: {
        "3d-effect": "0px 10px 20px rgba(0, 0, 0, 0.3)",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};


