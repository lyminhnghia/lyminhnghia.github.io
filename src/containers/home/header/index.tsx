import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";
import { FadeInSection } from "components";
import { ThemeType, useThemes } from "contexts";
import { StyledButtonThemes } from "./style";

const Header = () => {
  const { themes, onChangeThemeMode } = useThemes();

  return (
    <FadeInSection>
      <StyledButtonThemes
        mode={themes.name}
        onClick={() =>
          onChangeThemeMode(
            themes.name === ThemeType.DARK ? ThemeType.LIGHT : ThemeType.DARK
          )
        }
      >
        {themes.name === ThemeType.DARK ? (
          <HiMoon strokeWidth={1} size={20} color="#F9D784" />
        ) : (
          <CgSun strokeWidth={1} size={20} color="#A7A7A7" />
        )}
      </StyledButtonThemes>
    </FadeInSection>
  );
};

export default Header;
