import styled, { css } from "styled-components";

export const StyledDropdownWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: ${({ theme }) => theme.spaces.s};
  align-items: center;
  position: relative;
`;

export const StyledDropdown = styled.select<{ backgroundcolor?: string }>`
  width: 100%;
  height: 100%;
  padding: 8px;
  font-size: ${({ theme }) => theme.fonts.sizes.text};
  border: none;
  ${({ theme, backgroundcolor }) =>
    backgroundcolor
      ? css`
          background-color: ${backgroundcolor};
        `
      : css`
          background-color: none;
          border: 2px solid ${theme.palette.colors.backgrounds.aqua};
        `}

  appearance: none;

  border-radius: 24px;
  cursor: pointer;
  padding-right: 30px;
  position: relative;
`;

export const StyledDropdownTitle = styled.span`
  font-size: ${({ theme }) => theme.fonts.sizes.text};
  color: ${({ theme }) => theme.palette.colors.texts.primary};
`;

export const StyledIconWrapper = styled.div`
  position: absolute;
  top: 55%;
  right: 8px;
  transform: translateY(-50%);
  pointer-events: none;
`;

export const StyledOption = styled.option<{ optionbackgroundcolor?: string }>`
  background-color: ${({ optionbackgroundcolor }) => optionbackgroundcolor || "transparent"};
`;
