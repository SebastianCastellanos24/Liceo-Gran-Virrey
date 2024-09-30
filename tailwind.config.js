module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#013860",
        secundary: "#ce000c",
        normal: "#8d99ae",
        border: "#DBDBDB"
      },
      backgroundImage: {
        Hero: "url('assets/Hero.jpg')",
      },
      fontFamily: {
        sans: ['Branding', 'sans-serif'], // Cambia la fuente predeterminada sans a Branding
      },
      keyframes: {
        slideLeftRight: {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(20px)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        slideLeftRight: 'slideLeftRight 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
