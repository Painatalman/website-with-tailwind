const ratioWidths = {
  "5%": "5%",
  "1/4": "25%",
  half: "50%",
  "7/12": "calc(100% * 7 / 12)",
  "2/3": "calc(100% * 2 / 3)",
  "5/6": "calc(100% * 5 / 6)",
  full: "100%",
  "3/2": "150%",
};

// tailwind.config.js
module.exports = {
  purge: ["_includes/*.liquid"],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    },
    colors: {
      white: "white",
      "light-gray": "#e6e6e6",
      gray: "#7c7c7c",
      "dark-gray": "#3c3c3c",
      red: "#db0c00",
      black: "black",
      transparent: "transparent",
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
    },
    fontSize: {
      sm: "1rem",
      base: "1.25rem",
      lg: "1.875rem",
      xl: "2.75rem",
    },
    spacing: {
      0: 0,
      px: "1px",
      "col-gap": "30px",
      "col-gap-half": "15px",
      1: "3.75rem",
      2: "7.5rem",
      "40px": "40px",
      "100px": "100px",
      // to render squares
      ...ratioWidths,
    },
    extend: {
      maxWidth: {
        ...ratioWidths,
        "logo-size-header": "150px",
        "logo-size-footer": "100px",
      },
      width: {
        auto: "auto",
      },
    },
  },
};
