import { StyledDropdown, StyledDropdownTitle, StyledDropdownWrapper } from "./styled";

interface DropdownProps {
  value: string;
  onChange: (value: string) => void;
  options: string[];
  label?: string;
}

const AppDropdown: React.FC<DropdownProps> = ({ value, onChange, options, label = "" }) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  return (
    <StyledDropdownWrapper>
      <StyledDropdownTitle>{label}</StyledDropdownTitle>
      <StyledDropdown value={value} onChange={handleChange}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </StyledDropdown>
    </StyledDropdownWrapper>
  );
};

export default AppDropdown;
