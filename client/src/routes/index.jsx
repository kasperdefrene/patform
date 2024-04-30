import { Link } from "react-router-dom";
import "../styles/style.css";
import ArtworkCard from "../components/ArtworkCard";

const Index = () => {
    return (
        <div>
            <p className="header__info">An art generator by Kasper De Frene</p>
            <h1 className="header__title">Let's <Link to="/artwork/create" className="nav__element" id="underline">build</Link> &#9874; some &#9732; space together &#9883;</h1>
            <p className="header__info">Newest works below</p>
            <ul>
                <li>
                    <Link>
                        <ArtworkCard />
                    </Link>
                </li>
            </ul>
        </div>
    );
};


export default Index;