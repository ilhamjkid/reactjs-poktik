module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          md: "2rem",
          lg: "8rem",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#0D6EFD",
        light: "#F8F9FA",
      },
      backgroundImage: {
        glass: "linear-gradient(135deg, #ffffff33 0%, #ffffff1a 100%)",
        dark: "linear-gradient(135deg, #1B2E41 0%, #010810 50%, #1E242B 100%)",
      },
      borderRadius: {
        "30px": "30px",
        "40px": "40px",
        "50px": "50px",
        "60px": "60px",
      },
    },
  },
  plugins: [],
};
