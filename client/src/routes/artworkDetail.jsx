import { Link, useLoaderData, Form } from "react-router-dom";
import { getArtworkById } from "../services/artwork";

const loader = async ({ params }) => {
    const id = params.id;
    const artwork = await getArtworkById(id);
    return { artwork };
};

const artworkDetail = () => {
    const {artwork} = useLoaderData();
    return (
        <div className="detail__container">
            <div>
                <Link to="/" className="back__button">&#8606;Back</Link>
                <h1>{artwork.title}</h1>
                <dl>
                    <dt>Created by</dt>
                    <dd>
                        <Link to={`/user/${artwork.owner.data.id}`}>
                            {artwork.owner.data.attributes.username}
                        </Link>
                    </dd>
                </dl>
                <button className="back__button">Like&#9825;</button>
            </div>
            <div className='canvas' style={{ backgroundColor: `${artwork.backgroundColor}` }}>
                <svg viewBox="0 0 118 255" className="artwork__detail">
                    {/* {showStars && stars()} */}

                    <defs>
                        <circle id="sun" cx="250" cy="250" r={artwork.size}></circle>

                        <linearGradient id="myGradient" gradientTransform={`rotate(${artwork.gradientRotation})`}>
                            <stop offset={`${artwork.gradientOffsetOne}%`} stopColor={artwork.gradientColorOne} />
                            <stop offset={`${artwork.gradientOffsetTwo}%`} stopColor={artwork.gradientColorTwo} />
                        </linearGradient>
                    </defs>

                    <use x="0" y="0" href="#sun" fill="url('#myGradient')" />

                    <svg x={artwork.xPosition} y={artwork.yPosition} width="50" height="50" viewBox="0 0 642 642" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_81_2)">
                            <path d="M641.5 320.75C641.5 363.25 633.23 403.82 618.22 440.94C570.66 558.54 455.4 641.5 320.75 641.5C275.47 641.5 232.37 632.12 193.31 615.18C79.57 565.89 0 452.61 0 320.75C0 259.02 17.44 201.37 47.66 152.44C73.4 110.75 108.43 75.4 149.86 49.27C199.34 18.06 257.94 0 320.75 0C341.89 0 362.55 2.05 382.55 5.95H382.56C439.88 17.14 491.74 43.59 533.74 80.91C599.85 139.67 641.5 225.34 641.5 320.75Z" fill="#05A8A8"/>
                            <path d="M533.74 80.91C533.41 85.86 532.45 90.8 530.78 95.62C520.57 125.07 487.06 141.94 455.94 140.13C434.23 138.86 411.67 130.28 391.46 138.33C370.91 146.51 359.85 172.89 368.42 193.29C373.87 206.26 385.33 215.5 394.96 225.76C423.6 256.23 437.5 302.69 421.76 341.43C406.03 380.17 356.49 404.14 319.1 385.4C305.33 378.49 286.81 367.51 277.27 379.61C273.15 384.83 273.44 392.13 273.52 398.78C273.76 419.58 265.79 444.9 245.32 448.61C222.61 452.72 206.39 427.27 199.39 405.27C194.83 390.93 191.57 374.05 200.35 361.83C211.11 346.86 233.35 347.3 249.42 338.28C273.38 324.83 278.26 286.93 258.49 267.85C238.72 248.77 201.02 255 188.43 279.41C181.25 293.35 180.47 312.22 166.96 320.18C159.29 324.7 149.69 324.05 140.93 322.48C121.61 319.02 99.74 307.58 98.93 287.97C98.36 274.15 108.68 262.61 114.21 249.93C138.04 195.2 84.18 179.44 47.66 152.44C73.4 110.75 108.43 75.4 149.86 49.27C162.05 49.82 172.68 50.5099 180.39 50.7099C218.76 51.6999 257.34 46.9799 294.14 36.07C324 27.2299 352.61 14.36 382.55 5.94995H382.56C439.88 17.14 491.74 43.59 533.74 80.91Z" fill="#20BC72"/>
                            <path d="M618.22 440.94C570.66 558.54 455.4 641.5 320.75 641.5C275.47 641.5 232.37 632.12 193.31 615.18C219.03 605.35 256.33 603.19 277.05 598.97C321.83 589.84 369.42 574.92 395.97 537.73C408.56 520.09 415.96 497.98 433.36 485.06C459.77 465.46 501.31 473.11 523.82 449.13C536.74 435.37 539.3 415.12 541.07 396.32C542.84 377.52 545.04 357.32 557.55 343.17C570.05 329.02 596.81 326.49 605.84 343.07C615.16 360.19 599.52 380.36 599.47 399.85C599.43 415.29 608.93 428.04 618.22 440.94Z" fill="#20BC72"/>
                        </g>
                    </svg>

                    <rect x="37.5" y="7" width="40" height="12" rx="6" ry="25" fill="black" />

                    <line x1="20" y1="250" x2="95" y2="250" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <h3 className='maker'>Swipe up to {artwork.slogan}</h3>
            </div>
            <Form
                method="post"
                action="destroy"
                onSubmit={(event) => {
                if (!confirm("Please confirm you want to delete this record.")) {
                    event.preventDefault();
                }
                }}
            >
                <button type="submit" className="back__button">Delete</button>
          </Form>
          <Form action="edit">
            <button type="submit" className="back__button">Edit</button>
          </Form>
        </div>
    )
};

artworkDetail.loader = loader;

export default artworkDetail;