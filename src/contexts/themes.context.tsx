import React, { useContext, useEffect, useState } from "react";

export enum ThemeType {
  LIGHT = "light",
  DARK = "dark",
}

export type DefaultThemeValue = {
  name: ThemeType;
  body: string;
  text: string;
  dark: string;
  secondaryText: string;
  accentColor: string;
  accentBright: string;
  projectCard: string;
  skinColor: string;
  skinColor2: string;
  imageDark: string;
  imageClothes: string;
  avatarMisc: string;
  avatarShoes: string;
};

const lightTheme: DefaultThemeValue = {
  name: ThemeType.LIGHT,
  body: "#FFFFFF",
  text: "#343434",
  dark: "#000000",
  secondaryText: "#7F8DAA",
  accentColor: "#E3405F",
  accentBright: "#FC1056",
  projectCard: "#DCE4F2",
  skinColor: "#F7B799",
  skinColor2: "#FCB696",
  imageDark: "#dce4f2",
  imageClothes: "#dce4f2",
  avatarMisc: "#e9ecf2",
  avatarShoes: "#ccd2e3",
};

const darkTheme: DefaultThemeValue = {
  name: ThemeType.DARK,
  body: "#1D1D1D",
  text: "#FFFFFF",
  dark: "#000000",
  secondaryText: "#8D8D8D",
  accentColor: "#E3405F",
  accentBright: "#FC1056",
  projectCard: "#292A2D",
  skinColor: "#F7B799",
  skinColor2: "#FCB696",
  imageDark: "#292A2D",
  imageClothes: "#000000",
  avatarMisc: "#212121",
  avatarShoes: "#2B2B2B",
};

interface ThemesContextProviderProps {
  children: React.ReactNode;
}

export type ThemesType = {
  themes: DefaultThemeValue;
  onChangeThemeMode: (mode: ThemeType) => void;
};

export const defaultThemeType: ThemesType = {
  themes: darkTheme,
  onChangeThemeMode: () => {},
};

const ThemesContext = React.createContext<ThemesType>(defaultThemeType);

export const ThemesProvider: React.FC<ThemesContextProviderProps> = ({
  children,
}: ThemesContextProviderProps) => {
  const [themes, setThemes] = useState<DefaultThemeValue>(darkTheme);

  const onChangeThemeMode = (mode: ThemeType) => {
    localStorage.setItem("theme", mode);
    setThemes(mode === ThemeType.LIGHT ? lightTheme : darkTheme);
  };

  useEffect(() => {
    if (localStorage.getItem("theme")) {
      onChangeThemeMode(
        (localStorage.getItem("theme") as ThemeType) || ThemeType.DARK
      );
    }
  }, []);

  return (
    <ThemesContext.Provider
      value={{
        themes,
        onChangeThemeMode,
      }}
    >
      {children}
    </ThemesContext.Provider>
  );
};

export const useThemes = () => {
  return useContext(ThemesContext);
};
