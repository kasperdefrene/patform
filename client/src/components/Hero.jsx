import { Link } from "react-router-dom";
import "../styles/style.css";

const Hero = () => {
    return (
        <div className="navbar">
            <Link to="/" className="nav__element">
                <p>Home</p>
            </Link>
            <Link to="/artwork/create" className="nav__element">New Artwork</Link>
            <Link to="/artwork/my-artworks" className="nav__element">My Artworks</Link>
            <Link to="/auth/login" className="nav__element">Login</Link>
        </div>
    );
};

export default Hero;