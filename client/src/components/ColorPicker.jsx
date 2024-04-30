const ColorPicker = ({onValueChange}) => {
    return(
        <div>
            <input 
            type="color"
            onChange={(e) => onValueChange(e.target.value)}
            />
        </div>
    );
};

export default ColorPicker;