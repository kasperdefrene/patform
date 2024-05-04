const Slider = ({ onValueChange, value, max, min, label, name}) => {
    return (
      <label>
        <span>{label}</span>
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={(e) => onValueChange(parseInt(e.target.value, 10))}
          name={name}
        />
        <span>{value}</span>
      </label>
    );
  };
  
  export default Slider;