const Creator = ({value, onValueChange}) => {

    return (
        <input className="control__name"
            type="text" 
            value={value} 
            onChange={(e) => onValueChange(e.target.value)}
            />
    );     
};

export default Creator;


