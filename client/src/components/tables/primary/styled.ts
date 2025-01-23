import styled from "styled-components";

export const StyledTableBody = styled.tbody`
  display: block;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
`;

export const StyledTable = styled.table`
  width: 100%;
  height: 100%;

  border-collapse: collapse;
`;

export const StyledTableHeaderRow = styled.tr`
  display: table;
  display: flex;
  width: 100%;
  background-color: ${({ theme }) => theme.palette.colors.backgrounds.pink};
`;

export const StyledTableHead = styled.th`
  padding: ${({ theme }) => theme.spaces.m};
  text-align: left;
  width: 100%;
`;

export const StyledTableRow = styled.tr<{ isOdd: boolean; isSelected: boolean }>`
  display: table;
  width: 100%;
  table-layout: fixed;
  overflow: hidden;
  background-color: ${({ theme, isOdd }) => (isOdd ? theme.palette.colors.backgrounds.lightGray : "")};
  border: ${({ isSelected, theme }) => (isSelected ? `3px solid ${theme.palette.colors.backgrounds.pink}` : "")};
  cursor: pointer;
`;

export const StyledTd = styled.td`
  color: ${({ theme }) => theme.palette.colors.texts.primary};
  font-size: ${({ theme }) => theme.fonts.sizes.text};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: ${({ theme }) => theme.spaces.m};
`;
