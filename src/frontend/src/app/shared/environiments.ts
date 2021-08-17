export type GlobalTheme = {
  primary: string;
  secundary: string;
  hightLight: string;
  shadow: string;
  dark: string;
  borderRadius: string;
  fontColor: string;
};

export type ThemeProps = {
  theme: GlobalTheme;
};

export const theme: GlobalTheme = {
  primary: "#8f3d8f",
  secundary: "#723172",
  hightLight: "#FFF",
  shadow: "0px 10px 20px -5px rgba(0, 0, 0, 0.46)",
  dark: "#222",
  borderRadius: "5px",
  fontColor: "#222",
};
