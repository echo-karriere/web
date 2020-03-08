export interface ThemeInterface {
  readonly size: { [key: string]: string };
  readonly color: { [key: string]: string };
  readonly screen: { [key: string]: string };
}

const theme = {
  size: {
    spacing: "24px",
    sm: "540px",
    md: "720px",
    lg: "960px",
    xl: "1200px"
  },
  brand: {
    color1: "#FCC000",
    color2: "#FED97A",
    color3: "#FFEBBC",
    color4: "#A7D0DA",
    color5: "#52AFBE",
    color6: "#049FB2",
    color7: "#0090A5",
    color8: "#008195"
  },
  color: {
    brandColor: "hsl(213, 66.8%, 43.7%)",
    brandColorDarkened: "hsl(213, 66.8%, 38%)",
    blue: "hsl(211, 100%, 50%)",
    textColor: "hsla(0, 0%, 0%, 0.8)",
    backgroundColor: "hsl(0, 0%, 99.2%)",
    grey: "hsl(0, 0%, 45.9%)",
    greyLightened: "hsl(0, 0%, 70%)"
  },
  screen: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px"
  }
};

export default theme;
