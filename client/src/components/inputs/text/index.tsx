import { StyledIconWrapper, StyledInput, StyledInputError, StyledInputIconWrapper, StyledInputWrapper, StyledLabel } from "./styled";

export interface InputProps {
  staticsProps: {
    label: string;
    placeholder: string;
    onChange: (value: string) => void;
    errorMessage?: string;
    icon?: JSX.Element;
  };
  stateProps: {
    value: string;
    isValid?: boolean;
    displayError?: boolean;
  };
}

const AppTextInput: React.FC<InputProps> = ({ stateProps, staticsProps }) => {
  const { value, isValid, displayError } = stateProps;
  const { label, onChange, placeholder, errorMessage, icon } = staticsProps;
  return (
    <StyledInputWrapper>
      <StyledLabel>{label}</StyledLabel>
      <StyledInputIconWrapper>
        <StyledInput value={value} placeholder={placeholder} onChange={(e) => onChange(e.target.value)} />
        {icon ? <StyledIconWrapper>{icon}</StyledIconWrapper> : null}
      </StyledInputIconWrapper>
      {!isValid && displayError ? <StyledInputError>{!isValid ? errorMessage : "a"}</StyledInputError> : ""}
    </StyledInputWrapper>
  );
};
export default AppTextInput;
