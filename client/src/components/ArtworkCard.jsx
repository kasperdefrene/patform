import "../styles/style.css"

const ArtworkCard = ({artwork}) => {
    return (
    <div className="card__container">
        <img src="https://via.placeholder.com/150" alt="placeholder" className="card__image"/>
        <p>{artwork.title}</p>
        <p>Maker</p>
    </div>
    );
};

export default ArtworkCard;