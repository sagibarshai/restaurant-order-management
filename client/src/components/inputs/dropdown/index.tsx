import { StyledDropdown, StyledDropdownWrapper } from "./styled";

interface DropdownProps {
  value: string;
  onChange: (value: string) => void;
  options: string[];
}

const AppDropdown: React.FC<DropdownProps> = ({ value, onChange, options }) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  return (
    <StyledDropdownWrapper>
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
