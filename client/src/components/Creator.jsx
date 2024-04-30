const Creator = ({value, onValueChange}) => {

    return (
        <input 
            type="text" 
            value={value} 
            onChange={(e) => onValueChange(e.target.value)}
            />
    );     
};

export default Creator;


