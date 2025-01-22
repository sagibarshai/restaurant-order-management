import styled from "styled-components";

export const StyledInputWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 6fr 1fr;
  height: 80px;
  width: 300px;
`;

export const StyledLabel = styled.label`
  text-align: left;
  font-size: ${({ theme }) => theme.fonts.sizes.text};
  color: ${({ theme }) => theme.palette.colors.texts.primary};
  font-weight: 500;
  text-indent: 4px;
`;

export const StyledInputIconWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const StyledIconWrapper = styled.div`
  position: absolute;
  top: 55%;
  right: -24px;
  transform: translateY(-50%);
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 45px;
  background-color: ${({ theme }) => theme.palette.colors.backgrounds.white};
  text-align: left;
  font-size: ${({ theme }) => theme.fonts.sizes.text};
  color: ${({ theme }) => theme.palette.colors.texts.primary};
  font-weight: 500;
  &::placeholder {
    font-weight: 300;
  }
  border: 1px solid lightgray;
  border-radius: 6px;
  padding-right: 32px;
  text-indent: 4px;
`;

export const StyledInputError = styled.span`
  color: ${({ theme }) => theme.palette.colors.texts.error};
  font-size: ${({ theme }) => theme.fonts.sizes.text};
  font-weight: 500;
`;
