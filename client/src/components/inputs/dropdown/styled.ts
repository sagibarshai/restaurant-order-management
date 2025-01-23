import styled from "styled-components";

export const StyledDropdownWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: ${({ theme }) => theme.spaces.m};
  align-items: center;
  position: relative;
`;

export const StyledDropdown = styled.select<{ backgroundColor?: string }>`
  width: 100%;
  height: 100%;
  padding: 8px;
  font-size: ${({ theme }) => theme.fonts.sizes.text};
  border: 1px solid ${({ theme }) => theme.palette.colors.texts.primary};
  background-color: ${({ backgroundColor, theme }) => backgroundColor || theme.palette.colors.backgrounds.aqua};
  appearance: none;
  font-weight: bold;
  border-radius: 24px;
  border: none;
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
  top: 50%;
  right: 8px;
  transform: translateY(-50%);
  pointer-events: none;
`;

export const StyledOption = styled.option<{ optionBackgroundColor?: string }>`
  background-color: ${({ optionBackgroundColor }) => optionBackgroundColor || "transparent"};
`;
