import { Link, useLoaderData } from "react-router-dom";

const artworkDetail = () => {
    return (
        <div>
            <Link to="/" className="back__button">&#8606;Back</Link>
            <h1>Artwork detail</h1>
            <p>Artwork detail</p>
            <dl>
                <dt>Creator</dt>
                <dd>Creator</dd>
            </dl>
            <button className="back__button">Like&#9825;</button>
        </div>
    )
};


export default artworkDetail;