import { IconDropdownArrow } from "../../../icons";
import { StyledDropdown, StyledDropdownTitle, StyledDropdownWrapper, StyledIconWrapper, StyledOption } from "./styled";

interface DropdownProps {
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label?: string; backgroundColor?: string }[];
  backgroundColor?: string;
}

const AppDropdown: React.FC<DropdownProps> = ({ value, onChange, options, backgroundColor }) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  return (
    <StyledDropdownWrapper>
      <StyledDropdown value={value} onChange={handleChange} backgroundcolor={backgroundColor}>
        {options.map(({ value, label, backgroundColor }) => (
          <StyledOption key={value} value={value} optionbackgroundcolor={backgroundColor}>
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
