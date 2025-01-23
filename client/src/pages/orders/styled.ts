import styled from "styled-components";

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

export const StyledOrderDetailsWrapper = styled.div`
  width: 25%;
  height: 100%;
`;
export const StyledInfoWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spaces.s};
  align-items: center;
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
