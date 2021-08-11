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
  primary: "#1396d2",
  secundary: "#d25313",
  hightLight: "#F9F9F9",
  shadow: "0px 0px 10px -3px rgba(0, 0, 0, 0.36)",
  dark: "#222",
  borderRadius: "5px",
  fontColor: "",
};
