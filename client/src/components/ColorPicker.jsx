const ColorPicker = ({onValueChange, name}) => {
    return(
        <div>
            <input 
            type="color"
            onChange={(e) => onValueChange(e.target.value)}
            name={name}
            />
        </div>
    );
};

export default ColorPicker;