import { Link, useLoaderData } from "react-router-dom";
import { getArtwork } from "../services/artwork";

const loader = async ({params}) => {
    const id = params.id;
    const artwork = await getArtwork(id);
    return {artwork};
};


const artworkDetail = () => {
    const {artwork} = useLoaderData();
    return (
        <div>
            <Link to="/" className="back__button">&#8606;Back</Link>
            <h1>{artwork.title}</h1>
            <dl>
                <dt>Creator</dt>
                <dd>Creator</dd>
            </dl>
            <button className="back__button">Like&#9825;</button>
        </div>
    )
};

artworkDetail.loader = loader;

export default artworkDetail;