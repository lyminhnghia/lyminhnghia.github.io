import styled from "styled-components";
import { ThemeType } from "contexts";

export type OverrideStyle = {
  mode?: ThemeType;
  color?: string;
};

export const StyledButtonThemes = styled.button(
  ({ mode }: OverrideStyle) => `
  cursor: pointer;
  height: 45px;
  width: 45px;
  margin-right: 5px;
  margin-left: 15px;
  padding-top: 5px;
  border-radius: 50%;
  border: none;
  align-items: center;
  justify-content: center;
  background-color: ${mode === ThemeType.LIGHT ? "#7CD1F7" : "#292C3F"};
  outline: none;
  transition: all 0.2s ease-in-out;
  :hover {
    box-shadow: 0 3px 8px ${mode === ThemeType.LIGHT ? "#F7D774" : "#646464"};
  };
`
);
