import styled, { css, keyframes } from "styled-components";

// Keyframes for showing the element
const showAnimation = keyframes`
  from {
    width: 0;
    opacity: 0;
    display: none;
  }
  to {
    width: 25%;
    opacity: 1;
    display: block;
  }
`;

// Keyframes for hiding the element
const hideAnimation = keyframes`
  from {
    width: 25%;
    opacity: 1;
    display: block;
  }
  to {
    width: 0;
    opacity: 0;
    display: none;
  }
`;

export const StyledOrderDetailsWrapper = styled.div<{ showinfo: 1 | 0 }>`
  ${({ showinfo }) =>
    showinfo === 1
      ? css`
          animation: ${showAnimation} 0.3s;
          width: 25%;
        `
      : css`
          animation: ${hideAnimation} 0.1s forwards;
          animation-delay: 1s;
        `};

  height: 100%;
  overflow: hidden;
`;

export const StyledOrderPageWrapper = styled.div`
  background-color: ${({ theme }) => theme.palette.colors.backgrounds.white};
  display: flex;
  gap: ${({ theme }) => theme.spaces.xl};
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export const StyledOrderPageContent = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 95%;
  overflow: hidden;
  flex-direction: column;
  padding: ${({ theme }) => theme.spaces.xl};
  gap: ${({ theme }) => theme.spaces.l};
`;

export const StyledOrderPageTitle = styled.h2`
  text-align: left;
  color: ${({ theme }) => theme.palette.colors.texts.primary};
  font-size: ${({ theme }) => theme.fonts.sizes.subtitle};
  margin: 0;
`;
export const StyledOrderPageSubtitle = styled.h4`
  font-size: ${({ theme }) => theme.fonts.sizes.text};
  font-weight: 300;
  text-align: left;
  color: ${({ theme }) => theme.palette.colors.texts.primary};
  margin: 0;
`;

export const StyledInputsWrapper = styled.div`
  display: flex;
  gap: 125px;
  align-items: center;
  justify-content: left;
`;

export const StyledTableAndInfoWrapper = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
`;
export const StyledTableWrapper = styled.div<{ showinfo: 1 | 0 }>`
  width: ${({ showinfo }) => (showinfo === 1 ? "75%" : "100%")};
  height: 100%;
  transition: all 0.3s;
`;

export const StyledInfoWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spaces.s};
  align-items: center;
  color: ${({ theme }) => theme.palette.colors.texts.primary};
`;

export const StyledSortWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const StyledSortLabel = styled.label`
  font-size: ${({ theme }) => theme.fonts.sizes.text};
  color: ${({ theme }) => theme.palette.colors.texts.primary};
  font-weight: 500;
  padding-left: 4px;
`;
