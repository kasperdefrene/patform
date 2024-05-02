const Creator = ({value, onValueChange, name}) => {

    return (
        <input className="control__name"
            type="text" 
            value={value} 
            onChange={(e) => onValueChange(e.target.value)}
            name={name}
        />
    );     
};

export default Creator;


