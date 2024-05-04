const Checkbox = ({ label, onValueChange, isChecked, name }) => {
    return (
      <label>
        <input
          type="checkbox"
          id={label}
          checked={isChecked}
          onChange={(e) => onValueChange(e.target.checked)}
          name={name}
        />
        <span htmlFor={label}>{label}</span>
      </label>
    );
  };
  
  export default Checkbox;
  