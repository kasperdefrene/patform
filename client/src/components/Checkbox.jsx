const Checkbox = ({ label, onValueChange, isChecked }) => {
    return (
      <label>
        <input
          type="checkbox"
          id={label}
          checked={isChecked}
          onChange={(e) => onValueChange(e.target.checked)}
        />
        <span htmlFor={label}>{label}</span>
      </label>
    );
  };
  
  export default Checkbox;
  