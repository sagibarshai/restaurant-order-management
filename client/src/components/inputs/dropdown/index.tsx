import { IconDropdownArrow } from "../../../icons";
import { StyledDropdown, StyledDropdownTitle, StyledDropdownWrapper, StyledIconWrapper, StyledOption } from "./styled";

interface DropdownProps {
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label?: string; backgroundColor?: string }[];
  label?: string;
  backgroundColor?: string;
}

const AppDropdown: React.FC<DropdownProps> = ({ value, onChange, options, label = "", backgroundColor }) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  return (
    <StyledDropdownWrapper>
      <StyledDropdownTitle>{label}</StyledDropdownTitle>
      <StyledDropdown value={value} onChange={handleChange} backgroundColor={backgroundColor}>
        {options.map(({ value, label, backgroundColor }) => (
          <StyledOption key={value} value={value} optionBackgroundColor={backgroundColor}>
            {label ? label : ""}
          </StyledOption>
        ))}
      </StyledDropdown>
      <StyledIconWrapper>
        <IconDropdownArrow color="black" size="24" />
      </StyledIconWrapper>
    </StyledDropdownWrapper>
  );
};

export default AppDropdown;
