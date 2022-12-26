const defaultTheme = {
  shadows: [
    "none",
    "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
    "0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)",
    "0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)",
    "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
    "0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)",
    "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
    "0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)",
    "0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)",
    "0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)",
    "0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)",
    "0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)",
    "0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)",
    "0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)",
    "0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)",
    "0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)",
    "0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)",
    "0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)",
    "0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)",
    "0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)",
    "0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)",
    "0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)",
    "0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)",
    "0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)",
    "0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)",
  ],

  transitions: {
    easing: {
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
      easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
      easeIn: "cubic-bezier(0.4, 0, 1, 1)",
      sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
    },
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195,
    },
  },
  shape: {
    borderRadius: 4,
  },
  zIndex: {
    mobileStepper: 1000,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
  typography: {
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },

  size: {
    smallest: "275px", // 25em
    smaller: "500px", // 31.25em
    small: "600px", // 37.5em
    medium: "900px", // 56.25em
    large: "1300px", // 80em
    larger: "1462.5px", // 90em
    largest: "1500px", // 97em
  },
  mediaQueries: {
    smallest: "only screen and (max-width: 275px)",
    smaller: "only screen and (max-width: 500px)",
    small: "only screen and (max-width: 600px)",
    medium: "only screen and (max-width: 900px)",
    large: "only screen and (max-width: 1300px)",
    larger: "only screen and (max-width: 1462.5px)",
    largest: "only screen and (max-width: 1500px)",
  },
  custom: {
    layout: {
      appBarHeight: 56,
    },
  },
};

const dark = {
  imagefilter: "grayscale(0%)",
  checked:true,

  palettebackgrounddefault: "#303030",
  palettetextprimary: "#fff",
  palettetextsecondary: "rgba(255, 255, 255, 0.7)",
  palettetextdisabled: "rgba(255, 255, 255, 0.5)",
  palettedivider: "rgba(255, 255, 255, 0.12)",

  paletteactionactive: " #fff",
  paletteactionhover: "rgba(255, 255, 255, 0.08)",
  paletteactionhoveropacity: "0.08",
  paletteactionselected: "rgba(255, 255, 255, 0.16)",
  paletteactiondisabled: "rgba(255, 255, 255, 0.3)",
  paletteactiondisabledbackground: "rgba(255, 255, 255, 0.12)",

  palettebackgroundpaper: "#424242",

  paletteprimarymain: "#41ead4",
  paletteprimarymainrgb: "65, 234, 212",
  paletteprimarydark: "#2da394",
  paletteprimarylight: "#67eedc",
  /* --palette-primary-contrast-text: rgba(0, 0, 0, 0.87); */ /* at color schema */
  paletteprimarycontrasttext: "rgba(0, 0, 0, 0.87)" /* at MUI */,

  palettesecondarymain: "#ff206e",
  palettesecondarymainrgb: "255, 32, 110",
  palettesecondarydark: "#b2164d",
  palettesecondarylight: "#ff4c8b",
  palettesecondarycontrasttext: "white" /* at MUI */,
  buttontogglefirstchild: "gray",
  buttontogglelastchild: "#ffb74d",
  palettewarningmain: "#fbff12",
  palettewarningdark: "#afb20c",
  palettewarninglight: "#fbff41",
  palettewarningcontrasttext: "rgba(0, 0, 0, 0.87)" /* at MUI */,

  backgroundblendgradient:
    "linear-gradient(rgba(255, 255, 255, 0) 68%, rgb(48, 48, 48) 100%)",
};

const light = {
  checked:false,
  palettebackgrounddefault: "#fafafa",
  palettetextprimary: "rgba(0, 0, 0, 0.87)",
  palettetextsecondary: "rgba(0, 0, 0, 0.54)",
  palettetextdisabled: "rgba(0, 0, 0, 0.38)",
  palettedivider: "rgba(0, 0, 0, 0.12)",

  paletteactionactive: "rgba(0, 0, 0, 0.54)",
  paletteactionhover: "rgba(0, 0, 0, 0.04)",
  paletteactionhoveropacity: "0.04",
  paletteactionselected: "rgba(0, 0, 0, 0.08)",
  paletteactiondisabled: "rgba(0, 0, 0, 0.26)",
  paletteactiondisabledbackground: "rgba(0, 0, 0, 0.12)",
  buttontogglefirstchild: "#ffb74d",
  buttontogglelastchild: "gray",

  palettebackgroundpaper: "#fff",

  paletteprimarymain: "#14b8a2",
  paletteprimarymainrgb: "20, 184, 162",
  paletteprimarydark: "#0e8071",
  paletteprimarylight: " #43c6b4",
  /* --palette-primary-contrast-text: #fff; */ /* at color schema */
  paletteprimarycontrasttext: "rgba(0, 0, 0, 0.87)" /* at MUI */,

  palettesecondarymain: "#b80040",
  palettesecondarymainrgb: "184, 0, 64",
  palettesecondarydark: "#80002c",
  palettesecondarylight: "#c63366",
  palettesecondarycontrasttext: "#fff" /* at MUI */,

  palettewarningmain: "#b5b800",
  palettewarningdark: " #7e8000",
  palettewarninglight: "#c3c633",
  palettewarningcontrasttext: "rgba(0, 0, 0, 0.87)" /* at MUI */,

  backgroundblendgradient:
    "linear-gradient(rgba(255, 255, 255, 0) 68%, rgb(255, 255, 255) 100%)",
};

export const lightTheme = { ...defaultTheme, ...light };
export const darkTheme = { ...defaultTheme, ...dark };
