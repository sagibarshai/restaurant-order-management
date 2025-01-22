import styled from "styled-components";

export const StyledDropdownWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const StyledDropdown = styled.select`
  width: 100%;
  height: 100%;
  padding: 8px;
  font-size: 14px;
  border: 1px solid ${({ theme }) => theme.palette.colors.texts.primary};
  background-color: ${({ theme }) => theme.palette.colors.backgrounds.aqua};
  appearance: none;
  font-weight: bold;
`;
