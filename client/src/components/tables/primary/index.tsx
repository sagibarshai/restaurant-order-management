import styled, { css } from "styled-components";
import { StyledTable, StyledTableBody, StyledTableHead, StyledTableHeaderRow, StyledTableRow, StyledTd } from "./styled";

interface CustomCell {
  cellText: string | number | boolean;
  onClick?: (index: number) => void;
  element?: JSX.Element;
}

export interface AppTableProps {
  tableData: {
    head: string;
    children: CustomCell[];
  }[];
}

const AppPrimaryTable: React.FC<AppTableProps> = ({ tableData }) => {
  return (
    <StyledTable>
      <thead>
        <StyledTableHeaderRow>
          {tableData.map((row) => (
            <StyledTableHead key={row.head}>{row.head}</StyledTableHead>
          ))}
        </StyledTableHeaderRow>
      </thead>
      <StyledTableBody>
        {tableData[0].children.map((_, rowIndex) => (
          <StyledTableRow isOdd={rowIndex % 2 !== 0} key={rowIndex}>
            {tableData.map((col) => (
              <StyledTd key={`${col.head}-${rowIndex}`}>
                {col.children[rowIndex]?.element ? col.children[rowIndex]?.element : col.children[rowIndex]?.cellText}
              </StyledTd>
            ))}
          </StyledTableRow>
        ))}
      </StyledTableBody>
    </StyledTable>
  );
};

export default AppPrimaryTable;
