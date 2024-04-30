import "../styles/style.css"

const ArtworkCard = () => {
    return (
    <div className="card__container">
        <img src="https://via.placeholder.com/150" alt="placeholder" className="card__image"/>
        <p>Artwork Card</p>
        <p>Maker</p>
    </div>
    );
};

export default ArtworkCard;