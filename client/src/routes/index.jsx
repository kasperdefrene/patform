import { useLoaderData, Link } from "react-router-dom";
import "../styles/style.css";
import ArtworkCard from "../components/ArtworkCard";
import { getArtworks } from "../services/artwork";

const loader = async () => {
    const artworks = await getArtworks();
    return { artworks };
  };

const Index = () => {
    const { artworks } = useLoaderData();
    return (
        <div>
            <p className="header__info">An art generator by Kasper De Frene</p>
            <h1 className="header__title">Let's <Link to="/artwork/create" className="nav__element" id="underline">build</Link> &#9874; some &#9732; space together &#9883;</h1>
            <p className="header__info">Newest works below</p>
            <ul>
                {artworks.map((artwork) => (
                    <li key={artwork.id}>
                        <Link to={`/artwork/detail/${artwork.id}`}>
                            <ArtworkCard artwork={artwork} />
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

Index.loader = loader;
export default Index;