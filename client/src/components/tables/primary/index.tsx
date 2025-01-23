import { StyledTable, StyledTableBody, StyledTableHead, StyledTableHeaderRow, StyledTableRow, StyledTd } from "./styled";

interface CustomCell<T extends { id: number }> {
  cellText: string | number | boolean;
  onClick?: (payload: T) => void;
  element?: JSX.Element;
  payload?: T;
}

export interface AppTableProps<T extends { id: number }> {
  tableData: {
    head: string;
    children: CustomCell<T>[];
  }[];
  selectedId?: number;
}

const AppPrimaryTable = <T extends { id: number }>({ tableData, selectedId }: AppTableProps<T>) => {
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
        {tableData[0].children.map((item, rowIndex) => (
          <StyledTableRow
            isselected={item.payload?.id === selectedId ? 1 : 0}
            isodd={rowIndex % 2 !== 0 ? 1 : 0}
            key={rowIndex}
            onClick={() => {
              item.onClick ? item.onClick(item.payload as T) : () => {};
            }}
          >
            {tableData.map((col) => (
              <StyledTd
                key={`${col.head}-${rowIndex}`}
                onClick={(e) => {
                  if (col.children[rowIndex]?.element) e.stopPropagation();
                }}
              >
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
