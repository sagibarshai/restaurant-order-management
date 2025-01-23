import styled from "styled-components";

export const StyledOrderDetailsWrapper = styled.div`
  width: calc(100% - 40px);
  height: calc(100% - 40px);
  max-height: calc(100% - 40px);
  padding: 20px;
  background-color: #f9f9f9;
  overflow: hidden;
  overflow-y: auto;
`;

export const StyledKeyValueRow = styled.div`
  display: flex;
  /* justify-content: space-between; */
  gap: ${({ theme }) => theme.spaces.l};
  margin: 10px 0;
  font-size: 16px;

  strong {
    font-weight: bold;
  }
`;

export const StyledCloseButton = styled.button`
  font-size: 14px;
  justify-self: end;
  background-color: black;
  color: white;
  border: none;
  justify-content: center;
  align-items: center;
  display: flex;
  border-radius: 50%;
  cursor: pointer;
  height: 36px;
  width: 36px;
  align-self: end;
`;
