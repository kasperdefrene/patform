import { Link, redirect, useFetcher, useLoaderData } from "react-router-dom";
import { getAuthData, getMe } from "../../services/auth";
import ArtworkCard from "../../components/ArtworkCard";
import "../../styles/style.css";

const loader = async ({ request }) => {
  const { user } = getAuthData();
  if (!user) {
    let params = new URLSearchParams();
    params.set("from", new URL(request.url).pathname);
    return redirect("/auth/login?" + params.toString());
  }

  const profile = await getMe();
  return { profile };
};

const Profile = () => {
  const { profile } = useLoaderData();
  const fetcher = useFetcher();
  let isLoggingOut = fetcher.formData != null;

  return (
    <>
      <div classname="profile">
          <div className="profile__information">
              <h2>About Me</h2>
              <dl>
                <dt>name</dt>
                <dd>{profile.username}</dd>
                <dt>email</dt>
                <dd>{profile.email}</dd>
                <dt>Authentication</dt>
                <dd>
                  <fetcher.Form method="post" action="/auth/logout">
                    <button type="submit" disabled={isLoggingOut}>
                      {isLoggingOut ? "Signing out..." : "Sign out"}
                    </button>
                  </fetcher.Form>
                </dd>
              </dl>
          </div>
          <section>
            <h3>My Work</h3>
            <ul>
              {profile.artworks.map((artwork) => (
                <li key={artwork.id}>
                  <Link to={`/artwork/detail/${artwork.id}`}>
                        <ArtworkCard artwork={artwork} />
                  </Link>
                </li>
              ))}
            </ul>
          </section>
      </div>
    </>
  );
};

Profile.loader = loader;

export default Profile;
